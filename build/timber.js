/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TimberWidget = function () {
	  function TimberWidget(element) {
	    _classCallCheck(this, TimberWidget);
	
	    this._element = document.getElementById('timber-element');
	    this._body = document.body;
	    this._timberElement = document.getElementsByClassName('TimberWidget')[0];
	  }
	
	  _createClass(TimberWidget, [{
	    key: 'returnOffset',
	    value: function returnOffset(element) {
	      var _x = 0;
	      var _y = 0;
	
	      while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
	        _x += element.offsetLeft - element.scrollLeft;
	        _y += element.offsetTop - element.scrollTop;
	        element = element.offsetParent;
	      }
	
	      return {
	        left: _x,
	        top: _y
	      };
	    }
	  }, {
	    key: 'appendStyles',
	    value: function appendStyles() {
	      var styles = '\n    .TimberWidget {\n      position: absolute;\n      top: 50px;\n      left: 200px;\n      z-index: 999;\n      width: 100%;\n      max-width: 320px;\n      height: 400px;\n      background-color: #fff;\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.1);\n      border-radius: 5px;\n      overflow: hidden;\n    }\n\n    .TimberWidget-frame {\n      position: relative;\n      border: 0;\n      outline: 0;\n      overflow: hidden;\n      border-radius: 5px;\n      width: 100%;\n      height: 100%;\n    }\n    ';
	
	      document.write('<style type="text/css">' + styles + '</style>');
	    }
	  }, {
	    key: 'createElement',
	    value: function createElement() {
	      var elementFlickPosition = this.returnOffset(this.element);
	
	      var twContainer = document.createElement('div');
	      twContainer.classList.add('TimberWidget');
	      twContainer.style.left = elementFlickPosition.left + 'px';
	      twContainer.style.top = elementFlickPosition.top + 20 + 'px';
	      twContainer.style.transform = "translateX(-50%)";
	
	      var twFrame = document.createElement('iframe');
	      twFrame.src = 'https://alexpate.uk';
	      twFrame.classList.add('TimberWidget-frame');
	
	      twContainer.appendChild(twFrame);
	
	      this.documentBody.appendChild(twContainer);
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.appendStyles();
	      this.createElement();
	
	      console.log(this.returnOffset(this.element));
	    }
	  }, {
	    key: 'element',
	    get: function get() {
	      return this._element;
	    }
	  }, {
	    key: 'documentBody',
	    get: function get() {
	      return this._body;
	    }
	  }, {
	    key: 'timberElement',
	    get: function get() {
	      return this._timberElement;
	    }
	  }]);
	
	  return TimberWidget;
	}();
	
	var timberWidget = new TimberWidget();
	timberWidget.init();

/***/ }
/******/ ]);
//# sourceMappingURL=timber.js.map