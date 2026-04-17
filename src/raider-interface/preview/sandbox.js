import {
  renderSignalBadge,
  renderTacticalPanel,
  renderWarningCallout
} from "../components/primitives.js";
import { buildContextualSupport } from "../content/contextual-support.js";

function getBlocker(contentDelivery, blockerId) {
  return contentDelivery.blockers.find((blocker) => blocker.id === blockerId) ?? contentDelivery.blockers[0];
}

function formatModeLabel(modeId) {
  return String(modeId)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getStatusHeadline(appState) {
  if (appState.adaptive?.repeatedFailure) {
    return `${appState.adaptive.repeatedFailure.label} has repeated ${appState.adaptive.repeatedFailure.count} times. The interface is pushing a safer variation now.`;
  }

  if (!appState.hasReturningState) {
    return "Fresh signal. The interface is ready to brief a new Raider immediately.";
  }

  if (appState.patchChangesSinceLastVisit > 0) {
    return `${appState.patchChangesSinceLastVisit} update signal${appState.patchChangesSinceLastVisit > 1 ? "s" : ""} landed since you were last here.`;
  }

  if (appState.activePlan) {
    return `Your last plan is still armed: ${appState.activePlan.label}.`;
  }

  if (appState.savedBlockerId) {
    return "Your last blocker is still on the board.";
  }

  return "The system remembers where you left off and is ready to move fast.";
}

function buildCommandResult({ appState, contentDelivery, commandIndex }) {
  const activeCommand = commandIndex[appState.activeCommandId] ?? commandIndex["brief-me"];
  const commandTarget = contentDelivery.commandTargets[activeCommand.id];
  const latestRelease = contentDelivery.releaseSignals;
  const selectedBlocker = appState.savedBlockerId ? getBlocker(contentDelivery, appState.savedBlockerId) : null;

  if (activeCommand.id === "brief-me") {
    return {
      eyebrow: "Briefing lane",
      title: appState.userContext.reviewedLessonCount ? "Resume the learning path fast." : "Start with the fast survival brief.",
      copy: appState.userContext.reviewedLessonCount
        ? `You have ${appState.userContext.reviewedLessonCount} reviewed lesson${appState.userContext.reviewedLessonCount > 1 ? "s" : ""}. The fastest useful next move is to lock the briefing, then continue into the track.`
        : "New Raiders do not need a giant homepage. They need the briefing, the first lessons, and one clear next move.",
      primary: commandTarget,
      secondary: {
        target: "#curriculum",
        label: "Open curriculum"
      },
      warning: {
        title: "Do not skip the first brief",
        body: "A flashy first raid is usually a short one. Start with the board that keeps you alive long enough to learn."
      }
    };
  }

  if (activeCommand.id === "prep-my-run") {
    const planLabel = appState.activePlan?.label ?? "Low-attention prep lane";
    return {
      eyebrow: "Run preparation",
      title: appState.activePlan ? `Continue: ${planLabel}` : "Build a clean pre-drop plan.",
      copy: appState.activePlan
        ? `${planLabel} is still unresolved. Re-open the prep board, tighten the checklist, and stop improvising your first two minutes.`
        : "Use machine intel and prep guidance to turn the next run into a deliberate loadout and risk posture.",
      primary: commandTarget,
      secondary: {
        target: "#materials-intel",
        label: "Review material routing"
      },
      warning: {
        title: "Unresolved plan pressure",
        body: appState.activePlan
          ? "The system still sees an armed plan. Finish it, dismiss it, or you will keep dragging stale intent into the next run."
          : "If you drop without a prep lane, you are volunteering for random mistakes."
      }
    };
  }

  if (activeCommand.id === "catch-me-up") {
    const deferredCount = appState.deferredDeltas?.length ?? 0;
    return {
      eyebrow: "Patch response",
      title: `Catch up on ${latestRelease.latestReleaseTitle}.`,
      copy: deferredCount > 0
        ? `You still have ${deferredCount} deferred change signal${deferredCount > 1 ? "s" : ""}. Stop pretending 'later' means 'solved.'`
        : appState.patchChangesSinceLastVisit > 0
        ? `${appState.patchChangesSinceLastVisit} update signal${appState.patchChangesSinceLastVisit > 1 ? "s" : ""} changed since your last visit. Start with the update center before trusting old habits.`
        : `${latestRelease.latestReleaseTitle} is still the latest release on the board. Use the update center to confirm what should change in your route or prep.`,
      primary: commandTarget,
      secondary: {
        target: "#curriculum",
        label: "Adjust learning path"
      },
      warning: {
        title: "Old habits expire quietly",
        body: deferredCount > 0
          ? "Deferred updates are still live pressure. Either review them or stop acting surprised when old habits fail."
          : latestRelease.latestReleaseSummary ?? "Patch context should change behavior, not just reading material."
      }
    };
  }

  const blocker = selectedBlocker ?? getBlocker(contentDelivery, contentDelivery.blockers[0].id);
  return {
    eyebrow: "Problem correction",
    title: blocker.label,
    copy: blocker.summary,
    primary: {
      target: blocker.primaryTarget,
      label: blocker.primaryLabel
    },
    secondary: {
      target: blocker.secondaryTarget,
      label: blocker.secondaryLabel
    },
    warning: {
      title: "Treat the blocker like a real input",
      body: "Do not keep queueing the same mistake and calling it experience."
    }
  };
}

function renderCommandTrigger(command, isActive, appState, contentDelivery) {
  const labelBadges = [];
  if (command.id === "catch-me-up" && appState.patchChangesSinceLastVisit > 0) {
    labelBadges.push(renderSignalBadge({ label: "New patch signal", tone: "caution", compact: true }));
  }
  if (command.id === "prep-my-run" && appState.activePlan) {
    labelBadges.push(renderSignalBadge({ label: "Active plan", tone: "ready", compact: true }));
  }
  if (command.id === "fix-my-problem" && appState.savedBlockerId) {
    labelBadges.push(renderSignalBadge({ label: "Saved blocker", tone: "danger", compact: true }));
  }
  if (command.id === "brief-me" && !appState.hasReturningState) {
    labelBadges.push(renderSignalBadge({ label: "Best first move", tone: "intel", compact: true }));
  }

  const target = contentDelivery.commandTargets[command.id];
  return `
    <button class="ri-command-trigger ${isActive ? "is-active" : ""}" type="button" data-ri-command="${command.id}" data-state="${isActive ? "active" : "idle"}" aria-pressed="${isActive ? "true" : "false"}">
      <div class="ri-command-trigger__top">
        <span class="ri-command-trigger__label">${command.label}</span>
        <span class="ri-command-trigger__badges">${labelBadges.join("")}</span>
      </div>
      <p class="ri-command-trigger__copy">${command.description}</p>
      <span class="ri-command-trigger__target">${target.primaryLabel}</span>
    </button>
  `;
}

function renderSystemFeedback(uiFeedback) {
  if (!uiFeedback) {
    return "";
  }

  return `
    <section class="ri-system-feedback" data-tone="${uiFeedback.tone}" aria-live="polite" role="status" tabindex="-1">
      <div class="ri-system-feedback__signal"></div>
      <div class="ri-system-feedback__copy">
        <p class="ri-kicker">System response</p>
        <h2 class="ri-mode-shell__title">${uiFeedback.title}</h2>
        <p class="ri-mode-shell__copy">${uiFeedback.copy}</p>
      </div>
    </section>
  `;
}

function renderContextModules(appState, contentDelivery) {
  const modules = [];

  if (appState.activePlan) {
    modules.push(`
      <article class="ri-context-module" data-tone="ready">
        <span class="ri-context-module__label">Active plan</span>
        <strong class="ri-context-module__value">${appState.activePlan.label}</strong>
        <p class="ri-context-module__copy">Still unresolved. The interface is keeping it on deck.</p>
      </article>
    `);
  }

  modules.push(`
    <article class="ri-context-module" data-tone="intel">
      <span class="ri-context-module__label">Next milestone</span>
      <strong class="ri-context-module__value">${appState.incompleteMilestone}</strong>
      <p class="ri-context-module__copy">This is the smallest useful thing still unfinished.</p>
    </article>
  `);

  if (appState.patchChangesSinceLastVisit > 0) {
    modules.push(`
      <article class="ri-context-module" data-tone="caution">
        <span class="ri-context-module__label">Patch drift</span>
        <strong class="ri-context-module__value">${appState.patchChangesSinceLastVisit} change signal${appState.patchChangesSinceLastVisit > 1 ? "s" : ""}</strong>
        <p class="ri-context-module__copy">You have not visited since the update board changed.</p>
      </article>
    `);
  }

  if (appState.savedBlockerId) {
    const blocker = getBlocker(contentDelivery, appState.savedBlockerId);
    modules.push(`
      <article class="ri-context-module" data-tone="danger">
        <span class="ri-context-module__label">Saved blocker</span>
        <strong class="ri-context-module__value">${blocker.label}</strong>
        <p class="ri-context-module__copy">${blocker.summary}</p>
      </article>
    `);
  }

  if (appState.adaptive?.repeatedFailure) {
    modules.push(`
      <article class="ri-context-module" data-tone="caution">
        <span class="ri-context-module__label">Repeat failure</span>
        <strong class="ri-context-module__value">${appState.adaptive.repeatedFailure.label}</strong>
        <p class="ri-context-module__copy">${appState.adaptive.repeatedFailure.count} recent repeats detected. The system wants a cleaner variation, not more stubbornness.</p>
      </article>
    `);
  }

  modules.push(`
      <article class="ri-context-module" data-tone="inactive">
        <span class="ri-context-module__label">Last mode</span>
        <strong class="ri-context-module__value">${formatModeLabel(appState.lastModeId)}</strong>
        <p class="ri-context-module__copy">The system keeps your last posture in memory.</p>
      </article>
    `);

  return modules.join("");
}

function renderAdaptiveNudges(appState) {
  const nudges = appState.adaptive?.nudges ?? [];

  if (!nudges.length) {
    return `
      <section class="ri-adaptive-strip ri-adaptive-strip-empty" aria-label="Adaptive guidance" tabindex="-1">
        <div class="ri-adaptive-strip__copy">
          <p class="ri-kicker">Adaptive layer</p>
          <h2 class="ri-mode-shell__title">Nothing is nagging you right now.</h2>
          <p class="ri-mode-shell__copy">Good. The system is quiet when the board is clean.</p>
        </div>
        <button class="ri-command-button" type="button" data-ri-adaptive-action="reset-adaptive">Reset adaptive memory</button>
      </section>
    `;
  }

  return `
    <section class="ri-adaptive-strip" aria-label="Adaptive guidance" tabindex="-1">
      <div class="ri-adaptive-strip__intro">
        <p class="ri-kicker">Adaptive guidance</p>
        <h2 class="ri-mode-shell__title">The interface remembers where pressure is building.</h2>
        <p class="ri-mode-shell__copy">These nudges are lightweight on purpose. Useful pressure, not needy software theater.</p>
      </div>
      <div class="ri-adaptive-grid">
        ${nudges.map((nudge) => `
          <article class="ri-adaptive-card" data-tone="${nudge.tone}">
            <div class="ri-adaptive-card__top">
              <div>
                <p class="ri-kicker">Smart nudge</p>
                <h3 class="ri-fix-card__title">${nudge.title}</h3>
              </div>
              <button class="ri-icon-action" type="button" data-ri-adaptive-action="dismiss-nudge" data-ri-nudge-id="${nudge.id}" aria-label="Dismiss nudge">Dismiss</button>
            </div>
            <p class="ri-fix-card__copy">${nudge.copy}</p>
            <div class="ri-mode-actions">
              ${nudge.primaryAction ? renderAdaptiveActionButton(nudge.primaryAction, nudge.id, true) : ""}
              ${nudge.secondaryAction ? renderAdaptiveActionButton(nudge.secondaryAction, nudge.id, false) : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAdaptiveActionButton(action, nudgeId, primary) {
  if (action.type === "command") {
    return `<button class="ri-command-button ${primary ? "ri-command-button-primary" : ""}" type="button" data-ri-adaptive-action="run-command" data-ri-command-id="${action.commandId}" data-ri-nudge-id="${nudgeId}">${action.label}</button>`;
  }

  if (action.type === "target") {
    return `<button class="ri-command-button ${primary ? "ri-command-button-primary" : ""}" type="button" data-ri-adaptive-action="open-target" data-ri-target="${action.target}" data-ri-nudge-id="${nudgeId}">${action.label}</button>`;
  }

  if (action.type === "companion") {
    return `<button class="ri-command-button ${primary ? "ri-command-button-primary" : ""}" type="button" data-ri-companion-action="${action.action}" data-ri-nudge-id="${nudgeId}">${action.label}</button>`;
  }

  return "";
}

function renderAdaptiveSummary(appState) {
  const recommendation = appState.adaptive?.recommendation;
  const unfinishedActions = appState.adaptive?.unfinishedActions ?? [];

  return `
    <div class="ri-adaptive-summary">
      <article class="ri-adaptive-summary__card">
        <p class="ri-kicker">Recommended lane</p>
        <strong class="ri-context-module__value">${recommendation?.label ?? "Prep My Run"}</strong>
        <p class="ri-context-module__copy">${recommendation?.reason ?? "No adaptive recommendation available yet."}</p>
      </article>
      <article class="ri-adaptive-summary__card">
        <p class="ri-kicker">Unfinished pressure</p>
        <strong class="ri-context-module__value">${unfinishedActions.length ? unfinishedActions.length : "Clear"}</strong>
        <p class="ri-context-module__copy">${unfinishedActions.length ? "There is still unresolved state affecting your next decision." : "No unfinished actions are currently pushing the shell."}</p>
      </article>
    </div>
  `;
}

function renderBlockerRail(appState, contentDelivery) {
  if (appState.activeCommandId !== "fix-my-problem") {
    return "";
  }

  return `
    <section class="ri-blocker-rail" aria-label="Saved blockers" tabindex="-1">
      <div class="ri-blocker-rail__copy">
        <p class="ri-kicker">Pick the real blocker</p>
        <h3 class="ri-blocker-rail__title">Stop diagnosing the wrong problem.</h3>
      </div>
      <div class="ri-blocker-rail__chips">
        ${contentDelivery.blockers
          .map(
            (blocker) => `
              <button
                class="ri-blocker-chip ${appState.savedBlockerId === blocker.id ? "is-active" : ""}"
                type="button"
                data-ri-blocker="${blocker.id}"
                aria-pressed="${appState.savedBlockerId === blocker.id ? "true" : "false"}"
              >
                ${blocker.label}
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFixModeWorkspace(modeWorkspace) {
  const { diagnostic } = modeWorkspace;

  return `
    <section class="ri-mode-shell" data-mode="${modeWorkspace.id}" data-tone="${modeWorkspace.shellTone}" tabindex="-1">
      <header class="ri-mode-shell__header">
        <div class="ri-mode-shell__intro">
          <p class="ri-kicker">${modeWorkspace.header.kicker}</p>
          <h2 class="ri-mode-shell__title">${modeWorkspace.header.title}</h2>
          <p class="ri-mode-shell__copy">${modeWorkspace.header.copy}</p>
        </div>
      </header>
      <div class="ri-mode-shell__indicators">
        ${modeWorkspace.indicators
          .map(
            (indicator) => `
              <article class="ri-mode-indicator">
                <span class="ri-mode-indicator__label">${indicator.label}</span>
                <strong class="ri-mode-indicator__value">${indicator.value}</strong>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="ri-fix-layout">
        <section class="ri-fix-selector">
          <div class="ri-fix-selector__copy">
            <p class="ri-kicker">Select the struggle</p>
            <h3 class="ri-fix-selector__title">Name the real problem.</h3>
          </div>
          <div class="ri-fix-selector__chips">
            ${diagnostic.problems
              .map(
                (problem) => `
                  <button
                    class="ri-fix-chip ${diagnostic.selectedProblem.id === problem.id ? "is-active" : ""}"
                    type="button"
                    data-ri-problem="${problem.id}"
                    aria-pressed="${diagnostic.selectedProblem.id === problem.id ? "true" : "false"}"
                  >
                    ${problem.label}
                  </button>
                `
              )
              .join("")}
          </div>

          ${diagnostic.followup ? `
            <div class="ri-fix-followup">
              <span class="ri-fix-followup__label">${diagnostic.followup.prompt}</span>
              <div class="ri-fix-followup__options">
                ${diagnostic.followup.options
                  .map(
                    (option) => `
                      <button
                        class="ri-fix-option ${diagnostic.selectedResponse === option.value ? "is-active" : ""}"
                        type="button"
                        data-ri-problem-answer="${diagnostic.selectedProblem.id}"
                        data-ri-answer="${option.value}"
                        aria-pressed="${diagnostic.selectedResponse === option.value ? "true" : "false"}"
                      >
                        ${option.label}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </div>
          ` : ""}
        </section>

        <section class="ri-fix-diagnosis">
          <article class="ri-fix-card ri-fix-card-emphasis">
            <p class="ri-kicker">Likely cause</p>
            <h3 class="ri-fix-card__title">${diagnostic.diagnosis.likelyCause}</h3>
            <p class="ri-fix-card__copy">${diagnostic.diagnosis.fit}</p>
          </article>

          <article class="ri-fix-card">
            <p class="ri-kicker">Blunt correction</p>
            <h3 class="ri-fix-card__title">${diagnostic.diagnosis.bluntAction}</h3>
            <div class="ri-fix-pair">
              <div>
                <span class="ri-fix-pair__label">Stop doing</span>
                <p class="ri-fix-card__copy">${diagnostic.diagnosis.stopDoing}</p>
              </div>
              <div>
                <span class="ri-fix-pair__label">Do next</span>
                <p class="ri-fix-card__copy">${diagnostic.diagnosis.saferPath}</p>
              </div>
            </div>
          </article>

          <article class="ri-fix-card">
            <p class="ri-kicker">Action handoff</p>
            <div class="ri-fix-actions">
              <button class="ri-command-button ri-command-button-primary" type="button" data-ri-fix-action="save-fix">
                Save this fix
              </button>
              ${diagnostic.diagnosis.planSeed ? `
                <button class="ri-command-button" type="button" data-ri-fix-action="apply-plan">
                  Apply suggested run
                </button>
              ` : ""}
              ${diagnostic.directActions
                .map(
                  (action) => `
                    <button class="ri-command-button" type="button" data-ri-target="${action.target}">
                      ${action.label}
                    </button>
                  `
                )
                .join("")}
            </div>
          </article>
        </section>

        <aside class="ri-fix-sidecar">
          <article class="ri-fix-card">
            <p class="ri-kicker">Recommended path</p>
            <h3 class="ri-fix-card__title">${diagnostic.diagnosis.planSeed ? "Prep My Run" : "Brief Me"}</h3>
            <p class="ri-fix-card__copy">
              ${diagnostic.diagnosis.planSeed
                ? "The system has a safer run posture ready. Push it straight into Prep My Run with the right context loaded."
                : "The fastest corrective move is not another raid. It is a clearer brief and a cleaner learning lane."}
            </p>
          </article>

          <article class="ri-fix-card">
            <p class="ri-kicker">Saved fixes</p>
            <div class="ri-saved-fixes">
              ${diagnostic.savedFixes.length
                ? diagnostic.savedFixes
                    .map(
                      (fix) => `
                        <button
                          class="ri-saved-fix"
                          type="button"
                          data-ri-problem="${fix.problemId}"
                          data-ri-response="${fix.responseId ?? ""}"
                        >
                          <strong>${fix.label}</strong>
                          <span>${fix.bluntAction}</span>
                        </button>
                      `
                    )
                    .join("")
                : '<p class="ri-fix-card__copy">No saved fixes yet. Save the ones that actually cut through your worst habits.</p>'}
            </div>
          </article>
        </aside>
      </div>
    </section>
  `;
}

function renderCatchUpModeWorkspace(modeWorkspace) {
  const { delta } = modeWorkspace;

  if (delta.fallback) {
    return `
      <section class="ri-mode-shell" data-mode="${modeWorkspace.id}" data-tone="${modeWorkspace.shellTone}" tabindex="-1">
        <header class="ri-mode-shell__header">
          <div class="ri-mode-shell__intro">
            <p class="ri-kicker">${modeWorkspace.header.kicker}</p>
            <h2 class="ri-mode-shell__title">${modeWorkspace.header.title}</h2>
            <p class="ri-mode-shell__copy">${modeWorkspace.header.copy}</p>
          </div>
        </header>
        <div class="ri-mode-shell__indicators">
          ${modeWorkspace.indicators
            .map(
              (indicator) => `
                <article class="ri-mode-indicator">
                  <span class="ri-mode-indicator__label">${indicator.label}</span>
                  <strong class="ri-mode-indicator__value">${indicator.value}</strong>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="ri-catchup-empty">
          <article class="ri-delta-spotlight">
            <p class="ri-kicker">Delta status</p>
            <h3 class="ri-delta-card__title">${delta.fallback.title}</h3>
            <p class="ri-delta-card__copy">${delta.fallback.copy}</p>
            <p class="ri-delta-card__copy">${delta.fallback.note}</p>
            <div class="ri-delta-actions">
              ${delta.fallback.actions
                .map((action, index) => action.commandId
                  ? `<button class="ri-command-button ${index === 0 ? "ri-command-button-primary" : ""}" type="button" data-ri-command="${action.commandId}">${action.label}</button>`
                  : `<button class="ri-command-button ${index === 0 ? "ri-command-button-primary" : ""}" type="button" data-ri-target="${action.target}">${action.label}</button>`)
                .join("")}
            </div>
          </article>
        </div>
      </section>
    `;
  }

  return `
    <section class="ri-mode-shell" data-mode="${modeWorkspace.id}" data-tone="${modeWorkspace.shellTone}" tabindex="-1">
      <header class="ri-mode-shell__header">
        <div class="ri-mode-shell__intro">
          <p class="ri-kicker">${modeWorkspace.header.kicker}</p>
          <h2 class="ri-mode-shell__title">${modeWorkspace.header.title}</h2>
          <p class="ri-mode-shell__copy">${modeWorkspace.header.copy}</p>
        </div>
      </header>
      <div class="ri-mode-shell__indicators">
        ${modeWorkspace.indicators
          .map(
            (indicator) => `
              <article class="ri-mode-indicator">
                <span class="ri-mode-indicator__label">${indicator.label}</span>
                <strong class="ri-mode-indicator__value">${indicator.value}</strong>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="ri-catchup-layout">
        <section class="ri-catchup-main">
          ${delta.focusItem ? `
            <article class="ri-delta-spotlight" data-impact="${delta.focusItem.impactLevel}">
              <div class="ri-delta-card__meta">
                <span class="ri-kicker">Priority shift</span>
                <div class="ri-delta-pills">
                  <span class="ri-delta-pill ${delta.focusItem.isNewSinceVisit ? "is-new" : ""}">${delta.focusItem.isNewSinceVisit ? "New since visit" : "Current signal"}</span>
                  <span class="ri-delta-pill">${delta.focusItem.affectedLane.moduleLabel}</span>
                  <span class="ri-delta-pill">${delta.focusItem.impactLevel} impact</span>
                </div>
              </div>
              <h3 class="ri-delta-card__title">${delta.focusItem.title}</h3>
              <p class="ri-delta-card__copy">${delta.focusItem.summary}</p>
              <div class="ri-delta-points">
                <div>
                  <span class="ri-fix-pair__label">What matters</span>
                  <p class="ri-delta-card__copy">${delta.focusItem.impact}</p>
                </div>
                <div>
                  <span class="ri-fix-pair__label">Do this now</span>
                  <p class="ri-delta-card__copy">${delta.focusItem.response}</p>
                </div>
                <div>
                  <span class="ri-fix-pair__label">Can ignore</span>
                  <p class="ri-delta-card__copy">${delta.focusItem.ignore}</p>
                </div>
              </div>
              <div class="ri-delta-actions">
                <button class="ri-command-button ri-command-button-primary" type="button" data-ri-delta-action="review" data-ri-delta-id="${delta.focusItem.id}" aria-pressed="${delta.focusItem.reviewed ? "true" : "false"}">
                  Mark reviewed
                </button>
                <button class="ri-command-button" type="button" data-ri-delta-action="later" data-ri-delta-id="${delta.focusItem.id}">
                  ${delta.focusItem.deferred ? "Remove from later" : "Revisit later"}
                </button>
                <button class="ri-command-button" type="button" data-ri-command="${delta.focusItem.affectedLane.modeId}">
                  Open ${delta.focusItem.affectedLane.modeLabel}
                </button>
                <button class="ri-command-button" type="button" data-ri-target="${delta.focusItem.affectedLane.target}">
                  Open ${delta.focusItem.affectedLane.moduleLabel}
                </button>
              </div>
            </article>
          ` : ""}

          <div class="ri-delta-stack">
            ${delta.items
              .filter((item) => !delta.focusItem || item.id !== delta.focusItem.id)
              .map(
                (item) => `
                  <article class="ri-delta-card ${item.reviewed ? "is-reviewed" : ""}" data-impact="${item.impactLevel}" data-reviewed="${item.reviewed ? "true" : "false"}" data-deferred="${item.deferred ? "true" : "false"}">
                    <div class="ri-delta-card__meta">
                      <span class="ri-kicker">${item.title}</span>
                      <div class="ri-delta-pills">
                        <span class="ri-delta-pill ${item.isNewSinceVisit ? "is-new" : ""}">${item.isNewSinceVisit ? "New" : item.reviewed ? "Reviewed" : "Live"}</span>
                        ${item.deferred ? '<span class="ri-delta-pill">Later</span>' : ""}
                        <span class="ri-delta-pill">${item.affectedLane.moduleLabel}</span>
                      </div>
                    </div>
                    <p class="ri-delta-card__copy"><strong>Change:</strong> ${item.summary}</p>
                    <p class="ri-delta-card__copy"><strong>Impact:</strong> ${item.impact}</p>
                    <p class="ri-delta-card__copy"><strong>Response:</strong> ${item.response}</p>
                    <p class="ri-delta-card__copy"><strong>Ignore:</strong> ${item.ignore}</p>
                    <div class="ri-delta-actions">
                      <button class="ri-command-button ${!item.reviewed ? "ri-command-button-primary" : ""}" type="button" data-ri-delta-action="review" data-ri-delta-id="${item.id}" aria-pressed="${item.reviewed ? "true" : "false"}">
                        ${item.reviewed ? "Reviewed" : "Mark reviewed"}
                      </button>
                      <button class="ri-command-button" type="button" data-ri-delta-action="later" data-ri-delta-id="${item.id}">
                        ${item.deferred ? "Remove from later" : "Revisit later"}
                      </button>
                      <button class="ri-command-button" type="button" data-ri-target="${item.affectedLane.target}">
                        Open ${item.affectedLane.moduleLabel}
                      </button>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <aside class="ri-catchup-sidecar">
          <article class="ri-fix-card">
            <p class="ri-kicker">Recommended next mode</p>
            <h3 class="ri-fix-card__title">${delta.recommendedMode}</h3>
            <p class="ri-fix-card__copy">This board updates the recommended next move as you review or defer change pressure.</p>
            ${delta.focusItem ? `
              <button class="ri-command-button ri-command-button-primary" type="button" data-ri-command="${delta.focusItem.affectedLane.modeId}">
                Switch to ${delta.focusItem.affectedLane.modeLabel}
              </button>
            ` : ""}
          </article>

          <article class="ri-fix-card">
            <p class="ri-kicker">Signal state</p>
            <div class="ri-delta-state-list">
              <div class="ri-delta-state">
                <span class="ri-delta-state__label">Needs response</span>
                <strong>${delta.pendingItems.length}</strong>
              </div>
              <div class="ri-delta-state">
                <span class="ri-delta-state__label">Reviewed</span>
                <strong>${delta.reviewedCount}</strong>
              </div>
              <div class="ri-delta-state">
                <span class="ri-delta-state__label">Revisit later</span>
                <strong>${delta.deferredCount}</strong>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  `;
}

function renderLiveCompanionOverlay(liveCompanion) {
  if (!liveCompanion) {
    return "";
  }

  const compactState = liveCompanion.hasPlan
    ? liveCompanion.plan.compact
    : liveCompanion.emptyState.compact;

  return `
    <div class="ri-live-companion ri-reflex-mode ${liveCompanion.isOpen ? "is-open" : ""}" data-has-plan="${liveCompanion.hasPlan ? "true" : "false"}">
      <button
        class="ri-live-companion__toggle"
        type="button"
        data-ri-companion-action="toggle"
        aria-expanded="${liveCompanion.isOpen ? "true" : "false"}"
        aria-controls="ri-live-companion-panel"
        aria-label="${liveCompanion.isOpen ? "Collapse Reflex Mode" : "Expand Reflex Mode"}"
      >
        <div class="ri-reflex-mode__compact-top">
          <span class="ri-live-companion__toggle-label">${liveCompanion.label}</span>
          <strong class="ri-live-companion__toggle-value">${compactState.status.label}</strong>
        </div>
        <div class="ri-reflex-mode__compact-grid" aria-label="Reflex Mode compact view">
          <div class="ri-reflex-mode__metric">
            <span class="ri-reflex-mode__metric-label">Objective</span>
            <strong class="ri-reflex-mode__metric-value">${compactState.objective}</strong>
          </div>
          <div class="ri-reflex-mode__metric">
            <span class="ri-reflex-mode__metric-label">Next</span>
            <strong class="ri-reflex-mode__metric-value">${compactState.nextAction}</strong>
          </div>
          <div class="ri-reflex-mode__metric">
            <span class="ri-reflex-mode__metric-label">Danger</span>
            <strong class="ri-reflex-mode__metric-value">${compactState.danger}</strong>
          </div>
          <div class="ri-reflex-mode__metric">
            <span class="ri-reflex-mode__metric-label">Status</span>
            <strong class="ri-reflex-mode__metric-value">${compactState.status.detail}</strong>
          </div>
        </div>
      </button>

      <section id="ri-live-companion-panel" class="ri-live-companion__panel" aria-label="Reflex Mode expanded view" aria-hidden="${liveCompanion.isOpen ? "false" : "true"}" ${liveCompanion.isOpen ? "" : "inert"} tabindex="-1">
        <div class="ri-live-companion__header">
          <div>
            <p class="ri-kicker">Expanded execution view</p>
            <h3 class="ri-live-companion__title">${liveCompanion.hasPlan ? liveCompanion.plan.missionType : liveCompanion.emptyState.status}</h3>
            <p class="ri-live-companion__copy">${liveCompanion.hasPlan ? liveCompanion.plan.label : liveCompanion.modeContext}</p>
            <p class="ri-live-companion__note">${liveCompanion.contextNote}</p>
          </div>
        </div>

        ${liveCompanion.hasPlan ? `
          <div class="ri-live-companion__summary">
            <article class="ri-live-companion__card ri-live-companion__card-emphasis">
              <p class="ri-kicker">Mission summary</p>
              <p class="ri-live-companion__copy">${liveCompanion.plan.missionSummary}</p>
            </article>
            <article class="ri-live-companion__card">
              <p class="ri-kicker">Top 3 priorities</p>
              <ul class="ri-live-companion__list">
                ${liveCompanion.plan.topPriorities.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
            <article class="ri-live-companion__card">
              <p class="ri-kicker">If things go bad</p>
              <p class="ri-live-companion__copy">${liveCompanion.plan.thingsGoBad}</p>
            </article>
            <article class="ri-live-companion__card">
              <p class="ri-kicker">Extraction trigger</p>
              <p class="ri-live-companion__copy">${liveCompanion.plan.extractionTrigger}</p>
            </article>
            ${liveCompanion.plan.adaptiveWarning ? `
              <article class="ri-live-companion__card ri-live-companion__card-alert">
                <p class="ri-kicker">Adaptive warning</p>
                <p class="ri-live-companion__copy">${liveCompanion.plan.adaptiveWarning}</p>
              </article>
            ` : ""}
          </div>

          <div class="ri-live-companion__detail">
            <article class="ri-live-companion__card">
              <p class="ri-kicker">Fallback action</p>
              <p class="ri-live-companion__copy">${liveCompanion.plan.fallbackAction}</p>
            </article>
            <article class="ri-live-companion__card">
              <p class="ri-kicker">Danger warning</p>
              <p class="ri-live-companion__copy">${liveCompanion.plan.biggestWarning}</p>
            </article>
            ${liveCompanion.plan.reminders.length ? `
              <article class="ri-live-companion__card">
                <p class="ri-kicker">Quick reminders</p>
                <ul class="ri-live-companion__list">
                  ${liveCompanion.plan.reminders.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </article>
            ` : ""}
            ${liveCompanion.plan.detail.avoidThis.length ? `
              <article class="ri-live-companion__card">
                <p class="ri-kicker">Avoid</p>
                <ul class="ri-live-companion__list">
                  ${liveCompanion.plan.detail.avoidThis.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </article>
            ` : ""}
          </div>

          <div class="ri-live-companion__actions">
            <button class="ri-command-button ri-command-button-primary" type="button" data-ri-companion-action="resume-plan">
              ${liveCompanion.plan.compact.nextAction}
            </button>
            <button class="ri-command-button" type="button" data-ri-companion-action="adjust-plan">
              Adjust plan
            </button>
            <button class="ri-command-button" type="button" data-ri-companion-action="toggle">
              Collapse Reflex Mode
            </button>
          </div>
        ` : `
          <div class="ri-live-companion__empty">
            <p class="ri-live-companion__copy">${liveCompanion.emptyState.copy}</p>
            <div class="ri-live-companion__actions">
              <button class="ri-command-button ri-command-button-primary" type="button" data-ri-companion-action="${liveCompanion.emptyState.primaryAction.action}">
                ${liveCompanion.emptyState.primaryAction.label}
              </button>
              <button class="ri-command-button" type="button" data-ri-companion-action="${liveCompanion.emptyState.secondaryAction.action}">
                ${liveCompanion.emptyState.secondaryAction.label}
              </button>
            </div>
          </div>
        `}
      </section>
    </div>
  `;
}

export function renderRaiderInterfacePreview({
  runtime,
  appState,
  modes,
  commands,
  contentDelivery,
  commandIndex,
  modeWorkspace,
  liveCompanion,
  uiFeedback
}) {
  const activeCommand = commandIndex[appState.activeCommandId];
  const contextualSupport = buildContextualSupport(modeWorkspace, appState, contentDelivery);
  const result = buildCommandResult({
    appState,
    contentDelivery,
    commandIndex
  });

  const commandMatrix = commands
    .map((command) => renderCommandTrigger(command, command.id === appState.activeCommandId, appState, contentDelivery))
    .join("");

  const modeChips = modes
    .map(
      (mode) => `
        <span class="ri-mode-chip ${mode.id === appState.selectedModeId ? "is-active" : ""}">
          ${mode.label}
        </span>
      `
    )
    .join("");

  const contextBadges = [
    renderSignalBadge({ label: appState.hasReturningState ? "Returning user" : "First deployment", tone: appState.hasReturningState ? "ready" : "intel" }),
    renderSignalBadge({ label: `${runtime.content.lessons.length} lessons online`, tone: "inactive", compact: true }),
    renderSignalBadge({ label: `${runtime.content.releases.length} release signals`, tone: "inactive", compact: true })
  ].join("");

  const briefingPanel = renderTacticalPanel({
    kicker: "System response",
    title: result.title,
    copy: result.copy,
    body: `
      <div class="ri-response-actions">
        <button class="ri-command-button ri-command-button-primary" type="button" data-ri-target="${result.primary.target}">
          ${result.primary.label}
        </button>
        <button class="ri-command-button" type="button" data-ri-target="${result.secondary.target}">
          ${result.secondary.label}
        </button>
      </div>
      ${renderWarningCallout({
        title: result.warning.title,
        body: result.warning.body,
        tone: activeCommand.id === "fix-my-problem" ? "danger" : activeCommand.id === "catch-me-up" ? "caution" : "intel"
      })}
    `,
    accent: "ri-tactical-panel-emphasis"
  });

  const modeShell = modeWorkspace.id === "fix-my-problem"
    ? renderFixModeWorkspace(modeWorkspace)
    : modeWorkspace.id === "catch-me-up"
      ? renderCatchUpModeWorkspace(modeWorkspace)
      : `
    <section class="ri-mode-shell" data-mode="${modeWorkspace.id}" data-tone="${modeWorkspace.shellTone}" tabindex="-1">
      <header class="ri-mode-shell__header">
        <div class="ri-mode-shell__intro">
          <p class="ri-kicker">${modeWorkspace.header.kicker}</p>
          <h2 class="ri-mode-shell__title">${modeWorkspace.header.title}</h2>
          <p class="ri-mode-shell__copy">${modeWorkspace.header.copy}</p>
        </div>
        <div class="ri-mode-shell__switcher" role="tablist" aria-label="Mode switching">
          ${commands
            .map(
              (command) => `
                <button
                  class="ri-mode-switch ${command.id === modeWorkspace.id ? "is-active" : ""}"
                  type="button"
                  data-ri-command="${command.id}"
                  role="tab"
                  aria-selected="${command.id === modeWorkspace.id ? "true" : "false"}"
                >
                  ${command.label}
                </button>
              `
            )
            .join("")}
        </div>
      </header>
      <div class="ri-mode-shell__indicators">
        ${modeWorkspace.indicators
          .map(
            (indicator) => `
              <article class="ri-mode-indicator">
                <span class="ri-mode-indicator__label">${indicator.label}</span>
                <strong class="ri-mode-indicator__value">${indicator.value}</strong>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="ri-mode-shell__body ri-mode-layout--${modeWorkspace.layout}">
        ${modeWorkspace.panels
          .map((panel, index) =>
            renderTacticalPanel({
              kicker: panel.kicker,
              title: panel.title,
              copy: panel.copy,
              body: `
                <ul class="ri-mode-list">
                  ${panel.list.map((item) => `<li>${item}</li>`).join("")}
                </ul>
                <div class="ri-mode-actions">
                  ${panel.actions
                    .map(
                      (action, actionIndex) => `
                        <button
                          class="ri-command-button ${index === 0 && actionIndex === 0 ? "ri-command-button-primary" : ""}"
                          type="button"
                          data-ri-target="${action.target}"
                        >
                          ${action.label}
                        </button>
                      `
                    )
                    .join("")}
                </div>
              `,
              accent: index === 0 ? "ri-tactical-panel-emphasis" : ""
            })
          )
          .join("")}
      </div>
    </section>
  `;

  return `
    <div class="ri-entry-screen">
      <div class="ri-preview__environment" aria-hidden="true"></div>
      ${renderSystemFeedback(uiFeedback)}
      <section class="ri-entry-screen__header">
        <div class="ri-entry-screen__intro">
          <div class="ri-entry-screen__badges">${contextBadges}</div>
          <p class="ri-kicker">Reactive entry</p>
          <h1 class="ri-display-title">Choose the command lane. The system will move first.</h1>
          <p class="ri-display-copy">${getStatusHeadline(appState)}</p>
          <div class="ri-entry-screen__modebar">
            ${modeChips}
          </div>
        </div>
        <aside class="ri-entry-screen__stateboard">
          <div class="ri-stateboard__top">
            <span class="ri-stateboard__label">State pulse</span>
            <strong class="ri-stateboard__value">${activeCommand.label}</strong>
          </div>
          <p class="ri-stateboard__copy">
            ${appState.hasReturningState
              ? "The interface is responding to stored progress, recent visits, and saved friction."
              : "No prior state found. The interface is defaulting to the fastest useful entry lane."}
          </p>
          <div class="ri-context-grid">
            ${renderContextModules(appState, contentDelivery)}
          </div>
          ${renderAdaptiveSummary(appState)}
          <div class="ri-stateboard__actions">
            ${appState.savedBlockerId ? `<button class="ri-command-button" type="button" data-ri-adaptive-action="clear-blocker">Clear blocker</button>` : ""}
            <button class="ri-command-button" type="button" data-ri-adaptive-action="reset-adaptive">Reset adaptive memory</button>
          </div>
        </aside>
      </section>

      <section class="ri-entry-screen__commands" aria-label="Primary command triggers">
        <div class="ri-command-matrix">
          ${commandMatrix}
        </div>
      </section>

      <section class="ri-entry-screen__response">
        ${briefingPanel}
        ${renderBlockerRail(appState, contentDelivery)}
      </section>
      ${renderAdaptiveNudges(appState)}
      ${modeShell}
      <section class="ri-support-shell" aria-label="Contextual support">
        <div class="ri-support-shell__intro">
          <p class="ri-kicker">Contextual intelligence</p>
          <h2 class="ri-mode-shell__title">${contextualSupport.title}</h2>
          <p class="ri-mode-shell__copy">${contextualSupport.copy}</p>
        </div>
        <div class="ri-support-grid">
          ${contextualSupport.cards
            .map(
              (card, index) => `
                <article class="ri-support-card ${index === 0 ? "ri-support-card-emphasis" : ""}">
                  <p class="ri-kicker">${card.kicker}</p>
                  <h3 class="ri-fix-card__title">${card.title}</h3>
                  <p class="ri-fix-card__copy">${card.copy}</p>
                  <div class="ri-mode-actions">
                    ${card.actions
                      .map((action, actionIndex) => {
                        if (action.type === "archive") {
                          return `<button class="ri-command-button ${index === 0 && actionIndex === 0 ? "ri-command-button-primary" : ""}" type="button" data-ri-archive-action="open">${action.label}</button>`;
                        }

                        return `<button class="ri-command-button ${index === 0 && actionIndex === 0 ? "ri-command-button-primary" : ""}" type="button" data-ri-target="${action.target}">${action.label}</button>`;
                      })
                      .join("")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
      ${renderLiveCompanionOverlay(liveCompanion)}
    </div>
  `;
}
