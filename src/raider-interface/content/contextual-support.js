function pickLessons(contentDelivery, lessonIds = []) {
  const lessons = contentDelivery.reusableData.lessons ?? [];
  return lessonIds
    .map((id) => lessons.find((lesson) => lesson.id === id))
    .filter(Boolean)
    .slice(0, 2);
}

function buildArchiveAction(target) {
  return {
    label: "Open in archive",
    type: "target",
    target
  };
}

function buildModeSupport(modeWorkspace, appState, contentDelivery) {
  const machines = contentDelivery.reusableData.machines ?? [];
  const materials = contentDelivery.reusableData.materialFamilies ?? [];
  const prepChecklist = contentDelivery.reusableData.prepChecklist ?? [];
  const releases = contentDelivery.reusableData.releases ?? [];

  switch (modeWorkspace.id) {
    case "prep-my-run":
      return [
        {
          kicker: "Planning support",
          title: "Machine pressure reference",
          copy: machines[0]
            ? `${machines[0].name} is a good reminder of the route pressure your plan has to survive. Use machine intel when the run starts looking sloppier than it sounded in your head.`
            : "Use machine intel when the route needs clearer threat handling.",
          actions: [
            { label: "Open machine intel", type: "target", target: "#machine-intel" },
            buildArchiveAction("#machine-intel")
          ]
        },
        {
          kicker: "Planning support",
          title: "Material routing backup",
          copy: materials[0]
            ? `${materials[0].title} is a useful reminder that stash and workshop pressure should shape the lane, not trail behind it as an afterthought.`
            : "Material intel should support the plan when loot pressure starts steering the run.",
          actions: [
            { label: "Open material intel", type: "target", target: "#materials-intel" },
            buildArchiveAction("#materials-intel")
          ]
        },
        {
          kicker: "Execution support",
          title: "Prep checklist backup",
          copy: prepChecklist[0]
            ? `Use the archive checklist if you need the slower, more explicit prep pass before dropping.`
            : "Use the prep checklist when you need to slow the setup down and make fewer dumb assumptions.",
          actions: [
            { label: "Open prep checklist", type: "target", target: "#machine-intel" }
          ]
        }
      ];
    case "fix-my-problem": {
      const blocker = contentDelivery.blockers.find((item) => item.id === appState.savedBlockerId) ?? contentDelivery.blockers[0];
      return [
        {
          kicker: "Corrective support",
          title: "Reference lane for the blocker",
          copy: blocker.summary,
          actions: [
            { label: blocker.primaryLabel, type: "target", target: blocker.primaryTarget },
            { label: blocker.secondaryLabel, type: "target", target: blocker.secondaryTarget }
          ]
        },
        {
          kicker: "Corrective support",
          title: "Use lessons as backup, not the starting point",
          copy: "The archive still matters when you need the slower explanation after the diagnosis lands. That is support material, not the first interaction.",
          actions: [
            { label: "Open lessons", type: "target", target: "#curriculum" },
            buildArchiveAction("#curriculum")
          ]
        }
      ];
    }
    case "catch-me-up":
      return [
        {
          kicker: "Delta support",
          title: "Release records remain available",
          copy: releases[0]
            ? `${releases[0].title} still has the full release context in the archive if you want the deeper record after you process the action-first delta.`
            : "Use the archive for full release history after you finish the action-first catch-up pass.",
          actions: [
            { label: "Open update archive", type: "target", target: "#update-center" }
          ]
        },
        {
          kicker: "Delta support",
          title: "Adjust the guide lane next",
          copy: "Once the delta board tells you what changed, the archive is where you go to inspect the deeper lesson, quest, or machine panels only if you still need them.",
          actions: [
            { label: "Open lessons", type: "target", target: "#curriculum" },
            { label: "Open machine intel", type: "target", target: "#machine-intel" }
          ]
        }
      ];
    case "brief-me":
    default: {
      const lessonSupport = pickLessons(contentDelivery, ["raid-loop", "read-topside", "progression-loop"]);
      return [
        {
          kicker: "Briefing support",
          title: "First lessons are still here when you need depth",
          copy: lessonSupport.length
            ? `${lessonSupport.map((lesson) => lesson.title).join(" and ")} are still available in the archive when the quick brief is not enough.`
            : "The full lessons remain available when you need more than the quick brief.",
          actions: [
            { label: "Open lessons", type: "target", target: "#curriculum" },
            { label: "Open briefing archive", type: "target", target: "#first-raid-briefing" }
          ]
        },
        {
          kicker: "Briefing support",
          title: "Reference archive is backup intelligence",
          copy: "The site is no longer asking new players to browse their way to confidence. The archive stays useful, but it should not be the first thing they drown in.",
          actions: [
            { label: "Open archive", type: "archive" }
          ]
        }
      ];
    }
  }
}

export function buildContextualSupport(modeWorkspace, appState, contentDelivery) {
  return {
    title: "Contextual support",
    copy: "Legacy guide depth now shows up as supporting intelligence when the active mode actually needs it.",
    cards: buildModeSupport(modeWorkspace, appState, contentDelivery).slice(0, 3)
  };
}
