import "/build/_shared/chunk-52C552IL.js";
import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-QEGWQXTZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/admin/$slug.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminPost() {
  const { post, html } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "mx-auto max-w-4xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "my-6 text-left text-3xl",
        children: post.title
      }, void 0, false, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        dangerouslySetInnerHTML: { __html: html }
      }, void 0, false, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-end flex w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "bg-green-500 mx-4 w-40 rounded",
            children: "Edit Post"
          }, void 0, false, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "bg-red-500  mx-4 py-2 w-40 rounded",
            children: "Delete Post"
          }, void 0, false, {
            fileName: "app/routes/posts/admin/$slug.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/admin/$slug.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/admin/$slug.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
export {
  AdminPost as default
};
//# sourceMappingURL=/build/routes/posts/admin/$slug-J6XVSYZI.js.map
