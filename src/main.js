const VERSION_HISTORY = [
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
const OFFICIAL_POSTS_VERIFIED = "2026-04-10";
const STORAGE_KEY = "arc-raiders-guide-state";

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
    summary: "Embark fixed Trigger 'Nades stacking, weapon and item firing issues, Stella Montis and Buried City map problems, and several Close Scrutiny Assessor and Vaporizer issues.",
    url: "https://arcraiders.com/news/patch-notes-1-23-0"
  },
  {
    title: "Reducing friction in ARC Raiders",
    date: "2026-04-04",
    source: "Official news",
    summary: "Embark added an Acquire Resources button so missing craft materials can be sourced directly from the crafting screen.",
    url: "https://arcraiders.com/news/user-experience-improvements"
  },
  {
    title: "Hotfix 1.22.1",
    date: "2026-04-01",
    source: "Official news",
    summary: "A short official hotfix note confirms a crash fix went live and said an Xbox patch would follow later.",
    url: "https://arcraiders.com/news/hotfix-1-22-1"
  },
  {
    title: "Flashpoint - Patch Notes 1.22.0",
    date: "2026-03-31",
    source: "Official news",
    summary: "The official patch-note entry for Flashpoint is now live on Embark's news hub.",
    url: "https://arcraiders.com/news"
  },
  {
    title: "Flashpoint Update - Find the Truth",
    date: "2026-03-30",
    source: "Official news",
    summary: "Embark's full Flashpoint overview confirms Close Scrutiny, Vaporizer, Canto, Dolabra, Surge Coil, the High Gain Antenna project, and Scrappy changes.",
    url: "https://arcraiders.com/news/flashpoint-content-update"
  },
  {
    title: "Patch Notes 1.21.0",
    date: "2026-03-24",
    source: "Official news",
    summary: "The final weekly patch before Flashpoint, useful as the baseline for what changed this morning.",
    url: "https://arcraiders.com/news/patch-notes-1-21-0"
  },
  {
    title: "Patch Notes 1.20.0",
    date: "2026-03-17",
    source: "Official news",
    summary: "Another pre-Flashpoint checkpoint in Embark's March update cadence.",
    url: "https://arcraiders.com/news/patch-notes-1-20-0"
  },
  {
    title: "Patch Notes 1.19.0",
    date: "2026-03-10",
    source: "Official news",
    summary: "Older March patch notes that now sit just behind the Flashpoint launch coverage in the official archive.",
    url: "https://arcraiders.com/news/patch-notes-1-19-0"
  },
  {
    title: "Trials Season 3: what you need to know",
    date: "2026-03-03",
    source: "Official news",
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

const state = {
  activeView: "start",
  selectedReleaseId: "patch-notes-1-23-0-2026-04-08",
  selectedTrackId: tracks[0].id,
  selectedLessonId: lessons.find((lesson) => lesson.trackId === tracks[0].id)?.id ?? null,
  selectedQuestId: "trader-quests",
  selectedMaterialId: "basic-scrap",
  reviewedLessons: []
};

const trackCountElement = document.querySelector("#track-count");
const lessonCountElement = document.querySelector("#lesson-count");
const machineCountElement = document.querySelector("#machine-count");
const appUpdatedElement = document.querySelector("#app-updated");
const appVerifiedElement = document.querySelector("#app-verified");
const reviewedCountElement = document.querySelector("#reviewed-count");
const continueLabelElement = document.querySelector("#continue-label");
const globalSearchElement = document.querySelector("#global-search");
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
const machineOverviewElement = document.querySelector("#machine-overview");
const painPointListElement = document.querySelector("#pain-point-list");
const briefingListElement = document.querySelector("#briefing-list");
const trackListElement = document.querySelector("#track-list");
const trackOverviewElement = document.querySelector("#track-overview");
const lessonListElement = document.querySelector("#lesson-list");
const lessonDetailElement = document.querySelector("#lesson-detail");
const machineListElement = document.querySelector("#machine-list");
const prepListElement = document.querySelector("#prep-list");
const questOverviewElement = document.querySelector("#quest-overview");
const questListElement = document.querySelector("#quest-list");
const questDirectoryElement = document.querySelector("#quest-directory");
const questDetailElement = document.querySelector("#quest-detail");
const questDetailPanelElement = document.querySelector(".quest-detail-panel");
const materialsOverviewElement = document.querySelector("#materials-overview");
const materialsListElement = document.querySelector("#materials-list");
const materialsDetailElement = document.querySelector("#materials-detail");
const materialsDetailPanelElement = document.querySelector(".materials-detail-panel");
const materialsCatalogElement = document.querySelector("#materials-catalog");
const materialUsageGuideElement = document.querySelector("#material-usage-guide");
const gearOverviewElement = document.querySelector("#gear-overview");
const weaponRoleListElement = document.querySelector("#weapon-role-list");
const quickUseListElement = document.querySelector("#quick-use-list");
const detailPanelElement = document.querySelector(".detail-panel");
const lessonPanelElement = document.querySelector(".lesson-column");
const backToTopElement = document.querySelector("#back-to-top");
const easterEggTriggerElement = document.querySelector("#easter-egg-trigger");
const easterEggToastElement = document.querySelector("#easter-egg-toast");
const appVersionButtonElement = document.querySelector("#app-version");
const markReviewedButtonElement = document.querySelector("#mark-reviewed");
const shareAppButtonElement = document.querySelector("#share-app");
const installAppButtonElement = document.querySelector("#install-app");
const modalBackdropElement = document.querySelector("#modal-backdrop");
const changelogModalElement = document.querySelector("#changelog-modal");
const closeChangelogElement = document.querySelector("#close-changelog");
const changelogListElement = document.querySelector("#changelog-list");
const flowSectionElements = Array.from(document.querySelectorAll(".flow-section"));
const focusTriggerElements = Array.from(document.querySelectorAll("[data-focus-view]"));

let deferredInstallPrompt = null;
let easterEggTimeoutId = null;

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
  appUpdatedElement.textContent = `Updated ${APP_UPDATED}`;
  if (appVerifiedElement) {
    appVerifiedElement.textContent = `Official posts verified ${OFFICIAL_POSTS_VERIFIED}`;
  }
}

function renderChangelog() {
  changelogListElement.innerHTML = VERSION_HISTORY.map((entry) => `
    <article class="changelog-entry">
      <div class="changelog-top">
        <strong class="changelog-version">${entry.version}</strong>
        <span class="changelog-date">${entry.date}</span>
      </div>
      <p class="changelog-summary">${entry.summary}</p>
      <ul class="changelog-points">
        ${entry.changes.map((change) => `<li>${change}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderBriefing() {
  briefingListElement.innerHTML = BRIEFING_STEPS.map((step, index) => `
    <article class="briefing-item">
      <span class="briefing-index">0${index + 1}</span>
      <h3 class="briefing-title">${step.title}</h3>
      <p class="briefing-copy">${step.copy}</p>
    </article>
  `).join("");
}

function renderPainPoints() {
  painPointListElement.innerHTML = painPoints.map((painPoint) => `
    <article class="pain-point-card">
      <h3 class="pain-point-title">${painPoint.title}</h3>
      <p class="pain-point-copy">${painPoint.copy}</p>
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
  trackListElement.innerHTML = tracks.map((track) => `
    <button class="track-button ${track.id === state.selectedTrackId ? "active" : ""}" type="button" data-track-id="${track.id}">
      <div class="track-title-row">
        <h3>${track.title}</h3>
        <span class="track-badge">${getLessonsForTrack(track.id).length} lessons</span>
      </div>
      <p class="track-summary">${track.subtitle}</p>
    </button>
  `).join("");

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

  trackOverviewElement.innerHTML = `
    <p class="eyebrow">Current Track</p>
    <h2 class="overview-title">${track.title}</h2>
    <p class="overview-subtitle">${track.subtitle}</p>
    <p class="overview-copy">${track.summary}</p>
    <div class="overview-meta">
      <article class="meta-pill"><span class="meta-label">Focus</span><strong class="meta-value">${track.focus}</strong></article>
      <article class="meta-pill"><span class="meta-label">Best For</span><strong class="meta-value">${track.bestFor}</strong></article>
      <article class="meta-pill"><span class="meta-label">Mindset</span><strong class="meta-value">${track.tone}</strong></article>
    </div>
  `;
}

function renderLessons() {
  const trackLessons = getLessonsForTrack(state.selectedTrackId);
  lessonListElement.innerHTML = trackLessons.map((lesson) => `
    <button class="lesson-card ${lesson.id === state.selectedLessonId ? "active" : ""} ${state.reviewedLessons.includes(lesson.id) ? "reviewed" : ""}" type="button" data-lesson-id="${lesson.id}">
      <div class="lesson-title-row">
        <h3 class="lesson-title">${lesson.title}</h3>
        <span class="tag">${lesson.time}</span>
      </div>
      <p class="lesson-meta">${lesson.category}</p>
      <p class="lesson-summary">${lesson.summary}</p>
    </button>
  `).join("");

  for (const button of lessonListElement.querySelectorAll("[data-lesson-id]")) {
    button.addEventListener("click", () => {
      state.selectedLessonId = button.dataset.lessonId;
      renderLessons();
      renderLessonDetail();
      updateProgressSummary();
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
    return;
  }

  markReviewedButtonElement.hidden = false;
  markReviewedButtonElement.textContent = state.reviewedLessons.includes(lesson.id)
    ? "Reviewed - tap to undo"
    : "Mark lesson reviewed";

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
      </div>
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
      <div class="callout"><strong>Field note:</strong><p class="detail-copy">${lesson.fieldNote}</p></div>
    </section>
  `;
}

function renderMachines() {
  machineOverviewElement.innerHTML = `
    <section class="machine-intel-note">
      <strong class="hero-card-label">Threat priority</strong>
      <p>When a fight starts getting messy, stop thinking about raw health pools first. Kill or break the units that expand the fight, expose you, or force you out of cover.</p>
    </section>
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

  machineListElement.innerHTML = machines.map((machine) => `
    <article class="machine-card">
      <div class="machine-top">
        <h3 class="machine-name">${machine.name}</h3>
        <span class="machine-threat">${machine.threat}</span>
      </div>
      <p class="machine-copy">${machine.copy}</p>
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
      <div class="callout"><strong>Response:</strong><p class="detail-copy">${machine.response}</p></div>
      <div class="callout"><strong>How to kill it:</strong><p class="detail-copy">${machine.tactic}</p></div>
    </article>
  `).join("");
}

function renderPrepList() {
  prepListElement.innerHTML = prepChecklist.map((item) => `
    <article class="prep-card">
      <span class="prep-marker"></span>
      <div>
        <h3 class="prep-title">Check before launch</h3>
        <p class="prep-copy">${item}</p>
      </div>
    </article>
  `).join("");
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
    <div class="source-note">
      <strong>Source scope:</strong>
      <p class="quest-note">This guide is grounded in the current official public overview of quests, Traders, Feats, Trials, Projects, and Expedition-related posts from ARC Raiders.</p>
    </div>
  `;
}

function renderQuestList() {
  questListElement.innerHTML = questSystems.map((quest) => `
    <button class="quest-card ${quest.id === state.selectedQuestId ? "active" : ""}" type="button" data-quest-id="${quest.id}">
      <div class="quest-title-row">
        <h3 class="quest-title">${quest.title}</h3>
        <span class="quest-badge">${quest.category}</span>
      </div>
      <p class="quest-summary">${quest.summary}</p>
    </button>
  `).join("");

  for (const button of questListElement.querySelectorAll("[data-quest-id]")) {
    button.addEventListener("click", () => {
      state.selectedQuestId = button.dataset.questId;
      renderQuestList();
      renderQuestDetail();
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
      <div class="callout">
        <strong>Field note:</strong>
        <p class="detail-copy">${quest.fieldNote}</p>
      </div>
    </section>
  `;
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
    reviewedLessons: state.reviewedLessons
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
  } catch (_error) {
    state.reviewedLessons = [];
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
      action: () => {
        state.activeView = "updates";
        state.selectedReleaseId = release.id;
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
      action: () => {
        state.activeView = "learn";
        state.selectedTrackId = lesson.trackId;
        state.selectedLessonId = lesson.id;
        render();
        scrollElementIntoView(document.querySelector("#curriculum"));
      }
    })),
    ...questSystems.map((quest) => ({
      id: quest.id,
      type: "Quest",
      title: quest.title,
      body: `${quest.summary} ${quest.overview} ${quest.category}`,
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
    ...materialFamilies.map((material) => ({
      id: material.id,
      type: "Material",
      title: material.title,
      body: `${material.summary} ${material.overview} ${material.badge}`,
      action: () => {
        state.activeView = "materials";
        state.selectedMaterialId = material.id;
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
      action: () => {
        state.activeView = "gear";
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
      action: () => {
        state.activeView = "gear";
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
  const selectedLesson = getSelectedLesson();
  continueLabelElement.textContent = selectedLesson ? selectedLesson.title : getSelectedTrack()?.title ?? "ARC Guide";
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
          <h3 class="spotlight-title">${release.title}</h3>
        </div>
        <span class="spotlight-date">${release.date}</span>
      </div>
      <p class="update-copy">${release.overview}</p>
      <ul class="spotlight-list">
        ${release.confirmed.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
    <div class="source-note">
      <strong>Design direction:</strong>
      <p class="release-note">This app now treats updates as a first-class content type so future Embark drops can be added through release records, affected-system tags, and spotlight panels instead of one-off page rewrites.</p>
    </div>
  `;
}

function renderEmbarkFeed() {
  embarkFeedElement.innerHTML = `
    ${embarkFeed.map((item) => `
      <article class="embark-feed-card">
        <span class="embark-feed-date">${item.date}</span>
        <h3 class="embark-feed-title">${item.title}</h3>
        <p class="embark-feed-copy">${item.summary}</p>
        <div class="embark-feed-meta">
          <span class="embark-feed-source">${item.source}</span>
          <a class="hero-button hero-button-secondary embark-feed-link" href="${item.url}" target="_blank" rel="noreferrer">Open post</a>
        </div>
      </article>
    `).join("")}
    <article class="source-note">
      <strong>How this works:</strong>
      <p class="release-note">This module is a curated official-news watch, not a noisy live embed. It is designed to be refreshed from Embark's official news page on a regular cadence while the app keeps the deeper guide content organized for players.</p>
      <a class="hero-button hero-button-secondary embark-feed-link" href="https://arcraiders.com/en/news" target="_blank" rel="noreferrer">Open official news hub</a>
    </article>
  `;
}

function renderHeroDashboard() {
  const currentRelease = releases[0];
  const selectedLesson = getSelectedLesson();
  const reviewedCount = state.reviewedLessons.length;
  const nextFocus = reviewedCount >= 3 ? "Advanced Ops" : "New Raider";

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
    <strong>${selectedLesson ? selectedLesson.title : "New Raider"}</strong>
    <p>${reviewedCount} lesson${reviewedCount === 1 ? "" : "s"} reviewed so far. Your best next focus is <strong>${nextFocus}</strong>.</p>
    <div class="hero-stat-row">
      <span class="hero-mini-pill">${getSelectedTrack()?.title ?? "Guide track"}</span>
      <span class="hero-mini-pill">${selectedLesson?.time ?? "Quick read"}</span>
    </div>
  `;

  const taskItems = [
    {
      title: "Check the patch first",
      copy: "Start in Update Center when a release is near so you know what systems changed before following older advice."
    },
    {
      title: "Run one focused goal",
      copy: "Use the quest and materials sections together so each raid has one clear purpose instead of random scavenging."
    },
    {
      title: "Review one weak spot",
      copy: "Use the lesson track or machine intel to close the one problem that keeps ending your raids."
    }
  ];

  heroTaskListElement.innerHTML = taskItems.map((item) => `
    <article class="hero-task">
      <strong>${item.title}</strong>
      <p>${item.copy}</p>
    </article>
  `).join("");
}

function renderReleaseList() {
  releaseListElement.innerHTML = releases.map((release) => `
    <button class="release-card ${release.id === state.selectedReleaseId ? "active" : ""}" type="button" data-release-id="${release.id}">
      <div class="release-title-row">
        <h3 class="release-title">${release.title}</h3>
        <span class="release-badge">${release.status}</span>
      </div>
      <p class="release-summary">${release.date}</p>
      <p class="release-summary">${release.confirmed.slice(0, 2).join(" • ")}</p>
    </button>
  `).join("");

  for (const button of releaseListElement.querySelectorAll("[data-release-id]")) {
    button.addEventListener("click", () => {
      state.selectedReleaseId = button.dataset.releaseId;
      renderReleaseList();
      renderReleaseDetail();
      saveState();
      if (isMobileLayout()) {
        scrollElementIntoView(document.querySelector(".release-detail-panel"));
      }
    });
  }
}

function renderReleaseDetail() {
  const release = getSelectedRelease();
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
      <div class="callout">
        <strong>Confirmed in this release:</strong>
        <p class="detail-copy">${release.confirmed.join(" | ")}</p>
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
  updateProgressSummary();
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
    searchResultsElement.innerHTML = '<article class="search-result"><h3 class="search-result-title">No matches</h3><p class="search-result-copy">Try a broader term like quest, material, machine, extraction, or trader.</p></article>';
    return;
  }

  searchResultsElement.innerHTML = matches.map((entry) => `
    <article class="search-result">
      <div class="search-result-top">
        <h3 class="search-result-title">${entry.title}</h3>
        <span class="search-result-type">${entry.type}</span>
      </div>
      <p class="search-result-copy">${entry.body}</p>
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

function renderMaterialsOverview() {
  materialsOverviewElement.innerHTML = `
    <article class="meta-pill">
      <span class="meta-label">What this section covers</span>
      <strong class="meta-value">${materialFamilies.length} material families</strong>
    </article>
    <p class="materials-copy">ARC Raiders' public material information is best understood as a routing problem, not a perfect loot-table spreadsheet. Official sources tell us which map types exist, which conditions boost certain loot, and which material families are definitely in circulation. This section translates that into practical material-hunting advice.</p>
    <div class="callout">
      <strong>April verification status:</strong>
      <p class="detail-copy">Official April posts confirm the workshop now includes Acquire Resources support for missing ingredients, but they still do not publish a brand-new material family list or a replaced material catalog. Based on current public information, the catalog below still holds after the April 8, 2026 patch cycle.</p>
    </div>
    <div class="source-note">
      <strong>Source scope:</strong>
      <p class="material-note">This guide uses official public details about the Workshop, Acquire Resources flow, maps, special conditions, boosted cache drops, the named basic materials used in the tunnel restoration event, and post-Flashpoint workshop changes.</p>
    </div>
  `;
}

function renderMaterialsList() {
  materialsListElement.innerHTML = materialFamilies.map((material) => `
    <button class="material-card ${material.id === state.selectedMaterialId ? "active" : ""}" type="button" data-material-id="${material.id}">
      <div class="quest-title-row">
        <h3 class="material-title">${material.title}</h3>
        <span class="quest-badge">${material.badge}</span>
      </div>
      <p class="material-summary">${material.summary}</p>
    </button>
  `).join("");

  for (const button of materialsListElement.querySelectorAll("[data-material-id]")) {
    button.addEventListener("click", () => {
      state.selectedMaterialId = button.dataset.materialId;
      renderMaterialsList();
      renderMaterialsDetail();
      saveState();
      if (isMobileLayout()) {
        scrollElementIntoView(materialsDetailPanelElement);
      }
    });
  }
}

function renderMaterialsDetail() {
  const material = getSelectedMaterial();
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
      <div class="callout">
        <strong>Field note:</strong>
        <p class="detail-copy">${material.fieldNote}</p>
      </div>
    </section>
  `;
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
    </article>
  `;
}

function renderWeaponRoles() {
  weaponRoleListElement.innerHTML = loadoutBlueprints.map((role) => `
    <article class="gear-card">
      <h3 class="gear-title">${role.title}</h3>
      <p class="gear-copy">${role.summary}</p>
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
  `).join("");
}

function renderQuickUseItems() {
  quickUseListElement.innerHTML = quickUseItems.map((item) => `
    <article class="quick-use-card">
      <h3 class="quick-use-title">${item.title}</h3>
      <p class="quick-use-copy">${item.summary}</p>
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
  `).join("");
}

function syncBackToTopVisibility() {
  backToTopElement.classList.toggle("visible", window.scrollY > 520);
}

function openChangelog() {
  renderChangelog();
  modalBackdropElement.hidden = false;
  changelogModalElement.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeChangelog() {
  modalBackdropElement.hidden = true;
  changelogModalElement.hidden = true;
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
  renderFocusNav();
  syncFlowSections();
  updateProgressSummary();
  renderHeroDashboard();
  renderUpdateSpotlight();
  renderEmbarkFeed();
  renderReleaseList();
  renderReleaseDetail();
  renderBriefing();
  renderPainPoints();
  renderTracks();
  renderTrackOverview();
  renderLessons();
  renderLessonDetail();
  renderQuestOverview();
  renderQuestList();
  renderQuestDirectory();
  renderQuestDetail();
  renderMaterialsOverview();
  renderMaterialsList();
  renderMaterialsDetail();
  renderMaterialsCatalog();
  renderMaterialUsageGuide();
  renderGearOverview();
  renderWeaponRoles();
  renderQuickUseItems();
  renderMachines();
  renderPrepList();
}

backToTopElement.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

easterEggTriggerElement.addEventListener("click", revealEasterEgg);
markReviewedButtonElement.addEventListener("click", toggleReviewedLesson);
globalSearchElement.addEventListener("input", () => {
  renderSearchResults(globalSearchElement.value);
});
appVersionButtonElement.addEventListener("click", openChangelog);
closeChangelogElement.addEventListener("click", closeChangelog);
modalBackdropElement.addEventListener("click", closeChangelog);
shareAppButtonElement.addEventListener("click", () => {
  shareApp().catch(() => undefined);
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
  if (event.key === "Escape" && !changelogModalElement.hidden) {
    closeChangelog();
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
syncBackToTopVisibility();
syncCommandBarState();
renderSearchResults("");
registerServiceWorker();
