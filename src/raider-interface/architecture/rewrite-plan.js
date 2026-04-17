export function buildRewritePlan(runtime) {
  const content = runtime?.content ?? {};

  return {
    framework: "Static HTML, CSS, and vanilla JavaScript",
    routing: "Single-document anchor navigation with render-driven section targeting",
    stateModel: "Centralized in src/main.js with localStorage persistence",
    preserve: [
      "content datasets for releases, lessons, quests, materials, machines, and prep",
      "localStorage-backed persistence habits",
      "search, changelog, and quick-reference render patterns",
      "existing field guide information architecture as migration source material"
    ],
    refactor: [
      "split monolithic runtime into focused modules",
      "separate content delivery logic from direct DOM rendering",
      "introduce explicit app state, mode selection, user context, and command abstractions"
    ],
    deprecate: [
      "all-in-one render loop as the only orchestration layer",
      "feature growth through one giant script file",
      "homepage sections carrying equal product weight forever"
    ],
    replaceLater: [
      "section-first page composition with mode-first mission control experience",
      "manual feature coupling with config-driven interface slices",
      "implicit adaptation with explicit run-state and user-context systems"
    ],
    contentCounts: {
      releases: content.releases?.length ?? 0,
      tracks: content.tracks?.length ?? 0,
      lessons: content.lessons?.length ?? 0,
      questSystems: content.questSystems?.length ?? 0,
      materialFamilies: content.materialFamilies?.length ?? 0,
      machines: content.machines?.length ?? 0
    }
  };
}
