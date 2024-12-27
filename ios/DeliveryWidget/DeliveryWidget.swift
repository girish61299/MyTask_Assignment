import WidgetKit
import SwiftUI
import ActivityKit

// Define the attributes and content state for the Live Activity


// Provider to fetch and provide live activity data
struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> DeliveryWidgetEntry {
        // Placeholder content while the widget is loading
        DeliveryWidgetEntry(date: Date(), emoji: "😀", progress: 0.1, eta: 24)
    }

    func getSnapshot(in context: Context, completion: @escaping (DeliveryWidgetEntry) -> ()) {
        // Snapshot for the widget
        let entry = DeliveryWidgetEntry(date: Date(), emoji: "😀", progress: 0.1, eta: 24)
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<DeliveryWidgetEntry>) -> ()) {
        var entries: [DeliveryWidgetEntry] = []

        // Generate a timeline for the widget, which could update the progress at regular intervals.
        let currentDate = Date()

        // Adding 5 timeline entries with different progress
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let progress = Double(hourOffset) * 0.2 // Simulate delivery progress
            let eta = 24 - (Double(hourOffset) * 4) // Simulate decreasing ETA

            let entry = DeliveryWidgetEntry(date: entryDate, emoji: "🚚", progress: progress, eta: eta)
            entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

// Define the entry data for the widget
struct DeliveryWidgetEntry: TimelineEntry {
    let date: Date
    let emoji: String
    let progress: Double
    let eta: Double
}

// Define the widget's view
struct DeliveryWidgetEntryView : View {
    var entry: Provider.Entry

    var body: some View {
        VStack {
            Text("Time:")
            Text(entry.date, style: .time)

            Text("Delivery Status:")
            HStack {
                Text("Progress: \(Int(entry.progress * 100))%")
                Spacer()
                Text("ETA: \(Int(entry.eta)) mins")
            }
            .font(.subheadline)
            .foregroundColor(.gray)

            // Showing emoji as a placeholder for delivery status
            Text(entry.emoji)
                .font(.largeTitle)
        }
        .padding()
    }
}

// Define the main widget configuration
struct DeliveryWidget: Widget {
    let kind: String = "DeliveryWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            if #available(iOS 17.0, *) {
                DeliveryWidgetEntryView(entry: entry)
                    .containerBackground(.fill.tertiary, for: .widget)
            } else {
                DeliveryWidgetEntryView(entry: entry)
                    .padding()
                    .background()
            }
        }
        .configurationDisplayName("Delivery Progress Widget")
        .description("Displays live progress of delivery with ETA and status.")
    }
}

#Preview(as: .systemSmall) {
    DeliveryWidget()
} timeline: {
    DeliveryWidgetEntry(date: .now, emoji: "😀", progress: 0.1, eta: 24)
}
