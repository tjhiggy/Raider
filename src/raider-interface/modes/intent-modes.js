export const RAIDER_INTENT_MODES = [
  {
    id: "onboarding",
    label: "Onboarding",
    summary: "Guide first-time Raiders toward survival basics and progression literacy.",
    drives: ["briefing", "curriculum", "prep-checklist"]
  },
  {
    id: "run-planning",
    label: "Run Planning",
    summary: "Help players decide what kind of run to execute next.",
    drives: ["decision-engine", "quests", "materials", "gear"]
  },
  {
    id: "patch-response",
    label: "Patch Response",
    summary: "Translate official updates into behavior changes players can act on.",
    drives: ["update-center", "release-timeline", "patch-impact"]
  },
  {
    id: "recovery",
    label: "Recovery",
    summary: "Identify what is stalling the player and route them to the fastest corrective action.",
    drives: ["curriculum", "quests", "materials", "machine-intel"]
  },
  {
    id: "live-companion",
    label: "Live Companion",
    summary: "Surface the fastest, most useful execution information during a run.",
    drives: ["quick-action", "pre-raid", "recovery"]
  }
];

export function getDefaultIntentMode() {
  return RAIDER_INTENT_MODES[0];
}
