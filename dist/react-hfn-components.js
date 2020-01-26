(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactHFNComponents"] = factory(require("react"));
	else
		root["ReactHFNComponents"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/FileInput.js":
/*!*************************************!*\
  !*** ./src/components/FileInput.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\nvar DEFAULT_CONFIG = {\n  maxBytes: 5000\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {\n  var _ref$config = _ref.config,\n      config = _ref$config === void 0 ? DEFAULT_CONFIG : _ref$config;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"file\",\n    ref: ref,\n    className: config.classNames,\n    onInput: setFilesToUpload.bind(null, config),\n    onChange: function onChange() {\n      return console.log('changed...');\n    },\n    multiple: config.multiple\n  });\n}));\n\nfunction setFilesToUpload(_ref2, evt) {\n  var maxByteExceededCallback = _ref2.maxByteExceededCallback,\n      maxBytes = _ref2.maxBytes,\n      setFilesToUpload = _ref2.setFilesToUpload;\n\n  try {\n    var target = evt.target;\n\n    var filesToUpload = _toConsumableArray(target.files);\n\n    var totalBytes = filesToUpload.reduce(function (r, file) {\n      return r + file.size;\n    }, 0);\n\n    if (totalBytes > maxBytes) {\n      maxByteExceededCallback.call(null, arguments);\n      target.value = null;\n      setFilesToUpload([]);\n    } else {\n      setFilesToUpload(_toConsumableArray(target.files));\n    }\n  } catch (err) {\n    console.error(err);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GaWxlSW5wdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdEhGTkNvbXBvbmVudHMvLi9zcmMvY29tcG9uZW50cy9GaWxlSW5wdXQuanM/ZDM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBtYXhCeXRlczogNTAwMCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbih7Y29uZmlnPURFRkFVTFRfQ09ORklHfSwgcmVmKSB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17IGNvbmZpZy5jbGFzc05hbWVzIH1cbiAgICAgIG9uSW5wdXQ9eyBzZXRGaWxlc1RvVXBsb2FkLmJpbmQobnVsbCwgY29uZmlnKSB9XG4gICAgICBvbkNoYW5nZT17ICgpID0+IGNvbnNvbGUubG9nKCdjaGFuZ2VkLi4uJyl9XG4gICAgICBtdWx0aXBsZT17Y29uZmlnLm11bHRpcGxlfVxuICAgIC8+XG4gIClcbn0pXG5cbmZ1bmN0aW9uIHNldEZpbGVzVG9VcGxvYWQoe1xuICBtYXhCeXRlRXhjZWVkZWRDYWxsYmFjayxcbiAgbWF4Qnl0ZXMsXG4gIHNldEZpbGVzVG9VcGxvYWQsXG59LCBldnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7dGFyZ2V0fSA9IGV2dFxuICAgIGNvbnN0IGZpbGVzVG9VcGxvYWQgPSBbLi4udGFyZ2V0LmZpbGVzXVxuICAgIGNvbnN0IHRvdGFsQnl0ZXMgPSBmaWxlc1RvVXBsb2FkLnJlZHVjZSgociwgZmlsZSkgPT4gciArIGZpbGUuc2l6ZSwgMClcbiAgICBpZiAodG90YWxCeXRlcyA+IG1heEJ5dGVzKSB7XG4gICAgICBtYXhCeXRlRXhjZWVkZWRDYWxsYmFjay5jYWxsKG51bGwsIGFyZ3VtZW50cylcbiAgICAgIHRhcmdldC52YWx1ZSA9IG51bGxcbiAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbGVzVG9VcGxvYWQoW1xuICAgICAgICAuLi50YXJnZXQuZmlsZXMsXG4gICAgICBdKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FileInput.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: FileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_FileInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FileInput */ \"./src/components/FileInput.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FileInput\", function() { return _components_FileInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n //eslint-disable-line//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdEhGTkNvbXBvbmVudHMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgRmlsZUlucHV0IGZyb20gJy4vY29tcG9uZW50cy9GaWxlSW5wdXQnLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWFjdEhGTkNvbXBvbmVudHMvZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifT8yNDZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
});