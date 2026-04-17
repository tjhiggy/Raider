function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderSignalBadge({ label, tone = "intel", compact = false }) {
  return `
    <span class="ri-signal-badge ${compact ? "ri-signal-badge-compact" : ""}" data-tone="${escapeHtml(tone)}">
      ${escapeHtml(label)}
    </span>
  `;
}

export function renderCommandTile({ eyebrow, title, copy, action, tone = "intel" }) {
  return `
    <article class="ri-command-tile" data-tone="${escapeHtml(tone)}">
      <p class="ri-kicker">${escapeHtml(eyebrow)}</p>
      <h3 class="ri-command-tile__title">${escapeHtml(title)}</h3>
      <p class="ri-command-tile__copy">${escapeHtml(copy)}</p>
      <button class="ri-command-button" type="button">${escapeHtml(action)}</button>
    </article>
  `;
}

export function renderModeSelector(mode, isActive = false) {
  return `
    <button class="ri-mode-selector ${isActive ? "is-active" : ""}" type="button" data-mode-id="${escapeHtml(mode.id)}">
      <span class="ri-mode-selector__label">${escapeHtml(mode.label)}</span>
      <span class="ri-mode-selector__summary">${escapeHtml(mode.summary)}</span>
    </button>
  `;
}

export function renderCompactSummary({ label, value, meta, tone = "inactive" }) {
  return `
    <article class="ri-compact-summary" data-tone="${escapeHtml(tone)}">
      <span class="ri-compact-summary__label">${escapeHtml(label)}</span>
      <strong class="ri-compact-summary__value">${escapeHtml(value)}</strong>
      <span class="ri-compact-summary__meta">${escapeHtml(meta)}</span>
    </article>
  `;
}

export function renderWarningCallout({ title, body, tone = "caution" }) {
  return `
    <section class="ri-warning-callout" data-tone="${escapeHtml(tone)}">
      <span class="ri-warning-callout__marker"></span>
      <div>
        <h3 class="ri-warning-callout__title">${escapeHtml(title)}</h3>
        <p class="ri-warning-callout__body">${escapeHtml(body)}</p>
      </div>
    </section>
  `;
}

export function renderReadinessIndicator({ label, state, detail, tone = "ready" }) {
  return `
    <article class="ri-readiness-indicator" data-tone="${escapeHtml(tone)}">
      <span class="ri-readiness-indicator__label">${escapeHtml(label)}</span>
      <strong class="ri-readiness-indicator__state">${escapeHtml(state)}</strong>
      <span class="ri-readiness-indicator__detail">${escapeHtml(detail)}</span>
    </article>
  `;
}

export function renderTacticalPanel({ kicker, title, copy, body, accent = "" }) {
  return `
    <section class="ri-tactical-panel ${accent}" aria-label="${escapeHtml(title)}">
      <p class="ri-kicker">${escapeHtml(kicker)}</p>
      <h3 class="ri-tactical-panel__title">${escapeHtml(title)}</h3>
      <p class="ri-tactical-panel__copy">${escapeHtml(copy)}</p>
      <div class="ri-tactical-panel__body">${body}</div>
    </section>
  `;
}
