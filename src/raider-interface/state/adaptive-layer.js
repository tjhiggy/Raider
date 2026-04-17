function formatModeLabel(modeId) {
  return String(modeId)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeFailurePatterns(rawPatterns = {}) {
  return Object.entries(rawPatterns).reduce((accumulator, [problemId, count]) => {
    if (Number.isFinite(count) && count > 0) {
      accumulator[problemId] = count;
    }

    return accumulator;
  }, {});
}

function buildRecentModes(modeHistory = []) {
  return modeHistory.slice(0, 4);
}

function getMostRepeatedFailure(failurePatterns = {}, contentDelivery) {
  const blockers = contentDelivery?.blockers ?? [];
  const [problemId, count] = Object.entries(failurePatterns)
    .sort((left, right) => right[1] - left[1])[0] ?? [];

  if (!problemId || !count) {
    return null;
  }

  const blocker = blockers.find((item) => item.id === problemId);
  if (!blocker) {
    return null;
  }

  return {
    id: problemId,
    count,
    label: blocker.label,
    target: blocker.primaryTarget
  };
}

function buildAdaptiveNudges(state, contentDelivery) {
  const nudges = [];
  const dismissed = new Set(state.dismissedNudges ?? []);
  const repeatedFailure = getMostRepeatedFailure(state.failurePatterns, contentDelivery);
  const blockers = contentDelivery?.blockers ?? [];

  if (state.activePlan && !dismissed.has("unfinished-plan")) {
    nudges.push({
      id: "unfinished-plan",
      tone: "ready",
      title: "Finish the armed plan first",
      copy: `${state.activePlan.label} is still live. Either execute it, adjust it, or stop dragging stale intent into fresh runs.`,
      primaryAction: { label: "Resume plan", type: "companion", action: "resume-plan" },
      secondaryAction: { label: "Adjust plan", type: "companion", action: "adjust-plan" }
    });
  }

  if (state.savedBlockerId && !dismissed.has("unresolved-blocker")) {
    const blocker = blockers.find((item) => item.id === state.savedBlockerId);
    if (blocker) {
      nudges.push({
        id: "unresolved-blocker",
        tone: "danger",
        title: "The blocker is still unresolved",
        copy: `${blocker.label} is still on deck. Fixing the wrong thing slower is still fixing the wrong thing.`,
        primaryAction: { label: "Open Fix My Problem", type: "command", commandId: "fix-my-problem" },
        secondaryAction: { label: blocker.primaryLabel, type: "target", target: blocker.primaryTarget }
      });
    }
  }

  if (repeatedFailure && repeatedFailure.count >= 2 && !dismissed.has("repeat-failure")) {
    nudges.push({
      id: "repeat-failure",
      tone: "caution",
      title: "You are repeating the same failure pattern",
      copy: `${repeatedFailure.label} has surfaced ${repeatedFailure.count} times. Take the hint and vary the run instead of doubling down.`,
      primaryAction: { label: "Open Prep My Run", type: "command", commandId: "prep-my-run" },
      secondaryAction: { label: "Review blocker", type: "target", target: repeatedFailure.target }
    });
  }

  if ((state.deferredDeltas?.length ?? 0) > 0 && !dismissed.has("deferred-deltas")) {
    nudges.push({
      id: "deferred-deltas",
      tone: "intel",
      title: "You still have deferred change pressure",
      copy: `${state.deferredDeltas.length} update signal${state.deferredDeltas.length > 1 ? "s are" : " is"} still parked for later. Later is not a strategy.`,
      primaryAction: { label: "Open Catch Me Up", type: "command", commandId: "catch-me-up" },
      secondaryAction: { label: "Review updates", type: "target", target: "#update-center" }
    });
  }

  if ((state.savedRunPlans?.length ?? 0) > 0 && !state.activeRunPlanId && !dismissed.has("inactive-saved-plan")) {
    nudges.push({
      id: "inactive-saved-plan",
      tone: "inactive",
      title: "You have saved plans but no active lane",
      copy: "A saved plan that never gets activated is just organized procrastination.",
      primaryAction: { label: "Use latest plan", type: "companion", action: "use-latest-plan" },
      secondaryAction: { label: "Open Prep My Run", type: "command", commandId: "prep-my-run" }
    });
  }

  return nudges.slice(0, 3);
}

function buildAdaptiveRecommendation(state, userContext, contentDelivery) {
  const repeatedFailure = getMostRepeatedFailure(state.failurePatterns, contentDelivery);

  if ((state.deferredDeltas?.length ?? 0) > 0) {
    return {
      label: "Catch Me Up",
      reason: "You still have deferred update pressure.",
      commandId: "catch-me-up"
    };
  }

  if (repeatedFailure && repeatedFailure.count >= 2) {
    return {
      label: "Prep My Run",
      reason: `The system wants a safer variation because ${repeatedFailure.label.toLowerCase()} keeps repeating.`,
      commandId: "prep-my-run"
    };
  }

  if (state.savedBlockerId) {
    return {
      label: "Fix My Problem",
      reason: "The unresolved blocker is still more urgent than browsing more content.",
      commandId: "fix-my-problem"
    };
  }

  if (!userContext.reviewedLessonCount) {
    return {
      label: "Brief Me",
      reason: "You still need the first clean briefing lane.",
      commandId: "brief-me"
    };
  }

  return {
    label: formatModeLabel(state.lastModeId ?? "prep-my-run"),
    reason: "The interface is following your last useful posture.",
    commandId: state.activeCommandId ?? "prep-my-run"
  };
}

export function buildAdaptiveStateSnapshot(state, userContext, contentDelivery) {
  const failurePatterns = normalizeFailurePatterns(state.failurePatterns);
  const repeatedFailure = getMostRepeatedFailure(failurePatterns, contentDelivery);

  return {
    recentModes: buildRecentModes(state.modeHistory),
    repeatedFailure,
    unfinishedActions: [
      state.activePlan ? "active-plan" : null,
      state.savedBlockerId ? "saved-blocker" : null,
      (state.deferredDeltas?.length ?? 0) > 0 ? "deferred-deltas" : null
    ].filter(Boolean),
    recommendation: buildAdaptiveRecommendation({ ...state, failurePatterns }, userContext, contentDelivery),
    nudges: buildAdaptiveNudges({ ...state, failurePatterns }, contentDelivery)
  };
}
