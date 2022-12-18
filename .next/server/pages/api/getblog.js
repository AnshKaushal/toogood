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
exports.id = "pages/api/getblog";
exports.ids = ["pages/api/getblog"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/getblog.js":
/*!******************************!*\
  !*** ./pages/api/getblog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n//Valid Slug : http://localhost:3000/api/getblog?slug=why-i-started-blogging\n\nfunction handler(req, res) {\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`./blogdata/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No such blog found\"\n            });\n        }\n        res.status(200).json(JSON.parse(data));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YmxvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0RUFBNEU7QUFDbkQ7QUFFVixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCx3Q0FBVyxDQUFDLENBQUMsV0FBVyxFQUFFRSxHQUFHLENBQUNHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBSztRQUNuRSxJQUFHRCxHQUFHLEVBQUM7WUFDSEosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBQ0MsS0FBSyxFQUFDLG9CQUFvQjthQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVMUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0djQvLi9wYWdlcy9hcGkvZ2V0YmxvZy5qcz82NjE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vVmFsaWQgU2x1ZyA6IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0YmxvZz9zbHVnPXdoeS1pLXN0YXJ0ZWQtYmxvZ2dpbmdcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBmcy5yZWFkRmlsZShgLi9ibG9nZGF0YS8ke3JlcS5xdWVyeS5zbHVnfS5qc29uYCwndXRmLTgnLChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmKGVycil7XG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOlwiTm8gc3VjaCBibG9nIGZvdW5kXCJ9KVxuICAgICAgfSBcbiAgXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04ucGFyc2UoZGF0YSkpXG59KVxufVxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlYWRGaWxlIiwicXVlcnkiLCJzbHVnIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getblog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getblog.js"));
module.exports = __webpack_exports__;

})();