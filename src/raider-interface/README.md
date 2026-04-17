# Raider Interface Phase 1

This folder is the rewrite scaffold for the next ARC Raiders companion experience.

## Current baseline

- Runtime: static HTML, CSS, and vanilla JavaScript
- Routing: single-document section navigation with render-driven selection
- Persistence: `localStorage` through the live field-guide state model
- Content model: large in-memory arrays for releases, lessons, quests, materials, machines, and checklist guidance

## What stays

- Content datasets that already hold useful guide knowledge
- Local persistence patterns that let the app remember progress
- Search, changelog, and guide-detail rendering concepts

## What gets refactored

- The single `src/main.js` runtime into focused modules
- Direct section rendering into mode-aware content delivery
- Implicit UI state into explicit app state, user context, and command systems

## Phase 1 modules

- `entry.js`: rewrite bootstrap
- `design/`: design token definitions for the next interface system
- `commands/`: command and action modeling
- `modes/`: intent-mode definitions
- `state/`: app state, persistence, and user-context adapters
- `content/`: transformed content delivery layer
- `overlay/`: live companion placeholder model
- `architecture/`: rewrite plan and migration audit

## Phase 2 additions

- `components/`: reusable UI primitives for badges, command tiles, tactical panels, selectors, summaries, and warnings
- `preview/`: limited-shell visual sandbox for the new design language
- expanded `design/tokens.js`: semantic states, motion, borders, shadows, interaction rules, and environmental guidance

## Phase 3 additions

- the Raider Interface shell is now the live landing surface
- entry behavior is state-aware and command-driven instead of passive and section-first
- the landing experience now routes users into existing boards with contextual logic instead of acting like a normal homepage

## Phase 4 additions

- the four core operating modes now run inside one shared shell
- mode switching is recoverable through stored state and URL routing
- each mode now has its own layout behavior and output structure instead of reusing one generic panel pattern

## Phase 6 additions

- `Fix My Problem` now runs as a dedicated recovery console instead of a generic blocker rail
- struggle selection, follow-up branching, diagnosis, and corrective action are all driven from shared blocker content definitions
- saved fixes and plan-seed handoff now let the recovery system push players directly into `Prep My Run` with prefilled context

## Phase 7 additions

- `Catch Me Up` now runs as a delta board instead of a lightweight release summary
- change items are ranked by player relevance, state drift, and action value instead of chronology alone
- reviewed and revisit-later state now give the update system memory so it can drive behavior instead of just reprinting release copy

## Phase 8 additions

- the Live Run Companion is now a real global overlay instead of a placeholder
- companion state reuses active run-plan memory, mode context, and existing planning outputs
- the overlay now supports compact and detailed views, fast resume, adjust-plan actions, and a planning-first empty state

## Phase 9 additions

- the Raider Interface now keeps lightweight adaptive memory for recent modes, unresolved blockers, unfinished plans, deferred delta pressure, and repeated failure patterns
- the entry shell now surfaces smart nudges, state-driven recommendations, and reset or dismiss controls instead of pretending every visit starts from zero
- the Live Run Companion and Catch Me Up mode now react to remembered context so the product feels stateful without becoming creepy or noisy

## Phase 10 additions

- legacy browse-first boards are now wrapped as a secondary Reference Archive instead of sitting in the primary interaction lane
- Raider Interface modes now surface contextual support cards so existing guide depth appears when it is relevant, not as the default product posture
- the product now treats lessons, quests, materials, machines, and release boards as supporting intelligence rather than the front-end identity

## Phase 11 additions

- the Raider Interface now uses restrained motion for entry wake, system feedback, mode panels, command selection, live companion expansion, and readiness signaling
- buttons, cards, reviewed states, and tactical surfaces now give faster visual confirmation through hover, press, active, and saved-state microinteractions
- reduced-motion handling now explicitly covers the new environmental drift, pulse accents, companion readiness animation, and feedback transitions

## Phase 12 additions

- focus recovery, skip navigation, and keyboard-friendly companion behavior now make the shell more usable under real rerenders instead of leaving accessibility to vibes
- archive rendering is lighter through content-visibility hints, while touch targets and mobile panel ergonomics are now less likely to betray the user mid-session
- fallback copy and launch-state semantics were tightened so unfinished or collapsed surfaces announce themselves honestly instead of looking accidentally broken

## Phase 13 additions

- the global execution overlay now runs as Reflex Mode, with a compact view built for under-three-second scanning during live gameplay
- expanding Reflex Mode reveals only the execution essentials: mission summary, top priorities, extraction trigger, and fallback guidance
- the overlay still reuses active run-plan state and persistent shell memory, but it now behaves like a real-time execution layer instead of a mini planning board

## Visual direction

- tactical over decorative
- layered instead of card-grid repetition
- asymmetrical without becoming chaotic
- dense but high-contrast
- reactive enough to feel alive, restrained enough to stay readable

## Next phase

The next phase should deepen the shared mission object so prep, recovery, adaptive nudges, delta response, and companion state all operate on one richer tactical model instead of a coordinated set of lighter fragments.
