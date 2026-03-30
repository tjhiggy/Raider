import SwiftUI

struct SeasonPickerCard: View {
    let season: Season
    let isSelected: Bool

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(season.title)
                .font(.headline.weight(.bold))
                .foregroundStyle(.white)

            Text(season.subtitle)
                .font(.caption)
                .foregroundStyle(.white.opacity(0.76))
                .lineLimit(2)

            Spacer(minLength: 0)

            Text(season.dropStyle)
                .font(.caption2.weight(.semibold))
                .foregroundStyle(.white.opacity(0.88))
                .lineLimit(2)
        }
        .padding(16)
        .frame(width: 184, height: 154, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .fill(LinearGradient(colors: season.bannerGradient, startPoint: .topLeading, endPoint: .bottomTrailing))
        )
        .overlay {
            RoundedRectangle(cornerRadius: 24, style: .continuous)
                .stroke(isSelected ? .white.opacity(0.9) : .white.opacity(0.16), lineWidth: isSelected ? 2 : 1)
        }
        .scaleEffect(isSelected ? 1 : 0.97)
        .shadow(color: season.accent.opacity(isSelected ? 0.35 : 0.12), radius: 18, y: 10)
    }
}
