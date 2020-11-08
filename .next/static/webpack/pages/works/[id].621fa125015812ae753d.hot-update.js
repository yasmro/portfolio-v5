webpackHotUpdate_N_E("pages/works/[id]",{

/***/ "./pages/works/[id].js":
/*!*****************************!*\
  !*** ./pages/works/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ \"./lib/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/YuOhno/portfoliov5/pages/works/[id].js\",\n    _this = undefined;\n\n\n\n\nvar Post = function Post(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: props.show.fields.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      children: props.show.fields.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, _this), props.show.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n      src: props.show.image.medium\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 25\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Post;\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var id, res2;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            id = context.query.id;\n            _context.next = 3;\n            return Object(_lib__WEBPACK_IMPORTED_MODULE_4__[\"getPostBySlug\"])(id);\n\n          case 3:\n            res2 = _context.sent;\n            console.log(res2); // console.log(`Show data fetched. Count: ${data.length}`);\n\n            return _context.abrupt(\"return\", {\n              show: res2\n            });\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29ya3MvLmpzP2EzZjIiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwic2hvdyIsImZpZWxkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIm1lZGl1bSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwiZ2V0UG9zdEJ5U2x1ZyIsInJlczIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxLQUFLO0FBQUEsc0JBQ2hCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQVgsQ0FBa0JDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUlILEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxNQUFYLENBQWtCRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFHR0osS0FBSyxDQUFDQyxJQUFOLENBQVdJLEtBQVgsZ0JBQW1CO0FBQUssU0FBRyxFQUFFTCxLQUFLLENBQUNDLElBQU4sQ0FBV0ksS0FBWCxDQUFpQkM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFuQixHQUEyRCxJQUg5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZ0I7QUFBQSxDQUFsQjs7S0FBTVAsSTs7QUFRTkEsSUFBSSxDQUFDUSxlQUFMO0FBQUEsOExBQXVCLGlCQUFlQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUViQyxjQUZhLEdBRU5ELE9BQU8sQ0FBQ0UsS0FGRixDQUViRCxFQUZhO0FBQUE7QUFBQSxtQkFHRkUsMERBQWEsQ0FBQ0YsRUFBRCxDQUhYOztBQUFBO0FBR2ZHLGdCQUhlO0FBSW5CQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFKbUIsQ0FLbkI7O0FBTG1CLDZDQU9aO0FBQUVYLGtCQUFJLEVBQUVXO0FBQVIsYUFQWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZWIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcgfSBmcm9tICcuLi8uLi9saWInXG5cbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPntwcm9wcy5zaG93LmZpZWxkcy50aXRsZX08L2gxPlxuICAgIDxwPntwcm9wcy5zaG93LmZpZWxkcy5kZXNjcmlwdGlvbn08L3A+XG4gICAge3Byb3BzLnNob3cuaW1hZ2UgPyA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19IC8+IDogbnVsbH1cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnN0IHJlczIgPSBhd2FpdCBnZXRQb3N0QnlTbHVnKGlkKTtcbiAgICBjb25zb2xlLmxvZyhyZXMyKVxuICAgIC8vIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbiAgICByZXR1cm4geyBzaG93OiByZXMyfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/works/[id].js\n");

/***/ })

})