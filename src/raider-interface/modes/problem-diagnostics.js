function getSelectedProblem(contentDelivery, appState) {
  return contentDelivery.blockers.find((problem) => problem.id === appState.savedBlockerId) ?? contentDelivery.blockers[0];
}

function getDiagnosis(problem, appState) {
  const selectedResponse = appState.problemResponses?.[problem.id] ?? null;
  const diagnosis = problem.diagnoses?.[selectedResponse] ?? problem.diagnoses?.default;

  return {
    responseId: selectedResponse,
    responseLabel: problem.followup?.options.find((option) => option.value === selectedResponse)?.label ?? null,
    ...diagnosis
  };
}

const WHY_YOU_DIED_RUN_TYPES = {
  learn: "Safe learning run",
  quests: "Quest progression run",
  materials: "Material farming run",
  workshop: "Workshop support run",
  confidence: "Aggressive confidence run"
};

const WHY_YOU_DIED_PROFILES = {
  survival: {
    default: {
      cause: "You treated the opening like free real estate.",
      explanation: "The raid punished your route before your decisions had any cover.",
      fix: "Shrink the opening and leave earlier.",
      suggestedRunType: "Safe learning run"
    },
    opening: {
      cause: "You sprinted into a bad start and called it tempo.",
      explanation: "Your route was too exposed for your current read speed.",
      fix: "Take the shorter opening and pre-pick the exit.",
      suggestedRunType: "Safe learning run"
    },
    "open-ground": {
      cause: "You crossed dead space like nobody was watching.",
      explanation: "Open ground punished a route with no cover chain.",
      fix: "Route by cover instead of optimism.",
      suggestedRunType: "Conservative extraction run"
    },
    "after-noise": {
      cause: "You won the first fight and died to the echo.",
      explanation: "You stayed loud after the map already knew your address.",
      fix: "Reset after noise and downgrade the run immediately.",
      suggestedRunType: "Conservative extraction run"
    }
  },
  "poor-extractions": {
    default: {
      cause: "You kept running after the run was already won.",
      explanation: "The exit call came late, so the map made it for you.",
      fix: "Leave one decision earlier every time.",
      suggestedRunType: "Conservative extraction run"
    },
    "leave-late": {
      cause: "You reopened a finished run and paid for it.",
      explanation: "The extra stop cost more than the bag was worth.",
      fix: "Make the leave call before the greed spike.",
      suggestedRunType: "Conservative extraction run"
    },
    overfilled: {
      cause: "You let a full bag talk you into worse fights.",
      explanation: "Loot value rose, but your extraction discipline collapsed.",
      fix: "Protect the bag you have, not the fantasy bag.",
      suggestedRunType: "Material farming run"
    },
    "bad-route": {
      cause: "Your exit route was improv theater.",
      explanation: "You chose the most important movement in the run too late.",
      fix: "Pick the leave lane before the bag gets heavy.",
      suggestedRunType: "Conservative extraction run"
    }
  },
  "losing-loot": {
    default: {
      cause: "You looted like the exit was optional.",
      explanation: "The bag got value, then your discipline vanished.",
      fix: "Treat a good bag like a reason to leave, not linger.",
      suggestedRunType: "Conservative extraction run"
    },
    "greedy-reset": {
      cause: "You got a good bag and chased a better headline.",
      explanation: "One extra room turned owned loot into donated loot.",
      fix: "Bank the win and kill the greed lap.",
      suggestedRunType: "Material farming run"
    },
    "loud-exit": {
      cause: "You took a valuable bag through the loudest lane possible.",
      explanation: "The route advertised exactly what you were trying to save.",
      fix: "Exit through the boring lane and stay forgettable.",
      suggestedRunType: "Conservative extraction run"
    },
    "no-leave-call": {
      cause: "You never actually decided the run was done.",
      explanation: "Without a leave line, every detour looked justified.",
      fix: "Set the extraction trigger before the bag gets good.",
      suggestedRunType: "Workshop support run"
    }
  },
  "bad-fights": {
    default: {
      cause: "You fought the wrong fight with the wrong posture.",
      explanation: "The fight looked playable, but the setup was already crooked.",
      fix: "Choose cleaner engagements or stop taking them.",
      suggestedRunType: "Safe learning run"
    },
    "wrong-range": {
      cause: "You took a fight your kit was built to lose.",
      explanation: "Your weapon profile and route posture were arguing the whole time.",
      fix: "Plan the fight profile before locking the loadout.",
      suggestedRunType: "Aggressive confidence run"
    },
    "late-heal": {
      cause: "You tried to out-aim damage you should have reset.",
      explanation: "You stayed in the exchange after sustain was already gone.",
      fix: "Reset sooner and heal before re-peeking.",
      suggestedRunType: "Safe learning run"
    },
    "bad-commit": {
      cause: "You turned maybe-pressure into a full commit.",
      explanation: "The fight was optional until your ego made it mandatory.",
      fix: "Break contact faster when the advantage is not clean.",
      suggestedRunType: "Conservative extraction run"
    }
  }
};

function buildWhyYouDied(problem, diagnosis) {
  const profiles = WHY_YOU_DIED_PROFILES[problem.id];
  if (!profiles) {
    return null;
  }

  const selectedProfile = profiles[diagnosis.responseId] ?? profiles.default;
  const fallbackRunType = diagnosis.planSeed?.goal ? WHY_YOU_DIED_RUN_TYPES[diagnosis.planSeed.goal] : null;
  const suggestedRunType = selectedProfile.suggestedRunType ?? fallbackRunType ?? "Safe learning run";
  const shareText = [
    "WHY YOU DIED",
    `Cause: ${selectedProfile.cause}`,
    `Why: ${selectedProfile.explanation}`,
    `Fix: ${selectedProfile.fix}`,
    `Run: ${suggestedRunType}`
  ].join("\n");

  return {
    title: "WHY YOU DIED",
    cause: selectedProfile.cause,
    explanation: selectedProfile.explanation,
    fix: selectedProfile.fix,
    suggestedRunType,
    shareText,
    planSeed: diagnosis.planSeed ?? null
  };
}

function buildSavedFix(fixState) {
  return {
    id: `${fixState.problemId}-${fixState.responseId ?? "default"}`,
    problemId: fixState.problemId,
    label: fixState.problemLabel,
    responseLabel: fixState.responseLabel,
    bluntAction: fixState.bluntAction,
    saferPath: fixState.saferPath,
    planSeed: fixState.planSeed
  };
}

export function buildFixModeWorkspace(contentDelivery, appState) {
  const problem = getSelectedProblem(contentDelivery, appState);
  const diagnosis = getDiagnosis(problem, appState);
  const whyYouDied = buildWhyYouDied(problem, diagnosis);
  const recommendedMode = diagnosis.planSeed ? "Prep My Run" : "Brief Me";

  return {
    id: "fix-my-problem",
    shellTone: "danger",
    layout: "repair-console",
    header: {
      kicker: "Recovery mode",
      title: problem.label,
      copy: "This mode should cut through the excuse cloud fast, diagnose the likely issue, and hand the player one sharper next move."
    },
    indicators: [
      { label: "Problem fit", value: diagnosis.fit.startsWith("Strong") ? "Strong" : "Targeted" },
      { label: "Saved fixes", value: String(appState.savedFixes.length) },
      { label: "Suggested mode", value: recommendedMode }
    ],
    diagnostic: {
      problems: contentDelivery.blockers,
      selectedProblem: problem,
      followup: problem.followup ?? null,
      selectedResponse: diagnosis.responseId,
      diagnosis: {
        likelyCause: diagnosis.likelyCause,
        fit: diagnosis.fit,
        bluntAction: diagnosis.bluntAction,
        stopDoing: diagnosis.stopDoing,
        saferPath: diagnosis.saferPath,
        planSeed: diagnosis.planSeed ?? null
      },
      whyYouDied,
      savedFix: buildSavedFix({
        problemId: problem.id,
        problemLabel: problem.label,
        responseId: diagnosis.responseId,
        responseLabel: diagnosis.responseLabel,
        bluntAction: diagnosis.bluntAction,
        saferPath: diagnosis.saferPath,
        planSeed: diagnosis.planSeed ?? null
      }),
      directActions: [
        { label: problem.primaryLabel, target: problem.primaryTarget },
        { label: problem.secondaryLabel, target: problem.secondaryTarget }
      ],
      savedFixes: appState.savedFixes
    }
  };
}
