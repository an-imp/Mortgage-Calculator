webpackHotUpdate_N_E("pages/index",{

/***/ "./components/barChart.js":
/*!********************************!*\
  !*** ./components/barChart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/admin/Projects/calculator/components/barChart.js\",\n    _this = undefined;\n\n\n\n\nvar BarChart = function BarChart(props) {\n  var data = {\n    labels: props.data.labelsAry || [],\n    datasets: [{\n      barPercentage: 0.5,\n      barThickness: 6,\n      maxBarThickness: 8,\n      minBarLength: 2,\n      backgroundColor: 'rgba(75, 192, 192, 0.2)',\n      data: props.data.yieldAry || []\n    }]\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-xs-6\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__[\"Bar\"], {\n      data: data,\n      width: 600,\n      height: 600,\n      options: {\n        maintainAspectRatio: false,\n        title: {\n          display: true,\n          text: 'Annual return',\n          fontSize: 20\n        },\n        legend: {\n          display: false,\n          position: 'right'\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"BarChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXJDaGFydC5qcz82NTE2Il0sIm5hbWVzIjpbIkJhckNoYXJ0IiwicHJvcHMiLCJkYXRhIiwibGFiZWxzIiwibGFiZWxzQXJ5IiwiZGF0YXNldHMiLCJiYXJQZXJjZW50YWdlIiwiYmFyVGhpY2tuZXNzIiwibWF4QmFyVGhpY2tuZXNzIiwibWluQmFyTGVuZ3RoIiwiYmFja2dyb3VuZENvbG9yIiwieWllbGRBcnkiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImZvbnRTaXplIiwibGVnZW5kIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLE1BQU1DLElBQUksR0FBRztBQUNYQyxVQUFNLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxTQUFYLElBQXdCLEVBRHJCO0FBRVhDLFlBQVEsRUFBRSxDQUFDO0FBQ1BDLG1CQUFhLEVBQUUsR0FEUjtBQUVQQyxrQkFBWSxFQUFFLENBRlA7QUFHUEMscUJBQWUsRUFBRSxDQUhWO0FBSVBDLGtCQUFZLEVBQUUsQ0FKUDtBQUtQQyxxQkFBZSxFQUFFLHlCQUxWO0FBTVBSLFVBQUksRUFBRUQsS0FBSyxDQUFDQyxJQUFOLENBQVdTLFFBQVgsSUFBdUI7QUFOdEIsS0FBRDtBQUZDLEdBQWI7QUFZQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBQ0kscUVBQUMsbURBQUQ7QUFDRSxVQUFJLEVBQUVULElBRFI7QUFFRSxXQUFLLEVBQUUsR0FGVDtBQUdFLFlBQU0sRUFBRSxHQUhWO0FBSUUsYUFBTyxFQUFFO0FBQ1BVLDJCQUFtQixFQUFHLEtBRGY7QUFFUEMsYUFBSyxFQUFDO0FBQ0pDLGlCQUFPLEVBQUMsSUFESjtBQUVKQyxjQUFJLEVBQUMsZUFGRDtBQUdKQyxrQkFBUSxFQUFDO0FBSEwsU0FGQztBQU9QQyxjQUFNLEVBQUM7QUFDTEgsaUJBQU8sRUFBQyxLQURIO0FBRUxJLGtCQUFRLEVBQUM7QUFGSjtBQVBBO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQWxDRDs7S0FBTWxCLFE7QUFvQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9iYXJDaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7QmFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBCYXJDaGFydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogcHJvcHMuZGF0YS5sYWJlbHNBcnkgfHwgW10sXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGJhclBlcmNlbnRhZ2U6IDAuNSxcbiAgICAgICAgYmFyVGhpY2tuZXNzOiA2LFxuICAgICAgICBtYXhCYXJUaGlja25lc3M6IDgsXG4gICAgICAgIG1pbkJhckxlbmd0aDogMixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwgMTkyLCAxOTIsIDAuMiknLFxuICAgICAgICBkYXRhOiBwcm9wcy5kYXRhLnlpZWxkQXJ5IHx8IFtdXG4gICAgfV1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cbiAgICAgICAgPEJhclxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgd2lkdGg9ezYwMH1cbiAgICAgICAgICBoZWlnaHQ9ezYwMH1cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvIDogZmFsc2UsXG4gICAgICAgICAgICB0aXRsZTp7XG4gICAgICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dDonQW5udWFsIHJldHVybicsXG4gICAgICAgICAgICAgIGZvbnRTaXplOjIwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOntcbiAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZSxcbiAgICAgICAgICAgICAgcG9zaXRpb246J3JpZ2h0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/barChart.js\n");

/***/ })

})