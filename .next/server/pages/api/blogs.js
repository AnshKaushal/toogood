"use strict";
(() => {
var exports = {};
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 7872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    let data = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for(let index = 0; index < data.length; index++){
        const item = data[index];
        myfile = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile("./blogdata/" + item, "utf-8");
        allBlogs.push(JSON.parse(myfile));
    }
    res.status(200).json(allBlogs);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7872));
module.exports = __webpack_exports__;

})();