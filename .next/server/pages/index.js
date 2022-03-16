"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_design_patterns_singleton_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/design-patterns/singleton/view */ \"./src/design-patterns/singleton/view.tsx\");\n\n\nfunction Index() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_design_patterns_singleton_view__WEBPACK_IMPORTED_MODULE_1__.SingleTonPattern, {}, void 0, false, {\n        fileName: \"/home/littig/Documents/js-patterns/pages/index.tsx\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0U7U0FFL0RDLEtBQUssR0FBRyxDQUFDO0lBQ2QsTUFBTSw2RUFBRUQsaUZBQWdCOzs7OztBQUM1QixDQUFDO0FBRUQsaUVBQWVDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wYXR0ZXJucy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZVRvblBhdHRlcm4gfSBmcm9tIFwiLi4vc3JjL2Rlc2lnbi1wYXR0ZXJucy9zaW5nbGV0b24vdmlld1wiO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgICByZXR1cm4gPFNpbmdsZVRvblBhdHRlcm4gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwibmFtZXMiOlsiU2luZ2xlVG9uUGF0dGVybiIsIkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/design-patterns/singleton/fruits.ts":
/*!*************************************************!*\
  !*** ./src/design-patterns/singleton/fruits.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"singletonFruitsList\": () => (/* binding */ singletonFruitsList)\n/* harmony export */ });\nlet fruitsList = [\n    'Apple',\n    'Orange',\n    'Avocado',\n    'Blueberry',\n    'Strawberry'\n];\nclass Fruits {\n    getFruits() {\n        return fruitsList;\n    }\n    addFruit(fruitToAdd) {\n        fruitsList.push(fruitToAdd);\n    }\n    removeFruit(fruitToRemove) {\n        if (fruitsList.includes(fruitToRemove)) {\n            const updatedList = fruitsList.filter((fruit)=>fruit !== fruitToRemove\n            );\n            fruitsList = updatedList;\n        } else {\n            throw new Error('Fruit not found');\n        }\n    }\n}\n/* Object.freeze method makes sure that consuming code cannot modify the Singleton. */ const singletonFruitsList = Object.freeze(new Fruits());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVzaWduLXBhdHRlcm5zL3NpbmdsZXRvbi9mcnVpdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEdBQUcsQ0FBQ0EsVUFBVSxHQUFhLENBQUM7SUFBQSxDQUFPO0lBQUUsQ0FBUTtJQUFFLENBQVM7SUFBRSxDQUFXO0lBQUUsQ0FBWTtBQUFBLENBQUM7TUFFOUVDLE1BQU07SUFDUkMsU0FBUyxHQUFHLENBQUM7UUFDVCxNQUFNLENBQUNGLFVBQVU7SUFDckIsQ0FBQztJQUVERyxRQUFRLENBQUNDLFVBQWtCLEVBQUUsQ0FBQztRQUMxQkosVUFBVSxDQUFDSyxJQUFJLENBQUNELFVBQVU7SUFDOUIsQ0FBQztJQUVERSxXQUFXLENBQUNDLGFBQXFCLEVBQUUsQ0FBQztRQUNoQyxFQUFFLEVBQUVQLFVBQVUsQ0FBQ1EsUUFBUSxDQUFDRCxhQUFhLEdBQUcsQ0FBQztZQUNyQyxLQUFLLENBQUNFLFdBQVcsR0FBR1QsVUFBVSxDQUFDVSxNQUFNLEVBQUNDLEtBQUssR0FBSUEsS0FBSyxLQUFLSixhQUFhOztZQUN0RVAsVUFBVSxHQUFHUyxXQUFXO1FBRTVCLENBQUMsTUFBTSxDQUFDO1lBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQWlCO1FBQ3JDLENBQUM7SUFDTCxDQUFDOztBQUlMLEVBQXNGLHFGQUN0RixLQUFLLENBQUNDLG1CQUFtQixHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUNkLE1BQU07QUFFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wYXR0ZXJucy8uL3NyYy9kZXNpZ24tcGF0dGVybnMvc2luZ2xldG9uL2ZydWl0cy50cz83OThmIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBmcnVpdHNMaXN0OiBzdHJpbmdbXSA9IFsnQXBwbGUnLCAnT3JhbmdlJywgJ0F2b2NhZG8nLCAnQmx1ZWJlcnJ5JywgJ1N0cmF3YmVycnknXVxuXG5jbGFzcyBGcnVpdHMge1xuICAgIGdldEZydWl0cygpIHtcbiAgICAgICAgcmV0dXJuIGZydWl0c0xpc3RcbiAgICB9XG5cbiAgICBhZGRGcnVpdChmcnVpdFRvQWRkOiBzdHJpbmcpIHtcbiAgICAgICAgZnJ1aXRzTGlzdC5wdXNoKGZydWl0VG9BZGQpXG4gICAgfTtcblxuICAgIHJlbW92ZUZydWl0KGZydWl0VG9SZW1vdmU6IHN0cmluZykge1xuICAgICAgICBpZiAoZnJ1aXRzTGlzdC5pbmNsdWRlcyhmcnVpdFRvUmVtb3ZlKSkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpc3QgPSBmcnVpdHNMaXN0LmZpbHRlcihmcnVpdCA9PiBmcnVpdCAhPT0gZnJ1aXRUb1JlbW92ZSlcbiAgICAgICAgICAgIGZydWl0c0xpc3QgPSB1cGRhdGVkTGlzdFxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZydWl0IG5vdCBmb3VuZCcpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyogT2JqZWN0LmZyZWV6ZSBtZXRob2QgbWFrZXMgc3VyZSB0aGF0IGNvbnN1bWluZyBjb2RlIGNhbm5vdCBtb2RpZnkgdGhlIFNpbmdsZXRvbi4gKi9cbmNvbnN0IHNpbmdsZXRvbkZydWl0c0xpc3QgPSBPYmplY3QuZnJlZXplKG5ldyBGcnVpdHMoKSlcblxuZXhwb3J0IHsgc2luZ2xldG9uRnJ1aXRzTGlzdCB9Il0sIm5hbWVzIjpbImZydWl0c0xpc3QiLCJGcnVpdHMiLCJnZXRGcnVpdHMiLCJhZGRGcnVpdCIsImZydWl0VG9BZGQiLCJwdXNoIiwicmVtb3ZlRnJ1aXQiLCJmcnVpdFRvUmVtb3ZlIiwiaW5jbHVkZXMiLCJ1cGRhdGVkTGlzdCIsImZpbHRlciIsImZydWl0IiwiRXJyb3IiLCJzaW5nbGV0b25GcnVpdHNMaXN0IiwiT2JqZWN0IiwiZnJlZXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/design-patterns/singleton/fruits.ts\n");

/***/ }),

/***/ "./src/design-patterns/singleton/view.tsx":
/*!************************************************!*\
  !*** ./src/design-patterns/singleton/view.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SingleTonPattern\": () => (/* binding */ SingleTonPattern)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fruits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits */ \"./src/design-patterns/singleton/fruits.ts\");\n\n\nfunction SingleTonPattern() {\n    const { addFruit , getFruits , removeFruit  } = _fruits__WEBPACK_IMPORTED_MODULE_1__.singletonFruitsList;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Fruits lists - SingleTonPattern\"\n            }, void 0, false, {\n                fileName: \"/home/littig/Documents/js-patterns/src/design-patterns/singleton/view.tsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    addFruit('banana');\n                    console.log(getFruits());\n                },\n                children: \"Add banana\"\n            }, void 0, false, {\n                fileName: \"/home/littig/Documents/js-patterns/src/design-patterns/singleton/view.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    removeFruit('banana');\n                    console.log(getFruits());\n                },\n                children: \"Remove banana\"\n            }, void 0, false, {\n                fileName: \"/home/littig/Documents/js-patterns/src/design-patterns/singleton/view.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVzaWduLXBhdHRlcm5zL3NpbmdsZXRvbi92aWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztTQUVyQ0MsZ0JBQWdCLEdBQUcsQ0FBQztJQUN6QixLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEdBQUVDLFNBQVMsR0FBRUMsV0FBVyxFQUFDLENBQUMsR0FBR0osd0RBQW1CO0lBRWhFLE1BQU07O3dGQUVHSyxDQUFFOzBCQUFDLENBQStCOzs7Ozs7d0ZBQ2xDQyxDQUFNO2dCQUFDQyxPQUFPLE1BQVEsQ0FBQztvQkFDcEJMLFFBQVEsQ0FBQyxDQUFRO29CQUNqQk0sT0FBTyxDQUFDQyxHQUFHLENBQUNOLFNBQVM7Z0JBQ3pCLENBQUM7MEJBQUcsQ0FBVTs7Ozs7O3dGQUNiRyxDQUFNO2dCQUFDQyxPQUFPLE1BQVEsQ0FBQztvQkFDcEJILFdBQVcsQ0FBQyxDQUFRO29CQUNwQkksT0FBTyxDQUFDQyxHQUFHLENBQUNOLFNBQVM7Z0JBQ3pCLENBQUM7MEJBQUUsQ0FBYTs7Ozs7Ozs7QUFHNUIsQ0FBQztBQUV3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXBhdHRlcm5zLy4vc3JjL2Rlc2lnbi1wYXR0ZXJucy9zaW5nbGV0b24vdmlldy50c3g/NGJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaW5nbGV0b25GcnVpdHNMaXN0IH0gZnJvbSAnLi9mcnVpdHMnXG5cbmZ1bmN0aW9uIFNpbmdsZVRvblBhdHRlcm4oKSB7ICAgXG4gICAgY29uc3QgeyBhZGRGcnVpdCwgZ2V0RnJ1aXRzLCByZW1vdmVGcnVpdCB9ID0gc2luZ2xldG9uRnJ1aXRzTGlzdFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5GcnVpdHMgbGlzdHMgLSBTaW5nbGVUb25QYXR0ZXJuPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZEZydWl0KCdiYW5hbmEnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldEZydWl0cygpKVxuICAgICAgICAgICAgfX0gPkFkZCBiYW5hbmE8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZUZydWl0KCdiYW5hbmEnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldEZydWl0cygpKVxuICAgICAgICAgICAgfX0+UmVtb3ZlIGJhbmFuYTwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCB7IFNpbmdsZVRvblBhdHRlcm4gfSJdLCJuYW1lcyI6WyJzaW5nbGV0b25GcnVpdHNMaXN0IiwiU2luZ2xlVG9uUGF0dGVybiIsImFkZEZydWl0IiwiZ2V0RnJ1aXRzIiwicmVtb3ZlRnJ1aXQiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/design-patterns/singleton/view.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();