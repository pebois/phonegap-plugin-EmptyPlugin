//  EmptyPlugin.h
//
//  Created by Pierre-Emmanuel Bois on 08/08/13.
//
//  Copyright 2012-2013 Pierre-Emmanuel Bois. All rights reserved.
//  MIT Licensed

#import <Cordova/CDV.h>
#import <UIKit/UIKit.h>

@interface EmptyPlugin : CDVPlugin {
}

- (void)test:(CDVInvokedUrlCommand*)command;

@end
