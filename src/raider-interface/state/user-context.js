export function createUserContext(runtime) {
  const snapshot = runtime?.state?.getSnapshot?.() ?? {};

  return {
    reviewedLessonCount: snapshot.reviewedLessons?.length ?? 0,
    selectedTrackId: snapshot.selectedTrackId ?? null,
    selectedLessonId: snapshot.selectedLessonId ?? null,
    selectedQuestId: snapshot.selectedQuestId ?? null,
    selectedMaterialId: snapshot.selectedMaterialId ?? null,
    selectedReleaseId: snapshot.selectedReleaseId ?? null,
    hasProgress: Boolean(snapshot.reviewedLessons?.length),
    adaptationSignals: {
      onboardingNeeded: !snapshot.reviewedLessons?.length,
      prefersLearning: Boolean(snapshot.selectedTrackId),
      watchesUpdates: Boolean(snapshot.selectedReleaseId)
    }
  };
}
