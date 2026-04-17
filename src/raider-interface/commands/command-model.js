export const RAIDER_INTERFACE_COMMANDS = [
  {
    id: "brief-me",
    label: "Brief Me",
    intent: "onboarding",
    source: "first-raid-briefing",
    description: "Start with the fastest useful brief for a fresh or rusty Raider.",
    primaryTarget: "#first-raid-briefing",
    fallbackTarget: "#curriculum"
  },
  {
    id: "prep-my-run",
    label: "Prep My Run",
    intent: "run-planning",
    source: "machine-intel",
    description: "Turn the next drop into a concrete prep lane instead of a vague idea.",
    primaryTarget: "#machine-intel",
    fallbackTarget: "#materials-intel"
  },
  {
    id: "catch-me-up",
    label: "Catch Me Up",
    intent: "patch-response",
    source: "update-center",
    description: "Show what changed, what matters, and what should play differently now.",
    primaryTarget: "#update-center",
    fallbackTarget: "#curriculum"
  },
  {
    id: "fix-my-problem",
    label: "Fix My Problem",
    intent: "recovery",
    source: "curriculum",
    description: "Diagnose the blocker, then route straight to the section that can fix it.",
    primaryTarget: "#curriculum",
    fallbackTarget: "#quest-ops"
  }
];

export function buildCommandIndex(commands = RAIDER_INTERFACE_COMMANDS) {
  return commands.reduce((index, command) => {
    index[command.id] = command;
    return index;
  }, {});
}
