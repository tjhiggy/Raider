import SwiftUI

@main
struct FortniteOGDropsApp: App {
    private let repository = OGDropSpotRepository()

    var body: some Scene {
        WindowGroup {
            RootView(repository: repository)
        }
    }
}
