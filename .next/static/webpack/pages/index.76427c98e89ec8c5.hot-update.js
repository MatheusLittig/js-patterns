"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/design-patterns/singleton/view.tsx":
/*!************************************************!*\
  !*** ./src/design-patterns/singleton/view.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SingleTonPattern\": function() { return /* binding */ SingleTonPattern; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fruits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits */ \"./src/design-patterns/singleton/fruits.ts\");\n\n\nfunction SingleTonPattern() {\n    var addFruit = _fruits__WEBPACK_IMPORTED_MODULE_1__.singletonFruitsList.addFruit, getFruits = _fruits__WEBPACK_IMPORTED_MODULE_1__.singletonFruitsList.getFruits, removeFruit = _fruits__WEBPACK_IMPORTED_MODULE_1__.singletonFruitsList.removeFruit;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Fruits lists - SingleTonPattern\"\n            }, void 0, false, {\n                fileName: \"/home/littig/Documents/js-patterns/src/design-patterns/singleton/view.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    addFruit('banana');\n                    console.log(getFruits());\n                },\n                children: \"Add banana\"\n            }, void 0, false, {\n                fileName: \"/home/littig/Documents/js-patterns/src/design-patterns/singleton/view.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    removeFruit('banana');\n                    console.log(getFruits());\n                },\n                children: \"Remove banana\"\n            }, void 0, false, {\n                fileName: \"/home/littig/Documents/js-patterns/src/design-patterns/singleton/view.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c = SingleTonPattern;\n\nvar _c;\n$RefreshReg$(_c, \"SingleTonPattern\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVzaWduLXBhdHRlcm5zL3NpbmdsZXRvbi92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztTQUVyQ0MsZ0JBQWdCLEdBQUcsQ0FBQztJQUN6QixHQUFLLENBQUdDLFFBQVEsR0FBNkJGLGlFQUE3QixFQUFFRyxTQUFTLEdBQWtCSCxrRUFBbEIsRUFBRUksV0FBVyxHQUFLSixvRUFBTDtJQUV4QyxNQUFNOzt3RkFFR0ssQ0FBRTswQkFBQyxDQUErQjs7Ozs7O3dGQUNsQ0MsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFLFFBQzdCLEdBRG1DLENBQUM7b0JBQ3BCTCxRQUFRLENBQUMsQ0FBUTtvQkFDakJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixTQUFTO2dCQUN6QixDQUFDOzBCQUFHLENBQVU7Ozs7Ozt3RkFDYkcsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFLFFBQzdCLEdBRG1DLENBQUM7b0JBQ3BCSCxXQUFXLENBQUMsQ0FBUTtvQkFDcEJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixTQUFTO2dCQUN6QixDQUFDOzBCQUFFLENBQWE7Ozs7Ozs7O0FBRzVCLENBQUM7S0FoQlFGLGdCQUFnQjtBQWtCQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZGVzaWduLXBhdHRlcm5zL3NpbmdsZXRvbi92aWV3LnRzeD80YmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpbmdsZXRvbkZydWl0c0xpc3QgfSBmcm9tICcuL2ZydWl0cydcblxuZnVuY3Rpb24gU2luZ2xlVG9uUGF0dGVybigpIHsgICBcbiAgICBjb25zdCB7IGFkZEZydWl0LCBnZXRGcnVpdHMsIHJlbW92ZUZydWl0IH0gPSBzaW5nbGV0b25GcnVpdHNMaXN0XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPkZydWl0cyBsaXN0cyAtIFNpbmdsZVRvblBhdHRlcm48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkRnJ1aXQoJ2JhbmFuYScpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0RnJ1aXRzKCkpXG4gICAgICAgICAgICB9fSA+QWRkIGJhbmFuYTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRnJ1aXQoJ2JhbmFuYScpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0RnJ1aXRzKCkpXG4gICAgICAgICAgICB9fT5SZW1vdmUgYmFuYW5hPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IHsgU2luZ2xlVG9uUGF0dGVybiB9Il0sIm5hbWVzIjpbInNpbmdsZXRvbkZydWl0c0xpc3QiLCJTaW5nbGVUb25QYXR0ZXJuIiwiYWRkRnJ1aXQiLCJnZXRGcnVpdHMiLCJyZW1vdmVGcnVpdCIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/design-patterns/singleton/view.tsx\n");

/***/ })

});