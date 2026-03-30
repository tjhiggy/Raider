import SwiftUI

struct RootView: View {
    let repository: OGDropSpotRepository
    @State private var selectedSeasonID: Season.ID

    init(repository: OGDropSpotRepository) {
        self.repository = repository
        _selectedSeasonID = State(initialValue: repository.seasons.first?.id ?? "")
    }

    private var selectedSeason: Season? {
        repository.seasons.first(where: { $0.id == selectedSeasonID })
    }

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    if let selectedSeason {
                        hero(for: selectedSeason)
                        seasonRail
                        recommendationSection(for: selectedSeason)
                    }
                }
                .padding(.horizontal, 20)
                .padding(.top, 18)
                .padding(.bottom, 40)
            }
            .background(backgroundGradient)
            .navigationTitle("Fortnite OG Drops")
            .navigationBarTitleDisplayMode(.inline)
        }
    }

    private var backgroundGradient: some View {
        LinearGradient(
            colors: [
                Color(red: 0.04, green: 0.05, blue: 0.08),
                Color(red: 0.09, green: 0.10, blue: 0.16),
                Color(red: 0.15, green: 0.08, blue: 0.17)
            ],
            startPoint: .topLeading,
            endPoint: .bottomTrailing
        )
        .ignoresSafeArea()
    }

    private func hero(for season: Season) -> some View {
        VStack(alignment: .leading, spacing: 14) {
            Text("Drop smarter")
                .font(.caption.weight(.semibold))
                .textCase(.uppercase)
                .foregroundStyle(.white.opacity(0.72))

            Text(season.title)
                .font(.system(size: 36, weight: .black, design: .rounded))
                .foregroundStyle(.white)

            Text(season.subtitle)
                .font(.title3.weight(.semibold))
                .foregroundStyle(.white.opacity(0.94))

            Text(season.overview)
                .font(.body)
                .foregroundStyle(.white.opacity(0.82))

            HStack(spacing: 12) {
                StatPill(label: "Meta", value: season.dropStyle)
                StatPill(label: "Best For", value: season.bestFor)
            }
        }
        .padding(22)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .fill(LinearGradient(colors: season.bannerGradient, startPoint: .topLeading, endPoint: .bottomTrailing))
        )
        .overlay(alignment: .topTrailing) {
            Circle()
                .fill(.white.opacity(0.12))
                .frame(width: 120, height: 120)
                .blur(radius: 2)
                .offset(x: 24, y: -30)
        }
    }

    private var seasonRail: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Season Radar")
                .font(.headline.weight(.bold))
                .foregroundStyle(.white)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 14) {
                    ForEach(repository.seasons) { season in
                        SeasonPickerCard(
                            season: season,
                            isSelected: season.id == selectedSeasonID
                        )
                        .onTapGesture {
                            withAnimation(.spring(response: 0.35, dampingFraction: 0.85)) {
                                selectedSeasonID = season.id
                            }
                        }
                    }
                }
                .padding(.vertical, 4)
            }
        }
    }

    private func recommendationSection(for season: Season) -> some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Best Spots")
                .font(.headline.weight(.bold))
                .foregroundStyle(.white)

            ForEach(repository.spots(for: season)) { spot in
                NavigationLink {
                    SpotDetailView(spot: spot, season: season)
                } label: {
                    DropSpotCard(spot: spot, accent: season.accent)
                }
                .buttonStyle(.plain)
            }
        }
    }
}

#Preview {
    RootView(repository: OGDropSpotRepository())
}
