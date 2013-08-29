//  emptyplugin.js
//
//  Created by Pierre-Emmanuel Bois on 08/08/13.
//
//  Copyright 2012-2013 Pierre-Emmanuel Bois. All rights reserved.
//  MIT Licensed

var EmptyPlugin = {
    test: function (args, callback) {
        cordova.exec(callback, function (err) {
            callback('Error: Test');
        }, "EmptyPlugin", "test", [args]);
    }
};

module.exports = EmptyPlugin;
