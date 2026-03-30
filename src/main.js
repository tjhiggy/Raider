const VERSION_HISTORY = [
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
const STORAGE_KEY = "arc-raiders-guide-state";

const releases = [
  {
    id: "flashpoint-2026-03-31",
    title: "Flashpoint",
    date: "2026-03-31",
    status: "Tomorrow",
    summary: "Embark has publicly positioned Flashpoint as the next ARC Raiders content update landing on March 31, 2026.",
    overview: "Based on the official 2026 roadmap and Embark's public teasers, Flashpoint is the immediate next release after Headwinds and Shrouded Sky. The roadmap confirms a new ARC threat, a new map condition, a new player project, and a content update for Scrappy.",
    confirmed: [
      "New ARC threat",
      "New map condition",
      "New player project",
      "Content update for Scrappy"
    ],
    prep: [
      "Keep the app's quest, materials, and machine sections modular so new content can slot into existing categories fast.",
      "Expect at least one new threat entry and one new condition-driven routing update as soon as patch details go live.",
      "Prepare an update workflow that highlights what changed first, then links out to deeper guide sections."
    ],
    appIdeas: [
      "Add a 'New in this update' module at the top of the app whenever a release record is marked current.",
      "Add patch-tag badges to affected lessons, materials, and machine intel entries.",
      "Add a post-release verification checklist so unconfirmed assumptions can be replaced quickly with live information."
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
    onOpen: () => scrollElementIntoView(document.querySelector("#materials-intel"))
  },
  {
    id: "quest-drift",
    title: "My raids feel random",
    copy: "A common trap is entering Topside without a single goal, then extracting nothing useful or dying with partial progress.",
    actionLabel: "Open quest board",
    onOpen: () => scrollElementIntoView(document.querySelector("#quest-ops"))
  },
  {
    id: "machine-pressure",
    title: "ARC fights get out of control fast",
    copy: "Newer players often aggro the wrong targets, stay too long after noise, or fail to reset after a messy fight.",
    actionLabel: "Open machine intel",
    onOpen: () => scrollElementIntoView(document.querySelector("#machine-intel"))
  },
  {
    id: "new-player-overload",
    title: "There is too much information at once",
    copy: "The game and the official site surface a lot of systems quickly, so the app needs to behave like a guided training flow instead of a content dump.",
    actionLabel: "Start new raider path",
    onOpen: () => {
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
    onOpen: () => scrollElementIntoView(document.querySelector("#update-center"))
  }
];

const tracks = [
  {
    id: "new-raider",
    title: "New Raider",
    subtitle: "Build fundamentals that keep you alive",
    summary: "Start here if you are still learning what matters on a run, how progression works, and how to read danger without panicking.",
    focus: "Extraction basics, loot priorities, progression, and simple decision-making.",
    bestFor: "First-time players and anyone returning after a long break.",
    tone: "Stay calm, stay mobile, and avoid unnecessary fights."
  },
  {
    id: "advanced-ops",
    title: "Advanced Ops",
    subtitle: "Turn survival into repeatable high-value raids",
    summary: "This track is for players who already understand the loop and want better route planning, stronger threat management, and more intentional risk-taking.",
    focus: "Map conditions, squad pacing, threat layering, and extract timing.",
    bestFor: "Confident solos and organized squads looking for cleaner raids.",
    tone: "Only take chaos when the reward is worth the attention it creates."
  }
];

const lessons = [
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
    trackId: "advanced-ops",
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
    trackId: "advanced-ops",
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
    trackId: "advanced-ops",
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
    trackId: "advanced-ops",
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
  }
];

const machines = [
  { name: "Tick", threat: "Ambush", copy: "Small, stealthy machines that cling to structures and punish inattentive movement indoors or under rooftops.", response: "Clear ceilings, walls, and tight interiors before looting casually." },
  { name: "Snitch", threat: "Detection", copy: "Airborne observer that spots suspicious activity and can turn your position into a reinforcement event.", response: "Break line of sight or remove it quickly before it escalates." },
  { name: "Leaper", threat: "Burst Pressure", copy: "A larger machine with a punishing leap attack that can collapse distance fast and force you out of stable cover.", response: "Create space before it commits and avoid predictable positions." },
  { name: "Bombardier", threat: "Area Denial", copy: "Works with Spotter drones to designate you for lethal mortar pressure and destroy static positions.", response: "Relocate early and do not tunnel on a held angle once you are marked." },
  { name: "Wasp / Hornet / Rocketeer", threat: "Air Superiority", copy: "Flying ARC variants punish players who treat open ground as safe travel time.", response: "Use cover chains and shorten exposed crossings." },
  { name: "Queen", threat: "Endgame Hazard", copy: "A massive machine threat tied to Harvester activity and not something new players should challenge casually.", response: "Treat it as a major event and only engage with a real plan." }
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

const state = {
  selectedReleaseId: "flashpoint-2026-03-31",
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
const reviewedCountElement = document.querySelector("#reviewed-count");
const continueLabelElement = document.querySelector("#continue-label");
const globalSearchElement = document.querySelector("#global-search");
const searchResultsPanelElement = document.querySelector("#search-results-panel");
const searchResultsElement = document.querySelector("#search-results");
const updateSpotlightElement = document.querySelector("#update-spotlight");
const releaseListElement = document.querySelector("#release-list");
const releaseDetailElement = document.querySelector("#release-detail");
const updateCenterElement = document.querySelector("#update-center");
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
const questDetailElement = document.querySelector("#quest-detail");
const questDetailPanelElement = document.querySelector(".quest-detail-panel");
const materialsOverviewElement = document.querySelector("#materials-overview");
const materialsListElement = document.querySelector("#materials-list");
const materialsDetailElement = document.querySelector("#materials-detail");
const materialsDetailPanelElement = document.querySelector(".materials-detail-panel");
const detailPanelElement = document.querySelector(".detail-panel");
const lessonPanelElement = document.querySelector(".lesson-column");
const backToTopElement = document.querySelector("#back-to-top");
const appVersionButtonElement = document.querySelector("#app-version");
const markReviewedButtonElement = document.querySelector("#mark-reviewed");
const shareAppButtonElement = document.querySelector("#share-app");
const installAppButtonElement = document.querySelector("#install-app");
const modalBackdropElement = document.querySelector("#modal-backdrop");
const changelogModalElement = document.querySelector("#changelog-modal");
const closeChangelogElement = document.querySelector("#close-changelog");
const changelogListElement = document.querySelector("#changelog-list");

let deferredInstallPrompt = null;

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
  `;

  machineListElement.innerHTML = machines.map((machine) => `
    <article class="machine-card">
      <div class="machine-top">
        <h3 class="machine-name">${machine.name}</h3>
        <span class="machine-threat">${machine.threat}</span>
      </div>
      <p class="machine-copy">${machine.copy}</p>
      <div class="callout"><strong>Response:</strong><p class="detail-copy">${machine.response}</p></div>
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
    <p class="quest-overview-copy">ARC Raiders' official public material currently describes four quest-related progression systems clearly enough to guide inside the app: Trader quests, Feats, weekly Trials, and larger Projects. This section focuses on how to complete those systems reliably rather than pretending there is a public, fixed list of every named in-game task.</p>
    <div class="source-note">
      <strong>Source scope:</strong>
      <p class="quest-note">This guide is grounded in the current official public overview of quests, Traders, Feats, Trials, and Projects from ARC Raiders.</p>
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
        state.selectedReleaseId = release.id;
        renderReleaseList();
        renderReleaseDetail();
        scrollElementIntoView(updateCenterElement);
      }
    })),
    ...lessons.map((lesson) => ({
      id: lesson.id,
      type: "Lesson",
      title: lesson.title,
      body: `${lesson.summary} ${lesson.body} ${lesson.category}`,
      action: () => {
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
        state.selectedQuestId = quest.id;
        renderQuestList();
        renderQuestDetail();
        scrollElementIntoView(document.querySelector("#quest-ops"));
      }
    })),
    ...materialFamilies.map((material) => ({
      id: material.id,
      type: "Material",
      title: material.title,
      body: `${material.summary} ${material.overview} ${material.badge}`,
      action: () => {
        state.selectedMaterialId = material.id;
        renderMaterialsList();
        renderMaterialsDetail();
        scrollElementIntoView(document.querySelector("#materials-intel"));
      }
    })),
    ...machines.map((machine) => ({
      id: machine.name,
      type: "Machine",
      title: machine.name,
      body: `${machine.copy} ${machine.response} ${machine.threat}`,
      action: () => {
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
          <p class="eyebrow">Next release window</p>
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

function renderHeroDashboard() {
  const currentRelease = releases[0];
  const selectedLesson = getSelectedLesson();
  const reviewedCount = state.reviewedLessons.length;
  const nextFocus = reviewedCount >= 3 ? "Advanced Ops" : "New Raider";

  heroUpdateCardElement.innerHTML = `
    <span class="hero-card-label">Current update watch</span>
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
      <p class="release-summary">${release.summary}</p>
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
      <p class="detail-copy">${release.overview}</p>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">Officially confirmed</p>
      <ul class="detail-list">${release.confirmed.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">Player prep</p>
      <ul class="detail-list">${release.prep.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section class="detail-block">
      <p class="detail-kicker">App UX follow-up</p>
      <ul class="detail-list">${release.appIdeas.map((item) => `<li>${item}</li>`).join("")}</ul>
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
    <div class="source-note">
      <strong>Source scope:</strong>
      <p class="material-note">This guide uses official public details about the Workshop, maps, special conditions, boosted cache drops, and the named basic materials used in the tunnel restoration event.</p>
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

function render() {
  renderCounts();
  updateProgressSummary();
  renderHeroDashboard();
  renderUpdateSpotlight();
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
  renderQuestDetail();
  renderMaterialsOverview();
  renderMaterialsList();
  renderMaterialsDetail();
  renderMachines();
  renderPrepList();
}

backToTopElement.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

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

loadState();
render();
syncBackToTopVisibility();
renderSearchResults("");
registerServiceWorker();
