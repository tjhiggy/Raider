import Foundation

struct DropSpot: Identifiable, Hashable {
    let id: String
    let seasonID: Season.ID
    let name: String
    let region: String
    let headline: String
    let lootScore: Int
    let rotationScore: Int
    let riskScore: Int
    let idealSquadSize: String
    let whyItWorks: String
    let landingPlan: [String]
    let lootHighlights: [String]
}
