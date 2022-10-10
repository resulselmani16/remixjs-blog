import "/build/_shared/chunk-52C552IL.js";
import {
  require_auth
} from "/build/_shared/chunk-GWKZO3TS.js";
import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-QEGWQXTZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/admin/$slug.tsx
var import_post = __toESM(require_post());
var import_auth = __toESM(require_auth());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
function NewPost() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const [isEditMode, setIsEditMode] = (0, import_react2.useState)(false);
  const data = useLoaderData();
  const errors = useActionData();
  const transition = useTransition();
  const isCreating = ((_a = transition.submission) == null ? void 0 : _a.formData.get("intent")) === "create";
  const isUpdating = ((_b = transition.submission) == null ? void 0 : _b.formData.get("intent")) === "update";
  const isDeleting = ((_c = transition.submission) == null ? void 0 : _c.formData.get("intent")) === "delete";
  const isCancelling = ((_d = transition.submission) == null ? void 0 : _d.formData.get("intent")) === "cancel";
  const isNewPost = !data.post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: isEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mx-8",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  children: [
                    "Post Title:",
                    " ",
                    (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                      className: "text-red-600",
                      children: errors.title
                    }, void 0, false, {
                      fileName: "app/routes/posts/admin/$slug.tsx",
                      lineNumber: 109,
                      columnNumber: 21
                    }, this) : null,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "text",
                      name: "title",
                      className: inputClassName,
                      defaultValue: (_g = data.post) == null ? void 0 : _g.title
                    }, void 0, false, {
                      fileName: "app/routes/posts/admin/$slug.tsx",
                      lineNumber: 111,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 106,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 105,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  children: [
                    "Post Slug:",
                    " ",
                    (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                      className: "text-red-600",
                      children: errors.slug
                    }, void 0, false, {
                      fileName: "app/routes/posts/admin/$slug.tsx",
                      lineNumber: 123,
                      columnNumber: 21
                    }, this) : null,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "text",
                      name: "slug",
                      className: inputClassName,
                      defaultValue: (_h = data.post) == null ? void 0 : _h.slug
                    }, void 0, false, {
                      fileName: "app/routes/posts/admin/$slug.tsx",
                      lineNumber: 125,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 120,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 119,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "markdown",
                children: [
                  "Markdown:",
                  " ",
                  (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                    className: "text-red-600",
                    children: errors.markdown
                  }, void 0, false, {
                    fileName: "app/routes/posts/admin/$slug.tsx",
                    lineNumber: 138,
                    columnNumber: 19
                  }, this) : null
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 135,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                id: "markdown",
                rows: 20,
                name: "markdown",
                className: `${inputClassName} font-mono`,
                defaultValue: (_i = data.post) == null ? void 0 : _i.markdown
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 141,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-end gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "intent",
                value: "cancel",
                className: "rounded bg-yellow-500 py-2 px-4 text-white hover:bg-yellow-600 focus:bg-yellow-400 disabled:bg-yellow-300",
                children: isCancelling ? "Cancelling..." : "Cancel"
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 150,
                columnNumber: 15
              }, this),
              isNewPost ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "intent",
                value: "delete",
                className: "rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300",
                disabled: isDeleting,
                children: isDeleting ? "Deleting..." : "Delete"
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 159,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "intent",
                value: isNewPost ? "create" : "update",
                className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
                disabled: isCreating || isUpdating,
                children: [
                  isNewPost ? isCreating ? "Creating..." : "Create Post" : null,
                  isNewPost ? null : isUpdating ? "Updating..." : "Update"
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 169,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this)
        ]
      }, (_f = (_e = data.post) == null ? void 0 : _e.slug) != null ? _f : "new", true, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
      className: "mx-auto max-w-4xl",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "my-6 border-b-2 text-center text-3xl",
          children: post.title
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          dangerouslySetInnerHTML: { __html: html }
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 187,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/posts/admin/$slug-RKPVWUAB.js.map
