import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-K7Y2GTZL.js";
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
        children: "Posts"
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "admin",
        className: "text-red-600 underline",
        children: "Admin"
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: post.slug,
            className: "text-blue-600 underline",
            children: post.title
          }, void 0, false, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, post.slug, false, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-BZ4SAT76.js.map
