
import { NativeModules } from 'react-native';
const { LiveActivityManager } = NativeModules;

export function startDeliveryActivity(orderId :string) {
    LiveActivityManager.startLiveActivity(orderId, 0.1, 24);
    let progress = 0;
    let eta = 24;
    const interval = setInterval(() => {
        if (progress >= 1) {
            clearInterval(interval);
        }
        progress += 0.1;
        eta -= 2;
        LiveActivityManager.updateProgress(progress, eta);
    }, 1000);
}