module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(828);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 353:
/***/ (function(module) {

module.exports = eval("require")("q");


/***/ }),

/***/ 357:
/***/ (function(module) {

module.exports = require("assert");

/***/ }),

/***/ 619:
/***/ (function(module) {

module.exports = require("constants");

/***/ }),

/***/ 809:
/***/ (function(module) {

module.exports = eval("require")("../LxCommunicator");


/***/ }),

/***/ 828:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

//=== Node.js only ===

const { delay, timeout } = __webpack_require__(353);
const { SSL_OP_EPHEMERAL_RSA } = __webpack_require__(619);
const { notEqual } = __webpack_require__(357);
const { iterate } = __webpack_require__(896);

// Lets require and assign LxCommunicator if the global LxCommunicator object doesn't exist yet (Node.js)
if (typeof LxCommunicator === 'undefined') {
    global.LxCommunicator = __webpack_require__(809);
}
//=== Node.js only ===

// Prepare our variables
// uuid is used to identify a device
var uuid = getUUID(),
    // delegateObj is contains all available delegate methods
    delegateObj = {
        socketOnDataProgress: function socketOnDataProgress(socket, progress) {
            console.log(progress);
        },
        socketOnTokenConfirmed: function socketOnTokenConfirmed(socket, response) {
            console.log(response);
        },
        socketOnTokenReceived: function socketOnTokenReceived(socket, result) {
            console.log(result);
        },
        socketOnTokenRefresh: function socketOnTokenRefresh(socket, newTkObj) {
            console.log(newTkObj);
        },
        socketOnConnectionClosed: function socketOnConnectionClosed(socket, code) {
            console.log(code);
        },
        socketOnEventReceived: function socketOnEventReceived(socket, events, type) {
           
        }
    },
    // deviceInfo is a device specific information like the userAgent of a Browser
    deviceInfo;

// Node.js doesn't have a userAgent, lets use the hostname instead
if (typeof window !== "undefined") {
    deviceInfo = window.navigator.userAgent;
} else {
    deviceInfo = __webpack_require__(87).hostname();
}

// OPTIONAL
// If no version is set LxCommunicator.WebSocket will fetch the version on its own
// This version is needed to determine if the Miniserver supports encryption and tokens
//LxCommunicator.setConfigVersion("9.3.2.20");

// Get the LxCommunicator.WebSocketConfig constructor, to save some space
var WebSocketConfig = LxCommunicator.WebSocketConfig;

// Instantiate a config object to pass it to the LxCommunicator.WebSocket later
var config = new WebSocketConfig(WebSocketConfig.protocol.WS, uuid, deviceInfo, WebSocketConfig.permission.APP, false);

// OPTIONAL: assign the delegateObj to be able to react on delegate calls
config.delegate = delegateObj;

// Instantiate the LxCommunicator.WebSocket, it is our actual WebSocket
var socket = new LxCommunicator.WebSocket(config);


// Open a Websocket connection to a miniserver by just providing the host, username and password!
socket.open("testminiserver.loxone.com:7777", "app", "LoxLIVEpasswordTest").then(function() {
    // Send a command, handle the response as you wish
    socket.send("jdev/sps/enablebinstatusupdate").then(function(respons) {
        console.log("Successfully executed '" + respons.LL.control + "' with code " + respons.LL.Code + " and value " + respons.LL.value);
        circleScenes();
    });
});


//=======================================================================================
// Helper functions
function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
//=======================================================================================




// 778, 3, 1, 2
var scenesToIterate = [778, 3, 1, 2];
var itInterval = 1000;
var idx = 0;


// Aufgabe:

//  Stimmungen zyklisch durchschalten
//    •  Dazu das Command format jdev/sps/io/15064d77-002f-de7c-ffffc1a0bc6dbf48/changeTo/{sceneNumber}
//       verwenden und "{sceneNumber}" mit der nummer der Stimmung in der "iterate" function ersetzen
//    •  Wenn der Befehl abgeschickt worden ist und ein Rückgabewert angekommen ist soll mit einem Timeout die nächste Stimmung gestatet werden
function circleScenes() {
    var iterate = function iterate (scenesToIterate) {
        if (idx < scenesToIterate.length) { 
            var scene = scenesToIterate[idx];
            console.log(scene); 
                   
            socket.send("jdev/sps/io/15064d77-002f-de7c-ffffc1a0bc6dbf48/changeTo/" + scene).then(function(respons) {
                 
                idx++; 
                console.log("Executed");
                
                setTimeout(function () {
                    iterate(scenesToIterate)
                }, itInterval);
            })
        }
        
        else {
            idx = 0; 
            setTimeout(function () {
                iterate(scenesToIterate)
            }, 0);              
        }
    };

    ;
    iterate(scenesToIterate);
    
}


/***/ }),

/***/ 896:
/***/ (function(module) {

module.exports = eval("require")("when");


/***/ })

/******/ });