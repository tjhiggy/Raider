const PREP_REQUIRED_FIELDS = [
  "team",
  "goal",
  "timeWindow",
  "riskTolerance",
  "confidence",
  "blocker"
];

export const PREP_PLANNING_FIELDS = [
  {
    id: "team",
    label: "Team",
    required: true,
    options: [
      { value: "solo", label: "Solo" },
      { value: "duo", label: "Duo" },
      { value: "squad", label: "Squad" }
    ]
  },
  {
    id: "goal",
    label: "Goal",
    required: true,
    options: [
      { value: "learn", label: "Learn safely" },
      { value: "quests", label: "Quest push" },
      { value: "materials", label: "Farm materials" },
      { value: "workshop", label: "Workshop support" },
      { value: "confidence", label: "Take confident fights" }
    ]
  },
  {
    id: "timeWindow",
    label: "Time",
    required: true,
    options: [
      { value: "short", label: "15 min" },
      { value: "medium", label: "30 min" },
      { value: "long", label: "45+ min" }
    ]
  },
  {
    id: "riskTolerance",
    label: "Risk",
    required: true,
    options: [
      { value: "low", label: "Low risk" },
      { value: "medium", label: "Balanced" },
      { value: "high", label: "High risk" }
    ]
  },
  {
    id: "confidence",
    label: "Confidence",
    required: true,
    options: [
      { value: "low", label: "Shaky" },
      { value: "medium", label: "Steady" },
      { value: "high", label: "Locked in" }
    ]
  },
  {
    id: "blocker",
    label: "Blocker",
    required: true,
    options: [
      { value: "none", label: "None" },
      { value: "survival", label: "Staying alive" },
      { value: "quests", label: "Quest progress" },
      { value: "materials", label: "Crafting stock" },
      { value: "machines", label: "Machine pressure" }
    ]
  },
  {
    id: "aggression",
    label: "Aggression",
    required: false,
    options: [
      { value: "calm", label: "Calm" },
      { value: "balanced", label: "Balanced" },
      { value: "assertive", label: "Assertive" }
    ]
  }
];

const RUN_PLAN_PROFILES = [
  {
    id: "safe-learning-run",
    missionType: "Safe learning run",
    weights: {
      goal: { learn: 5 },
      riskTolerance: { low: 4 },
      confidence: { low: 3, medium: 1 },
      blocker: { survival: 3, machines: 2 },
      timeWindow: { short: 2, medium: 1 },
      aggression: { calm: 2 }
    },
    outputs: {
      objective: "Survive the first objective, extract clean, and build confidence instead of headlines.",
      mindset: "Move like you owe greed money and you are refusing to pay it.",
      loadout: "Sustainable kit with forgiving weapons, meds, and one disengage tool.",
      utility: [
        "Carry healing before luxury utility.",
        "Take one panic option that buys distance or cover.",
        "Keep bag space for flexible upgrades, not trophy loot."
      ],
      warning: "The trap is staying after the run is already successful.",
      fallback: "If the route gets noisy early, pivot to extraction practice instead of forcing the lesson under fire.",
      nextAction: { label: "Open briefing board", target: "#first-raid-briefing" },
      related: [
        { label: "New Raider lessons", target: "#curriculum" },
        { label: "Machine intel", target: "#machine-intel" }
      ],
      priorityStack: [
        "Stay undetected through the first route segment.",
        "Finish one objective, not three half-objectives.",
        "Leave before the run turns into chaos."
      ],
      doThis: [
        "Use cover chains and short exposures.",
        "Reset after noise instead of doubling down.",
        "Treat extraction as part of the objective."
      ],
      avoidThis: [
        "Open-ground ego peeks.",
        "Chasing fights after the bag is already worth protecting.",
        "Pretending a bad run can still be salvaged by stubbornness."
      ]
    }
  },
  {
    id: "quest-progression-run",
    missionType: "Quest progression run",
    weights: {
      goal: { quests: 5 },
      blocker: { quests: 4 },
      riskTolerance: { low: 1, medium: 2 },
      confidence: { medium: 2, high: 1 },
      team: { duo: 1, squad: 2 }
    },
    outputs: {
      objective: "Route for the quest first, then cash out before the run gets distracted.",
      mindset: "This is an assignment, not a sightseeing trip.",
      loadout: "Quest-shaped loadout with stable mid-range control, sustain, and one escape tool.",
      utility: [
        "Bring healing and a space-control option.",
        "Carry just enough for the route, not a museum collection.",
        "Keep one slot mentally reserved for the objective."
      ],
      warning: "The common failure is finishing the quest step and then dying because you stayed for bonus value.",
      fallback: "If the objective area is too hot, loop once, let it cool, and re-enter with intent instead of panic.",
      nextAction: { label: "Open quest ops", target: "#quest-ops" },
      related: [
        { label: "Curriculum", target: "#curriculum" },
        { label: "Update center", target: "#update-center" }
      ],
      priorityStack: [
        "Reach the quest zone with resources intact.",
        "Finish the exact condition.",
        "Extract before the map reclassifies you as free loot."
      ],
      doThis: [
        "Read the route like an assignment lane.",
        "Group compatible objective steps when safe.",
        "Call the run complete the moment the condition is secured."
      ],
      avoidThis: [
        "Wide scavenging detours.",
        "Optional fights with no quest value.",
        "Treating side loot as the real mission."
      ]
    }
  },
  {
    id: "material-farming-run",
    missionType: "Material farming run",
    weights: {
      goal: { materials: 5 },
      blocker: { materials: 4 },
      riskTolerance: { low: 2, medium: 2 },
      timeWindow: { medium: 2, long: 1 },
      aggression: { calm: 1, balanced: 1 }
    },
    outputs: {
      objective: "Target the exact family you need and leave before random loot hijacks the route.",
      mindset: "Crafting pressure is solved by route discipline, not panic scavenging.",
      loadout: "Lean farming kit that protects inventory value and keeps movement easy.",
      utility: [
        "Carry sustain over vanity gear.",
        "Bring one machine-disruption or disengage tool.",
        "Preserve inventory flexibility for stackable materials."
      ],
      warning: "You will waste the run if you let generic value crowd out the material target.",
      fallback: "If the main farm lane is contested, downgrade to a quieter family route and protect the bag.",
      nextAction: { label: "Open material intel", target: "#materials-intel" },
      related: [
        { label: "Prep board", target: "#machine-intel" },
        { label: "Quest ops", target: "#quest-ops" }
      ],
      priorityStack: [
        "Hit the first material lane fast.",
        "Secure the target family before luxury pickups.",
        "Leave with a useful bag, not a random one."
      ],
      doThis: [
        "Plan by family, not by vague hope.",
        "Favor repeatable loops over dramatic landmarks.",
        "Extract when the target stock is already meaningful."
      ],
      avoidThis: [
        "Overfilling the bag with side loot.",
        "Turning a farm run into an aim duel.",
        "Assuming one hot zone is your only source."
      ]
    }
  },
  {
    id: "workshop-support-run",
    missionType: "Workshop support run",
    weights: {
      goal: { workshop: 5 },
      blocker: { materials: 2, none: 1 },
      timeWindow: { short: 1, medium: 2, long: 2 },
      riskTolerance: { low: 2, medium: 1 },
      confidence: { medium: 1 }
    },
    outputs: {
      objective: "Feed progression pressure with steady, workshop-relevant value instead of jackpot hunting.",
      mindset: "This run exists to keep the machine moving back in Speranza.",
      loadout: "Budget-stable support loadout with consistent uptime and low regret.",
      utility: [
        "Carry sustain and one inventory-protection tool.",
        "Favor flexibility over peak damage.",
        "Think in inputs for the next upgrade, not raw sell price."
      ],
      warning: "The mistake is drifting into random looting that helps nothing you are building.",
      fallback: "If the route turns expensive, bank modest value and rerun the lane clean next time.",
      nextAction: { label: "Open material intel", target: "#materials-intel" },
      related: [
        { label: "Curriculum", target: "#curriculum" },
        { label: "Quest ops", target: "#quest-ops" }
      ],
      priorityStack: [
        "Collect workshop-relevant stock first.",
        "Protect future progression over one flashy pickup.",
        "Stack repeatable value."
      ],
      doThis: [
        "Route with a workshop purpose.",
        "Bank reliable inputs.",
        "Leave while the run still feels controlled."
      ],
      avoidThis: [
        "High-attention greed detours.",
        "Treating sell value as the only metric.",
        "Overcomplicating a support run."
      ]
    }
  },
  {
    id: "aggressive-confidence-run",
    missionType: "Aggressive confidence run",
    weights: {
      goal: { confidence: 5 },
      riskTolerance: { high: 4, medium: 1 },
      confidence: { high: 4, medium: 1 },
      aggression: { assertive: 3, balanced: 1 },
      team: { duo: 1, squad: 1 }
    },
    outputs: {
      objective: "Take controlled pressure fights that improve position instead of sprinting into content brainrot.",
      mindset: "Assertive does not mean noisy. You are still selecting the fight, not auditioning for one.",
      loadout: "Confident fight kit with reliable damage, sustain, and one option to reset bad tempo.",
      utility: [
        "Carry meds, not just pride.",
        "Bring one tool that controls space when tempo breaks.",
        "Keep a fallback route in mind before the first shot."
      ],
      warning: "High confidence becomes stupidity the second you stop tracking exit conditions.",
      fallback: "If the first fight burns too much health or time, downgrade to a controlled extraction run immediately.",
      nextAction: { label: "Open machine intel", target: "#machine-intel" },
      related: [
        { label: "Curriculum", target: "#curriculum" },
        { label: "Update center", target: "#update-center" }
      ],
      priorityStack: [
        "Take the fight that opens the lane.",
        "Reset if tempo gets sloppy.",
        "Protect the run before confidence turns into a donation."
      ],
      doThis: [
        "Fight with purpose and timing.",
        "Keep the next cover and next exit in mind.",
        "Escalate only when the reward is obvious."
      ],
      avoidThis: [
        "Permanent forward key behavior.",
        "Static angles after noise spikes.",
        "Treating every target as mandatory."
      ]
    }
  },
  {
    id: "conservative-extraction-run",
    missionType: "Conservative extraction run",
    weights: {
      riskTolerance: { low: 4 },
      timeWindow: { short: 3 },
      confidence: { low: 1, medium: 1 },
      blocker: { survival: 2, none: 1 },
      aggression: { calm: 2 }
    },
    outputs: {
      objective: "Grab one useful win condition fast and leave with resources instead of ambition.",
      mindset: "A small clean win is still a win. The bag does not care about your ego.",
      loadout: "Minimal-risk kit with stable healing, light utility, and clean extraction bias.",
      utility: [
        "Carry mobility or spacing utility.",
        "Keep the kit cheap enough that retreat still feels smart.",
        "Leave room for one good pickup and immediate exit."
      ],
      warning: "The danger is talking yourself into staying because the run feels easy.",
      fallback: "If the first lane goes bad, turn the whole run into extraction practice and cut losses.",
      nextAction: { label: "Open prep board", target: "#machine-intel" },
      related: [
        { label: "Briefing", target: "#first-raid-briefing" },
        { label: "Curriculum", target: "#curriculum" }
      ],
      priorityStack: [
        "Secure one useful objective.",
        "Avoid attention spikes.",
        "Exit before the map demands a second decision."
      ],
      doThis: [
        "Play the map edge when possible.",
        "Treat calm as an asset.",
        "Bank the first clean gain."
      ],
      avoidThis: [
        "Late greed pivots.",
        "Unforced re-engagements.",
        "Assuming an easy start means a safe finish."
      ]
    }
  }
];

function createId(prefix = "plan") {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function findOptionLabel(fieldId, value) {
  const field = PREP_PLANNING_FIELDS.find((item) => item.id === fieldId);
  return field?.options.find((option) => option.value === value)?.label ?? value;
}

function scoreProfile(profile, answers) {
  let score = 0;

  for (const [fieldId, mapping] of Object.entries(profile.weights)) {
    const answerValue = answers[fieldId];
    if (!answerValue) {
      continue;
    }

    score += mapping[answerValue] ?? 0;
  }

  return score;
}

function buildPlanLabel(profile, answers) {
  const teamLabel = findOptionLabel("team", answers.team);
  const goalLabel = findOptionLabel("goal", answers.goal);
  return `${teamLabel} ${goalLabel} lane`;
}

function toDirective(text) {
  if (!text) {
    return "";
  }

  return text
    .replace(/^You will\s+/i, "")
    .replace(/^You are\s+/i, "")
    .replace(/^This run exists to\s+/i, "")
    .replace(/^The trap is\s+/i, "Avoid ")
    .replace(/^The danger is\s+/i, "Avoid ")
    .replace(/^The common failure is\s+/i, "Avoid ")
    .replace(/^The mistake is\s+/i, "Avoid ")
    .replace(/^If\s+/i, "If ")
    .trim();
}

function trimActions(list, limit = 3) {
  return (list ?? []).slice(0, limit).map((item) => toDirective(item));
}

function calculateConfidenceLevel(answers, profileId) {
  let score = 0;

  if (answers.confidence === "high") {
    score += 2;
  } else if (answers.confidence === "medium") {
    score += 1;
  }

  if (answers.riskTolerance === "low") {
    score += 2;
  } else if (answers.riskTolerance === "medium") {
    score += 1;
  } else {
    score -= 1;
  }

  if (answers.team === "squad" || answers.team === "duo") {
    score += 1;
  }

  if (answers.blocker === "survival" || answers.blocker === "machines") {
    score -= 1;
  }

  if (answers.timeWindow === "short") {
    score -= 1;
  }

  if (answers.aggression === "assertive") {
    score -= 1;
  }

  if (profileId === "aggressive-confidence-run") {
    score -= 1;
  }

  if (profileId === "safe-learning-run" || profileId === "conservative-extraction-run") {
    score += 1;
  }

  if (score >= 4) {
    return {
      level: "high",
      label: "High confidence",
      reason: "Inputs support a stable lane with manageable exposure."
    };
  }

  if (score >= 1) {
    return {
      level: "medium",
      label: "Medium confidence",
      reason: "The lane is workable, but the run still depends on clean discipline."
    };
  }

  return {
    level: "low",
    label: "Low confidence",
    reason: "Risk and current pressure say this plan needs tighter execution or a safer variation."
  };
}

export function createDefaultPrepAnswers(userContext, storedState = {}) {
  return {
    team: storedState.prepDraftAnswers?.team ?? "solo",
    goal: storedState.prepDraftAnswers?.goal ?? (userContext.reviewedLessonCount ? "quests" : "learn"),
    timeWindow: storedState.prepDraftAnswers?.timeWindow ?? "medium",
    riskTolerance: storedState.prepDraftAnswers?.riskTolerance ?? "low",
    confidence: storedState.prepDraftAnswers?.confidence ?? (userContext.reviewedLessonCount >= 3 ? "medium" : "low"),
    blocker: storedState.prepDraftAnswers?.blocker ?? storedState.savedBlockerId ?? "none",
    aggression: storedState.prepDraftAnswers?.aggression ?? "calm"
  };
}

export function arePrepAnswersComplete(answers) {
  return PREP_REQUIRED_FIELDS.every((fieldId) => Boolean(answers[fieldId]));
}

export function buildRunPlan({ answers, contentDelivery }) {
  const scoredProfiles = RUN_PLAN_PROFILES
    .map((profile) => ({ profile, score: scoreProfile(profile, answers) }))
    .sort((left, right) => right.score - left.score);

  const selectedProfile = scoredProfiles[0]?.profile ?? RUN_PLAN_PROFILES[0];
  const { outputs } = selectedProfile;
  const blockerMatch = contentDelivery.blockers.find((blocker) => blocker.id === answers.blocker);
  const generatedAt = new Date().toISOString();
  const confidence = calculateConfidenceLevel(answers, selectedProfile.id);
  const priorityStack = trimActions(outputs.priorityStack);
  const doThis = trimActions(outputs.doThis);
  const avoidThis = trimActions(outputs.avoidThis);
  const utilityReminders = trimActions(outputs.utility);

  return {
    id: createId("run"),
    profileId: selectedProfile.id,
    label: buildPlanLabel(selectedProfile, answers),
    generatedAt,
    answers: { ...answers },
    missionType: selectedProfile.missionType,
    priorityObjective: toDirective(outputs.objective),
    recommendedBehavior: toDirective(outputs.mindset),
    loadoutPhilosophy: toDirective(outputs.loadout),
    utilityReminders,
    keyWarning: toDirective(outputs.warning),
    fallbackStrategy: toDirective(outputs.fallback),
    nextBestAction: outputs.nextAction,
    confidence,
    relatedSystems: blockerMatch
      ? [outputs.related[0], { label: blockerMatch.primaryLabel, target: blockerMatch.primaryTarget }, ...outputs.related.slice(1)]
      : outputs.related,
    priorityStack,
    doThis,
    avoidThis,
    compactExecution: {
      headline: selectedProfile.missionType,
      steps: [
        priorityStack[0],
        doThis[0],
        avoidThis[0]
      ],
      warning: toDirective(outputs.warning)
    }
  };
}

export function toPlanSummary(plan) {
  if (!plan) {
    return null;
  }

  return {
    id: plan.id,
    label: plan.label,
    target: plan.nextBestAction?.target ?? "#machine-intel"
  };
}
