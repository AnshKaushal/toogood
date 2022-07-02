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
exports.id = "pages/api/postcompose";
exports.ids = ["pages/api/postcompose"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/postcompose.js":
/*!**********************************!*\
  !*** ./pages/api/postcompose.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Process a POST request \n        let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogdata\");\n        fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(`blogdata/${req.body.slug}.json`, JSON.stringify(req.body));\n        res.status(200).json(req);\n    } else {\n        res.status(200).json([\n            \"allBlogs\"\n        ]);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdGNvbXBvc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBQ1YsZUFBZ0JDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLDBCQUEwQjtRQUMxQixJQUFJQyxJQUFJLEdBQUcsTUFBTUwsZ0RBQW1CLENBQUMsVUFBVSxDQUFDO1FBQ2hEQSxrREFBcUIsQ0FBQyxDQUFDLFNBQVMsRUFBRUUsR0FBRyxDQUFDTyxJQUFJLENBQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNWLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7UUFDakZOLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNaLEdBQUcsQ0FBQztLQUMxQixNQUFNO1FBQ0xDLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQyxVQUFVO1NBQUMsQ0FBQztLQUVuQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3R2NC8uL3BhZ2VzL2FwaS9wb3N0Y29tcG9zZS5qcz81MTBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgLy8gUHJvY2VzcyBhIFBPU1QgcmVxdWVzdCBcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcignYmxvZ2RhdGEnKTtcbiAgICAgIGZzLnByb21pc2VzLndyaXRlRmlsZShgYmxvZ2RhdGEvJHtyZXEuYm9keS5zbHVnfS5qc29uYCwgSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpKVxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVxKVxuICAgIH0gZWxzZSB7IFxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oW1wiYWxsQmxvZ3NcIl0pIFxuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwicHJvbWlzZXMiLCJyZWFkZGlyIiwid3JpdGVGaWxlIiwiYm9keSIsInNsdWciLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/postcompose.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/postcompose.js"));
module.exports = __webpack_exports__;

})();