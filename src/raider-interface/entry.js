import { RAIDER_INTERFACE_TOKENS } from "./design/tokens.js";
import { RAIDER_INTENT_MODES } from "./modes/intent-modes.js";
import { RAIDER_INTERFACE_COMMANDS, buildCommandIndex } from "./commands/command-model.js";
import { buildModeWorkspace, resolveModeFromLocation, writeModeToLocation } from "./modes/mode-framework.js";
import { createRaiderInterfaceState } from "./state/app-state.js";
import { createContentDeliveryLayer } from "./content/content-delivery.js";
import { createLiveCompanionOverlay } from "./overlay/live-companion.js";
import { buildRewritePlan } from "./architecture/rewrite-plan.js";
import { renderRaiderInterfacePreview } from "./preview/sandbox.js";

function mountRaiderInterfaceScaffold() {
  const runtime = window.ARC_FIELD_GUIDE_RUNTIME;
  if (!runtime) {
    return;
  }

  const contentDelivery = createContentDeliveryLayer(runtime);
  const appState = createRaiderInterfaceState(runtime, contentDelivery);
  const rewritePlan = buildRewritePlan(runtime);
  const commandIndex = buildCommandIndex();
  const routedModeId = resolveModeFromLocation(commandIndex);

  if (routedModeId) {
    const routedCommand = commandIndex[routedModeId];
    appState.persist({
      activeCommandId: routedModeId,
      selectedModeId: routedCommand.intent,
      lastModeId: routedCommand.intent,
      modeHistory: [routedCommand.intent, ...appState.modeHistory.filter((modeId) => modeId !== routedCommand.intent)].slice(0, 8)
    });
  }

  window.RAIDER_INTERFACE = {
    tokens: RAIDER_INTERFACE_TOKENS,
    modes: RAIDER_INTENT_MODES,
    commands: RAIDER_INTERFACE_COMMANDS,
    commandIndex,
    appState,
    contentDelivery,
    rewritePlan
  };

  document.body.dataset.raiderInterface = "entry-live";

  const shellElement = document.querySelector("#raider-interface-shell");
  if (!shellElement) {
    return;
  }

  const previewRoot = document.querySelector("#raider-interface-preview-root");
  if (!previewRoot) {
    return;
  }

  let uiFeedback = null;
  let feedbackTimer = null;
  let pendingFocusSelector = null;

  function ensureReferenceArchiveOpen() {
    const archiveElement = document.querySelector("#reference-archive");
    if (archiveElement instanceof HTMLDetailsElement) {
      archiveElement.open = true;
    }
  }

  function flashFeedback(title, copy, tone = "intel") {
    uiFeedback = { title, copy, tone };
    window.clearTimeout(feedbackTimer);
    feedbackTimer = window.setTimeout(() => {
      uiFeedback = null;
      renderEntry();
    }, 1800);
  }

  function queueFocus(selector) {
    pendingFocusSelector = selector;
  }

  function restoreQueuedFocus() {
    if (!pendingFocusSelector) {
      return;
    }

    const selector = pendingFocusSelector;
    pendingFocusSelector = null;
    window.requestAnimationFrame(() => {
      const focusTarget = document.querySelector(selector);
      if (focusTarget instanceof HTMLElement) {
        focusTarget.focus({ preventScroll: true });
      }
    });
  }

  function openReferenceTarget(targetSelector, feedbackTitle, feedbackCopy) {
    if (!targetSelector) {
      return;
    }

    ensureReferenceArchiveOpen();
    queueFocus("#reference-archive summary");
    flashFeedback(feedbackTitle, feedbackCopy, "intel");
    runtime.helpers.scrollElementIntoView(document.querySelector(targetSelector));
  }

  function activateCommand(commandId, feedbackTone = "intel", feedbackCopy = "Mode shifted. The interface has reprioritized the board for this lane.") {
    const command = commandIndex[commandId];
    if (!command) {
      return;
    }

    const nextPatch = {
      activeCommandId: commandId,
      selectedModeId: command.intent,
      lastModeId: command.intent
    };

    if (commandId === "prep-my-run") {
      nextPatch.activePlan = {
        id: "prep-lane",
        label: "Low-attention prep lane",
        target: "#machine-intel"
      };
    }

    appState.persist(nextPatch);
    appState.rememberMode(command.intent);
    queueFocus(`.ri-mode-shell[data-mode="${commandId}"]`);
    flashFeedback(command.label, feedbackCopy, feedbackTone);
    writeModeToLocation(commandId);
    renderEntry();
  }

  function renderEntry() {
    const modeWorkspace = buildModeWorkspace(runtime, appState, contentDelivery);
    const liveCompanion = createLiveCompanionOverlay(runtime, appState);

    window.RAIDER_INTERFACE.liveCompanion = liveCompanion;

    previewRoot.innerHTML = renderRaiderInterfacePreview({
      runtime,
      appState,
      modes: RAIDER_INTENT_MODES,
      commands: RAIDER_INTERFACE_COMMANDS,
      contentDelivery,
      commandIndex,
      modeWorkspace,
      liveCompanion,
      uiFeedback
    });
    shellElement.dataset.currentMode = appState.activeCommandId;
    shellElement.dataset.feedbackTone = uiFeedback?.tone ?? "idle";
    restoreQueuedFocus();

    for (const commandButton of previewRoot.querySelectorAll("[data-ri-command]")) {
      commandButton.addEventListener("click", () => {
        const commandId = commandButton.getAttribute("data-ri-command");
        activateCommand(
          commandId,
          commandId === "fix-my-problem" ? "danger" : commandId === "catch-me-up" ? "caution" : commandId === "prep-my-run" ? "ready" : "intel"
        );
      });
    }

    for (const blockerButton of previewRoot.querySelectorAll("[data-ri-blocker]")) {
      blockerButton.addEventListener("click", () => {
        const blockerId = blockerButton.getAttribute("data-ri-blocker");
        appState.persist({
          activeCommandId: "fix-my-problem",
          selectedModeId: "recovery",
          lastModeId: "recovery",
          savedBlockerId: blockerId,
          modeHistory: ["recovery", ...appState.modeHistory.filter((modeId) => modeId !== "recovery")].slice(0, 8)
        });
        queueFocus('.ri-mode-shell[data-mode="fix-my-problem"]');
        flashFeedback("Blocker focused", "Recovery mode locked onto the selected problem.", "danger");
        writeModeToLocation("fix-my-problem");
        renderEntry();
      });
    }

    for (const problemButton of previewRoot.querySelectorAll("[data-ri-problem]")) {
      problemButton.addEventListener("click", () => {
        const problemId = problemButton.getAttribute("data-ri-problem");
        const responseId = problemButton.getAttribute("data-ri-response");
        appState.setProblem(problemId);
        if (responseId) {
          appState.setProblemResponse(problemId, responseId);
        }
        appState.persist({
          activeCommandId: "fix-my-problem",
          selectedModeId: "recovery",
          lastModeId: "recovery",
          modeHistory: ["recovery", ...appState.modeHistory.filter((modeId) => modeId !== "recovery")].slice(0, 8)
        });
        queueFocus('.ri-mode-shell[data-mode="fix-my-problem"]');
        flashFeedback("Problem selected", "The diagnostic path has been narrowed to the current struggle.", "danger");
        writeModeToLocation("fix-my-problem");
        renderEntry();
      });
    }

    for (const answerButton of previewRoot.querySelectorAll("[data-ri-problem-answer]")) {
      answerButton.addEventListener("click", () => {
        const problemId = answerButton.getAttribute("data-ri-problem-answer");
        const answerId = answerButton.getAttribute("data-ri-answer");
        appState.setProblemResponse(problemId, answerId);
        appState.persist({
          activeCommandId: "fix-my-problem",
          selectedModeId: "recovery",
          lastModeId: "recovery",
          modeHistory: ["recovery", ...appState.modeHistory.filter((modeId) => modeId !== "recovery")].slice(0, 8)
        });
        queueFocus('.ri-mode-shell[data-mode="fix-my-problem"]');
        flashFeedback("Diagnosis updated", "The recovery readout has been tightened with the new answer.", "danger");
        writeModeToLocation("fix-my-problem");
        renderEntry();
      });
    }

    for (const actionButton of previewRoot.querySelectorAll("[data-ri-target]")) {
      actionButton.addEventListener("click", () => {
        const targetSelector = actionButton.getAttribute("data-ri-target");
        if (!targetSelector) {
          return;
        }

        if (appState.activeCommandId === "fix-my-problem" && appState.savedBlockerId) {
          appState.persist({
            activePlan: {
              id: `problem-${appState.savedBlockerId}`,
              label: "Corrective action armed",
              target: targetSelector
            }
          });
        }

        if (appState.activeCommandId === "catch-me-up") {
          appState.persist({ savedBlockerId: appState.savedBlockerId ?? null });
        }

        openReferenceTarget(targetSelector, "Reference opened", "Deep archive support is on deck for the current action.");
      });
    }

    for (const fixActionButton of previewRoot.querySelectorAll("[data-ri-fix-action]")) {
      fixActionButton.addEventListener("click", () => {
        const action = fixActionButton.getAttribute("data-ri-fix-action");
        const modeWorkspace = buildModeWorkspace(runtime, appState, contentDelivery);
        const fixDiagnostic = modeWorkspace.diagnostic;

        if (!fixDiagnostic) {
          return;
        }

        if (action === "save-fix") {
          appState.saveFixRecommendation(fixDiagnostic.savedFix);
          queueFocus('.ri-mode-shell[data-mode="fix-my-problem"]');
          flashFeedback("Fix saved", "This corrective path is now pinned for the next time the same nonsense starts again.", "ready");
          renderEntry();
          return;
        }

        if (action === "apply-plan" && fixDiagnostic.diagnosis.planSeed) {
          const nextPrepAnswers = {
            ...appState.prepDraftAnswers,
            ...fixDiagnostic.diagnosis.planSeed
          };

          appState.persist({
            prepDraftAnswers: nextPrepAnswers,
            activeCommandId: "prep-my-run",
            selectedModeId: "run-planning",
            lastModeId: "run-planning",
            modeHistory: ["run-planning", ...appState.modeHistory.filter((modeId) => modeId !== "run-planning")].slice(0, 8)
          });
          queueFocus('.ri-mode-shell[data-mode="prep-my-run"]');
          flashFeedback("Prep context loaded", "Recovery output has been pushed straight into run planning.", "ready");
          writeModeToLocation("prep-my-run");
          renderEntry();
          return;
        }
      });
    }

    for (const deltaActionButton of previewRoot.querySelectorAll("[data-ri-delta-action]")) {
      deltaActionButton.addEventListener("click", () => {
        const deltaId = deltaActionButton.getAttribute("data-ri-delta-id");
        const action = deltaActionButton.getAttribute("data-ri-delta-action");
        if (!deltaId) {
          return;
        }

        if (action === "review") {
          appState.markDeltaReviewed(deltaId);
          queueFocus('.ri-mode-shell[data-mode="catch-me-up"]');
          flashFeedback("Change reviewed", "That update signal is now off the urgent board.", "ready");
          renderEntry();
          return;
        }

        if (action === "later") {
          appState.toggleDeltaDeferred(deltaId);
          queueFocus('.ri-mode-shell[data-mode="catch-me-up"]');
          flashFeedback("Delta state changed", "The update board adjusted its pressure for that signal.", "caution");
          renderEntry();
        }
      });
    }

    for (const companionButton of previewRoot.querySelectorAll("[data-ri-companion-action]")) {
      companionButton.addEventListener("click", () => {
        const action = companionButton.getAttribute("data-ri-companion-action");

        if (action === "toggle") {
          appState.toggleCompanion();
          queueFocus(appState.companionOpen ? "#ri-live-companion-panel" : ".ri-live-companion__toggle");
          flashFeedback(appState.companionOpen ? "Companion open" : "Companion collapsed", "The live run utility has shifted state.", "intel");
          renderEntry();
          return;
        }

        if (action === "expand") {
          appState.toggleCompanion(true);
          appState.setCompanionDetailLevel("detailed");
          queueFocus("#ri-live-companion-panel");
          flashFeedback("Detailed view armed", "The companion is showing the full tactical readout.", "ready");
          renderEntry();
          return;
        }

        if (action === "compact") {
          appState.setCompanionDetailLevel("compact");
          queueFocus("#ri-live-companion-panel");
          flashFeedback("Compact view armed", "The companion has compressed into quick-scan mode.", "intel");
          renderEntry();
          return;
        }

        if (action === "detailed") {
          appState.setCompanionDetailLevel("detailed");
          queueFocus("#ri-live-companion-panel");
          flashFeedback("Detailed view armed", "The companion has expanded the full tactical detail.", "ready");
          renderEntry();
          return;
        }

        if (action === "resume-plan") {
          const targetSelector = liveCompanion.plan?.resumeTarget;
          if (targetSelector) {
            openReferenceTarget(targetSelector, "Plan resumed", "The active plan has been pushed back into view.");
          }
          return;
        }

        if (action === "adjust-plan") {
          if (appState.activeRunPlanId) {
            appState.loadRunPlanToDraft(appState.activeRunPlanId);
          } else {
            appState.persist({
              activeCommandId: "prep-my-run",
              selectedModeId: "run-planning",
              lastModeId: "run-planning",
              modeHistory: ["run-planning", ...appState.modeHistory.filter((modeId) => modeId !== "run-planning")].slice(0, 8)
            });
          }
          queueFocus('.ri-mode-shell[data-mode="prep-my-run"]');
          flashFeedback("Plan adjustment ready", "Planning mode is open with the current context loaded.", "ready");
          writeModeToLocation("prep-my-run");
          renderEntry();
          return;
        }

        if (action === "open-prep") {
          appState.persist({
            activeCommandId: "prep-my-run",
            selectedModeId: "run-planning",
            lastModeId: "run-planning",
            modeHistory: ["run-planning", ...appState.modeHistory.filter((modeId) => modeId !== "run-planning")].slice(0, 8)
          });
          queueFocus('.ri-mode-shell[data-mode="prep-my-run"]');
          flashFeedback("Planning opened", "Prep My Run is now live and ready for a cleaner lane.", "ready");
          writeModeToLocation("prep-my-run");
          renderEntry();
          return;
        }

        if (action === "use-latest-plan") {
          const latestPlanId = appState.savedRunPlans[0]?.id;
          if (latestPlanId) {
            appState.setActiveRunPlan(latestPlanId);
          }
          queueFocus("#ri-live-companion-panel");
          flashFeedback("Plan activated", "The latest saved plan is now the active lane.", "ready");
          renderEntry();
          return;
        }

        if (action === "log-failure") {
          appState.recordRunOutcome("failure");
          queueFocus("#ri-live-companion-panel");
          flashFeedback("Failure logged", "The adaptive layer will lean harder on safer variation now.", "caution");
          renderEntry();
          return;
        }

        if (action === "log-success") {
          appState.recordRunOutcome("success");
          queueFocus("#ri-live-companion-panel");
          flashFeedback("Recovery logged", "Recent failure pressure has been eased for this lane.", "ready");
          renderEntry();
        }
      });
    }

    for (const adaptiveButton of previewRoot.querySelectorAll("[data-ri-adaptive-action]")) {
      adaptiveButton.addEventListener("click", () => {
        const action = adaptiveButton.getAttribute("data-ri-adaptive-action");
        const nudgeId = adaptiveButton.getAttribute("data-ri-nudge-id");
        const commandId = adaptiveButton.getAttribute("data-ri-command-id");
        const targetSelector = adaptiveButton.getAttribute("data-ri-target");

        if (action === "dismiss-nudge" && nudgeId) {
          appState.dismissNudge(nudgeId);
          queueFocus(".ri-adaptive-strip");
          flashFeedback("Nudge dismissed", "That reminder is off the board until the system has a reason to bring it back.", "intel");
          renderEntry();
          return;
        }

        if (action === "restore-nudge" && nudgeId) {
          appState.restoreNudge(nudgeId);
          queueFocus(".ri-adaptive-strip");
          flashFeedback("Nudge restored", "That reminder is back in rotation.", "intel");
          renderEntry();
          return;
        }

        if (action === "reset-adaptive") {
          appState.resetAdaptiveState();
          queueFocus(".ri-adaptive-strip");
          flashFeedback("Adaptive memory cleared", "The shell is back to a clean behavioral baseline.", "intel");
          renderEntry();
          return;
        }

        if (action === "clear-blocker") {
          appState.clearProblem();
          queueFocus(".ri-adaptive-strip");
          flashFeedback("Blocker cleared", "Recovery pressure has been removed from the current state.", "ready");
          renderEntry();
          return;
        }

        if (action === "run-command" && commandId) {
          activateCommand(commandId, "intel", "The shell has switched lanes from an adaptive recommendation.");
          return;
        }

        if (action === "open-target" && targetSelector) {
          openReferenceTarget(targetSelector, "Target opened", "The adaptive layer routed you straight to supporting intel.");
        }
      });
    }

    for (const archiveButton of previewRoot.querySelectorAll("[data-ri-archive-action]")) {
      archiveButton.addEventListener("click", () => {
        ensureReferenceArchiveOpen();
        queueFocus("#reference-archive summary");
        flashFeedback("Archive opened", "Reference depth is available without taking over the whole product again.", "intel");
        runtime.helpers.scrollElementIntoView(document.querySelector("#reference-archive"));
      });
    }
  }

  previewRoot.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !appState.companionOpen) {
      return;
    }

    event.preventDefault();
    appState.toggleCompanion(false);
    queueFocus(".ri-live-companion__toggle");
    flashFeedback("Companion collapsed", "The live run utility stepped out of the way.", "intel");
    renderEntry();
  });

  shellElement.dataset.runtimeVersion = runtime.app.version;
  shellElement.dataset.phase = appState.shellPhase;
  shellElement.hidden = false;
  shellElement.setAttribute("aria-hidden", "false");

  writeModeToLocation(appState.activeCommandId);
  renderEntry();
  appState.acknowledgeVisit();
}

mountRaiderInterfaceScaffold();
