function buildLiveRaidIntel(content) {
  const releases = content.releases ?? [];
  const materialFamilies = content.materialFamilies ?? [];
  const machines = content.machines ?? [];
  const latestRelease = releases[0];
  const latestMaterialFamily = materialFamilies[0];
  const hottestMachine = machines[0];

  return {
    entry: [
      {
        id: "entry-hot-zone",
        text: `Hot zone: ${latestRelease?.title ?? "Spaceport"} pressure up`,
        tone: "caution"
      },
      {
        id: "entry-trend",
        text: `${latestMaterialFamily?.label ?? "Material"} runs outperforming quests`,
        tone: "ready"
      }
    ],
    brief: [
      {
        id: "brief-hot-zone",
        text: "Players avoiding Spaceport (high danger)",
        tone: "caution"
      },
      {
        id: "brief-trend",
        text: "Material runs outperforming quests",
        tone: "ready"
      },
      {
        id: "brief-shift",
        text: `Behavior shift: route quieter around ${hottestMachine?.name ?? "machine"} lanes`,
        tone: "intel"
      }
    ]
  };
}

function buildPrepIntelSignals(appState) {
  const answers = appState.activeRunPlan?.answers ?? appState.prepDraftAnswers ?? {};
  const signals = [];

  if (answers.goal === "materials") {
    signals.push({ id: "prep-material-trend", text: "Material runs hot. Leave before side fights.", tone: "ready" });
  } else if (answers.goal === "quests") {
    signals.push({ id: "prep-quest-trend", text: "Quest lanes colder. Route tighter and leave faster.", tone: "intel" });
  } else {
    signals.push({ id: "prep-general-trend", text: "Extraction ambush risk increasing", tone: "caution" });
  }

  if (answers.riskTolerance === "high" || answers.aggression === "assertive") {
    signals.push({ id: "prep-risk-shift", text: "Behavior shift: loud pushes getting punished", tone: "danger" });
  } else {
    signals.push({ id: "prep-safe-shift", text: "Behavior shift: slower openings surviving longer", tone: "ready" });
  }

  if (answers.team === "solo") {
    signals.push({ id: "prep-solo-hot-zone", text: "Solo lanes safer off Spaceport routes", tone: "intel" });
  } else {
    signals.push({ id: "prep-team-hot-zone", text: "Squad noise drawing third-party pressure", tone: "caution" });
  }

  return signals.slice(0, 3);
}

export function createContentDeliveryLayer(runtime) {
  const content = runtime?.content ?? {};
  const latestRelease = content.releases?.[0] ?? null;
  const liveRaidIntel = buildLiveRaidIntel(content);

  return {
    sections: [
      {
        id: "learn",
        title: "Learn",
        source: "tracks + lessons",
        count: content.lessons?.length ?? 0,
        strategy: "Transform track and lesson data into intent-based teaching flows."
      },
      {
        id: "quests",
        title: "Quests",
        source: "quest systems",
        count: content.questSystems?.length ?? 0,
        strategy: "Keep quest content goal-oriented and link it to run planning, prep, and extraction decisions."
      },
      {
        id: "materials",
        title: "Materials",
        source: "material families",
        count: content.materialFamilies?.length ?? 0,
        strategy: "Turn stash and progression pressure into guidance instead of static encyclopedia cards."
      },
      {
        id: "updates",
        title: "Updates",
        source: "releases + version history",
        count: content.releases?.length ?? 0,
        strategy: "Connect patch data to behavior and affected guide systems."
      }
    ],
    reusableData: {
      tracks: content.tracks ?? [],
      lessons: content.lessons ?? [],
      releases: content.releases ?? [],
      questSystems: content.questSystems ?? [],
      materialFamilies: content.materialFamilies ?? [],
      machines: content.machines ?? [],
      prepChecklist: content.prepChecklist ?? []
    },
    referenceArchive: {
      title: "Reference Archive",
      summary: "Deep browsing remains available, but only as backup intelligence when the tactical shell needs it.",
      sections: [
        { id: "update-center", label: "Update Center", summary: "Full release records, timeline, and historical detail." },
        { id: "first-raid-briefing", label: "First Raid Briefing", summary: "Core survival basics and early-run habits." },
        { id: "curriculum", label: "Lessons", summary: "Track-by-track learning and lesson detail." },
        { id: "quest-ops", label: "Quest Operations", summary: "Quest systems, route logic, and progression support." },
        { id: "materials-intel", label: "Material Intel", summary: "Stash pressure, material routing, and family detail." },
        { id: "machine-intel", label: "Machine Intel", summary: "Threat reference and prep checklist depth." }
      ]
    },
    commandTargets: {
      "brief-me": {
        primaryTarget: "#first-raid-briefing",
        secondaryTarget: "#curriculum",
        primaryLabel: "Open briefing",
        secondaryLabel: "Open lessons"
      },
      "prep-my-run": {
        primaryTarget: "#machine-intel",
        secondaryTarget: "#materials-intel",
        primaryLabel: "Open prep board",
        secondaryLabel: "Open material intel"
      },
      "catch-me-up": {
        primaryTarget: "#update-center",
        secondaryTarget: "#curriculum",
        primaryLabel: "Open update center",
        secondaryLabel: "Adjust learning path"
      },
      "fix-my-problem": {
        primaryTarget: "#curriculum",
        secondaryTarget: "#quest-ops",
        primaryLabel: "Open corrective path",
        secondaryLabel: "Open quest board"
      }
    },
    blockers: [
      {
        id: "survival",
        label: "I keep dying early",
        summary: "You need calmer fundamentals, not greedier raids.",
        followup: {
          id: "survival-where",
          prompt: "Where does it usually break?",
          options: [
            { value: "opening", label: "Opening route" },
            { value: "open-ground", label: "Open crossings" },
            { value: "after-noise", label: "After the first noisy fight" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "You are giving the raid more attention than your route can survive.",
            fit: "Strong fit if most bad runs turn chaotic before you ever secure the first clean win condition.",
            bluntAction: "Slow the first two minutes down and leave sooner.",
            stopDoing: "Stop turning uncertainty into forced fights.",
            saferPath: "Run a low-risk learning lane and treat extraction as part of the mission, not the reward for ego.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "low",
              blocker: "survival",
              aggression: "calm"
            }
          },
          opening: {
            likelyCause: "Your first route is too exposed for your current read speed.",
            fit: "Best fit if you get cracked or collapsed before the run has any shape at all.",
            bluntAction: "Shrink the opening lane and stop taking the fast-looking route.",
            stopDoing: "Stop sprinting into the first loot space like the map owes you a free start.",
            saferPath: "Brief first, then run a shorter opening route with one exit already chosen.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "low",
              blocker: "survival",
              aggression: "calm"
            }
          },
          "open-ground": {
            likelyCause: "You are crossing too much dead space without a cover chain or threat read.",
            fit: "Best fit if machines or players punish you between objectives instead of on them.",
            bluntAction: "Route by cover, not by optimism.",
            stopDoing: "Stop assuming open ground is just empty time between important decisions.",
            saferPath: "Use machine intel and survival lessons to shorten exposed crossings.",
            planSeed: {
              goal: "learn",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "low",
              blocker: "survival",
              aggression: "calm"
            }
          },
          "after-noise": {
            likelyCause: "You keep treating the area like it still belongs to you after you have already broadcast the fight.",
            fit: "Best fit if the first fight feels manageable and the second one kills the run.",
            bluntAction: "Reset after noise instead of lingering for bonus value.",
            stopDoing: "Stop holding the same ground after the raid already knows where you are.",
            saferPath: "Take the first clean win, reposition, and turn the run conservative immediately after noise spikes.",
            planSeed: {
              goal: "learn",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "survival",
              aggression: "balanced"
            }
          }
        },
        primaryTarget: "#first-raid-briefing",
        secondaryTarget: "#curriculum",
        primaryLabel: "Review the briefing",
        secondaryLabel: "Open survival lessons"
      },
      {
        id: "poor-extractions",
        label: "I keep failing to extract",
        summary: "You are probably losing the run after it is already valuable.",
        followup: {
          id: "extract-why",
          prompt: "What usually ruins the exit?",
          options: [
            { value: "leave-late", label: "I leave too late" },
            { value: "overfilled", label: "I overfill the bag" },
            { value: "bad-route", label: "My exit route is bad" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "You are delaying the leave call until the map makes it for you.",
            fit: "Strong fit if the raid feels successful right before it turns into a funeral.",
            bluntAction: "Call the run complete sooner.",
            stopDoing: "Stop pretending one more detour is free.",
            saferPath: "Run a conservative extraction plan and treat the bag as already won value.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "survival",
              aggression: "calm"
            }
          },
          "leave-late": {
            likelyCause: "You are finishing the objective, then reopening the run for no reason.",
            fit: "Best fit if most bad exits start with 'I thought I had time for one more thing.'",
            bluntAction: "Move the leave call forward by one full decision.",
            stopDoing: "Stop reclassifying a winning run as unfinished.",
            saferPath: "Use Prep My Run with a conservative extraction bias.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "survival",
              aggression: "calm"
            }
          },
          overfilled: {
            likelyCause: "Your greed threshold is outrunning your extraction discipline.",
            fit: "Best fit if the bag gets good and your judgment gets worse.",
            bluntAction: "Value the current bag more than imaginary upgrades.",
            stopDoing: "Stop treating a full bag like permission to take worse fights.",
            saferPath: "Use a safer route with stronger exit discipline and lower inventory greed.",
            planSeed: {
              goal: "materials",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "poor-extractions",
              aggression: "calm"
            }
          },
          "bad-route": {
            likelyCause: "Your exit line is being chosen too late or through obvious pressure lanes.",
            fit: "Best fit if the route itself feels doomed before the last shot is fired.",
            bluntAction: "Pick the exit lane before the bag is full.",
            stopDoing: "Stop improvising the most important movement in the run.",
            saferPath: "Prep the route around machine pressure and avoid attention-heavy corridors.",
            planSeed: {
              goal: "learn",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "low",
              blocker: "poor-extractions",
              aggression: "calm"
            }
          }
        },
        primaryTarget: "#machine-intel",
        secondaryTarget: "#curriculum",
        primaryLabel: "Open prep board",
        secondaryLabel: "Open extraction lessons"
      },
      {
        id: "losing-loot",
        label: "I keep losing loot",
        summary: "You are turning valuable bags into cautionary tales.",
        followup: {
          id: "loot-why",
          prompt: "What usually kills the bag?",
          options: [
            { value: "greedy-reset", label: "One more loot stop" },
            { value: "loud-exit", label: "Exit under pressure" },
            { value: "no-leave-call", label: "No clear leave call" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "You do not tighten the run once the bag gets valuable.",
            fit: "Strong fit if the loot looks great right before it becomes someone else's story.",
            bluntAction: "Respect the bag sooner.",
            stopDoing: "Stop treating secured loot like permission for one more gamble.",
            saferPath: "Run a conservative extraction lane and let a good bag end the mission.",
            planSeed: {
              goal: "materials",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "poor-extractions",
              aggression: "calm"
            }
          },
          "greedy-reset": {
            likelyCause: "You keep reopening a winning run for marginal upside.",
            fit: "Best fit if the loot dies right after you decide to squeeze one more room out of the raid.",
            bluntAction: "Cut the route before greed gets a vote.",
            stopDoing: "Stop confusing extra value with smart value.",
            saferPath: "Treat the first strong bag like the run's exit signal.",
            planSeed: {
              goal: "materials",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "poor-extractions",
              aggression: "calm"
            }
          },
          "loud-exit": {
            likelyCause: "You are extracting through attention-heavy lanes after already showing your hand.",
            fit: "Best fit if the loot is fine until the whole route turns into a public announcement.",
            bluntAction: "Leave quieter and earlier.",
            stopDoing: "Stop hauling value through the most obvious corridor on the map.",
            saferPath: "Use prep mode to pre-pick the low-attention exit before the bag fills up.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "poor-extractions",
              aggression: "calm"
            }
          },
          "no-leave-call": {
            likelyCause: "You have no real extraction trigger, so every extra move gets rationalized.",
            fit: "Best fit if the loot loss feels preventable because the run never had a clear stop point.",
            bluntAction: "Declare the bag good enough and act like it.",
            stopDoing: "Stop waiting for the map to tell you the run is over.",
            saferPath: "Set a leave line before the first good pickup, then obey it.",
            planSeed: {
              goal: "workshop",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "poor-extractions",
              aggression: "calm"
            }
          }
        },
        primaryTarget: "#machine-intel",
        secondaryTarget: "#materials-intel",
        primaryLabel: "Open prep board",
        secondaryLabel: "Open stash intel"
      },
      {
        id: "stash-pressure",
        label: "My stash is a mess",
        summary: "You do not have a progression filter, so the stash is doing what clutter always does.",
        followup: {
          id: "stash-why",
          prompt: "What is choking it?",
          options: [
            { value: "fear-selling", label: "I keep everything" },
            { value: "random-loot", label: "I bring back junk" },
            { value: "no-target", label: "I do not know what to build toward" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "Your raid priorities are not tied to a workshop or quest goal.",
            fit: "Strong fit if your stash looks full but still does not help the next run.",
            bluntAction: "Pick one progression target and make the stash answer to it.",
            stopDoing: "Stop storing uncertainty like it is a resource.",
            saferPath: "Use material intel and Prep My Run to route for what the next upgrade actually needs.",
            planSeed: {
              goal: "workshop",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "stash-pressure",
              aggression: "calm"
            }
          },
          "fear-selling": {
            likelyCause: "You are treating every item like future gold because the system still feels fuzzy.",
            fit: "Best fit if you almost never clear space until the stash is already painful.",
            bluntAction: "Choose a target and start cutting against it today.",
            stopDoing: "Stop preserving random maybe-value over actual runway.",
            saferPath: "Route workshop support runs and let low-signal loot die on purpose.",
            planSeed: {
              goal: "workshop",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "stash-pressure",
              aggression: "calm"
            }
          },
          "random-loot": {
            likelyCause: "Your runs are not targeted, so the stash inherits the same lack of discipline.",
            fit: "Best fit if most bags are mixed and none of them solve anything.",
            bluntAction: "Stop leaving Topside with random value bags.",
            stopDoing: "Stop calling undirected looting productive.",
            saferPath: "Plan family-specific material routes and leave once the useful stack is secured.",
            planSeed: {
              goal: "materials",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "stash-pressure",
              aggression: "calm"
            }
          },
          "no-target": {
            likelyCause: "You have no active build path, so every item feels equally impossible to judge.",
            fit: "Best fit if the stash feels confusing rather than simply crowded.",
            bluntAction: "Choose one near-term upgrade and make the stash serve it.",
            stopDoing: "Stop evaluating loot without a destination.",
            saferPath: "Use workshop-support planning and route only for what unlocks the next step.",
            planSeed: {
              goal: "workshop",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "low",
              blocker: "stash-pressure",
              aggression: "calm"
            }
          }
        },
        primaryTarget: "#materials-intel",
        secondaryTarget: "#quest-ops",
        primaryLabel: "Open material intel",
        secondaryLabel: "Open progression systems"
      },
      {
        id: "quests",
        label: "I have no quest progress",
        summary: "Route with quest intent instead of general scavenging.",
        followup: {
          id: "quest-why",
          prompt: "What stalls the quest most often?",
          options: [
            { value: "wrong-route", label: "Wrong route" },
            { value: "too-hot", label: "Too much pressure" },
            { value: "wrong-kit", label: "Wrong loadout" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "You are loading in with a scavenging mindset and hoping the quest survives it.",
            fit: "Strong fit if runs feel busy but the quest bar barely moves.",
            bluntAction: "Make the quest the mission and everything else optional.",
            stopDoing: "Stop free-roaming before the objective is secure.",
            saferPath: "Open quest ops, pick one objective lane, and extract once it is done.",
            planSeed: {
              goal: "quests",
              timeWindow: "medium",
              riskTolerance: "medium",
              confidence: "medium",
              blocker: "quests",
              aggression: "balanced"
            }
          },
          "wrong-route": {
            likelyCause: "The quest route is too wide and too generic.",
            fit: "Best fit if the objective is technically active but the path keeps drifting.",
            bluntAction: "Shrink the route until the quest is unavoidable.",
            stopDoing: "Stop treating the whole map like your objective zone.",
            saferPath: "Plan a quest progression run with one clear path and one clear exit.",
            planSeed: {
              goal: "quests",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "quests",
              aggression: "calm"
            }
          },
          "too-hot": {
            likelyCause: "You are contesting the objective at the wrong tempo.",
            fit: "Best fit if the quest zone is right but the timing keeps getting you killed.",
            bluntAction: "Delay the entry or downgrade the greed, not the mission.",
            stopDoing: "Stop forcing the objective at peak attention.",
            saferPath: "Brief the route, then re-enter on a cooler timing window.",
            planSeed: {
              goal: "quests",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "low",
              blocker: "quests",
              aggression: "calm"
            }
          },
          "wrong-kit": {
            likelyCause: "The loadout is not shaped for the task, so the quest never gets clean momentum.",
            fit: "Best fit if the objective is reachable but the fights or route feel wrong every time.",
            bluntAction: "Bring a quest-shaped kit instead of a generic one.",
            stopDoing: "Stop loading the same comfort build into every problem.",
            saferPath: "Jump into Prep My Run with the quest goal already selected.",
            planSeed: {
              goal: "quests",
              timeWindow: "medium",
              riskTolerance: "medium",
              confidence: "medium",
              blocker: "bad-loadouts",
              aggression: "balanced"
            }
          }
        },
        primaryTarget: "#quest-ops",
        secondaryTarget: "#curriculum",
        primaryLabel: "Open quest ops",
        secondaryLabel: "Open learning track"
      },
      {
        id: "bad-loadouts",
        label: "My loadouts are bad",
        summary: "Your kit is probably mismatched to the run, not universally awful.",
        followup: {
          id: "loadout-why",
          prompt: "What feels wrong most often?",
          options: [
            { value: "too-expensive", label: "Too expensive" },
            { value: "no-heals", label: "No sustain" },
            { value: "wrong-range", label: "Wrong fight profile" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "You are bringing a general build into specific raid problems.",
            fit: "Strong fit if the kit feels okay in theory and wrong in practice.",
            bluntAction: "Match the loadout to the run, not your mood.",
            stopDoing: "Stop treating one comfort build like a universal answer.",
            saferPath: "Use Prep My Run to shape the plan before the loadout locks in.",
            planSeed: {
              goal: "learn",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "bad-loadouts",
              aggression: "balanced"
            }
          },
          "too-expensive": {
            likelyCause: "You are paying premium kit prices for uncertain runs.",
            fit: "Best fit if losing the loadout hurts more than losing the objective.",
            bluntAction: "Downgrade the ego tax in the kit.",
            stopDoing: "Stop bringing your nicest problems into your weakest routes.",
            saferPath: "Build a budget-stable plan with strong fallback options.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "bad-loadouts",
              aggression: "calm"
            }
          },
          "no-heals": {
            likelyCause: "You are overinvesting in damage and underinvesting in staying power.",
            fit: "Best fit if good openings still collapse after one exchange.",
            bluntAction: "Carry sustain before swagger.",
            stopDoing: "Stop treating healing like optional luxury.",
            saferPath: "Run prep mode with a stricter utility floor before you queue again.",
            planSeed: {
              goal: "learn",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "low",
              blocker: "bad-loadouts",
              aggression: "calm"
            }
          },
          "wrong-range": {
            likelyCause: "Your weapon profile does not match the fights your route actually creates.",
            fit: "Best fit if the gun feels fine until the raid forces the wrong engagement profile.",
            bluntAction: "Plan the fights, then plan the kit.",
            stopDoing: "Stop picking weapons before you know the route posture.",
            saferPath: "Use Prep My Run with the actual goal and risk lane selected first.",
            planSeed: {
              goal: "confidence",
              timeWindow: "medium",
              riskTolerance: "medium",
              confidence: "medium",
              blocker: "bad-loadouts",
              aggression: "balanced"
            }
          }
        },
        primaryTarget: "#machine-intel",
        secondaryTarget: "#curriculum",
        primaryLabel: "Open prep board",
        secondaryLabel: "Open learning track"
      },
      {
        id: "bad-fights",
        label: "I keep taking bad fights",
        summary: "You are probably committing before the fight is actually yours.",
        followup: {
          id: "fight-why",
          prompt: "What breaks the fight most often?",
          options: [
            { value: "wrong-range", label: "Wrong range" },
            { value: "late-heal", label: "Late reset" },
            { value: "bad-commit", label: "Bad chase or commit" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "You are letting contact turn into commitment too fast.",
            fit: "Strong fit if the fight feels winnable right until it suddenly looks stupid in hindsight.",
            bluntAction: "Take fewer dirty fights.",
            stopDoing: "Stop converting maybe-pressure into mandatory combat.",
            saferPath: "Run a cleaner confidence lane with fewer forced commits and better reset rules.",
            planSeed: {
              goal: "confidence",
              timeWindow: "medium",
              riskTolerance: "medium",
              confidence: "medium",
              blocker: "bad-loadouts",
              aggression: "balanced"
            }
          },
          "wrong-range": {
            likelyCause: "Your route and kit are asking for one fight profile while you keep taking another.",
            fit: "Best fit if the weapon feels fine until the engagement distance gets real.",
            bluntAction: "Stop taking fights your kit did not plan for.",
            stopDoing: "Stop pretending every sightline is equally playable.",
            saferPath: "Use Prep My Run to shape the route and loadout around the same fight range.",
            planSeed: {
              goal: "confidence",
              timeWindow: "medium",
              riskTolerance: "medium",
              confidence: "medium",
              blocker: "bad-loadouts",
              aggression: "balanced"
            }
          },
          "late-heal": {
            likelyCause: "You are trying to win through damage instead of respecting reset timing.",
            fit: "Best fit if the fight collapses right after you decide to stay one beat too long.",
            bluntAction: "Reset earlier and heal before swagger.",
            stopDoing: "Stop acting like broken sustain is still fighting shape.",
            saferPath: "Run a calmer lane with stricter utility and disengage rules.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "bad-loadouts",
              aggression: "calm"
            }
          },
          "bad-commit": {
            likelyCause: "You are chasing pressure that never needed to become your problem.",
            fit: "Best fit if the fight only looks bad after you realize you chose to stay in it.",
            bluntAction: "Break the commit sooner.",
            stopDoing: "Stop overvaluing momentum once the clean advantage is gone.",
            saferPath: "Use a conservative extraction or learning run until your fight filtering improves.",
            planSeed: {
              goal: "learn",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "survival",
              aggression: "calm"
            }
          }
        },
        primaryTarget: "#machine-intel",
        secondaryTarget: "#curriculum",
        primaryLabel: "Open prep board",
        secondaryLabel: "Open survival lessons"
      },
      {
        id: "confusion",
        label: "I have no direction",
        summary: "You do not need more content. You need one immediate lane and one reason to follow it.",
        followup: {
          id: "confusion-why",
          prompt: "What is missing most right now?",
          options: [
            { value: "goal", label: "A goal" },
            { value: "updates", label: "Patch context" },
            { value: "path", label: "A practical path" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "The game feels bigger than your current decision framework.",
            fit: "Strong fit if you open the site and still do not know what type of run to do next.",
            bluntAction: "Pick one lane and stop shopping for perfect certainty.",
            stopDoing: "Stop trying to solve every system at once.",
            saferPath: "Use Brief Me for clarity or Prep My Run for immediate action.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "low",
              blocker: "confusion",
              aggression: "calm"
            }
          },
          goal: {
            likelyCause: "You are queueing without a declared win condition.",
            fit: "Best fit if runs start fine and then dissolve into random behavior.",
            bluntAction: "Name the run before the run names you.",
            stopDoing: "Stop free-styling the first decision.",
            saferPath: "Jump into Prep My Run with one clear objective selected.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "low",
              blocker: "confusion",
              aggression: "calm"
            }
          },
          updates: {
            likelyCause: "You do not trust old knowledge and have not processed the new signals yet.",
            fit: "Best fit if the real blocker is uncertainty about what changed.",
            bluntAction: "Catch up first, then plan.",
            stopDoing: "Stop pretending patch drift is background noise.",
            saferPath: "Use Catch Me Up and let the update board reset your assumptions.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "confusion",
              aggression: "calm"
            }
          },
          path: {
            likelyCause: "You have a goal in theory but no operational lane to get there.",
            fit: "Best fit if you know what matters and still stall at the start screen.",
            bluntAction: "Turn the intention into a route and kit now.",
            stopDoing: "Stop waiting for the site to magically choose without your input.",
            saferPath: "Push the goal into Prep My Run and let the plan engine take over.",
            planSeed: {
              goal: "quests",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "confusion",
              aggression: "calm"
            }
          }
        },
        primaryTarget: "#curriculum",
        secondaryTarget: "#update-center",
        primaryLabel: "Open learning path",
        secondaryLabel: "Open update board"
      },
      {
        id: "wasted-runs",
        label: "I waste time on bad runs",
        summary: "You are staying in low-quality raids too long and calling it persistence.",
        followup: {
          id: "wasted-why",
          prompt: "Where does the time actually go?",
          options: [
            { value: "over-looting", label: "Over-looting" },
            { value: "chasing-fights", label: "Chasing fights" },
            { value: "indecision", label: "Indecision" }
          ]
        },
        diagnoses: {
          default: {
            likelyCause: "You are not killing bad runs early enough.",
            fit: "Strong fit if the raid keeps bleeding time without improving your position.",
            bluntAction: "Abort weaker runs faster.",
            stopDoing: "Stop treating sunk time like future value.",
            saferPath: "Use a short-window conservative plan and keep the exit threshold strict.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "wasted-runs",
              aggression: "calm"
            }
          },
          "over-looting": {
            likelyCause: "The bag keeps becoming the excuse for one more room.",
            fit: "Best fit if the raid slows down the moment the route should tighten up.",
            bluntAction: "Cut the route one stop earlier.",
            stopDoing: "Stop looting because the area still technically exists.",
            saferPath: "Run shorter material or workshop lanes with a defined leave line.",
            planSeed: {
              goal: "materials",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "wasted-runs",
              aggression: "calm"
            }
          },
          "chasing-fights": {
            likelyCause: "You keep converting maybe-pressure into mandatory combat.",
            fit: "Best fit if the time sink looks exciting right before it looks stupid.",
            bluntAction: "Stop pursuing fights that are not moving the run forward.",
            stopDoing: "Stop turning optional contact into your primary objective.",
            saferPath: "Set a quest or extraction plan and let ignored fights stay ignored.",
            planSeed: {
              goal: "quests",
              timeWindow: "medium",
              riskTolerance: "low",
              confidence: "medium",
              blocker: "wasted-runs",
              aggression: "balanced"
            }
          },
          indecision: {
            likelyCause: "The route keeps stalling because you are choosing in the moment instead of before the run.",
            fit: "Best fit if the worst runs feel aimless before they feel dangerous.",
            bluntAction: "Decide earlier and narrower.",
            stopDoing: "Stop asking the live raid to do the planning for you.",
            saferPath: "Hand the run to Prep My Run and commit to the resulting lane.",
            planSeed: {
              goal: "learn",
              timeWindow: "short",
              riskTolerance: "low",
              confidence: "low",
              blocker: "wasted-runs",
              aggression: "calm"
            }
          }
        },
        primaryTarget: "#machine-intel",
        secondaryTarget: "#curriculum",
        primaryLabel: "Open prep board",
        secondaryLabel: "Open corrective lessons"
      }
    ],
    releaseSignals: {
      latestReleaseId: latestRelease?.id ?? null,
      latestReleaseTitle: latestRelease?.title ?? "Latest update",
      latestReleaseDate: latestRelease?.date ?? null,
      latestReleaseSummary: latestRelease?.summary ?? "No release signals available."
    },
    liveRaidIntel,
    getEntryIntelSignals() {
      return liveRaidIntel.entry.slice(0, 1);
    },
    getBriefIntelSignals() {
      return liveRaidIntel.brief.slice(0, 3);
    },
    getPrepIntelSignals(appState) {
      return buildPrepIntelSignals(appState);
    }
  };
}
