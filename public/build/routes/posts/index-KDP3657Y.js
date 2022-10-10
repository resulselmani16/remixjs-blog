import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-OORGIWBZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Posts() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Posts"
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: post.slug,
            children: post.title
          }, void 0, false, {
            fileName: "app/routes/posts/index.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, post.slug, false, {
          fileName: "app/routes/posts/index.tsx",
          lineNumber: 19,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: "app/routes/posts/index.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/index.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-KDP3657Y.js.map
