import Foundation
import ActivityKit
import React

@objc(LiveActivityManager)
class LiveActivityManager: NSObject {
    var activity: Activity<DeliveryAttributes>?

    @objc func startLiveActivity(_ orderId: String, progress: Double, eta: Double) {
        let attributes = DeliveryAttributes(orderID: orderId)
        let contentState = DeliveryAttributes.ContentState(progress: progress, eta: eta, isComplete: false)
        activity = try? Activity<DeliveryAttributes>.request(
            attributes: attributes,
            contentState: contentState,
            pushType: nil
        )
    }

    @objc func updateProgress(_ progress: Double, eta: Double) {
        let contentState = DeliveryAttributes.ContentState(progress: progress, eta: eta, isComplete: progress >= 1.0)
        Task {
            await activity?.update(using: contentState)
            if progress >= 1.0 {
                await activity?.end(using: contentState, dismissalPolicy: .immediate)
            }
        }
    }
}
