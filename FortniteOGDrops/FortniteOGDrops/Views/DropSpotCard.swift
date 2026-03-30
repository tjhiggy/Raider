import SwiftUI

struct DropSpotCard: View {
    let spot: DropSpot
    let accent: Color

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            HStack(alignment: .top) {
                VStack(alignment: .leading, spacing: 6) {
                    Text(spot.name)
                        .font(.title3.weight(.heavy))
                        .foregroundStyle(.white)

                    Text(spot.region)
                        .font(.subheadline.weight(.medium))
                        .foregroundStyle(.white.opacity(0.68))
                }

                Spacer()

                Text(spot.idealSquadSize)
                    .font(.caption.weight(.bold))
                    .padding(.horizontal, 10)
                    .padding(.vertical, 8)
                    .background(accent.opacity(0.22), in: Capsule())
                    .foregroundStyle(.white)
            }

            Text(spot.headline)
                .font(.body)
                .foregroundStyle(.white.opacity(0.86))

            HStack(spacing: 10) {
                scoreBadge(label: "Loot", value: spot.lootScore)
                scoreBadge(label: "Rotate", value: spot.rotationScore)
                scoreBadge(label: "Risk", value: spot.riskScore)
            }
        }
        .padding(18)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 26, style: .continuous)
                .fill(Color.white.opacity(0.08))
        )
        .overlay {
            RoundedRectangle(cornerRadius: 26, style: .continuous)
                .stroke(.white.opacity(0.10), lineWidth: 1)
        }
    }

    private func scoreBadge(label: String, value: Int) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(label)
                .font(.caption.weight(.medium))
                .foregroundStyle(.white.opacity(0.64))
            Text("\(value)")
                .font(.headline.weight(.heavy))
                .foregroundStyle(.white)
        }
        .padding(.horizontal, 12)
        .padding(.vertical, 10)
        .background(Color.black.opacity(0.18), in: RoundedRectangle(cornerRadius: 16, style: .continuous))
    }
}
