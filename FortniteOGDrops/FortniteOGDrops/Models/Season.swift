import Foundation
import SwiftUI

struct Season: Identifiable {
    let id: String
    let title: String
    let subtitle: String
    let overview: String
    let accent: Color
    let bannerGradient: [Color]
    let dropStyle: String
    let bestFor: String
}
