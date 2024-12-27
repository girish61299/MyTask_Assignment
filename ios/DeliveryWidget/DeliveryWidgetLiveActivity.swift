//
//  DeliveryWidgetLiveActivity.swift
//  DeliveryWidget
//
//  Created by Girish Dadhich on 25/12/24.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct DeliveryWidgetAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        var progress: Double
        var eta: Double
        var isComplete: Bool
    }
    var orderID: String
}

struct DeliveryWidgetLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: DeliveryWidgetAttributes.self) { context in
            VStack(spacing: 10) {
                HStack {
                    VStack(alignment: .leading) {
                        Text("Arriving in \(Int(context.state.eta)) minutes ✌️")
                            .font(.headline)
                            .bold()
                        Text("On time  |  Order is on the way")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    }
                    Spacer()
                    Image("zomato-logo")
                        .resizable()
                        .frame(width: 60, height: 20)
                }
                HStack(spacing: 5) {
                    Image(systemName: "fork.knife")
                    ZStack(alignment: .leading) {
                        Rectangle()
                            .frame(width: 200, height: 6)
                            .cornerRadius(3)
                            .foregroundColor(.gray.opacity(0.3))
                      Rectangle()
                          .frame(width: max(200 * CGFloat(context.state.progress), 10), height: 6)
                          .cornerRadius(3)
                          .foregroundColor(.green)
                        Image("rider")
                            .resizable()
                            .frame(width: 40, height: 40)
                            .offset(x: CGFloat(context.state.progress) * 200 - 20)
                    }
                    Image(systemName: "house.fill")
                }
            }
            .padding()
            .activityBackgroundTint(.black)
            .activitySystemActionForegroundColor(.white)
        } dynamicIsland: { context in
            DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    Text("\(Int(context.state.eta)) min")
                        .font(.caption)
                        .bold()
                        .foregroundStyle(.white)
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Image("rider")
                        .resizable()
                        .frame(width: 25, height: 25)
                        .offset(x: CGFloat(context.state.progress) * 80 - 40)
                }
            } compactLeading: {
                Text("\(Int(context.state.eta)) min")
                    .font(.caption)
            } compactTrailing: {
                Image(systemName: "house.fill")
            } minimal: {
              Text("Show me")
                .font(.body)
                .foregroundStyle(.blue, .brown)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}
