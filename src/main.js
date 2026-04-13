const VERSION_HISTORY = [
  {
    version: "v1.26.0",
    date: "2026-04-13",
    summary: "Added category icons, stronger status and trust cues, a more active updates feed, and clearer homepage CTA hierarchy.",
    changes: [
      "Added lightweight category indicators, reusable status tags, and visual tip-warning-trust callouts across major content areas.",
      "Reworked the updates feed into a more active chronological experience with major-versus-minor styling and an important-change highlight card.",
      "Tightened homepage CTA language and expanded the trust layer with maintained-by messaging, methodology guidance, and clearer last-verified context."
    ]
  },
  {
    version: "v1.25.0",
    date: "2026-04-13",
    summary: "Moved personalization into a top-of-home returning-user dashboard and only shows it when real saved state exists.",
    changes: [
      "Added a personalized dashboard near the top of the homepage with continue, recommended next step, progress summary, and saved items.",
      "Hidden the dashboard entirely for users without stored state so first-time visitors are not hit with empty pseudo-personalization.",
      "Reworked the dashboard layout so returning Raiders immediately feel the guide is adapting to their progress instead of making them start over."
    ]
  },
  {
    version: "v1.24.0",
    date: "2026-04-13",
    summary: "Added live-signal homepage modules for recently updated content, trending topics, updated-today cues, and since-your-last-visit context.",
    changes: [
      "Added a new Live Signal section on the homepage with recently updated and trending content cards tied to real guide entries.",
      "Added Updated today badges and lightweight ranking logic so the homepage feels more alive and worth revisiting.",
      "Added a since-your-last-visit panel that uses saved local progress state to surface what changed after a user's previous recorded visit."
    ]
  },
  {
    version: "v1.23.0",
    date: "2026-04-13",
    summary: "Upgraded primary content cards with cleaner decision metadata so Raiders can scan purpose, time, outcome, and difficulty faster.",
    changes: [
      "Enhanced major guide cards across Learn, Quests, Materials, Gear, ARC Intel, and homepage discovery with consistent Best for, Time, Outcome, and Difficulty metadata.",
      "Upgraded the shared card metadata renderer so content stays scannable without bloating card layouts into a sad little dashboard spreadsheet.",
      "Aligned homepage action cards with the same decision-driving pattern so the top of the app feels like one coherent discovery system."
    ]
  },
  {
    version: "v1.22.0",
    date: "2026-04-13",
    summary: "Added a visually dominant Start Here onboarding flow at the top of the homepage so new Raiders get one guided path instead of a pile of choices.",
    changes: [
      "Added a four-step onboarding section above the hero with a clear next-step CTA tied to existing guide sections.",
      "Connected onboarding progress to the current progress-tracking system so completed and reviewed activity changes the flow state automatically.",
      "Reduced first-visit decision paralysis by turning the top of the homepage into a guided sequence instead of making new users guess where to start."
    ]
  },
  {
    version: "v1.21.0",
    date: "2026-04-12",
    summary: "Added a fuller trust layer with a modern footer, feedback/report flows, clearer verification context, and a more useful changelog.",
    changes: [
      "Upgraded the footer with about, trust, feedback, changelog, methodology, FAQ placeholder, update dates, and community links.",
      "Added friction-light reporting flows for outdated info, improvement suggestions, and topic requests using the GitHub repo and Discord.",
      "Added clearer official-source and verification cues across updates, feed cards, search empty states, and release detail panels."
    ]
  },
  {
    version: "v1.20.0",
    date: "2026-04-12",
    summary: "Added richer visual intel, reusable media widgets, and lightweight interactive tools that make the guide more practical without tanking performance.",
    changes: [
      "Added a reusable visual-intel deck with image placeholders, video placeholders, and expandable reference panels for route reading, machine pressure, and gear logic.",
      "Added a beginner loadout builder and a material decision helper so players can solve common prep and stash problems directly in the app.",
      "Added reusable callout, comparison, and mini-flow patterns across the guide so the content teaches faster and reads less like a wall of raid homework."
    ]
  },
  {
    version: "v1.19.0",
    date: "2026-04-12",
    summary: "Added personalized progress, saved items, playstyle preferences, and a smarter return-user dashboard so the field guide behaves more like an app.",
    changes: [
      "Added persistent reviewed and completed states, section progress, overall guide progress, and continue-where-you-left-off behavior.",
      "Added save-for-later support across lessons, quests, materials, loadouts, quick-use gear, and release notes, plus a dedicated saved-items dashboard panel.",
      "Added a lightweight playstyle preference layer that changes recommended next actions and keeps the top of the app useful for returning Raiders."
    ]
  },
  {
    version: "v1.18.0",
    date: "2026-04-12",
    summary: "Upgraded content discovery with richer metadata, real filters, better search presentation, and related-content links across the guide.",
    changes: [
      "Converted major guide modules into stronger discovery cards with level, priority, tags, mode, goal, and read-time metadata where relevant.",
      "Added real filters for tracks, lessons, quests, materials, loadouts, quick-use items, and ARC intel so users can scan by beginner fit, progression goal, and pressure level.",
      "Added related-content patterns and improved search suggestions, result cards, and empty states so the site feels connected instead of dumped."
    ]
  },
  {
    version: "v1.17.0",
    date: "2026-04-12",
    summary: "Redesigned the homepage hero and tightened the ARC Raiders visual system into a more premium, cohesive companion-app style.",
    changes: [
      "Rebuilt the hero into a stronger landing section with clearer headline hierarchy, better CTA emphasis, and a more game-focused visual treatment.",
      "Established stronger design tokens for color, type scale, surfaces, badges, buttons, shadows, and spacing so the homepage feels consistent and intentional.",
      "Polished homepage cards and section styling so the site reads like a dedicated ARC Raiders utility app instead of a generic content page."
    ]
  },
  {
    version: "v1.16.3",
    date: "2026-04-12",
    summary: "Reverified the guide against official ARC Raiders posts and confirmed the site is still current after the April 8 patch cycle.",
    changes: [
      "Rechecked the official news hub, patch notes, and roadmap posts through April 12, 2026.",
      "Confirmed the current live guide already matches the latest official baseline from Patch Notes 1.23.0 and the April 4 UX update.",
      "Updated the official verification stamp so returning players can see the guide was checked again today."
    ]
  },
  {
    version: "v1.16.2",
    date: "2026-04-10",
    summary: "Added a visible official-verification stamp so players can see when the guide was last checked against Embark posts.",
    changes: [
      "Added a footer stamp that shows the last official ARC Raiders post verification date.",
      "Connected the stamp to the app metadata so it updates alongside normal guide versioning.",
      "Keeps the guide's update credibility easier to understand for returning players."
    ]
  },
  {
    version: "v1.16.1",
    date: "2026-04-08",
    summary: "Replaced the April 8 patch placeholder with confirmed 1.23.0 fixes and tightened the release guidance around Close Scrutiny, maps, and workshop flow.",
    changes: [
      "Replaced the vague 1.23.0 placeholder with confirmed official fixes for Trigger 'Nades, shoulder swap, weapon and item firing behavior, Stella Montis, Buried City, and Close Scrutiny.",
      "Updated the official-news module and release guidance so the latest patch reflects real April 8 gameplay and map fixes instead of pending-review language.",
      "Fixed the release detail panel separator rendering and kept the April workshop guidance aligned with Embark's Acquire Resources UX update."
    ]
  },
  {
    version: "v1.16.0",
    date: "2026-04-08",
    summary: "Refreshed the official update watch for ARC Raiders' April post-Flashpoint patch cycle and aligned guide advice with the latest official posts.",
    changes: [
      "Added official April release records for Hotfix 1.22.1, the April 4 UX update, and Patch Notes 1.23.0.",
      "Updated the workshop and materials guidance around the new Acquire Resources flow and current official crafting friction fixes.",
      "Reframed the update spotlight so the newest official post drives the app instead of stale pre-April Flashpoint copy."
    ]
  },
  {
    version: "v1.15.0",
    date: "2026-04-03",
    summary: "Performed a full UI/UX pass to simplify navigation, tighten the header and hero, and make the app feel more like one guided training product.",
    changes: [
      "Collapsed the top of the app into one clearer navigation system so the header, hero, and section entry points stop competing with each other.",
      "Tightened the visual density of the header, hero, card shadows, and launch area so more useful guide content appears sooner on both desktop and mobile.",
      "Improved the top-level information architecture by reducing repeated emphasis, simplifying entry choices, and making the current focus clearer from the main nav."
    ]
  },
  {
    version: "v1.14.1",
    date: "2026-04-03",
    summary: "Added a current community-tracked quest directory and made the material and gear sections more decision-focused for new Raiders.",
    changes: [
      "Added a named quest directory grouped by Trader with a link to the current public walkthrough index.",
      "Reworked the materials section toward stash decisions and progression value instead of weaker generic lookup content.",
      "Reworked the gear section around loadout blueprints so new Raiders can choose kits based on raid purpose."
    ]
  },
  {
    version: "v1.14.0",
    date: "2026-04-03",
    summary: "Expanded the guide tracks with more intentional ARC Raiders-specific lessons and less generic shooter filler.",
    changes: [
      "Restructured the learning paths around higher-signal themes inspired by strong extraction-game companion sites: progression planning, route intent, and system-specific decision support.",
      "Added more ARC Raiders-specific lessons covering operations, conditions, Scrappy, locked-room value, workshop decisions, and expedition timing.",
      "Shifted the tracks further away from obvious shooter advice and toward the game knowledge that actually improves runs in ARC Raiders."
    ]
  },
  {
    version: "v1.13.1",
    date: "2026-03-31",
    summary: "Streamlined the top of the site with a tighter header, smaller hero, and lighter focus/community treatment.",
    changes: [
      "Removed the large standalone community panel from the top of the page and folded Discord into a smaller hero callout.",
      "Reduced the visual size of the header, search row, hero, and dashboard cards so the first screen feels less crowded.",
      "Compressed the focus area into a lighter strip so more actual guide content is visible sooner."
    ]
  },
  {
    version: "v1.13.0",
    date: "2026-03-31",
    summary: "Improved update organization, expanded extraction-shooter onboarding, added Expeditions guidance, and rechecked materials after Flashpoint.",
    changes: [
      "Reduced duplication in the Updates flow by making the timeline and detail panel serve different jobs.",
      "Added stronger extraction-shooter fundamentals in the Learn focus, including raid concepts and what makes the genre different.",
      "Added Expeditions to the Quests focus and marked the materials catalog as verified against current public post-Flashpoint info."
    ]
  },
  {
    version: "v1.12.1",
    date: "2026-03-31",
    summary: "Trimmed the oversized header into a simpler top navigation and fixed focus buttons so they jump to the correct section.",
    changes: [
      "Reduced the header footprint to a more familiar top-nav layout inspired by the official site pattern.",
      "Moved the larger site introduction back into the page content so the menu does not dominate the first screen.",
      "Fixed focus navigation so repeated clicks do not keep stepping down the page."
    ]
  },
  {
    version: "v1.12.0",
    date: "2026-03-31",
    summary: "Redesigned the top of the app into a clearer site header with integrated navigation, search, and focus controls.",
    changes: [
      "Replaced the floating quick-access console with a more cohesive header that explains what the site is for.",
      "Integrated primary navigation, search, progress, and focus switching into one top-level menu system.",
      "Improved the first-open experience so new players can understand the site faster and jump to the right content with less clutter."
    ]
  },
  {
    version: "v1.11.0",
    date: "2026-03-31",
    summary: "Updated the app for Flashpoint launch with live official details from Embark's March 31, 2026 release coverage.",
    changes: [
      "Replaced the Flashpoint placeholder update record with live release details from the official content update and news hub.",
      "Added Flashpoint's key additions to the guide, including ARC Operation: Close Scrutiny, the Vaporizer, Canto, Dolabra, Surge Coil, and the High Gain Antenna project.",
      "Refreshed the official-news module so the latest Embark posts for March 31, 2026 are visible at the top of the app."
    ]
  },
  {
    version: "v1.10.0",
    date: "2026-03-30",
    summary: "Added material-purpose guidance plus a new weapons and quick-use gear training section for newer Raiders.",
    changes: [
      "Added a material value guide that explains likely uses, keep-or-sell decisions, and recycle guidance.",
      "Added a beginner-friendly weapons and quick-use gear section built around practical loadout roles instead of raw item dumping.",
      "Integrated gear knowledge into the same focus-based navigation so new players can find it quickly."
    ]
  },
  {
    version: "v1.9.0",
    date: "2026-03-30",
    summary: "Added a curated Latest From Embark news module so players can see recent official posts without leaving the training app.",
    changes: [
      "Added an official-news watch panel inside the updates flow of the app.",
      "Seeded it with recent Embark posts and direct links back to the official ARC Raiders news site.",
      "Structured the module so it can be refreshed regularly without needing a full page redesign."
    ]
  },
  {
    version: "v1.8.1",
    date: "2026-03-30",
    summary: "Expanded ARC Machine Intel with practical kill tips, weak points, and recommended weapon or tactic types.",
    changes: [
      "Added machine-by-machine guidance for how to destroy ARC more efficiently.",
      "Included weak-point focus, suggested ammo or utility style, and one practical combat tactic per machine.",
      "Clarified that the section combines official/public machine info with community-supported field guidance where full official counter data is not published."
    ]
  },
  {
    version: "v1.8.0",
    date: "2026-03-30",
    summary: "Simplified the training flow with focus-based navigation and rewrote the Discord promo as The MuthaShip community hub.",
    changes: [
      "Added a pick-your-focus navigation layer so players can narrow the guide to updates, learning, quests, materials, or machines.",
      "Reduced the feeling of content overload by showing only the currently relevant training section instead of dumping every system at once.",
      "Reframed the Discord promotion around Join The MuthaShip so the community callout feels more intentional and ARC-themed."
    ]
  },
  {
    version: "v1.7.7",
    date: "2026-03-30",
    summary: "Fixed stale mobile cache behavior so new ARC intel and section updates appear correctly after deploys.",
    changes: [
      "Bumped the service worker cache version so older site builds do not keep overriding newer content.",
      "Changed page navigations to prefer the network first, which helps new deploys show up faster.",
      "This specifically addresses cases where older visuals or outdated ARC lists kept appearing on mobile."
    ]
  },
  {
    version: "v1.7.6",
    date: "2026-03-30",
    summary: "Expanded ARC Machine Intel to cover the full currently listed ARC roster instead of only a starter subset.",
    changes: [
      "Replaced the partial ARC list with a broader current catalog of known ARC types.",
      "Included newer named threats like Firefly, Comet, and Shredder alongside established units.",
      "Kept the section practical by grouping each ARC around its battlefield role and response priority."
    ]
  },
  {
    version: "v1.7.5",
    date: "2026-03-30",
    summary: "Added a hidden easter egg that shows a centered message when the secret trigger is found.",
    changes: [
      "Added a hidden clickable trigger in a low-visibility part of the page.",
      "Added a centered 5-second toast message for the easter egg.",
      "Kept the trigger subtle so it feels like an actual hidden find."
    ]
  },
  {
    version: "v1.7.4",
    date: "2026-03-30",
    summary: "Made the Discord promotion much more visible with a dedicated community callout near the top of the app.",
    changes: [
      "Added a prominent community panel directly under the command bar.",
      "Kept the existing Discord links in the quick-links row and footer.",
      "Changed the promotion from a subtle utility link into a clear join-the-community message."
    ]
  },
  {
    version: "v1.7.3",
    date: "2026-03-30",
    summary: "Expanded the materials area with a full catalog of currently listed ARC Raiders materials.",
    changes: [
      "Added a complete materials catalog grouped into Basic, Topside, and Refined materials.",
      "Kept the routing advice section while adding a proper reference list for lookup use.",
      "Labeled the full catalog as community-supported source data so players know the provenance."
    ]
  },
  {
    version: "v1.7.2",
    date: "2026-03-30",
    summary: "Added Discord promotion links so players can jump from the guide into your ARC Raiders community.",
    changes: [
      "Added a Join Discord link in the quick-links area near the top of the app.",
      "Added a matching Discord link in the footer for a persistent community callout.",
      "Kept the promotion lightweight so it supports the guide instead of interrupting it."
    ]
  },
  {
    version: "v1.7.1",
    date: "2026-03-30",
    summary: "Cleaned up the ARC Machine Intel section and replaced the awkward graphic with a more useful threat-priority overview.",
    changes: [
      "Removed the decorative machine schematic from the machine intel section.",
      "Added a machine overview board that tells players what types of threats to prioritize first.",
      "Made the section read more like a quick-reference combat tool and less like a visual placeholder."
    ]
  },
  {
    version: "v1.7.0",
    date: "2026-03-30",
    summary: "Restructured the app around training flow and current player pain points instead of just content categories.",
    changes: [
      "Replaced low-value summary cards with a clearer launchpad based on the most common player goals.",
      "Added a pain-point triage section for issues like material confusion, patch uncertainty, and raid drift.",
      "Shifted the app toward a training dashboard that helps players know where to go first."
    ]
  },
  {
    version: "v1.6.1",
    date: "2026-03-30",
    summary: "Reworked the top section into a useful operations deck instead of a decorative hero image.",
    changes: [
      "Removed the Topside Survival illustration from the top of the app.",
      "Replaced it with actionable cards for current update status, continue-learning state, and best next actions.",
      "Shifted the top section toward decision support so it helps players act immediately."
    ]
  },
  {
    version: "v1.6.0",
    date: "2026-03-30",
    summary: "Added an Update Center for the March 31, 2026 ARC Raiders release cycle and a reusable release-driven UI flow.",
    changes: [
      "Added a release timeline and spotlight section inspired by live-service guide sites that keep patch context front and center.",
      "Added official release prep notes for the Flashpoint update scheduled for March 31, 2026.",
      "Structured the app so future Embark updates can be added as release records instead of requiring a fresh page redesign."
    ]
  },
  {
    version: "v1.5.0",
    date: "2026-03-30",
    summary: "Added modern app-quality usability features including search, saved progress, sharing, install support, and offline caching.",
    changes: [
      "Added a sticky quick-access bar with global search, quick links, share, and install actions.",
      "Added saved review progress and remembered app state so users can continue where they left off.",
      "Added service worker registration for offline support and app-style behavior."
    ]
  },
  {
    version: "v1.4.0",
    date: "2026-03-30",
    summary: "Added a Crafting Materials Intel section for routing material hunts more effectively.",
    changes: [
      "Added a dedicated materials section covering common crafting material families and where they tend to be found.",
      "Connected material advice to official map archetypes, special conditions, and known basic-material examples.",
      "Added practical farming guidance so players can gather crafting resources without turning every raid into a random loot sweep."
    ]
  },
  {
    version: "v1.3.0",
    date: "2026-03-30",
    summary: "Added a Quest Operations section covering the current official ARC Raiders quest systems.",
    changes: [
      "Added a dedicated quest section for Trader quests, Trials, Feats, and Projects.",
      "Included practical completion advice, route planning tips, and common failure points for each quest type.",
      "Clarified that the guide is based on current official public quest-system information rather than a hidden full in-game quest database."
    ]
  },
  {
    version: "v1.2.0",
    date: "2026-03-30",
    summary: "Added custom ARC Raiders-inspired visuals to strengthen the app's presentation.",
    changes: [
      "Created a new hero illustration asset for the Topside survival section.",
      "Added a machine intel schematic graphic to make the ARC threat section feel more visual and thematic.",
      "Integrated the new artwork into the responsive layout without affecting mobile readability."
    ]
  },
  {
    version: "v1.1.0",
    date: "2026-03-30",
    summary: "Added a clickable footer version and in-app release history modal.",
    changes: [
      "Made the footer version number interactive so it can open the changelog directly.",
      "Added a release history popup that lists changes across app versions.",
      "Established a structured version history array so future updates can be tracked consistently."
    ]
  },
  {
    version: "v1.0.0",
    date: "2026-03-30",
    summary: "Initial release of the ARC Raiders Field Guide.",
    changes: [
      "Built a standalone ARC Raiders learning app in a separate folder from the Fortnite app.",
      "Added new-player and advanced gameplay lesson tracks with mobile-friendly navigation.",
      "Added ARC machine intel, raid prep guidance, manifest metadata, and themed styling."
    ]
  }
];

const APP_VERSION = VERSION_HISTORY[0].version;
const APP_UPDATED = VERSION_HISTORY[0].date;
const OFFICIAL_POSTS_VERIFIED = "2026-04-12";
const STORAGE_KEY = "arc-raiders-guide-state";
const CONTENT_SIGNAL_OVERRIDES = {
  "lesson:read-topside-correctly": { updated: "2026-04-13", trend: 96, benefit: "Fix raid flow confusion fast", reason: "Start Here anchor" },
  "lesson:understand-raid-phases": { updated: "2026-04-13", trend: 92, benefit: "Stop random raid pacing mistakes", reason: "Core onboarding" },
  "quest:trader-quests": { updated: "2026-04-12", trend: 95, benefit: "Turn raids into progression", reason: "High new-player demand" },
  "quest:expeditions": { updated: "2026-04-12", trend: 82, benefit: "Plan long-cycle progression better", reason: "Advanced prep" },
  "material:basic-scrap": { updated: "2026-04-12", trend: 84, benefit: "Unblock early crafts and stash decisions", reason: "Common workshop blocker" },
  "material:advanced-components": { updated: "2026-04-12", trend: 79, benefit: "Protect high-value crafting runs", reason: "High-tier routing" },
  "loadout:questing-loadout-blueprint": { updated: "2026-04-12", trend: 88, benefit: "Bring the right kit for objective runs", reason: "Popular gear entry" },
  "quickuse:movement-or-escape-utility": { updated: "2026-04-12", trend: 77, benefit: "Extract cleaner under pressure", reason: "Strong beginner value" },
  "release:patch-notes-1-23-0-2026-04-08": { updated: "2026-04-08", trend: 93, benefit: "Know what advice changed", reason: "Latest official patch" },
  "release:flashpoint-content-update-2026-03-31": { updated: "2026-04-08", trend: 86, benefit: "Understand Flashpoint systems", reason: "Still driving live interest" },
  "release:reducing-friction-in-arc-raiders-2026-04-04": { updated: "2026-04-08", trend: 80, benefit: "See UX changes that affect guide flow", reason: "Fresh support post" }
};
const GUIDE_METHODOLOGY = {
  summary: "This guide prioritizes official ARC Raiders news, patch notes, and roadmap posts first. Community-supported sources are used only where official public information stops short, and those areas are labeled accordingly.",
  official: [
    "Official news posts, patch notes, and roadmap entries from ARC Raiders",
    "Verified release dates and currently published official post summaries",
    "Publicly described systems such as quests, projects, expeditions, workshop changes, and major update beats"
  ],
  community: [
    "Community-supported quest directories when the live named quest list is not fully published by Embark",
    "Community-supported material catalogs where official sources describe systems but not every item family exhaustively",
    "Field guidance patterns for machine tactics and loadout logic where public gameplay knowledge is stronger than official documentation"
  ],
  limits: [
    "The guide does not pretend to have private loot tables, hidden quest databases, or secret patch details.",
    "Placeholder media stays labeled until real screenshots, clips, or diagrams are added.",
    "If a topic is awaiting verification, it should say so plainly instead of bluffing certainty."
  ]
};

const FEEDBACK_ACTIONS = {
  outdated: {
    title: "Report outdated info",
    summary: "Use this when a patch, roadmap change, or gameplay detail in the guide no longer matches live information.",
    issueTitle: "Outdated guide info:",
    prompts: [
      "What page or section looks outdated?",
      "What changed in the game or official post?",
      "If you have it, include the official source or date that conflicts with the guide."
    ]
  },
  improvement: {
    title: "Suggest a guide improvement",
    summary: "Use this when the guide is technically correct but still not helping enough. Brutal honesty is welcome. Decorative fluff is not.",
    issueTitle: "Guide improvement:",
    prompts: [
      "What part of the guide is weak or confusing?",
      "What would make that section more useful in an actual raid-prep scenario?",
      "If you saw a better version on another guide site, say what pattern worked."
    ]
  },
  topic: {
    title: "Request a topic",
    summary: "Use this when there is a missing subject you want covered, expanded, or verified.",
    issueTitle: "Topic request:",
    prompts: [
      "What topic or system is missing?",
      "Is this for new Raiders, solo play, squad play, progression, or patch-day prep?",
      "What question are you trying to answer that the site currently does not solve?"
    ]
  },
  methodology: {
    title: "Methodology and sources",
    summary: GUIDE_METHODOLOGY.summary
  },
  faq: {
    title: "FAQ and coverage notes",
    summary: "Short version: official sources are checked first, community-supported sections are labeled, and some game systems still are not fully exposed in official public posts. Reality is rude like that."
  }
};

const focusViews = [
  {
    id: "start",
    label: "Start Here",
    summary: "Get oriented fast with the first-raid briefing and the biggest common problems."
  },
  {
    id: "learn",
    label: "Learn",
    summary: "Work through the guided curriculum when you want structured improvement."
  },
  {
    id: "quests",
    label: "Quests",
    summary: "Use the quest board when your next raid is about progression efficiency."
  },
  {
    id: "materials",
    label: "Materials",
    summary: "Jump into routing and the full catalog when crafting is blocking you."
  },
  {
    id: "gear",
    label: "Gear",
    summary: "Learn what weapons, healing, and utility help newer players survive and finish their raids."
  },
  {
    id: "machines",
    label: "Machines",
    summary: "Focus on threat reads and pre-raid combat prep before you drop."
  },
  {
    id: "updates",
    label: "Updates",
    summary: "Check patch context first when Embark ships new info or a release goes live."
  }
];

const START_HERE_STEPS = [
  {
    id: "raid-basics",
    title: "Learn the raid loop",
    copy: "Start with the lesson track so the extraction flow, raid phases, and early decision-making actually make sense.",
    cta: "Open basics",
    status: () => (state.reviewedLessons.length || getLessonProgress()) ? "complete" : "active",
    action: () => {
      const firstLesson = lessons[0];
      state.activeView = "learn";
      state.selectedTrackId = firstLesson.trackId;
      state.selectedLessonId = firstLesson.id;
      setLastVisited("lesson", firstLesson.id);
      render();
      scrollElementIntoView(document.querySelector("#curriculum"));
    }
  },
  {
    id: "pick-goal",
    title: "Pick a raid goal",
    copy: "Use Quests or Materials to stop running aimless raids. New Raiders improve faster when each drop has one purpose.",
    cta: "Open goals",
    status: () => (getQuestProgress() || getMaterialProgress()) ? "complete" : "active",
    action: () => {
      state.activeView = "quests";
      setLastVisited("quest", state.selectedQuestId);
      render();
      scrollElementIntoView(document.querySelector("#quest-ops"));
    }
  },
  {
    id: "build-kit",
    title: "Build a safe loadout",
    copy: "Use the loadout builder and gear section to bring the right kind of kit instead of overbuilding and donating equipment to the Rust Belt.",
    cta: "Open loadout builder",
    status: () => state.savedItems.some((item) => item.startsWith("loadout:") || item.startsWith("quickuse:")) ? "complete" : "active",
    action: () => {
      state.activeView = "gear";
      render();
      scrollElementIntoView(document.querySelector("#loadout-builder"));
    }
  },
  {
    id: "check-threats",
    title: "Check threats and prep",
    copy: "Read the current patch context, then use ARC intel and the prep checklist before you drop. That alone saves new players from a lot of dumb deaths.",
    cta: "Open prep",
    status: () => (getReleaseProgress() || getPrepProgress()) ? "complete" : "active",
    action: () => {
      state.activeView = "machines";
      render();
      scrollElementIntoView(document.querySelector("#machine-intel"));
    }
  }
];

const PLAYSTYLE_OPTIONS = [
  {
    id: "new-raider",
    label: "New Raider",
    summary: "Best when you still need cleaner raid habits and less chaos.",
    badges: ["Beginner", "Safer route"],
    goals: ["learn", "quests"]
  },
  {
    id: "solo-player",
    label: "Solo player",
    summary: "Focuses on survival margin, flexible kits, and cleaner disengages.",
    badges: ["Solo", "Control"],
    goals: ["gear", "machines"]
  },
  {
    id: "squad-player",
    label: "Squad player",
    summary: "Better for role planning, tempo, and spreading risk across the team.",
    badges: ["Squad", "Coordination"],
    goals: ["quests", "updates"]
  },
  {
    id: "quest-focused",
    label: "Quest-focused",
    summary: "Prioritizes progression routing so each run pushes account growth.",
    badges: ["Progression", "Trader"],
    goals: ["quests", "materials"]
  },
  {
    id: "loot-crafting-focused",
    label: "Loot/crafting-focused",
    summary: "Pushes you toward stash value, workshop efficiency, and smarter farming.",
    badges: ["Workshop", "Loot"],
    goals: ["materials", "gear"]
  }
];

const VISUAL_INTEL_ITEMS = [
  {
    id: "route-board",
    label: "Route reference",
    title: "Topside Route Reading",
    copy: "A visual reminder of how to read a run: low-exposure entry, priority stops, bailout path, and extract fallback. Replace this placeholder with a real annotated route screenshot when available.",
    badge: "Placeholder image",
    type: "image",
    tags: ["routes", "new raider", "maps"],
    details: [
      "Start with one value target, not a fantasy tour of the whole map.",
      "Mark a safe exit line before you commit to deeper loot spaces.",
      "If pressure spikes early, downgrade the run instead of stubbornly donating gear."
    ]
  },
  {
    id: "arc-pressure-board",
    label: "Threat visual",
    title: "ARC Pressure Ladder",
    copy: "A compact threat reference for the machines that most often cause new Raiders to panic. This should eventually be replaced by a clean annotated machine board.",
    badge: "Reference panel",
    type: "reference",
    tags: ["arc", "combat", "priority"],
    details: [
      "Suppress mobility threats first so you keep disengage options.",
      "Heavy ARC punish slow, greedy looting more than bad aim.",
      "Boss-class fights are a choice. New Raiders should treat them like a contract, not background noise."
    ]
  },
  {
    id: "gear-video",
    label: "Video support",
    title: "Loadout Walkthrough Slot",
    copy: "Reserved for a short loadout explainer or raid-prep clip. Keep this to one sharp, practical video instead of dumping a whole content creator playlist in the app like a maniac.",
    badge: "Video placeholder",
    type: "video",
    tags: ["gear", "loadouts", "future media"],
    details: [
      "Best future use: one 60-90 second beginner loadout explanation.",
      "Use captions or summary bullets so the guide still works without autoplay.",
      "If no video is available, keep the placeholder and link to the related written guide instead."
    ]
  }
];

const LOADOUT_BUILDER_OPTIONS = {
  goal: [
    { id: "quests", label: "Quest run" },
    { id: "materials", label: "Material run" },
    { id: "learning", label: "Learning run" },
    { id: "pressure", label: "Operation pressure" }
  ],
  risk: [
    { id: "low", label: "Low risk" },
    { id: "balanced", label: "Balanced" },
    { id: "high", label: "High risk" }
  ],
  team: [
    { id: "solo", label: "Solo" },
    { id: "squad", label: "Squad" }
  ]
};

const MATERIAL_HELPER_OPTIONS = {
  pressure: [
    { id: "stash", label: "Stash is full" },
    { id: "crafting", label: "Crafting blocked" },
    { id: "cash", label: "Need cash" }
  ],
  rarity: [
    { id: "basic", label: "Basic material" },
    { id: "specialized", label: "Specialized material" },
    { id: "high-tier", label: "High-tier material" }
  ],
  objective: [
    { id: "healing", label: "Need sustain" },
    { id: "projects", label: "Need project progress" },
    { id: "future", label: "Stock for later" }
  ]
};

const releases = [
  {
    id: "patch-notes-1-23-0-2026-04-08",
    title: "Patch Notes 1.23.0",
    date: "2026-04-08",
    status: "Latest patch",
    summary: "Patch 1.23.0 is the current live baseline and it focuses on gameplay cleanup, map fixes, and a substantial Close Scrutiny stability pass rather than a broad balance reset.",
    overview: "Embark's official April 8 patch notes confirm a new Vanguard Set in the shop plus fixes to Trigger 'Nades damage stacking, item and weapon firing behavior, shoulder swap, anvil splitter exploitation, barricade placement on ziplines, Stella Montis and Buried City map issues, and several Close Scrutiny problems around Assessors, Vaporizers, Rocketeers, platforms, and map pinging.",
    confirmed: [
      "Vanguard Set added to the shop",
      "Trigger 'Nades damage-stacking issue fixed",
      "Shoulder swap, auto-fire, and item-use timing issues fixed",
      "Barricades can no longer be placed on ziplines",
      "Stella Montis and Buried City map issues fixed",
      "Close Scrutiny got movement, platform, Assessor, and ping fixes"
    ],
    prep: [
      "Treat Close Scrutiny as more reliable after this patch, especially for Assessor behavior, platform flow, reconnects, and Vaporizer pathing.",
      "If you play Stella Montis or Buried City routes, trust April 8 pathing and interaction behavior over older player reports.",
      "Recheck grenade and shoulder-swap habits if you learned around Flashpoint launch edge cases, because the current live behavior is cleaner now."
    ],
    appIdeas: [
      "Update operation guidance to acknowledge that Close Scrutiny is still high-risk, but some roughest platform and Assessor issues were officially fixed on April 8.",
      "Keep materials and workshop guidance focused on April 4's UX improvements, because 1.23.0 was mostly cleanup rather than a new economy patch.",
      "Use patch cards to separate live-behavior fixes from major content drops so players know whether advice changed because of systems or stability."
    ]
  },
  {
    id: "reducing-friction-2026-04-04",
    title: "Reducing Friction",
    date: "2026-04-04",
    status: "UX update",
    summary: "Embark's April 4 UX post adds an Acquire Resources flow that lets players source missing crafting materials directly from the crafting screen.",
    overview: "The official UX post says Embark targeted a common pain point: crafting friction. Missing ingredients can now be sourced through a new Acquire Resources button that shows every currently available path, including recycling, buying from Celeste, and other available options, instead of forcing players through multiple menu hops.",
    confirmed: [
      "New Acquire Resources button in the crafting screen",
      "Shows every currently available source for missing materials",
      "Official examples include recycling and buying from Celeste"
    ],
    prep: [
      "Use the button before launching a panic material run because the missing piece may already be solvable inside the workshop flow.",
      "Treat Celeste and recycling as part of the same planning loop instead of separate stash chores.",
      "Keep farming routes focused on materials that still cannot be solved through currently available sources."
    ],
    appIdeas: [
      "Update workshop lessons to teach decision-making around Acquire Resources instead of menu-hopping.",
      "Tie materials guidance more directly to recycling and trader fallback options.",
      "Call out this UX change in the hero and update center because it directly changes how players resolve crafting bottlenecks."
    ]
  },
  {
    id: "hotfix-1-22-1-2026-04-01",
    title: "Hotfix 1.22.1",
    date: "2026-04-01",
    status: "Hotfix",
    summary: "Embark deployed Hotfix 1.22.1 to address a crash affecting some players and said an Xbox patch would follow later.",
    overview: "The official April 1 hotfix note is short and blunt: a crash fix shipped immediately, and an Xbox patch was still pending at the time of the post. That makes it primarily a stability marker, not a systems or economy update, but it still matters for returners checking whether Flashpoint launch issues were addressed.",
    confirmed: [
      "Crash fix deployed on April 1, 2026",
      "Players were told to restart the game to download it",
      "Official post says an Xbox patch would follow later"
    ],
    prep: [
      "Treat this as a stability checkpoint between Flashpoint launch and the next weekly patch.",
      "Verify separately whether Embark later confirmed the Xbox follow-up.",
      "Do not overread this post as a balance patch because the official note only mentions crash resolution."
    ],
    appIdeas: [
      "Keep low-detail hotfixes in the archive so players can distinguish stability fixes from content drops.",
      "Use short summaries for hotfix entries instead of pretending every patch changed gameplay.",
      "Surface platform follow-up items when Embark says a patch is staggered."
    ]
  },
  {
    id: "flashpoint-2026-03-31",
    title: "Flashpoint",
    date: "2026-03-31",
    status: "Live now",
    summary: "Flashpoint is now live as of March 31, 2026, bringing a new ARC Operation, new ARC threat, new gear, a new project, Scrappy changes, and crafting improvements.",
    overview: "Embark's official Flashpoint coverage confirms ARC Operation: Close Scrutiny, the new Vaporizer ARC, two new weapons, the Surge Coil gadget, the High Gain Antenna project, Scrappy feeding boosts, wider Shredder presence, and new crafting improvements. The operation is high-risk: less loot is scattered around the map, but the Assessor at the center of the event is the big reward target.",
    confirmed: [
      "ARC Operation: Close Scrutiny",
      "New ARC threat: Vaporizer",
      "New weapons: Canto and Dolabra",
      "New gadget: Surge Coil",
      "New project: High Gain Antenna",
      "Scrappy feeding boost",
      "Crafting improvements",
      "Shredders spread across more maps and conditions"
    ],
    prep: [
      "Expect Close Scrutiny runs to be more combat-dense because Embark says there is less loot around the map and the main value is concentrated around the Assessor.",
      "Bring stronger anti-ARC tools and space-control utility if you plan to contest the operation instead of farming quieter routes.",
      "Look for the Dolabra blueprint in Close Scrutiny and treat Surge Coil as a new anti-flank or area-control tool.",
      "If you are crafting around Flashpoint, use the new material-source helper in the workshop to recycle, refine, or purchase from one window."
    ],
    appIdeas: [
      "Surface Flashpoint additions inside the machine and gear sections so players do not have to infer what changed from the update card alone.",
      "Keep the official-news module current so patch posts and content updates appear at the top of the app on release days.",
      "Add patch tags to guide content touched by Flashpoint, especially ARC intel, quick-use items, and special event routing."
    ]
  },
  {
    id: "shrouded-sky-2026-02-24",
    title: "Shrouded Sky",
    date: "2026-02-24",
    status: "Live",
    summary: "Shrouded Sky expanded the live-ops model with new weather, new ARC, a new player project, and boosted cache rewards.",
    overview: "Embark's official roadmap and update messaging describe Shrouded Sky as the release that introduced the Hurricane condition, Firefly and Comet ARC units, Weather Monitoring System, a new player project, and an Expedition Window refresh.",
    confirmed: [
      "Hurricane condition",
      "Firefly and Comet ARC threats",
      "Weather Monitoring System",
      "New player project",
      "Updated Expedition Window"
    ],
    prep: [
      "Use this release as the model for how condition-specific advice should appear in the app.",
      "Tie machine intel to patch entries when new ARC types are added.",
      "Surface high-tier material changes whenever cache or condition rewards are adjusted."
    ],
    appIdeas: [
      "Keep a release history card that connects each patch to affected systems.",
      "Use update-aware search results so players can find condition changes quickly.",
      "Show recency and patch dates clearly so older advice does not look current by accident."
    ]
  },
  {
    id: "headwinds-2026-01-27",
    title: "Headwinds",
    date: "2026-01-27",
    status: "Live",
    summary: "Headwinds showed that ARC Raiders updates can mix matchmaking changes, progression additions, map loot shifts, and cosmetics in one drop.",
    overview: "The official Headwinds announcement introduced solo-vs-squads matchmaking, the Trophy Display project, Bird City loot behavior in Buried City, and new cosmetics. It is a strong example of why the app should group updates by player impact, not just patch chronology.",
    confirmed: [
      "Solo vs Squads matchmaking option",
      "Trophy Display project",
      "Bird City loot changes in Buried City",
      "New cosmetic sets"
    ],
    prep: [
      "Treat player-impact categories like combat, progression, loot, and map behavior as first-class UI slices.",
      "Make sure update cards call out whether a release changes how people route, fight, or progress.",
      "Preserve an archive view so returning players can understand what changed since they last played."
    ],
    appIdeas: [
      "Use impact labels instead of only patch names.",
      "Add return-player summaries to major releases.",
      "Keep the release timeline visible near the top of the app."
    ]
  },
  {
    id: "riven-tides-2026-04",
    title: "Riven Tides",
    date: "2026-04",
    status: "Next up",
    summary: "The roadmap already points beyond Flashpoint, so the app should anticipate the next wave instead of stopping at one patch.",
    overview: "Embark's official 2026 roadmap also previews Riven Tides as the release after Flashpoint, with a new map, a new large ARC threat, and another Expedition Window update. That means the app's update flow needs to handle both immediate patches and upcoming roadmap items.",
    confirmed: [
      "New map",
      "New large ARC threat",
      "Updated Expedition Window"
    ],
    prep: [
      "Keep maps, machine entries, and release cards data-driven.",
      "Design future UI changes to absorb a whole new map without rewriting the home page.",
      "Use roadmap previews to create preparation checklists before launch day."
    ],
    appIdeas: [
      "Reserve space in the UI for upcoming releases as preview cards.",
      "Let roadmap items graduate into live release cards later without changing layout.",
      "Keep patch planning and live patch coverage in the same section."
    ]
  }
];

const embarkFeed = [
  {
    title: "Patch Notes 1.23.0",
    date: "2026-04-08",
    source: "Official news",
    kind: "major",
    changeLabel: "Live baseline",
    summary: "Embark fixed Trigger 'Nades stacking, weapon and item firing issues, Stella Montis and Buried City map problems, and several Close Scrutiny Assessor and Vaporizer issues.",
    url: "https://arcraiders.com/news/patch-notes-1-23-0"
  },
  {
    title: "Reducing friction in ARC Raiders",
    date: "2026-04-04",
    source: "Official news",
    kind: "major",
    changeLabel: "Workflow shift",
    summary: "Embark added an Acquire Resources button so missing craft materials can be sourced directly from the crafting screen.",
    url: "https://arcraiders.com/news/user-experience-improvements"
  },
  {
    title: "Hotfix 1.22.1",
    date: "2026-04-01",
    source: "Official news",
    kind: "minor",
    changeLabel: "Hotfix",
    summary: "A short official hotfix note confirms a crash fix went live and said an Xbox patch would follow later.",
    url: "https://arcraiders.com/news/hotfix-1-22-1"
  },
  {
    title: "Flashpoint - Patch Notes 1.22.0",
    date: "2026-03-31",
    source: "Official news",
    kind: "major",
    changeLabel: "Content drop",
    summary: "The official patch-note entry for Flashpoint is now live on Embark's news hub.",
    url: "https://arcraiders.com/news"
  },
  {
    title: "Flashpoint Update - Find the Truth",
    date: "2026-03-30",
    source: "Official news",
    kind: "major",
    changeLabel: "Prelaunch briefing",
    summary: "Embark's full Flashpoint overview confirms Close Scrutiny, Vaporizer, Canto, Dolabra, Surge Coil, the High Gain Antenna project, and Scrappy changes.",
    url: "https://arcraiders.com/news/flashpoint-content-update"
  },
  {
    title: "Patch Notes 1.21.0",
    date: "2026-03-24",
    source: "Official news",
    kind: "minor",
    changeLabel: "Weekly patch",
    summary: "The final weekly patch before Flashpoint, useful as the baseline for what changed this morning.",
    url: "https://arcraiders.com/news/patch-notes-1-21-0"
  },
  {
    title: "Patch Notes 1.20.0",
    date: "2026-03-17",
    source: "Official news",
    kind: "minor",
    changeLabel: "Weekly patch",
    summary: "Another pre-Flashpoint checkpoint in Embark's March update cadence.",
    url: "https://arcraiders.com/news/patch-notes-1-20-0"
  },
  {
    title: "Patch Notes 1.19.0",
    date: "2026-03-10",
    source: "Official news",
    kind: "minor",
    changeLabel: "Archive",
    summary: "Older March patch notes that now sit just behind the Flashpoint launch coverage in the official archive.",
    url: "https://arcraiders.com/news/patch-notes-1-19-0"
  },
  {
    title: "Trials Season 3: what you need to know",
    date: "2026-03-03",
    source: "Official news",
    kind: "major",
    changeLabel: "System update",
    summary: "A rules-and-progress post that matters to players using the guide for repeatable performance and challenge prep.",
    url: "https://arcraiders.com/news/trials-season-3-what-you-need-to-know"
  }
];

const BRIEFING_STEPS = [
  {
    title: "Know the win condition",
    copy: "A successful raid is not about clearing the map. It is about getting loot, finishing your goal, and extracting with your kit intact."
  },
  {
    title: "Respect every noise",
    copy: "ARC machines and other Raiders both react to attention. Gunfire, movement through open space, and delayed fights all increase your exposure."
  },
  {
    title: "Leave before greed wins",
    copy: "If your backpack is full or your objective is complete, extracting early is usually stronger than gambling for one more fight."
  },
  {
    title: "Progress happens in Speranza",
    copy: "Quests, crafting, workshop upgrades, skills, traders, and Raider Decks turn surviving raids into long-term power."
  }
];

const painPoints = [
  {
    id: "material-confusion",
    title: "I do not know where items or materials are",
    copy: "Players repeatedly get blocked by crafting and item-location knowledge, especially when a quest or workshop upgrade depends on one missing material.",
    actionLabel: "Open material routing",
    onOpen: () => {
      setActiveView("materials");
      scrollElementIntoView(document.querySelector("#materials-intel"));
    }
  },
  {
    id: "quest-drift",
    title: "My raids feel random",
    copy: "A common trap is entering Topside without a single goal, then extracting nothing useful or dying with partial progress.",
    actionLabel: "Open quest board",
    onOpen: () => {
      setActiveView("quests");
      scrollElementIntoView(document.querySelector("#quest-ops"));
    }
  },
  {
    id: "machine-pressure",
    title: "ARC fights get out of control fast",
    copy: "Newer players often aggro the wrong targets, stay too long after noise, or fail to reset after a messy fight.",
    actionLabel: "Open machine intel",
    onOpen: () => {
      setActiveView("machines");
      scrollElementIntoView(document.querySelector("#machine-intel"));
    }
  },
  {
    id: "new-player-overload",
    title: "There is too much information at once",
    copy: "The game and the official site surface a lot of systems quickly, so the app needs to behave like a guided training flow instead of a content dump.",
    actionLabel: "Start new raider path",
    onOpen: () => {
      state.activeView = "learn";
      state.selectedTrackId = "new-raider";
      state.selectedLessonId = getLessonsForTrack("new-raider")[0]?.id ?? null;
      render();
      scrollElementIntoView(document.querySelector("#curriculum"));
    }
  },
  {
    id: "patch-confusion",
    title: "I cannot tell what advice is still current",
    copy: "Frequent Embark posts and live-service updates make it easy for older route or threat advice to feel unclear without a patch-first view.",
    actionLabel: "Check update center",
    onOpen: () => {
      setActiveView("updates");
      scrollElementIntoView(document.querySelector("#update-center"));
    }
  }
];

const tracks = [
  {
    id: "new-raider",
    title: "Raid Fundamentals",
    subtitle: "Understand what actually wins runs in ARC Raiders",
    summary: "Start here if you need the extraction-shooter mental model, the logic of a raid, and the ARC Raiders-specific habits that stop runs from collapsing.",
    focus: "Raid structure, survival economics, progression logic, and objective-first decision-making.",
    bestFor: "First-time players and anyone who understands shooters but not yet ARC Raiders as a system.",
    tone: "Treat every raid like a plan under pressure, not a free-roam deathmatch."
  },
  {
    id: "rust-belt-systems",
    title: "Rust Belt Systems",
    subtitle: "Learn the systems that quietly decide progression",
    summary: "This track is for players who want to understand the moving pieces behind efficient progression: map conditions, locked-room value, Scrappy, Workshop flow, Projects, and Expeditions.",
    focus: "Conditions, resource routing, workshop choices, and long-cycle progression systems.",
    bestFor: "Players who survive enough raids but still feel like their account progression is inefficient.",
    tone: "The Rust Belt rewards players who notice systems before they notice loot."
  },
  {
    id: "combat-and-operations",
    title: "Combat and Operations",
    subtitle: "Turn survival into repeatable high-value raids",
    summary: "This track is for players who already understand the basics and want stronger ARC counterplay, operation routing, squad pacing, and cleaner late-run decisions.",
    focus: "ARC behavior, map pressure, operation prep, and advanced risk control.",
    bestFor: "Confident solos and organized squads looking for more reliable high-pressure raids.",
    tone: "Only take chaos when the reward is worth the attention it creates."
  }
];

const lessons = [
  {
    id: "extraction-shooter-basics",
    trackId: "new-raider",
    title: "What Makes ARC Raiders an Extraction Shooter",
    category: "Foundations",
    time: "5 min",
    summary: "Learn why a raid is different from a normal match and why extraction shooters reward survival, planning, and discipline more than constant fighting.",
    body: "In an extraction shooter, the match is not about respawning until one team wins. You enter with risk, try to leave with value, and every decision affects long-term progression. A raid usually has a few phases: preparation in Speranza, entry into Topside, information gathering, pursuit of an objective, pressure management, and extraction. That makes ARC Raiders feel different from a traditional shooter because winning one fight is not the same thing as winning the run.",
    bullets: [
      "The goal of a raid is not just kills. It is extracting with loot, quest progress, and your kit intact.",
      "A raid gets more dangerous over time because noise, greed, machine attention, and other Raiders all compound pressure.",
      "Good raids usually have one purpose, one route, and one planned exit instead of endless improvisation."
    ],
    checks: [
      "Do I know what success looks like before I deploy?",
      "Am I treating every fight as mandatory when some fights are actually loss conditions?"
    ],
    fieldNote: "Extraction shooters reward decision quality more than action volume. Leaving alive is part of the skill expression."
  },
  {
    id: "raid-loop",
    trackId: "new-raider",
    title: "Understand the Raid Loop",
    category: "Foundations",
    time: "4 min",
    summary: "Learn the core rhythm of leaving Speranza, scavenging Topside, and making it back alive with value.",
    body: "ARC Raiders is built around tension and consequence. You go Topside for loot, quest progress, and crafting materials, but none of it matters unless you survive the extraction. New players improve fastest when they stop treating every encounter like a deathmatch and start thinking in terms of route, objective, and exit.",
    bullets: [
      "Set one goal before loading in: quest, loot run, machine hunt, or simple survival.",
      "Check your bag space and leave room for high-value finds instead of overpacking throwaway gear.",
      "Once your goal is complete, shift mentally from hunting to extraction mode."
    ],
    checks: [
      "Do I know why I am going Topside this run?",
      "If things go wrong, where is my disengage and extraction plan?"
    ],
    fieldNote: "Your best raid may look boring in the moment. Quiet, efficient runs are how progress stacks."
  },
  {
    id: "raid-concepts",
    trackId: "new-raider",
    title: "Read the Phases of a Raid",
    category: "Foundations",
    time: "5 min",
    summary: "ARC Raiders raids have a rhythm: approach, probe, commit, reset, and extract. Players who learn the phase they are in make better decisions faster.",
    body: "A lot of bad runs happen because players use the wrong mindset for the current phase of the raid. The approach phase is about information and avoiding noise. The probe phase is about checking whether a route, loot spot, or fight is actually worth it. The commit phase is when you intentionally spend ammo, healing, and attention. The reset phase is where better players re-plate their plan instead of wandering into another problem. Extraction is its own phase, not an afterthought.",
    bullets: [
      "Ask what phase you are in before taking another fight or detour.",
      "Do not use commit-phase aggression while you are still probing a route.",
      "Treat the reset phase seriously after every major fight, especially if machines were involved."
    ],
    checks: [
      "Am I still gathering information, or have I already committed resources?",
      "If this phase changes right now, what should my next move become?"
    ],
    fieldNote: "Most players die because they are mentally one phase behind the raid."
  },
  {
    id: "topside-basics",
    trackId: "new-raider",
    title: "Read Topside Correctly",
    category: "Awareness",
    time: "5 min",
    summary: "Understand what Topside is trying to do to you before you learn to fight everything on it.",
    body: "Topside is the main play space and it is designed to pressure your attention from multiple angles. ARC machines patrol it, other Raiders compete for the same loot, and map locations can behave differently depending on weather, time of day, and special conditions. A new Raider survives longer by moving through cover, limiting noise, and avoiding long exposures in open ground.",
    bullets: [
      "Pause before entering open areas and scan for machine patterns, sight lines, and movement from other players.",
      "Use buildings, terrain, and downtime between fights to reset instead of sprinting nonstop.",
      "Treat every new zone as information first and loot second."
    ],
    checks: [
      "What can see me here?",
      "If shots start, what cover can I reach in one move?"
    ],
    fieldNote: "The map is not empty space between loot points. It is the thing deciding whether your run stays calm or spirals."
  },
  {
    id: "speranza-progression",
    trackId: "new-raider",
    title: "Use Speranza to Get Stronger",
    category: "Progression",
    time: "4 min",
    summary: "Learn how skills, traders, the workshop, and Raider Decks support your next raid.",
    body: "Speranza is where successful runs turn into long-term growth. Experience gives levels and skill points, traders give quests and rewards, the workshop handles crafting and upgrades, and Raider Decks turn Cred from Feats into unlocks. New players often focus only on surviving one run, but the stronger habit is to ask what your last run unlocked for the next one.",
    bullets: [
      "Spend skill points with a clear intention like mobility, carry capacity, or stealth.",
      "Use quests and Feats as guidance when you are unsure what to prioritize next.",
      "Keep your workshop active so extracted materials become real advantages."
    ],
    checks: [
      "Did my last raid help a quest, unlock, or workshop goal?",
      "Am I building toward a playstyle instead of hoarding random items?"
    ],
    fieldNote: "Speranza is where a struggling Raider becomes a prepared one."
  },
  {
    id: "loadouts-and-recovery",
    trackId: "new-raider",
    title: "Build Smarter Loadouts",
    category: "Preparation",
    time: "4 min",
    summary: "Learn how to prepare without overcommitting your best gear every run.",
    body: "ARC Raiders gives you room to shape your playstyle through weapons, attachments, gadgets, shields, augments, and free recovery tools. You do not need to bring your most expensive setup into every uncertain run. New players improve faster when their kit matches the purpose of the raid.",
    bullets: [
      "Match your weapon and gadget choices to your route instead of chasing one universal build.",
      "Bring healing and at least one tool that helps you control space or disengage.",
      "Use recovery options when your inventory is thin instead of forcing tilted runs."
    ],
    checks: [
      "Can this kit finish my objective and still help me escape?",
      "If I lose this loadout, can I bounce back immediately?"
    ],
    fieldNote: "A sustainable kit is often stronger than a flashy one."
  },
  {
    id: "conditions-and-routing",
    trackId: "combat-and-operations",
    title: "Route Around Map Conditions",
    category: "Map Mastery",
    time: "5 min",
    summary: "Special conditions change the reward profile and danger profile of a raid. Plan around them instead of reacting late.",
    body: "The Rust Belt is meant to feel unstable. Conditions like Night Raids, Harvest Season, Electromagnetic Storms, Hidden Bunkers, and limited-time events change both value and danger. Strong players route based on the condition before the match even starts, because the best loot often comes with stronger pressure and more competition.",
    bullets: [
      "When loot quality spikes, assume player density and machine danger can spike with it.",
      "Choose whether you are exploiting the condition directly or using the attention it creates somewhere else.",
      "Have a shorter extraction threshold on volatile conditions than on calm ones."
    ],
    checks: [
      "Am I entering this condition to farm value or to capitalize on distracted players?",
      "What part of the map becomes too expensive to contest right now?"
    ],
    fieldNote: "The condition is part of the enemy team. Build your route around it."
  },
  {
    id: "machine-attention",
    trackId: "combat-and-operations",
    title: "Manage Machine Attention",
    category: "Threat Control",
    time: "6 min",
    summary: "Advanced players do not just kill ARC. They shape when ARC notices them and who the machines pressure next.",
    body: "Machines in ARC Raiders are threat multipliers. A Snitch can escalate a quiet route into a collapse, a Bombardier can force you off safe ground, and even smaller units can break your timing at the worst moment. Strong Raiders treat machine behavior as battlefield geometry and reposition before the fight grows.",
    bullets: [
      "Prioritize the units that call, spot, or deny your position before you focus raw damage targets.",
      "Reposition after noisy engagements instead of assuming the area stays yours.",
      "Use distraction tools and terrain to break tracking whenever possible."
    ],
    checks: [
      "Which enemy is expanding this fight right now?",
      "If I stay here 20 more seconds, who else gets invited?"
    ],
    fieldNote: "Attention is a resource. Spend less of it than the lobby around you."
  },
  {
    id: "squad-pacing",
    trackId: "combat-and-operations",
    title: "Sharpen Squad Pacing",
    category: "Teamplay",
    time: "5 min",
    summary: "Good squads are not simply accurate. They stay synchronized on tempo, spacing, and exit decisions.",
    body: "ARC Raiders supports solo play and small squads, and the game rewards teams that move with shared intent. The common failure pattern is staggered commitment: one player loots too long, another chases a target, and the third gets caught rotating alone. Advanced squads solve this by agreeing on pace, assigning responsibility, and resetting together.",
    bullets: [
      "Call the next move before the current one fully ends so the team never stalls in place.",
      "Maintain spacing that supports crossfire without splitting into isolated angles.",
      "Use one voice for leave, reset, or extract calls once the fight outcome is decided."
    ],
    checks: [
      "Is our team still on the same objective?",
      "Who is overextended if another squad enters now?"
    ],
    fieldNote: "Most squad wipes start as a pacing problem before they become an aim problem."
  },
  {
    id: "risk-and-extracts",
    trackId: "combat-and-operations",
    title: "Control Risk and Extraction Timing",
    category: "Decision-Making",
    time: "6 min",
    summary: "Late-run discipline is where confident players become consistent players.",
    body: "High-value runs often die in the final stretch because players misread how much risk they are already carrying. Full bags, partial health, quest progress, and machine pressure all increase the cost of staying Topside. Advanced Raiders constantly reevaluate whether the next fight or route extension is worth more than the progress already secured.",
    bullets: [
      "Update your internal value score after every big pickup or objective completion.",
      "Choose extraction windows when you still have options, not only when the map forces you out.",
      "Be willing to leave behind a tempting fight if losing it would erase the whole run."
    ],
    checks: [
      "If I leave now, is this already a winning raid?",
      "What is the actual reward of staying, and is it better than what I can lose?"
    ],
    fieldNote: "The strongest greed control is remembering that extracted value compounds."
  },
  {
    id: "conditions-as-economy",
    trackId: "rust-belt-systems",
    title: "Treat Conditions Like Economic Events",
    category: "Systems",
    time: "5 min",
    summary: "Map conditions are not just atmosphere. In ARC Raiders they change what is worth contesting, what gets overrun, and what kind of materials or player traffic a run will generate.",
    body: "Strong ARC Raiders players use conditions the same way Tarkov players use map knowledge or cycle timing: as an economic signal. A condition changes where value appears, which routes become expensive, and what kinds of mistakes get punished. The point is not only to chase the condition. Sometimes the best play is to let everyone else overcommit to the obvious hotspot while you route the edge that condition creates.",
    bullets: [
      "Before deploying, decide whether the condition is something you are exploiting directly or avoiding indirectly.",
      "Use conditions to predict player clustering, not just loot changes.",
      "Recalculate extraction timing on volatile conditions because value and attention both rise together."
    ],
    checks: [
      "What is this condition making more valuable right now?",
      "Where will other players probably overcommit because of it?"
    ],
    fieldNote: "Conditions change the economy of a run before they change the combat."
  },
  {
    id: "locked-room-value",
    trackId: "rust-belt-systems",
    title: "Know When Locked Rooms Are Worth It",
    category: "Systems",
    time: "4 min",
    summary: "Locked rooms are not automatically good. Their value depends on route risk, key scarcity, and how much attention you will spend reaching them.",
    body: "One of the easiest ways to waste raid tempo in ARC Raiders is to treat every locked room like a mandatory jackpot. Flashpoint increased locked-room loot value, which makes the temptation more real, not more automatic. The right question is still whether the room improves your run more than the danger created by pathing to it, fighting around it, and extracting afterward. The best guide sites for similar games are strong here because they teach value judgment, not just point-of-interest names. That is the right model for ARC too.",
    bullets: [
      "Judge locked rooms by route efficiency, not by hype.",
      "Better loot does not erase bad extraction math, so do not confuse a buffed room with a guaranteed winning detour.",
      "If opening the room drags you through two dangerous spaces and a late extract, the key may not be worth using right now.",
      "Use locked rooms to support a raid objective, not to replace one."
    ],
    checks: [
      "Would I still take this route if the locked room was not here?",
      "Does this room improve my objective or just tempt my greed?"
    ],
    fieldNote: "The value of a locked room is the value you can still carry out."
  },
  {
    id: "scrappy-and-projects",
    trackId: "rust-belt-systems",
    title: "Use Scrappy and Projects Intentionally",
    category: "Progression",
    time: "4 min",
    summary: "Scrappy, Projects, and workshop systems matter because they turn extracted value into account momentum instead of dead stash weight.",
    body: "ARC Raiders is full of systems that look secondary until your progression stalls. Scrappy is not just flavor; it is a converter for value and now matters even more after Flashpoint's feeding boost. Projects are not just giant checklists; they tell you what your next several raids should probably support. Better players use these systems to decide what loot matters before they even deploy.",
    bullets: [
      "Feed systems and project systems should influence what you keep, sell, or route for.",
      "Look at your next project milestone before every session so your raids stay aligned.",
      "Treat stash value as fuel for systems, not as a trophy cabinet."
    ],
    checks: [
      "What part of my current progression actually needs support right now?",
      "Am I extracting useful value or just increasing inventory clutter?"
    ],
    fieldNote: "Progression friction in ARC Raiders usually comes from system neglect, not lack of raid hours."
  },
  {
    id: "workshop-decisions",
    trackId: "rust-belt-systems",
    title: "Make Better Workshop Decisions",
    category: "Progression",
    time: "5 min",
    summary: "The Workshop is where many players waste value. Crafting should solve problems in your raid loop, not just consume materials because a button is available.",
    body: "After Flashpoint, Embark kept iterating on crafting flow and on April 4 formally added an Acquire Resources button to the crafting screen. That matters because the workshop is supposed to be a planning tool, not a menu maze. The strongest use of the Workshop is to remove friction: better healing uptime, more consistent utility, a weapon path you can actually sustain, and project support. The weakest use is reactive crafting with no idea what it is fixing.",
    bullets: [
      "Craft for bottlenecks first: healing, utility, sustainable primaries, and project gates.",
      "If a craft is blocked, hit Acquire Resources first so you can compare recycling, Celeste, and other available sources before forcing another raid.",
      "Use the workshop to plan what to keep in raid, not just to spend what you already have.",
      "If a craft does not improve your next several raids, it may be a low-priority sink."
    ],
    checks: [
      "What repeated raid problem is this craft solving?",
      "Would these materials create more value if I kept them for a bigger gate?"
    ],
    fieldNote: "A good workshop decision makes future raids cleaner, not just your inventory emptier."
  },
  {
    id: "operations-and-assessor",
    trackId: "combat-and-operations",
    title: "Read Operations Like Close Scrutiny",
    category: "Operations",
    time: "5 min",
    summary: "Operations in ARC Raiders concentrate risk and reward. Close Scrutiny teaches the right lesson: concentrated value means concentrated pressure.",
    body: "Flashpoint's Close Scrutiny is a good example of how ARC Raiders wants players to think about event-like content. Embark explicitly says there is less loot around the map and the Assessor at the center is the main prize. That means the operation is not just a new location to wander into. It is a declaration about tempo, loadout, and escape planning before you deploy. Patch 1.23.0 then cleaned up several reliability issues around Assessors, Vaporizers, reconnect visibility, and platform flow, but the core lesson has not changed: concentrated value creates concentrated danger.",
    bullets: [
      "If the operation is the goal, build for contesting and resetting, not for broad looting.",
      "Expect more player pressure because concentrated value naturally creates collisions.",
      "Plan your exit route before you enter the operation center, not after you win it."
    ],
    checks: [
      "Am I entering this operation to contest the objective or just to watch other teams spend resources?",
      "Does my loadout support both the fight and the escape?"
    ],
    fieldNote: "Operations are not random chaos zones. They are designed to punish uncommitted planning."
  },
  {
    id: "arc-priority-logic",
    trackId: "combat-and-operations",
    title: "Use ARC Priority Logic, Not Raw DPS Logic",
    category: "Threat Control",
    time: "5 min",
    summary: "ARC Raiders fights are often lost by target priority, not by aim. The most dangerous unit is usually the one changing the shape of the fight.",
    body: "The common mistake is to shoot whatever looks biggest or closest. In ARC Raiders, the unit that matters most is often the one adding detection, forced movement, or route denial. That is why anti-air, spotter removal, and damage timing around heavy ARC windows matter so much. Similar games' best guides teach threat layers, not just enemy names, and ARC benefits from that approach too.",
    bullets: [
      "Kill what expands the fight before what simply occupies the fight.",
      "Do not spend your best cooldowns or burst tools on the wrong layer of the encounter.",
      "Think in chains: who spots, who punishes, who blocks the reset, and who is left after that."
    ],
    checks: [
      "Which unit is making the rest of this fight worse right now?",
      "If I kill this target first, does the battlefield actually get simpler?"
    ],
    fieldNote: "Better target order often feels like easier aim because the fight stops multiplying."
  }
];

const machines = [
  { name: "Snitch", threat: "Detection", copy: "Flying observer that loudly alerts nearby ARC and can rapidly expand a quiet skirmish into a full problem.", response: "Break line of sight or destroy it immediately before it calls reinforcements.", weakPoint: "Unarmored thrusters", loadout: "Medium or heavy ammo weapons are the cleanest answer.", tactic: "Burst the thrusters first. If you are already under pressure, hide in foliage or hard cover long enough to deny the scan." },
  { name: "Spotter", threat: "Target Designation", copy: "Support unit that helps heavier ARC, especially Bombardiers, turn your position into a punishable marker.", response: "Prioritize it early so the rest of the encounter loses coordination.", weakPoint: "Fast takedown before target lock", loadout: "Accurate primary fire or seeker-style utility if you carry it.", tactic: "Kill it before settling into cover. Vertical cover matters because Spotters often set up Bombardier follow-up." },
  { name: "Surveyor", threat: "Scout Pressure", copy: "Usually lighter than other ARC but still important because it helps populate the battlefield and punish sloppy movement.", response: "Clear it when you need a route to stay quiet and uncontested.", weakPoint: "Exposed weak point when it fires its laser", loadout: "Explosives or stun utility plus follow-up gunfire.", tactic: "Bait the laser, shoot the exposed weak point, then finish before it flees." },
  { name: "Tick", threat: "Ambush", copy: "Small, indoor ambush ARC that latch on and punish inattentive looting or rushing through interiors.", response: "Check ceilings, corners, and tight rooms before you tunnel on loot.", weakPoint: "Low durability overall", loadout: "Any weapon works.", tactic: "Pre-fire corners in cluttered interiors and dodge roll immediately if one latches on." },
  { name: "Pop", threat: "Close-Range Explosion", copy: "Ball-like ARC that becomes most dangerous when you let it close distance inside cluttered spaces.", response: "Keep space and delete it before it reaches your feet or your team stack.", weakPoint: "Low durability overall", loadout: "Any weapon works.", tactic: "Climb or dodge over it to bait the blast if you are caught late, then punish on the reset." },
  { name: "Fireball", threat: "Close-Range Burn", copy: "Aggressive short-range ARC that punishes cramped movement and late reactions.", response: "Do not let it collapse into your cover pocket; create space early.", weakPoint: "White core exposed when it opens to attack", loadout: "Heavy ammo is ideal, but any accurate burst into the open core works.", tactic: "Back off to make it open up, snap the exposed core, then move again so the death fire does not trade back." },
  { name: "Wasp", threat: "Light Air Harassment", copy: "Fast flying ARC that pressures movement lanes and exposed rotations.", response: "Use cover chains and remove it before crossing open space.", weakPoint: "Thrusters", loadout: "Fast-handling rifles or SMGs that can track air targets.", tactic: "Clip the thrusters to destabilize it instead of chasing center mass." },
  { name: "Hornet", threat: "Shock Air Threat", copy: "A nastier flying variant that adds stronger pressure and punishes players who ignore aerial tracking.", response: "Watch rear thrusters and avoid staying exposed when it lines up an attack.", weakPoint: "Unarmored rear thrusters", loadout: "Medium ammo weapons are a strong baseline.", tactic: "Dodge roll on the attack audio cue, then return fire into the rear thrusters while it recovers." },
  { name: "Rocketeer", threat: "Explosive Air Threat", copy: "Flying ARC that turns open angles and delayed rotations into explosive danger.", response: "Break sight lines quickly and never assume one rooftop peek is safe.", weakPoint: "Thrusters and the area above the scanner", loadout: "Heavy ammo or Wolfpack-style grenade pressure.", tactic: "Fight it from cover only. If you can destabilize the thrusters, the rest of the takedown gets dramatically safer." },
  { name: "Firefly", threat: "Air Threat", copy: "A newer ARC unit introduced during the Shrouded Sky era that adds to aerial pressure and update-era combat variance.", response: "Treat it like priority air pressure and clear it before it stacks with ground threats.", weakPoint: "Yellow body canister and semi-armored thrusters", loadout: "Heavy ammo or precise rifle fire.", tactic: "Favor clean angle shots into the yellow canister. If that is not available, strip the thrusters until it destabilizes." },
  { name: "Comet", threat: "Air Threat", copy: "Another newer ARC named in official update material, contributing to more dangerous live-service encounter mixes.", response: "Respect it as a patch-era threat and avoid learning its pattern the hard way mid-fight.", weakPoint: "Best punished before detonation", loadout: "Heavy ammo or grenades.", tactic: "Sidestep its approach instead of backpedaling in a straight line, then finish it before the blast window." },
  { name: "Vaporizer", threat: "Laser Air Threat", copy: "Flashpoint's new flying ARC stalks Close Scrutiny operations and is already known for devastating laser attacks and odd attack timing.", response: "Treat it like top-priority aerial pressure whenever it enters the fight, because its attack pattern is designed to punish late peeks and static cover use.", weakPoint: "Public weak-point details are still emerging", loadout: "Accurate anti-air weapons, fast burst damage, and hard-cover discipline.", tactic: "Do not learn the timing in the open. Break line of sight first, watch the laser rhythm, then take short clean peeks instead of extended trades." },
  { name: "Leaper", threat: "Burst Pressure", copy: "Large ARC that can cover distance fast and force you off safe positions with jump pressure.", response: "Keep lateral escape space and punish it after the commit.", weakPoint: "Leg joints and central eye", loadout: "Explosives, Wolfpack, or high-pen burst damage.", tactic: "Make it jump first. Once it commits, hit the legs or eye while it is recovering instead of trying to race it head-on." },
  { name: "Shredder", threat: "Aggressive Pursuit", copy: "Flashpoint spreads Shredders across Blue Gate, Buried City, Spaceport, and Dam Battlegrounds during map conditions, making them a much more common route problem.", response: "Assume more raids can now turn into Shredder fights even outside dedicated event zones, especially on condition-affected maps.", weakPoint: "Thrusters", loadout: "Heavy ammo, grenades, or Hullcracker-style punch.", tactic: "Never fight it in the open. Use hard cover, wait for the attack signal, then peek only long enough to damage the thrusters." },
  { name: "Bombardier", threat: "Area Denial", copy: "Heavy support ARC that uses marked positions to rain damage onto static players.", response: "Relocate early and kill the supporting detection chain before you try to hold ground.", weakPoint: "Yellow leg joints and rear canister", loadout: "Heavy ammo, Hullcracker, Deadline, or Wolfpack.", tactic: "Kill the Spotter first if one is active. Then work the rear or legs from cover and never stay close enough to eat the shockwave." },
  { name: "Bastion", threat: "Heavy Frontline", copy: "Heavily armored ARC built to dominate frontal fights and punish players who stand in obvious lanes.", response: "Do not brawl it head-on longer than necessary; work weak points and safer angles.", weakPoint: "Yellow leg joints and rear canister", loadout: "Heavy-hitting rear utility like Deadline or Wolfpack, plus armor-pen weapons.", tactic: "Drag it around cover or a corner, then farm leg joints while it turns. Stuns make it dramatically safer to finish." },
  { name: "Turret", threat: "Static Kill Zone", copy: "Fixed ARC gun emplacement commonly found in defensive or indoor spaces where it controls entry lanes.", response: "Respect sight lines before entering and clear it before exposing the whole team.", weakPoint: "Punish its attack window", loadout: "Heavy ammo makes the kill fast.", tactic: "Bait the burst, duck back into cover, then repeek during its downtime." },
  { name: "Sentinel", threat: "Vantage Control", copy: "Larger outdoor threat that controls stronger angles and punishes careless movement through open spaces.", response: "Identify its line of control first, then route or peek around it deliberately.", weakPoint: "Yellow arm canister", loadout: "Heavy ammo or precision fire from cover.", tactic: "Watch the beam color cues, bait the shot, then punish the yellow canister instead of dumping ammo into armor." },
  { name: "Baron Husk", threat: "Elite Ground Threat", copy: "More dangerous husk-class ARC that adds higher punishment to already contested zones.", response: "Do not let it become background damage while you chase smaller targets.", weakPoint: "Limited public weak-point data", loadout: "Armor-pen weapons and explosives are the safest assumption.", tactic: "Treat it like a heavier ground bruiser: isolate it, keep lateral room, and do not let it pressure you while other ARC stay alive." },
  { name: "Deforester Husk", threat: "Heavy Environment Threat", copy: "Bulkier husk-type ARC found in more hostile areas where it adds sustained pressure.", response: "Treat it as a positional problem first and do not get pinned near it.", weakPoint: "Limited public weak-point data", loadout: "Armor-pen weapons and explosive utility.", tactic: "Fight it from hard cover with an exit route already chosen. If the area is already noisy, disengaging is often the better play." },
  { name: "Matriarch", threat: "Boss-Class Threat", copy: "Large high-threat ARC that requires real planning and should not be treated like normal ambient PvE.", response: "Only engage with a plan, room to reset, and a reason to take the noise risk.", weakPoint: "Break faceplates, then hit the red core. Leg joints are also valid weak points.", loadout: "High-pen weapons, boss utility, and cover-friendly burst tools like Deadline or Wolfpack when windows open.", tactic: "Fight from major hard cover or high ground. Ignore the shield phase unless you can safely enter it, and do not tunnel on the boss while summoned ARC are collapsing on you." },
  { name: "Queen", threat: "Boss-Class Threat", copy: "Massive multi-legged ARC and one of the most dangerous named threats currently in the game ecosystem.", response: "Treat it as a major event-level fight, not casual background farm.", weakPoint: "Strip armor plates, then focus the red core. Yellow leg weak points are also valuable.", loadout: "High-pen primaries plus burst utility saved for exposed-core windows.", tactic: "Do not stand in repeated mortar lanes. Use cover, chip the armor off first, and only commit your biggest damage when the core is exposed." },
  { name: "ARC Orbiter", threat: "Overhead Threat Platform", copy: "A named ARC platform listed in the current ARC index and best treated as a high-risk environmental enemy presence.", response: "Do not underestimate it just because it is less common in casual discussion; identify how it changes the area first.", weakPoint: "Public counter data is still thin", loadout: "Long-range, precise fire and cover-heavy play.", tactic: "Treat it like an area-control problem first. Break line of sight, identify what ground units it is enabling, and only commit if the area is worth the attention." }
];

const prepChecklist = [
  "Choose the purpose of the raid before queueing: questing, crafting, feat progress, or simple loot extraction.",
  "Bring healing and one tool that helps you escape, distract, or control space.",
  "Check whether the map condition changes your route, greed threshold, or likely player traffic.",
  "Keep inventory flexibility for materials, gadgets, and unexpected high-value finds.",
  "If playing with others, agree on who leads pacing and who makes the final leave call."
];

const questSystems = [
  {
    id: "trader-quests",
    title: "Trader Quests",
    category: "Story and progression",
    summary: "These are the main Speranza quest lines given by Traders and they advance your rewards, story context, and long-term progression.",
    overview: "Official ARC Raiders material describes Trader quests as the core story-and-reward quest line in Speranza. Different Traders have different agendas, so the fastest way to complete these quests is to treat each run like an assignment instead of a general loot roam.",
    howTo: [
      "Accept quests before gearing up so your loadout matches the actual objective.",
      "Group compatible quest steps into one raid when they overlap by map area, loot type, or kill target.",
      "Once the quest condition is done, pivot to extraction instead of turning the run into a bonus fight hunt."
    ],
    mistakes: [
      "Queueing without reading the exact requirement and bringing the wrong loadout.",
      "Looting too widely instead of pathing straight through the objective zone.",
      "Dying after completion because the player stayed Topside for extra value."
    ],
    fieldNote: "The fastest way to finish a Trader quest is usually the safest route that completes the exact condition and gets out."
  },
  {
    id: "feats",
    title: "Feats",
    category: "Small objectives",
    summary: "Feats are compact tasks that award Cred, which is then spent in Raider Decks.",
    overview: "The official overview describes Feats as smaller objectives such as destroying a set number of ARC enemies. These are ideal background goals because they can ride alongside your main quest instead of replacing it.",
    howTo: [
      "Track which enemy, item, or action the Feat requires before you start the raid.",
      "Pair the Feat with a Trader quest or loot run in the same region whenever possible.",
      "Use Feats as tie-breakers when deciding which fight or area is worth taking."
    ],
    mistakes: [
      "Forcing dangerous detours for low-value Feat progress.",
      "Tunnel-visioning on kills and forgetting extraction value.",
      "Ignoring easy passive progress that would have completed naturally."
    ],
    fieldNote: "Feats are best treated as bonus efficiency, not as permission to overstay."
  },
  {
    id: "trials",
    title: "Weekly Trials",
    category: "Harder challenge content",
    summary: "Trials are harder weekly challenges with difficulty levels, rankings, and rotating rewards.",
    overview: "Official material says Trials refresh weekly, are more demanding than ordinary objectives, and feed into rankings and rewards. That means your goal is not just completion but controlled performance under a tougher ruleset.",
    howTo: [
      "Read the current Trial requirement and decide whether the run is a practice attempt or a score attempt.",
      "Bring a loadout built for consistency, healing, and recovery instead of pure greed.",
      "If the Trial supports ranking, protect the run once you have a strong result instead of gambling for style."
    ],
    mistakes: [
      "Treating the first attempt like a perfect run instead of using it to learn the pressure pattern.",
      "Bringing a normal raid loadout into a challenge that needs more sustain or control.",
      "Staying in a collapsing run when preserving time for a clean retry would be better."
    ],
    fieldNote: "Trials reward planning and repetition more than hero moments."
  },
  {
    id: "projects",
    title: "Projects",
    category: "Large progression goals",
    summary: "Projects are bigger long-term progression goals, including the Expedition Project unlocked later in progression.",
    overview: "ARC Raiders officially describes Projects as larger objectives in Speranza, with the Expedition Project becoming available at level 20 and operating on a repeating cycle. These are long-haul goals, so the right approach is sustained progress, not one oversized raid.",
    howTo: [
      "Check the project stage and break it into several efficient runs instead of trying to brute-force everything at once.",
      "Bank materials and value consistently because project progress compounds over time.",
      "Protect your stash and progression once the project is close to completion."
    ],
    mistakes: [
      "Ignoring project prep until the completion window is close.",
      "Taking unnecessary late-run risks when long-term value matters more than one extra pickup.",
      "Failing to align normal raids with project progress along the way."
    ],
    fieldNote: "Projects reward steady discipline. They are won by consistency before they are finalized."
  },
  {
    id: "expeditions",
    title: "Expeditions",
    category: "Departure and prestige progression",
    summary: "Expeditions are ARC Raiders' longer-cycle depart system where you cash in your Stash value for permanent rewards and start a new progression phase.",
    overview: "Official Expedition posts make it clear that this system is not a normal quest turn-in. It is a bigger decision about timing, account progression, and what you are willing to reset or preserve. Expeditions reward players who understand stash value, know what carries forward, and depart deliberately instead of impulsively.",
    howTo: [
      "Read the current Expedition requirements before committing, because stash-value thresholds and reward stacks matter more than one last risky raid.",
      "Build toward Expedition with a deliberate stash-value plan instead of assuming your normal loot habits will accidentally get you there.",
      "Know what is retained, what is reset, and what permanent bonuses you are actually buying with the departure."
    ],
    mistakes: [
      "Treating Expedition like a normal project instead of a strategic reset decision.",
      "Departing before you understand the reward structure or catch-up rules for missing progress.",
      "Over-risking late raids when a clean stash-value push would have been enough."
    ],
    fieldNote: "Expeditions are prestige decisions. The strongest move is usually the deliberate one, not the fastest one."
  }
];

const communityTrackedQuestGroups = [
  {
    trader: "Shani",
    quests: [
      "Picking Up The Pieces",
      "Clearer Skies",
      "Trash Into Treasure",
      "Off The Radar",
      "Eyes in the Sky",
      "With a Trace",
      "Lost in Transmission",
      "A Toxic Trail",
      "A Prime Specimen",
      "A Dead End",
      "Dust on the Wires"
    ]
  },
  {
    trader: "Celeste",
    quests: [
      "Water Troubles",
      "The Root of the Matter",
      "Keeping the Memory",
      "Source of the Contamination",
      "Greasing Her Palms",
      "A Bad Feeling",
      "Switching the Supply",
      "Worth Your Salt"
    ]
  },
  {
    trader: "Tian Wen",
    quests: [
      "The Right Tool",
      "A Better Use",
      "Broken Monument",
      "Snap and Salvage"
    ]
  },
  {
    trader: "Apollo",
    quests: [
      "A First Foothold",
      "What Goes Around",
      "The Clean Dream",
      "Paving the Way",
      "The League",
      "Movie Night"
    ]
  },
  {
    trader: "Lance",
    quests: [
      "Community tracking page available",
      "Named quest coverage is public but not fully expanded in the current source snapshot"
    ]
  }
];

const materialFamilies = [
  {
    id: "basic-scrap",
    title: "Basic Materials",
    badge: "Metal, fabric, chemicals, rubber",
    summary: "These are the bread-and-butter crafting materials explicitly named in official ARC Raiders community unlock content.",
    overview: "The most concrete public material list from ARC Raiders names Metal Parts, Fabric, Chemicals, and Rubber Parts as basic materials. Treat these as your reliable general-purpose crafting backbone. The official map descriptions suggest these are best hunted in everyday scavenging spaces like apartments, towns, tunnels, industrial edges, research sites, hospitals, and older infrastructure.",
    whereToLook: [
      "Apartments, town areas, and common interior loot spaces for fabric, consumer scrap, and mixed utility loot.",
      "Industrial facilities, launch infrastructure, and tunnel systems for metal-heavy and rubber-heavy scrap.",
      "Research centers, hospitals, and technical interiors for chemicals and processed utility items."
    ],
    routeTips: [
      "Run calmer mixed-use buildings instead of only chasing flashy hotspots.",
      "String together apartments, utility rooms, and industrial side buildings in one loop.",
      "Extract once you have enough stackable basics instead of overextending for luxury loot."
    ],
    fieldNote: "Basic materials come from volume and route discipline more than from one miracle room."
  },
  {
    id: "nature-yield",
    title: "Nature Loot",
    badge: "Organic and environmental harvests",
    summary: "Nature-focused materials get a direct official boost during Harvest Season map conditions.",
    overview: "The official overview explicitly calls out Harvest Season as a special condition that increases the yield of nature loot. That makes forested, swampy, and open environmental areas far more attractive when you are looking for materials tied to natural gathering rather than industrial salvage.",
    whereToLook: [
      "Forests and swamps on Dam Battlegrounds when you want natural-resource style runs.",
      "Open mountain and rural spaces on Blue Gate when you can gather without attracting too much attention.",
      "Harvest Season map conditions whenever they are active, because the official description confirms better nature-loot yield."
    ],
    routeTips: [
      "Build a quieter route with fewer interiors and more environmental pickups.",
      "Do not linger in the open once your bag is already filled with lower-weight utility loot.",
      "Use Harvest Season as the best window to bulk up on these materials efficiently."
    ],
    fieldNote: "If the condition favors nature loot, lean into it hard and leave once the bag is doing its job."
  },
  {
    id: "industrial-tech",
    title: "Industrial and High-Tier Tech",
    badge: "Old tech, machinery, advanced parts",
    summary: "High-value tech materials are most likely to align with Spaceport-style industrial zones, technical interiors, hidden systems, and special loot events.",
    overview: "Officially, Spaceport is described as a derelict launch facility filled with old technology across industrial locations. Patch notes also confirm that high-tier materials can be found in First Wave Caches during the Hurricane condition. Put together, that makes industrial maps, technical interiors, and special cache opportunities your best public-facing leads for advanced crafting materials.",
    whereToLook: [
      "Spaceport industrial spaces and old technology areas for technical salvage.",
      "Research centers, underground complexes, and hidden bunker-style content for denser advanced loot chances.",
      "First Wave Caches during Hurricane-style conditions, which official patch notes say have boosted high-tier material drops."
    ],
    routeTips: [
      "Go in with a focused objective because these areas also attract stronger competition.",
      "Treat advanced materials like a hit-and-leave objective, not a full clear.",
      "Use quieter side access if the central industrial landmark is too contested."
    ],
    fieldNote: "Advanced materials are usually expensive in attention. Get in, secure value, and get out."
  },
  {
    id: "medical-chemical",
    title: "Medical and Chemical Stock",
    badge: "Workshop and healing support",
    summary: "Chemicals and medical-style supplies line up best with hospitals, research facilities, and specialized interiors.",
    overview: "Official map descriptions for Buried City and Dam Battlegrounds include hospitals and research centers, and the public material examples explicitly include Chemicals. That makes medically themed interiors and scientific spaces the strongest official clues for this material family.",
    whereToLook: [
      "Hospital zones in Buried City when you want medically themed loot pools.",
      "Research centers on Dam Battlegrounds for chemical and technical supply overlap.",
      "Lab-like interiors, utility rooms, and specialist storage spaces whenever you spot them."
    ],
    routeTips: [
      "Use compact interior sweeps instead of broad outdoor loops.",
      "Bring a loadout that handles close-quarters pressure because these areas can become ambush-heavy.",
      "Leave early if you hit the required chemicals or support components fast."
    ],
    fieldNote: "Medical materials are often best farmed through short, repeatable interior routes."
  }
];

const materialCatalog = [
  {
    title: "Basic Materials",
    items: ["Chemicals", "Fabric", "Metal Parts", "Plastic Parts", "Rubber Parts"]
  },
  {
    title: "Topside Materials",
    items: [
      "Advanced ARC Powercell",
      "Arc Alloy",
      "Arc Circuitry",
      "Arc Motion Core",
      "Arc Powercell",
      "Battery",
      "Canister",
      "Complex Gun Parts",
      "Duct Tape",
      "Exodus Modules",
      "Great Mullein",
      "Heavy Gun Parts",
      "Light Gun Parts",
      "Magnet",
      "Medium Gun Parts",
      "Moss",
      "Oil",
      "Processor",
      "Rope",
      "Sensors",
      "Simple Gun Parts",
      "Speaker Component",
      "Steel Spring",
      "Synthesized Fuel",
      "Syringe",
      "Voltage Converter",
      "Wires"
    ]
  },
  {
    title: "Refined Materials",
    items: [
      "Advanced Electrical Components",
      "Advanced Mechanical Components",
      "Antiseptic",
      "Crude Explosives",
      "Durable Cloth",
      "Electrical Components",
      "Explosive Compound",
      "Magnetic Accelerator",
      "Mechanical Components",
      "Mod Components",
      "Power Rod"
    ]
  }
];

const materialPriorityGuide = [
  {
    name: "Always keep: survival and utility stock",
    usedFor: "Chemicals, bandage-type inputs, batteries, wires, and other support materials that keep healing, gadgets, and workshop flexibility alive.",
    keepRule: "Keep these if they help you stay alive, reposition, or keep basic utility crafts online.",
    sellRule: "Sell only once you have multiple comfortable stacks and your workshop path is stable.",
    recycleRule: "Recycle overflow only after checking whether you are about to craft healing, gadgets, or project requirements.",
    note: "For a new Raider, survivability materials are usually worth more than speculative high-tier hoarding."
  },
  {
    name: "Protect your weapon pipeline",
    usedFor: "Gun parts, springs, processors, and general weapon-support materials that keep your chosen gun family sustainable.",
    keepRule: "Keep these when you are still figuring out your primary weapon path or relying on crafted replacements.",
    sellRule: "Sell duplicates only after you can consistently replace the loadout you actually use.",
    recycleRule: "Recycle extras when they are clearly outside your weapon path and you need broader workshop value.",
    note: "Weapon materials matter because they determine whether your next raid starts with confidence or compromise."
  },
  {
    name: "Save premium ARC tech for big gates",
    usedFor: "Arc Circuitry, ARC Powercells, advanced electrical/mechanical parts, sensors, and high-tier systems tied to stronger workshop options or project gates.",
    keepRule: "Keep these almost by default unless you are absolutely sure you do not need them soon.",
    sellRule: "Only emergency-sell premium ARC tech when stash space is a bigger problem than progression speed.",
    recycleRule: "Do not make these your first recycle targets; they often gate the more meaningful upgrades later.",
    note: "Premium tech is where careless selling hurts the most."
  },
  {
    name: "Use common bulk loot as pressure valves",
    usedFor: "Duct Tape, Rope, Fabric, Rubber Parts, Metal Parts, and other common stack fillers that support many recipes but are also easier to replace.",
    keepRule: "Keep a working stack because these fill boring-but-important recipe gaps.",
    sellRule: "Good sell candidates when your stash is clogged and you need fast breathing room.",
    recycleRule: "Often the safest recycle bucket because the materials are broader and more replaceable.",
    note: "Common materials are useful, but they should not crowd out premium tech or survival stock."
  },
  {
    name: "Check projects before every sell session",
    usedFor: "Projects, Scrappy feeding, Expedition prep, and crafting all compete for stash value.",
    keepRule: "Keep materials that clearly support your next named project, Expedition goal, or weapon/healing bottleneck.",
    sellRule: "Sell things that do not support your next several raids or your next major system milestone.",
    recycleRule: "Recycle when the workshop value is more useful than the item sitting idle in storage.",
    note: "The right keep-or-sell decision depends on what your account is trying to unlock next, not on a universal material ranking. If the workshop can now solve a missing ingredient through Acquire Resources, that should change what you sell or recycle."
  }
];

const loadoutBlueprints = [
  {
    title: "Questing Loadout",
    summary: "Bring a stable mid-range primary, reliable healing, and one utility item that helps you disengage or force space.",
    bestFor: "Trader quests, named quest walkthroughs, and objective-first runs where finishing the task matters more than farming kills.",
    guidance: "Avoid overly specialized heavy gear unless the quest explicitly pushes you into major ARC pressure or a contested event.",
    beginnerTip: "The right quest loadout gets you in, completes the step, and still has enough left to extract."
  },
  {
    title: "Material Run Loadout",
    summary: "Build around mobility, low-drama survival, and enough self-defense to escape machine pressure without turning the raid into a war.",
    bestFor: "Workshop farming, condition routing, and stash-value runs.",
    guidance: "Favor sustainable weapons, healing, and distraction or reset tools over expensive contest gear.",
    beginnerTip: "If the raid goal is materials, every loud unnecessary fight is stealing value from the run."
  },
  {
    title: "Operation Contest Loadout",
    summary: "Operations like Close Scrutiny reward players who can fight, reset, and survive concentrated pressure instead of just looting broadly.",
    bestFor: "Close Scrutiny, hotspot events, and lobbies where you expect both ARC and player collision.",
    guidance: "Bring a primary you trust under pressure, stronger anti-ARC or burst utility, and one item that protects your reset window.",
    beginnerTip: "Do not enter concentrated-value content with a farming loadout and hope tempo will somehow slow down for you."
  },
  {
    title: "Heavy ARC Hunt Loadout",
    summary: "When the raid goal is Bastions, Bombardiers, Matriarchs, Queens, or Vaporizer-heavy areas, your loadout needs actual weak-point punishment and reset tools.",
    bestFor: "Machine hunting, boss prep, and dangerous project steps.",
    guidance: "Bring harder-hitting gear only when the objective justifies it, and pair it with cover discipline instead of treating raw damage as permission to stand in open angles.",
    beginnerTip: "The best ARC-hunt loadout is the one that still lets you leave after the fight, not just win the fight."
  },
  {
    title: "Cheap Recovery Loadout",
    summary: "A recovery loadout should be affordable, sustainable, and honest about its purpose: restore progression stability, not pretend you are geared for every fight.",
    bestFor: "Post-loss recovery, shaky stash periods, and sessions where you need one solid run to stabilize.",
    guidance: "Bring weapons you can replace, healing you can afford, and utility that gives you second chances instead of flashy overkill.",
    beginnerTip: "Recovery kits win by lowering risk, not by recreating your dream build on a budget."
  }
];

const quickUseItems = [
  {
    title: "Healing",
    summary: "Bandages, med-style quick-use items, and healing support are the easiest way to turn a near-failed raid into an extraction.",
    bringWhen: "Always. This is not optional for learning players.",
    tip: "If you keep dying with a full backpack, you probably cut healing too aggressively."
  },
  {
    title: "Grenades and Burst Utility",
    summary: "Explosives are one of the simplest ways to force movement, punish clustered ARC, or buy time in bad spaces.",
    bringWhen: "Bring at least one when you expect interiors, boss windows, or aggressive ARC pressure.",
    tip: "Do not throw them just because you have them. Save them for cover breaks, escape windows, or exposed weak points."
  },
  {
    title: "Lures and Distraction Tools",
    summary: "Distraction utility can peel pressure, move ARC off your line, or create a cleaner window for looting and extraction.",
    bringWhen: "Best for solo learners, material runs, and routes where the goal is not to full-clear everything.",
    tip: "These tools are strongest when they prevent a fight, not when they are used after the fight is already lost."
  },
  {
    title: "Stuns and Control",
    summary: "Control items make heavier ARC and messy rooms much more manageable by creating a short damage or escape window.",
    bringWhen: "Great for Bastions, Bombardiers, Matriarch prep, or any run where panic usually starts from losing space.",
    tip: "If you are new, control utility is often more valuable than one extra damage item."
  },
  {
    title: "Movement or Escape Utility",
    summary: "Any tool that helps you break line of sight, reposition, or reset is huge for newer players who overstay fights.",
    bringWhen: "Especially useful on quest runs where finishing the objective matters more than winning every engagement.",
    tip: "A run-saving escape item is usually worth more than one extra stack of loot."
  },
  {
    title: "Flashpoint: Surge Coil",
    summary: "Surge Coil is Flashpoint's new deployable that periodically electrifies the area around it, shocking anything that drifts into range.",
    bringWhen: "Strong for anti-flank coverage, operation looting windows, defensive resets, and controlling a doorway or angle while you heal or interact.",
    tip: "Think of it as a safety bubble, not just damage. It is strongest when it stops someone from comfortably pushing you."
  }
];

const TRACK_META = {
  "new-raider": {
    level: "Beginner",
    priority: "Essential",
    mode: "Solo + squad",
    goal: "Learn the loop",
    tags: ["extraction basics", "survival", "new raider"]
  },
  "rust-belt-systems": {
    level: "Intermediate",
    priority: "Recommended",
    mode: "Solo + squad",
    goal: "Progress faster",
    tags: ["workshop", "materials", "projects"]
  },
  "combat-and-operations": {
    level: "Advanced",
    priority: "Advanced",
    mode: "Squad leaning",
    goal: "High-pressure raids",
    tags: ["operations", "arc control", "risk management"]
  }
};

const LESSON_META = {
  "extraction-shooter-basics": { level: "Beginner", priority: "Essential", mode: "Solo + squad", goal: "Learn the loop", tags: ["extraction", "raid loop", "fundamentals"] },
  "raid-loop": { level: "Beginner", priority: "Essential", mode: "Solo + squad", goal: "Learn the loop", tags: ["survival", "objective", "extraction"] },
  "raid-concepts": { level: "Beginner", priority: "Recommended", mode: "Solo + squad", goal: "Decision-making", tags: ["raid phases", "tempo", "discipline"] },
  "topside-basics": { level: "Beginner", priority: "Essential", mode: "Solo + squad", goal: "Stay alive", tags: ["topside", "awareness", "cover"] },
  "speranza-progression": { level: "Beginner", priority: "Recommended", mode: "Solo + squad", goal: "Progress faster", tags: ["traders", "workshop", "skills"] },
  "loadouts-and-recovery": { level: "Beginner", priority: "Recommended", mode: "Solo + squad", goal: "Build a kit", tags: ["loadouts", "recovery", "gear"] },
  "conditions-and-routing": { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Find value", tags: ["conditions", "routing", "loot"] },
  "machine-attention": { level: "Advanced", priority: "Recommended", mode: "Solo + squad", goal: "Win fights", tags: ["arc", "threat control", "reset"] },
  "squad-pacing": { level: "Advanced", priority: "Advanced", mode: "Squad", goal: "Teamplay", tags: ["squad", "spacing", "extract"] },
  "risk-and-extracts": { level: "Advanced", priority: "Essential", mode: "Solo + squad", goal: "Extract more", tags: ["risk", "late raid", "greed control"] },
  "conditions-as-economy": { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Progress faster", tags: ["economy", "conditions", "routing"] },
  "locked-room-value": { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Find value", tags: ["keys", "locked rooms", "route value"] },
  "scrappy-and-projects": { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Progress faster", tags: ["scrappy", "projects", "stash"] },
  "workshop-decisions": { level: "Intermediate", priority: "Essential", mode: "Solo + squad", goal: "Craft smarter", tags: ["workshop", "acquire resources", "crafting"] },
  "operations-and-assessor": { level: "Advanced", priority: "Advanced", mode: "Solo + squad", goal: "High-pressure raids", tags: ["close scrutiny", "operations", "assessor"] },
  "arc-priority-logic": { level: "Advanced", priority: "Essential", mode: "Solo + squad", goal: "Win fights", tags: ["arc intel", "target priority", "machines"] }
};

const QUEST_META = {
  "trader-quests": { level: "Beginner", priority: "Essential", mode: "Solo + squad", goal: "Progress faster", tags: ["traders", "story", "objectives"] },
  feats: { level: "Beginner", priority: "Recommended", mode: "Solo + squad", goal: "Passive progress", tags: ["cred", "background progress", "arc kills"] },
  trials: { level: "Advanced", priority: "Advanced", mode: "Solo + squad", goal: "Weekly challenge", tags: ["weekly", "ranking", "challenge"] },
  projects: { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Long progression", tags: ["projects", "stash value", "milestones"] },
  expeditions: { level: "Advanced", priority: "Advanced", mode: "Solo + squad", goal: "Prestige timing", tags: ["expedition", "departure", "long cycle"] }
};

const MATERIAL_META = {
  "basic-scrap": { level: "Beginner", priority: "Essential", goal: "Craft starter gear", tags: ["workshop", "healing", "easy farm"] },
  "nature-yield": { level: "Intermediate", priority: "Recommended", goal: "Condition farming", tags: ["harvest season", "environment", "routing"] },
  "industrial-tech": { level: "Intermediate", priority: "Advanced", goal: "High-tier crafts", tags: ["spaceport", "advanced tech", "high risk"] },
  "medical-chemical": { level: "Beginner", priority: "Recommended", goal: "Healing support", tags: ["chemicals", "hospital", "research"] }
};

const LOADOUT_META = {
  "Questing Loadout": { level: "Beginner", priority: "Essential", mode: "Solo + squad", goal: "Finish quests", tags: ["quests", "stable", "mid-risk"] },
  "Material Run Loadout": { level: "Beginner", priority: "Essential", mode: "Solo", goal: "Find materials", tags: ["farming", "mobility", "low drama"] },
  "Operation Contest Loadout": { level: "Advanced", priority: "Advanced", mode: "Squad leaning", goal: "Contest operations", tags: ["close scrutiny", "pressure", "reset"] },
  "Heavy ARC Hunt Loadout": { level: "Advanced", priority: "Recommended", mode: "Solo + squad", goal: "Kill heavy ARC", tags: ["boss", "weak points", "high pen"] },
  "Cheap Recovery Loadout": { level: "Beginner", priority: "Recommended", mode: "Solo + squad", goal: "Recover stash", tags: ["budget", "recovery", "stability"] }
};

const QUICK_USE_META = {
  Healing: { level: "Beginner", priority: "Essential", mode: "Solo + squad", goal: "Stay alive", tags: ["healing", "survival", "always bring"] },
  "Grenades and Burst Utility": { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Force space", tags: ["grenades", "burst", "cover break"] },
  "Lures and Distraction Tools": { level: "Beginner", priority: "Recommended", mode: "Solo", goal: "Avoid bad fights", tags: ["lure", "stealth", "reset"] },
  "Stuns and Control": { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Control heavy ARC", tags: ["stun", "control", "boss prep"] },
  "Movement or Escape Utility": { level: "Beginner", priority: "Essential", mode: "Solo + squad", goal: "Escape cleanly", tags: ["mobility", "escape", "reset"] },
  "Flashpoint: Surge Coil": { level: "Intermediate", priority: "Advanced", mode: "Solo + squad", goal: "Hold space", tags: ["flashpoint", "surge coil", "anti flank"] }
};

const DISCOVERY_FILTERS = {
  tracks: [
    { id: "all", label: "All" },
    { id: "beginner", label: "Beginner" },
    { id: "progression", label: "Progression" },
    { id: "squad", label: "Squad" }
  ],
  lessons: [
    { id: "all", label: "All lessons" },
    { id: "beginner", label: "Beginner" },
    { id: "progression", label: "Progression" },
    { id: "combat", label: "Combat" },
    { id: "solo", label: "Solo friendly" }
  ],
  quests: [
    { id: "all", label: "All quest types" },
    { id: "beginner", label: "Beginner" },
    { id: "progression", label: "Progression" },
    { id: "weekly", label: "Weekly" },
    { id: "advanced", label: "Advanced" }
  ],
  materials: [
    { id: "all", label: "All materials" },
    { id: "beginner", label: "Beginner" },
    { id: "workshop", label: "Workshop" },
    { id: "healing", label: "Healing" },
    { id: "high-tier", label: "High tier" }
  ],
  weaponRoles: [
    { id: "all", label: "All loadouts" },
    { id: "beginner", label: "Beginner" },
    { id: "solo", label: "Solo" },
    { id: "squad", label: "Squad" },
    { id: "pressure", label: "High pressure" }
  ],
  quickUse: [
    { id: "all", label: "All essentials" },
    { id: "essential", label: "Essential" },
    { id: "control", label: "Control" },
    { id: "escape", label: "Escape" },
    { id: "flashpoint", label: "Flashpoint" }
  ],
  machines: [
    { id: "all", label: "All ARC" },
    { id: "essential", label: "Essential" },
    { id: "air", label: "Air threats" },
    { id: "heavy", label: "Heavies" },
    { id: "boss", label: "Boss class" }
  ]
};

const SEARCH_SUGGESTIONS = [
  { label: "Beginner lessons", query: "beginner" },
  { label: "Close Scrutiny", query: "close scrutiny" },
  { label: "Acquire Resources", query: "acquire resources" },
  { label: "Questing loadout", query: "questing loadout" },
  { label: "Sensors", query: "sensors" },
  { label: "Matriarch", query: "matriarch" }
];

function getTrackMeta(track) {
  return TRACK_META[track.id] ?? { level: "Beginner", priority: "Recommended", mode: "Solo + squad", goal: "Learn", tags: [] };
}

function getLessonMeta(lesson) {
  return LESSON_META[lesson.id] ?? { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Improve", tags: [] };
}

function getQuestMeta(quest) {
  return QUEST_META[quest.id] ?? { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Progress faster", tags: [] };
}

function getMaterialMeta(material) {
  return MATERIAL_META[material.id] ?? { level: "Intermediate", priority: "Recommended", goal: "Craft smarter", tags: [] };
}

function getLoadoutMeta(role) {
  return LOADOUT_META[role.title] ?? { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Build a kit", tags: [] };
}

function getQuickUseMeta(item) {
  return QUICK_USE_META[item.title] ?? { level: "Intermediate", priority: "Recommended", mode: "Solo + squad", goal: "Stay alive", tags: [] };
}

function getMachineMeta(machine) {
  const isBoss = ["Matriarch", "Queen"].includes(machine.name);
  const isAir = machine.threat.toLowerCase().includes("air") || ["Snitch", "Spotter", "Surveyor", "Rocketeer", "Firefly", "Comet", "Vaporizer", "Hornet", "Wasp"].includes(machine.name);
  const isHeavy = ["Bombardier", "Bastion", "Sentinel", "Leaper", "Shredder", "ARC Orbiter", "Baron Husk", "Deforester Husk"].includes(machine.name);
  return {
    level: isBoss ? "Advanced" : isHeavy ? "Intermediate" : "Beginner",
    priority: ["Snitch", "Spotter", "Vaporizer", "Shredder", "Matriarch", "Queen"].includes(machine.name) ? "Essential" : isBoss ? "Advanced" : "Recommended",
    mode: isBoss ? "Squad leaning" : "Solo + squad",
    goal: isBoss ? "Boss prep" : isAir ? "Control air threats" : "Win fights",
    tags: [
      isAir ? "air threat" : "ground threat",
      isBoss ? "boss" : isHeavy ? "heavy" : "core intel",
      machine.name.toLowerCase()
    ]
  };
}

const state = {
  activeView: "start",
  selectedReleaseId: "patch-notes-1-23-0-2026-04-08",
  selectedTrackId: tracks[0].id,
  selectedLessonId: lessons.find((lesson) => lesson.trackId === tracks[0].id)?.id ?? null,
  selectedQuestId: "trader-quests",
  selectedMaterialId: "basic-scrap",
  reviewedLessons: [],
  completedItems: [],
  savedItems: [],
  checkedPrepItems: [],
  playstylePreference: "new-raider",
  loadoutBuilder: {
    goal: "quests",
    risk: "balanced",
    team: "solo"
  },
  materialHelper: {
    pressure: "stash",
    rarity: "basic",
    objective: "healing"
  },
  lastVisited: {
    type: "lesson",
    id: lessons.find((lesson) => lesson.trackId === tracks[0].id)?.id ?? null
  },
  filters: {
    tracks: "all",
    lessons: "all",
    quests: "all",
    materials: "all",
    weaponRoles: "all",
    quickUse: "all",
    machines: "all"
  }
};

const trackCountElement = document.querySelector("#track-count");
const lessonCountElement = document.querySelector("#lesson-count");
const machineCountElement = document.querySelector("#machine-count");
const appUpdatedElement = document.querySelector("#app-updated");
const appVerifiedElement = document.querySelector("#app-verified");
const reviewedCountElement = document.querySelector("#reviewed-count");
const overallProgressElement = document.querySelector("#overall-progress");
const savedCountElement = document.querySelector("#saved-count");
const continueLabelElement = document.querySelector("#continue-label");
const startHereSummaryElement = document.querySelector("#start-here-summary");
const startHereStepsElement = document.querySelector("#start-here-steps");
const startHereCtaElement = document.querySelector("#start-here-cta");
const globalSearchElement = document.querySelector("#global-search");
const searchSuggestionsElement = document.querySelector("#search-suggestions");
const commandBarElement = document.querySelector(".command-bar");
const toggleCommandBarElement = document.querySelector("#toggle-command-bar");
const searchResultsPanelElement = document.querySelector("#search-results-panel");
const searchResultsElement = document.querySelector("#search-results");
const focusNavElement = document.querySelector("#focus-nav");
const updateSpotlightElement = document.querySelector("#update-spotlight");
const releaseListElement = document.querySelector("#release-list");
const releaseDetailElement = document.querySelector("#release-detail");
const updateCenterElement = document.querySelector("#update-center");
const embarkFeedElement = document.querySelector("#embark-feed");
const heroUpdateCardElement = document.querySelector("#hero-update-card");
const heroPersonalCardElement = document.querySelector("#hero-personal-card");
const heroTaskListElement = document.querySelector("#hero-task-list");
const recentlyUpdatedListElement = document.querySelector("#recently-updated-list");
const trendingContentListElement = document.querySelector("#trending-content-list");
const sinceLastVisitPanelElement = document.querySelector("#since-last-visit-panel");
const personalHubElement = document.querySelector("#personal-hub");
const personalOverviewElement = document.querySelector("#personal-overview");
const personalNextElement = document.querySelector("#personal-next");
const sectionProgressElement = document.querySelector("#section-progress");
const savedPanelElement = document.querySelector("#saved-panel");
const mediaIntelGridElement = document.querySelector("#media-intel-grid");
const materialHelperElement = document.querySelector("#material-helper");
const loadoutBuilderElement = document.querySelector("#loadout-builder");
const machineOverviewElement = document.querySelector("#machine-overview");
const painPointListElement = document.querySelector("#pain-point-list");
const briefingListElement = document.querySelector("#briefing-list");
const trackListElement = document.querySelector("#track-list");
const trackFiltersElement = document.querySelector("#track-filters");
const trackOverviewElement = document.querySelector("#track-overview");
const lessonListElement = document.querySelector("#lesson-list");
const lessonFiltersElement = document.querySelector("#lesson-filters");
const lessonDetailElement = document.querySelector("#lesson-detail");
const lessonRelatedElement = document.querySelector("#lesson-related");
const machineListElement = document.querySelector("#machine-list");
const machineFiltersElement = document.querySelector("#machine-filters");
const prepListElement = document.querySelector("#prep-list");
const questOverviewElement = document.querySelector("#quest-overview");
const questListElement = document.querySelector("#quest-list");
const questFiltersElement = document.querySelector("#quest-filters");
const questDirectoryElement = document.querySelector("#quest-directory");
const questDetailElement = document.querySelector("#quest-detail");
const questRelatedElement = document.querySelector("#quest-related");
const questDetailPanelElement = document.querySelector(".quest-detail-panel");
const materialsOverviewElement = document.querySelector("#materials-overview");
const materialsListElement = document.querySelector("#materials-list");
const materialFiltersElement = document.querySelector("#material-filters");
const materialsDetailElement = document.querySelector("#materials-detail");
const materialRelatedElement = document.querySelector("#material-related");
const materialsDetailPanelElement = document.querySelector(".materials-detail-panel");
const materialsCatalogElement = document.querySelector("#materials-catalog");
const materialUsageGuideElement = document.querySelector("#material-usage-guide");
const gearOverviewElement = document.querySelector("#gear-overview");
const weaponRoleListElement = document.querySelector("#weapon-role-list");
const weaponFiltersElement = document.querySelector("#weapon-filters");
const quickUseListElement = document.querySelector("#quick-use-list");
const quickUseFiltersElement = document.querySelector("#quickuse-filters");
const detailPanelElement = document.querySelector(".detail-panel");
const lessonPanelElement = document.querySelector(".lesson-column");
const backToTopElement = document.querySelector("#back-to-top");
const easterEggTriggerElement = document.querySelector("#easter-egg-trigger");
const easterEggToastElement = document.querySelector("#easter-egg-toast");
const appVersionButtonElement = document.querySelector("#app-version");
const markReviewedButtonElement = document.querySelector("#mark-reviewed");
const markLessonCompleteButtonElement = document.querySelector("#mark-lesson-complete");
const saveLessonButtonElement = document.querySelector("#save-lesson");
const markQuestCompleteButtonElement = document.querySelector("#mark-quest-complete");
const saveQuestButtonElement = document.querySelector("#save-quest");
const markMaterialCompleteButtonElement = document.querySelector("#mark-material-complete");
const saveMaterialButtonElement = document.querySelector("#save-material");
const markReleaseCompleteButtonElement = document.querySelector("#mark-release-complete");
const saveReleaseButtonElement = document.querySelector("#save-release");
const shareAppButtonElement = document.querySelector("#share-app");
const installAppButtonElement = document.querySelector("#install-app");
const modalBackdropElement = document.querySelector("#modal-backdrop");
const changelogModalElement = document.querySelector("#changelog-modal");
const closeChangelogElement = document.querySelector("#close-changelog");
const changelogListElement = document.querySelector("#changelog-list");
const feedbackModalElement = document.querySelector("#feedback-modal");
const closeFeedbackElement = document.querySelector("#close-feedback");
const feedbackPanelElement = document.querySelector("#feedback-panel");
const openMethodologyElement = document.querySelector("#open-methodology");
const openFaqElement = document.querySelector("#open-faq");
const reportUpdateIssueElement = document.querySelector("#report-update-issue");
const feedbackTriggerElements = Array.from(document.querySelectorAll("[data-feedback-action]"));
const flowSectionElements = Array.from(document.querySelectorAll(".flow-section"));
const focusTriggerElements = Array.from(document.querySelectorAll("[data-focus-view]"));

let deferredInstallPrompt = null;
let easterEggTimeoutId = null;
let previousSeenUpdated = null;

function syncCommandBarState() {
  if (!commandBarElement || !toggleCommandBarElement) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  if (!isMobile) {
    commandBarElement.classList.remove("mobile-collapsed");
    toggleCommandBarElement.textContent = "Hide menu";
    toggleCommandBarElement.setAttribute("aria-expanded", "true");
    return;
  }

  const isCollapsed = commandBarElement.classList.contains("mobile-collapsed");
  toggleCommandBarElement.textContent = isCollapsed ? "Show menu" : "Hide menu";
  toggleCommandBarElement.setAttribute("aria-expanded", isCollapsed ? "false" : "true");
}

function createItemKey(type, id) {
  return `${type}:${id}`;
}

function createLoadoutId(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getPlaystyle() {
  return PLAYSTYLE_OPTIONS.find((option) => option.id === state.playstylePreference) ?? PLAYSTYLE_OPTIONS[0];
}

function getLastVisitedItem() {
  if (!state.lastVisited?.type || !state.lastVisited?.id) {
    return null;
  }

  return buildDiscoveryRegistry()[createItemKey(state.lastVisited.type, state.lastVisited.id)] ?? null;
}

function setLastVisited(type, id) {
  state.lastVisited = { type, id };
}

function isSavedItem(type, id) {
  return state.savedItems.includes(createItemKey(type, id));
}

function toggleSavedItem(type, id) {
  const itemKey = createItemKey(type, id);
  state.savedItems = isSavedItem(type, id)
    ? state.savedItems.filter((entry) => entry !== itemKey)
    : [itemKey, ...state.savedItems.filter((entry) => entry !== itemKey)];
}

function isCompletedItem(type, id) {
  return state.completedItems.includes(createItemKey(type, id));
}

function toggleCompletedItem(type, id) {
  const itemKey = createItemKey(type, id);
  state.completedItems = isCompletedItem(type, id)
    ? state.completedItems.filter((entry) => entry !== itemKey)
    : [...state.completedItems, itemKey];
}

function isPrepChecked(index) {
  return state.checkedPrepItems.includes(index);
}

function togglePrepChecked(index) {
  state.checkedPrepItems = isPrepChecked(index)
    ? state.checkedPrepItems.filter((entry) => entry !== index)
    : [...state.checkedPrepItems, index];
}

function getLessonProgress() {
  return lessons.reduce((count, lesson) => count + (isCompletedItem("lesson", lesson.id) ? 1 : 0), 0);
}

function getQuestProgress() {
  return questSystems.reduce((count, quest) => count + (isCompletedItem("quest", quest.id) ? 1 : 0), 0);
}

function getMaterialProgress() {
  return materialFamilies.reduce((count, material) => count + (isCompletedItem("material", material.id) ? 1 : 0), 0);
}

function getReleaseProgress() {
  return releases.reduce((count, release) => count + (isCompletedItem("release", release.id) ? 1 : 0), 0);
}

function getPrepProgress() {
  return prepChecklist.reduce((count, _item, index) => count + (isPrepChecked(index) ? 1 : 0), 0);
}

function getProgressSections() {
  return [
    { id: "learn", label: "Lessons", completed: getLessonProgress(), total: lessons.length },
    { id: "quests", label: "Quest Guides", completed: getQuestProgress(), total: questSystems.length },
    { id: "materials", label: "Material Guides", completed: getMaterialProgress(), total: materialFamilies.length },
    { id: "updates", label: "Update Reviews", completed: getReleaseProgress(), total: releases.length },
    { id: "prep", label: "Prep Checklist", completed: getPrepProgress(), total: prepChecklist.length }
  ];
}

function getOverallProgressPercent() {
  const sections = getProgressSections();
  const totalItems = sections.reduce((sum, section) => sum + section.total, 0);
  const completedItems = sections.reduce((sum, section) => sum + section.completed, 0);
  if (!totalItems) {
    return 0;
  }

  return Math.round((completedItems / totalItems) * 100);
}

function getContinueItem() {
  const lastVisited = getLastVisitedItem();
  if (lastVisited) {
    return lastVisited;
  }

  const nextLesson = lessons.find((lesson) => !isCompletedItem("lesson", lesson.id)) ?? getSelectedLesson();
  if (!nextLesson) {
    return null;
  }

  return {
    type: "lesson",
    id: nextLesson.id,
    title: nextLesson.title,
    subtitle: nextLesson.summary,
    view: "learn",
    action: () => {
      state.activeView = "learn";
      state.selectedTrackId = nextLesson.trackId;
      state.selectedLessonId = nextLesson.id;
      setLastVisited("lesson", nextLesson.id);
      render();
      scrollElementIntoView(document.querySelector("#curriculum"));
    }
  };
}

function hasUserProgressData() {
  return Boolean(
    state.reviewedLessons.length ||
    state.completedItems.length ||
    state.savedItems.length ||
    state.checkedPrepItems.length
  );
}

function getSinceLastVisitEntries() {
  if (!previousSeenUpdated || !hasUserProgressData()) {
    return [];
  }

  const registry = buildDiscoveryRegistry();
  return Object.entries(CONTENT_SIGNAL_OVERRIDES)
    .filter(([, signal]) => signal.updated > previousSeenUpdated)
    .map(([key, signal]) => {
      const entry = registry[key];
      if (!entry) {
        return null;
      }

      return {
        key,
        title: entry.title,
        subtitle: entry.subtitle,
        action: entry.action,
        type: entry.type,
        updated: signal.updated,
        benefit: signal.benefit,
        reason: signal.reason
      };
    })
    .filter(Boolean)
    .slice(0, 4);
}

function getLiveSignalEntries() {
  const registry = buildDiscoveryRegistry();
  const playstyle = getPlaystyle();
  const continueItem = getContinueItem();

  return Object.entries(CONTENT_SIGNAL_OVERRIDES).map(([key, signal]) => {
    const entry = registry[key];
    if (!entry) {
      return null;
    }

    const metaText = (entry.meta ?? []).join(" ").toLowerCase();
    const titleText = `${entry.title} ${entry.subtitle ?? ""}`.toLowerCase();
    let trendScore = signal.trend;

    if (continueItem && createItemKey(continueItem.type, continueItem.id) === key) {
      trendScore += 8;
    }
    if (state.savedItems.includes(key)) {
      trendScore += 6;
    }
    if (playstyle.id === "quest-focused" && (titleText.includes("quest") || metaText.includes("quest"))) {
      trendScore += 6;
    }
    if (playstyle.id === "loot-crafting-focused" && (titleText.includes("material") || metaText.includes("craft") || metaText.includes("workshop"))) {
      trendScore += 6;
    }
    if (playstyle.id === "solo-player" && metaText.includes("solo")) {
      trendScore += 5;
    }
    if (playstyle.id === "squad-player" && metaText.includes("squad")) {
      trendScore += 5;
    }

    return {
      key,
      ...entry,
      ...signal,
      trendScore,
      isUpdatedToday: signal.updated === APP_UPDATED
    };
  }).filter(Boolean);
}

function renderSignalCards(element, items, emptyCopy, variant = "updated") {
  if (!element) {
    return;
  }

  if (!items.length) {
    element.innerHTML = `
      <article class="signal-card signal-card-empty">
        <strong>Nothing new yet</strong>
        <p>${emptyCopy}</p>
      </article>
    `;
    return;
  }

  element.innerHTML = items.map((item) => `
    <button class="signal-card" type="button" data-signal-key="${item.key}">
      <div class="signal-card-top">
        <span class="signal-type">${item.type}</span>
        <span class="signal-date">${item.updated ?? item.date ?? APP_UPDATED}</span>
      </div>
      <strong class="signal-title">${item.title}</strong>
      <p class="signal-copy">${item.benefit ?? item.subtitle}</p>
      <div class="card-tags">
        ${item.isUpdatedToday ? '<span class="content-tag">Updated today</span>' : ""}
        <span class="content-tag">${variant === "trending" ? `Trend ${item.trendScore}` : "Recently updated"}</span>
        ${item.reason ? `<span class="content-tag">${item.reason}</span>` : ""}
      </div>
    </button>
  `).join("");

  for (const button of element.querySelectorAll("[data-signal-key]")) {
    button.addEventListener("click", () => {
      const match = items.find((item) => item.key === button.dataset.signalKey);
      if (!match) {
        return;
      }
      match.action?.();
      saveState();
    });
  }
}

function buildDiscoveryRegistry() {
  const registry = {};

  for (const lesson of lessons) {
    registry[createItemKey("lesson", lesson.id)] = {
      type: "lesson",
      id: lesson.id,
      title: lesson.title,
      subtitle: lesson.summary,
      meta: [lesson.time, getLessonMeta(lesson).level],
      action: () => {
        state.activeView = "learn";
        state.selectedTrackId = lesson.trackId;
        state.selectedLessonId = lesson.id;
        setLastVisited("lesson", lesson.id);
        render();
        scrollElementIntoView(document.querySelector("#curriculum"));
      }
    };
  }

  for (const quest of questSystems) {
    registry[createItemKey("quest", quest.id)] = {
      type: "quest",
      id: quest.id,
      title: quest.title,
      subtitle: quest.summary,
      meta: [quest.category, getQuestMeta(quest).level],
      action: () => {
        state.activeView = "quests";
        state.selectedQuestId = quest.id;
        setLastVisited("quest", quest.id);
        renderQuestList();
        renderQuestDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#quest-ops"));
      }
    };
  }

  for (const material of materialFamilies) {
    registry[createItemKey("material", material.id)] = {
      type: "material",
      id: material.id,
      title: material.title,
      subtitle: material.summary,
      meta: [material.badge, getMaterialMeta(material).goal],
      action: () => {
        state.activeView = "materials";
        state.selectedMaterialId = material.id;
        setLastVisited("material", material.id);
        renderMaterialsList();
        renderMaterialsDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#materials-intel"));
      }
    };
  }

  for (const release of releases) {
    registry[createItemKey("release", release.id)] = {
      type: "release",
      id: release.id,
      title: release.title,
      subtitle: release.summary,
      meta: [release.status, release.date],
      action: () => {
        state.activeView = "updates";
        state.selectedReleaseId = release.id;
        setLastVisited("release", release.id);
        renderReleaseList();
        renderReleaseDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(updateCenterElement);
      }
    };
  }

  for (const role of loadoutBlueprints) {
    const roleId = createLoadoutId(role.title);
    registry[createItemKey("loadout", roleId)] = {
      type: "loadout",
      id: roleId,
      title: role.title,
      subtitle: role.summary,
      meta: [role.bestFor, getLoadoutMeta(role).level],
      action: () => {
        state.activeView = "gear";
        setLastVisited("loadout", roleId);
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#gear-field-guide"));
      }
    };
  }

  for (const item of quickUseItems) {
    const quickUseId = createLoadoutId(item.title);
    registry[createItemKey("quickuse", quickUseId)] = {
      type: "quickuse",
      id: quickUseId,
      title: item.title,
      subtitle: item.summary,
      meta: [item.bringWhen, getQuickUseMeta(item).priority],
      action: () => {
        state.activeView = "gear";
        setLastVisited("quickuse", quickUseId);
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#gear-field-guide"));
      }
    };
  }

  return registry;
}

function renderSelectableChips(options, selectedId, dataKey) {
  return options.map((option) => `
    <button class="filter-chip ${option.id === selectedId ? "active" : ""}" type="button" data-tool-key="${dataKey}" data-tool-value="${option.id}">
      ${option.label}
    </button>
  `).join("");
}

function getLoadoutBuilderRecommendation() {
  const { goal, risk, team } = state.loadoutBuilder;
  const role = loadoutBlueprints.find((entry) => {
    const title = entry.title.toLowerCase();
    if (goal === "quests" && title.includes("quest")) return true;
    if (goal === "materials" && title.includes("material")) return true;
    if (goal === "pressure" && (title.includes("operation") || title.includes("heavy"))) return true;
    if (goal === "learning" && (title.includes("recovery") || title.includes("quest"))) return true;
    return false;
  }) ?? loadoutBlueprints[0];

  const caution = goal === "pressure" || risk === "high"
    ? "Do not take this unless the reward justifies contact. Pressure runs become charity the moment you forget your exit plan."
    : team === "solo"
      ? "Solo players should bias toward reset tools and ammo discipline over ego-peeking every noise on the map."
      : "Squads should assign one player to tempo and one to bailout calls so the run does not dissolve into three separate bad ideas.";

  const quickUse = quickUseItems.filter((item) => {
    const title = item.title.toLowerCase();
    if (goal === "pressure") return title.includes("grenade") || title.includes("surge") || title.includes("heal");
    if (goal === "materials") return title.includes("heal") || title.includes("smoke") || title.includes("tool");
    return title.includes("heal") || title.includes("smoke") || title.includes("utility");
  }).slice(0, 2);

  return { role, caution, quickUse };
}

function getMaterialHelperDecision() {
  const { pressure, rarity, objective } = state.materialHelper;

  if (pressure === "crafting" || objective === "projects") {
    return {
      action: "Keep it",
      tone: "Recommended",
      reason: "If you are blocked by projects or the workshop, liquidating future progress just to feel tidy is clown behavior.",
      nextStep: "Use the Materials and Quests focuses together so the next raid targets what the blocked craft actually needs."
    };
  }

  if (pressure === "cash" && rarity === "basic" && objective !== "future") {
    return {
      action: "Sell it",
      tone: "Safe choice",
      reason: "Basic materials are replaceable. If you need breathing room or cash, stop hoarding pennies like they are sacred relics.",
      nextStep: "Keep only the basic stack that supports your next near-term craft or healing sustain."
    };
  }

  if (pressure === "stash" && rarity === "high-tier") {
    return {
      action: "Keep it",
      tone: "Essential",
      reason: "High-tier materials are exactly the kind of thing players regret selling five minutes before an expensive build unlocks.",
      nextStep: "Trim lower-value basics first, then save this to a project or future craft plan."
    };
  }

  return {
    action: "Recycle it",
    tone: "Balanced",
    reason: "If the item is not high-tier and not tied to an immediate build, recycling it into reliable workshop value is the least stupid middle ground.",
    nextStep: "Use recycle when you want future utility without bloating the stash with random half-important junk."
  };
}

function getSelectedTrack() {
  return tracks.find((track) => track.id === state.selectedTrackId);
}

function getLessonsForTrack(trackId) {
  return lessons.filter((lesson) => lesson.trackId === trackId);
}

function getSelectedLesson() {
  const trackLessons = getLessonsForTrack(state.selectedTrackId);
  return trackLessons.find((lesson) => lesson.id === state.selectedLessonId) ?? trackLessons[0] ?? null;
}

function renderTagMarkup(tags = []) {
  return tags.map((tag) => `<span class="content-tag">${tag}</span>`).join("");
}

function getCategoryIcon(category) {
  const lookup = {
    Learn: ["L", "Learn"],
    Lesson: ["L", "Learn"],
    Quest: ["Q", "Quest"],
    Material: ["M", "Material"],
    Gear: ["G", "Gear"],
    "Quick-use": ["U", "Utility"],
    Updates: ["U", "Update"],
    Release: ["U", "Update"],
    "ARC Intel": ["A", "ARC"]
  };
  return lookup[category] ?? ["•", "Guide"];
}

function renderCategoryIcon(category) {
  const [glyph, label] = getCategoryIcon(category);
  return `<span class="category-icon" aria-label="${label}">${glyph}</span>`;
}

function getStatusTags(meta = {}) {
  const tags = [];
  if (meta.level === "Beginner") {
    tags.push("Beginner friendly");
  }
  if ((meta.mode ?? "").includes("Solo")) {
    tags.push("Solo");
  }
  if ((meta.mode ?? "").includes("Squad")) {
    tags.push("Squad");
  }
  if ((meta.tags ?? []).includes("high risk") || meta.level === "Advanced" || (meta.goal ?? "").toLowerCase().includes("boss")) {
    tags.push("High risk");
  }
  return [...new Set(tags)].slice(0, 3);
}

function renderStatusTagMarkup(tags = []) {
  return tags.filter(Boolean).map((tag) => `<span class="status-tag">${tag}</span>`).join("");
}

function renderCallout(type, title, body) {
  const icon = type === "warning" ? "!" : type === "trust" ? "i" : "+";
  return `
    <div class="callout callout-${type}">
      <span class="callout-icon" aria-hidden="true">${icon}</span>
      <div class="callout-body">
        <strong>${title}</strong>
        <p class="detail-copy">${body}</p>
      </div>
    </div>
  `;
}

function renderDecisionMetaRows(items = []) {
  const visibleItems = items.filter((item) => item?.value);
  if (!visibleItems.length) {
    return "";
  }

  return `
    <div class="decision-meta-grid">
      ${visibleItems.map((item) => `
        <article class="decision-meta-item">
          <span class="decision-meta-label">${item.label}</span>
          <strong class="decision-meta-value">${item.value}</strong>
        </article>
      `).join("")}
    </div>
  `;
}

function renderCardMeta(meta, extras = [], decisionItems = []) {
  const badges = [meta.priority, ...extras].filter(Boolean);
  return `
    <div class="card-meta-row">
      <div class="card-badges">${badges.map((badge) => `<span class="card-badge">${badge}</span>`).join("")}</div>
      <span class="card-meta-mode">${meta.mode ?? meta.goal ?? ""}</span>
    </div>
    ${renderDecisionMetaRows(decisionItems)}
  `;
}

function getTrackDecisionItems(track, meta) {
  return [
    { label: "Best for", value: track.bestFor },
    { label: "Time", value: `${getLessonsForTrack(track.id).length} lessons` },
    { label: "Outcome", value: track.focus },
    { label: "Difficulty", value: meta.level }
  ];
}

function getLessonDecisionItems(lesson, meta) {
  return [
    { label: "Best for", value: lesson.category },
    { label: "Time", value: lesson.time },
    { label: "Outcome", value: meta.goal },
    { label: "Difficulty", value: meta.level }
  ];
}

function getQuestTimeEstimate(quest) {
  if (quest.id === "weekly-trials") return "1 week loop";
  if (quest.id === "expeditions") return "Multi-session prep";
  if (quest.id === "projects") return "Several raids";
  if (quest.id === "trader-quests") return "1-3 raids";
  return "1-2 raids";
}

function getQuestDecisionItems(quest, meta) {
  return [
    { label: "Best for", value: quest.category },
    { label: "Time", value: getQuestTimeEstimate(quest) },
    { label: "Outcome", value: meta.goal },
    { label: "Difficulty", value: meta.level }
  ];
}

function getMaterialTimeEstimate(material) {
  if (material.id === "advanced-components") return "2-3 raids";
  if (material.id === "healing-and-utility") return "1 short route";
  return "1-2 raids";
}

function getMaterialDecisionItems(material, meta) {
  return [
    { label: "Best for", value: material.badge },
    { label: "Time", value: getMaterialTimeEstimate(material) },
    { label: "Outcome", value: meta.goal },
    { label: "Difficulty", value: meta.level }
  ];
}

function getLoadoutDecisionItems(role, meta) {
  return [
    { label: "Best for", value: role.bestFor },
    { label: "Time", value: "2 min setup" },
    { label: "Outcome", value: meta.goal },
    { label: "Difficulty", value: meta.level }
  ];
}

function getQuickUseDecisionItems(item, meta) {
  return [
    { label: "Best for", value: item.bringWhen },
    { label: "Time", value: "30 sec read" },
    { label: "Outcome", value: meta.goal },
    { label: "Difficulty", value: meta.level }
  ];
}

function getMachineDecisionItems(machine, meta) {
  return [
    { label: "Best for", value: machine.threat },
    { label: "Time", value: "30 sec read" },
    { label: "Outcome", value: meta.goal },
    { label: "Difficulty", value: meta.level }
  ];
}

function getPainPointDecisionItems(painPoint) {
  const decisionMap = {
    "material-confusion": [
      { label: "Best for", value: "Crafting blocks and missing items" },
      { label: "Time", value: "2 min to orient" },
      { label: "Outcome", value: "Route with purpose" }
    ],
    "quest-drift": [
      { label: "Best for", value: "Directionless raids" },
      { label: "Time", value: "2 min to reset" },
      { label: "Outcome", value: "Turn raids into progress" }
    ],
    "machine-pressure": [
      { label: "Best for", value: "Messy ARC fights" },
      { label: "Time", value: "3 min to sharpen target order" },
      { label: "Outcome", value: "Survive pressure faster" }
    ],
    "new-player-overload": [
      { label: "Best for", value: "First-time Raiders" },
      { label: "Time", value: "5 min onboarding" },
      { label: "Outcome", value: "Know where to start" }
    ],
    "patch-confusion": [
      { label: "Best for", value: "Returning after updates" },
      { label: "Time", value: "1 min patch check" },
      { label: "Outcome", value: "Avoid stale advice" }
    ]
  };

  return decisionMap[painPoint.id] ?? [];
}

function renderFilterBar(element, sectionKey) {
  if (!element) {
    return;
  }

  const filters = DISCOVERY_FILTERS[sectionKey] ?? [];
  element.innerHTML = filters.map((filter) => `
    <button class="filter-chip ${state.filters[sectionKey] === filter.id ? "active" : ""}" type="button" data-filter-section="${sectionKey}" data-filter-id="${filter.id}">
      ${filter.label}
    </button>
  `).join("");

  for (const button of element.querySelectorAll("[data-filter-id]")) {
    button.addEventListener("click", () => {
      state.filters[sectionKey] = button.dataset.filterId;
      render();
      saveState();
    });
  }
}

function lessonMatchesFilter(lesson) {
  const filterId = state.filters.lessons;
  const meta = getLessonMeta(lesson);
  if (filterId === "all") return true;
  if (filterId === "beginner") return meta.level === "Beginner";
  if (filterId === "progression") return meta.goal === "Progress faster" || meta.tags.includes("workshop") || meta.tags.includes("traders");
  if (filterId === "combat") return lesson.trackId === "combat-and-operations" || meta.goal === "Win fights";
  if (filterId === "solo") return meta.mode.includes("Solo");
  return true;
}

function trackMatchesFilter(track) {
  const filterId = state.filters.tracks;
  const meta = getTrackMeta(track);
  if (filterId === "all") return true;
  if (filterId === "beginner") return meta.level === "Beginner";
  if (filterId === "progression") return meta.goal === "Progress faster" || meta.tags.includes("projects");
  if (filterId === "squad") return meta.mode.includes("Squad");
  return true;
}

function questMatchesFilter(quest) {
  const filterId = state.filters.quests;
  const meta = getQuestMeta(quest);
  if (filterId === "all") return true;
  if (filterId === "beginner") return meta.level === "Beginner";
  if (filterId === "progression") return meta.goal === "Progress faster" || meta.tags.includes("traders") || meta.tags.includes("projects");
  if (filterId === "weekly") return quest.id === "trials" || meta.tags.includes("weekly");
  if (filterId === "advanced") return meta.level === "Advanced";
  return true;
}

function materialMatchesFilter(material) {
  const filterId = state.filters.materials;
  const meta = getMaterialMeta(material);
  if (filterId === "all") return true;
  if (filterId === "beginner") return meta.level === "Beginner";
  if (filterId === "workshop") return meta.tags.includes("workshop") || meta.goal === "Craft starter gear";
  if (filterId === "healing") return meta.tags.includes("healing") || material.title.includes("Medical");
  if (filterId === "high-tier") return meta.tags.includes("high risk") || meta.goal === "High-tier crafts";
  return true;
}

function loadoutMatchesFilter(role) {
  const filterId = state.filters.weaponRoles;
  const meta = getLoadoutMeta(role);
  if (filterId === "all") return true;
  if (filterId === "beginner") return meta.level === "Beginner";
  if (filterId === "solo") return meta.mode.includes("Solo");
  if (filterId === "squad") return meta.mode.includes("Squad");
  if (filterId === "pressure") return meta.goal === "Contest operations" || meta.tags.includes("pressure");
  return true;
}

function quickUseMatchesFilter(item) {
  const filterId = state.filters.quickUse;
  const meta = getQuickUseMeta(item);
  if (filterId === "all") return true;
  if (filterId === "essential") return meta.priority === "Essential";
  if (filterId === "control") return meta.tags.includes("control") || meta.tags.includes("grenades");
  if (filterId === "escape") return meta.tags.includes("escape") || meta.tags.includes("reset");
  if (filterId === "flashpoint") return meta.tags.includes("flashpoint");
  return true;
}

function machineMatchesFilter(machine) {
  const filterId = state.filters.machines;
  const meta = getMachineMeta(machine);
  if (filterId === "all") return true;
  if (filterId === "essential") return meta.priority === "Essential";
  if (filterId === "air") return meta.tags.includes("air threat");
  if (filterId === "heavy") return meta.tags.includes("heavy");
  if (filterId === "boss") return meta.tags.includes("boss");
  return true;
}

function renderRelatedCards(element, items, emptyCopy) {
  if (!element) {
    return;
  }

  if (!items.length) {
    element.innerHTML = `<article class="related-card related-card-empty"><p class="related-copy">${emptyCopy}</p></article>`;
    return;
  }

  element.innerHTML = items.map((item) => `
    <button class="related-card" type="button" data-related-id="${item.id}">
      <span class="related-type">${item.type}</span>
      <strong class="related-title">${item.title}</strong>
      <p class="related-copy">${item.copy}</p>
      <div class="related-tags">${renderTagMarkup(item.tags ?? [])}</div>
    </button>
  `).join("");

  for (const button of element.querySelectorAll("[data-related-id]")) {
    button.addEventListener("click", () => {
      const match = items.find((item) => item.id === button.dataset.relatedId);
      if (!match) {
        return;
      }

      match.action();
      saveState();
    });
  }
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function scrollElementIntoView(element) {
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function syncFlowSections() {
  for (const section of flowSectionElements) {
    section.hidden = section.dataset.view !== state.activeView;
  }
}

function getFocusTarget(viewId) {
  const viewTargets = {
    start: document.querySelector(".launchpad-grid"),
    learn: document.querySelector("#curriculum"),
    quests: document.querySelector("#quest-ops"),
    materials: document.querySelector("#materials-intel"),
    gear: document.querySelector("#gear-field-guide"),
    machines: document.querySelector("#machine-intel"),
    updates: document.querySelector("#update-center")
  };

  return viewTargets[viewId] ?? null;
}

function renderFocusNav() {
  if (focusNavElement) {
    focusNavElement.innerHTML = focusViews.map((view) => `
      <button class="focus-button ${view.id === state.activeView ? "active" : ""}" type="button" data-view-id="${view.id}">
        <span class="eyebrow">Focus Mode</span>
        <strong class="focus-title">${view.label}</strong>
        <p class="focus-copy">${view.summary}</p>
      </button>
    `).join("");

    for (const button of focusNavElement.querySelectorAll("[data-view-id]")) {
      button.addEventListener("click", () => {
        setActiveView(button.dataset.viewId, { scrollTarget: getFocusTarget(button.dataset.viewId) });
      });
    }
  }

  for (const link of focusTriggerElements) {
    const focusView = link.dataset.focusView;
    if (!focusView) {
      continue;
    }

    link.classList.toggle("active", focusView === state.activeView);
  }
}

function setActiveView(viewId, options = {}) {
  if (!focusViews.some((view) => view.id === viewId)) {
    return;
  }

  state.activeView = viewId;
  renderFocusNav();
  syncFlowSections();
  saveState();

  if (options.scrollTarget) {
    scrollElementIntoView(options.scrollTarget);
  }
}

function renderCounts() {
  if (trackCountElement) {
    trackCountElement.textContent = String(tracks.length);
  }
  if (lessonCountElement) {
    lessonCountElement.textContent = String(lessons.length);
  }
  if (machineCountElement) {
    machineCountElement.textContent = String(machines.length);
  }
  appVersionButtonElement.textContent = APP_VERSION;
  appVersionButtonElement.setAttribute("aria-label", `Open changelog for ${APP_VERSION}`);
  appUpdatedElement.textContent = `Updated ${APP_UPDATED}`;
  if (appVerifiedElement) {
    appVerifiedElement.textContent = `Official posts verified ${OFFICIAL_POSTS_VERIFIED}`;
  }
  if (overallProgressElement) {
    overallProgressElement.textContent = `${getOverallProgressPercent()}%`;
  }
  if (savedCountElement) {
    savedCountElement.textContent = String(state.savedItems.length);
  }
}

function renderChangelog() {
  changelogListElement.innerHTML = VERSION_HISTORY.map((entry) => `
    <article class="changelog-entry">
      <div class="changelog-top">
        <strong class="changelog-version">${entry.version}</strong>
        <span class="changelog-date">${entry.date}</span>
      </div>
      <div class="changelog-meta-row">
        <span class="content-tag">${getChangelogImpact(entry)}</span>
        ${getChangelogAreas(entry).map((area) => `<span class="card-badge">${area}</span>`).join("")}
      </div>
      <p class="changelog-summary">${entry.summary}</p>
      <ul class="changelog-points">
        ${entry.changes.map((change) => `<li>${change}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function getChangelogImpact(entry) {
  const summary = entry.summary.toLowerCase();
  if (summary.includes("reverified") || summary.includes("verified") || summary.includes("refresh")) return "Maintenance";
  if (summary.includes("fixed") || summary.includes("replaced")) return "Accuracy fix";
  if (summary.includes("redesigned") || summary.includes("ui/ux") || summary.includes("visual")) return "UX update";
  return "Feature update";
}

function getChangelogAreas(entry) {
  const haystack = `${entry.summary} ${entry.changes.join(" ")}`.toLowerCase();
  return [
    haystack.includes("lesson") || haystack.includes("track") ? "Learn" : null,
    haystack.includes("quest") || haystack.includes("project") || haystack.includes("expedition") ? "Quests" : null,
    haystack.includes("material") || haystack.includes("workshop") ? "Materials" : null,
    haystack.includes("gear") || haystack.includes("loadout") || haystack.includes("weapon") ? "Gear" : null,
    haystack.includes("arc") || haystack.includes("machine") ? "ARC Intel" : null,
    haystack.includes("update") || haystack.includes("patch") || haystack.includes("flashpoint") ? "Updates" : null,
    haystack.includes("footer") || haystack.includes("verification") || haystack.includes("feedback") ? "Trust" : null
  ].filter(Boolean).slice(0, 4);
}

function renderBriefing() {
  briefingListElement.innerHTML = BRIEFING_STEPS.map((step, index) => `
    <article class="briefing-item">
      <span class="briefing-index">0${index + 1}</span>
      <h3 class="briefing-title">${step.title}</h3>
      <p class="briefing-copy">${step.copy}</p>
      <div class="callout callout-tip">
        <strong>Why it matters</strong>
        <p class="detail-copy">This step exists to reduce panic decisions. ARC Raiders punishes drift, not just bad aim.</p>
      </div>
    </article>
  `).join("");
}

function renderPainPoints() {
  painPointListElement.innerHTML = painPoints.map((painPoint) => `
    <article class="pain-point-card">
      <h3 class="pain-point-title">${painPoint.title}</h3>
      <p class="pain-point-copy">${painPoint.copy}</p>
      ${renderDecisionMetaRows(getPainPointDecisionItems(painPoint))}
      <button class="hero-button hero-button-secondary pain-point-action" type="button" data-pain-point-id="${painPoint.id}">${painPoint.actionLabel}</button>
    </article>
  `).join("");

  for (const button of painPointListElement.querySelectorAll("[data-pain-point-id]")) {
    button.addEventListener("click", () => {
      const painPoint = painPoints.find((entry) => entry.id === button.dataset.painPointId);
      if (!painPoint) {
        return;
      }

      painPoint.onOpen();
      saveState();
    });
  }
}

function renderTracks() {
  renderFilterBar(trackFiltersElement, "tracks");
  const visibleTracks = tracks.filter(trackMatchesFilter);
  if (!visibleTracks.some((track) => track.id === state.selectedTrackId)) {
    state.selectedTrackId = visibleTracks[0]?.id ?? tracks[0].id;
    state.selectedLessonId = getLessonsForTrack(state.selectedTrackId)[0]?.id ?? null;
  }
  trackListElement.innerHTML = visibleTracks.map((track) => {
    const meta = getTrackMeta(track);
    return `
    <button class="track-button ${track.id === state.selectedTrackId ? "active" : ""}" type="button" data-track-id="${track.id}">
      <div class="track-title-row">
        <h3>${track.title}</h3>
        <span class="track-badge">${getLessonsForTrack(track.id).length} lessons</span>
      </div>
      ${renderCardMeta(meta, [track.bestFor.includes("First-time") ? "Beginner path" : null], getTrackDecisionItems(track, meta))}
      <p class="track-summary">${track.subtitle}</p>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    </button>
  `;
  }).join("");

  for (const button of trackListElement.querySelectorAll("[data-track-id]")) {
    button.addEventListener("click", () => {
      state.selectedTrackId = button.dataset.trackId;
      state.selectedLessonId = getLessonsForTrack(state.selectedTrackId)[0]?.id ?? null;
      render();
      saveState();
      if (isMobileLayout()) {
        scrollElementIntoView(lessonPanelElement);
      }
    });
  }
}

function renderTrackOverview() {
  const track = getSelectedTrack();
  if (!track) {
    trackOverviewElement.innerHTML = "";
    return;
  }
  const meta = getTrackMeta(track);

  trackOverviewElement.innerHTML = `
    <p class="eyebrow">Current Track</p>
    <h2 class="overview-title">${track.title}</h2>
    <p class="overview-subtitle">${track.subtitle}</p>
    <p class="overview-copy">${track.summary}</p>
    <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    <div class="overview-meta">
      <article class="meta-pill"><span class="meta-label">Focus</span><strong class="meta-value">${track.focus}</strong></article>
      <article class="meta-pill"><span class="meta-label">Best For</span><strong class="meta-value">${track.bestFor}</strong></article>
      <article class="meta-pill"><span class="meta-label">Mindset</span><strong class="meta-value">${track.tone}</strong></article>
    </div>
  `;
}

function renderLessons() {
  renderFilterBar(lessonFiltersElement, "lessons");
  const trackLessons = getLessonsForTrack(state.selectedTrackId).filter(lessonMatchesFilter);
  if (!trackLessons.some((lesson) => lesson.id === state.selectedLessonId)) {
    state.selectedLessonId = trackLessons[0]?.id ?? getLessonsForTrack(state.selectedTrackId)[0]?.id ?? null;
  }
  lessonListElement.innerHTML = trackLessons.map((lesson) => {
    const meta = getLessonMeta(lesson);
    return `
    <button class="lesson-card ${lesson.id === state.selectedLessonId ? "active" : ""} ${state.reviewedLessons.includes(lesson.id) ? "reviewed" : ""} ${isCompletedItem("lesson", lesson.id) ? "is-complete" : ""}" type="button" data-lesson-id="${lesson.id}">
      <div class="lesson-title-row">
        <h3 class="lesson-title">${lesson.title}</h3>
        <span class="tag">${lesson.time}</span>
      </div>
      ${renderCardMeta(meta, [lesson.category], getLessonDecisionItems(lesson, meta))}
      <p class="lesson-summary">${lesson.summary}</p>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    </button>
  `;
  }).join("");

  for (const button of lessonListElement.querySelectorAll("[data-lesson-id]")) {
    button.addEventListener("click", () => {
      state.selectedLessonId = button.dataset.lessonId;
      setLastVisited("lesson", button.dataset.lessonId);
      renderLessons();
      renderLessonDetail();
      updateProgressSummary();
      renderHeroDashboard();
      renderPersonalHub();
      saveState();
      if (isMobileLayout()) {
        scrollElementIntoView(detailPanelElement);
      }
    });
  }
}

function renderLessonDetail() {
  const lesson = getSelectedLesson();
  if (!lesson) {
    lessonDetailElement.innerHTML = '<p class="detail-copy">Select a lesson to load the breakdown.</p>';
    markReviewedButtonElement.hidden = true;
    markLessonCompleteButtonElement.hidden = true;
    saveLessonButtonElement.hidden = true;
    renderRelatedCards(lessonRelatedElement, [], "Select a lesson to load related content.");
    return;
  }
  const meta = getLessonMeta(lesson);

  markReviewedButtonElement.hidden = false;
  markReviewedButtonElement.textContent = state.reviewedLessons.includes(lesson.id)
    ? "Reviewed - tap to undo"
    : "Mark lesson reviewed";
  markLessonCompleteButtonElement.hidden = false;
  markLessonCompleteButtonElement.textContent = isCompletedItem("lesson", lesson.id)
    ? "Completed - tap to undo"
    : "Mark lesson complete";
  saveLessonButtonElement.hidden = false;
  saveLessonButtonElement.textContent = isSavedItem("lesson", lesson.id)
    ? "Saved - tap to remove"
    : "Save lesson";

  lessonDetailElement.innerHTML = `
    <section class="detail-block">
      <p class="detail-kicker">${lesson.category}</p>
      <h3 class="detail-title">${lesson.title}</h3>
      <p class="detail-copy">${lesson.body}</p>
    </section>
    <section class="detail-block">
      <div class="detail-chip-row">
        <article class="meta-pill"><span class="chip-label">Track</span><strong class="chip-value">${getSelectedTrack()?.title ?? "Guide"}</strong></article>
        <article class="meta-pill"><span class="chip-label">Lesson Time</span><strong class="chip-value">${lesson.time}</strong></article>
        <article class="meta-pill"><span class="chip-label">Level</span><strong class="chip-value">${meta.level}</strong></article>
        <article class="meta-pill"><span class="chip-label">State</span><strong class="chip-value">${isCompletedItem("lesson", lesson.id) ? "Completed" : state.reviewedLessons.includes(lesson.id) ? "Reviewed" : "Fresh"}</strong></article>
      </div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">What to do</p>
      <ul class="detail-list">${lesson.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">Self-check</p>
      <ul class="detail-list">${lesson.checks.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      ${renderCallout("tip", "Field note", lesson.fieldNote)}
    </section>
  `;

  const relatedLessons = lessons
    .filter((entry) => entry.id !== lesson.id)
    .map((entry) => ({ lesson: entry, meta: getLessonMeta(entry) }))
    .filter(({ lesson: entry, meta: entryMeta }) =>
      entry.trackId === lesson.trackId ||
      entryMeta.goal === meta.goal ||
      entryMeta.tags.some((tag) => meta.tags.includes(tag))
    )
    .slice(0, 3)
    .map(({ lesson: entry, meta: entryMeta }) => ({
      id: entry.id,
      type: "Lesson",
      title: entry.title,
      copy: entry.summary,
      tags: [entryMeta.level, ...entryMeta.tags.slice(0, 2)],
      action: () => {
        state.activeView = "learn";
        state.selectedTrackId = entry.trackId;
        state.selectedLessonId = entry.id;
        render();
        scrollElementIntoView(document.querySelector("#curriculum"));
      }
    }));

  renderRelatedCards(lessonRelatedElement, relatedLessons, "No related lessons yet. Try switching tracks for a different skill path.");
}

function renderMachines() {
  renderFilterBar(machineFiltersElement, "machines");
  machineOverviewElement.innerHTML = `
    <section class="machine-intel-note">
      <strong class="hero-card-label">Threat priority</strong>
      <p>When a fight starts getting messy, stop thinking about raw health pools first. Kill or break the units that expand the fight, expose you, or force you out of cover.</p>
    </section>
    ${renderCallout("warning", "Combat warning", "Machine advice mixes official machine coverage with public field-tested counterplay. Use it as practical raid guidance, not as a secret developer damage spreadsheet.")}
    <div class="machine-priority-grid">
      <article class="machine-priority-card">
        <strong>1. Detection first</strong>
        <p>Snitches and spotters are the units most likely to turn a small mistake into a whole area problem.</p>
      </article>
      <article class="machine-priority-card">
        <strong>2. Area denial next</strong>
        <p>Bombardier-style pressure and flying units punish players who stay still or cross open ground late.</p>
      </article>
      <article class="machine-priority-card">
        <strong>3. Burst threats after</strong>
        <p>Leapers and heavy threats become easier to manage once detection and space control are handled.</p>
      </article>
    </div>
    <div class="source-note">
      <strong>Source scope:</strong>
      <p class="machine-copy">This section combines current public machine listings and official update notes with community-supported weak-point and counterplay guidance. Where full official counter data is not public, the weapon and tactic advice is practical field guidance rather than a developer-confirmed damage chart.</p>
    </div>
  `;

  machineListElement.innerHTML = machines.filter(machineMatchesFilter).map((machine) => {
    const meta = getMachineMeta(machine);
    return `
    <article class="machine-card">
      <div class="machine-top">
        <h3 class="machine-name">${renderCategoryIcon("ARC Intel")}${machine.name}</h3>
        <span class="machine-threat">${machine.threat}</span>
      </div>
      ${renderCardMeta(meta, [machine.threat], getMachineDecisionItems(machine, meta))}
      <p class="machine-copy">${machine.copy}</p>
      <div class="card-tags">${renderStatusTagMarkup(getStatusTags(meta))}</div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
      <div class="machine-tactics-grid">
        <article class="machine-tactic">
          <span class="chip-label">Weak Point</span>
          <strong class="chip-value">${machine.weakPoint}</strong>
        </article>
        <article class="machine-tactic">
          <span class="chip-label">Best Tool</span>
          <strong class="chip-value">${machine.loadout}</strong>
        </article>
      </div>
      ${renderCallout("tip", "Response", machine.response)}
      ${renderCallout("warning", "How to kill it", machine.tactic)}
    </article>
  `;
  }).join("");
}

function renderPrepList() {
  prepListElement.innerHTML = prepChecklist.map((item, index) => `
    <button class="prep-card ${isPrepChecked(index) ? "is-complete" : ""}" type="button" data-prep-index="${index}">
      <span class="prep-marker"></span>
      <div>
        <h3 class="prep-title">Check before launch</h3>
        <p class="prep-copy">${item}</p>
      </div>
    </button>
  `).join("");

  for (const button of prepListElement.querySelectorAll("[data-prep-index]")) {
    button.addEventListener("click", () => {
      togglePrepChecked(Number(button.dataset.prepIndex));
      renderCounts();
      updateProgressSummary();
      renderHeroDashboard();
      renderPersonalHub();
      renderPrepList();
      saveState();
    });
  }
}

function getSelectedQuest() {
  return questSystems.find((quest) => quest.id === state.selectedQuestId) ?? questSystems[0];
}

function renderQuestOverview() {
  questOverviewElement.innerHTML = `
    <article class="meta-pill">
      <span class="meta-label">Officially described systems</span>
      <strong class="meta-value">${questSystems.length} live quest categories</strong>
    </article>
    <p class="quest-overview-copy">ARC Raiders' official public material currently gives enough information to guide players through Trader quests, Feats, weekly Trials, larger Projects, and Expeditions. This section focuses on how to complete those systems reliably rather than pretending there is a public, fixed list of every named in-game task.</p>
    ${renderCallout("trust", "Last verified", `Quest system guidance is aligned with official public ARC Raiders progression posts verified through ${OFFICIAL_POSTS_VERIFIED}.`)}
    <div class="source-note">
      <strong>Source scope:</strong>
      <p class="quest-note">This guide is grounded in the current official public overview of quests, Traders, Feats, Trials, Projects, and Expedition-related posts from ARC Raiders.</p>
    </div>
  `;
}

function renderQuestList() {
  renderFilterBar(questFiltersElement, "quests");
  const visibleQuests = questSystems.filter(questMatchesFilter);
  if (!visibleQuests.some((quest) => quest.id === state.selectedQuestId)) {
    state.selectedQuestId = visibleQuests[0]?.id ?? questSystems[0].id;
  }
  questListElement.innerHTML = visibleQuests.map((quest) => {
    const meta = getQuestMeta(quest);
    return `
    <button class="quest-card ${quest.id === state.selectedQuestId ? "active" : ""} ${isCompletedItem("quest", quest.id) ? "is-complete" : ""} ${isSavedItem("quest", quest.id) ? "is-saved" : ""}" type="button" data-quest-id="${quest.id}">
      <div class="quest-title-row">
        <h3 class="quest-title">${renderCategoryIcon("Quest")}${quest.title}</h3>
        <span class="quest-badge">${quest.category}</span>
      </div>
      ${renderCardMeta(meta, [isCompletedItem("quest", quest.id) ? "Completed" : null, isSavedItem("quest", quest.id) ? "Saved" : null], getQuestDecisionItems(quest, meta))}
      <p class="quest-summary">${quest.summary}</p>
      <div class="card-tags">${renderStatusTagMarkup(getStatusTags(meta))}</div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    </button>
  `;
  }).join("");

  for (const button of questListElement.querySelectorAll("[data-quest-id]")) {
    button.addEventListener("click", () => {
      state.selectedQuestId = button.dataset.questId;
      setLastVisited("quest", button.dataset.questId);
      renderQuestList();
      renderQuestDetail();
      renderHeroDashboard();
      renderPersonalHub();
      saveState();
      if (isMobileLayout()) {
        scrollElementIntoView(questDetailPanelElement);
      }
    });
  }
}

function renderQuestDirectory() {
  questDirectoryElement.innerHTML = `
    <div class="source-note">
      <strong>Current named quest coverage:</strong>
      <p class="quest-note">A full official live quest database is not publicly exposed in one reliable source after Flashpoint. This directory shows the current community-tracked named quest coverage available right now, grouped by Trader so new Raiders can see what exists and jump into walkthrough support.</p>
      <a class="hero-button hero-button-secondary" href="https://www.dexerto.com/wikis/arc-raiders/quest-list-arc-raiders-full-walkthrough/" target="_blank" rel="noreferrer">Open full community quest walkthrough index</a>
    </div>
    ${communityTrackedQuestGroups.map((group) => `
      <section class="quest-directory-group">
        <h3 class="quest-directory-title">${group.trader}</h3>
        <div class="quest-directory-list">
          ${group.quests.map((quest) => `<span class="quest-directory-item">${quest}</span>`).join("")}
        </div>
      </section>
    `).join("")}
  `;
}

function renderQuestDetail() {
  const quest = getSelectedQuest();
  const meta = getQuestMeta(quest);
  markQuestCompleteButtonElement.textContent = isCompletedItem("quest", quest.id)
    ? "Completed - tap to undo"
    : "Mark quest guide complete";
  saveQuestButtonElement.textContent = isSavedItem("quest", quest.id)
    ? "Saved - tap to remove"
    : "Save quest guide";
  questDetailElement.innerHTML = `
    <section class="detail-block">
      <p class="detail-kicker">${quest.category}</p>
      <h3 class="detail-title">${quest.title}</h3>
      <p class="detail-copy">${quest.overview}</p>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">How to finish it</p>
      <ul class="detail-list">${quest.howTo.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">What slows players down</p>
      <ul class="detail-list">${quest.mistakes.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <div class="detail-chip-row">
        <article class="meta-pill"><span class="chip-label">Level</span><strong class="chip-value">${meta.level}</strong></article>
        <article class="meta-pill"><span class="chip-label">Priority</span><strong class="chip-value">${meta.priority}</strong></article>
        <article class="meta-pill"><span class="chip-label">Mode</span><strong class="chip-value">${meta.mode}</strong></article>
        <article class="meta-pill"><span class="chip-label">State</span><strong class="chip-value">${isCompletedItem("quest", quest.id) ? "Completed" : "Active"}</strong></article>
      </div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    </section>
    <section class="detail-block">
      ${renderCallout("tip", "Field note", quest.fieldNote)}
    </section>
  `;

  const relatedItems = [
    ...lessons.filter((lesson) => {
      const lessonMeta = getLessonMeta(lesson);
      return lessonMeta.goal === meta.goal || lessonMeta.tags.some((tag) => meta.tags.includes(tag));
    }).slice(0, 2).map((lesson) => ({
      id: lesson.id,
      type: "Lesson",
      title: lesson.title,
      copy: lesson.summary,
      tags: getLessonMeta(lesson).tags.slice(0, 2),
      action: () => {
        state.activeView = "learn";
        state.selectedTrackId = lesson.trackId;
        state.selectedLessonId = lesson.id;
        render();
        scrollElementIntoView(document.querySelector("#curriculum"));
      }
    })),
    ...loadoutBlueprints.filter((role) => {
      const roleMeta = getLoadoutMeta(role);
      return roleMeta.goal === "Finish quests" || roleMeta.tags.includes("quests") || meta.goal.includes("Progress");
    }).slice(0, 1).map((role) => ({
      id: `related-${role.title}`,
      type: "Loadout",
      title: role.title,
      copy: role.summary,
      tags: getLoadoutMeta(role).tags.slice(0, 2),
      action: () => {
        state.activeView = "gear";
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#gear-field-guide"));
      }
    })),
    ...materialFamilies.filter((material) => {
      const materialMeta = getMaterialMeta(material);
      return meta.tags.includes("projects") ? materialMeta.goal.includes("Craft") || material.title.includes("Industrial") : materialMeta.tags.includes("healing") || materialMeta.tags.includes("workshop");
    }).slice(0, 1).map((material) => ({
      id: material.id,
      type: "Material",
      title: material.title,
      copy: material.summary,
      tags: getMaterialMeta(material).tags.slice(0, 2),
      action: () => {
        state.activeView = "materials";
        state.selectedMaterialId = material.id;
        renderMaterialsList();
        renderMaterialsDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#materials-intel"));
      }
    }))
  ].slice(0, 4);

  renderRelatedCards(questRelatedElement, relatedItems, "Questing connections will appear here as more guide links are added.");
}

function getSelectedMaterial() {
  return materialFamilies.find((material) => material.id === state.selectedMaterialId) ?? materialFamilies[0];
}

function saveState() {
  const persistableState = {
    activeView: state.activeView,
    selectedReleaseId: state.selectedReleaseId,
    selectedTrackId: state.selectedTrackId,
    selectedLessonId: state.selectedLessonId,
    selectedQuestId: state.selectedQuestId,
    selectedMaterialId: state.selectedMaterialId,
    reviewedLessons: state.reviewedLessons,
    completedItems: state.completedItems,
    savedItems: state.savedItems,
    checkedPrepItems: state.checkedPrepItems,
    playstylePreference: state.playstylePreference,
    loadoutBuilder: state.loadoutBuilder,
    materialHelper: state.materialHelper,
    lastVisited: state.lastVisited,
    filters: state.filters,
    lastSeenUpdated: APP_UPDATED
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persistableState));
}

function loadState() {
  try {
    const rawState = window.localStorage.getItem(STORAGE_KEY);
    if (!rawState) {
      return;
    }

    const parsedState = JSON.parse(rawState);
    state.activeView = parsedState.activeView || state.activeView;
    state.selectedReleaseId = parsedState.selectedReleaseId || state.selectedReleaseId;
    state.selectedTrackId = parsedState.selectedTrackId || state.selectedTrackId;
    state.selectedLessonId = parsedState.selectedLessonId || state.selectedLessonId;
    state.selectedQuestId = parsedState.selectedQuestId || state.selectedQuestId;
    state.selectedMaterialId = parsedState.selectedMaterialId || state.selectedMaterialId;
    state.reviewedLessons = Array.isArray(parsedState.reviewedLessons) ? parsedState.reviewedLessons : [];
    state.completedItems = Array.isArray(parsedState.completedItems) ? parsedState.completedItems : [];
    state.savedItems = Array.isArray(parsedState.savedItems) ? parsedState.savedItems : [];
    state.checkedPrepItems = Array.isArray(parsedState.checkedPrepItems) ? parsedState.checkedPrepItems : [];
    state.playstylePreference = parsedState.playstylePreference || state.playstylePreference;
    state.loadoutBuilder = { ...state.loadoutBuilder, ...(parsedState.loadoutBuilder ?? {}) };
    state.materialHelper = { ...state.materialHelper, ...(parsedState.materialHelper ?? {}) };
    state.lastVisited = parsedState.lastVisited ?? state.lastVisited;
    state.filters = { ...state.filters, ...(parsedState.filters ?? {}) };
    previousSeenUpdated = parsedState.lastSeenUpdated ?? null;
  } catch (_error) {
    state.reviewedLessons = [];
    state.completedItems = [];
    state.savedItems = [];
    state.checkedPrepItems = [];
  }
}

function buildSearchIndex() {
  return [
    ...painPoints.map((painPoint) => ({
      id: painPoint.id,
      type: "Pain point",
      title: painPoint.title,
      body: painPoint.copy,
      action: () => painPoint.onOpen()
    })),
    ...releases.map((release) => ({
      id: release.id,
      type: "Release",
      title: release.title,
      body: `${release.summary} ${release.overview} ${release.confirmed.join(" ")}`,
      meta: [release.status, release.date],
      tags: release.confirmed.slice(0, 3),
      action: () => {
        state.activeView = "updates";
        state.selectedReleaseId = release.id;
        setLastVisited("release", release.id);
        renderReleaseList();
        renderReleaseDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(updateCenterElement);
      }
    })),
    ...lessons.map((lesson) => ({
      id: lesson.id,
      type: "Lesson",
      title: lesson.title,
      body: `${lesson.summary} ${lesson.body} ${lesson.category}`,
      meta: [getLessonMeta(lesson).level, lesson.time, lesson.category],
      tags: getLessonMeta(lesson).tags,
      action: () => {
        state.activeView = "learn";
        state.selectedTrackId = lesson.trackId;
        state.selectedLessonId = lesson.id;
        setLastVisited("lesson", lesson.id);
        render();
        scrollElementIntoView(document.querySelector("#curriculum"));
      }
    })),
    ...questSystems.map((quest) => ({
      id: quest.id,
      type: "Quest",
      title: quest.title,
      body: `${quest.summary} ${quest.overview} ${quest.category}`,
      meta: [getQuestMeta(quest).level, getQuestMeta(quest).priority, quest.category],
      tags: getQuestMeta(quest).tags,
      action: () => {
        state.activeView = "quests";
        state.selectedQuestId = quest.id;
        setLastVisited("quest", quest.id);
        renderQuestList();
        renderQuestDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#quest-ops"));
      }
    })),
    ...materialFamilies.map((material) => ({
      id: material.id,
      type: "Material",
      title: material.title,
      body: `${material.summary} ${material.overview} ${material.badge}`,
      meta: [getMaterialMeta(material).level, getMaterialMeta(material).goal],
      tags: getMaterialMeta(material).tags,
      action: () => {
        state.activeView = "materials";
        state.selectedMaterialId = material.id;
        setLastVisited("material", material.id);
        renderMaterialsList();
        renderMaterialsDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#materials-intel"));
      }
    })),
    ...materialPriorityGuide.map((material) => ({
      id: `usage-${material.name}`,
      type: "Material use",
      title: material.name,
      body: `${material.usedFor} ${material.keepRule} ${material.sellRule} ${material.recycleRule}`,
      meta: ["Workshop", "Decision guide"],
      tags: ["stash", "crafting", "recycle"],
      action: () => {
        state.activeView = "materials";
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector(".material-usage-panel"));
      }
    })),
    ...loadoutBlueprints.map((role) => ({
      id: `weapon-role-${role.title}`,
      type: "Weapon guide",
      title: role.title,
      body: `${role.summary} ${role.bestFor} ${role.guidance}`,
      meta: [getLoadoutMeta(role).level, getLoadoutMeta(role).mode],
      tags: getLoadoutMeta(role).tags,
      action: () => {
        state.activeView = "gear";
        setLastVisited("loadout", createLoadoutId(role.title));
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#gear-field-guide"));
      }
    })),
    ...quickUseItems.map((item) => ({
      id: `quick-use-${item.title}`,
      type: "Quick-use",
      title: item.title,
      body: `${item.summary} ${item.bringWhen} ${item.tip}`,
      meta: [getQuickUseMeta(item).priority, getQuickUseMeta(item).mode],
      tags: getQuickUseMeta(item).tags,
      action: () => {
        state.activeView = "gear";
        setLastVisited("quickuse", createLoadoutId(item.title));
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#gear-field-guide"));
      }
    })),
    ...machines.map((machine) => ({
      id: machine.name,
      type: "Machine",
      title: machine.name,
      body: `${machine.copy} ${machine.response} ${machine.threat}`,
      meta: [getMachineMeta(machine).level, machine.threat],
      tags: getMachineMeta(machine).tags,
      action: () => {
        state.activeView = "machines";
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#machine-intel"));
      }
    }))
  ];
}

function updateProgressSummary() {
  reviewedCountElement.textContent = String(state.reviewedLessons.length);
  const continueItem = getContinueItem();
  continueLabelElement.textContent = continueItem?.title ?? "New Raider";
  if (overallProgressElement) {
    overallProgressElement.textContent = `${getOverallProgressPercent()}%`;
  }
  if (savedCountElement) {
    savedCountElement.textContent = String(state.savedItems.length);
  }
}

function getSelectedRelease() {
  return releases.find((release) => release.id === state.selectedReleaseId) ?? releases[0];
}

function renderUpdateSpotlight() {
  const release = releases[0];
  updateSpotlightElement.innerHTML = `
    <section class="spotlight-panel">
      <div class="spotlight-heading">
        <div>
          <p class="eyebrow">Latest official watch</p>
          <h3 class="spotlight-title">${renderCategoryIcon("Updates")}${release.title}</h3>
        </div>
        <span class="spotlight-date">${release.date}</span>
      </div>
      <p class="update-copy">${release.overview}</p>
      <div class="card-tags">
        <span class="content-tag">Official source</span>
        <span class="content-tag">Recently updated</span>
        <span class="content-tag">Verified ${OFFICIAL_POSTS_VERIFIED}</span>
      </div>
      <ul class="spotlight-list">
        ${release.confirmed.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="spotlight-actions">
        <a class="hero-button hero-button-primary" href="#update-center" data-focus-view="updates">Review Live Patch Impact</a>
      </div>
    </section>
    <div class="source-note">
      <strong>Design direction:</strong>
      <p class="release-note">This app now treats updates as a first-class content type so future Embark drops can be added through release records, affected-system tags, and spotlight panels instead of one-off page rewrites.</p>
      <p class="release-note">Verification note: release context in this section is grounded in official ARC Raiders posts first, then connected back to the guide where player-facing advice needs to change.</p>
    </div>
  `;
}

function renderStartHereFlow() {
  const steps = START_HERE_STEPS.map((step, index) => ({
    ...step,
    index: index + 1,
    state: step.status()
  }));
  const completedCount = steps.filter((step) => step.state === "complete").length;
  const nextStep = steps.find((step) => step.state !== "complete") ?? steps[steps.length - 1];
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  startHereSummaryElement.innerHTML = `
    <span class="hero-mini-pill">${completedCount}/${steps.length} steps done</span>
    <span class="hero-mini-pill">${progressPercent}% ready</span>
    <strong>${nextStep.state === "complete" ? "Onboarding complete" : `Next: ${nextStep.title}`}</strong>
  `;

  startHereStepsElement.innerHTML = steps.map((step) => `
    <article class="start-step start-step-${step.state}">
      <div class="start-step-top">
        <span class="start-step-index">0${step.index}</span>
        <span class="content-tag">${step.state === "complete" ? "Complete" : step.id === nextStep.id ? "Start here" : "Upcoming"}</span>
      </div>
      <h3 class="start-step-title">${step.title}</h3>
      <p class="start-step-copy">${step.copy}</p>
      <button class="hero-button hero-button-secondary start-step-action" type="button" data-start-step="${step.id}">
        ${step.state === "complete" ? "Review step" : step.cta}
      </button>
    </article>
  `).join("");

  startHereCtaElement.textContent = completedCount ? `Continue: ${nextStep.title}` : "Start New Raider Path";
  startHereCtaElement.dataset.startStep = nextStep.id;

  for (const button of startHereStepsElement.querySelectorAll("[data-start-step]")) {
    button.addEventListener("click", () => {
      const step = START_HERE_STEPS.find((entry) => entry.id === button.dataset.startStep);
      step?.action();
      saveState();
    });
  }
}

function renderEmbarkFeed() {
  const importantItem = embarkFeed.find((item) => item.kind === "major") ?? embarkFeed[0];
  embarkFeedElement.innerHTML = `
    <article class="embark-feed-card embark-feed-highlight">
      <span class="embark-feed-date">Important change</span>
      <h3 class="embark-feed-title">${renderCategoryIcon("Updates")}${importantItem.title}</h3>
      <p class="embark-feed-copy">${importantItem.summary}</p>
      <div class="card-tags">
        <span class="content-tag">Major update</span>
        <span class="content-tag">Verified ${OFFICIAL_POSTS_VERIFIED}</span>
      </div>
      <div class="embark-feed-meta">
        <span class="embark-feed-source">${importantItem.source}</span>
        <a class="hero-button hero-button-primary embark-feed-link" href="${importantItem.url}" target="_blank" rel="noreferrer">Read Important Change</a>
      </div>
    </article>
    <div class="feed-timeline">
      ${embarkFeed.map((item) => `
        <article class="embark-feed-card embark-feed-card-${item.kind ?? "minor"}">
          <div class="feed-item-top">
            <span class="embark-feed-date">${item.date}</span>
            <span class="feed-impact-badge feed-impact-badge-${item.kind ?? "minor"}">${item.kind === "major" ? "Major" : "Minor"}</span>
          </div>
          <h3 class="embark-feed-title">${renderCategoryIcon("Updates")}${item.title}</h3>
          <p class="embark-feed-copy">${item.summary}</p>
          <div class="card-tags">
            <span class="content-tag">Official post</span>
            <span class="content-tag">${item.changeLabel ?? "Active archive"}</span>
            <span class="content-tag">Verified ${OFFICIAL_POSTS_VERIFIED}</span>
          </div>
          <div class="embark-feed-meta">
            <span class="embark-feed-source">${item.source}</span>
            <a class="hero-button hero-button-secondary embark-feed-link" href="${item.url}" target="_blank" rel="noreferrer">Open Update</a>
          </div>
        </article>
      `).join("")}
    </div>
    <article class="source-note">
      <strong>How this works:</strong>
      <p class="release-note">This module is a curated official-news watch, not a noisy live embed. It is designed to be refreshed from Embark's official news page on a regular cadence while the app keeps the deeper guide content organized for players.</p>
      <a class="hero-button hero-button-secondary embark-feed-link" href="https://arcraiders.com/en/news" target="_blank" rel="noreferrer">Browse Official News Archive</a>
    </article>
  `;
}

function renderLiveSignals() {
  const signals = getLiveSignalEntries();
  const recentlyUpdated = [...signals]
    .sort((a, b) => b.updated.localeCompare(a.updated) || b.trendScore - a.trendScore)
    .slice(0, 4);
  const trending = [...signals]
    .sort((a, b) => b.trendScore - a.trendScore || b.updated.localeCompare(a.updated))
    .slice(0, 4);
  const sinceLastVisit = getSinceLastVisitEntries();

  renderSignalCards(recentlyUpdatedListElement, recentlyUpdated, "New guide updates will show here once fresh content lands.", "updated");
  renderSignalCards(trendingContentListElement, trending, "Trending guidance will appear here when there is enough content to rank.", "trending");

  if (!sinceLastVisitPanelElement) {
    return;
  }

  if (!hasUserProgressData()) {
    sinceLastVisitPanelElement.innerHTML = `
      <article class="signal-side-card signal-side-empty">
        <span class="hero-card-label">Since your last visit</span>
        <strong>This gets smarter after you actually use the guide.</strong>
        <p>Review, complete, or save a few things and this panel starts surfacing what changed since you were last here.</p>
      </article>
    `;
    return;
  }

  if (!sinceLastVisit.length) {
    sinceLastVisitPanelElement.innerHTML = `
      <article class="signal-side-card">
        <span class="hero-card-label">Since your last visit</span>
        <strong>No newer tracked updates yet.</strong>
        <p>Your progress is saved, your path is intact, and nothing newer than ${previousSeenUpdated ?? APP_UPDATED} has landed in the live-signal pool.</p>
        <div class="card-tags">
          <span class="content-tag">Up to date</span>
          <span class="content-tag">Progress preserved</span>
        </div>
      </article>
    `;
    return;
  }

  sinceLastVisitPanelElement.innerHTML = `
    <article class="signal-side-card">
      <span class="hero-card-label">Since your last visit</span>
      <strong>${sinceLastVisit.length} fresh signal${sinceLastVisit.length === 1 ? "" : "s"} worth checking</strong>
      <p>These changes landed after your previous recorded visit and are the fastest way to avoid stale guidance.</p>
      <div class="signal-side-list">
        ${sinceLastVisit.map((item) => `
          <button class="signal-side-item" type="button" data-signal-key="${item.key}">
            <span class="signal-side-kicker">${item.updated}</span>
            <strong>${item.title}</strong>
            <p>${item.benefit}</p>
          </button>
        `).join("")}
      </div>
    </article>
  `;

  for (const button of sinceLastVisitPanelElement.querySelectorAll("[data-signal-key]")) {
    button.addEventListener("click", () => {
      const match = sinceLastVisit.find((item) => item.key === button.dataset.signalKey);
      if (!match) {
        return;
      }
      match.action?.();
      saveState();
    });
  }
}

function renderHeroDashboard() {
  const currentRelease = releases[0];
  const continueItem = getContinueItem();
  const reviewedCount = state.reviewedLessons.length;
  const playstyle = getPlaystyle();
  const nextFocus = playstyle.goals[0] ?? (reviewedCount >= 3 ? "gear" : "learn");
  const nextFocusView = focusViews.find((view) => view.id === nextFocus);
  const lessonProgress = getLessonProgress();

  heroUpdateCardElement.innerHTML = `
    <span class="hero-card-label">Latest official update</span>
    <strong>${currentRelease.title}</strong>
    <p>${currentRelease.summary}</p>
    <div class="hero-stat-row">
      <span class="hero-mini-pill">${currentRelease.status}</span>
      <span class="hero-mini-pill">${currentRelease.date}</span>
    </div>
  `;

  heroPersonalCardElement.innerHTML = `
    <span class="hero-card-label">Continue from here</span>
    <strong>${continueItem?.title ?? "New Raider"}</strong>
    <p>${reviewedCount} lesson${reviewedCount === 1 ? "" : "s"} reviewed so far, ${lessonProgress} fully completed, and your current path is tuned for <strong>${playstyle.label}</strong>.</p>
    <div class="hero-stat-row">
      <span class="hero-mini-pill">${playstyle.label}</span>
      <span class="hero-mini-pill">${nextFocusView?.label ?? "Next move"}</span>
      <span class="hero-mini-pill">${getOverallProgressPercent()}% done</span>
    </div>
  `;

  const taskItems = [
    {
      title: continueItem ? `Continue ${continueItem.title}` : "Start with the first lesson",
      copy: continueItem?.subtitle ?? "New Raiders should begin with the fundamentals before chasing clever nonsense and dying for free.",
      badges: ["Essential", "Continue"]
    },
    {
      title: `Lean into ${playstyle.label}`,
      copy: playstyle.summary,
      badges: ["Recommended", ...playstyle.badges]
    },
    {
      title: "Clear one weak spot",
      copy: "Use saved items and section progress together so you can close one skill gap at a time instead of wandering through the whole guide like a lost goblin.",
      badges: ["Skill builder", state.savedItems.length ? "Saved items ready" : "Save guides first"]
    }
  ];

  heroTaskListElement.innerHTML = taskItems.map((item) => `
    <article class="hero-task">
      <strong>${item.title}</strong>
      <p>${item.copy}</p>
      <div class="card-tags">${item.badges.map((badge) => `<span class="content-tag">${badge}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderPersonalHub() {
  if (!personalHubElement || !personalOverviewElement || !personalNextElement || !sectionProgressElement || !savedPanelElement) {
    return;
  }

  if (!hasUserProgressData()) {
    personalHubElement.hidden = true;
    personalOverviewElement.innerHTML = "";
    personalNextElement.innerHTML = "";
    sectionProgressElement.innerHTML = "";
    savedPanelElement.innerHTML = "";
    return;
  }

  personalHubElement.hidden = false;
  const playstyle = getPlaystyle();
  const continueItem = getContinueItem();
  const sections = getProgressSections();
  const registry = buildDiscoveryRegistry();
  const nextSection = sections
    .filter((section) => section.total > 0)
    .sort((a, b) => (a.completed / a.total) - (b.completed / b.total))[0];
  const savedItems = state.savedItems
    .map((key) => registry[key])
    .filter(Boolean)
    .slice(0, 6);

  personalOverviewElement.innerHTML = `
    <div class="personal-card-head">
      <div>
        <p class="eyebrow">Raider profile</p>
        <h3 class="personal-title">${playstyle.label}</h3>
      </div>
      <span class="hero-mini-pill">${getOverallProgressPercent()}% complete</span>
    </div>
    <p class="personal-copy">${playstyle.summary}</p>
    <div class="card-tags">${renderTagMarkup(playstyle.badges)}</div>
    <div class="playstyle-picker" role="group" aria-label="Choose your ARC Raiders playstyle">
      ${PLAYSTYLE_OPTIONS.map((option) => `
        <button class="playstyle-chip ${option.id === playstyle.id ? "active" : ""}" type="button" data-playstyle="${option.id}">
          ${option.label}
        </button>
      `).join("")}
    </div>
    <div class="personal-actions">
      <button class="hero-button hero-button-primary" type="button" data-open-continue>${continueItem ? "Continue where you left off" : "Start the guide"}</button>
    </div>
  `;

  personalNextElement.innerHTML = `
    <div class="personal-card-head">
      <div>
        <p class="eyebrow">Recommended next step</p>
        <h3 class="personal-title">${continueItem?.title ?? "Keep moving"}</h3>
      </div>
      <span class="hero-mini-pill">${continueItem?.type ?? "guide"}</span>
    </div>
    <p class="personal-copy">${continueItem?.subtitle ?? "The fastest way forward is still the next unfinished lesson or guide."}</p>
    <div class="card-tags">
      ${renderTagMarkup([
        playstyle.label,
        nextSection ? `Next focus: ${nextSection.label}` : "Next focus: Lessons",
        state.savedItems.length ? "Saved items ready" : "Save a few guides"
      ])}
    </div>
    <article class="empty-state-card">
      <strong>Why this is next</strong>
      <p>${nextSection ? `${nextSection.label} is your weakest current section at ${Math.round((nextSection.completed / nextSection.total) * 100)}% complete, so this is the cleanest gain.` : "You are still early enough that the best play is continuing the core learning path."}</p>
    </article>
    <div class="personal-actions">
      <button class="hero-button hero-button-primary" type="button" data-open-next-step>Open recommended step</button>
    </div>
  `;

  sectionProgressElement.innerHTML = `
    <div class="personal-card-head">
      <div>
        <p class="eyebrow">Progress map</p>
        <h3 class="personal-title">Section progress</h3>
      </div>
      <span class="hero-mini-pill">${state.reviewedLessons.length} reviewed</span>
    </div>
    <div class="section-progress-grid">
      ${sections.map((section) => {
        const percentage = section.total ? Math.round((section.completed / section.total) * 100) : 0;
        return `
          <article class="progress-card">
            <div class="progress-card-top">
              <strong>${section.label}</strong>
              <span>${section.completed}/${section.total}</span>
            </div>
            <div class="progress-bar" aria-hidden="true"><span style="width:${percentage}%"></span></div>
            <p>${percentage}% complete</p>
          </article>
        `;
      }).join("")}
    </div>
  `;

  savedPanelElement.innerHTML = `
    <div class="personal-card-head">
      <div>
        <p class="eyebrow">Saved for later</p>
        <h3 class="personal-title">Bookmarks</h3>
      </div>
      <span class="hero-mini-pill">${state.savedItems.length} saved</span>
    </div>
    ${savedItems.length ? `
      <div class="saved-list">
        ${savedItems.map((item) => `
          <article class="saved-item">
            <div>
              <span class="saved-type">${item.type}</span>
              <strong>${item.title}</strong>
              <p>${item.subtitle}</p>
              <div class="card-tags">${(item.meta ?? []).map((meta) => `<span class="content-tag">${meta}</span>`).join("")}</div>
            </div>
            <div class="saved-actions">
              <button class="hero-button hero-button-secondary saved-action" type="button" data-open-saved="${createItemKey(item.type, item.id)}">Open</button>
              <button class="hero-button hero-button-secondary saved-action" type="button" data-unsave="${createItemKey(item.type, item.id)}">Unsave</button>
            </div>
          </article>
        `).join("")}
      </div>
    ` : `
      <article class="empty-state-card">
        <strong>No saved items yet</strong>
        <p>Save lessons, quest guides, materials, loadouts, or update notes so your future self doesn’t have to go treasure hunting through the whole site again.</p>
      </article>
    `}
  `;

  for (const button of personalOverviewElement.querySelectorAll("[data-playstyle]")) {
    button.addEventListener("click", () => {
      state.playstylePreference = button.dataset.playstyle;
      renderCounts();
      updateProgressSummary();
      renderHeroDashboard();
      renderPersonalHub();
      saveState();
    });
  }

  const continueButton = personalOverviewElement.querySelector("[data-open-continue]");
  continueButton?.addEventListener("click", () => {
    const item = getContinueItem();
    if (!item) {
      return;
    }
    item.action();
    saveState();
  });

  const nextButton = personalNextElement.querySelector("[data-open-next-step]");
  nextButton?.addEventListener("click", () => {
    const item = getContinueItem();
    if (!item) {
      return;
    }
    item.action();
    saveState();
  });

  for (const button of savedPanelElement.querySelectorAll("[data-open-saved]")) {
    button.addEventListener("click", () => {
      const item = registry[button.dataset.openSaved];
      item?.action();
      saveState();
    });
  }

  for (const button of savedPanelElement.querySelectorAll("[data-unsave]")) {
    button.addEventListener("click", () => {
      const [type, ...rest] = button.dataset.unsave.split(":");
      toggleSavedItem(type, rest.join(":"));
      renderCounts();
      updateProgressSummary();
      renderHeroDashboard();
      renderPersonalHub();
      saveState();
    });
  }
}

function renderMediaIntel() {
  mediaIntelGridElement.innerHTML = VISUAL_INTEL_ITEMS.map((item) => `
    <article class="media-card">
      <div class="media-card-top">
        <div>
          <p class="detail-kicker">${item.label}</p>
          <h3 class="media-card-title">${item.title}</h3>
        </div>
        <span class="card-badge">${item.badge}</span>
      </div>
      <div class="media-preview media-preview-${item.type}">
        <span>${item.type === "video" ? "Video slot" : item.type === "image" ? "Annotated visual slot" : "Expandable reference"}</span>
      </div>
      <p class="detail-copy">${item.copy}</p>
      <div class="card-tags">${renderTagMarkup(item.tags)}</div>
      <details class="widget-panel">
        <summary>Open reference notes</summary>
        <div class="widget-panel-body">
          <ul class="detail-list">${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        </div>
      </details>
    </article>
  `).join("");
}

function renderMaterialHelper() {
  const decision = getMaterialHelperDecision();
  materialHelperElement.innerHTML = `
    <div class="tool-grid">
      <section class="widget-card">
        <p class="detail-kicker">Pressure</p>
        <div class="discovery-filters">${renderSelectableChips(MATERIAL_HELPER_OPTIONS.pressure, state.materialHelper.pressure, "material-pressure")}</div>
        <p class="detail-kicker">Material tier</p>
        <div class="discovery-filters">${renderSelectableChips(MATERIAL_HELPER_OPTIONS.rarity, state.materialHelper.rarity, "material-rarity")}</div>
        <p class="detail-kicker">What you need</p>
        <div class="discovery-filters">${renderSelectableChips(MATERIAL_HELPER_OPTIONS.objective, state.materialHelper.objective, "material-objective")}</div>
      </section>
      <section class="widget-card widget-card-accent">
        <p class="detail-kicker">Decision</p>
        <h3 class="media-card-title">${decision.action}</h3>
        <div class="card-tags"><span class="content-tag">${decision.tone}</span></div>
        <p class="detail-copy">${decision.reason}</p>
        <div class="callout callout-tip">
          <strong>Next step</strong>
          <p class="detail-copy">${decision.nextStep}</p>
        </div>
        <details class="widget-panel" open>
          <summary>Why this helper exists</summary>
          <div class="widget-panel-body">
            <div class="compare-grid">
              <article class="compare-card">
                <strong>Bad habit</strong>
                <p>Keeping everything because it might matter someday.</p>
              </article>
              <article class="compare-card">
                <strong>Better habit</strong>
                <p>Judge materials by current pressure, near-term projects, and what your stash can actually support.</p>
              </article>
            </div>
          </div>
        </details>
      </section>
    </div>
  `;

  for (const button of materialHelperElement.querySelectorAll("[data-tool-key]")) {
    button.addEventListener("click", () => {
      const { toolKey, toolValue } = button.dataset;
      if (toolKey === "material-pressure") state.materialHelper.pressure = toolValue;
      if (toolKey === "material-rarity") state.materialHelper.rarity = toolValue;
      if (toolKey === "material-objective") state.materialHelper.objective = toolValue;
      renderMaterialHelper();
      saveState();
    });
  }
}

function renderLoadoutBuilder() {
  const recommendation = getLoadoutBuilderRecommendation();
  loadoutBuilderElement.innerHTML = `
    <div class="tool-grid">
      <section class="widget-card">
        <p class="detail-kicker">Raid intent</p>
        <div class="discovery-filters">${renderSelectableChips(LOADOUT_BUILDER_OPTIONS.goal, state.loadoutBuilder.goal, "loadout-goal")}</div>
        <p class="detail-kicker">Risk appetite</p>
        <div class="discovery-filters">${renderSelectableChips(LOADOUT_BUILDER_OPTIONS.risk, state.loadoutBuilder.risk, "loadout-risk")}</div>
        <p class="detail-kicker">Team mode</p>
        <div class="discovery-filters">${renderSelectableChips(LOADOUT_BUILDER_OPTIONS.team, state.loadoutBuilder.team, "loadout-team")}</div>
      </section>
      <section class="widget-card widget-card-accent">
        <p class="detail-kicker">Recommended build</p>
        <h3 class="media-card-title">${recommendation.role.title}</h3>
        <p class="detail-copy">${recommendation.role.summary}</p>
        <div class="mini-flow">
          <article class="mini-flow-step">
            <span class="mini-flow-index">01</span>
            <div>
              <strong>Bring this for</strong>
              <p>${recommendation.role.bestFor}</p>
            </div>
          </article>
          <article class="mini-flow-step">
            <span class="mini-flow-index">02</span>
            <div>
              <strong>What to do</strong>
              <p>${recommendation.role.guidance}</p>
            </div>
          </article>
          <article class="mini-flow-step">
            <span class="mini-flow-index">03</span>
            <div>
              <strong>Quick-use support</strong>
              <p>${recommendation.quickUse.map((item) => item.title).join(" and ") || "Healing and reset tools"}</p>
            </div>
          </article>
        </div>
        <div class="callout callout-warning">
          <strong>Common mistake</strong>
          <p class="detail-copy">${recommendation.caution}</p>
        </div>
        <details class="widget-panel">
          <summary>Compare safe versus greedy setup</summary>
          <div class="widget-panel-body">
            <div class="compare-grid">
              <article class="compare-card">
                <strong>Safe</strong>
                <p>One reliable gun, sustain you can afford, utility that creates exits.</p>
              </article>
              <article class="compare-card">
                <strong>Greedy</strong>
                <p>Overbuilt damage, weak sustain, zero exit planning, then confusion when the run explodes.</p>
              </article>
            </div>
          </div>
        </details>
      </section>
    </div>
  `;

  for (const button of loadoutBuilderElement.querySelectorAll("[data-tool-key]")) {
    button.addEventListener("click", () => {
      const { toolKey, toolValue } = button.dataset;
      if (toolKey === "loadout-goal") state.loadoutBuilder.goal = toolValue;
      if (toolKey === "loadout-risk") state.loadoutBuilder.risk = toolValue;
      if (toolKey === "loadout-team") state.loadoutBuilder.team = toolValue;
      renderLoadoutBuilder();
      saveState();
    });
  }
}

function renderReleaseList() {
  releaseListElement.innerHTML = releases.map((release) => `
    <button class="release-card ${release.id === state.selectedReleaseId ? "active" : ""} ${isCompletedItem("release", release.id) ? "is-complete" : ""} ${isSavedItem("release", release.id) ? "is-saved" : ""}" type="button" data-release-id="${release.id}">
      <div class="release-title-row">
        <h3 class="release-title">${release.title}</h3>
        <span class="release-badge">${release.status}</span>
      </div>
      <p class="release-summary">${release.date}</p>
      <p class="release-summary">${release.confirmed.slice(0, 2).join(" • ")}</p>
      <div class="card-tags">${[isCompletedItem("release", release.id) ? "Reviewed" : null, isSavedItem("release", release.id) ? "Saved" : null].filter(Boolean).map((tag) => `<span class="content-tag">${tag}</span>`).join("")}</div>
    </button>
  `).join("");

  for (const button of releaseListElement.querySelectorAll("[data-release-id]")) {
    button.addEventListener("click", () => {
      state.selectedReleaseId = button.dataset.releaseId;
      setLastVisited("release", button.dataset.releaseId);
      renderReleaseList();
      renderReleaseDetail();
      renderHeroDashboard();
      renderPersonalHub();
      saveState();
      if (isMobileLayout()) {
        scrollElementIntoView(document.querySelector(".release-detail-panel"));
      }
    });
  }
}

function renderReleaseDetail() {
  const release = getSelectedRelease();
  markReleaseCompleteButtonElement.textContent = isCompletedItem("release", release.id)
    ? "Reviewed - tap to undo"
    : "Mark update reviewed";
  saveReleaseButtonElement.textContent = isSavedItem("release", release.id)
    ? "Saved - tap to remove"
    : "Save update";
  releaseDetailElement.innerHTML = `
    <section class="detail-block">
      <p class="detail-kicker">${release.status}</p>
      <h3 class="detail-title">${release.title}</h3>
      <p class="detail-copy">${release.summary}</p>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">Why it matters</p>
      <p class="detail-copy">${release.overview}</p>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">What players should do now</p>
      <ul class="detail-list">${release.prep.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">What changed in the guide</p>
      <ul class="detail-list">${release.appIdeas.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <div class="detail-chip-row">
        <article class="meta-pill"><span class="chip-label">Status</span><strong class="chip-value">${release.status}</strong></article>
        <article class="meta-pill"><span class="chip-label">Date</span><strong class="chip-value">${release.date}</strong></article>
        <article class="meta-pill"><span class="chip-label">State</span><strong class="chip-value">${isCompletedItem("release", release.id) ? "Reviewed" : "Pending"}</strong></article>
      </div>
    </section>
    <section class="detail-block">
      <div class="callout">
        <strong>Confirmed in this release:</strong>
        <p class="detail-copy">${release.confirmed.join(" | ")}</p>
      </div>
    </section>
    <section class="detail-block">
      <div class="source-note">
        <strong>Confidence note:</strong>
        <p class="detail-copy">This release panel is driven from official ARC Raiders posts and patch notes. If a system here looks wrong after a new patch lands, use the report flow so the guide can be corrected instead of rotting politely in public.</p>
      </div>
    </section>
  `;
}

function toggleReviewedLesson() {
  const lesson = getSelectedLesson();
  if (!lesson) {
    return;
  }

  const isReviewed = state.reviewedLessons.includes(lesson.id);
  state.reviewedLessons = isReviewed
    ? state.reviewedLessons.filter((id) => id !== lesson.id)
    : [...state.reviewedLessons, lesson.id];

  renderLessons();
  renderLessonDetail();
  renderCounts();
  updateProgressSummary();
  renderHeroDashboard();
  renderPersonalHub();
  saveState();
}

function toggleLessonComplete() {
  const lesson = getSelectedLesson();
  if (!lesson) {
    return;
  }

  toggleCompletedItem("lesson", lesson.id);
  setLastVisited("lesson", lesson.id);
  renderLessons();
  renderLessonDetail();
  renderCounts();
  updateProgressSummary();
  renderHeroDashboard();
  renderPersonalHub();
  saveState();
}

function toggleQuestComplete() {
  const quest = getSelectedQuest();
  if (!quest) {
    return;
  }

  toggleCompletedItem("quest", quest.id);
  setLastVisited("quest", quest.id);
  renderQuestList();
  renderQuestDetail();
  renderCounts();
  updateProgressSummary();
  renderHeroDashboard();
  renderPersonalHub();
  saveState();
}

function toggleMaterialComplete() {
  const material = getSelectedMaterial();
  if (!material) {
    return;
  }

  toggleCompletedItem("material", material.id);
  setLastVisited("material", material.id);
  renderMaterialsList();
  renderMaterialsDetail();
  renderCounts();
  updateProgressSummary();
  renderHeroDashboard();
  renderPersonalHub();
  saveState();
}

function toggleReleaseComplete() {
  const release = getSelectedRelease();
  if (!release) {
    return;
  }

  toggleCompletedItem("release", release.id);
  setLastVisited("release", release.id);
  renderReleaseList();
  renderReleaseDetail();
  renderCounts();
  updateProgressSummary();
  renderHeroDashboard();
  renderPersonalHub();
  saveState();
}

function toggleCurrentSave(type, id, refresh) {
  toggleSavedItem(type, id);
  renderCounts();
  updateProgressSummary();
  refresh();
  renderHeroDashboard();
  renderPersonalHub();
  saveState();
}

function renderSearchResults(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    searchResultsPanelElement.hidden = true;
    searchResultsElement.innerHTML = "";
    return;
  }

  const matches = buildSearchIndex()
    .filter((entry) => `${entry.title} ${entry.body}`.toLowerCase().includes(normalizedQuery))
    .slice(0, 8);

  searchResultsPanelElement.hidden = false;

  if (matches.length === 0) {
    searchResultsElement.innerHTML = `
      <article class="search-result search-result-empty">
        <h3 class="search-result-title">No matches</h3>
        <p class="search-result-copy">Try a broader term like quest, material, machine, extraction, or trader. You can also jump into one of these common searches.</p>
        <div class="source-note">
          <strong>Need coverage that is not here yet?</strong>
          <p class="search-result-copy">Some topics are still awaiting verification or have not been built out yet. If you want a missing subject covered, use the topic request flow instead of quietly suffering through it.</p>
        </div>
        <div class="search-empty-actions">
          ${SEARCH_SUGGESTIONS.slice(0, 4).map((item) => `<button class="filter-chip" type="button" data-search-suggestion="${item.query}">${item.label}</button>`).join("")}
          <button class="hero-button hero-button-secondary" type="button" data-empty-feedback="topic">Request a topic</button>
        </div>
      </article>
    `;
    for (const button of searchResultsElement.querySelectorAll("[data-search-suggestion]")) {
      button.addEventListener("click", () => {
        globalSearchElement.value = button.dataset.searchSuggestion;
        renderSearchResults(button.dataset.searchSuggestion);
      });
    }
    const feedbackButton = searchResultsElement.querySelector("[data-empty-feedback]");
    feedbackButton?.addEventListener("click", () => openFeedback(feedbackButton.dataset.emptyFeedback));
    return;
  }

  searchResultsElement.innerHTML = matches.map((entry) => `
    <article class="search-result">
      <div class="search-result-top">
        <h3 class="search-result-title">${entry.title}</h3>
        <span class="search-result-type">${entry.type}</span>
      </div>
      ${(entry.meta ?? []).length ? `<div class="search-result-meta">${(entry.meta ?? []).map((item) => `<span class="card-badge">${item}</span>`).join("")}</div>` : ""}
      <p class="search-result-copy">${entry.body}</p>
      ${(entry.tags ?? []).length ? `<div class="search-result-tags">${renderTagMarkup(entry.tags ?? [])}</div>` : ""}
      <button class="hero-button hero-button-secondary search-result-action" type="button" data-search-target="${entry.id}">Open</button>
    </article>
  `).join("");

  for (const button of searchResultsElement.querySelectorAll("[data-search-target]")) {
    button.addEventListener("click", () => {
      const match = matches.find((entry) => entry.id === button.dataset.searchTarget);
      if (!match) {
        return;
      }

      match.action();
      saveState();
    });
  }
}

function renderSearchSuggestions() {
  if (!searchSuggestionsElement) {
    return;
  }

  searchSuggestionsElement.innerHTML = SEARCH_SUGGESTIONS.map((item) => `
    <button class="search-suggestion" type="button" data-search-suggestion="${item.query}">${item.label}</button>
  `).join("");

  for (const button of searchSuggestionsElement.querySelectorAll("[data-search-suggestion]")) {
    button.addEventListener("click", () => {
      globalSearchElement.value = button.dataset.searchSuggestion;
      renderSearchResults(button.dataset.searchSuggestion);
    });
  }
}

function renderMaterialsOverview() {
  materialsOverviewElement.innerHTML = `
    <article class="meta-pill">
      <span class="meta-label">What this section covers</span>
      <strong class="meta-value">${materialFamilies.length} material families</strong>
    </article>
    <p class="materials-copy">ARC Raiders' public material information is best understood as a routing problem, not a perfect loot-table spreadsheet. Official sources tell us which map types exist, which conditions boost certain loot, and which material families are definitely in circulation. This section translates that into practical material-hunting advice.</p>
    ${renderCallout("trust", "Last verified", `Official April posts confirm the workshop now includes Acquire Resources support for missing ingredients, but they still do not publish a brand-new material family list or a replaced material catalog. Based on current public information, the catalog below still holds after the April 8, 2026 patch cycle and remains verified through ${OFFICIAL_POSTS_VERIFIED}.`)}
    <div class="source-note">
      <strong>Source scope:</strong>
      <p class="material-note">This guide uses official public details about the Workshop, Acquire Resources flow, maps, special conditions, boosted cache drops, the named basic materials used in the tunnel restoration event, and post-Flashpoint workshop changes.</p>
    </div>
  `;
}

function renderMaterialsList() {
  renderFilterBar(materialFiltersElement, "materials");
  const visibleMaterials = materialFamilies.filter(materialMatchesFilter);
  if (!visibleMaterials.some((material) => material.id === state.selectedMaterialId)) {
    state.selectedMaterialId = visibleMaterials[0]?.id ?? materialFamilies[0].id;
  }
  materialsListElement.innerHTML = visibleMaterials.map((material) => {
    const meta = getMaterialMeta(material);
    return `
    <button class="material-card ${material.id === state.selectedMaterialId ? "active" : ""} ${isCompletedItem("material", material.id) ? "is-complete" : ""} ${isSavedItem("material", material.id) ? "is-saved" : ""}" type="button" data-material-id="${material.id}">
      <div class="quest-title-row">
        <h3 class="material-title">${renderCategoryIcon("Material")}${material.title}</h3>
        <span class="quest-badge">${material.badge}</span>
      </div>
      ${renderCardMeta({ ...meta, mode: meta.goal }, [isCompletedItem("material", material.id) ? "Completed" : null, isSavedItem("material", material.id) ? "Saved" : null], getMaterialDecisionItems(material, meta))}
      <p class="material-summary">${material.summary}</p>
      <div class="card-tags">${renderStatusTagMarkup(getStatusTags(meta))}</div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    </button>
  `;
  }).join("");

  for (const button of materialsListElement.querySelectorAll("[data-material-id]")) {
    button.addEventListener("click", () => {
      state.selectedMaterialId = button.dataset.materialId;
      setLastVisited("material", button.dataset.materialId);
      renderMaterialsList();
      renderMaterialsDetail();
      renderHeroDashboard();
      renderPersonalHub();
      saveState();
      if (isMobileLayout()) {
        scrollElementIntoView(materialsDetailPanelElement);
      }
    });
  }
}

function renderMaterialsDetail() {
  const material = getSelectedMaterial();
  const meta = getMaterialMeta(material);
  markMaterialCompleteButtonElement.textContent = isCompletedItem("material", material.id)
    ? "Completed - tap to undo"
    : "Mark material guide complete";
  saveMaterialButtonElement.textContent = isSavedItem("material", material.id)
    ? "Saved - tap to remove"
    : "Save material guide";
  materialsDetailElement.innerHTML = `
    <section class="detail-block">
      <p class="detail-kicker">${material.badge}</p>
      <h3 class="detail-title">${material.title}</h3>
      <p class="detail-copy">${material.overview}</p>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">Where to look</p>
      <ul class="detail-list">${material.whereToLook.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">How to farm it</p>
      <ul class="detail-list">${material.routeTips.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <div class="detail-chip-row">
        <article class="meta-pill"><span class="chip-label">Level</span><strong class="chip-value">${meta.level}</strong></article>
        <article class="meta-pill"><span class="chip-label">Priority</span><strong class="chip-value">${meta.priority}</strong></article>
        <article class="meta-pill"><span class="chip-label">Goal</span><strong class="chip-value">${meta.goal}</strong></article>
        <article class="meta-pill"><span class="chip-label">State</span><strong class="chip-value">${isCompletedItem("material", material.id) ? "Completed" : "Tracked"}</strong></article>
      </div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
    </section>
    <section class="detail-block">
      ${renderCallout("tip", "Field note", material.fieldNote)}
    </section>
  `;

  const relatedItems = [
    {
      id: `usage-${material.id}`,
      type: "Material value",
      title: "Material Value Guide",
      copy: "See whether this should be kept, sold, or recycled before you burn stash value blindly.",
      tags: ["crafting", "stash", "workshop"],
      action: () => {
        state.activeView = "materials";
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector(".material-usage-panel"));
      }
    },
    ...questSystems.filter((quest) => {
      const questMeta = getQuestMeta(quest);
      return meta.tags.includes("workshop") ? questMeta.tags.includes("projects") || questMeta.tags.includes("traders") : questMeta.goal.includes("Progress");
    }).slice(0, 1).map((quest) => ({
      id: quest.id,
      type: "Quest",
      title: quest.title,
      copy: quest.summary,
      tags: getQuestMeta(quest).tags.slice(0, 2),
      action: () => {
        state.activeView = "quests";
        state.selectedQuestId = quest.id;
        renderQuestList();
        renderQuestDetail();
        renderFocusNav();
        syncFlowSections();
        scrollElementIntoView(document.querySelector("#quest-ops"));
      }
    })),
    ...lessons.filter((lesson) => {
      const lessonMeta = getLessonMeta(lesson);
      return lessonMeta.tags.includes("workshop") || lessonMeta.tags.includes("materials") || lessonMeta.goal === "Craft smarter";
    }).slice(0, 2).map((lesson) => ({
      id: lesson.id,
      type: "Lesson",
      title: lesson.title,
      copy: lesson.summary,
      tags: getLessonMeta(lesson).tags.slice(0, 2),
      action: () => {
        state.activeView = "learn";
        state.selectedTrackId = lesson.trackId;
        state.selectedLessonId = lesson.id;
        render();
        scrollElementIntoView(document.querySelector("#curriculum"));
      }
    }))
  ].slice(0, 4);

  renderRelatedCards(materialRelatedElement, relatedItems, "Material connections will appear here as the guide expands.");
}

function renderMaterialsCatalog() {
  materialsCatalogElement.innerHTML = materialCatalog.map((group) => `
    <section class="catalog-group">
      <h3 class="catalog-group-title">${group.title}</h3>
      <div class="catalog-list">
        ${group.items.map((item) => `<article class="catalog-item">${item}</article>`).join("")}
      </div>
    </section>
  `).join("");
}

function renderMaterialUsageGuide() {
  materialUsageGuideElement.innerHTML = `
    <div class="source-note">
      <strong>What this should help you decide:</strong>
      <p class="material-note">This section is no longer just a weak lookup board. It is meant to help a Raider decide what materials are solving real account problems right now: survival uptime, weapon sustain, project progress, or stash-space pressure.</p>
    </div>
    ${materialPriorityGuide.map((material) => `
    <article class="usage-card">
      <h3 class="usage-title">${material.name}</h3>
      <p class="usage-copy">${material.usedFor}</p>
      <div class="usage-meta">
        <section class="usage-rule">
          <span class="chip-label">Keep If</span>
          <strong class="chip-value">${material.keepRule}</strong>
        </section>
        <section class="usage-rule">
          <span class="chip-label">Sell If</span>
          <strong class="chip-value">${material.sellRule}</strong>
        </section>
        <section class="usage-rule">
          <span class="chip-label">Recycle If</span>
          <strong class="chip-value">${material.recycleRule}</strong>
        </section>
      </div>
      <p class="usage-note">${material.note}</p>
    </article>
  `).join("")}
  `;
}

function renderGearOverview() {
  gearOverviewElement.innerHTML = `
    <article class="meta-pill">
      <span class="meta-label">Core principle</span>
      <strong class="meta-value">Build for the actual raid objective</strong>
    </article>
    ${renderCallout("trust", "Method note", "Gear guidance is role-first and ARC Raiders-specific. It is built around raid intent, public patch context, and field use instead of pretending one universal meta loadout solves everything.")}
    <div class="source-note">
      <strong>What this section should do for a new Raider:</strong>
      <p class="release-note">This is now a loadout-planning section, not a generic weapon overview. Use it to answer: what kind of kit should I bring for questing, farming, operations, recovery, or heavy ARC pressure?</p>
    </div>
    <article class="gear-card">
      <h3 class="gear-title">Simple starter rule</h3>
      <p class="gear-copy">Pick one reliable primary, carry healing you can sustain, then choose the rest of the kit based on the goal of the raid. The wrong loadout problem in ARC Raiders is usually not raw power. It is mismatch between gear and raid purpose.</p>
      <div class="gear-meta">
        <section class="gear-rule">
          <span class="chip-label">Best for</span>
          <strong class="chip-value">New Raider progression runs</strong>
        </section>
        <section class="gear-rule">
          <span class="chip-label">Avoid</span>
          <strong class="chip-value">Overbuilding for fights you do not need to take</strong>
        </section>
      </div>
      <details class="widget-panel">
        <summary>Open loadout comparison</summary>
        <div class="widget-panel-body">
          <div class="compare-grid">
            <article class="compare-card">
              <strong>Good beginner loadout</strong>
              <p>Reliable primary, one sustain layer, one reset tool, and a raid purpose.</p>
            </article>
            <article class="compare-card">
              <strong>Bad beginner loadout</strong>
              <p>Expensive gun, weak sustain, no escape tool, and a plan held together by pure optimism.</p>
            </article>
          </div>
        </div>
      </details>
    </article>
  `;
}

function renderWeaponRoles() {
  renderFilterBar(weaponFiltersElement, "weaponRoles");
  weaponRoleListElement.innerHTML = loadoutBlueprints.filter(loadoutMatchesFilter).map((role) => {
    const meta = getLoadoutMeta(role);
    const roleId = createLoadoutId(role.title);
    return `
    <article class="gear-card">
      <div class="gear-card-top">
        <h3 class="gear-title">${renderCategoryIcon("Gear")}${role.title}</h3>
        <button class="hero-button hero-button-secondary card-save-button" type="button" data-save-loadout="${roleId}">${isSavedItem("loadout", roleId) ? "Saved" : "Save"}</button>
      </div>
      ${renderCardMeta(meta, [role.bestFor.includes("Quest") ? "Recommended" : null], getLoadoutDecisionItems(role, meta))}
      <p class="gear-copy">${role.summary}</p>
      <div class="card-tags">${renderStatusTagMarkup(getStatusTags(meta))}</div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
      <div class="gear-meta">
        <section class="gear-rule">
          <span class="chip-label">Best For</span>
          <strong class="chip-value">${role.bestFor}</strong>
        </section>
        <section class="gear-rule">
          <span class="chip-label">What To Do</span>
          <strong class="chip-value">${role.guidance}</strong>
        </section>
        <section class="gear-rule">
          <span class="chip-label">Beginner Tip</span>
          <strong class="chip-value">${role.beginnerTip}</strong>
        </section>
      </div>
    </article>
  `;
  }).join("");

  for (const button of weaponRoleListElement.querySelectorAll("[data-save-loadout]")) {
    button.addEventListener("click", () => {
      const loadoutId = button.dataset.saveLoadout;
      toggleSavedItem("loadout", loadoutId);
      setLastVisited("loadout", loadoutId);
      renderCounts();
      updateProgressSummary();
      renderHeroDashboard();
      renderPersonalHub();
      renderWeaponRoles();
      saveState();
    });
  }
}

function renderQuickUseItems() {
  renderFilterBar(quickUseFiltersElement, "quickUse");
  quickUseListElement.innerHTML = quickUseItems.filter(quickUseMatchesFilter).map((item) => {
    const meta = getQuickUseMeta(item);
    const quickUseId = createLoadoutId(item.title);
    return `
    <article class="quick-use-card">
      <div class="gear-card-top">
        <h3 class="quick-use-title">${renderCategoryIcon("Quick-use")}${item.title}</h3>
        <button class="hero-button hero-button-secondary card-save-button" type="button" data-save-quickuse="${quickUseId}">${isSavedItem("quickuse", quickUseId) ? "Saved" : "Save"}</button>
      </div>
      ${renderCardMeta(meta, [], getQuickUseDecisionItems(item, meta))}
      <p class="quick-use-copy">${item.summary}</p>
      <div class="card-tags">${renderStatusTagMarkup(getStatusTags(meta))}</div>
      <div class="card-tags">${renderTagMarkup(meta.tags)}</div>
      <div class="gear-meta">
        <section class="gear-rule">
          <span class="chip-label">Bring When</span>
          <strong class="chip-value">${item.bringWhen}</strong>
        </section>
        <section class="gear-rule">
          <span class="chip-label">Field Tip</span>
          <strong class="chip-value">${item.tip}</strong>
        </section>
      </div>
    </article>
  `;
  }).join("");

  for (const button of quickUseListElement.querySelectorAll("[data-save-quickuse]")) {
    button.addEventListener("click", () => {
      const quickUseId = button.dataset.saveQuickuse;
      toggleSavedItem("quickuse", quickUseId);
      setLastVisited("quickuse", quickUseId);
      renderCounts();
      updateProgressSummary();
      renderHeroDashboard();
      renderPersonalHub();
      renderQuickUseItems();
      saveState();
    });
  }
}

function syncBackToTopVisibility() {
  backToTopElement.classList.toggle("visible", window.scrollY > 520);
}

function openChangelog() {
  renderChangelog();
  modalBackdropElement.hidden = false;
  changelogModalElement.hidden = false;
  feedbackModalElement.hidden = true;
  document.body.style.overflow = "hidden";
}

function closeChangelog() {
  changelogModalElement.hidden = true;
  if (feedbackModalElement.hidden) {
    modalBackdropElement.hidden = true;
    document.body.style.overflow = "";
  }
}

function renderFeedbackPanel(actionKey) {
  const action = FEEDBACK_ACTIONS[actionKey] ?? FEEDBACK_ACTIONS.improvement;
  const issueTitle = encodeURIComponent(action.issueTitle ?? `${action.title}: `);
  const issueBody = encodeURIComponent((action.prompts ?? []).map((prompt) => `- ${prompt}`).join("\n"));

  if (actionKey === "methodology") {
    feedbackPanelElement.innerHTML = `
      <article class="feedback-card">
        <p class="feedback-copy">${GUIDE_METHODOLOGY.summary}</p>
        <div class="feedback-grid">
          <section class="feedback-block">
            <h3>Official first</h3>
            <ul class="detail-list">${GUIDE_METHODOLOGY.official.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>
          <section class="feedback-block">
            <h3>Community-supported where needed</h3>
            <ul class="detail-list">${GUIDE_METHODOLOGY.community.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>
        </div>
        <div class="source-note">
          <strong>Coverage limits:</strong>
          <ul class="detail-list">${GUIDE_METHODOLOGY.limits.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </article>
    `;
    return;
  }

  if (actionKey === "faq") {
    feedbackPanelElement.innerHTML = `
      <article class="feedback-card">
        <p class="feedback-copy">${FEEDBACK_ACTIONS.faq.summary}</p>
        <div class="feedback-grid">
          <section class="feedback-block">
            <h3>What gets verified fastest?</h3>
            <p class="feedback-copy">Official patch notes, roadmap posts, release announcements, and UX change posts from Embark.</p>
          </section>
          <section class="feedback-block">
            <h3>What may stay community-supported?</h3>
            <p class="feedback-copy">Named quest directories, exhaustive material catalogs, and some field-practice combat notes when official public detail is incomplete.</p>
          </section>
        </div>
        <div class="source-note">
          <strong>Planned but not fully built:</strong>
          <p class="feedback-copy">Deeper FAQ coverage and more source drilldowns are still planned. The guide is being honest about that instead of pretending the cupboard is full.</p>
        </div>
      </article>
    `;
    return;
  }

  feedbackPanelElement.innerHTML = `
    <article class="feedback-card">
      <p class="detail-kicker">Feedback path</p>
      <h3 class="feedback-title">${action.title}</h3>
      <p class="feedback-copy">${action.summary}</p>
      <div class="feedback-grid">
        <section class="feedback-block">
          <h3>What to include</h3>
          <ul class="detail-list">${(action.prompts ?? []).map((prompt) => `<li>${prompt}</li>`).join("")}</ul>
        </section>
        <section class="feedback-block">
          <h3>Send it through</h3>
          <div class="footer-link-stack">
            <a class="hero-button hero-button-primary" href="https://github.com/tjhiggy/Raider/issues/new?title=${issueTitle}&body=${issueBody}" target="_blank" rel="noreferrer">Open GitHub issue</a>
            <a class="hero-button hero-button-secondary" href="https://discord.gg/4JZ9f39h" target="_blank" rel="noreferrer">Ask in Discord</a>
          </div>
          <p class="feedback-copy">GitHub issues are best for trackable fixes. Discord is better when you want a quick gut-check before filing a formal problem.</p>
        </section>
      </div>
    </article>
  `;
}

function openFeedback(actionKey = "improvement") {
  renderFeedbackPanel(actionKey);
  modalBackdropElement.hidden = false;
  feedbackModalElement.hidden = false;
  changelogModalElement.hidden = true;
  document.body.style.overflow = "hidden";
}

function closeFeedback() {
  feedbackModalElement.hidden = true;
  if (changelogModalElement.hidden) {
    modalBackdropElement.hidden = true;
    document.body.style.overflow = "";
  }
}

function closeAllModals() {
  changelogModalElement.hidden = true;
  feedbackModalElement.hidden = true;
  modalBackdropElement.hidden = true;
  document.body.style.overflow = "";
}

async function shareApp() {
  const shareData = {
    title: "ARC Raiders Field Guide",
    text: "Use this ARC Raiders guide to learn the basics, quests, materials, and machine intel.",
    url: window.location.href
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  shareAppButtonElement.textContent = "Link copied";
  window.setTimeout(() => {
    shareAppButtonElement.textContent = "Share";
  }, 1800);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => undefined);
  }
}

function revealEasterEgg() {
  easterEggToastElement.textContent = "Live By The Goop, Die By The Goop";
  easterEggToastElement.classList.add("visible");
  easterEggToastElement.setAttribute("aria-hidden", "false");

  if (easterEggTimeoutId !== null) {
    window.clearTimeout(easterEggTimeoutId);
  }

  easterEggTimeoutId = window.setTimeout(() => {
    easterEggToastElement.classList.remove("visible");
    easterEggToastElement.setAttribute("aria-hidden", "true");
    easterEggTimeoutId = null;
  }, 5000);
}

function render() {
  renderCounts();
  renderSearchSuggestions();
  renderFocusNav();
  syncFlowSections();
  renderUpdateSpotlight();
  renderEmbarkFeed();
  renderLiveSignals();
  renderReleaseList();
  renderReleaseDetail();
  renderStartHereFlow();
  renderBriefing();
  renderMediaIntel();
  renderPainPoints();
  renderTracks();
  renderTrackOverview();
  renderLessons();
  renderLessonDetail();
  updateProgressSummary();
  renderHeroDashboard();
  renderPersonalHub();
  renderQuestOverview();
  renderQuestList();
  renderQuestDirectory();
  renderQuestDetail();
  renderMaterialsOverview();
  renderMaterialsList();
  renderMaterialsDetail();
  renderMaterialsCatalog();
  renderMaterialUsageGuide();
  renderMaterialHelper();
  renderGearOverview();
  renderWeaponRoles();
  renderQuickUseItems();
  renderLoadoutBuilder();
  renderMachines();
  renderPrepList();
}

backToTopElement.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

easterEggTriggerElement.addEventListener("click", revealEasterEgg);
markReviewedButtonElement.addEventListener("click", toggleReviewedLesson);
markLessonCompleteButtonElement.addEventListener("click", toggleLessonComplete);
saveLessonButtonElement.addEventListener("click", () => {
  const lesson = getSelectedLesson();
  if (!lesson) {
    return;
  }
  setLastVisited("lesson", lesson.id);
  toggleCurrentSave("lesson", lesson.id, () => {
    renderLessons();
    renderLessonDetail();
  });
});
markQuestCompleteButtonElement.addEventListener("click", toggleQuestComplete);
saveQuestButtonElement.addEventListener("click", () => {
  const quest = getSelectedQuest();
  if (!quest) {
    return;
  }
  setLastVisited("quest", quest.id);
  toggleCurrentSave("quest", quest.id, () => {
    renderQuestList();
    renderQuestDetail();
  });
});
markMaterialCompleteButtonElement.addEventListener("click", toggleMaterialComplete);
saveMaterialButtonElement.addEventListener("click", () => {
  const material = getSelectedMaterial();
  if (!material) {
    return;
  }
  setLastVisited("material", material.id);
  toggleCurrentSave("material", material.id, () => {
    renderMaterialsList();
    renderMaterialsDetail();
  });
});
markReleaseCompleteButtonElement.addEventListener("click", toggleReleaseComplete);
saveReleaseButtonElement.addEventListener("click", () => {
  const release = getSelectedRelease();
  if (!release) {
    return;
  }
  setLastVisited("release", release.id);
  toggleCurrentSave("release", release.id, () => {
    renderReleaseList();
    renderReleaseDetail();
  });
});
globalSearchElement.addEventListener("input", () => {
  renderSearchResults(globalSearchElement.value);
});
appVersionButtonElement.addEventListener("click", openChangelog);
closeChangelogElement.addEventListener("click", closeChangelog);
closeFeedbackElement.addEventListener("click", closeFeedback);
modalBackdropElement.addEventListener("click", closeAllModals);
openMethodologyElement.addEventListener("click", () => openFeedback("methodology"));
openFaqElement.addEventListener("click", () => openFeedback("faq"));
reportUpdateIssueElement.addEventListener("click", () => openFeedback("outdated"));
for (const trigger of feedbackTriggerElements) {
  trigger.addEventListener("click", () => openFeedback(trigger.dataset.feedbackAction));
}
shareAppButtonElement.addEventListener("click", () => {
  shareApp().catch(() => undefined);
});
startHereCtaElement.addEventListener("click", () => {
  const step = START_HERE_STEPS.find((entry) => entry.id === startHereCtaElement.dataset.startStep) ?? START_HERE_STEPS[0];
  step.action();
  saveState();
});

for (const trigger of focusTriggerElements) {
  trigger.addEventListener("click", (event) => {
    const { focusView } = trigger.dataset;
    if (!focusView) {
      return;
    }

    setActiveView(focusView);

    const href = trigger.getAttribute("href");
    if (!href || !href.startsWith("#")) {
      return;
    }

    const targetElement = document.querySelector(href);
    if (!targetElement) {
      return;
    }

    event.preventDefault();
    window.setTimeout(() => {
      scrollElementIntoView(targetElement);
    }, 30);
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installAppButtonElement.hidden = false;
});

installAppButtonElement.addEventListener("click", async () => {
  if (!deferredInstallPrompt) {
    return;
  }

  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice.catch(() => undefined);
  deferredInstallPrompt = null;
  installAppButtonElement.hidden = true;
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && (!changelogModalElement.hidden || !feedbackModalElement.hidden)) {
    closeAllModals();
  }
});

window.addEventListener("scroll", syncBackToTopVisibility, { passive: true });
window.addEventListener("resize", syncCommandBarState);

toggleCommandBarElement.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 760px)").matches) {
    commandBarElement.classList.toggle("mobile-collapsed");
  }
  syncCommandBarState();
});

loadState();
if (window.matchMedia("(max-width: 760px)").matches) {
  commandBarElement.classList.add("mobile-collapsed");
}
render();
saveState();
syncBackToTopVisibility();
syncCommandBarState();
renderSearchResults("");
registerServiceWorker();
