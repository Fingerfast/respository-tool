"use strict";
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useIssues)
/* harmony export */ });
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(octokit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(216);



function useIssues() {
    const { 0: issues1 , 1: setIssues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getIssuesByRepo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((repo)=>{
        const octokit = new octokit__WEBPACK_IMPORTED_MODULE_0__.Octokit({
            auth: _index__WEBPACK_IMPORTED_MODULE_2__/* .personalGithubToken */ .N
        });
        const callAPI = async ()=>{
            try {
                const issues = await (await octokit.request(`GET /repos/${repo}/issues`, {
                    per_page: 10,
                    sort: "DESC"
                }))?.data;
                setIssues(issues);
            } catch (err) {
                console.log(err);
            }
        };
        callAPI();
    }, []);
    return {
        issues: issues1,
        getIssuesByRepo
    };
};


/***/ }),

/***/ 886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useRepos)
/* harmony export */ });
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(octokit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(216);



function useRepos() {
    const { 0: repositories , 1: setRepositories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getReposByFullName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((repositoryFullName)=>{
        const octokit = new octokit__WEBPACK_IMPORTED_MODULE_0__.Octokit({
            auth: _index__WEBPACK_IMPORTED_MODULE_2__/* .personalGithubToken */ .N
        });
        const callAPI = async ()=>{
            try {
                const result = await (await octokit.request(`GET /search/repositories`, {
                    q: `${repositoryFullName}`
                })).data;
                const normalizedRepositories = result.items.map((repository)=>{
                    return {
                        fullName: repository.full_name,
                        description: repository.description,
                        openIssuesCount: repository.open_issues_count,
                        defaultBranch: repository.default_branch,
                        htmlUrl: repository.html_url,
                        owner: {
                            htmlUrl: repository.owner?.html_url
                        }
                    };
                });
                setRepositories(normalizedRepositories);
            } catch (err) {
                console.log(err);
            }
        };
        callAPI();
    }, []);
    return {
        repositories,
        getReposByFullName
    };
};


/***/ }),

/***/ 216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ personalGithubToken)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/components/Input/Input.tsx


const Input_Input = ({ handleSearchInput , value  })=>{
    return /*#__PURE__*/ _jsx("input", {
        placeholder: "Search..",
        className: styles.input,
        value: value,
        onChange: (e)=>handleSearchInput(e.target.value)
    });
};
/* harmony default export */ const components_Input_Input = ((/* unused pure expression or super */ null && (Input_Input)));

;// CONCATENATED MODULE: ./pages/containers/Issues/Issues.tsx


const Issues_Issues = (props)=>{
    const { issues  } = props;
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.card,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: styles.row,
                children: /*#__PURE__*/ _jsx("h1", {
                    className: styles.title,
                    children: `${props.title} Issues`
                })
            }),
            issues && issues?.length > 0 ? issues?.map((issue, i)=>/*#__PURE__*/ _jsx(IssueItem, {
                    ...issue,
                    ...props
                }, i)
            ) : /*#__PURE__*/ _jsx("div", {
                className: styles.loader
            })
        ]
    });
};
const IssueItem = (props)=>{
    return /*#__PURE__*/ _jsx("div", {
        className: styles.row,
        children: /*#__PURE__*/ _jsxs("div", {
            className: `${styles.infoPanel} ${styles.fullWidth}`,
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: styles.bold,
                    children: props.title
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: styles.description,
                    children: props.body
                })
            ]
        })
    });
};
/* harmony default export */ const containers_Issues_Issues = ((/* unused pure expression or super */ null && (Issues_Issues)));

;// CONCATENATED MODULE: ./pages/containers/Repositories/Repositories.tsx


const Repositories_Respositories = (props)=>{
    const { repositories  } = props;
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.card,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: styles.row,
                children: /*#__PURE__*/ _jsx("h1", {
                    className: styles.title,
                    children: "Repositories"
                })
            }),
            repositories && repositories?.length > 0 ? repositories.map((repository, i)=>/*#__PURE__*/ _jsx(RepositoryItem, {
                    ...repository,
                    ...props
                }, i)
            ) : /*#__PURE__*/ _jsx("div", {
                className: styles.loader
            })
        ]
    });
};
const RepositoryItem = (props)=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.row,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.infoPanel,
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx("a", {
                                href: props.owner?.htmlUrl,
                                target: "_blank",
                                className: styles.link,
                                rel: "noreferrer",
                                children: props.fullName?.split("/")[0]
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                children: " / "
                            }),
                            /*#__PURE__*/ _jsx("a", {
                                href: props.htmlUrl,
                                target: "_blank",
                                className: styles.link,
                                rel: "noreferrer",
                                children: props.fullName?.split("/")[1]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.description,
                        children: props.description
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.branchName,
                        children: `Default branch: ${props.defaultBranch}`
                    })
                ]
            }),
            props.openIssuesCount && props.openIssuesCount > 0 ? /*#__PURE__*/ _jsx("div", {
                className: styles.showIssues,
                onClick: ()=>props.handleShowIssues?.(props.fullName || "")
                ,
                children: /*#__PURE__*/ _jsx("a", {
                    className: styles.issuesLink,
                    children: "Show issues"
                })
            }) : null
        ]
    });
};
/* harmony default export */ const Repositories = ((/* unused pure expression or super */ null && (Repositories_Respositories)));

// EXTERNAL MODULE: ./pages/api/useIssues.ts
var api_useIssues = __webpack_require__(512);
// EXTERNAL MODULE: ./pages/api/useRepos.ts
var api_useRepos = __webpack_require__(886);
;// CONCATENATED MODULE: ./pages/index.tsx









// PERSONAL TOKEN
const personalGithubToken = "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";
const Home = ()=>{
    const { 0: searchText , 1: setSearchText  } = useState("");
    const { getReposByFullName , repositories  } = useRepos();
    const { issues , getIssuesByRepo  } = useIssues();
    const { 0: issuesRepositoryName , 1: setIssuesRepositoryName  } = useState("");
    let timeout = null;
    const handleSearchInput = useCallback((value1)=>{
        function doDelayedSearch(value) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function() {
                getReposByFullName(value);
            }, 1000);
        }
        doDelayedSearch(value1);
        setSearchText(value1);
    }, []);
    const clickOnShowIssues = useCallback((repoName)=>{
        getIssuesByRepo(repoName);
        setIssuesRepositoryName(repoName);
    }, [
        getIssuesByRepo
    ]);
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.container,
        children: [
            /*#__PURE__*/ _jsxs(Head, {
                children: [
                    /*#__PURE__*/ _jsx("title", {
                        children: "Repositiry Tool"
                    }),
                    /*#__PURE__*/ _jsx("meta", {
                        name: "description",
                        content: "App for search repository and show eventual issues"
                    }),
                    /*#__PURE__*/ _jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.main,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.grid,
                        children: /*#__PURE__*/ _jsx(Input, {
                            handleSearchInput: handleSearchInput,
                            value: searchText
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.grid,
                        children: searchText === "" ? /*#__PURE__*/ _jsx("p", {
                            children: "For show repositories, start typing in search input."
                        }) : /*#__PURE__*/ _jsxs(_Fragment, {
                            children: [
                                /*#__PURE__*/ _jsx(Respositories, {
                                    repositories,
                                    handleShowIssues: clickOnShowIssues
                                }),
                                issues?.length > 0 && /*#__PURE__*/ _jsx(Issues, {
                                    title: issuesRepositoryName,
                                    issues
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = ((/* unused pure expression or super */ null && (Home)));


/***/ })

};
;