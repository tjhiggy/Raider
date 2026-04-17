function getModeContext(appState) {
  switch (appState.activeCommandId) {
    case "catch-me-up":
      return "Update-aware posture";
    case "fix-my-problem":
      return "Recovery posture";
    case "prep-my-run":
      return "Planning posture";
    case "brief-me":
    default:
      return "Briefing posture";
  }
}

function buildEmptyState(appState) {
  return {
    status: "No active run plan",
    copy: appState.savedRunPlans?.length
      ? "You have saved plans, but none is active. Promote one or build a cleaner lane before you drop."
      : "No active plan yet. Build one before the run so this overlay can do something smarter than shrug.",
    primaryAction: appState.savedRunPlans?.length
      ? { label: "Use latest saved plan", action: "use-latest-plan" }
      : { label: "Plan my run", action: "open-prep" },
    secondaryAction: { label: "Open Prep My Run", action: "open-prep" }
  };
}

function buildQuickReminders(plan) {
  const reminders = [
    ...(plan.utilityReminders ?? []),
    ...(plan.compactExecution?.steps ?? [])
  ];

  return [...new Set(reminders)].slice(0, 3);
}

export function createLiveCompanionOverlay(runtime, appState) {
  const activePlan = appState.activeRunPlan ?? null;
  const hasPlan = Boolean(activePlan);
  const repeatedFailure = appState.adaptive?.repeatedFailure ?? null;
  const recommendation = appState.adaptive?.recommendation ?? null;

  if (!hasPlan) {
    return {
      id: "live-companion-overlay",
      modeContext: getModeContext(appState),
      isOpen: appState.companionOpen,
      detailLevel: appState.companionDetailLevel,
      hasPlan: false,
      contextNote: recommendation
        ? `${recommendation.label} is the best fit right now. ${recommendation.reason}`
        : "Build one clean plan so the companion can stop operating on vibes.",
      emptyState: buildEmptyState(appState),
      runtimeVersion: runtime?.app?.version ?? "unknown"
    };
  }

  return {
    id: "live-companion-overlay",
    modeContext: getModeContext(appState),
    isOpen: appState.companionOpen,
    detailLevel: appState.companionDetailLevel,
    hasPlan: true,
    plan: {
      id: activePlan.id,
      label: activePlan.label,
      missionType: activePlan.missionType,
      objective: activePlan.priorityObjective,
      topPriorities: (activePlan.priorityStack ?? []).slice(0, 3),
      biggestWarning: activePlan.keyWarning,
      fallbackAction: activePlan.fallbackStrategy,
      reminders: buildQuickReminders(activePlan),
      adaptiveWarning: repeatedFailure
        ? `${repeatedFailure.label} has repeated ${repeatedFailure.count} times. Do not run the same mistake back unchanged.`
        : null,
      resumeTarget: activePlan.nextBestAction?.target ?? "#machine-intel",
      resumeLabel: activePlan.nextBestAction?.label ?? "Resume plan",
      checklistState: appState.compactExecutionMode ? "Compact execution" : "Detailed execution",
      compactSteps: activePlan.compactExecution?.steps ?? [],
      detail: {
        behavior: activePlan.recommendedBehavior,
        loadout: activePlan.loadoutPhilosophy,
        utility: activePlan.utilityReminders ?? [],
        doThis: activePlan.doThis ?? [],
        avoidThis: activePlan.avoidThis ?? []
      }
    },
    contextNote: recommendation
      ? `${recommendation.label} remains the strongest lane if this run needs to pivot.`
      : "Current mode context is being carried into the run.",
    runtimeVersion: runtime?.app?.version ?? "unknown"
  };
}
