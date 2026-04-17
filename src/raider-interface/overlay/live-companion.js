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

function buildStatusIndicator(appState, activePlan) {
  const repeatedFailure = appState.adaptive?.repeatedFailure ?? null;

  if (repeatedFailure) {
    return {
      label: "Caution",
      tone: "danger",
      detail: `${repeatedFailure.label} repeating`
    };
  }

  if (activePlan.missionType.toLowerCase().includes("aggressive")) {
    return {
      label: "Hot",
      tone: "caution",
      detail: "Tempo matters"
    };
  }

  return {
    label: "Ready",
    tone: "ready",
    detail: "Execution lane armed"
  };
}

function buildExtractionTrigger(activePlan) {
  return activePlan.priorityStack?.[2]
    ?? activePlan.doThis?.[2]
    ?? "Leave the run the second the objective is secure.";
}

function buildEmptyState(appState) {
  return {
    status: "No active plan",
    copy: appState.savedRunPlans?.length
      ? "You have saved plans, but none is active. Promote one or build a cleaner lane before you drop."
      : "No active plan yet. Build one before the run so this overlay can do something smarter than shrug.",
    compact: {
      objective: "No live objective",
      nextAction: appState.savedRunPlans?.length ? "Promote a saved plan" : "Open Prep My Run",
      danger: "Running blind",
      status: {
        label: "Idle",
        tone: "inactive",
        detail: "No execution lane"
      }
    },
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
      id: "reflex-mode-overlay",
      label: "Reflex Mode",
      modeContext: getModeContext(appState),
      isOpen: appState.companionOpen,
      hasPlan: false,
      contextNote: recommendation
        ? `${recommendation.label} is the best fit right now. ${recommendation.reason}`
        : "Build one clean plan so the companion can stop operating on vibes.",
      emptyState: buildEmptyState(appState),
      runtimeVersion: runtime?.app?.version ?? "unknown"
    };
  }

  return {
    id: "reflex-mode-overlay",
    label: "Reflex Mode",
    modeContext: getModeContext(appState),
    isOpen: appState.companionOpen,
    hasPlan: true,
    plan: {
      id: activePlan.id,
      label: activePlan.label,
      missionType: activePlan.missionType,
      compact: {
        objective: activePlan.priorityObjective,
        nextAction: activePlan.nextBestAction?.label ?? "Hold the lane",
        danger: activePlan.keyWarning,
        status: buildStatusIndicator(appState, activePlan)
      },
      missionSummary: activePlan.recommendedBehavior,
      topPriorities: (activePlan.priorityStack ?? []).slice(0, 3),
      biggestWarning: activePlan.keyWarning,
      thingsGoBad: activePlan.fallbackStrategy,
      extractionTrigger: buildExtractionTrigger(activePlan),
      fallbackAction: activePlan.doThis?.[0] ?? activePlan.nextBestAction?.label ?? "Reset and protect the bag",
      reminders: buildQuickReminders(activePlan),
      adaptiveWarning: repeatedFailure
        ? `${repeatedFailure.label} has repeated ${repeatedFailure.count} times. Do not run the same mistake back unchanged.`
        : null,
      resumeTarget: activePlan.nextBestAction?.target ?? "#machine-intel",
      resumeLabel: activePlan.nextBestAction?.label ?? "Resume plan",
      detail: {
        utility: activePlan.utilityReminders ?? [],
        avoidThis: activePlan.avoidThis ?? []
      }
    },
    contextNote: recommendation
      ? `${recommendation.label} remains the strongest lane if this run needs to pivot.`
      : "Current mode context is being carried into the run.",
    runtimeVersion: runtime?.app?.version ?? "unknown"
  };
}
