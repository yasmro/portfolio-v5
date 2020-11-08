webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: getAllPosts, getPostBySlug, getMorePosts, getAllPostsWithSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostBySlug\", function() { return getPostBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMorePosts\", function() { return getMorePosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPostsWithSlug\", function() { return getAllPostsWithSlug; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\n// set client\nconsole.log(process.env);\n\nvar client = __webpack_require__(/*! contentful */ \"./node_modules/contentful/dist/es-modules/contentful.js\").createClient({\n  space: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_SPACE_ID,\n  accessToken: process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN\n}); // get all posts\n\n\nfunction getAllPosts() {\n  return _getAllPosts.apply(this, arguments);\n} // get a post by slug\n\nfunction _getAllPosts() {\n  _getAllPosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var entries;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return client.getEntries({});\n\n          case 2:\n            entries = _context.sent;\n\n            if (!entries.items) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", entries.items);\n\n          case 5:\n            console.log(\"Error getting Entries for \".concat(contentType.name, \".\"));\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getAllPosts.apply(this, arguments);\n}\n\nfunction getPostBySlug(_x) {\n  return _getPostBySlug.apply(this, arguments);\n} // get more 3 latest posts\n\nfunction _getPostBySlug() {\n  _getPostBySlug = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(slug) {\n    var entries;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return client.getEntries({\n              content_type: \"post\",\n              limit: 1,\n              \"fields.slug[in]\": slug\n            });\n\n          case 2:\n            entries = _context2.sent;\n\n            if (!entries.items) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", entries.items[0]);\n\n          case 5:\n            console.log(\"Error getting Entries for \".concat(contentType.name, \".\"));\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getPostBySlug.apply(this, arguments);\n}\n\nfunction getMorePosts(_x2) {\n  return _getMorePosts.apply(this, arguments);\n}\n\nfunction _getMorePosts() {\n  _getMorePosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(slug) {\n    var entries;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return client.getEntries({\n              content_type: \"post\",\n              limit: 3,\n              order: \"-fields.date\",\n              \"fields.slug[nin]\": slug\n            });\n\n          case 2:\n            entries = _context3.sent;\n\n            if (!entries.items) {\n              _context3.next = 5;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", entries.items);\n\n          case 5:\n            console.log(\"Error getting Entries for \".concat(contentType.name, \".\"));\n\n          case 6:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getMorePosts.apply(this, arguments);\n}\n\nfunction parsePostSlug(_ref) {\n  var fields = _ref.fields;\n  return {\n    slug: fields.slug\n  };\n}\n\nfunction parsePostSlugEntries(entries) {\n  var _entries$items;\n\n  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parsePostSlug;\n  return entries === null || entries === void 0 ? void 0 : (_entries$items = entries.items) === null || _entries$items === void 0 ? void 0 : _entries$items.map(cb);\n} // get all slugs of posts\n\n\nfunction getAllPostsWithSlug() {\n  return _getAllPostsWithSlug.apply(this, arguments);\n}\n\nfunction _getAllPostsWithSlug() {\n  _getAllPostsWithSlug = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n    var entries;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return client.getEntries({\n              content_type: \"post\",\n              select: \"fields.slug\"\n            });\n\n          case 2:\n            entries = _context4.sent;\n            return _context4.abrupt(\"return\", parsePostSlugEntries(entries, function (post) {\n              return post.fields;\n            }));\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _getAllPostsWithSlug.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2luZGV4LmpzPzliMGEiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJjbGllbnQiLCJyZXF1aXJlIiwiY3JlYXRlQ2xpZW50Iiwic3BhY2UiLCJSRUFDVF9BUFBfTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiUkVBQ1RfQVBQX05FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIiwiZ2V0QWxsUG9zdHMiLCJnZXRFbnRyaWVzIiwiZW50cmllcyIsIml0ZW1zIiwiY29udGVudFR5cGUiLCJuYW1lIiwiZ2V0UG9zdEJ5U2x1ZyIsInNsdWciLCJjb250ZW50X3R5cGUiLCJsaW1pdCIsImdldE1vcmVQb3N0cyIsIm9yZGVyIiwicGFyc2VQb3N0U2x1ZyIsImZpZWxkcyIsInBhcnNlUG9zdFNsdWdFbnRyaWVzIiwiY2IiLCJtYXAiLCJnZXRBbGxQb3N0c1dpdGhTbHVnIiwic2VsZWN0IiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLENBQUNDLEdBQXBCOztBQUNBLElBQU1DLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQywyRUFBRCxDQUFQLENBQXNCQyxZQUF0QixDQUFtQztBQUNoREMsT0FBSyxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUsseUNBRDZCO0FBRWhEQyxhQUFXLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTztBQUZ1QixDQUFuQyxDQUFmLEMsQ0FLQTs7O0FBQ08sU0FBZUMsV0FBdEI7QUFBQTtBQUFBLEMsQ0FZQTs7O2tNQVpPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0IsRUFBbEIsQ0FEakI7O0FBQUE7QUFDQ0MsbUJBREQ7O0FBQUEsaUJBTURBLE9BQU8sQ0FBQ0MsS0FOUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FPSUQsT0FBTyxDQUFDQyxLQVBaOztBQUFBO0FBU0xkLG1CQUFPLENBQUNDLEdBQVIscUNBQXlDYyxXQUFXLENBQUNDLElBQXJEOztBQVRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFhQSxTQUFlQyxhQUF0QjtBQUFBO0FBQUEsQyxDQVlBOzs7b01BWk8sa0JBQTZCQyxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQmQsTUFBTSxDQUFDUSxVQUFQLENBQWtCO0FBQ3RDTywwQkFBWSxFQUFFLE1BRHdCO0FBRXRDQyxtQkFBSyxFQUFFLENBRitCO0FBR3RDLGlDQUFtQkY7QUFIbUIsYUFBbEIsQ0FEakI7O0FBQUE7QUFDQ0wsbUJBREQ7O0FBQUEsaUJBTURBLE9BQU8sQ0FBQ0MsS0FOUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FPSUQsT0FBTyxDQUFDQyxLQUFSLENBQWMsQ0FBZCxDQVBKOztBQUFBO0FBU0xkLG1CQUFPLENBQUNDLEdBQVIscUNBQXlDYyxXQUFXLENBQUNDLElBQXJEOztBQVRLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFhQSxTQUFlSyxZQUF0QjtBQUFBO0FBQUE7OzttTUFBTyxrQkFBNEJILElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCZCxNQUFNLENBQUNRLFVBQVAsQ0FBa0I7QUFDdENPLDBCQUFZLEVBQUUsTUFEd0I7QUFFdENDLG1CQUFLLEVBQUUsQ0FGK0I7QUFHdENFLG1CQUFLLEVBQUUsY0FIK0I7QUFJdEMsa0NBQW9CSjtBQUprQixhQUFsQixDQURqQjs7QUFBQTtBQUNDTCxtQkFERDs7QUFBQSxpQkFRREEsT0FBTyxDQUFDQyxLQVJQO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQVNJRCxPQUFPLENBQUNDLEtBVFo7O0FBQUE7QUFXTGQsbUJBQU8sQ0FBQ0MsR0FBUixxQ0FBeUNjLFdBQVcsQ0FBQ0MsSUFBckQ7O0FBWEs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWNQLFNBQVNPLGFBQVQsT0FBbUM7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDakMsU0FBTztBQUNMTixRQUFJLEVBQUVNLE1BQU0sQ0FBQ047QUFEUixHQUFQO0FBR0Q7O0FBRUQsU0FBU08sb0JBQVQsQ0FBOEJaLE9BQTlCLEVBQTJEO0FBQUE7O0FBQUEsTUFBcEJhLEVBQW9CLHVFQUFmSCxhQUFlO0FBQ3pELFNBQU9WLE9BQVAsYUFBT0EsT0FBUCx5Q0FBT0EsT0FBTyxDQUFFQyxLQUFoQixtREFBTyxlQUFnQmEsR0FBaEIsQ0FBb0JELEVBQXBCLENBQVA7QUFDRCxDLENBRUQ7OztBQUNPLFNBQWVFLG1CQUF0QjtBQUFBO0FBQUE7OzswTUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQnhCLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQjtBQUN0Q08sMEJBQVksRUFBRSxNQUR3QjtBQUV0Q1Usb0JBQU0sRUFBRTtBQUY4QixhQUFsQixDQURqQjs7QUFBQTtBQUNDaEIsbUJBREQ7QUFBQSw4Q0FLRVksb0JBQW9CLENBQUNaLE9BQUQsRUFBVSxVQUFDaUIsSUFBRDtBQUFBLHFCQUFVQSxJQUFJLENBQUNOLE1BQWY7QUFBQSxhQUFWLENBTHRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9saWIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZXQgY2xpZW50XG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudilcbmNvbnN0IGNsaWVudCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKS5jcmVhdGVDbGllbnQoe1xuICBzcGFjZTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX05FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9BQ0NFU1NfVE9LRU4sXG59KTtcblxuLy8gZ2V0IGFsbCBwb3N0c1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xuXG4gIH0pO1xuICAgICAgLy8gY29udGVudF90eXBlOiBcInBvc3RcIixcbiAgICAvLyBvcmRlcjogXCItZmllbGRzLmRhdGVcIixcbiAgaWYgKGVudHJpZXMuaXRlbXMpIHtcbiAgICByZXR1cm4gZW50cmllcy5pdGVtcztcbiAgfVxuICBjb25zb2xlLmxvZyhgRXJyb3IgZ2V0dGluZyBFbnRyaWVzIGZvciAke2NvbnRlbnRUeXBlLm5hbWV9LmApO1xufVxuXG4vLyBnZXQgYSBwb3N0IGJ5IHNsdWdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0QnlTbHVnKHNsdWcpIHtcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICAgIGxpbWl0OiAxLFxuICAgIFwiZmllbGRzLnNsdWdbaW5dXCI6IHNsdWcsXG4gIH0pO1xuICBpZiAoZW50cmllcy5pdGVtcykge1xuICAgIHJldHVybiBlbnRyaWVzLml0ZW1zWzBdO1xuICB9XG4gIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYCk7XG59XG5cbi8vIGdldCBtb3JlIDMgbGF0ZXN0IHBvc3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9yZVBvc3RzKHNsdWcpIHtcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICAgIGxpbWl0OiAzLFxuICAgIG9yZGVyOiBcIi1maWVsZHMuZGF0ZVwiLFxuICAgIFwiZmllbGRzLnNsdWdbbmluXVwiOiBzbHVnLFxuICB9KTtcblxuICBpZiAoZW50cmllcy5pdGVtcykge1xuICAgIHJldHVybiBlbnRyaWVzLml0ZW1zO1xuICB9XG4gIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUG9zdFNsdWcoeyBmaWVsZHMgfSkge1xuICByZXR1cm4ge1xuICAgIHNsdWc6IGZpZWxkcy5zbHVnLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVBvc3RTbHVnRW50cmllcyhlbnRyaWVzLCBjYiA9IHBhcnNlUG9zdFNsdWcpIHtcbiAgcmV0dXJuIGVudHJpZXM/Lml0ZW1zPy5tYXAoY2IpO1xufVxuXG4vLyBnZXQgYWxsIHNsdWdzIG9mIHBvc3RzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNXaXRoU2x1ZygpIHtcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICAgIHNlbGVjdDogXCJmaWVsZHMuc2x1Z1wiLFxuICB9KTtcbiAgcmV0dXJuIHBhcnNlUG9zdFNsdWdFbnRyaWVzKGVudHJpZXMsIChwb3N0KSA9PiBwb3N0LmZpZWxkcyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/index.js\n");

/***/ })

})