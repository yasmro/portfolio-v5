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

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: getAllPosts, getPostBySlug, getMorePosts, getAllPostsWithSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostBySlug\", function() { return getPostBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMorePosts\", function() { return getMorePosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPostsWithSlug\", function() { return getAllPostsWithSlug; });\n// set client\nconst client = __webpack_require__(/*! contentful */ \"contentful\").createClient({\n  space: 'e7muoilmgguu',\n  accessToken: 'mVRLrgzLFIgwe3YL3XTV_V_MEF-7YQ1Hyr9k55LJ4-4'\n}); // get all posts\n\n\nasync function getAllPosts() {\n  const entries = await client.getEntries({\n    content_type: \"portfolio\"\n  }); // content_type: \"post\",\n  // order: \"-fields.date\",\n\n  if (entries.items) {\n    return entries.items;\n  }\n\n  console.log(`Error getting Entries for ${contentType.name}.`);\n} // get a post by slug\n\nasync function getPostBySlug(slug) {\n  const entries = await client.getEntries({\n    content_type: \"portfolio\",\n    limit: 1,\n    \"fields.slug[in]\": slug\n  });\n\n  if (entries.items) {\n    return entries.items[0];\n  }\n\n  console.log(`Error getting Entries for ${contentType.name}.`);\n} // get more 3 latest posts\n\nasync function getMorePosts(slug) {\n  const entries = await client.getEntries({\n    content_type: \"post\",\n    limit: 3,\n    order: \"-fields.date\",\n    \"fields.slug[nin]\": slug\n  });\n\n  if (entries.items) {\n    return entries.items;\n  }\n\n  console.log(`Error getting Entries for ${contentType.name}.`);\n}\n\nfunction parsePostSlug({\n  fields\n}) {\n  return {\n    slug: fields.slug\n  };\n}\n\nfunction parsePostSlugEntries(entries, cb = parsePostSlug) {\n  var _entries$items;\n\n  return entries === null || entries === void 0 ? void 0 : (_entries$items = entries.items) === null || _entries$items === void 0 ? void 0 : _entries$items.map(cb);\n} // get all slugs of posts\n\n\nasync function getAllPostsWithSlug() {\n  const entries = await client.getEntries({\n    content_type: \"post\",\n    select: \"fields.slug\"\n  });\n  return parsePostSlugEntries(entries, post => post.fields);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanM/OWIwYSJdLCJuYW1lcyI6WyJjbGllbnQiLCJyZXF1aXJlIiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJhY2Nlc3NUb2tlbiIsImdldEFsbFBvc3RzIiwiZW50cmllcyIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50VHlwZSIsIm5hbWUiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsImxpbWl0IiwiZ2V0TW9yZVBvc3RzIiwib3JkZXIiLCJwYXJzZVBvc3RTbHVnIiwiZmllbGRzIiwicGFyc2VQb3N0U2x1Z0VudHJpZXMiLCJjYiIsIm1hcCIsImdldEFsbFBvc3RzV2l0aFNsdWciLCJzZWxlY3QiLCJwb3N0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRSxjQUR5QztBQUVoREMsYUFBVyxFQUFFO0FBRm1DLENBQW5DLENBQWYsQyxDQUtBOzs7QUFDTyxlQUFlQyxXQUFmLEdBQTZCO0FBQ2xDLFFBQU1DLE9BQU8sR0FBRyxNQUFNTixNQUFNLENBQUNPLFVBQVAsQ0FBa0I7QUFDdENDLGdCQUFZLEVBQUU7QUFEd0IsR0FBbEIsQ0FBdEIsQ0FEa0MsQ0FJOUI7QUFDRjs7QUFDRixNQUFJRixPQUFPLENBQUNHLEtBQVosRUFBbUI7QUFDakIsV0FBT0gsT0FBTyxDQUFDRyxLQUFmO0FBQ0Q7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLDZCQUE0QkMsV0FBVyxDQUFDQyxJQUFLLEdBQTFEO0FBQ0QsQyxDQUVEOztBQUNPLGVBQWVDLGFBQWYsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ3hDLFFBQU1ULE9BQU8sR0FBRyxNQUFNTixNQUFNLENBQUNPLFVBQVAsQ0FBa0I7QUFDdENDLGdCQUFZLEVBQUUsV0FEd0I7QUFFdENRLFNBQUssRUFBRSxDQUYrQjtBQUd0Qyx1QkFBbUJEO0FBSG1CLEdBQWxCLENBQXRCOztBQUtBLE1BQUlULE9BQU8sQ0FBQ0csS0FBWixFQUFtQjtBQUNqQixXQUFPSCxPQUFPLENBQUNHLEtBQVIsQ0FBYyxDQUFkLENBQVA7QUFDRDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQWEsNkJBQTRCQyxXQUFXLENBQUNDLElBQUssR0FBMUQ7QUFDRCxDLENBRUQ7O0FBQ08sZUFBZUksWUFBZixDQUE0QkYsSUFBNUIsRUFBa0M7QUFDdkMsUUFBTVQsT0FBTyxHQUFHLE1BQU1OLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQjtBQUN0Q0MsZ0JBQVksRUFBRSxNQUR3QjtBQUV0Q1EsU0FBSyxFQUFFLENBRitCO0FBR3RDRSxTQUFLLEVBQUUsY0FIK0I7QUFJdEMsd0JBQW9CSDtBQUprQixHQUFsQixDQUF0Qjs7QUFPQSxNQUFJVCxPQUFPLENBQUNHLEtBQVosRUFBbUI7QUFDakIsV0FBT0gsT0FBTyxDQUFDRyxLQUFmO0FBQ0Q7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFhLDZCQUE0QkMsV0FBVyxDQUFDQyxJQUFLLEdBQTFEO0FBQ0Q7O0FBRUQsU0FBU00sYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQW1DO0FBQ2pDLFNBQU87QUFDTEwsUUFBSSxFQUFFSyxNQUFNLENBQUNMO0FBRFIsR0FBUDtBQUdEOztBQUVELFNBQVNNLG9CQUFULENBQThCZixPQUE5QixFQUF1Q2dCLEVBQUUsR0FBR0gsYUFBNUMsRUFBMkQ7QUFBQTs7QUFDekQsU0FBT2IsT0FBUCxhQUFPQSxPQUFQLHlDQUFPQSxPQUFPLENBQUVHLEtBQWhCLG1EQUFPLGVBQWdCYyxHQUFoQixDQUFvQkQsRUFBcEIsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBQ08sZUFBZUUsbUJBQWYsR0FBcUM7QUFDMUMsUUFBTWxCLE9BQU8sR0FBRyxNQUFNTixNQUFNLENBQUNPLFVBQVAsQ0FBa0I7QUFDdENDLGdCQUFZLEVBQUUsTUFEd0I7QUFFdENpQixVQUFNLEVBQUU7QUFGOEIsR0FBbEIsQ0FBdEI7QUFJQSxTQUFPSixvQkFBb0IsQ0FBQ2YsT0FBRCxFQUFXb0IsSUFBRCxJQUFVQSxJQUFJLENBQUNOLE1BQXpCLENBQTNCO0FBQ0QiLCJmaWxlIjoiLi9saWIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZXQgY2xpZW50XG5cbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xuICBzcGFjZTogJ2U3bXVvaWxtZ2d1dScsXG4gIGFjY2Vzc1Rva2VuOiAnbVZSTHJnekxGSWd3ZTNZTDNYVFZfVl9NRUYtN1lRMUh5cjlrNTVMSjQtNCcsXG59KTtcblxuLy8gZ2V0IGFsbCBwb3N0c1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuICAgIGNvbnRlbnRfdHlwZTogXCJwb3J0Zm9saW9cIlxuICB9KTtcbiAgICAgIC8vIGNvbnRlbnRfdHlwZTogXCJwb3N0XCIsXG4gICAgLy8gb3JkZXI6IFwiLWZpZWxkcy5kYXRlXCIsXG4gIGlmIChlbnRyaWVzLml0ZW1zKSB7XG4gICAgcmV0dXJuIGVudHJpZXMuaXRlbXM7XG4gIH1cbiAgY29uc29sZS5sb2coYEVycm9yIGdldHRpbmcgRW50cmllcyBmb3IgJHtjb250ZW50VHlwZS5uYW1lfS5gKTtcbn1cblxuLy8gZ2V0IGEgcG9zdCBieSBzbHVnXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XG4gICAgY29udGVudF90eXBlOiBcInBvcnRmb2xpb1wiLFxuICAgIGxpbWl0OiAxLFxuICAgIFwiZmllbGRzLnNsdWdbaW5dXCI6IHNsdWcsXG4gIH0pO1xuICBpZiAoZW50cmllcy5pdGVtcykge1xuICAgIHJldHVybiBlbnRyaWVzLml0ZW1zWzBdO1xuICB9XG4gIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYCk7XG59XG5cbi8vIGdldCBtb3JlIDMgbGF0ZXN0IHBvc3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9yZVBvc3RzKHNsdWcpIHtcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICAgIGxpbWl0OiAzLFxuICAgIG9yZGVyOiBcIi1maWVsZHMuZGF0ZVwiLFxuICAgIFwiZmllbGRzLnNsdWdbbmluXVwiOiBzbHVnLFxuICB9KTtcblxuICBpZiAoZW50cmllcy5pdGVtcykge1xuICAgIHJldHVybiBlbnRyaWVzLml0ZW1zO1xuICB9XG4gIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUG9zdFNsdWcoeyBmaWVsZHMgfSkge1xuICByZXR1cm4ge1xuICAgIHNsdWc6IGZpZWxkcy5zbHVnLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVBvc3RTbHVnRW50cmllcyhlbnRyaWVzLCBjYiA9IHBhcnNlUG9zdFNsdWcpIHtcbiAgcmV0dXJuIGVudHJpZXM/Lml0ZW1zPy5tYXAoY2IpO1xufVxuXG4vLyBnZXQgYWxsIHNsdWdzIG9mIHBvc3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNXaXRoU2x1ZygpIHtcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICAgIHNlbGVjdDogXCJmaWVsZHMuc2x1Z1wiLFxuICB9KTtcbiAgcmV0dXJuIHBhcnNlUG9zdFNsdWdFbnRyaWVzKGVudHJpZXMsIChwb3N0KSA9PiBwb3N0LmZpZWxkcyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/index.js\n");

/***/ }),

/***/ "./pages/works/[id].js":
/*!*****************************!*\
  !*** ./pages/works/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib */ \"./lib/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/YuOhno/portfoliov5/pages/works/[id].js\";\n\n\n\n\nconst Post = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: props.show.fields.title\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    children: props.show.fields.description\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined), props.show.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: props.show.image.medium\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 25\n  }, undefined) : null]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 7,\n  columnNumber: 3\n}, undefined);\n\nPost.getInitialProps = async function (context) {\n  const {\n    id\n  } = context.query;\n  const res2 = await Object(_lib__WEBPACK_IMPORTED_MODULE_2__[\"getPostBySlug\"])(id);\n  console.log(res2); // console.log(`Show data fetched. Count: ${data.length}`);\n\n  return {\n    show: res2\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93b3Jrcy8uanM/YTNmMiJdLCJuYW1lcyI6WyJQb3N0IiwicHJvcHMiLCJzaG93IiwiZmllbGRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibWVkaXVtIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJyZXMyIiwiZ2V0UG9zdEJ5U2x1ZyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHQyxLQUFLLGlCQUNoQjtBQUFBLDBCQUNFO0FBQUEsY0FBS0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQVgsQ0FBa0JDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHFEQUFEO0FBQWUsWUFBUSxFQUFFSCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsTUFBWCxDQUFrQkU7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0dKLEtBQUssQ0FBQ0MsSUFBTixDQUFXSSxLQUFYLGdCQUFtQjtBQUFLLE9BQUcsRUFBRUwsS0FBSyxDQUFDQyxJQUFOLENBQVdJLEtBQVgsQ0FBaUJDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBbkIsR0FBMkQsSUFIOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBUUFQLElBQUksQ0FBQ1EsZUFBTCxHQUF1QixnQkFBZUMsT0FBZixFQUF3QjtBQUU3QyxRQUFNO0FBQUVDO0FBQUYsTUFBU0QsT0FBTyxDQUFDRSxLQUF2QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNQywwREFBYSxDQUFDSCxFQUFELENBQWhDO0FBQ0VJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEVBSjJDLENBSzNDOztBQUVBLFNBQU87QUFBRVYsUUFBSSxFQUFFVTtBQUFSLEdBQVA7QUFDSCxDQVJEOztBQVVlWixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3dvcmtzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnIH0gZnJvbSAnLi4vLi4vbGliJ1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5cbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPntwcm9wcy5zaG93LmZpZWxkcy50aXRsZX08L2gxPlxuICAgIDxSZWFjdE1hcmtkb3duIGNoaWxkcmVuPXtwcm9wcy5zaG93LmZpZWxkcy5kZXNjcmlwdGlvbn0gLz5cbiAgICB7cHJvcHMuc2hvdy5pbWFnZSA/IDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0gLz4gOiBudWxsfVxuICA8L2Rpdj5cbik7XG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xuICBcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcbiAgY29uc3QgcmVzMiA9IGF3YWl0IGdldFBvc3RCeVNsdWcoaWQpO1xuICAgIGNvbnNvbGUubG9nKHJlczIpXG4gICAgLy8gY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuICAgIHJldHVybiB7IHNob3c6IHJlczJ9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/works/[id].js\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"contentful\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCI/OWU0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb250ZW50ZnVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///contentful\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-markdown\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiPzY4YjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbWFya2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-markdown\n");

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