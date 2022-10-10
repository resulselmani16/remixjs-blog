import "/build/_shared/chunk-52C552IL.js";
import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-K7Y2GTZL.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/$slug.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostSlug() {
  const { post, html } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: () => history.go(-1),
        className: "w-40 rounded bg-slate-400 text-white m-12 p-2",
        children: "Back to blogs"
      }, void 0, false, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "mx-auto max-w-4xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "my-6 border-b-2 text-center text-3xl",
            children: post.title
          }, void 0, false, {
            fileName: "app/routes/posts/$slug.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            dangerouslySetInnerHTML: { __html: html }
          }, void 0, false, {
            fileName: "app/routes/posts/$slug.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/$slug.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-AUW6NVQP.js.map
