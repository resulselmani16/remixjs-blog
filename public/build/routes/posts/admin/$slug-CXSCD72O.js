import "/build/_shared/chunk-52C552IL.js";
import {
  require_auth
} from "/build/_shared/chunk-GWKZO3TS.js";
import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  Form,
  Link,
  Links,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useLoaderData,
  useParams,
  useTransition
} from "/build/_shared/chunk-K7Y2GTZL.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/admin/$slug.tsx
var import_post = __toESM(require_post());
var import_auth = __toESM(require_auth());
var import_react2 = __toESM(require_react());

// app/routes/posts/admin/style.css
var style_default = "/build/_assets/style-UNIV6RJH.css";

// app/routes/posts/admin/$slug.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: style_default
    }
  ];
};
var inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
function NewPost() {
  var _a, _b, _c, _d;
  const [isEditMode, setIsEditMode] = (0, import_react2.useState)(true);
  const handleCreateNewPost = () => {
    location.href = "/posts/admin/new";
  };
  const { post, html } = useLoaderData();
  const errors = useActionData();
  const transition = useTransition();
  const isCreating = ((_a = transition.submission) == null ? void 0 : _a.formData.get("intent")) === "create";
  const isUpdating = ((_b = transition.submission) == null ? void 0 : _b.formData.get("intent")) === "update";
  const isDeleting = ((_c = transition.submission) == null ? void 0 : _c.formData.get("intent")) === "delete";
  const isNewPost = !post;
  const urlParams = useParams();
  const [title, setTitle] = (0, import_react2.useState)("");
  const [slug, setSlug] = (0, import_react2.useState)("");
  const [markdown, setMarkdown] = (0, import_react2.useState)("");
  const [hasMargin, setHasMargin] = (0, import_react2.useState)(0);
  const handleHover = () => {
    if (title === "" || slug === "" || markdown === "") {
      hasMargin;
    }
    console.log("test");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      isEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
          method: "post",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Tip:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                  children: "You've entered Edit mode. If the fields are empty but you want to edit any post, just click on any post on the left and you will be given access to edit the post."
                }, void 0, false, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 135,
                  columnNumber: 15
                }, this),
                " "
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 133,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 141,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  onClick: () => setIsEditMode(false),
                  className: "mb-2 mr-4 h-12 w-40 rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600 focus:bg-yellow-400 disabled:bg-yellow-300",
                  children: "Quit edit mode"
                }, void 0, false, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 143,
                  columnNumber: 15
                }, this),
                urlParams.slug !== "new" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  className: "mt-4 w-40 rounded bg-green-600 p-2 text-white",
                  to: "/posts/admin/new",
                  children: "Create New Blog"
                }, void 0, false, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 150,
                  columnNumber: 17
                }, this) : null
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 142,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 158,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    children: [
                      "Post Title:",
                      (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                        className: "text-red-600",
                        children: errors.title
                      }, void 0, false, {
                        fileName: "app/routes/posts/admin/$slug.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                      }, this) : null,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        onChange: (e) => setTitle(e.target.value),
                        type: "text",
                        name: "title",
                        className: inputClassName,
                        defaultValue: (post == null ? void 0 : post.slug) && (post == null ? void 0 : post.title)
                      }, void 0, false, {
                        fileName: "app/routes/posts/admin/$slug.tsx",
                        lineNumber: 166,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/posts/admin/$slug.tsx",
                    lineNumber: 161,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 160,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    children: [
                      "Post Slug:",
                      (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                        className: "text-red-600",
                        children: errors.slug
                      }, void 0, false, {
                        fileName: "app/routes/posts/admin/$slug.tsx",
                        lineNumber: 179,
                        columnNumber: 21
                      }, this) : null,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        onChange: (e) => setSlug(e.target.value),
                        type: "text",
                        name: "slug",
                        className: inputClassName,
                        defaultValue: (post == null ? void 0 : post.slug) && (post == null ? void 0 : post.slug)
                      }, void 0, false, {
                        fileName: "app/routes/posts/admin/$slug.tsx",
                        lineNumber: 181,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/posts/admin/$slug.tsx",
                    lineNumber: 176,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 175,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 159,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "markdown",
                  children: [
                    "Markdown:",
                    (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                      className: "text-red-600",
                      children: errors.markdown
                    }, void 0, false, {
                      fileName: "app/routes/posts/admin/$slug.tsx",
                      lineNumber: 195,
                      columnNumber: 19
                    }, this) : null
                  ]
                }, void 0, true, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 192,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  onChange: (e) => setMarkdown(e.target.value),
                  id: "markdown",
                  rows: 20,
                  name: "markdown",
                  className: `${inputClassName} font-mono`,
                  defaultValue: (post == null ? void 0 : post.slug) && (post == null ? void 0 : post.markdown)
                }, void 0, false, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 198,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 191,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-end gap-4",
              children: [
                isNewPost ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  name: "intent",
                  value: "delete",
                  className: "rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300",
                  disabled: isDeleting,
                  children: isDeleting ? "Deleting..." : "Delete"
                }, void 0, false, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 209,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  onMouseOver: () => handleHover(),
                  name: "intent",
                  value: isNewPost ? "create" : "update",
                  className: `mr-${marginRight} margin-right rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300`,
                  disabled: isCreating || isUpdating,
                  children: [
                    isNewPost ? isCreating ? "Creating..." : "Create Post" : null,
                    isNewPost ? null : isUpdating ? "Updating..." : "Update"
                  ]
                }, void 0, true, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 219,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 207,
              columnNumber: 13
            }, this)
          ]
        }, (_d = post == null ? void 0 : post.slug) != null ? _d : "new", true, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "mx-auto max-w-4xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "my-6 text-3xl",
                children: post == null ? void 0 : post.title
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 240,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    onClick: () => setIsEditMode(true),
                    className: "mb-2 w-40 rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600 focus:bg-yellow-400 disabled:bg-yellow-300",
                    children: "Edit mode"
                  }, void 0, false, {
                    fileName: "app/routes/posts/admin/$slug.tsx",
                    lineNumber: 242,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                    fileName: "app/routes/posts/admin/$slug.tsx",
                    lineNumber: 248,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    onClick: () => handleCreateNewPost(),
                    id: "submit-btn",
                    className: `w-40 rounded bg-green-600 p-2 text-white`,
                    children: "Create a new Blog"
                  }, void 0, false, {
                    fileName: "app/routes/posts/admin/$slug.tsx",
                    lineNumber: 249,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 241,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 239,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            dangerouslySetInnerHTML: { __html: html || "" }
          }, void 0, false, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 258,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 238,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 128,
    columnNumber: 5
  }, this);
}
export {
  NewPost as default,
  links
};
//# sourceMappingURL=/build/routes/posts/admin/$slug-CXSCD72O.js.map
