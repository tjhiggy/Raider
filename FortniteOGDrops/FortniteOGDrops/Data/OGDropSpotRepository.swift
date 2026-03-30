import Foundation
import SwiftUI

struct OGDropSpotRepository {
    let seasons: [Season] = [
        Season(
            id: "og-season-1",
            title: "Season 1",
            subtitle: "Classic resets, safe loot paths",
            overview: "Early OG lobbies reward simple routes, low-contest POIs, and quick material control.",
            accent: Color(red: 0.18, green: 0.78, blue: 0.72),
            bannerGradient: [Color(red: 0.05, green: 0.16, blue: 0.19), Color(red: 0.18, green: 0.78, blue: 0.72)],
            dropStyle: "Play edge, stack shields, rotate late.",
            bestFor: "Duo and squad players who want consistent top-10 games."
        ),
        Season(
            id: "og-season-2",
            title: "Season 2",
            subtitle: "More pressure, stronger mid-map fights",
            overview: "As players get sharper, the best drops balance chest density with fast exits toward zone.",
            accent: Color(red: 0.98, green: 0.64, blue: 0.24),
            bannerGradient: [Color(red: 0.21, green: 0.10, blue: 0.03), Color(red: 0.98, green: 0.64, blue: 0.24)],
            dropStyle: "Claim high ground early and rotate through ridges.",
            bestFor: "Aggressive duos that still want a fallback route."
        ),
        Season(
            id: "og-season-3",
            title: "Season 3",
            subtitle: "Mobility matters more",
            overview: "Storm timing becomes the difference-maker, so the best drops offer both loot and clean launch paths.",
            accent: Color(red: 0.48, green: 0.70, blue: 1.0),
            bannerGradient: [Color(red: 0.06, green: 0.09, blue: 0.22), Color(red: 0.48, green: 0.70, blue: 1.0)],
            dropStyle: "Loot fast, scan zone, move before congestion hits.",
            bestFor: "Trios and squads that want flexible rotations."
        ),
        Season(
            id: "og-season-4",
            title: "Season 4",
            subtitle: "High-reward hot zones",
            overview: "The map opens up with richer fight paths, so top spots need a clear first-fight advantage and fast escape.",
            accent: Color(red: 0.98, green: 0.34, blue: 0.36),
            bannerGradient: [Color(red: 0.19, green: 0.02, blue: 0.07), Color(red: 0.98, green: 0.34, blue: 0.36)],
            dropStyle: "Contest with purpose and own the vertical angle.",
            bestFor: "Mechanically confident players chasing big starts."
        ),
        Season(
            id: "og-season-5",
            title: "Season 5",
            subtitle: "Mobility-rich endgames",
            overview: "Late OG seasons reward teams that can leave a chaotic POI with full mats, utility, and a clean mobility line.",
            accent: Color(red: 0.72, green: 0.48, blue: 0.98),
            bannerGradient: [Color(red: 0.10, green: 0.04, blue: 0.18), Color(red: 0.72, green: 0.48, blue: 0.98)],
            dropStyle: "Prioritize mobility and tempo over pure chest count.",
            bestFor: "Players who like taking smart fights on the move."
        )
    ]

    let dropSpots: [DropSpot] = [
        DropSpot(
            id: "pleasant-season-1",
            seasonID: "og-season-1",
            name: "Pleasant Park",
            region: "Northwest",
            headline: "The most reliable all-around opener for classic squads.",
            lootScore: 92,
            rotationScore: 82,
            riskScore: 68,
            idealSquadSize: "3-4 players",
            whyItWorks: "Pleasant spreads teams across distinct houses, which gives you enough room to split, collect early shields, and collapse together before the first rotate.",
            landingPlan: [
                "Send one player to soccer field edge for a fast chest and vision.",
                "Split the remaining players across opposite house clusters.",
                "Regroup at the center street before leaving the POI."
            ],
            lootHighlights: ["High chest density", "Strong ammo spread", "Easy brick and wood farming"]
        ),
        DropSpot(
            id: "retail-season-1",
            seasonID: "og-season-1",
            name: "Retail Row",
            region: "East",
            headline: "Great for players who want quick loot without full hot-drop chaos.",
            lootScore: 88,
            rotationScore: 79,
            riskScore: 56,
            idealSquadSize: "2-3 players",
            whyItWorks: "Retail gives you fast indoor loot, clean sightlines for callouts, and nearby hills to stage a safe rotate into center zone.",
            landingPlan: [
                "Prioritize storefront roofs so you control the first angles.",
                "Clear the bookstore and grocery side before crossing the street.",
                "Rotate south with full mats instead of chasing fringe fights."
            ],
            lootHighlights: ["Fast shield access", "Compact fighting lanes", "Nearby hill control"]
        ),
        DropSpot(
            id: "tilted-season-2",
            seasonID: "og-season-2",
            name: "Tilted Towers",
            region: "Center",
            headline: "Still the highest upside drop if your team can win the first 90 seconds.",
            lootScore: 99,
            rotationScore: 95,
            riskScore: 95,
            idealSquadSize: "2-4 players",
            whyItWorks: "Tilted remains unmatched for chest volume, floor loot, and central positioning, but you need a disciplined building claim and a quick down-first strategy.",
            landingPlan: [
                "Land on rooftops with immediate weapon access.",
                "Take one building each instead of piling onto the same floor.",
                "Collapse on the first cracked enemy rather than full-sending separate duels."
            ],
            lootHighlights: ["Elite chest density", "Center-map position", "Rapid refresh potential"]
        ),
        DropSpot(
            id: "snobby-season-2",
            seasonID: "og-season-2",
            name: "Snobby Shores",
            region: "West",
            headline: "A smarter pick than it looks for controlled, high-mat games.",
            lootScore: 84,
            rotationScore: 77,
            riskScore: 42,
            idealSquadSize: "2-4 players",
            whyItWorks: "Snobby offers comfortable spacing, stone-heavy builds, and a lower contest rate, making it ideal when you want safe consistency over early highlight plays.",
            landingPlan: [
                "Split mansion-side first to grab the denser chest route.",
                "Harvest stone walls on the way out to max defensive mats.",
                "Rotate north early if zone pulls away."
            ],
            lootHighlights: ["Low contest rate", "Excellent brick farming", "Safe regroup routes"]
        ),
        DropSpot(
            id: "dusty-season-3",
            seasonID: "og-season-3",
            name: "Dusty Divot",
            region: "Center-East",
            headline: "The best mobility-minded drop for teams that rotate early.",
            lootScore: 90,
            rotationScore: 93,
            riskScore: 71,
            idealSquadSize: "3-4 players",
            whyItWorks: "Dusty gives you strong chest coverage plus natural routes into nearly every zone, which helps organized teams avoid getting pinched by late movers.",
            landingPlan: [
                "Secure the outer rim first for easy chest sequencing.",
                "Use the interior depression as cover while trading tags.",
                "Leave before the POI gets third-partied from mid."
            ],
            lootHighlights: ["Fast center rotations", "Natural cover", "Multiple disengage paths"]
        ),
        DropSpot(
            id: "fatal-season-3",
            seasonID: "og-season-3",
            name: "Fatal Fields",
            region: "South-Center",
            headline: "Balanced loot and huge farming potential for smart teams.",
            lootScore: 86,
            rotationScore: 81,
            riskScore: 48,
            idealSquadSize: "2-4 players",
            whyItWorks: "Fatal rewards teams that want an uncontested farm-up into a powerful midgame, especially when you value materials and heal economy over instant action.",
            landingPlan: [
                "Take barn roof first for early vision and chest access.",
                "Clear the house side before opening the fields.",
                "Farm the fencing and outer trees before rotating."
            ],
            lootHighlights: ["Massive wood farming", "Good heal spawns", "Low early volatility"]
        ),
        DropSpot(
            id: "risky-season-4",
            seasonID: "og-season-4",
            name: "Risky Reels",
            region: "North",
            headline: "Explosive early fights with enough loot to justify the contest.",
            lootScore: 91,
            rotationScore: 75,
            riskScore: 85,
            idealSquadSize: "2-3 players",
            whyItWorks: "Risky compresses teams into a small fight space, so squads with strong target focus and clean right-hand peeks can snowball fast.",
            landingPlan: [
                "Take theater roof and adjacent vehicles for immediate cover.",
                "Pinch from opposite sides instead of funneling through the screen area.",
                "Reset shields before leaving because nearby rotations are exposed."
            ],
            lootHighlights: ["Strong chest clusters", "Fast eliminations", "Easy awareness of enemy positions"]
        ),
        DropSpot(
            id: "lonely-season-4",
            seasonID: "og-season-4",
            name: "Lonely Lodge",
            region: "East",
            headline: "A sleeper drop for squads that value storm prep over spotlight fights.",
            lootScore: 83,
            rotationScore: 74,
            riskScore: 36,
            idealSquadSize: "2-4 players",
            whyItWorks: "Lonely gives you enough loot to gear up, plus enormous wood and a predictable pathing pattern that makes calls simple even in stacked lobbies.",
            landingPlan: [
                "Land tower first for vertical priority and scouting.",
                "Spread along cabins only after confirming no full-team contest.",
                "Leave with mobility items if the first zone is far."
            ],
            lootHighlights: ["Huge wood economy", "Low pressure opener", "Clear scouting tower"]
        ),
        DropSpot(
            id: "paradise-season-5",
            seasonID: "og-season-5",
            name: "Paradise Palms",
            region: "Southeast",
            headline: "Top-tier loot with the movement options to escape bad zone pulls.",
            lootScore: 94,
            rotationScore: 89,
            riskScore: 76,
            idealSquadSize: "2-4 players",
            whyItWorks: "Paradise supports both aggressive and controlled styles, thanks to broad loot spacing, clean rooftop claims, and strong late-rotation flexibility.",
            landingPlan: [
                "Claim outer rooftops first to avoid getting boxed indoors.",
                "Win one side of town before crossing to the hotel block.",
                "Rotate with vehicles or mobility before desert teams pinch in."
            ],
            lootHighlights: ["Excellent floor loot", "Wide fighting lanes", "Strong mobility access"]
        ),
        DropSpot(
            id: "lazy-season-5",
            seasonID: "og-season-5",
            name: "Lazy Links",
            region: "North",
            headline: "Ideal for players who want clean loot routes and measured fights.",
            lootScore: 87,
            rotationScore: 84,
            riskScore: 51,
            idealSquadSize: "2-4 players",
            whyItWorks: "Lazy Links has predictable splits, strong chest spacing, and enough room to recover from a shaky opener without giving up your whole game.",
            landingPlan: [
                "Start clubhouse-side if another team floats toward the villas.",
                "Use the cart paths for low-exposure rotates through the POI.",
                "Leave north or east depending on storm timing."
            ],
            lootHighlights: ["Predictable loot path", "Safe regrouping", "Solid mid-map access"]
        )
    ]

    func spots(for season: Season) -> [DropSpot] {
        dropSpots.filter { $0.seasonID == season.id }
            .sorted { lhs, rhs in
                (lhs.lootScore + lhs.rotationScore) > (rhs.lootScore + rhs.rotationScore)
            }
    }
}
