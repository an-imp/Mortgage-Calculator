webpackHotUpdate_N_E("pages/index",{

/***/ "./components/chart.js":
/*!*****************************!*\
  !*** ./components/chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/admin/Projects/calculator/components/chart.js\",\n    _this = undefined;\n\n\n\n\nvar Chart = function Chart(props) {\n  var data = {\n    labels: props.data.labelsAry || [],\n    datasets: [{\n      label: 'Loan principal',\n      fill: false,\n      lineTension: 0.1,\n      backgroundColor: 'rgba(75,192,192,0.4)',\n      borderColor: 'rgba(75,192,192,1)',\n      borderCapStyle: 'butt',\n      borderDash: [],\n      borderDashOffset: 0.0,\n      borderJoinStyle: 'miter',\n      pointBorderColor: 'rgba(75,192,192,1)',\n      pointBackgroundColor: '#fff',\n      pointBorderWidth: 1,\n      pointHoverRadius: 5,\n      pointHoverBackgroundColor: 'rgba(75,192,192,1)',\n      pointHoverBorderColor: 'rgba(220,220,220,1)',\n      pointHoverBorderWidth: 2,\n      pointRadius: 1,\n      pointHitRadius: 10,\n      data: props.data.balanceAry || []\n    }, {\n      label: 'Loan Interest',\n      fill: false,\n      lineTension: 0.1,\n      backgroundColor: 'rgba(75,192,192,0.4)',\n      borderColor: 'red',\n      borderCapStyle: 'butt',\n      borderDash: [],\n      borderDashOffset: 0.0,\n      borderJoinStyle: 'miter',\n      pointBorderColor: 'red',\n      pointBackgroundColor: '#fff',\n      pointBorderWidth: 1,\n      pointHoverRadius: 5,\n      pointHoverBackgroundColor: 'rgba(75,192,192,1)',\n      pointHoverBorderColor: 'rgba(220,220,220,1)',\n      pointHoverBorderWidth: 2,\n      pointRadius: 1,\n      pointHitRadius: 10,\n      data: props.data.interestAry || []\n    }, {\n      label: 'Loan Balance',\n      fill: false,\n      lineTension: 0.1,\n      backgroundColor: 'rgba(75,192,192,0.4)',\n      borderColor: 'red',\n      borderCapStyle: 'butt',\n      borderDash: [],\n      borderDashOffset: 0.0,\n      borderJoinStyle: 'miter',\n      pointBorderColor: 'blue',\n      pointBackgroundColor: '#fff',\n      pointBorderWidth: 1,\n      pointHoverRadius: 5,\n      pointHoverBackgroundColor: 'rgba(75,192,192,1)',\n      pointHoverBorderColor: 'rgba(220,220,220,1)',\n      pointHoverBorderWidth: 2,\n      pointRadius: 1,\n      pointHitRadius: 10,\n      data: props.data.balanceAry || []\n    }]\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"col-xs-6\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__[\"Line\"], {\n      data: data,\n      width: 600,\n      height: 600,\n      options: {\n        title: {\n          display: true,\n          text: 'Loan table',\n          fontSize: 20\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFydC5qcz84OGE2Il0sIm5hbWVzIjpbIkNoYXJ0IiwicHJvcHMiLCJkYXRhIiwibGFiZWxzIiwibGFiZWxzQXJ5IiwiZGF0YXNldHMiLCJsYWJlbCIsImZpbGwiLCJsaW5lVGVuc2lvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ2FwU3R5bGUiLCJib3JkZXJEYXNoIiwiYm9yZGVyRGFzaE9mZnNldCIsImJvcmRlckpvaW5TdHlsZSIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyV2lkdGgiLCJwb2ludEhvdmVyUmFkaXVzIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCb3JkZXJXaWR0aCIsInBvaW50UmFkaXVzIiwicG9pbnRIaXRSYWRpdXMiLCJiYWxhbmNlQXJ5IiwiaW50ZXJlc3RBcnkiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLE1BQU1DLElBQUksR0FBRztBQUNUQyxVQUFNLEVBQUVGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxTQUFYLElBQXdCLEVBRHZCO0FBRVRDLFlBQVEsRUFBRSxDQUNSO0FBQ0VDLFdBQUssRUFBRSxnQkFEVDtBQUVFQyxVQUFJLEVBQUUsS0FGUjtBQUdFQyxpQkFBVyxFQUFFLEdBSGY7QUFJRUMscUJBQWUsRUFBRSxzQkFKbkI7QUFLRUMsaUJBQVcsRUFBRSxvQkFMZjtBQU1FQyxvQkFBYyxFQUFFLE1BTmxCO0FBT0VDLGdCQUFVLEVBQUUsRUFQZDtBQVFFQyxzQkFBZ0IsRUFBRSxHQVJwQjtBQVNFQyxxQkFBZSxFQUFFLE9BVG5CO0FBVUVDLHNCQUFnQixFQUFFLG9CQVZwQjtBQVdFQywwQkFBb0IsRUFBRSxNQVh4QjtBQVlFQyxzQkFBZ0IsRUFBRSxDQVpwQjtBQWFFQyxzQkFBZ0IsRUFBRSxDQWJwQjtBQWNFQywrQkFBeUIsRUFBRSxvQkFkN0I7QUFlRUMsMkJBQXFCLEVBQUUscUJBZnpCO0FBZ0JFQywyQkFBcUIsRUFBRSxDQWhCekI7QUFpQkVDLGlCQUFXLEVBQUUsQ0FqQmY7QUFrQkVDLG9CQUFjLEVBQUUsRUFsQmxCO0FBbUJFckIsVUFBSSxFQUFFRCxLQUFLLENBQUNDLElBQU4sQ0FBV3NCLFVBQVgsSUFBeUI7QUFuQmpDLEtBRFEsRUFzQlI7QUFDRWxCLFdBQUssRUFBRSxlQURUO0FBRUVDLFVBQUksRUFBRSxLQUZSO0FBR0VDLGlCQUFXLEVBQUUsR0FIZjtBQUlFQyxxQkFBZSxFQUFFLHNCQUpuQjtBQUtFQyxpQkFBVyxFQUFFLEtBTGY7QUFNRUMsb0JBQWMsRUFBRSxNQU5sQjtBQU9FQyxnQkFBVSxFQUFFLEVBUGQ7QUFRRUMsc0JBQWdCLEVBQUUsR0FScEI7QUFTRUMscUJBQWUsRUFBRSxPQVRuQjtBQVVFQyxzQkFBZ0IsRUFBRSxLQVZwQjtBQVdFQywwQkFBb0IsRUFBRSxNQVh4QjtBQVlFQyxzQkFBZ0IsRUFBRSxDQVpwQjtBQWFFQyxzQkFBZ0IsRUFBRSxDQWJwQjtBQWNFQywrQkFBeUIsRUFBRSxvQkFkN0I7QUFlRUMsMkJBQXFCLEVBQUUscUJBZnpCO0FBZ0JFQywyQkFBcUIsRUFBRSxDQWhCekI7QUFpQkVDLGlCQUFXLEVBQUUsQ0FqQmY7QUFrQkVDLG9CQUFjLEVBQUUsRUFsQmxCO0FBbUJFckIsVUFBSSxFQUFFRCxLQUFLLENBQUNDLElBQU4sQ0FBV3VCLFdBQVgsSUFBMEI7QUFuQmxDLEtBdEJRLEVBMkNSO0FBQ0VuQixXQUFLLEVBQUUsY0FEVDtBQUVFQyxVQUFJLEVBQUUsS0FGUjtBQUdFQyxpQkFBVyxFQUFFLEdBSGY7QUFJRUMscUJBQWUsRUFBRSxzQkFKbkI7QUFLRUMsaUJBQVcsRUFBRSxLQUxmO0FBTUVDLG9CQUFjLEVBQUUsTUFObEI7QUFPRUMsZ0JBQVUsRUFBRSxFQVBkO0FBUUVDLHNCQUFnQixFQUFFLEdBUnBCO0FBU0VDLHFCQUFlLEVBQUUsT0FUbkI7QUFVRUMsc0JBQWdCLEVBQUUsTUFWcEI7QUFXRUMsMEJBQW9CLEVBQUUsTUFYeEI7QUFZRUMsc0JBQWdCLEVBQUUsQ0FacEI7QUFhRUMsc0JBQWdCLEVBQUUsQ0FicEI7QUFjRUMsK0JBQXlCLEVBQUUsb0JBZDdCO0FBZUVDLDJCQUFxQixFQUFFLHFCQWZ6QjtBQWdCRUMsMkJBQXFCLEVBQUUsQ0FoQnpCO0FBaUJFQyxpQkFBVyxFQUFFLENBakJmO0FBa0JFQyxvQkFBYyxFQUFFLEVBbEJsQjtBQW1CRXJCLFVBQUksRUFBRUQsS0FBSyxDQUFDQyxJQUFOLENBQVdzQixVQUFYLElBQXlCO0FBbkJqQyxLQTNDUTtBQUZELEdBQWI7QUFxRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsVUFBSSxFQUFFdEIsSUFEUjtBQUVFLFdBQUssRUFBRSxHQUZUO0FBR0UsWUFBTSxFQUFFLEdBSFY7QUFJRSxhQUFPLEVBQUU7QUFDUHdCLGFBQUssRUFBQztBQUNKQyxpQkFBTyxFQUFDLElBREo7QUFFSkMsY0FBSSxFQUFDLFlBRkQ7QUFHSkMsa0JBQVEsRUFBQztBQUhMO0FBREM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBdEZEOztLQUFNN0IsSztBQXdGU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5lfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBDaGFydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgICAgbGFiZWxzOiBwcm9wcy5kYXRhLmxhYmVsc0FyeSB8fCBbXSxcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0xvYW4gcHJpbmNpcGFsJyxcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwxKScsXG4gICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgICAgZGF0YTogcHJvcHMuZGF0YS5iYWxhbmNlQXJ5IHx8IFtdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdMb2FuIEludGVyZXN0JyxcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZWQnLFxuICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcbiAgICAgICAgICBwb2ludEhvdmVyUmFkaXVzOiA1LFxuICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjIwLDIyMCwyMjAsMSknLFxuICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJXaWR0aDogMixcbiAgICAgICAgICBwb2ludFJhZGl1czogMSxcbiAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTAsXG4gICAgICAgICAgZGF0YTogcHJvcHMuZGF0YS5pbnRlcmVzdEFyeSB8fCBbXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTG9hbiBCYWxhbmNlJyxcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsMTkyLDE5MiwwLjQpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgYm9yZGVyQ2FwU3R5bGU6ICdidXR0JyxcbiAgICAgICAgICBib3JkZXJEYXNoOiBbXSxcbiAgICAgICAgICBib3JkZXJEYXNoT2Zmc2V0OiAwLjAsXG4gICAgICAgICAgYm9yZGVySm9pblN0eWxlOiAnbWl0ZXInLFxuICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdibHVlJyxcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgcG9pbnRIb3ZlclJhZGl1czogNSxcbiAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDIyMCwyMjAsMjIwLDEpJyxcbiAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyV2lkdGg6IDIsXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDEsXG4gICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwLFxuICAgICAgICAgIGRhdGE6IHByb3BzLmRhdGEuYmFsYW5jZUFyeSB8fCBbXSxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cbiAgICAgIDxMaW5lXG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgIGhlaWdodD17NjAwfVxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgdGl0bGU6e1xuICAgICAgICAgICAgZGlzcGxheTp0cnVlLFxuICAgICAgICAgICAgdGV4dDonTG9hbiB0YWJsZScsXG4gICAgICAgICAgICBmb250U2l6ZToyMFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chart.js\n");

/***/ })

})