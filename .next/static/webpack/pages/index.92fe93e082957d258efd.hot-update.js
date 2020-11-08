webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _jsxFileName = \"/Users/YuOhno/portfoliov5/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar Index = function Index(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: \"Batman TV Shows\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n      children: props.shows ? props.shows.map(function (show, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: \"/shows/[id]\",\n            as: \"/shows/\".concat(idx),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n              children: [idx, \":\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 21\n          }, _this)\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 17\n        }, _this);\n      }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n        children: \"null\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 18\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res, res2;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          console.log(process.env.REACT_APP_NEXT_PUBLIC_CONTENTFUL_SPACE_ID);\n          _context.next = 3;\n          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://api.tvmaze.com/search/shows?q=batman\");\n\n        case 3:\n          res = _context.sent;\n          _context.next = 6;\n          return Object(_lib__WEBPACK_IMPORTED_MODULE_4__[\"getAllPosts\"])();\n\n        case 6:\n          res2 = _context.sent;\n          console.log(res2); // console.log(`Show data fetched. Count: ${data.length}`);\n\n          return _context.abrupt(\"return\", {\n            shows: res2.map(function (entry) {\n              return entry.show;\n            })\n          });\n\n        case 9:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwic2hvd3MiLCJtYXAiLCJzaG93IiwiaWR4IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRCIsImZldGNoIiwicmVzIiwiZ2V0QWxsUG9zdHMiLCJyZXMyIiwiZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDckIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxnQkFDQ0EsS0FBSyxDQUFDQyxLQUFOLEdBQ0dELEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLDRCQUNoQjtBQUFBLGlDQUNJLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxhQUFYO0FBQXlCLGNBQUUsbUJBQVlBLEdBQVosQ0FBM0I7QUFBQSxtQ0FDQTtBQUFBLHlCQUFJQSxHQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFTQSxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdCO0FBQUEsT0FBaEIsQ0FESCxnQkFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBaEJEOztLQUFNTCxLO0FBa0JOQSxLQUFLLENBQUNNLGVBQU4saU1BQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMseUNBQXhCO0FBRG9CO0FBQUEsaUJBRUZDLHlEQUFLLENBQUMsOENBQUQsQ0FGSDs7QUFBQTtBQUVkQyxhQUZjO0FBQUE7QUFBQSxpQkFHREMsd0RBQVcsRUFIVjs7QUFBQTtBQUdkQyxjQUhjO0FBSXBCUixpQkFBTyxDQUFDQyxHQUFSLENBQVlPLElBQVosRUFKb0IsQ0FLcEI7O0FBTG9CLDJDQU9iO0FBQUViLGlCQUFLLEVBQUVhLElBQUksQ0FBQ1osR0FBTCxDQUFTLFVBQUFhLEtBQUs7QUFBQSxxQkFBSUEsS0FBSyxDQUFDWixJQUFWO0FBQUEsYUFBZDtBQUFULFdBUGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBeEI7QUFVZUosb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vbGliJ1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwcm9wcy5zaG93cyA/IFxuICAgICAgICAgICAgICAgIHByb3BzLnNob3dzLm1hcCgoc2hvdywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93cy9baWRdXCIgYXM9e2Avc2hvd3MvJHtpZHh9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntpZHh9OjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKSA6IDxoMT5udWxsPC9oMT59XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5SRUFDVF9BUFBfTkVYVF9QVUJMSUNfQ09OVEVOVEZVTF9TUEFDRV9JRClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuXCIpXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4gICAgY29uc29sZS5sb2cocmVzMilcbiAgICAvLyBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG4gICAgcmV0dXJuIHsgc2hvd3M6IHJlczIubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})