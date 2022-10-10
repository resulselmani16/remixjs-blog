import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3W7WQBCY.js";
import {
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-LQSBY5T7.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/admin.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostAdmin() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mx-auto max-w-4xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        onClick: () => {
          location.href = "/posts";
        },
        className: "m-12 w-40 rounded bg-slate-400 p-2 text-white",
        children: "< Back to blogs"
      }, void 0, false, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "my-6 mb-2 border-b-2 text-center text-3xl",
        children: "Blog Admin"
      }, void 0, false, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-4 gap-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "col-span-4 md:col-span-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
              children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                to: post.slug,
                children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                    className: "m-2 cursor-pointer rounded bg-slate-400 p-2 font-bold text-white",
                    children: post.title
                  }, post.slug, false, {
                    fileName: "app/routes/posts/admin.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                  }, this)
                ]
              }, post.slug, true, {
                fileName: "app/routes/posts/admin.tsx",
                lineNumber: 32,
                columnNumber: 15
              }, this))
            }, void 0, false, {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "col-span-4 md:col-span-3",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/admin.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  PostAdmin as default
};
//# sourceMappingURL=/build/routes/posts/admin-NZIIKDHA.js.map
