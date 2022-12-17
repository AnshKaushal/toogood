(() => {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 9992:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Contact_container__u4Z1Q",
	"heading": "Contact_heading__JP_zt",
	"mb3": "Contact_mb3__lSm8B",
	"input": "Contact_input__fWz9j",
	"formlabel": "Contact_formlabel__NxdQp",
	"btn": "Contact_btn__fjBIf"
};


/***/ }),

/***/ 2416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ compose)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
// EXTERNAL MODULE: C:\Users\ANSH\AppData\Roaming\npm\node_modules\next\head.js
var C_Users_ANSH_AppData_Roaming_npm_node_modules_next_head = __webpack_require__(4783);
var C_Users_ANSH_AppData_Roaming_npm_node_modules_next_head_default = /*#__PURE__*/__webpack_require__.n(C_Users_ANSH_AppData_Roaming_npm_node_modules_next_head);
// EXTERNAL MODULE: ./styles/Contact.module.css
var Contact_module = __webpack_require__(9992);
var Contact_module_default = /*#__PURE__*/__webpack_require__.n(Contact_module);
;// CONCATENATED MODULE: ./pages/compose.js





const Compose = ()=>{
    const url = `http://localhost:3000/api/postcompose`;
    const [data, setData] = (0,external_react_.useState)({
        title: "",
        metadesc: "",
        content: "",
        slug: ""
    });
    function submit(e) {
        e.preventDefault();
        external_axios_namespaceObject.post(url, {
            title: data.title,
            metadesc: data.metadesc,
            content: data.content,
            slug: data.slug
        }).then((res)=>{
            console.log(res.data);
        });
    }
    function handle(e) {
        const newdata = {
            ...data
        };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Contact_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((C_Users_ANSH_AppData_Roaming_npm_node_modules_next_head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Create new post - Ansh's Blog"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "My Personal Developer Blog."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "https://anshkaushal.github.io/images/favicon.png"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Contact_module_default()).heading,
                    children: "New Post"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: (e)=>submit(e),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Contact_module_default()).mb3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "title",
                                    className: (Contact_module_default()).formlabel,
                                    children: "Title :"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: (Contact_module_default()).input,
                                    value: data.title,
                                    onChange: (e)=>handle(e),
                                    placeholder: "Title...",
                                    id: "title"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Contact_module_default()).mb3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "metadesc",
                                    className: (Contact_module_default()).formlabel,
                                    children: "Description :"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: (Contact_module_default()).input,
                                    type: "text",
                                    value: data.metadesc,
                                    onChange: (e)=>handle(e),
                                    placeholder: "Description...",
                                    id: "metadesc"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Contact_module_default()).mb3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "content",
                                    className: (Contact_module_default()).formlabel,
                                    children: "Content :"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    className: (Contact_module_default()).input,
                                    placeholder: "Content...",
                                    value: data.content,
                                    onChange: (e)=>handle(e),
                                    id: "content",
                                    rows: "5"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Contact_module_default()).mb3,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "slug",
                                    className: (Contact_module_default()).formlabel,
                                    children: "Slug :"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: (Contact_module_default()).input,
                                    type: "text",
                                    value: data.slug,
                                    onChange: (e)=>handle(e),
                                    placeholder: "Slug...",
                                    id: "slug"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: (Contact_module_default()).btn,
                            children: "Submit"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const compose = (Compose);


/***/ }),

/***/ 4783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4957)


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2416));
module.exports = __webpack_exports__;

})();