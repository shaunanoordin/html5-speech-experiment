/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*  
	HTML5 Speech Experiment
	==========

	An experiment to use the still-in-development (as of Mar 2018) Web Speech API.

	(Shaun A. Noordin || shaunanoordin.com || 20180301)
	********************************************************************************
	 */

	/*  Primary App Class
	 */
	//==============================================================================
	var App = function () {
	  function App() {
	    _classCallCheck(this, App);

	    //Set App elements.
	    //--------------------------------
	    this.html = {
	      mainText: document.getElementById("main-text"),
	      listenButton: document.getElementById("listen-button"),
	      speakButton: document.getElementById("speak-button")
	    };
	    this.speechRecognition = null;
	    this.listenStatus = "";
	    //--------------------------------

	    //Bind functions.
	    //--------------------------------
	    this.onListenStart = this.onListenStart.bind(this);
	    this.onListenEnd = this.onListenEnd.bind(this);
	    this.onListenResults = this.onListenResults.bind(this);
	    this.onListenError = this.onListenError.bind(this);
	    this.listenButton_onClick = this.listenButton_onClick.bind(this);
	    //--------------------------------

	    //Speech Recognition
	    //--------------------------------
	    //First check: do we have Speech Recognition on this browser?
	    //Chrome uses the webkit prefix, and Chrome 64is the only browser that I've
	    //managed to successfully test with.

	    try {
	      if ("webkitSpeechRecognition" in window) {
	        //Chrome
	        this.speechRecognition = new webkitSpeechRecognition();
	      } else if ("SpeechRecognition" in window) {
	        //Should be the future "standard"
	        this.speechRecognition = new SpeechRecognition();
	      }
	    } catch (err) {
	      console.error("SpeechRecognition error: ", err);
	    }

	    if (this.speechRecognition) {
	      //Note that SpeechRecognition has to be triggered by a user event, e.g.
	      //voiceButton.onClick = () => { this.speechRecognition.start() }
	      //This will then prompt the user to provide mic permissions.

	      this.speechRecognition.onstart = this.onListenStart;
	      this.speechRecognition.onend = this.onListenEnd;
	      this.speechRecognition.onresult = this.onListenResults;
	      this.speechRecognition.onerror = this.onListenError;

	      this.html.listenButton.onclick = this.listenButton_onClick;
	    } else {
	      this.html.listenButton.textContent = "(Can't listen)";
	      this.html.listenButton.className = "disabled button";
	    }
	  }

	  //----------------------------------------------------------------

	  _createClass(App, [{
	    key: "onListenStart",
	    value: function onListenStart(e) {
	      console.log("onListenStart: ", e);
	      this.listenStatus = "listening";
	      this.html.listenButton.textContent = "Listening...";
	    }
	  }, {
	    key: "onListenEnd",
	    value: function onListenEnd(e) {
	      console.log("onListenEnd: ", e);
	      this.listenStatus = "";
	      this.html.listenButton.textContent = "Listen";
	    }
	  }, {
	    key: "onListenResults",
	    value: function onListenResults(e) {
	      console.log("onListenResults: ", e);

	      if (e && e.results) {
	        var text = this.html.mainText.value.replace(/\s+$/g, '') + ' ';
	        for (var i = 0; i < e.results.length; i++) {
	          if (e.results[i].isFinal) {
	            for (var j = 0; j < e.results.length; j++) {
	              text += e.results[i][j].transcript + ' ';
	            }
	          } else {
	            console.log(e.results[i]);
	          }
	        }
	        this.html.mainText.value = text;
	      }
	    }
	  }, {
	    key: "onListenError",
	    value: function onListenError(err) {
	      console.error("onListenError: ", err);
	    }

	    //----------------------------------------------------------------

	  }, {
	    key: "listenButton_onClick",
	    value: function listenButton_onClick(e) {
	      console.log("CLICK", this.speechRecognition);
	      if (!this.speechRecognition) return;

	      if (this.listenStatus === "listening") {
	        this.speechRecognition.stop();
	      } else {
	        this.speechRecognition.start();
	      }
	    }
	  }]);

	  return App;
	}();
	//==============================================================================

	/*  Initialisations
	 */
	//==============================================================================


	var app;
	window.onload = function () {
	  window.app = new App();
	};
	//==============================================================================

/***/ }
/******/ ]);