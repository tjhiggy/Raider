import SwiftUI

struct SpotDetailView: View {
    let spot: DropSpot
    let season: Season

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 22) {
                detailHeader

                section("Why This Spot Works") {
                    Text(spot.whyItWorks)
                        .font(.body)
                        .foregroundStyle(.white.opacity(0.84))
                }

                section("Landing Plan") {
                    ForEach(Array(spot.landingPlan.enumerated()), id: \.offset) { index, step in
                        HStack(alignment: .top, spacing: 12) {
                            Text("\(index + 1)")
                                .font(.caption.weight(.bold))
                                .frame(width: 24, height: 24)
                                .background(season.accent, in: Circle())
                                .foregroundStyle(.black.opacity(0.72))

                            Text(step)
                                .font(.body)
                                .foregroundStyle(.white.opacity(0.84))
                        }
                    }
                }

                section("Loot Highlights") {
                    ForEach(spot.lootHighlights, id: \.self) { item in
                        Text("- \(item)")
                            .font(.body)
                            .foregroundStyle(.white.opacity(0.84))
                    }
                }
            }
            .padding(20)
            .padding(.bottom, 32)
        }
        .background(
            LinearGradient(
                colors: [
                    season.bannerGradient.first ?? season.accent,
                    Color(red: 0.05, green: 0.05, blue: 0.08)
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            .ignoresSafeArea()
        )
        .navigationTitle(spot.name)
        .navigationBarTitleDisplayMode(.inline)
    }

    private var detailHeader: some View {
        VStack(alignment: .leading, spacing: 14) {
            Text(spot.headline)
                .font(.title2.weight(.heavy))
                .foregroundStyle(.white)

            HStack(spacing: 12) {
                scorePill(title: "Loot", value: spot.lootScore)
                scorePill(title: "Rotate", value: spot.rotationScore)
                scorePill(title: "Risk", value: spot.riskScore)
            }

            Text("Ideal team: \(spot.idealSquadSize)")
                .font(.subheadline.weight(.semibold))
                .foregroundStyle(.white.opacity(0.76))
        }
        .padding(20)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.white.opacity(0.08), in: RoundedRectangle(cornerRadius: 28, style: .continuous))
    }

    private func section<Content: View>(_ title: String, @ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 14) {
            Text(title)
                .font(.headline.weight(.bold))
                .foregroundStyle(.white)

            content()
        }
        .padding(20)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.white.opacity(0.06), in: RoundedRectangle(cornerRadius: 24, style: .continuous))
        .overlay {
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .stroke(.white.opacity(0.08), lineWidth: 1)
        }
    }

    private func scorePill(title: String, value: Int) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(title)
                .font(.caption.weight(.medium))
                .foregroundStyle(.white.opacity(0.64))

            Text("\(value)")
                .font(.headline.weight(.black))
                .foregroundStyle(.white)
        }
        .padding(.horizontal, 14)
        .padding(.vertical, 10)
        .background(season.accent.opacity(0.20), in: RoundedRectangle(cornerRadius: 16, style: .continuous))
    }
}
