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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _importExample = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*  
	                                                                                                                                                          Starter JS
	                                                                                                                                                          ==========
	                                                                                                                                                          
	                                                                                                                                                          Starter tempalte for JS projects
	                                                                                                                                                          
	                                                                                                                                                          (Shaun A. Noordin || shaunanoordin.com || 20160509)
	                                                                                                                                                          ********************************************************************************
	                                                                                                                                                           */

	/*  Primary App Class
	 */
	//==============================================================================

	var App = function App() {
	  _classCallCheck(this, App);

	  var importExample = new _importExample.ImportExample("HI THERE");

	  this.console = document.getElementById("console");
	  this.console.innerHTML = "This is a starter template for JS projects. <br>" + importExample.getText();
	};
	//==============================================================================

	/*  Initialisations
	 */
	//==============================================================================


	var app;
	window.onload = function () {
	  window.app = new App();
	};
	//==============================================================================

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*  Example Class
	    Demonstrates ES6 import function in main.js
	 */
	//==============================================================================

	var ImportExample = exports.ImportExample = function () {
	  function ImportExample() {
	    var txt = arguments.length <= 0 || arguments[0] === undefined ? "DEFAULT TEXT" : arguments[0];

	    _classCallCheck(this, ImportExample);

	    this.txt = txt;
	  }

	  _createClass(ImportExample, [{
	    key: "getText",
	    value: function getText() {
	      return "An ImportExample class was imported and has the text: " + this.txt;
	    }
	  }]);

	  return ImportExample;
	}();
	//==============================================================================

/***/ }
/******/ ]);