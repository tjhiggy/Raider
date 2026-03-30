const APP_VERSION = "v1.2.0";
const APP_UPDATED = "2026-03-30";
const QUICK_START_STEPS = [
  "Choose a season first to load the correct loot and mobility meta.",
  "Use the Drop Browser filters to narrow the season down to the style you want.",
  "Use the blue mobility marker as your first exit anchor when the zone pulls badly."
];
const RELEASE_NOTES = [
  "Reworked the drop browsing flow so only one active recommendation is shown at a time.",
  "Added drop filters, a focused selector, and next/previous navigation for iPhone-friendly browsing.",
  "Simplified the main content flow so the page feels more guided and less overwhelming on mobile."
];
const VERSION_HISTORY = [
  {
    version: "v1.2.0",
    updated: "2026-03-30",
    changes: [
      "Replaced the full drop-card list with a focused drop browser.",
      "Added filters for drop type and conflict level plus a single active recommendation view.",
      "Added previous and next controls to move through matching drops more smoothly on phones."
    ]
  },
  {
    version: "v1.1.1",
    updated: "2026-03-30",
    changes: [
      "Made the footer app version clickable.",
      "Added a pop-up changelog with release history across versions.",
      "Added a dedicated modal close and backdrop dismiss flow."
    ]
  },
  {
    version: "v1.1.0",
    updated: "2026-03-30",
    changes: [
      "Added install/share metadata and a web manifest for app-style home-screen use.",
      "Added quick-start guidance and versioned release notes right inside the app.",
      "Added a floating back-to-top button for easier long-page navigation on mobile."
    ]
  },
  {
    version: "v1.0.0",
    updated: "2026-03-30",
    changes: [
      "Added a visible footer version badge for easier testing and release references.",
      "Improved the mobile browsing flow with a cleaner season selector and auto-scroll behavior.",
      "Refined the drop breakdown panel and map readability."
    ]
  }
];

const data = {
  seasons: [
    {
      id: "og-season-1",
      title: "Season 1",
      subtitle: "Low-conflict starts, edge rotates",
      overview: "Early OG placement play is about claiming calm loot, staying off the lobby's main rails, and entering late zones with materials, shields, and patience.",
      style: "Play edge, avoid first-circle collisions, rotate late with cover.",
      bestFor: "Placement-focused duos and squads chasing top-three setups.",
      gradient: "linear-gradient(135deg, rgba(10, 29, 33, 0.96), rgba(37, 164, 149, 0.88))",
    },
    {
      id: "og-season-2",
      title: "Season 2",
      subtitle: "Safer routes through a sharper lobby",
      overview: "Season 2 still rewards good loot, but placement-first teams should prioritize controlled starts and ridge-based rotates that avoid the center's biggest pileups.",
      style: "Take clean edge loot, use terrain for rotates, avoid headline POI brawls.",
      bestFor: "Teams that want final-three consistency over early elim totals.",
      gradient: "linear-gradient(135deg, rgba(34, 16, 7, 0.96), rgba(246, 155, 67, 0.9))",
    },
    {
      id: "og-season-3",
      title: "Season 3",
      subtitle: "Mobility for avoiding congestion",
      overview: "Season 3 placement wins come from fast but calm loot paths, then using mobility and timing to miss the map's heaviest collision points.",
      style: "Loot efficiently, move before congestion, preserve heals and mats for late circles.",
      bestFor: "Trios and squads playing for patient endgames.",
      gradient: "linear-gradient(135deg, rgba(11, 18, 45, 0.96), rgba(91, 156, 255, 0.88))",
    },
    {
      id: "og-season-4",
      title: "Season 4",
      subtitle: "Positioning over hot-drop chaos",
      overview: "Season 4 opens more routes, which means disciplined teams can win by skipping early traffic and arriving late to the map's strongest positions.",
      style: "Avoid busy center fights, rotate through cover, hold elevation only when it stays quiet.",
      bestFor: "Players aiming to survive deep enough to third-party the final two teams.",
      gradient: "linear-gradient(135deg, rgba(36, 8, 16, 0.96), rgba(255, 82, 90, 0.88))",
    },
    {
      id: "og-season-5",
      title: "Season 5",
      subtitle: "Mobility-first placement pathing",
      overview: "Season 5 gives you more ways to move, which makes it even stronger for low-conflict teams that want to rotate early, hold safe edges, and avoid wasteful mid-game fights.",
      style: "Prioritize nearby mobility, quiet routes, and late-position control.",
      bestFor: "Players who want to reach top three with minimal forced fighting.",
      gradient: "linear-gradient(135deg, rgba(20, 9, 33, 0.96), rgba(166, 112, 255, 0.88))",
    },
    {
      id: "og-season-6",
      title: "Season 6",
      subtitle: "Rifts and resets for safer placements",
      overview: "Season 6 rewards teams that can use rifts and floating-island movement to dodge bad zones and let other squads burn each other out first.",
      style: "Secure loot, use rifts for safe recentering, and avoid crowded cube-era crossroads.",
      bestFor: "Teams that want quiet rotates and strong late-circle entry timing.",
      gradient: "linear-gradient(135deg, rgba(29, 11, 38, 0.96), rgba(164, 83, 255, 0.9))",
    },
    {
      id: "og-season-7",
      title: "Season 7",
      subtitle: "Long rotates, low-conflict planning",
      overview: "Season 7 can punish edge teams that rotate late, so the best placement spots are the ones with enough loot and movement to bypass the biggest traffic corridors.",
      style: "Value aircraft, ziplines, and quiet long-range reposition routes.",
      bestFor: "Players trying to survive into the last three teams with resources intact.",
      gradient: "linear-gradient(135deg, rgba(10, 29, 56, 0.96), rgba(131, 220, 255, 0.88))",
    },
    {
      id: "og-season-8-coming-soon",
      title: "Season 8",
      subtitle: "Coming soon",
      overview: "We are watching for the official Fortnite OG Season 8 switch. Expect pirate camps, treasure-driven pathing, and new movement priorities once Epic confirms the live map state.",
      style: "Treasure routes, cannons, and quiet reposition windows.",
      bestFor: "Players preparing for a placement-first Season 8 meta shift.",
      gradient: "linear-gradient(135deg, rgba(41, 16, 10, 0.96), rgba(214, 102, 50, 0.88) 55%, rgba(244, 196, 89, 0.84))",
      comingSoon: true,
    },
  ],
  spots: [
    {
      id: "pleasant-season-1",
      seasonId: "og-season-1",
      name: "Pleasant Park",
      type: "POI",
      region: "Northwest",
      headline: "The most reliable all-around opener for classic squads.",
      loot: 92,
      rotate: 82,
      risk: 68,
      squad: "3-4 players",
      why: "Pleasant spreads teams across distinct houses, giving your squad enough room to split, collect shields, and regroup with material control before first rotate.",
      mobility: ["Standard vehicle spawns nearby", "Quick hill routes toward center", "Glider redeploy only from natural elevation"],
      plan: [
        "Send one player to the soccer field edge for fast loot and early vision.",
        "Split the rest across opposite house clusters to avoid overstacking.",
        "Collapse back to center street before leaving the POI.",
      ],
      highlights: ["High chest density", "Strong ammo spread", "Easy brick and wood farming"],
    },
    {
      id: "retail-season-1",
      seasonId: "og-season-1",
      name: "Retail Row",
      type: "POI",
      region: "East",
      headline: "Great for quick loot without full hot-drop chaos.",
      loot: 88,
      rotate: 79,
      risk: 56,
      squad: "2-3 players",
      why: "Retail offers compact indoor loot, easy callout structure, and nearby hills that make safer mid-game rotates possible.",
      mobility: ["Fast road access east and south", "Nearby hill glide paths", "No built-in rift, so rotate early on far zones"],
      plan: [
        "Prioritize storefront roofs for opening angles.",
        "Clear the bookstore and grocery side before crossing the street.",
        "Rotate south with full mats instead of chasing fringe tags.",
      ],
      highlights: ["Fast shield access", "Compact fighting lanes", "Nearby hill control"],
    },
    {
      id: "tilted-season-2",
      seasonId: "og-season-2",
      name: "Tilted Towers",
      type: "POI",
      region: "Center",
      headline: "Still the highest-upside drop if your team wins the first 90 seconds.",
      loot: 99,
      rotate: 95,
      risk: 95,
      squad: "2-4 players",
      why: "Tilted is unmatched for loot volume and central control, but it demands clean building claims and fast target focus.",
      mobility: ["Central road network", "Short rotates to most circles", "Multiple rooftop disengage paths"],
      plan: [
        "Land roof-first where an immediate weapon is visible.",
        "Claim separate buildings instead of stacking one staircase.",
        "Collapse together on the first cracked team instead of forcing isolated duels.",
      ],
      highlights: ["Elite chest density", "Center-map position", "Rapid refresh potential"],
    },
    {
      id: "snobby-season-2",
      seasonId: "og-season-2",
      name: "Snobby Shores",
      type: "POI",
      region: "West",
      headline: "A smart controlled-drop option with excellent mats.",
      loot: 84,
      rotate: 77,
      risk: 42,
      squad: "2-4 players",
      why: "Snobby rewards teams that value consistency, clean spacing, and brick-heavy defensive builds over pure early-fight upside.",
      mobility: ["ATK-friendly western roads", "Coastal rotate lanes", "Longer storm distances if zone pulls east"],
      plan: [
        "Take mansion-side first for the densest chest route.",
        "Harvest stone walls on the way out to stock defensive materials.",
        "Rotate north early if zone pulls hard across the map.",
      ],
      highlights: ["Low contest rate", "Excellent brick farming", "Safe regroup routes"],
    },
    {
      id: "dusty-season-3",
      seasonId: "og-season-3",
      name: "Dusty Divot",
      type: "POI",
      region: "Center-East",
      headline: "The best mobility-minded drop for organized teams.",
      loot: 90,
      rotate: 93,
      risk: 71,
      squad: "3-4 players",
      why: "Dusty gives strong chest coverage and natural paths into most zones, letting you move before congestion traps slower teams.",
      mobility: ["Excellent center-map routing", "Natural ravine cover for movement", "Easy transitions into nearby mobility items"],
      plan: [
        "Secure the outer rim first for a smooth chest loop.",
        "Use the interior depression as cover while trading opening tags.",
        "Leave before the POI gets third-partied from mid-map.",
      ],
      highlights: ["Fast center rotations", "Natural cover", "Multiple disengage paths"],
    },
    {
      id: "fatal-season-3",
      seasonId: "og-season-3",
      name: "Fatal Fields",
      type: "POI",
      region: "South-Center",
      headline: "Balanced loot and huge farming value for smart lobbies.",
      loot: 86,
      rotate: 81,
      risk: 48,
      squad: "2-4 players",
      why: "Fatal supports uncontested farm-heavy starts, especially for teams that value heal economy and materials over instant highlights.",
      mobility: ["Cart and road routes out of south center", "Wide-open field visibility for early rotates", "Limited emergency mobility if zone hard-pulls north"],
      plan: [
        "Take barn roof first for vision and chest access.",
        "Clear the house side before crossing the fields.",
        "Farm fencing and outer trees before first rotate.",
      ],
      highlights: ["Massive wood farming", "Good heal spawns", "Low early volatility"],
    },
    {
      id: "risky-season-4",
      seasonId: "og-season-4",
      name: "Risky Reels",
      type: "POI",
      region: "North",
      headline: "Explosive early fights with enough loot to justify the contest.",
      loot: 91,
      rotate: 75,
      risk: 85,
      squad: "2-3 players",
      why: "Risky compresses teams into one readable fight space, so squads with strong target focus can snowball quickly.",
      mobility: ["Fast road access", "Short northern rotates", "Weak emergency escape if third-partied early"],
      plan: [
        "Take theater roof and adjacent vehicles for opening cover.",
        "Pinch from opposite sides instead of funneling through the screen area.",
        "Reset shields before leaving because nearby rotates stay exposed.",
      ],
      highlights: ["Strong chest clusters", "Fast eliminations", "Easy awareness of enemy positions"],
    },
    {
      id: "lonely-season-4",
      seasonId: "og-season-4",
      name: "Lonely Lodge",
      type: "POI",
      region: "East",
      headline: "A sleeper drop for squads that value storm prep over spotlight fights.",
      loot: 83,
      rotate: 74,
      risk: 36,
      squad: "2-4 players",
      why: "Lonely gives enough loot to stabilize and an enormous wood economy, all with simple, predictable pathing.",
      mobility: ["Long east-edge road network", "Tower scouting before committing to rotates", "Far zones demand early movement"],
      plan: [
        "Land tower first for scouting and vertical priority.",
        "Spread to cabins only after confirming the contest count.",
        "Carry mobility if the first zone is long.",
      ],
      highlights: ["Huge wood economy", "Low pressure opener", "Clear scouting tower"],
    },
    {
      id: "paradise-season-5",
      seasonId: "og-season-5",
      name: "Paradise Palms",
      type: "POI",
      region: "Southeast",
      headline: "Top-tier loot with the movement options to escape bad pulls.",
      loot: 94,
      rotate: 89,
      risk: 76,
      squad: "2-4 players",
      why: "Paradise supports both aggressive and controlled styles with broad loot spacing, rooftop claims, and strong mobility access.",
      mobility: ["Vehicle-heavy desert roads", "Rift-like vertical resets from terrain and rooftops", "Fast exits toward south and mid-map"],
      plan: [
        "Claim outer rooftops first to avoid getting trapped indoors.",
        "Win one side of town before crossing toward the hotel block.",
        "Rotate with vehicles or mobility before desert teams pinch inward.",
      ],
      highlights: ["Excellent floor loot", "Wide fighting lanes", "Strong mobility access"],
    },
    {
      id: "lazy-season-5",
      seasonId: "og-season-5",
      name: "Lazy Links",
      type: "POI",
      region: "North",
      headline: "Ideal for measured fights and clean loot routes.",
      loot: 87,
      rotate: 84,
      risk: 51,
      squad: "2-4 players",
      why: "Lazy Links gives predictable split patterns and enough space to recover from a shaky opener without losing the full match.",
      mobility: ["Golf-cart style route spacing", "Strong north/east road exits", "Comfortable regroup paths before first rotate"],
      plan: [
        "Start clubhouse-side if another team floats toward the villas.",
        "Use the cart paths for low-exposure movement through the POI.",
        "Leave north or east depending on storm timing.",
      ],
      highlights: ["Predictable loot path", "Safe regrouping", "Solid mid-map access"],
    },
    {
      id: "loot-lake-season-6",
      seasonId: "og-season-6",
      name: "Loot Lake",
      type: "POI",
      region: "Center",
      headline: "The floating-island season makes this the premier rift-enabled reset spot.",
      loot: 91,
      rotate: 96,
      risk: 83,
      squad: "2-4 players",
      why: "Season 6 transforms Loot Lake into a mobility engine. Rift access and central positioning let you recover from awkward circles better than almost anywhere else.",
      mobility: ["Central rift access", "Floating island reposition routes", "Short rotates to nearly every safe zone"],
      plan: [
        "Claim fast surface loot first instead of overcommitting to the center immediately.",
        "Track nearby contesting teams before taking the rift route.",
        "Use the floating island path to reset or rotate rather than forcing a low-ground fight.",
      ],
      highlights: ["Rift mobility", "Elite zone flexibility", "Strong reset potential"],
    },
    {
      id: "wailing-season-6",
      seasonId: "og-season-6",
      name: "Wailing Woods",
      type: "POI",
      region: "Northeast",
      headline: "A quieter Season 6 drop with standout rift utility for storm recovery.",
      loot: 85,
      rotate: 90,
      risk: 39,
      squad: "2-4 players",
      why: "Wailing is one of the safest places to gear up while still offering meaningful mobility thanks to the rifts in the area, which makes it unusually forgiving for edge-map play.",
      mobility: ["Nearby rifts", "Strong east-side disengage routes", "Good recovery on far-circle pulls"],
      plan: [
        "Prioritize outer chests before pathing inward.",
        "Confirm whether another team is contesting the bunker side before fully splitting.",
        "Take the nearest rift early if the first zone is deep south or west.",
      ],
      highlights: ["Rift safety valve", "Low contest rate", "Strong heal and material setup"],
    },
    {
      id: "frosty-season-7",
      seasonId: "og-season-7",
      name: "Frosty Flights",
      type: "POI",
      region: "Southwest Snow Biome",
      headline: "The strongest Season 7 drop when you can secure plane access.",
      loot: 93,
      rotate: 97,
      risk: 74,
      squad: "2-4 players",
      why: "Frosty Flights combines quality loot with unmatched aircraft mobility, making it one of the best recovery drops in the OG Season 7 environment.",
      mobility: ["X-4 Stormwing planes", "Snow-biome flight paths", "Fast long-distance recovery on bad zones"],
      plan: [
        "Land hangar-side to contest plane access immediately.",
        "Do not overchase early tags if you already control a Stormwing.",
        "Use aircraft to claim next position instead of looting every last chest.",
      ],
      highlights: ["Plane access", "Top-tier long rotate options", "Strong hangar loot"],
    },
    {
      id: "polar-season-7",
      seasonId: "og-season-7",
      name: "Polar Peak",
      type: "POI",
      region: "South-Center Snow Biome",
      headline: "High-risk vertical control with better rotation tools than most mountain drops.",
      loot: 88,
      rotate: 92,
      risk: 72,
      squad: "2-4 players",
      why: "Polar Peak gives you height, visibility, and nearby snow-biome movement options, which lets strong teams convert opening control into mid-game safety.",
      mobility: ["Zipline-style mountain movement", "Nearby plane pressure from the biome", "Fast downhill transitions into safe zones"],
      plan: [
        "Take the highest castle loot first so you own vertical control.",
        "Avoid splitting too far across the structure if multiple teams contest.",
        "Rotate off height early once storm info appears rather than waiting to get pinched.",
      ],
      highlights: ["Dominant elevation", "Strong scouting", "Reliable snow-biome exits"],
    },
    {
      id: "motel-season-1",
      seasonId: "og-season-1",
      name: "Motel Split",
      type: "Landmark",
      region: "North",
      headline: "A classic low-contest split for squads that want fast loot and a clean Pleasant fallback.",
      loot: 80,
      rotate: 84,
      risk: 28,
      squad: "2-4 players",
      why: "The Motel route gives you a surprisingly stable opener with enough chest density to gear up, then pivot into Pleasant, Loot Lake hills, or a north-zone hold depending on lobby pressure.",
      mobility: ["Quick road access into Pleasant", "North edge rotations with low traffic", "Easy vehicle usage if available"],
      plan: [
        "Clear roof and parking-side chests before anyone drifts toward Pleasant.",
        "Leave early rather than over-farming if the zone is south.",
        "Use the hill line for safer scouting before committing to a rotate.",
      ],
      highlights: ["Low contest frequency", "Fast split loot", "Easy pivot into nearby fights"],
    },
    {
      id: "factories-season-2",
      seasonId: "og-season-2",
      name: "Factories",
      type: "Landmark",
      region: "Southwest",
      headline: "Still one of the best off-POI starts for disciplined duos and trios.",
      loot: 82,
      rotate: 80,
      risk: 34,
      squad: "2-3 players",
      why: "Factories gives you concentrated loot, metal-heavy materials, and a reliable first rotate without forcing a full named-POI contest.",
      mobility: ["Immediate road access", "Fast routes into Shifty or Greasy side circles", "Low-traffic southern rotates"],
      plan: [
        "Claim separated rooftops so the whole team does not bottleneck one warehouse.",
        "Prioritize metal farming before leaving the area.",
        "Rotate along the south edge unless you have a free pinch into nearby fights.",
      ],
      highlights: ["Metal-rich start", "Compact loot path", "Rarely over-contested"],
    },
    {
      id: "hero-mansion-season-3",
      seasonId: "og-season-3",
      name: "Hero Mansion to Villain Base",
      type: "Route",
      region: "East to Northeast",
      headline: "A long split route with excellent loot if your team wants flexibility over early eliminations.",
      loot: 85,
      rotate: 87,
      risk: 31,
      squad: "2-4 players",
      why: "This route turns two strong landmarks into one deliberate opener, giving organized teams enough loot and materials to choose late or early rotates with real information.",
      mobility: ["Driftboard-friendly pathing in later OG updates", "Strong edge-map disengage routes", "Flexible north and east transitions"],
      plan: [
        "Send one player to each end only if no contest is visible on either side.",
        "Regroup midway instead of greed-looting both extremes.",
        "Use the route only when first zone timing gives you enough margin.",
      ],
      highlights: ["High landmark value", "Flexible split path", "Very safe if uncontested"],
    },
    {
      id: "containers-season-4",
      seasonId: "og-season-4",
      name: "Container Yard",
      type: "Landmark",
      region: "West-Center",
      headline: "A sharp alternative for players who want quick fights without the full Tilted commitment.",
      loot: 81,
      rotate: 86,
      risk: 58,
      squad: "2-3 players",
      why: "Container Yard is mechanically demanding but efficient. You get fast weapons, lots of metal, and easy access to surrounding mid-map routes if you win the opener.",
      mobility: ["Excellent mid-map road access", "Fast pivots into Loot Lake or Tilted", "Strong vertical peek control"],
      plan: [
        "Land with immediate line-of-sight on enemy drops because the fight space is compact.",
        "Secure metal and shields before drifting into nearby third parties.",
        "Leave quickly once you control the stack area.",
      ],
      highlights: ["Fast metal economy", "Aggressive tempo", "Great third-party angles"],
    },
    {
      id: "desert-racetrack-season-5",
      seasonId: "og-season-5",
      name: "Desert Racetrack",
      type: "Landmark",
      region: "Southeast Desert",
      headline: "A mobility-first landmark start that fits the Season 5 tempo perfectly.",
      loot: 79,
      rotate: 90,
      risk: 33,
      squad: "2-4 players",
      why: "The racetrack is not a huge loot spot, but it shines when you prioritize vehicles, quick material collection, and fast access into Paradise or central desert routes.",
      mobility: ["Reliable vehicle access", "Fast desert road network", "Strong recovery on long southeast pulls"],
      plan: [
        "Secure the vehicle side first so another team cannot steal the route value.",
        "Top off with nearby chest spawns instead of hard committing to a long fight.",
        "Rotate early and use mobility to claim your next safe position.",
      ],
      highlights: ["Vehicle priority", "Strong macro rotation", "Low-commitment opener"],
    },
    {
      id: "cube-island-edge-season-6",
      seasonId: "og-season-6",
      name: "Floating Island Edge Route",
      type: "Route",
      region: "Center Orbit",
      headline: "A high-skill route built around Season 6's map movement instead of traditional chest count.",
      loot: 77,
      rotate: 94,
      risk: 61,
      squad: "2-4 players",
      why: "This is less about raw loot and more about turning floating-island movement into tempo. Strong teams can use it to dodge bad zones and choose smarter fights.",
      mobility: ["Floating island repositioning", "Rift-assisted escapes", "Rapid central recenter options"],
      plan: [
        "Do not force this route if you are behind on shields or opening weapons.",
        "Use the orbit path to gather info before choosing your next drop-in.",
        "Prioritize the move advantage over unnecessary mid-air skirmishes.",
      ],
      highlights: ["Unique mobility path", "Excellent recentering", "Great scouting angles"],
    },
    {
      id: "expedition-outpost-season-7",
      seasonId: "og-season-7",
      name: "Expedition Outpost Split",
      type: "Landmark",
      region: "Snow Biome Edge",
      headline: "A quieter Season 7 option when you want plane pressure without full Frosty contest.",
      loot: 78,
      rotate: 91,
      risk: 29,
      squad: "2-4 players",
      why: "The outpost starts are excellent when your squad values snow-biome movement and safer plane-adjacent rotations over immediate high-profile fights.",
      mobility: ["Zipline access", "Snow-biome vehicle and plane pressure", "Fast mountain-to-lowground transitions"],
      plan: [
        "Loot the outpost quickly and decide whether to continue the split or pivot into the biome.",
        "Use height information before challenging better-looted teams nearby.",
        "Play this as a macro route, not a stubborn fight start.",
      ],
      highlights: ["Safe snow-biome opener", "Strong mobility access", "Flexible split routing"],
    },
    {
      id: "anarchy-season-1",
      seasonId: "og-season-1",
      name: "Anarchy Acres",
      type: "POI",
      region: "North",
      headline: "A dependable farm split with enough space for squads to stabilize early.",
      loot: 84,
      rotate: 78,
      risk: 40,
      squad: "2-4 players",
      why: "Anarchy is one of the cleanest old-school loot paths when your team wants shields, materials, and a calm opening.",
      mobility: ["North road access", "Easy transitions toward Pleasant or Tomato", "Wide farm lanes for early scouting"],
      plan: ["Claim barn and house separately.", "Farm wood before first rotate.", "Leave early if circle pulls hard south."],
      highlights: ["Strong farming", "Low-pressure opener", "Simple team spacing"],
    },
    {
      id: "tomato-season-1",
      seasonId: "og-season-1",
      name: "Tomato Town",
      type: "POI",
      region: "Northeast",
      headline: "A compact reset spot that fits aggressive duos.",
      loot: 76,
      rotate: 83,
      risk: 52,
      squad: "2 players",
      why: "Tomato Town is small but efficient, and it lets confident duos pivot quickly into nearby pressure points.",
      mobility: ["Fast road network", "Short rotate into Wailing or Retail side", "Quick disengage if under-looted"],
      plan: ["Land roof-first for immediate gun access.", "Clear the gas side quickly.", "Rotate before larger teams collapse in."],
      highlights: ["Fast opener", "Quick third-party routes", "Compact combat spacing"],
    },
    {
      id: "bridge-season-1",
      seasonId: "og-season-1",
      name: "Wooden Bridge Split",
      type: "Landmark",
      region: "Southwest",
      headline: "A quiet edge start for players who value macro over chaos.",
      loot: 72,
      rotate: 79,
      risk: 22,
      squad: "1-2 players",
      why: "The bridge split is light on raw loot, but it gives solos and duos a very safe first minute with easy edge routing.",
      mobility: ["Southwest road exit", "Safe edge rotates", "Natural elevation for scouting"],
      plan: ["Take the highest chest first.", "Sweep the cabins before leaving.", "Use edge pathing instead of forcing central fights."],
      highlights: ["Very low contest", "Safe edge play", "Good solo fallback"],
    },
    {
      id: "prison-season-1",
      seasonId: "og-season-1",
      name: "Prison",
      type: "Landmark",
      region: "Southeast",
      headline: "A reliable split with lots of loot if you can manage the long rotate.",
      loot: 86,
      rotate: 65,
      risk: 34,
      squad: "2-4 players",
      why: "Prison gives you more loot than many named POIs, but you need discipline around storm timing because of its isolated position.",
      mobility: ["Road route north", "Cliffside scouting", "Long-path rotates require early commits"],
      plan: ["Secure outer towers first.", "Clear interior cell blocks as a group.", "Rotate the moment zone information appears."],
      highlights: ["Huge chest value", "Great for squads", "Low contest in many lobbies"],
    },
    {
      id: "moisty-season-1",
      seasonId: "og-season-1",
      name: "Moisty Mire",
      type: "POI",
      region: "Southeast",
      headline: "A slower, safer opener built around loot depth and patience.",
      loot: 80,
      rotate: 66,
      risk: 24,
      squad: "2-4 players",
      why: "Moisty is less about tempo and more about entering mid-game healthy, stocked, and uncontested.",
      mobility: ["Edge-map road access", "Low-traffic rotations", "Needs early storm discipline"],
      plan: ["Split the film set and outer huts.", "Prioritize shields over extra ammo greed.", "Leave before the swamp path gets awkward."],
      highlights: ["Safe loot", "Good squad split", "Excellent for placement games"],
    },
    {
      id: "greasy-season-1",
      seasonId: "og-season-1",
      name: "Greasy Grove",
      type: "POI",
      region: "Southwest",
      headline: "A balanced named drop with enough loot and manageable pressure.",
      loot: 85,
      rotate: 76,
      risk: 49,
      squad: "2-4 players",
      why: "Greasy is one of the best all-around Season 1 options when you want a stable named POI without the chaos of Tilted-style fighting.",
      mobility: ["Road routes east and north", "Good hill cover", "Comfortable late rotate staging"],
      plan: ["Take the taco side and split houses cleanly.", "Regroup before leaving the diner area.", "Rotate north with material advantage."],
      highlights: ["Stable named drop", "Good chest coverage", "Manageable contest level"],
    },
    {
      id: "flush-season-1",
      seasonId: "og-season-1",
      name: "Flush Factory",
      type: "POI",
      region: "Far South",
      headline: "A niche edge drop with strong loot and almost no early pressure.",
      loot: 78,
      rotate: 62,
      risk: 16,
      squad: "1-3 players",
      why: "Flush is awkward for central circles, but if you want an uncontested opener, it remains one of the safest drops on the map.",
      mobility: ["Long edge roads", "Natural disengage routes", "Requires early rotate reads"],
      plan: ["Land high on the factory roof.", "Loot in a single sweep to save time.", "Commit to the rotate before the second storm queue forms."],
      highlights: ["Very low contest", "Good metal economy", "Strong solo/duo option"],
    },
    {
      id: "shifty-season-2",
      seasonId: "og-season-2",
      name: "Shifty Shafts",
      type: "POI",
      region: "Southwest",
      headline: "A scrappy fight spot with fast underground loot access.",
      loot: 83,
      rotate: 79,
      risk: 57,
      squad: "2-4 players",
      why: "Shifty rewards teams that are comfortable in tight fight spaces and want a quick material-heavy start.",
      mobility: ["Mine-cover rotations", "Fast route into southern circles", "Nearby elevation resets"],
      plan: ["Own the upper entrances first.", "Collapse through the tunnels together.", "Leave once you have enough metal and shields."],
      highlights: ["Strong metal", "Tight combat control", "Good southern access"],
    },
    {
      id: "greasy-season-2",
      seasonId: "og-season-2",
      name: "Greasy Grove",
      type: "POI",
      region: "Southwest",
      headline: "Still a top stable pick if Tilted is too hot for your lobby.",
      loot: 86,
      rotate: 77,
      risk: 46,
      squad: "2-4 players",
      why: "Greasy stays valuable in Season 2 because it combines chest density with manageable spacing and clean exits.",
      mobility: ["Reliable road exits", "Nearby hills for vision", "Short route into safe southern circles"],
      plan: ["Split the diner and central houses.", "Take the roof tags but avoid overchasing.", "Rotate with mats rather than forcing an extra fight."],
      highlights: ["Balanced risk profile", "Good duo or squad fit", "Consistent shield access"],
    },
    {
      id: "junk-season-2",
      seasonId: "og-season-2",
      name: "Junk Junction",
      type: "POI",
      region: "Far North",
      headline: "A calm metal-rich opener with one of the safest first minutes on the map.",
      loot: 79,
      rotate: 68,
      risk: 21,
      squad: "2-4 players",
      why: "Junk is slow, but it gives squads tons of metal and a very controlled start when they want to avoid early volatility.",
      mobility: ["North road access", "Safe northern edge routes", "Long zones require early movement"],
      plan: ["Claim crane and warehouse first.", "Harvest extra metal before leaving.", "Do not stay too long if the zone is opposite side."],
      highlights: ["Huge metal count", "Very low contest", "Good squad split"],
    },
    {
      id: "wailing-season-2",
      seasonId: "og-season-2",
      name: "Wailing Woods",
      type: "POI",
      region: "Northeast",
      headline: "A safer named drop with enough spread for organized teams.",
      loot: 81,
      rotate: 73,
      risk: 31,
      squad: "2-4 players",
      why: "Wailing plays well for teams who prefer calm starts and can manage longer pathing out of the northeast.",
      mobility: ["Forest edge paths", "North/east disengage routes", "Long circles need early awareness"],
      plan: ["Loot in arcs instead of random wandering.", "Confirm bunker-side pressure before full splitting.", "Rotate before congestion builds on the exits."],
      highlights: ["Predictable pathing", "Low contest", "Strong loot spread"],
    },
    {
      id: "loot-lake-season-2",
      seasonId: "og-season-2",
      name: "Loot Lake Edge",
      type: "Route",
      region: "Center-West",
      headline: "A macro route for teams that want central control without hard committing Tilted.",
      loot: 77,
      rotate: 90,
      risk: 44,
      squad: "2-3 players",
      why: "Playing the edge of Loot Lake lets you stay flexible and take only the fights you choose while holding strong central map access.",
      mobility: ["Central recentering", "Fast pivots into multiple POIs", "Short rotates to most circles"],
      plan: ["Take the outer loot loop first.", "Scout before crossing open water or hills.", "Use your central position to avoid forced storm paths."],
      highlights: ["Excellent macro", "Flexible pressure routes", "Low commitment central start"],
    },
    {
      id: "motel-season-2",
      seasonId: "og-season-2",
      name: "Motel Split",
      type: "Landmark",
      region: "North",
      headline: "Still valuable in Season 2 when you want a clean north-side setup.",
      loot: 79,
      rotate: 82,
      risk: 26,
      squad: "2-4 players",
      why: "Motel remains a dependable split thanks to fast loot sequencing and easy pivots into stronger named locations.",
      mobility: ["North road network", "Fast Pleasant collapse", "Low-traffic north-edge routing"],
      plan: ["Loot parking lot and roof simultaneously.", "Do not linger if bigger POIs nearby are already resolved.", "Rotate based on north ridge information."],
      highlights: ["Safe split", "Good pivot routes", "Solid duo/squad opener"],
    },
    {
      id: "prison-season-2",
      seasonId: "og-season-2",
      name: "Prison",
      type: "Landmark",
      region: "Southeast",
      headline: "A high-loot edge choice for teams comfortable making disciplined rotates.",
      loot: 87,
      rotate: 65,
      risk: 33,
      squad: "2-4 players",
      why: "Prison continues to punch above its weight on pure loot and is often under-contested compared with more fashionable drops.",
      mobility: ["Long southeast road network", "Safe early scouting tower angles", "Rotate timing matters more than fighting"],
      plan: ["Clear the towers first for safety.", "Work inside as a group.", "Rotate the instant the team is ready."],
      highlights: ["Elite loot for a landmark", "Low contest", "Great squad fit"],
    },
    {
      id: "lucky-season-3",
      seasonId: "og-season-3",
      name: "Lucky Landing",
      type: "POI",
      region: "Far South",
      headline: "A neat, efficient split if your team wants safe loot with strong building materials.",
      loot: 84,
      rotate: 69,
      risk: 27,
      squad: "2-4 players",
      why: "Lucky Landing rewards teams that value structure, predictable loot paths, and a calmer first minute over central chaos.",
      mobility: ["Road access north", "Simple edge rotates", "Needs early timing on distant circles"],
      plan: ["Split rooftops and central market cleanly.", "Take materials as you move rather than backtracking.", "Leave once shields and mats are secured."],
      highlights: ["Predictable loot", "Low contest", "Great squad spacing"],
    },
    {
      id: "tomato-temple-season-3",
      seasonId: "og-season-3",
      name: "Tomato Temple",
      type: "POI",
      region: "Northeast",
      headline: "A vertical fight space that offers more upside than its size suggests.",
      loot: 79,
      rotate: 80,
      risk: 54,
      squad: "2-3 players",
      why: "Temple gives aggressive duos and trios clean height-based fights with enough reward to justify the contest.",
      mobility: ["Good north-east road access", "Natural vertical cover", "Fast route into nearby edge paths"],
      plan: ["Land on the temple top if contested.", "Clear height before diving inner loot.", "Leave quickly once you control the area."],
      highlights: ["High-ground control", "Compact aggressive fights", "Quick reset routes"],
    },
    {
      id: "viking-season-3",
      seasonId: "og-season-3",
      name: "Viking Village",
      type: "Landmark",
      region: "West Mountains",
      headline: "An underrated height-based split with solid loot and smart rotate angles.",
      loot: 78,
      rotate: 82,
      risk: 30,
      squad: "2-4 players",
      why: "The village is a strong fallback for teams that want elevation and a lower-contest route into western circles.",
      mobility: ["Downhill exits", "Mountain scouting", "Good western disengage routes"],
      plan: ["Take the top structures first.", "Use high ground to count contesting teams.", "Rotate down the safe side instead of dropping blind."],
      highlights: ["Safe elevation", "Good visibility", "Low contest landmark"],
    },
    {
      id: "soccer-season-3",
      seasonId: "og-season-3",
      name: "Soccer Stadium",
      type: "Landmark",
      region: "Southwest",
      headline: "A classic split with solid loot and fast pivots into nearby pressure.",
      loot: 81,
      rotate: 83,
      risk: 43,
      squad: "2-3 players",
      why: "Soccer Stadium sits in a sweet spot between safe opening and quick access to follow-up fights or central rotates.",
      mobility: ["Road access north and east", "Easy pivot to factories or Tilted side", "Natural low-ground cover"],
      plan: ["Claim roof chests and inside split together.", "Use the pitch as a quick regroup point.", "Rotate before more central teams look your way."],
      highlights: ["Fast split loot", "Good pivot options", "Reliable duo start"],
    },
    {
      id: "chair-season-3",
      seasonId: "og-season-3",
      name: "Chair, Race Track, and Gas Station",
      type: "Route",
      region: "Southeast",
      headline: "A landmark chain that gives trios surprising loot depth without POI pressure.",
      loot: 82,
      rotate: 86,
      risk: 25,
      squad: "2-3 players",
      why: "This route is one of the best examples of how non-POI pathing can outperform hot drops when the lobby is aggressive.",
      mobility: ["Strong vehicle access", "Fast southeast road network", "Flexible rotate timing"],
      plan: ["Split the route only if every segment is uncontested.", "Regroup before taking the longest rotation.", "Use the vehicle angle to save time rather than overlooting."],
      highlights: ["Excellent macro route", "Low contest", "Good for trios"],
    },
    {
      id: "wailing-season-3",
      seasonId: "og-season-3",
      name: "Wailing Woods",
      type: "POI",
      region: "Northeast",
      headline: "A safer Season 3 option for teams that want calm loot and clean comms.",
      loot: 82,
      rotate: 74,
      risk: 29,
      squad: "2-4 players",
      why: "Wailing is still a strong choice when you want low early volatility and enough time to plan the mid-game.",
      mobility: ["Forest pathing", "Good east-edge exits", "Long circles need early movement"],
      plan: ["Take the outer loop and keep line-of-sight on each other.", "Clear slowly instead of overextending.", "Rotate off information, not panic."],
      highlights: ["Calm opener", "Good squad coordination", "Predictable routes"],
    },
    {
      id: "junk-season-3",
      seasonId: "og-season-3",
      name: "Junk Junction",
      type: "POI",
      region: "Far North",
      headline: "A comfortable low-pressure opener for squads who want metal and stability.",
      loot: 80,
      rotate: 69,
      risk: 20,
      squad: "2-4 players",
      why: "Junk gives teams plenty of build resources and a calm first minute, which can be worth more than central pressure in aggressive lobbies.",
      mobility: ["North road exits", "Safe edge routes", "Needs early rotation on far circles"],
      plan: ["Claim crane and main warehouse first.", "Harvest extra metal before leaving.", "Rotate before central teams start spreading north."],
      highlights: ["Huge metal value", "Low contest", "Safe squad macro start"],
    },
    {
      id: "greasy-season-4",
      seasonId: "og-season-4",
      name: "Greasy Grove",
      type: "POI",
      region: "Southwest",
      headline: "A stable fight spot when you want more structure than Risky offers.",
      loot: 85,
      rotate: 78,
      risk: 47,
      squad: "2-4 players",
      why: "Greasy continues to be a strong all-around drop thanks to its balance of loot density, spacing, and route control.",
      mobility: ["Good road access", "Hill cover for disengages", "Comfortable south-side rotations"],
      plan: ["Split diner and outer homes cleanly.", "Take only high-value fights early.", "Rotate with material lead."],
      highlights: ["Stable named drop", "Consistent loot", "Good for squads"],
    },
    {
      id: "dusty-season-4",
      seasonId: "og-season-4",
      name: "Dusty Divot",
      type: "POI",
      region: "Center-East",
      headline: "Still one of the best center-biased starts for organized teams.",
      loot: 89,
      rotate: 92,
      risk: 70,
      squad: "3-4 players",
      why: "Dusty stays near the top because it lets good teams play for position rather than chase desperate late rotates.",
      mobility: ["Central routing", "Multiple disengage paths", "Strong cover-based movement"],
      plan: ["Secure outer loot path first.", "Take safe tags from cover instead of dry peeking.", "Rotate before the third-party wave arrives."],
      highlights: ["Strong center control", "High macro value", "Excellent cover"],
    },
    {
      id: "villain-season-4",
      seasonId: "og-season-4",
      name: "Villain Base",
      type: "Landmark",
      region: "Northeast Mountain",
      headline: "A sneaky good high-ground start that can outplay bigger POIs.",
      loot: 79,
      rotate: 85,
      risk: 35,
      squad: "2-3 players",
      why: "Villain Base offers height, loot concentration, and easier scouting than many players expect, making it a strong landmark alternative.",
      mobility: ["Downhill mountain routes", "Strong scouting vision", "Safe disengage off elevation"],
      plan: ["Secure the highest section first.", "Use information before deciding whether to pressure below.", "Rotate early from height."],
      highlights: ["Great elevation", "Smart landmark value", "Good duo/trio fit"],
    },
    {
      id: "hero-season-4",
      seasonId: "og-season-4",
      name: "Hero Mansion",
      type: "Landmark",
      region: "East Coast",
      headline: "A cleaner landmark pick than many teams remember.",
      loot: 77,
      rotate: 81,
      risk: 28,
      squad: "1-3 players",
      why: "Hero Mansion gives you a compact, controllable opener and flexible east-side rotate options without massive contest risk.",
      mobility: ["Coastal rotate lanes", "Simple road exits", "Good vision before moving west"],
      plan: ["Take roof and outer rooms first.", "Do not overstay if the zone is far.", "Use coast-side information before rotating."],
      highlights: ["Compact loot", "Low contest", "Easy comms"],
    },
    {
      id: "motel-season-4",
      seasonId: "og-season-4",
      name: "Motel Split",
      type: "Landmark",
      region: "North",
      headline: "Still one of the best safe north-side starts in stacked lobbies.",
      loot: 79,
      rotate: 83,
      risk: 24,
      squad: "2-4 players",
      why: "Motel remains valuable because it turns low pressure into strong decision-making leverage for the next rotate.",
      mobility: ["North road exits", "Fast pivot into nearby fights", "Low-traffic rotate paths"],
      plan: ["Clear roof and lot simultaneously.", "Scout before committing to Pleasant-side pressure.", "Rotate early if the north edge is quiet."],
      highlights: ["Very safe opener", "Strong pivot routes", "Good squad split"],
    },
    {
      id: "soccer-season-4",
      seasonId: "og-season-4",
      name: "Soccer Stadium",
      type: "Landmark",
      region: "Southwest",
      headline: "A useful mid-risk split for players who like fast tempo without named-POI chaos.",
      loot: 80,
      rotate: 82,
      risk: 42,
      squad: "2-3 players",
      why: "Soccer Stadium gives you just enough loot to transition into strong pressure routes or safe south-side rotates.",
      mobility: ["Road exits", "Quick pivots into nearby landmarks", "Easy regroup in open terrain"],
      plan: ["Clear roof and interior quickly.", "Farm metal if uncontested.", "Rotate early to keep tempo."],
      highlights: ["Fast tempo", "Compact loot", "Good duo option"],
    },
    {
      id: "salty-season-4",
      seasonId: "og-season-4",
      name: "Salty Springs",
      type: "POI",
      region: "Center-South",
      headline: "A classic high-pressure named drop if your team likes quick resets into zone.",
      loot: 82,
      rotate: 88,
      risk: 72,
      squad: "2-4 players",
      why: "Salty is less forgiving than Greasy or Lonely, but it gives you great map positioning if you win cleanly.",
      mobility: ["Excellent central roads", "Quick recentering", "Short rotates to many zones"],
      plan: ["Claim separate houses quickly.", "Collapse on isolated players instead of splitting fights.", "Use the central position immediately after the opener."],
      highlights: ["Great map position", "Fast action", "High recenter value"],
    },
    {
      id: "salty-season-5",
      seasonId: "og-season-5",
      name: "Salty Springs",
      type: "POI",
      region: "Center-South",
      headline: "Still a great named option if you want immediate access to the rest of the map.",
      loot: 83,
      rotate: 89,
      risk: 71,
      squad: "2-4 players",
      why: "Season 5 mobility makes Salty even stronger because its central placement lets winning teams pivot into almost anything.",
      mobility: ["Outstanding central road network", "Easy desert and south pivots", "Fast recenter routes"],
      plan: ["Land separated homes for early control.", "Secure heals before widening the fight.", "Rotate as soon as you win the opener."],
      highlights: ["Top-tier map access", "Fast tempo", "High recenter value"],
    },
    {
      id: "shifty-season-5",
      seasonId: "og-season-5",
      name: "Shifty Shafts",
      type: "POI",
      region: "Southwest",
      headline: "A metal-rich fallback for teams that want structure and cover.",
      loot: 84,
      rotate: 80,
      risk: 55,
      squad: "2-4 players",
      why: "Shifty works well in Season 5 because it gives you compact fighting and strong materials without overexposing your team.",
      mobility: ["Covered exit routes", "Southern road access", "Good regrouping through tunnels"],
      plan: ["Claim high entrances early.", "Play the tunnels together.", "Leave with metal and shields rather than forcing extra tags."],
      highlights: ["Strong materials", "Covered combat", "Good squad cohesion"],
    },
    {
      id: "viking-season-5",
      seasonId: "og-season-5",
      name: "Viking Village",
      type: "Landmark",
      region: "West Mountains",
      headline: "A smart off-meta option for players who value height and low contest.",
      loot: 77,
      rotate: 83,
      risk: 27,
      squad: "2-4 players",
      why: "Viking Village gives squads room to breathe and strong vision before choosing whether to rotate or pressure nearby drops.",
      mobility: ["Mountain exits", "Good scouting before downhill rotates", "Low-traffic west-side routes"],
      plan: ["Take the top structures first.", "Count nearby teams before committing off the mountain.", "Rotate down the safe side."],
      highlights: ["Safe height", "Good information", "Low contest"],
    },
    {
      id: "chair-season-5",
      seasonId: "og-season-5",
      name: "Chair to Racetrack Route",
      type: "Route",
      region: "Southeast",
      headline: "One of the best movement-focused split routes in the late OG meta.",
      loot: 81,
      rotate: 91,
      risk: 26,
      squad: "2-3 players",
      why: "This route is built for players who want vehicles and macro flexibility more than early eliminations.",
      mobility: ["Strong vehicle access", "Excellent southeast road network", "Fast route-saving transitions"],
      plan: ["Take vehicle control first.", "Sweep the route in one direction only.", "Rotate as soon as the path value is secured."],
      highlights: ["Macro-heavy route", "Low contest", "Excellent movement value"],
    },
    {
      id: "flush-season-5",
      seasonId: "og-season-5",
      name: "Flush Factory",
      type: "POI",
      region: "Far South",
      headline: "A niche but effective edge drop for low-pressure games.",
      loot: 79,
      rotate: 64,
      risk: 18,
      squad: "1-3 players",
      why: "Flush is still viable when you need a safe opener and are willing to rotate early instead of chasing central pressure.",
      mobility: ["Long edge roads", "Vehicle-assisted exits", "Requires fast zone decisions"],
      plan: ["Take roof and upper floor first.", "Leave as soon as you are stocked.", "Use the road network to make up distance."],
      highlights: ["Very safe opener", "Good metal", "Great solo option"],
    },
    {
      id: "lucky-season-5",
      seasonId: "og-season-5",
      name: "Lucky Landing",
      type: "POI",
      region: "Far South",
      headline: "A polished low-contest named option with reliable building materials.",
      loot: 85,
      rotate: 70,
      risk: 25,
      squad: "2-4 players",
      why: "Lucky Landing plays extremely cleanly when your team values disciplined loot paths and a calmer early game.",
      mobility: ["Road exits north", "Safe southern pathing", "Needs proactive rotate timing"],
      plan: ["Split rooftops and central structures cleanly.", "Farm enough mats on the move.", "Do not delay your first rotate."],
      highlights: ["Consistent loot", "Low contest", "Great squad structure"],
    },
    {
      id: "tilted-season-5",
      seasonId: "og-season-5",
      name: "Tilted Towers",
      type: "POI",
      region: "Center",
      headline: "Still the highest raw-upside drop if your team can survive the opener.",
      loot: 99,
      rotate: 95,
      risk: 96,
      squad: "2-4 players",
      why: "Season 5 mobility makes Tilted even more rewarding for teams that can convert a chaotic start into strong map control.",
      mobility: ["Central road dominance", "Short rotates to almost every circle", "Fast rooftop disengage paths"],
      plan: ["Land on immediate weapons and split buildings.", "Take advantage of cracked targets instantly.", "Reset and rotate while you still control tempo."],
      highlights: ["Best loot ceiling", "Unmatched map position", "High elimination upside"],
    },
    {
      id: "tilted-season-6",
      seasonId: "og-season-6",
      name: "Tilted Towers",
      type: "POI",
      region: "Center",
      headline: "A risk-heavy central pick that benefits from Season 6 mobility resets.",
      loot: 99,
      rotate: 96,
      risk: 96,
      squad: "2-4 players",
      why: "Tilted remains dominant because even if fights run long, the season's added movement gives winning teams more recovery routes.",
      mobility: ["Central recentering", "Fast pivot to rifts or floating island routes", "Short route to most zones"],
      plan: ["Land with immediate weapon plans.", "Do not split into isolated rooftop duels.", "Use mobility to reset after the opener instead of ego-peeking."],
      highlights: ["Elite loot ceiling", "Best central access", "Huge snowball potential"],
    },
    {
      id: "salty-season-6",
      seasonId: "og-season-6",
      name: "Salty Springs",
      type: "POI",
      region: "Center-South",
      headline: "A compact central start for teams who want speed over comfort.",
      loot: 82,
      rotate: 89,
      risk: 73,
      squad: "2-4 players",
      why: "Salty is still excellent when your team values fast fights and strong access to the cube-era rotate game.",
      mobility: ["Central road access", "Fast routes into floating-island zones", "Good recenter options"],
      plan: ["Take separated homes quickly.", "Push the first advantage together.", "Rotate immediately once the POI is yours."],
      highlights: ["Great recentering", "Fast fights", "Good mid-map tempo"],
    },
    {
      id: "fatal-season-6",
      seasonId: "og-season-6",
      name: "Fatal Fields",
      type: "POI",
      region: "South-Center",
      headline: "Still a strong farming-heavy start if your team wants calm control.",
      loot: 86,
      rotate: 82,
      risk: 44,
      squad: "2-4 players",
      why: "Fatal fits Season 6 well because it gives you enough resources to play into the more volatile rotate environment from a position of strength.",
      mobility: ["Road routes out of south center", "Good visibility for early macro calls", "Easy regrouping in open terrain"],
      plan: ["Take barn and house side efficiently.", "Prioritize materials before leaving.", "Use the open sightlines to choose your rotate."],
      highlights: ["Strong materials", "Low volatility", "Reliable macro start"],
    },
    {
      id: "soccer-season-6",
      seasonId: "og-season-6",
      name: "Soccer Stadium",
      type: "Landmark",
      region: "Southwest",
      headline: "A strong landmark if you want quick tempo without overcommitting to a named POI.",
      loot: 80,
      rotate: 85,
      risk: 41,
      squad: "2-3 players",
      why: "Soccer Stadium remains valuable thanks to its quick loot and easy pressure routes into adjacent zones.",
      mobility: ["Road exits in multiple directions", "Fast south-west pivots", "Easy regrouping"],
      plan: ["Clear roof and field-side loot quickly.", "Take mats only on the path out.", "Rotate to the next zone before central congestion."],
      highlights: ["Fast route value", "Good duo/trio fit", "Smart pressure angles"],
    },
    {
      id: "junk-season-6",
      seasonId: "og-season-6",
      name: "Junk Junction",
      type: "POI",
      region: "Far North",
      headline: "A low-pressure squad start with huge metal and calmer first fights.",
      loot: 80,
      rotate: 69,
      risk: 20,
      squad: "2-4 players",
      why: "Junk is a comfort pick in Season 6 when your team wants to avoid the cube chaos and enter mid-game with strong builds.",
      mobility: ["North road access", "Low-traffic edge paths", "Long zones need early movement"],
      plan: ["Claim crane and central junk piles.", "Harvest the extra metal while uncontested.", "Rotate before the map starts collapsing inward."],
      highlights: ["Huge metal economy", "Very low contest", "Strong squad opener"],
    },
    {
      id: "hero-route-season-6",
      seasonId: "og-season-6",
      name: "Hero Mansion to Coast Route",
      type: "Route",
      region: "East Coast",
      headline: "A safer east-side route that works when central routes are too volatile.",
      loot: 78,
      rotate: 84,
      risk: 24,
      squad: "1-3 players",
      why: "This route gives you a calm opener and a good information advantage before deciding whether to commit inland.",
      mobility: ["Coast-side pathing", "Rift access nearby depending on exact route", "Low-pressure east disengages"],
      plan: ["Sweep one direction only.", "Do not greed every chest on long zones.", "Use the coast information before rotating west."],
      highlights: ["Safe route", "Good information", "Flexible east play"],
    },
    {
      id: "lucky-season-6",
      seasonId: "og-season-6",
      name: "Lucky Landing",
      type: "POI",
      region: "Far South",
      headline: "A low-volatility named drop that helps squads stay clean in a chaotic season.",
      loot: 85,
      rotate: 71,
      risk: 24,
      squad: "2-4 players",
      why: "Lucky Landing works in Season 6 because it gives you structure, reliable loot, and enough calm to decide how you want to interact with the map's new mobility.",
      mobility: ["Road access north", "Safe southern pathing", "Requires early rotates on distant circles"],
      plan: ["Split rooftops and central buildings clearly.", "Farm materials while moving, not after looting.", "Use the road network to recover time on long pulls."],
      highlights: ["Consistent loot", "Low contest", "Great disciplined squad opener"],
    },
    {
      id: "happy-season-7",
      seasonId: "og-season-7",
      name: "Happy Hamlet",
      type: "POI",
      region: "Far South Snow Biome",
      headline: "A loot-rich named option if your team can manage the long snow-biome rotate.",
      loot: 90,
      rotate: 76,
      risk: 41,
      squad: "2-4 players",
      why: "Happy Hamlet offers strong loot density and safer structured fights, making it one of the best grounded alternatives to Frosty.",
      mobility: ["Snow-biome vehicle access", "Good edge-road network", "Needs decisive early movement on far zones"],
      plan: ["Split rooftops and courtyards cleanly.", "Take enough materials before leaving.", "Do not overstay the first zone."],
      highlights: ["Excellent loot", "Structured fights", "Good squad drop"],
    },
    {
      id: "salty-season-7",
      seasonId: "og-season-7",
      name: "Salty Springs",
      type: "POI",
      region: "Center-South",
      headline: "Still one of the easiest ways to play for central control in Season 7.",
      loot: 83,
      rotate: 90,
      risk: 72,
      squad: "2-4 players",
      why: "Salty becomes even stronger when longer rotations punish edge teams, because winning here keeps your macro options wide open.",
      mobility: ["Central road dominance", "Fast route into snow or desert side", "Strong recentering"],
      plan: ["Take separate houses for early control.", "Collapse together on isolated opponents.", "Use your central win immediately."],
      highlights: ["Great map access", "Fast recentering", "High tempo start"],
    },
    {
      id: "shifty-season-7",
      seasonId: "og-season-7",
      name: "Shifty Shafts",
      type: "POI",
      region: "Southwest",
      headline: "A reliable metal-heavy fallback if Frosty gets too crowded.",
      loot: 84,
      rotate: 80,
      risk: 54,
      squad: "2-4 players",
      why: "Shifty stays valuable because it gives you covered fights and strong materials without forcing snow-biome plane contests.",
      mobility: ["Covered exits", "Road path into safe southern circles", "Easy regroup routes"],
      plan: ["Own the top entrances first.", "Play close and coordinated through tunnels.", "Leave with a mat lead."],
      highlights: ["Strong metal", "Covered fights", "Good squad cohesion"],
    },
    {
      id: "lazy-season-7",
      seasonId: "og-season-7",
      name: "Lazy Links",
      type: "POI",
      region: "North",
      headline: "A great measured opener for teams that want clean loot and better north-side routes.",
      loot: 87,
      rotate: 85,
      risk: 48,
      squad: "2-4 players",
      why: "Lazy remains one of the smoothest named drops for organized teams because of its spacing and predictable pathing.",
      mobility: ["Strong north road exits", "Easy regroup paths", "Safe rotations into many first zones"],
      plan: ["Split clubhouse and villas with clear calls.", "Regroup before crossing open ground.", "Use the roads to keep tempo high."],
      highlights: ["Predictable loot", "Good macro routes", "Comfortable team spacing"],
    },
    {
      id: "viking-season-7",
      seasonId: "og-season-7",
      name: "Viking Village",
      type: "Landmark",
      region: "West Mountains",
      headline: "An underrated height-based option when the snow biome is crowded.",
      loot: 78,
      rotate: 84,
      risk: 28,
      squad: "2-4 players",
      why: "Viking Village gives teams information and safer paths before they choose whether to commit to west-side rotations or central pivots.",
      mobility: ["Downhill mountain exits", "Strong scouting", "Good low-contest route planning"],
      plan: ["Secure top structures first.", "Count nearby teams before leaving height.", "Rotate down the safer side."],
      highlights: ["Great information", "Low contest", "Strong landmark value"],
    },
    {
      id: "motel-season-7",
      seasonId: "og-season-7",
      name: "Motel Split",
      type: "Landmark",
      region: "North",
      headline: "A low-pressure north-side route if you want consistency over highlight plays.",
      loot: 78,
      rotate: 82,
      risk: 23,
      squad: "2-4 players",
      why: "Motel continues to be a smart squad split for teams that would rather make calm macro calls than force early fights.",
      mobility: ["North roads", "Fast pivots into nearby POIs", "Low-traffic early routing"],
      plan: ["Take roof and parking lot quickly.", "Decide immediately whether to pivot or stay safe.", "Use high ground for information."],
      highlights: ["Safe north opener", "Good pivot routes", "Very low contest"],
    },
    {
      id: "block-season-7",
      seasonId: "og-season-7",
      name: "The Block",
      type: "POI",
      region: "North",
      headline: "A wildcard named drop with strong loot but more volatility than Lazy or Motel.",
      loot: 88,
      rotate: 79,
      risk: 63,
      squad: "2-4 players",
      why: "The Block is worth including because its loot upside is high, but it demands fast adaptation depending on the specific build and contest.",
      mobility: ["North-side road access", "Quick pivots to adjacent drops", "Short route into northern circles"],
      plan: ["Identify the strongest entry point on approach.", "Play for quick control rather than long trades.", "Rotate before extra pressure arrives."],
      highlights: ["High loot ceiling", "Unique fights", "Good follow-up pressure"],
    },
    {
      id: "hamlet-route-season-7",
      seasonId: "og-season-7",
      name: "Happy Hamlet Perimeter Route",
      type: "Route",
      region: "South Snow Edge",
      headline: "A route-based version of Happy for teams that want safer spacing and cleaner exits.",
      loot: 80,
      rotate: 87,
      risk: 24,
      squad: "2-3 players",
      why: "Playing the outskirts instead of hard-center Happy gives you better control over whether the opener stays calm or turns into a fight.",
      mobility: ["Snow roads", "Good vehicle access", "Safer transition into long rotates"],
      plan: ["Loot perimeter structures first.", "Do not get trapped inside town late.", "Use mobility to beat central congestion."],
      highlights: ["Safer route play", "Good mobility", "Strong macro option"],
    },
  ],
};

const seasonListElement = document.querySelector("#season-list");
const seasonOverviewElement = document.querySelector("#season-overview");
const spotListElement = document.querySelector("#spot-list");
const spotDetailElement = document.querySelector("#spot-detail");
const detailPanelElement = document.querySelector(".detail-panel");
const bestSpotsPanelElement = document.querySelector(".content-column .panel:last-of-type");
const seasonCountElement = document.querySelector("#season-count");
const spotCountElement = document.querySelector("#spot-count");
const appVersionElement = document.querySelector("#app-version");
const appUpdatedElement = document.querySelector("#app-updated");
const quickStartListElement = document.querySelector("#quick-start-list");
const releaseNotesElement = document.querySelector("#release-notes");
const backToTopElement = document.querySelector("#back-to-top");
const versionHistoryModalElement = document.querySelector("#version-history-modal");
const versionHistoryListElement = document.querySelector("#version-history-list");
const closeVersionHistoryElement = document.querySelector("#close-version-history");
const easterEggTriggerElement = document.querySelector("#easter-egg-trigger");
const easterEggToastElement = document.querySelector("#easter-egg-toast");

const state = {
  selectedSeasonId: data.seasons[0].id,
  selectedSpotId: data.spots[0].id,
  selectedTypeFilter: "All",
  selectedRiskFilter: "all",
};

let easterEggTimeoutId = null;

const SPOT_MAP_META = {
  "Pleasant Park": { x: 23, y: 22, grid: "NW", hint: "Northwest neighborhood above Loot Lake." },
  "Retail Row": { x: 77, y: 43, grid: "E", hint: "East side neighborhood near the Retail hill belt." },
  "Tilted Towers": { x: 43, y: 37, grid: "Center", hint: "Central city west of Dusty and south of Loot Lake." },
  "Snobby Shores": { x: 14, y: 41, grid: "W", hint: "West coast mansion strip above Greasy." },
  "Dusty Divot": { x: 57, y: 43, grid: "Center-East", hint: "Center-east crater between Salty and Retail routes." },
  "Fatal Fields": { x: 54, y: 67, grid: "South-Center", hint: "South-central farm below Salty." },
  "Risky Reels": { x: 61, y: 19, grid: "North", hint: "Northern film lot east of Tomato route." },
  "Lonely Lodge": { x: 84, y: 39, grid: "East", hint: "Far east forest tower area near the coastline." },
  "Paradise Palms": { x: 78, y: 77, grid: "SE", hint: "Southeast desert city below the racetrack." },
  "Lazy Links": { x: 48, y: 16, grid: "North", hint: "North-central golf course above Loot Lake." },
  "Loot Lake": { x: 38, y: 34, grid: "Center-West", hint: "Central lake just northwest of Tilted." },
  "Wailing Woods": { x: 83, y: 28, grid: "NE", hint: "Northeast forest beyond Tomato side." },
  "Frosty Flights": { x: 18, y: 84, grid: "SW Snow", hint: "Southwest snow biome hangars by the coast." },
  "Polar Peak": { x: 37, y: 83, grid: "South Snow", hint: "South snow mountain overlooking central routes." },
  "Motel Split": { x: 40, y: 10, grid: "North", hint: "North roadside split between Pleasant and Lazy side." },
  "Factories": { x: 20, y: 74, grid: "SW", hint: "Southwest warehouses below Shifty and west of soccer." },
  "Hero Mansion to Villain Base": { x: 79, y: 34, grid: "East Route", hint: "East-side landmark path from coast to mountain." },
  "Container Yard": { x: 34, y: 42, grid: "West-Center", hint: "West-central metal yard between Tilted and Loot Lake." },
  "Desert Racetrack": { x: 72, y: 82, grid: "SE Desert", hint: "Southeast desert track north of Paradise." },
  "Floating Island Edge Route": { x: 44, y: 30, grid: "Center Orbit", hint: "Floating-island path orbiting the center map." },
  "Expedition Outpost Split": { x: 15, y: 70, grid: "Snow Edge", hint: "Snow biome edge outpost line west of Polar routes." },
  "Anarchy Acres": { x: 54, y: 14, grid: "North", hint: "North farm above Tomato and east of Pleasant." },
  "Tomato Town": { x: 69, y: 18, grid: "NE", hint: "Northeast roadside town west of Wailing." },
  "Wooden Bridge Split": { x: 12, y: 73, grid: "SW Edge", hint: "Southwest edge bridge below Snobby and Greasy routes." },
  Prison: { x: 84, y: 79, grid: "SE Edge", hint: "Far southeast prison compound above Moisty." },
  "Moisty Mire": { x: 79, y: 88, grid: "SE", hint: "Far southeast swamp on the edge of the map." },
  "Greasy Grove": { x: 18, y: 61, grid: "SW", hint: "Southwest town west of Shifty." },
  "Flush Factory": { x: 30, y: 92, grid: "South Edge", hint: "Far south factory on the edge of the map." },
  "Shifty Shafts": { x: 28, y: 68, grid: "SW", hint: "Southwest mine north of Greasy and west of Salty." },
  "Junk Junction": { x: 15, y: 8, grid: "NW Edge", hint: "Far northwest junkyard on the map edge." },
  "Lucky Landing": { x: 63, y: 88, grid: "South", hint: "Far south temple town below Fatal." },
  "Tomato Temple": { x: 68, y: 17, grid: "NE", hint: "Northeast temple ridge on Tomato side." },
  "Viking Village": { x: 18, y: 25, grid: "West High", hint: "West mountain village above Snobby and Greasy." },
  "Soccer Stadium": { x: 25, y: 57, grid: "SW", hint: "Southwest stadium near factories and Tilted routes." },
  "Chair, Race Track, and Gas Station": { x: 73, y: 68, grid: "SE Route", hint: "Southeast route chain feeding into desert roads." },
  "Villain Base": { x: 74, y: 24, grid: "NE High", hint: "Northeast mountain base above Retail side." },
  "Hero Mansion": { x: 84, y: 47, grid: "East Coast", hint: "East coast mansion south of Lonely." },
  "Salty Springs": { x: 48, y: 56, grid: "Center-South", hint: "Central-south neighborhood under Dusty." },
  "Hero Mansion to Coast Route": { x: 84, y: 50, grid: "East Route", hint: "East coast route starting at Hero side." },
  "Happy Hamlet": { x: 40, y: 92, grid: "South Snow", hint: "Far south snow town east of Frosty." },
  "The Block": { x: 47, y: 8, grid: "North", hint: "North-central featured POI above Lazy side." },
  "Happy Hamlet Perimeter Route": { x: 43, y: 88, grid: "Snow Edge", hint: "Outer route around Happy Hamlet in the south snow biome." },
};

const MOBILITY_LOCATION_META = {
  "Pleasant Park": { x: 31, y: 28, title: "South road and hills", where: "Check the south exit road and nearby hill route for your fastest safe leave." },
  "Retail Row": { x: 73, y: 38, title: "South road out", where: "Use the south and southeast road side first when you need a clean rotate." },
  "Tilted Towers": { x: 47, y: 31, title: "Rooftop exit line", where: "Use the rooftop side facing out of Tilted for the fastest disengage path." },
  "Snobby Shores": { x: 20, y: 46, title: "Coastal road", where: "The coastal road beside the mansions is the safest early mobility lane." },
  "Dusty Divot": { x: 53, y: 38, title: "Outer rim rotate", where: "Play the outer rim and leave from the cleaner side before center traffic arrives." },
  "Fatal Fields": { x: 58, y: 61, title: "Field road line", where: "The road and fence line north of the farm is usually your quickest low-conflict exit." },
  "Risky Reels": { x: 64, y: 24, title: "North road pullout", where: "Exit along the north road or vehicle side instead of staying in the exposed lot." },
  "Lonely Lodge": { x: 80, y: 34, title: "Tower-side path", where: "Start from the tower side and leave using the east forest trail if zone is awkward." },
  "Paradise Palms": { x: 72, y: 72, title: "Vehicle side streets", where: "Look for mobility on the outer desert roads and the vehicle-friendly town edge." },
  "Lazy Links": { x: 53, y: 21, title: "Cart path exit", where: "The golf-cart paths on the edge of Lazy are your safest movement lanes." },
  "Loot Lake": { x: 41, y: 28, title: "Rift / island access", where: "Mobility is strongest on the floating-island and rift side of Loot Lake." },
  "Wailing Woods": { x: 78, y: 22, title: "Rift side", where: "Head toward the rift-side edge of Wailing first if you need a bailout route." },
  "Frosty Flights": { x: 23, y: 79, title: "Hangar planes", where: "The hangars are the key mobility zone because securing a plane changes your whole rotate." },
  "Polar Peak": { x: 33, y: 77, title: "Downhill exit side", where: "Use the downhill side or nearby snow route before the peak gets pinched." },
  "Motel Split": { x: 44, y: 14, title: "Pleasant pivot line", where: "The road toward Pleasant is your best quick-move option after the split." },
  "Factories": { x: 24, y: 69, title: "South road", where: "Take the southern road system once the warehouses are cleared." },
  "Hero Mansion to Villain Base": { x: 76, y: 30, title: "Route midpoint", where: "Regroup at the midpoint of the route before choosing the next movement lane." },
  "Container Yard": { x: 38, y: 38, title: "Mid-map road line", where: "The outer edge facing Loot Lake gives the cleanest way out after looting." },
  "Desert Racetrack": { x: 69, y: 77, title: "Track vehicle lane", where: "Prioritize the track-side vehicle line before slower looting paths." },
  "Floating Island Edge Route": { x: 48, y: 26, title: "Island orbit path", where: "Follow the floating-island route itself for your safest movement advantage." },
  "Expedition Outpost Split": { x: 20, y: 66, title: "Zipline side", where: "The nearby zipline / snow edge path is the reason this split stays viable." },
  "Anarchy Acres": { x: 58, y: 18, title: "North road", where: "Leave along the north or west road rather than crossing open fields late." },
  "Tomato Town": { x: 65, y: 22, title: "Road bend", where: "The road bend below Tomato is your quickest disengage and rotate lane." },
  "Wooden Bridge Split": { x: 18, y: 69, title: "Bridge road", where: "Use the bridge road and cliff edge to stay out of center-map traffic." },
  Prison: { x: 79, y: 74, title: "Northbound road", where: "The road leaving Prison north is the safest path once you are ready to move." },
  "Moisty Mire": { x: 74, y: 83, title: "Outer swamp edge", where: "Mobility is mostly about leaving on the outer edge before the swamp slows you down." },
  "Greasy Grove": { x: 23, y: 56, title: "East road", where: "The east road and nearby hill cover usually provide the cleanest rotate." },
  "Flush Factory": { x: 34, y: 87, title: "Edge road", where: "Use the southern edge road immediately; lingering here usually costs storm timing." },
  "Shifty Shafts": { x: 31, y: 63, title: "Mine exit", where: "Leave through the safer mine exit and reconnect on the outer road." },
  "Junk Junction": { x: 19, y: 13, title: "North edge roads", where: "Mobility is all about using the north edge route before circles pull too far away." },
  "Lucky Landing": { x: 60, y: 83, title: "North road out", where: "The road north of Lucky is the key path once your loot route is complete." },
  "Tomato Temple": { x: 64, y: 22, title: "Temple ridge side", where: "Use the ridge edge for a cleaner exit instead of getting trapped low." },
  "Viking Village": { x: 23, y: 29, title: "Downhill mountain lane", where: "The downhill lane off the village is your safest reposition path." },
  "Soccer Stadium": { x: 29, y: 52, title: "Outer road and parking side", where: "Use the outer road and parking-side exit once you finish the split." },
  "Chair, Race Track, and Gas Station": { x: 69, y: 63, title: "Vehicle chain", where: "The route is strongest when you secure the vehicle segment early." },
  "Villain Base": { x: 69, y: 28, title: "Mountain drop side", where: "Move off the mountain from the safer backside after you scout nearby teams." },
  "Hero Mansion": { x: 79, y: 43, title: "Coast road", where: "The coast road beside the mansion is the easiest clean rotate lane." },
  "Salty Springs": { x: 53, y: 52, title: "Road crossroads", where: "Use the nearest road crossing early before bigger central teams collapse in." },
  "Hero Mansion to Coast Route": { x: 79, y: 47, title: "Coastline route", where: "Stay on the coast route for the lowest-conflict movement path." },
  "Happy Hamlet": { x: 44, y: 87, title: "Snow road out", where: "Leave via the snow road and mobility side rather than getting trapped in town." },
  "The Block": { x: 51, y: 12, title: "North pullout", where: "Use the north pullout lane before nearby teams pinch from Lazy or Motel side." },
  "Happy Hamlet Perimeter Route": { x: 47, y: 84, title: "Perimeter path", where: "The perimeter snow route is the whole point of this recommendation." },
};

function getSpotMapMeta(spot) {
  return SPOT_MAP_META[spot.name] || {
    x: 50,
    y: 50,
    grid: spot.region,
    hint: `${spot.region} side of the map.`
  };
}

function getMapTheme(spot) {
  const region = `${spot.region} ${spot.name}`.toLowerCase();

  if (region.includes("snow") || region.includes("frosty") || region.includes("polar") || region.includes("happy")) {
    return {
      sky: ["#7DDCFF", "#2A6DFF", "#132A76"],
      island: "#EEF7FF",
      accent: "#A8ECFF",
      marker: "#F7D047",
      biome: "snow",
    };
  }

  if (region.includes("desert") || region.includes("paradise") || region.includes("racetrack")) {
    return {
      sky: ["#FFA95C", "#D06E2A", "#5A2444"],
      island: "#F4C16D",
      accent: "#FFD995",
      marker: "#74D7FF",
      biome: "desert",
    };
  }

  if (region.includes("moisty") || region.includes("wailing") || region.includes("lonely")) {
    return {
      sky: ["#5EDCB1", "#1A8C73", "#10304A"],
      island: "#2E7055",
      accent: "#89EAC6",
      marker: "#F7D047",
      biome: "forest",
    };
  }

  return {
    sky: ["#7BE0FF", "#2878FF", "#12235E"],
    island: "#2D6B4D",
    accent: "#9DEBFF",
    marker: "#F7D047",
    biome: "classic",
  };
}

function getSpotMapImage(spot) {
  const meta = getSpotMapMeta(spot);
  const mobilityMeta = getMobilityLocationMeta(spot);
  const theme = getMapTheme(spot);
  const routeLine = spot.type === "Route";
  const label = spot.name.replace(/&/g, "&amp;");
  const hint = meta.grid.replace(/&/g, "&amp;");
  const dropLabelX = Math.min(meta.x * 6.85 + 26, 600);
  const dropLabelY = Math.max(meta.y * 3.95 - 18, 86);
  const mobilityLabelX = Math.min(mobilityMeta.x * 6.85 + 28, 590);
  const mobilityLabelY = Math.min(mobilityMeta.y * 3.95 + 42, 332);

  const biomeOverlay = theme.biome === "snow"
    ? '<path d="M118 156C168 120 244 122 314 134C377 145 430 180 486 182C541 184 578 162 618 146L640 248C586 264 520 284 458 280C401 276 358 250 293 246C220 241 166 259 90 286L78 196C90 182 102 168 118 156Z" fill="#F5FBFF" fill-opacity="0.52"/>'
    : theme.biome === "desert"
      ? '<path d="M466 182C530 164 597 158 642 176L648 292C603 309 541 319 488 318C436 317 392 304 366 286C386 250 413 216 466 182Z" fill="#F7C972" fill-opacity="0.58"/>'
      : theme.biome === "forest"
        ? '<circle cx="548" cy="144" r="78" fill="#5FD3A5" fill-opacity="0.22"/><circle cx="154" cy="126" r="64" fill="#72E0B7" fill-opacity="0.18"/>'
        : '<circle cx="204" cy="118" r="66" fill="#90E7FF" fill-opacity="0.12"/><circle cx="552" cy="246" r="82" fill="#F7D047" fill-opacity="0.10"/>';

  const routeSvg = routeLine
    ? `<path d="M${Math.max(meta.x - 12, 10) * 6.8} ${Math.max(meta.y - 10, 10) * 3.9} Q ${meta.x * 6.8} ${meta.y * 3.9} ${Math.min(meta.x + 14, 92) * 6.8} ${Math.min(meta.y + 12, 90) * 3.9}" stroke="${theme.marker}" stroke-width="7" stroke-linecap="round" stroke-dasharray="10 12" fill="none"/>`
    : "";

  const svg = `
  <svg width="720" height="460" viewBox="0 0 720 460" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky" x1="96" y1="34" x2="626" y2="360" gradientUnits="userSpaceOnUse">
        <stop stop-color="${theme.sky[0]}"/>
        <stop offset="0.48" stop-color="${theme.sky[1]}"/>
        <stop offset="1" stop-color="${theme.sky[2]}"/>
      </linearGradient>
      <filter id="shadow" x="0" y="0" width="720" height="460" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#06112B" flood-opacity="0.28"/>
      </filter>
    </defs>
    <rect width="720" height="460" rx="28" fill="#081534"/>
    <rect x="18" y="18" width="684" height="340" rx="24" fill="url(#sky)"/>
    <g filter="url(#shadow)">
      <path d="M72 238C104 175 170 136 244 120C318 104 392 104 446 122C498 139 532 168 586 176C622 182 650 180 672 168L650 296C610 320 556 338 496 340C418 343 354 326 292 318C214 308 144 318 74 340L52 268C58 256 64 246 72 238Z" fill="${theme.island}" fill-opacity="0.94" stroke="${theme.accent}" stroke-width="6"/>
      <path d="M182 178C214 154 266 146 316 151C368 156 416 174 452 177C486 180 520 168 546 154L558 216C530 232 484 244 438 240C386 236 346 212 292 208C252 205 218 214 180 230L170 194L182 178Z" fill="#1D5CA9" fill-opacity="0.26"/>
      ${biomeOverlay}
      <ellipse cx="314" cy="196" rx="54" ry="28" fill="#79D7FF" fill-opacity="0.45" stroke="#D9F7FF" stroke-width="4"/>
      <path d="M116 210C138 188 164 171 196 156" stroke="${theme.accent}" stroke-opacity="0.56" stroke-width="5" stroke-linecap="round"/>
      <path d="M486 260C520 240 566 234 614 240" stroke="${theme.accent}" stroke-opacity="0.44" stroke-width="5" stroke-linecap="round"/>
      ${routeSvg}
      <path d="M${meta.x * 6.85} 46V326" stroke="#F8FBFF" stroke-opacity="0.2" stroke-width="2" stroke-dasharray="5 8"/>
      <path d="M54 ${meta.y * 3.95}H666" stroke="#F8FBFF" stroke-opacity="0.2" stroke-width="2" stroke-dasharray="5 8"/>
      <g transform="translate(${meta.x * 6.85}, ${meta.y * 3.95})">
        <circle r="16" fill="${theme.marker}" stroke="white" stroke-width="5"/>
        <circle r="34" fill="${theme.marker}" fill-opacity="0.22"/>
        <path d="M0 -34L10 -16H-10L0 -34Z" fill="${theme.marker}"/>
      </g>
      <g transform="translate(${mobilityMeta.x * 6.85}, ${mobilityMeta.y * 3.95})">
        <rect x="-14" y="-14" width="28" height="28" rx="8" fill="#74D7FF" stroke="white" stroke-width="4"/>
        <rect x="-28" y="-28" width="56" height="56" rx="14" fill="#74D7FF" fill-opacity="0.16"/>
      </g>
    </g>
    <rect x="34" y="30" width="222" height="46" rx="16" fill="#09173A" fill-opacity="0.82" stroke="${theme.accent}" stroke-opacity="0.45" stroke-width="2"/>
    <text x="54" y="58" fill="#F5FBFF" font-family="Segoe UI, Arial, sans-serif" font-size="19" font-weight="800">${label}</text>
    <text x="590" y="58" fill="#D3EEFF" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700" text-anchor="end">${hint}</text>
    <rect x="${dropLabelX - 12}" y="${dropLabelY - 24}" width="116" height="34" rx="12" fill="#09173A" fill-opacity="0.88" stroke="${theme.marker}" stroke-opacity="0.65" stroke-width="2"/>
    <text x="${dropLabelX}" y="${dropLabelY - 2}" fill="#FFF8D7" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="800">LAND HERE</text>
    <rect x="${mobilityLabelX - 12}" y="${mobilityLabelY - 24}" width="154" height="34" rx="12" fill="#09173A" fill-opacity="0.88" stroke="#74D7FF" stroke-opacity="0.7" stroke-width="2"/>
    <text x="${mobilityLabelX}" y="${mobilityLabelY - 2}" fill="#CFF3FF" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="800">MOBILITY HERE</text>
    <rect x="24" y="374" width="672" height="62" rx="18" fill="#09173A" fill-opacity="0.92" stroke="#2A507A" stroke-width="2"/>
    <circle cx="56" cy="405" r="10" fill="${theme.marker}" stroke="white" stroke-width="3"/>
    <text x="78" y="410" fill="#F5FBFF" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700">Yellow marker = landing point</text>
    <rect x="378" y="394" width="20" height="20" rx="5" fill="#74D7FF" stroke="white" stroke-width="3"/>
    <text x="408" y="410" fill="#BEEBFF" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700">Blue marker = mobility</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getMobilityProfile(spot) {
  const joined = spot.mobility.join(" ").toLowerCase();

  if (joined.includes("stormwing") || joined.includes("plane")) {
    return { label: "Plane access", emphasis: "Secure aircraft early for the safest long rotate." };
  }
  if (joined.includes("rift")) {
    return { label: "Rift nearby", emphasis: "Use the rift as your emergency recenter and storm bailout." };
  }
  if (joined.includes("floating island")) {
    return { label: "Island route", emphasis: "Let island movement create a quiet recenter instead of forcing ground fights." };
  }
  if (joined.includes("vehicle")) {
    return { label: "Vehicle route", emphasis: "Grab the vehicle first so you can leave before map traffic collapses in." };
  }
  if (joined.includes("zipline")) {
    return { label: "Zipline path", emphasis: "Use the zipline route for controlled elevation changes without overexposing." };
  }
  if (joined.includes("road")) {
    return { label: "Road rotate", emphasis: "Leave on the road network early to stay ahead of central congestion." };
  }
  if (joined.includes("mountain") || joined.includes("downhill") || joined.includes("height")) {
    return { label: "Height path", emphasis: "Use elevation to scout, then rotate down after the main traffic passes." };
  }

  return { label: "Mobility route", emphasis: "Use the nearest quiet path to preserve health, mats, and timing." };
}

function getMobilityLocationMeta(spot) {
  const mapMeta = getSpotMapMeta(spot);
  return MOBILITY_LOCATION_META[spot.name] || {
    x: Math.min(mapMeta.x + 6, 92),
    y: Math.min(mapMeta.y + 6, 92),
    title: "Nearest exit route",
    where: "Use the nearest quiet exit lane or movement tool as soon as your team is ready to rotate."
  };
}

function getSelectedSeason() {
  return data.seasons.find((season) => season.id === state.selectedSeasonId);
}

function getSeasonSpots(seasonId) {
  return data.spots
    .filter((spot) => spot.seasonId === seasonId)
    .sort((left, right) => placementScore(right) - placementScore(left));
}

function placementScore(spot) {
  const safety = 100 - spot.risk;
  const baseline = (spot.loot * 0.95) + (spot.rotate * 1.2) + (safety * 1.55);
  const offMetaBonus = spot.type === "POI" ? 0 : 8;
  return Math.round(baseline + offMetaBonus);
}

function getSelectedSpot() {
  const seasonSpots = getFilteredSeasonSpots(getSeasonSpots(state.selectedSeasonId));
  const selectedSpot = seasonSpots.find((spot) => spot.id === state.selectedSpotId);
  return selectedSpot || seasonSpots[0] || null;
}

function scorePill(label, value) {
  return `
    <article class="score-pill">
      <span class="score-label">${label}</span>
      <strong class="score-value">${value}</strong>
    </article>
  `;
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function scrollElementIntoView(element) {
  if (!element) {
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function getRiskBucket(spot) {
  if (spot.risk <= 34) {
    return "low";
  }
  if (spot.risk <= 64) {
    return "medium";
  }
  return "high";
}

function getFilteredSeasonSpots(seasonSpots) {
  return seasonSpots.filter((spot) => {
    const typeMatches = state.selectedTypeFilter === "All" || spot.type === state.selectedTypeFilter;
    const riskMatches = state.selectedRiskFilter === "all" || getRiskBucket(spot) === state.selectedRiskFilter;
    return typeMatches && riskMatches;
  });
}

function syncSelectedSpotWithFilters(filteredSpots) {
  const currentSelected = filteredSpots.find((spot) => spot.id === state.selectedSpotId);
  if (!currentSelected) {
    state.selectedSpotId = filteredSpots.length > 0 ? filteredSpots[0].id : null;
  }
}

function moveSelectedSpot(direction) {
  const filteredSpots = getFilteredSeasonSpots(getSeasonSpots(state.selectedSeasonId));
  if (filteredSpots.length === 0) {
    return;
  }

  const currentIndex = Math.max(filteredSpots.findIndex((spot) => spot.id === state.selectedSpotId), 0);
  const nextIndex = (currentIndex + direction + filteredSpots.length) % filteredSpots.length;
  state.selectedSpotId = filteredSpots[nextIndex].id;
  renderSpotList();
  renderSpotDetail();
}

function renderUtilityLists() {
  if (quickStartListElement) {
    quickStartListElement.innerHTML = QUICK_START_STEPS
      .map((item, index) => `
        <article class="utility-item">
          <span class="utility-index">0${index + 1}</span>
          <p class="utility-copy">${item}</p>
        </article>
      `)
      .join("");
  }

  if (releaseNotesElement) {
    releaseNotesElement.innerHTML = RELEASE_NOTES
      .map((item) => `
        <article class="utility-item utility-item-note">
          <span class="utility-dot"></span>
          <p class="utility-copy">${item}</p>
        </article>
      `)
      .join("");
  }
}

function renderVersionHistory() {
  if (!versionHistoryListElement) {
    return;
  }

  versionHistoryListElement.innerHTML = VERSION_HISTORY
    .map((entry) => `
      <article class="version-entry">
        <div class="version-entry-head">
          <h3 class="version-entry-title">${entry.version}</h3>
          <span class="version-entry-date">${entry.updated}</span>
        </div>
        <div class="version-entry-list">
          ${entry.changes.map((item) => `<p class="version-entry-change">${item}</p>`).join("")}
        </div>
      </article>
    `)
    .join("");
}

function openVersionHistory() {
  if (!versionHistoryModalElement) {
    return;
  }

  versionHistoryModalElement.classList.add("visible");
  versionHistoryModalElement.setAttribute("aria-hidden", "false");
}

function closeVersionHistory() {
  if (!versionHistoryModalElement) {
    return;
  }

  versionHistoryModalElement.classList.remove("visible");
  versionHistoryModalElement.setAttribute("aria-hidden", "true");
}

function renderSeasonList() {
  seasonListElement.innerHTML = data.seasons
    .map((season) => `
      <button
        class="season-button ${season.id === state.selectedSeasonId ? "active" : ""} ${season.comingSoon ? "coming-soon" : ""}"
        type="button"
        data-season-id="${season.id}"
        style="background:${season.gradient};"
      >
        <div class="season-title-row">
          <h3>${season.title}</h3>
          <span class="spot-region">${season.comingSoon ? "Soon" : `${getSeasonSpots(season.id).length} spots`}</span>
        </div>
        <p class="season-summary">${season.subtitle}</p>
        ${season.comingSoon ? '<span class="coming-soon-badge">No live picks yet</span>' : ""}
      </button>
    `)
    .join("");

  for (const button of seasonListElement.querySelectorAll("[data-season-id]")) {
    button.addEventListener("click", () => {
      const { seasonId } = button.dataset;
      state.selectedSeasonId = seasonId;
      const firstSeasonSpot = getSeasonSpots(seasonId)[0];
      state.selectedSpotId = firstSeasonSpot ? firstSeasonSpot.id : null;
      render();
      if (isMobileLayout()) {
        scrollElementIntoView(bestSpotsPanelElement || seasonOverviewElement);
      }
    });
  }
}

function renderSeasonOverview() {
  const season = getSelectedSeason();
  if (!season) {
    seasonOverviewElement.innerHTML = "";
    return;
  }

  seasonOverviewElement.style.background = season.gradient;
  seasonOverviewElement.innerHTML = `
    <p class="eyebrow">Current Focus</p>
    <h2 class="overview-title">${season.title}</h2>
    <p class="overview-subtitle">${season.subtitle}</p>
    <p class="overview-copy">${season.overview}</p>
    <div class="overview-meta">
      <article class="meta-pill">
        <span class="meta-pill-label">Meta</span>
        <strong class="meta-pill-value">${season.style}</strong>
      </article>
      <article class="meta-pill">
        <span class="meta-pill-label">Best For</span>
        <strong class="meta-pill-value">${season.bestFor}</strong>
      </article>
    </div>
    ${season.comingSoon ? '<p class="coming-soon-note">Season 8 is teased here as a preview only. Recommendations will update once Epic confirms the live OG map and mobility pool.</p>' : ""}
  `;
}

function renderSpotList() {
  const seasonSpots = getSeasonSpots(state.selectedSeasonId);

  if (seasonSpots.length === 0) {
    spotListElement.innerHTML = `
      <article class="empty-state">
        <p class="detail-kicker">Season 8 Preview</p>
        <h3 class="detail-title">Recommendations are not live yet.</h3>
        <p class="detail-copy">We are holding this space for the official OG Season 8 rollout so the drop advice stays accurate when the season actually lands.</p>
      </article>
    `;
    renderSpotDetail();
    return;
  }

  const filteredSpots = getFilteredSeasonSpots(seasonSpots);
  syncSelectedSpotWithFilters(filteredSpots);
  const selectedSpot = filteredSpots.find((spot) => spot.id === state.selectedSpotId) || null;
  const selectedIndex = selectedSpot ? filteredSpots.findIndex((spot) => spot.id === selectedSpot.id) : -1;

  spotListElement.innerHTML = `
    <section class="spot-browser-shell">
      <div class="spot-controls-panel">
        <div class="spot-filter-row">
          <div class="spot-filter-group" aria-label="Drop type filter">
            ${["All", "POI", "Landmark", "Route"].map((label) => `
              <button
                class="filter-chip ${state.selectedTypeFilter === label ? "active" : ""}"
                type="button"
                data-type-filter="${label}"
              >
                ${label}
              </button>
            `).join("")}
          </div>
          <label class="spot-select-shell">
            <span class="spot-select-label">Conflict</span>
            <select id="risk-filter" class="spot-select">
              <option value="all" ${state.selectedRiskFilter === "all" ? "selected" : ""}>Any risk</option>
              <option value="low" ${state.selectedRiskFilter === "low" ? "selected" : ""}>Low conflict</option>
              <option value="medium" ${state.selectedRiskFilter === "medium" ? "selected" : ""}>Balanced</option>
              <option value="high" ${state.selectedRiskFilter === "high" ? "selected" : ""}>Higher risk</option>
            </select>
          </label>
          <label class="spot-select-shell spot-select-shell-wide">
            <span class="spot-select-label">Selected drop</span>
            <select id="spot-selector" class="spot-select">
              ${filteredSpots.map((spot) => `
                <option value="${spot.id}" ${spot.id === state.selectedSpotId ? "selected" : ""}>
                  ${spot.name} (${spot.region})
                </option>
              `).join("")}
            </select>
          </label>
        </div>
        <div class="spot-browser-meta">
          <p class="spot-browser-summary">${filteredSpots.length} matching drops in ${getSelectedSeason().title}</p>
          <div class="spot-nav-row">
            <button class="spot-nav-button" type="button" data-spot-nav="-1" ${filteredSpots.length <= 1 ? "disabled" : ""}>Previous</button>
            <span class="spot-nav-count">${selectedSpot ? `${selectedIndex + 1} / ${filteredSpots.length}` : "0 / 0"}</span>
            <button class="spot-nav-button" type="button" data-spot-nav="1" ${filteredSpots.length <= 1 ? "disabled" : ""}>Next</button>
          </div>
        </div>
      </div>
      ${selectedSpot ? `
        <article class="spot-focus-card">
          <div class="spot-focus-top">
            <div>
              <p class="detail-kicker">${selectedSpot.region}</p>
              <h3 class="spot-name">${selectedSpot.name}</h3>
            </div>
            <div class="spot-focus-pills">
              <div class="meta-pill">
                <span class="meta-pill-label">Type</span>
                <strong class="meta-pill-value">${selectedSpot.type}</strong>
              </div>
              <div class="meta-pill">
                <span class="meta-pill-label">Ideal Team</span>
                <strong class="meta-pill-value">${selectedSpot.squad}</strong>
              </div>
            </div>
          </div>
          <p class="spot-headline">${selectedSpot.headline}</p>
          <div class="spot-intel-row">
            <span class="spot-chip">Map: ${getSpotMapMeta(selectedSpot).grid}</span>
            <span class="spot-chip spot-chip-mobility">${getMobilityProfile(selectedSpot).label}</span>
            <span class="spot-chip">Conflict: ${getRiskBucket(selectedSpot) === "low" ? "Low" : getRiskBucket(selectedSpot) === "medium" ? "Balanced" : "High"}</span>
          </div>
          <div class="spot-score-row">
            ${scorePill("Placement", placementScore(selectedSpot))}
            ${scorePill("Loot", selectedSpot.loot)}
            ${scorePill("Rotate", selectedSpot.rotate)}
            ${scorePill("Risk", selectedSpot.risk)}
          </div>
          <div class="spot-focus-actions">
            <button class="spot-open-button" type="button" data-open-breakdown="true">Open Drop Breakdown</button>
          </div>
        </article>
      ` : `
        <article class="empty-state">
          <p class="detail-kicker">No matches</p>
          <h3 class="detail-title">No drops fit that filter combination.</h3>
          <p class="detail-copy">Try switching the conflict filter or returning to all drop types.</p>
          <button class="spot-open-button" type="button" data-reset-filters="true">Reset filters</button>
        </article>
      `}
    </section>
  `;

  for (const button of spotListElement.querySelectorAll("[data-type-filter]")) {
    button.addEventListener("click", () => {
      state.selectedTypeFilter = button.dataset.typeFilter;
      renderSpotList();
      renderSpotDetail();
    });
  }

  const riskFilterElement = spotListElement.querySelector("#risk-filter");
  if (riskFilterElement) {
    riskFilterElement.addEventListener("change", (event) => {
      state.selectedRiskFilter = event.target.value;
      renderSpotList();
      renderSpotDetail();
    });
  }

  const spotSelectorElement = spotListElement.querySelector("#spot-selector");
  if (spotSelectorElement) {
    spotSelectorElement.addEventListener("change", (event) => {
      state.selectedSpotId = event.target.value;
      renderSpotList();
      renderSpotDetail();
      if (isMobileLayout()) {
        scrollElementIntoView(detailPanelElement);
      }
    });
  }

  for (const button of spotListElement.querySelectorAll("[data-spot-nav]")) {
    button.addEventListener("click", () => {
      moveSelectedSpot(Number(button.dataset.spotNav));
    });
  }

  const openBreakdownButton = spotListElement.querySelector("[data-open-breakdown]");
  if (openBreakdownButton) {
    openBreakdownButton.addEventListener("click", () => {
      renderSpotDetail();
      scrollElementIntoView(detailPanelElement);
    });
  }

  const resetFiltersButton = spotListElement.querySelector("[data-reset-filters]");
  if (resetFiltersButton) {
    resetFiltersButton.addEventListener("click", () => {
      state.selectedTypeFilter = "All";
      state.selectedRiskFilter = "all";
      renderSpotList();
      renderSpotDetail();
    });
  }
}

function renderSpotDetail() {
  const spot = getSelectedSpot();
  const season = getSelectedSeason();

  if (!spot && season && season.comingSoon) {
    spotDetailElement.innerHTML = `
      <section class="detail-block">
        <p class="detail-kicker">Coming soon</p>
        <h3 class="detail-title">Season 8 scouting board</h3>
        <p class="detail-copy">Expected themes include pirate camps, treasure-focused reroutes, cannons, and faster reposition plays. Once Epic confirms the season is live, this panel can switch from teaser mode to real drop plans.</p>
      </section>
    `;
    return;
  }

  if (!spot) {
    spotDetailElement.innerHTML = '<p class="detail-empty">Choose a season to see matching drop spots.</p>';
    return;
  }

  const mobilityProfile = getMobilityProfile(spot);
  const mobilityLocation = getMobilityLocationMeta(spot);
  const mapMeta = getSpotMapMeta(spot);

  spotDetailElement.innerHTML = `
    <section class="detail-block">
      <p class="detail-kicker">Map read</p>
      <img class="drop-map-image" src="${getSpotMapImage(spot)}" alt="Stylized Fortnite island map showing the location of ${spot.name}">
      <div class="map-read-card">
        <div class="map-read-grid">
          <article class="map-read-pill">
            <span class="map-read-label">Land on</span>
            <strong class="map-read-value">${mapMeta.hint}</strong>
          </article>
          <article class="map-read-pill">
            <span class="map-read-label">Mobility</span>
            <strong class="map-read-value">${mobilityLocation.title}</strong>
          </article>
        </div>
        <p class="map-read-copy">${mobilityLocation.where}</p>
      </div>
    </section>

    <section class="detail-block">
      <p class="detail-kicker">${spot.region}</p>
      <h3 class="detail-title">${spot.name}</h3>
      <p class="detail-copy">${spot.headline}</p>
    </section>

    <section class="detail-block">
      <div class="detail-score-row">
        ${scorePill("Type", spot.type)}
        ${scorePill("Team", spot.squad)}
      </div>
    </section>

    <section class="detail-block">
      <div class="detail-score-row">
        ${scorePill("Placement", placementScore(spot))}
        ${scorePill("Loot", spot.loot)}
        ${scorePill("Rotate", spot.rotate)}
        ${scorePill("Risk", spot.risk)}
      </div>
    </section>

    <section class="detail-block">
      <p class="detail-kicker">Why it works</p>
      <p class="detail-copy">${spot.why}</p>
    </section>

    <section class="detail-block">
      <p class="detail-kicker">Mobility anchor</p>
      <div class="mobility-highlight">
        <div class="mobility-highlight-label">${mobilityProfile.label}</div>
        <p class="detail-copy">${mobilityProfile.emphasis}</p>
      </div>
    </section>

    <section class="detail-block">
      <p class="detail-kicker">Where to find it</p>
      <div class="mobility-location-card">
        <div class="mobility-location-head">
          <div class="mobility-location-title">${mobilityLocation.title}</div>
          <div class="mobility-location-grid">Map point ${Math.round(mobilityLocation.x)}/${Math.round(mobilityLocation.y)}</div>
        </div>
        <p class="detail-copy">${mobilityLocation.where}</p>
      </div>
    </section>

    <section class="detail-block">
      <p class="detail-kicker">Mobility options</p>
      <div class="mobility-grid">
        ${spot.mobility.map((item) => `<article class="mobility-card">${item}</article>`).join("")}
      </div>
    </section>

    <section class="detail-block">
      <p class="detail-kicker">Opening route</p>
      <ol class="plan-list">
        ${spot.plan.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </section>

    <section class="detail-block">
      <p class="detail-kicker">Loot highlights</p>
      <ul class="loot-list">
        ${spot.highlights.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderStats() {
  seasonCountElement.textContent = String(data.seasons.length);
  spotCountElement.textContent = String(data.spots.length);
  if (appVersionElement) {
    appVersionElement.textContent = APP_VERSION;
  }
  if (appUpdatedElement) {
    appUpdatedElement.textContent = `Updated ${APP_UPDATED}`;
  }
}

function render() {
  renderStats();
  renderUtilityLists();
  renderVersionHistory();
  renderSeasonList();
  renderSeasonOverview();
  renderSpotList();
  renderSpotDetail();
}

function syncBackToTopVisibility() {
  if (!backToTopElement) {
    return;
  }

  const isVisible = window.scrollY > 520;
  backToTopElement.classList.toggle("visible", isVisible);
}

function revealEasterEgg() {
  if (!easterEggToastElement) {
    return;
  }

  easterEggToastElement.textContent = "Jesus Christ Richard";
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

if (easterEggTriggerElement) {
  easterEggTriggerElement.addEventListener("click", revealEasterEgg);
}

if (backToTopElement) {
  backToTopElement.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (appVersionElement) {
  appVersionElement.addEventListener("click", openVersionHistory);
}

if (closeVersionHistoryElement) {
  closeVersionHistoryElement.addEventListener("click", closeVersionHistory);
}

if (versionHistoryModalElement) {
  versionHistoryModalElement.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.closeVersionHistory === "true") {
      closeVersionHistory();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVersionHistory();
  }
});

window.addEventListener("scroll", syncBackToTopVisibility, { passive: true });

render();
syncBackToTopVisibility();
