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
exports.id = "pages/api/blogs";
exports.ids = ["pages/api/blogs"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/blogs.js":
/*!****************************!*\
  !*** ./pages/api/blogs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogdata\");\n    let myfile;\n    let allBlogs = [];\n    for(let index = 0; index < data.length; index++){\n        const item = data[index];\n        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(\"./blogdata/\" + item, \"utf-8\");\n        allBlogs.push(JSON.parse(myfile));\n    }\n    res.status(200).json(allBlogs);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRVYsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU5QyxJQUFJQyxJQUFJLEdBQUcsTUFBTUosZ0RBQW1CLENBQUMsVUFBVSxDQUFDO0lBQ2hELElBQUlPLE1BQU07SUFDVixJQUFJQyxRQUFRLEdBQUUsRUFBRTtJQUNkLElBQUssSUFBSUMsS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHTCxJQUFJLENBQUNNLE1BQU0sRUFBRUQsS0FBSyxFQUFFLENBQUU7UUFDaEQsTUFBTUUsSUFBSSxHQUFHUCxJQUFJLENBQUNLLEtBQUssQ0FBQztRQUMxQkYsTUFBTSxHQUFHLE1BQU1QLGlEQUFvQixDQUFFLGFBQWEsR0FBR1csSUFBSSxFQUFHLE9BQU8sQ0FBQztRQUNwRUgsUUFBUSxDQUFDSyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0RKLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNULFFBQVEsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3R2NC8uL3BhZ2VzL2FwaS9ibG9ncy5qcz9lYzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gIGxldCBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcihcImJsb2dkYXRhXCIpXG4gIGxldCBteWZpbGU7XG4gIGxldCBhbGxCbG9ncyA9W107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gZGF0YVtpbmRleF07XG4gICAgbXlmaWxlID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoKCcuL2Jsb2dkYXRhLycgKyBpdGVtKSwgJ3V0Zi04JylcbiAgICBhbGxCbG9ncy5wdXNoKEpTT04ucGFyc2UobXlmaWxlKSlcbiAgfVxuICByZXMuc3RhdHVzKDIwMCkuanNvbihhbGxCbG9ncylcbn1cbiJdLCJuYW1lcyI6WyJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwicHJvbWlzZXMiLCJyZWFkZGlyIiwibXlmaWxlIiwiYWxsQmxvZ3MiLCJpbmRleCIsImxlbmd0aCIsIml0ZW0iLCJyZWFkRmlsZSIsInB1c2giLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs.js"));
module.exports = __webpack_exports__;

})();