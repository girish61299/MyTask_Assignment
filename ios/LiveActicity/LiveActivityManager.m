//
//  LiveActivityManager.m
//  MyTask
//
//  Created by Girish Dadhich on 25/12/24.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LiveActivityManager, NSObject)
RCT_EXTERN_METHOD(startLiveActivity:(NSString *)orderId progress:(double)progress eta:(double)eta)
RCT_EXTERN_METHOD(updateProgress:(NSString *)progress eta:(double)eta)
@end
