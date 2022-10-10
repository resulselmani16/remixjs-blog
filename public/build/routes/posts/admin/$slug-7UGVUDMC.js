import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  Form,
  require_jsx_dev_runtime,
  useActionData,
  useTransition
} from "/build/_shared/chunk-QEGWQXTZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/admin/$slug.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
function NewPost() {
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);
  const errors = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
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
              lineNumber: 70,
              columnNumber: 13
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              name: "title",
              className: inputClassName
            }, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 66,
        columnNumber: 7
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
              lineNumber: 79,
              columnNumber: 13
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              name: "slug",
              className: inputClassName
            }, void 0, false, {
              fileName: "app/routes/posts/admin/$slug.tsx",
              lineNumber: 81,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 75,
        columnNumber: 7
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
                lineNumber: 88,
                columnNumber: 13
              }, this) : null
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 91,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            name: "markdown",
            id: "markdown",
            rows: 20,
            className: `${inputClassName} font-mono`
          }, void 0, false, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-right",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          type: "submit",
          className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300",
          disabled: isCreating,
          children: isCreating ? "Creating..." : "Create Post"
        }, void 0, false, {
          fileName: "app/routes/posts/admin/$slug.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/posts/admin/$slug-7UGVUDMC.js.map
