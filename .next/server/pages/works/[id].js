module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/works/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/works/[id].js":
/*!*****************************!*\
  !*** ./pages/works/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/YuOhno/portfoliov5/pages/works/[id].js\";\n\n\nconst Post = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: props.show.name\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: props.show.summary\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined), props.show.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: props.show.image.medium\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 25\n  }, undefined) : null]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\nPost.getInitialProps = async function (context) {\n  const {\n    id\n  } = context.query;\n  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://api.tvmaze.com/shows/${id}`);\n  const show = await res.json();\n  console.log(`Fetched show: ${show.name}`);\n  return {\n    show\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93b3Jrcy8uanM/YTNmMiJdLCJuYW1lcyI6WyJQb3N0IiwicHJvcHMiLCJzaG93IiwibmFtZSIsInN1bW1hcnkiLCJpbWFnZSIsIm1lZGl1bSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwicmVzIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBR0MsS0FBSyxpQkFDaEI7QUFBQSwwQkFDRTtBQUFBLGNBQUtBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGNBQUlGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdHSCxLQUFLLENBQUNDLElBQU4sQ0FBV0csS0FBWCxnQkFBbUI7QUFBSyxPQUFHLEVBQUVKLEtBQUssQ0FBQ0MsSUFBTixDQUFXRyxLQUFYLENBQWlCQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW5CLEdBQTJELElBSDlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVFBTixJQUFJLENBQUNPLGVBQUwsR0FBdUIsZ0JBQWVDLE9BQWYsRUFBd0I7QUFDN0MsUUFBTTtBQUFFQztBQUFGLE1BQVNELE9BQU8sQ0FBQ0UsS0FBdkI7QUFDQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FBRSxnQ0FBK0JILEVBQUcsRUFBcEMsQ0FBdkI7QUFDQSxRQUFNUCxJQUFJLEdBQUcsTUFBTVMsR0FBRyxDQUFDRSxJQUFKLEVBQW5CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLGlCQUFnQmIsSUFBSSxDQUFDQyxJQUFLLEVBQXZDO0FBQ0EsU0FBTztBQUFFRDtBQUFGLEdBQVA7QUFDRCxDQU5EOztBQVFlRixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3dvcmtzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jb25zdCBQb3N0ID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4gICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeX08L3A+XG4gICAge3Byb3BzLnNob3cuaW1hZ2UgPyA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19IC8+IDogbnVsbH1cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKTtcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApO1xuICByZXR1cm4geyBzaG93IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/works/[id].js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });