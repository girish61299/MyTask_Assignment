import ActivityKit
import UIKit

@available(iOS 16.1, *)
@objc(LiveActivityManager)
class LiveActivityManager: NSObject {
  var activity: Activity<DeliveryWidgetAttributes>?

  @objc func startLiveActivity(_ orderId: String, progress: Double, eta: Double) {
      print("Starting live activity with orderId: \(orderId), progress: \(progress), eta: \(eta)")

      let attributes = DeliveryWidgetAttributes(orderID: orderId)
      let contentState = DeliveryWidgetAttributes.ContentState(progress: progress, eta: eta, isComplete: false)

      // Requesting Live Activity
      activity = try? Activity<DeliveryWidgetAttributes>.request(
          attributes: attributes,
          contentState: contentState,
          pushType: nil
      )

      if let activity = activity {
          print("Activity started successfully: \(activity)")
      } else {
          print("Failed to start the live activity.")
      }
  }


  @objc func updateProgress(_ progress: Double, eta: Double) {
      let contentState = DeliveryWidgetAttributes.ContentState(progress: progress, eta: eta, isComplete: progress >= 1.0)
      Task {
          print(progress, "is this is progress bar")
          await activity?.update(using: contentState)
          if progress >= 1.0 {
              await activity?.end(using: contentState, dismissalPolicy: .immediate)
          }
      }
  }
}
