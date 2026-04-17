function normalizeReleaseDate(rawValue) {
  if (!rawValue) {
    return null;
  }

  if (/^\d{4}-\d{2}$/.test(rawValue)) {
    return `${rawValue}-01`;
  }

  return rawValue;
}

function isReleaseNewSince(lastVisitAt, releaseDate) {
  if (!lastVisitAt || !releaseDate) {
    return false;
  }

  const lastVisitTime = Date.parse(lastVisitAt);
  const releaseTime = Date.parse(normalizeReleaseDate(releaseDate));
  return !Number.isNaN(lastVisitTime) && !Number.isNaN(releaseTime) && releaseTime > lastVisitTime;
}

function inferAffectedLane(release) {
  const releaseText = [
    release.title,
    release.summary,
    release.overview,
    ...(release.confirmed ?? []),
    ...(release.prep ?? [])
  ]
    .join(" ")
    .toLowerCase();

  if (/(quest|expedition|project|trader|trial|feat)/.test(releaseText)) {
    return {
      moduleLabel: "Quest Operations",
      target: "#quest-ops",
      modeId: "prep-my-run",
      modeLabel: "Prep My Run"
    };
  }

  if (/(material|loot|cache|workshop|scrappy|bird city)/.test(releaseText)) {
    return {
      moduleLabel: "Material Intel",
      target: "#materials-intel",
      modeId: "prep-my-run",
      modeLabel: "Prep My Run"
    };
  }

  if (/(arc|machine|threat|weather|condition|map|hurricane|firefly|comet)/.test(releaseText)) {
    return {
      moduleLabel: "Machine Intel",
      target: "#machine-intel",
      modeId: "prep-my-run",
      modeLabel: "Prep My Run"
    };
  }

  if (/(solo|squad|matchmaking|learning|curriculum)/.test(releaseText)) {
    return {
      moduleLabel: "Learning Path",
      target: "#curriculum",
      modeId: "brief-me",
      modeLabel: "Brief Me"
    };
  }

  return {
    moduleLabel: "Update Center",
    target: "#update-center",
    modeId: "catch-me-up",
    modeLabel: "Catch Me Up"
  };
}

function deriveIgnoreGuidance(release, affectedLane) {
  if (release.status === "Next up" || release.status === "Tomorrow") {
    return "Ignore this for today's drop unless you are planning ahead or protecting future routes.";
  }

  if (affectedLane.moduleLabel === "Learning Path") {
    return "Ignore the lower-noise details if you already understand the shift and just need the behavioral correction.";
  }

  return `Ignore this for now if you are not touching ${affectedLane.moduleLabel.toLowerCase()} on your next run.`;
}

function buildChangeSummary(release) {
  const confirmed = release.confirmed ?? [];
  if (confirmed.length >= 2) {
    return `${confirmed[0]} and ${confirmed[1]}`;
  }

  if (confirmed.length === 1) {
    return confirmed[0];
  }

  return release.summary;
}

function buildImpactStatement(release, affectedLane, isNewSinceVisit) {
  if (isNewSinceVisit) {
    return `This is new since your last visit and should change how you use ${affectedLane.moduleLabel.toLowerCase()} right now.`;
  }

  if (release.status === "Next up") {
    return "This is planning pressure, not panic fuel. It matters because your prep should be ready before the release lands.";
  }

  return "This matters because it should change player behavior, not just your memory of patch names.";
}

function buildRecommendedResponse(release) {
  return release.prep?.[0] ?? "Open the affected lane and adjust your next run before trusting old habits.";
}

function getImpactLevel(release, isNewSinceVisit) {
  if (isNewSinceVisit) {
    return "high";
  }

  if (release.status === "Live") {
    return "medium";
  }

  return "low";
}

function scoreDeltaItem(release, item) {
  let score = 0;
  if (item.isNewSinceVisit) {
    score += 100;
  }
  if (item.isLatest) {
    score += 35;
  }
  if (item.deferred) {
    score += 28;
  }
  if (!item.reviewed) {
    score += 18;
  }
  if (item.impactLevel === "high") {
    score += 14;
  }
  if (item.impactLevel === "medium") {
    score += 8;
  }
  return score;
}

function buildDeltaItems(contentDelivery, appState) {
  const releases = contentDelivery.reusableData.releases ?? [];
  const latestRelease = releases[0] ?? null;

  return releases.slice(0, 4).map((release) => {
    const affectedLane = inferAffectedLane(release);
    const isNewSinceVisit = isReleaseNewSince(appState.lastVisitAt, release.date);
    const reviewed = appState.reviewedDeltas.includes(release.id);
    const deferred = appState.deferredDeltas.includes(release.id);
    const impactLevel = getImpactLevel(release, isNewSinceVisit);

    const item = {
      id: release.id,
      title: release.title,
      date: release.date,
      status: release.status,
      isLatest: latestRelease?.id === release.id,
      isNewSinceVisit,
      reviewed,
      deferred,
      impactLevel,
      summary: buildChangeSummary(release),
      impact: buildImpactStatement(release, affectedLane, isNewSinceVisit),
      response: buildRecommendedResponse(release),
      ignore: deriveIgnoreGuidance(release, affectedLane),
      affectedLane
    };

    return {
      ...item,
      score: scoreDeltaItem(release, item)
    };
  }).sort((left, right) => right.score - left.score);
}

function buildFallback(latestRelease, pendingCount) {
  if (pendingCount > 0 || latestRelease == null) {
    return null;
  }

  return {
    title: "No urgent delta signals",
    copy: "Nothing important is newer than your last visit, so skip the ceremonial reread and move into planning or review.",
    note: `Latest known release remains ${latestRelease.title}.`,
    actions: [
      { label: "Open Prep My Run", commandId: "prep-my-run" },
      { label: "Open update center", target: "#update-center" }
    ]
  };
}

export function buildCatchUpModeWorkspace(appState, contentDelivery) {
  const deltaItems = buildDeltaItems(contentDelivery, appState);
  const latestRelease = contentDelivery.reusableData.releases?.[0] ?? null;
  const pendingItems = deltaItems.filter((item) => !item.reviewed || item.deferred);
  const focusItem = pendingItems[0] ?? deltaItems[0] ?? null;

  return {
    id: "catch-me-up",
    shellTone: "caution",
    layout: "delta",
    header: {
      kicker: "Catch-up mode",
      title: focusItem
        ? `What changed and what to do about ${focusItem.title}`
        : "Current delta board",
      copy: focusItem
        ? "This mode strips updates down to player impact, response, and the next useful move."
        : "No urgent deltas are waiting, so the board is staying honest instead of inventing fake urgency."
    },
    indicators: [
      { label: "New since visit", value: String(deltaItems.filter((item) => item.isNewSinceVisit).length) },
      { label: "Needs response", value: String(pendingItems.length) },
      { label: "Reviewed", value: String(appState.reviewedDeltas.length) },
      { label: "Last review", value: appState.lastReviewedDeltaAt ? "Tracked" : "None" }
    ],
    delta: {
      focusItem,
      items: deltaItems,
      pendingItems,
      recommendedMode: focusItem?.affectedLane?.modeLabel ?? "Prep My Run",
      fallback: buildFallback(latestRelease, pendingItems.length),
      reviewedCount: appState.reviewedDeltas.length,
      deferredCount: appState.deferredDeltas.length
    }
  };
}
