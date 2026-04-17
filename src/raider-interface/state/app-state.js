import { createPersistenceLayer } from "./persistence.js";
import { createUserContext } from "./user-context.js";
import { getDefaultIntentMode } from "../modes/intent-modes.js";
import { createDefaultPrepAnswers, toPlanSummary } from "../modes/run-plan-engine.js";
import { buildAdaptiveStateSnapshot } from "./adaptive-layer.js";

function normalizeReleaseDate(rawValue) {
  if (!rawValue) {
    return null;
  }

  if (/^\d{4}-\d{2}$/.test(rawValue)) {
    return `${rawValue}-01`;
  }

  return rawValue;
}

function getPatchChangesSince(lastVisitAt, releases = []) {
  if (!lastVisitAt) {
    return 0;
  }

  const lastVisitTime = Date.parse(lastVisitAt);
  if (Number.isNaN(lastVisitTime)) {
    return 0;
  }

  return releases.filter((release) => {
    const releaseDate = Date.parse(normalizeReleaseDate(release.date));
    return !Number.isNaN(releaseDate) && releaseDate > lastVisitTime;
  }).length;
}

function getIncompleteMilestone(userContext, storedState) {
  if (!userContext.reviewedLessonCount) {
    return "Complete your first field briefing.";
  }

  if (userContext.reviewedLessonCount < 3) {
    return "Finish the core New Raider lessons.";
  }

  if (!storedState.activePlan) {
    return "Prep one deliberate run before your next drop.";
  }

  if (storedState.savedBlockerId) {
    return "Resolve the blocker attached to your last run.";
  }

  return "Review the latest release signals before the next raid.";
}

function getSuggestedCommand({ patchChangesSinceLastVisit, activePlan, savedBlockerId, userContext }) {
  if (patchChangesSinceLastVisit > 0) {
    return "catch-me-up";
  }

  if (activePlan) {
    return "prep-my-run";
  }

  if (savedBlockerId) {
    return "fix-my-problem";
  }

  if (!userContext.reviewedLessonCount) {
    return "brief-me";
  }

  return "prep-my-run";
}

function computeHasReturningState(state, userContext) {
  return Boolean(
    state.lastVisitAt ||
    state.activePlan ||
    state.savedRunPlans?.length ||
    state.savedBlockerId ||
    state.savedFixes?.length ||
    state.reviewedDeltas?.length ||
    state.deferredDeltas?.length ||
    userContext.hasProgress
  );
}

function normalizeModeHistory(modeHistory = [], fallbackModeId) {
  const safeHistory = Array.isArray(modeHistory) ? modeHistory.filter(Boolean) : [];
  if (safeHistory.length) {
    return safeHistory.slice(0, 8);
  }

  return fallbackModeId ? [fallbackModeId] : [];
}

function normalizeFailurePatterns(patterns = {}) {
  return Object.entries(patterns).reduce((accumulator, [problemId, count]) => {
    if (Number.isFinite(count) && count > 0) {
      accumulator[problemId] = count;
    }

    return accumulator;
  }, {});
}

function resolveActiveProblemId(state) {
  if (state.savedBlockerId) {
    return state.savedBlockerId;
  }

  const activePlanBlocker = state.activeRunPlan?.answers?.blocker ?? state.prepDraftAnswers?.blocker;
  const blockerMap = {
    survival: "survival",
    quests: "quests",
    materials: "stash-pressure",
    machines: "survival"
  };

  if (activePlanBlocker && activePlanBlocker !== "none") {
    return blockerMap[activePlanBlocker] ?? activePlanBlocker;
  }

  return null;
}

export function createRaiderInterfaceState(runtime, contentDelivery = null) {
  const persistence = createPersistenceLayer("raider-interface-state");
  const storedState = persistence.read() ?? {};
  const userContext = createUserContext(runtime);
  const releases = runtime?.content?.releases ?? [];
  const patchChangesSinceLastVisit = getPatchChangesSince(storedState.lastVisitAt, releases);
  const defaultMode = storedState.selectedModeId ?? getDefaultIntentMode().id;
  const suggestedCommandId = getSuggestedCommand({
    patchChangesSinceLastVisit,
    activePlan: storedState.activePlan,
    savedBlockerId: storedState.savedBlockerId,
    userContext
  });
  const savedRunPlans = Array.isArray(storedState.savedRunPlans) ? storedState.savedRunPlans : [];
  const activeRunPlanId = storedState.activeRunPlanId ?? null;
  const activeRunPlan = savedRunPlans.find((plan) => plan.id === activeRunPlanId) ?? null;
  const prepDraftAnswers = createDefaultPrepAnswers(userContext, storedState);
  const problemResponses = storedState.problemResponses ?? {};
  const savedFixes = Array.isArray(storedState.savedFixes) ? storedState.savedFixes : [];
  const reviewedDeltas = Array.isArray(storedState.reviewedDeltas) ? storedState.reviewedDeltas : [];
  const deferredDeltas = Array.isArray(storedState.deferredDeltas) ? storedState.deferredDeltas : [];
  const companionOpen = Boolean(storedState.companionOpen);
  const companionDetailLevel = storedState.companionDetailLevel === "detailed" ? "detailed" : "compact";
  const modeHistory = normalizeModeHistory(storedState.modeHistory, defaultMode);
  const failurePatterns = normalizeFailurePatterns(storedState.failurePatterns);
  const dismissedNudges = Array.isArray(storedState.dismissedNudges) ? storedState.dismissedNudges : [];
  const lastReviewedDeltaAt = storedState.lastReviewedDeltaAt ?? null;

  const appState = {
    shellPhase: "phase-12-launch-hardening",
    runtimeVersion: runtime?.app?.version ?? "unknown",
    userContext,
    persistence,
    visitCount: Number.isFinite(storedState.visitCount) ? storedState.visitCount : 0,
    lastVisitAt: storedState.lastVisitAt ?? null,
    selectedModeId: defaultMode,
    lastModeId: storedState.lastModeId ?? defaultMode,
    activeCommandId: storedState.activeCommandId ?? suggestedCommandId,
    savedBlockerId: storedState.savedBlockerId ?? null,
    prepDraftAnswers,
    savedRunPlans,
    activeRunPlanId,
    activeRunPlan,
    compactExecutionMode: Boolean(storedState.compactExecutionMode),
    problemResponses,
    savedFixes,
    reviewedDeltas,
    deferredDeltas,
    lastReviewedDeltaAt,
    companionOpen,
    companionDetailLevel,
    modeHistory,
    failurePatterns,
    dismissedNudges,
    activePlan: activeRunPlan ? toPlanSummary(activeRunPlan) : storedState.activePlan ?? null,
    hasReturningState: computeHasReturningState(
      {
        ...storedState,
        activePlan: activeRunPlan ? toPlanSummary(activeRunPlan) : storedState.activePlan ?? null,
        savedRunPlans,
        savedFixes,
        reviewedDeltas,
        deferredDeltas
      },
      userContext
    ),
    patchChangesSinceLastVisit,
    incompleteMilestone: getIncompleteMilestone(userContext, storedState),
    adaptive: null,
    lastAuditDate: "2026-04-16",
    persist(patch = {}) {
      Object.assign(appState, patch);
      appState.hasReturningState = computeHasReturningState(appState, appState.userContext);
      appState.incompleteMilestone = getIncompleteMilestone(appState.userContext, appState);
      appState.failurePatterns = normalizeFailurePatterns(appState.failurePatterns);
      appState.modeHistory = normalizeModeHistory(appState.modeHistory, appState.selectedModeId);
      appState.adaptive = buildAdaptiveStateSnapshot(appState, appState.userContext, contentDelivery ?? runtime?.content);
      persistence.write({
        visitCount: appState.visitCount,
        lastVisitAt: appState.lastVisitAt,
        selectedModeId: appState.selectedModeId,
        lastModeId: appState.lastModeId,
        activeCommandId: appState.activeCommandId,
        savedBlockerId: appState.savedBlockerId,
        prepDraftAnswers: appState.prepDraftAnswers,
        savedRunPlans: appState.savedRunPlans,
        activeRunPlanId: appState.activeRunPlanId,
        compactExecutionMode: appState.compactExecutionMode,
        problemResponses: appState.problemResponses,
        savedFixes: appState.savedFixes,
        reviewedDeltas: appState.reviewedDeltas,
        deferredDeltas: appState.deferredDeltas,
        lastReviewedDeltaAt: appState.lastReviewedDeltaAt,
        companionOpen: appState.companionOpen,
        companionDetailLevel: appState.companionDetailLevel,
        activePlan: appState.activePlan,
        modeHistory: appState.modeHistory,
        failurePatterns: appState.failurePatterns,
        dismissedNudges: appState.dismissedNudges
      });
    },
    acknowledgeVisit() {
      appState.persist({
        visitCount: appState.visitCount + 1,
        lastVisitAt: new Date().toISOString()
      });
    },
    setPrepAnswer(fieldId, value) {
      appState.persist({
        prepDraftAnswers: {
          ...appState.prepDraftAnswers,
          [fieldId]: value
        }
      });
    },
    loadRunPlanToDraft(planId) {
      const selectedPlan = appState.savedRunPlans.find((plan) => plan.id === planId);
      if (!selectedPlan) {
        return;
      }

      appState.persist({
        prepDraftAnswers: { ...selectedPlan.answers },
        activeCommandId: "prep-my-run",
        selectedModeId: "run-planning",
        lastModeId: "run-planning",
        modeHistory: ["run-planning", ...appState.modeHistory.filter((modeId) => modeId !== "run-planning")].slice(0, 8)
      });
    },
    saveRunPlan(plan, options = {}) {
      const existingIndex = appState.savedRunPlans.findIndex((item) => item.id === plan.id);
      const nextPlans = [...appState.savedRunPlans];

      if (existingIndex >= 0) {
        nextPlans.splice(existingIndex, 1, plan);
      } else {
        nextPlans.unshift(plan);
      }

      const shouldActivate = options.activate ?? !appState.activeRunPlanId;
      appState.persist({
        savedRunPlans: nextPlans,
        activeRunPlanId: shouldActivate ? plan.id : appState.activeRunPlanId,
        activeRunPlan: shouldActivate ? plan : appState.activeRunPlan,
        activePlan: shouldActivate ? toPlanSummary(plan) : appState.activePlan
      });
    },
    setActiveRunPlan(planId) {
      const selectedPlan = appState.savedRunPlans.find((plan) => plan.id === planId);
      if (!selectedPlan) {
        return;
      }

      appState.persist({
        activeRunPlanId: planId,
        activeRunPlan: selectedPlan,
        activePlan: toPlanSummary(selectedPlan)
      });
    },
    toggleCompactExecution() {
      appState.persist({
        compactExecutionMode: !appState.compactExecutionMode
      });
    },
    toggleCompanion(forceValue) {
      appState.persist({
        companionOpen: typeof forceValue === "boolean" ? forceValue : !appState.companionOpen
      });
    },
    setCompanionDetailLevel(level) {
      appState.persist({
        companionDetailLevel: level === "detailed" ? "detailed" : "compact"
      });
    },
    setProblem(problemId) {
      appState.persist({
        savedBlockerId: problemId,
        problemResponses: {
          ...appState.problemResponses,
          [problemId]: appState.problemResponses[problemId] ?? null
        }
      });
    },
    clearProblem() {
      appState.persist({
        savedBlockerId: null
      });
    },
    setProblemResponse(problemId, responseId) {
      appState.persist({
        savedBlockerId: problemId,
        problemResponses: {
          ...appState.problemResponses,
          [problemId]: responseId
        }
      });
    },
    saveFixRecommendation(fix) {
      const nextFixes = [
        fix,
        ...appState.savedFixes.filter((item) => item.id !== fix.id)
      ].slice(0, 6);

      appState.persist({
        savedFixes: nextFixes,
        savedBlockerId: fix.problemId
      });
    },
    markDeltaReviewed(deltaId) {
      const nextReviewed = [...new Set([...appState.reviewedDeltas, deltaId])];
      appState.persist({
        reviewedDeltas: nextReviewed,
        deferredDeltas: appState.deferredDeltas.filter((item) => item !== deltaId),
        lastReviewedDeltaAt: new Date().toISOString()
      });
    },
    toggleDeltaDeferred(deltaId) {
      const isDeferred = appState.deferredDeltas.includes(deltaId);
      appState.persist({
        deferredDeltas: isDeferred
          ? appState.deferredDeltas.filter((item) => item !== deltaId)
          : [deltaId, ...appState.deferredDeltas.filter((item) => item !== deltaId)].slice(0, 8)
      });
    },
    rememberMode(modeId) {
      appState.persist({
        lastModeId: modeId,
        selectedModeId: modeId,
        modeHistory: [modeId, ...appState.modeHistory.filter((item) => item !== modeId)].slice(0, 8)
      });
    },
    dismissNudge(nudgeId) {
      appState.persist({
        dismissedNudges: [...new Set([...appState.dismissedNudges, nudgeId])].slice(0, 12)
      });
    },
    restoreNudge(nudgeId) {
      appState.persist({
        dismissedNudges: appState.dismissedNudges.filter((item) => item !== nudgeId)
      });
    },
    recordRunOutcome(outcome) {
      const activeProblemId = resolveActiveProblemId(appState);
      if (outcome === "failure" && activeProblemId) {
        appState.persist({
          failurePatterns: {
            ...appState.failurePatterns,
            [activeProblemId]: (appState.failurePatterns[activeProblemId] ?? 0) + 1
          }
        });
        return;
      }

      if (outcome === "success" && activeProblemId && appState.failurePatterns[activeProblemId]) {
        const nextValue = Math.max(0, appState.failurePatterns[activeProblemId] - 1);
        const nextPatterns = { ...appState.failurePatterns };
        if (nextValue > 0) {
          nextPatterns[activeProblemId] = nextValue;
        } else {
          delete nextPatterns[activeProblemId];
        }

        appState.persist({
          failurePatterns: nextPatterns
        });
      }
    },
    resetAdaptiveState() {
      appState.persist({
        failurePatterns: {},
        dismissedNudges: [],
        savedBlockerId: null,
        deferredDeltas: [],
        activePlan: appState.activeRunPlan ? toPlanSummary(appState.activeRunPlan) : null
      });
    }
  };

  appState.adaptive = buildAdaptiveStateSnapshot(appState, userContext, contentDelivery ?? runtime?.content);

  return appState;
}
