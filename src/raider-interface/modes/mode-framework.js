const MODE_QUERY_KEY = "mode";
import { buildFixModeWorkspace } from "./problem-diagnostics.js";
import { buildCatchUpModeWorkspace } from "./catch-up-deltas.js";

function getLatestRelease(runtime) {
  return runtime.content.releases?.[0] ?? null;
}

function getFirstTrack(runtime) {
  return runtime.content.tracks?.[0] ?? null;
}

function getLessonsForTrack(runtime, trackId) {
  return (runtime.content.lessons ?? []).filter((lesson) => lesson.trackId === trackId);
}

function buildBriefMode(runtime, appState) {
  const firstTrack = getFirstTrack(runtime);
  const trackLessons = firstTrack ? getLessonsForTrack(runtime, firstTrack.id).slice(0, 3) : [];
  const latestRelease = getLatestRelease(runtime);
  const contentDelivery = window.RAIDER_INTERFACE?.contentDelivery;
  const intelSignals = contentDelivery?.getBriefIntelSignals?.() ?? [];

  return {
    id: "brief-me",
    shellTone: "intel",
    layout: "brief",
    header: {
      kicker: "Brief mode",
      title: "Concise intel for the next smart move.",
      copy: appState.userContext.reviewedLessonCount
        ? "You already have momentum. The system is trimming the noise and surfacing only what deserves immediate attention."
        : "This mode assumes the player needs clarity fast, not a wall of content and a pep talk."
    },
    indicators: [
      { label: "Reviewed lessons", value: String(appState.userContext.reviewedLessonCount) },
      { label: "Current track", value: firstTrack?.title ?? "Guide" },
      { label: "Latest signal", value: latestRelease?.title ?? "No release" }
    ],
    intelSignals,
    panels: [
      {
        kicker: "Daily guidance",
        title: "What to do first",
        copy: appState.incompleteMilestone,
        list: trackLessons.map((lesson) => `${lesson.title} · ${lesson.time}`),
        actions: [
          { label: "Open briefing", target: "#first-raid-briefing" },
          { label: "Open curriculum", target: "#curriculum" }
        ]
      },
      {
        kicker: "Current watch",
        title: latestRelease?.title ?? "Release board quiet",
        copy: latestRelease?.summary ?? "No release summary available.",
        list: (latestRelease?.confirmed ?? []).slice(0, 3),
        actions: [
          { label: "Open update center", target: "#update-center" }
        ]
      }
    ]
  };
}

function buildPrepMode(runtime, appState) {
  const prepChecklist = (runtime.content.prepChecklist ?? []).slice(0, 4);
  const machines = (runtime.content.machines ?? []).slice(0, 3);
  const planLabel = appState.activePlan?.label ?? "Low-attention prep lane";
  const contentDelivery = window.RAIDER_INTERFACE?.contentDelivery;
  const intelSignals = contentDelivery?.getPrepIntelSignals?.(appState) ?? [];

  return {
    id: "prep-my-run",
    shellTone: "ready",
    layout: "prep",
    header: {
      kicker: "Prep mode",
      title: planLabel,
      copy: "Structured planning beats adrenaline cosplay. This mode narrows the run into a checklist, threat watch, and next action."
    },
    indicators: [
      { label: "Plan state", value: appState.activePlan ? "Armed" : "Draft" },
      { label: "Prep checks", value: `${prepChecklist.length} live` },
      { label: "Threat watch", value: `${machines.length} priority profiles` }
    ],
    intelSignals,
    panels: [
      {
        kicker: "Checklist",
        title: "Run setup",
        copy: "Use the prep board to reduce the number of dumb decisions left for Topside.",
        list: prepChecklist,
        actions: [
          { label: "Open prep board", target: "#machine-intel" },
          { label: "Open material intel", target: "#materials-intel" }
        ]
      },
      {
        kicker: "Threat watch",
        title: "Machines that will punish sloppy prep",
        copy: "These are the threats most likely to punish indecision or bad timing.",
        list: machines.map((machine) => `${machine.name} · ${machine.threat}`),
        actions: [
          { label: "Open machine intel", target: "#machine-intel" }
        ]
      }
    ]
  };
}

function buildCatchUpMode(runtime, appState, contentDelivery) {
  return buildCatchUpModeWorkspace(appState, contentDelivery);
}

export function resolveModeFromLocation(commandIndex) {
  const url = new URL(window.location.href);
  const value = url.searchParams.get(MODE_QUERY_KEY);
  return value && commandIndex[value] ? value : null;
}

export function writeModeToLocation(modeId) {
  const url = new URL(window.location.href);
  url.searchParams.set(MODE_QUERY_KEY, modeId);
  window.history.replaceState({}, "", url);
}

export function buildModeWorkspace(runtime, appState, contentDelivery) {
  switch (appState.activeCommandId) {
    case "prep-my-run":
      return buildPrepMode(runtime, appState);
    case "catch-me-up":
      return buildCatchUpMode(runtime, appState, contentDelivery);
    case "fix-my-problem":
      return buildFixModeWorkspace(contentDelivery, appState);
    case "brief-me":
    default:
      return buildBriefMode(runtime, appState);
  }
}
