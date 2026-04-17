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
