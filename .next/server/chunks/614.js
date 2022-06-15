"use strict";
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(349);
/* harmony import */ var _styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Issues = (props)=>{
    const { issues  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().row),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
                    children: `${props.title} Issues`
                })
            }),
            issues && issues?.length > 0 ? issues?.map((issue, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IssueItem, {
                    ...issue,
                    ...props
                }, i)
            ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().loader)
            })
        ]
    });
};
const IssueItem = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().row),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().infoPanel)} ${(_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().fullWidth)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().bold),
                    children: props.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),
                    children: props.body
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Issues);


/***/ })

};
;