import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-QEGWQXTZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/index.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Posts() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "my-6 mb-2 border-b-2 text-center text-3xl",
        children: "Blogs"
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "admin",
        className: "float-right m-2 w-40 cursor-pointer rounded bg-red-400 p-2 text-center font-bold text-white",
        children: "Admin"
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "flex flex-col",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
          className: "m-2 w-60 cursor-pointer rounded bg-slate-400 p-2 text-center font-bold text-white",
          to: post.slug,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: post.title
          }, post.slug, false, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, post.slug, false, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-KFRTJBMD.js.map
