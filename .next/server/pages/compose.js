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
exports.id = "pages/compose";
exports.ids = ["pages/compose"];
exports.modules = {

/***/ "./styles/Contact.module.css":
/*!***********************************!*\
  !*** ./styles/Contact.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Contact_container__u4Z1Q\",\n\t\"heading\": \"Contact_heading__JP_zt\",\n\t\"mb3\": \"Contact_mb3__lSm8B\",\n\t\"input\": \"Contact_input__fWz9j\",\n\t\"formlabel\": \"Contact_formlabel__NxdQp\",\n\t\"btn\": \"Contact_btn__fjBIf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ29udGFjdC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0djQvLi9zdHlsZXMvQ29udGFjdC5tb2R1bGUuY3NzPzNmZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ29udGFjdF9jb250YWluZXJfX3U0WjFRXCIsXG5cdFwiaGVhZGluZ1wiOiBcIkNvbnRhY3RfaGVhZGluZ19fSlBfenRcIixcblx0XCJtYjNcIjogXCJDb250YWN0X21iM19fbFNtOEJcIixcblx0XCJpbnB1dFwiOiBcIkNvbnRhY3RfaW5wdXRfX2ZXejlqXCIsXG5cdFwiZm9ybWxhYmVsXCI6IFwiQ29udGFjdF9mb3JtbGFiZWxfX054ZFFwXCIsXG5cdFwiYnRuXCI6IFwiQ29udGFjdF9idG5fX2ZqQklmXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Contact.module.css\n");

/***/ }),

/***/ "./pages/compose.js":
/*!**************************!*\
  !*** ./pages/compose.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Contact.module.css */ \"./styles/Contact.module.css\");\n/* harmony import */ var _styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Compose = ()=>{\n    const url = `/api/postcompose`;\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        metadesc: \"\",\n        content: \"\",\n        slug: \"\"\n    });\n    function submit(e) {\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_2__.post(url, {\n            title: data.title,\n            metadesc: data.metadesc,\n            content: data.content,\n            slug: data.slug\n        }).then((res)=>{\n            console.log(res.data);\n        });\n    }\n    function handle(e) {\n        const newdata = {\n            ...data\n        };\n        newdata[e.target.id] = e.target.value;\n        setData(newdata);\n        console.log(newdata);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Create new post - Ansh's Blog\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"My Personal Developer Blog.\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"https://anshkaushal.github.io/images/favicon.png\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                    lineNumber: 37,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),\n                    children: \"New Post\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: (e)=>submit(e)\n                    ,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().mb3),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().formlabel),\n                                    children: \"Title :\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                    value: data.title,\n                                    onChange: (e)=>handle(e)\n                                    ,\n                                    placeholder: \"Title...\",\n                                    id: \"title\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().mb3),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"metadesc\",\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().formlabel),\n                                    children: \"Description :\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                    type: \"text\",\n                                    value: data.metadesc,\n                                    onChange: (e)=>handle(e)\n                                    ,\n                                    placeholder: \"Description...\",\n                                    id: \"metadesc\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().mb3),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"content\",\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().formlabel),\n                                    children: \"Content :\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                    placeholder: \"Content...\",\n                                    value: data.content,\n                                    onChange: (e)=>handle(e)\n                                    ,\n                                    id: \"content\",\n                                    rows: \"5\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().mb3),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"slug\",\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().formlabel),\n                                    children: \"Slug :\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                    type: \"text\",\n                                    value: data.slug,\n                                    onChange: (e)=>handle(e)\n                                    ,\n                                    placeholder: \"Slug...\",\n                                    id: \"slug\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: (_styles_Contact_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                            lineNumber: 99,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Website Templates\\\\toogood\\\\pages\\\\compose.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compose);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDOUIsQ0FBQyxHQUFHTyxNQUFNLENBQUNQLENBQUMsQ0FBQztvQ0FBQTtvQ0FDeEIrQixXQUFXLEVBQUMsU0FBUztvQ0FDckJyQixFQUFFLEVBQUMsTUFBTTs7Ozs7NkNBQ1Q7Ozs7OztxQ0FDRTtzQ0FDTiw4REFBQ3dCLFFBQU07NEJBQUNMLElBQUksRUFBQyxRQUFROzRCQUFDaEIsU0FBUyxFQUFFdkIsdUVBQVU7c0NBQUUsUUFFN0M7Ozs7O3FDQUFTOzs7Ozs7NkJBQ0o7Ozs7OztxQkFDRDs7Ozs7aUJBQ0YsQ0FDUDtDQUNGO0FBRUQsaUVBQWVDLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdHY0Ly4vcGFnZXMvY29tcG9zZS5qcz84ZjM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ29udGFjdC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBDb21wb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAvYXBpL3Bvc3Rjb21wb3NlYFxuICAgIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgbWV0YWRlc2M6IFwiXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgIHNsdWc6IFwiXCJcbiAgICB9KVxuICAgIFxuICAgIGZ1bmN0aW9uIHN1Ym1pdChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBBeGlvcy5wb3N0KHVybCx7XG4gICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgIG1ldGFkZXNjOiBkYXRhLm1ldGFkZXNjLFxuICAgICAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICAgICAgc2x1ZzogZGF0YS5zbHVnLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXM9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZShlKXtcbiAgICAgICAgY29uc3QgbmV3ZGF0YT17Li4uZGF0YX1cbiAgICAgICAgbmV3ZGF0YVtlLnRhcmdldC5pZF0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBzZXREYXRhKG5ld2RhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld2RhdGEpXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIG5ldyBwb3N0IC0gQW5zaCdzIEJsb2c8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTXkgUGVyc29uYWwgRGV2ZWxvcGVyIEJsb2cuXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hbnNoa2F1c2hhbC5naXRodWIuaW8vaW1hZ2VzL2Zhdmljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5OZXcgUG9zdDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT5zdWJtaXQoZSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1iM30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1sYWJlbH0+XG4gICAgICAgICAgICBUaXRsZSA6XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2RhdGEudGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGUoZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlLi4uXCJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1iM30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXRhZGVzY1wiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1sYWJlbH0+XG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA6XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2RhdGEubWV0YWRlc2N9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5oYW5kbGUoZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uLi4uXCJcbiAgICAgICAgICAgIGlkPVwibWV0YWRlc2NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1iM30+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCIgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWxhYmVsfT5cbiAgICAgICAgICAgIENvbnRlbnQgOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudC4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlKGUpfVxuICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYjN9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2x1Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1sYWJlbH0+XG4gICAgICAgICAgICBTbHVnIDpcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5zbHVnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+aGFuZGxlKGUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTbHVnLi4uXCJcbiAgICAgICAgICAgIGlkPVwic2x1Z1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXhpb3MiLCJIZWFkIiwic3R5bGVzIiwiQ29tcG9zZSIsInVybCIsImRhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJtZXRhZGVzYyIsImNvbnRlbnQiLCJzbHVnIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlIiwibmV3ZGF0YSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiLCJoZWFkaW5nIiwiZm9ybSIsIm9uU3VibWl0IiwibWIzIiwibGFiZWwiLCJodG1sRm9yIiwiZm9ybWxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/compose.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/compose.js"));
module.exports = __webpack_exports__;

})();