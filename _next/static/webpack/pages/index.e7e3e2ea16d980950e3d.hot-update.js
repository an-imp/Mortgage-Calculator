webpackHotUpdate_N_E("pages/index",{

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/table */ \"./components/table.js\");\n/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/chart */ \"./components/chart.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Projects/calculator/components/body.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar balanceAry = [];\nvar labelsAry = [];\nvar interestAry = [];\nvar yieldAry = [];\nvar mChart = {\n  balanceAry: [],\n  labelsAry: [],\n  interestAry: []\n};\n\nvar Body = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Body, _React$Component);\n\n  var _super = _createSuper(Body);\n\n  function Body(props) {\n    var _this;\n\n    Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Body);\n\n    _this = _super.call(this, props);\n\n    Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"setInfo\", function (data) {\n      balanceAry = data.balanceAry;\n      labelsAry = data.labelsAry;\n      interestAry = data.interestAry;\n      yieldAry = data.yieldAry; // this.setState({\n      //   balanceAry: data.balanceAry\n      // });\n\n      mChart.balanceAry = balanceAry;\n      mChart.labelsAry = labelsAry;\n      mChart.interestAry = interestAry;\n    });\n\n    _this.state = {\n      balanceAry: [],\n      labelsAry: [],\n      interestAry: [],\n      yieldAry: []\n    };\n    return _this;\n  } // onChange info fields\n\n\n  Object(_Users_admin_Projects_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Body, [{\n    key: \"render\",\n    // componentDidMount(){\n    //   mChart.balanceAry = balanceAry;\n    //   mChart.labelsAry = labelsAry;\n    //   mChart.interestAry = interestAry;\n    // }\n    // show or hide charts\n    // toggle(boolean){\n    //   // this.setState({\n    //   //   showChart: boolean,\n    //   // })\n    //   if (boolean) {\n    //     this.amort(this.state)\n    //   }\n    // }\n    value: function render() {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"position-relative overflow-hidden text-center bg-light\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-5 p-lg-5 mx-auto my-5\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"display-4 font-weight-normal\",\n            children: \"Mortgage Calculator\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_table__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            onChange: this.setInfo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Body;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5LmpzPzAyYWQiXSwibmFtZXMiOlsiYmFsYW5jZUFyeSIsImxhYmVsc0FyeSIsImludGVyZXN0QXJ5IiwieWllbGRBcnkiLCJtQ2hhcnQiLCJCb2R5IiwicHJvcHMiLCJkYXRhIiwic3RhdGUiLCJzZXRJbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxJQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUVBLElBQUlDLE1BQU0sR0FBRztBQUNYSixZQUFVLEVBQUUsRUFERDtBQUVYQyxXQUFTLEVBQUUsRUFGQTtBQUdYQyxhQUFXLEVBQUU7QUFIRixDQUFiOztJQU1NRyxJOzs7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiw0U0FZVCxVQUFDQyxJQUFELEVBQVU7QUFDbEJQLGdCQUFVLEdBQUdPLElBQUksQ0FBQ1AsVUFBbEI7QUFDQUMsZUFBUyxHQUFHTSxJQUFJLENBQUNOLFNBQWpCO0FBQ0FDLGlCQUFXLEdBQUdLLElBQUksQ0FBQ0wsV0FBbkI7QUFDQUMsY0FBUSxHQUFHSSxJQUFJLENBQUNKLFFBQWhCLENBSmtCLENBTWxCO0FBQ0E7QUFDQTs7QUFHQUMsWUFBTSxDQUFDSixVQUFQLEdBQW9CQSxVQUFwQjtBQUNDSSxZQUFNLENBQUNILFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FHLFlBQU0sQ0FBQ0YsV0FBUCxHQUFxQkEsV0FBckI7QUFFRixLQTNCa0I7O0FBR2pCLFVBQUtNLEtBQUwsR0FBYTtBQUNYUixnQkFBVSxFQUFFLEVBREQ7QUFFWEMsZUFBUyxFQUFFLEVBRkE7QUFHWEMsaUJBQVcsRUFBRSxFQUhGO0FBSVhDLGNBQVEsRUFBRTtBQUpDLEtBQWI7QUFIaUI7QUFTbEIsRyxDQUVEOzs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzZCQUVTO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHdEQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUscUVBQUMseURBQUQ7QUFBTyxvQkFBUSxFQUFFLEtBQUtNO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBUUQ7Ozs7RUF2RGdCQyw0Q0FBSyxDQUFDQyxTOztBQTBEVk4sbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvZHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlJ1xuaW1wb3J0IENoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvY2hhcnQnXG5cbmxldCBiYWxhbmNlQXJ5ID0gW11cbmxldCBsYWJlbHNBcnkgPSBbXVxubGV0IGludGVyZXN0QXJ5ID0gW11cbmxldCB5aWVsZEFyeSA9IFtdXG5cbmxldCBtQ2hhcnQgPSB7XG4gIGJhbGFuY2VBcnk6IFtdLFxuICBsYWJlbHNBcnk6IFtdLFxuICBpbnRlcmVzdEFyeTogW10sXG59XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJhbGFuY2VBcnk6IFtdLFxuICAgICAgbGFiZWxzQXJ5OiBbXSxcbiAgICAgIGludGVyZXN0QXJ5OiBbXSxcbiAgICAgIHlpZWxkQXJ5OiBbXSxcbiAgICB9XG4gIH1cblxuICAvLyBvbkNoYW5nZSBpbmZvIGZpZWxkc1xuICBzZXRJbmZvID0gKGRhdGEpID0+IHtcbiAgICBiYWxhbmNlQXJ5ID0gZGF0YS5iYWxhbmNlQXJ5O1xuICAgIGxhYmVsc0FyeSA9IGRhdGEubGFiZWxzQXJ5O1xuICAgIGludGVyZXN0QXJ5ID0gZGF0YS5pbnRlcmVzdEFyeTtcbiAgICB5aWVsZEFyeSA9IGRhdGEueWllbGRBcnk7XG5cbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgIGJhbGFuY2VBcnk6IGRhdGEuYmFsYW5jZUFyeVxuICAgIC8vIH0pO1xuXG5cbiAgICBtQ2hhcnQuYmFsYW5jZUFyeSA9IGJhbGFuY2VBcnlcbiAgICAgbUNoYXJ0LmxhYmVsc0FyeSA9IGxhYmVsc0FyeVxuICAgICBtQ2hhcnQuaW50ZXJlc3RBcnkgPSBpbnRlcmVzdEFyeVxuXG4gIH1cblxuICAvLyBjb21wb25lbnREaWRNb3VudCgpe1xuICAvLyAgIG1DaGFydC5iYWxhbmNlQXJ5ID0gYmFsYW5jZUFyeTtcbiAgLy8gICBtQ2hhcnQubGFiZWxzQXJ5ID0gbGFiZWxzQXJ5O1xuICAvLyAgIG1DaGFydC5pbnRlcmVzdEFyeSA9IGludGVyZXN0QXJ5O1xuICAvLyB9XG5cbiAgLy8gc2hvdyBvciBoaWRlIGNoYXJ0c1xuICAvLyB0b2dnbGUoYm9vbGVhbil7XG4gIC8vICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgLy8gICBzaG93Q2hhcnQ6IGJvb2xlYW4sXG4gIC8vICAgLy8gfSlcbiAgLy8gICBpZiAoYm9vbGVhbikge1xuICAvLyAgICAgdGhpcy5hbW9ydCh0aGlzLnN0YXRlKVxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgYmctbGlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBwLWxnLTUgbXgtYXV0byBteS01XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRpc3BsYXktNCBmb250LXdlaWdodC1ub3JtYWxcIj5Nb3J0Z2FnZSBDYWxjdWxhdG9yPC9oMj5cbiAgICAgICAgICA8VGFibGUgb25DaGFuZ2U9e3RoaXMuc2V0SW5mb30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2R5XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/body.js\n");

/***/ })

})