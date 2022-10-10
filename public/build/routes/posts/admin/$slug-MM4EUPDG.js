import "/build/_shared/chunk-52C552IL.js";
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
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminPost() {
  const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
  const transition = useTransition();
  const isSaving = Boolean(transition.submission);
  const [isEditMode, setIsEditMode] = (0, import_react2.useState)(false);
  const { post, html } = useLoaderData();
  const errors = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "mx-auto max-w-4xl",
    children: isEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              "Post Title:",
              (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                className: "text-red-600",
                children: [
                  " ",
                  errors.title
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 78,
                columnNumber: 17
              }, this) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "title",
                className: inputClassName
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 80,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "",
            children: [
              "Post Slug:",
              (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                className: "text-red-600",
                children: [
                  " ",
                  errors.slug
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 87,
                columnNumber: 17
              }, this) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "slug",
                className: inputClassName
              }, void 0, false, {
                fileName: "app/routes/posts/admin/$slug.tsx",
                lineNumber: 89,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "markdown",
              children: [
                "Markdown:",
                (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                  className: "text-red-600",
                  children: [
                    " ",
                    errors.markdown
                  ]
                }, void 0, true, {
                  fileName: "app/routes/posts/admin/$slug.tsx",
                  lineNumber: 96,
                  columnNumber: 17
                }, this) : null
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 99,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
              name: "markdown",
              id: "markdown",
              rows: 20,
              className: `${inputClassName} font-mono`
            }, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-right",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
            disabled: isSaving,
            onClick: () => setIsEditMode(false),
            children: isSaving ? "Saving..." : "Save Post"
          }, void 0, false, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 108,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "my-6 text-left text-3xl",
          children: post.title
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          dangerouslySetInnerHTML: { __html: html }
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-end flex w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "mx-4 w-40 rounded bg-green-500",
              onClick: () => setIsEditMode(true),
              children: "Edit Post"
            }, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 124,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "mx-4  w-40 rounded bg-red-500 py-2",
              children: "Delete Post"
            }, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 130,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/admin/$slug.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
export {
  AdminPost as default
};
//# sourceMappingURL=/build/routes/posts/admin/$slug-MM4EUPDG.js.map
