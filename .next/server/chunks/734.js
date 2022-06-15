exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 349:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Repositories_container__KRvmH",
	"main": "Repositories_main__NX6qe",
	"title": "Repositories_title__Yzr1B",
	"description": "Repositories_description__w_5F_",
	"link": "Repositories_link__9iNre",
	"grid": "Repositories_grid__qd2qS",
	"card": "Repositories_card__676pO",
	"row": "Repositories_row__oziZp",
	"infoPanel": "Repositories_infoPanel__DzRFh",
	"showIssues": "Repositories_showIssues__NJ78i",
	"issuesLink": "Repositories_issuesLink__b6mAi",
	"branchName": "Repositories_branchName__gP5_L",
	"fullWidth": "Repositories_fullWidth__WnO1i",
	"bold": "Repositories_bold__Eu6Uz",
	"loader": "Repositories_loader__tDnKx",
	"spin": "Repositories_spin__r4akC"
};


/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(349);
/* harmony import */ var _styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1__);


const Respositories = (props)=>{
    const { repositories  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().row),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().title),
                    children: "Repositories"
                })
            }),
            repositories && repositories?.length > 0 ? repositories.map((repository, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RepositoryItem, {
                    ...repository,
                    ...props
                }, i)
            ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().loader)
            })
        ]
    });
};
const RepositoryItem = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().row),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().infoPanel),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: props.owner?.htmlUrl,
                                target: "_blank",
                                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),
                                rel: "noreferrer",
                                children: props.fullName?.split("/")[0]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: " / "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: props.htmlUrl,
                                target: "_blank",
                                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),
                                rel: "noreferrer",
                                children: props.fullName?.split("/")[1]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),
                        children: props.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().branchName),
                        children: `Default branch: ${props.defaultBranch}`
                    })
                ]
            }),
            props.openIssuesCount && props.openIssuesCount > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().showIssues),
                onClick: ()=>props.handleShowIssues?.(props.fullName || "")
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: (_styles_Repositories_module_css__WEBPACK_IMPORTED_MODULE_1___default().issuesLink),
                    children: "Show issues"
                })
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Respositories);


/***/ })

};
;