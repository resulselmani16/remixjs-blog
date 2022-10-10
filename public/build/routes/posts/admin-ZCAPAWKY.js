import {
  require_post
} from "/build/_shared/chunk-4TOSMUSX.js";
import "/build/_shared/chunk-NRPTKIX6.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-RZNBLSRP.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/admin.tsx
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostAdmin() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mx-auto max-w-4xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "my-6 mb-2 border-b-2 text-center text-3xl",
        children: "Blog Admin"
      }, void 0, false, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 20,
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
                    lineNumber: 27,
                    columnNumber: 17
                  }, this)
                ]
              }, post.slug, true, {
                fileName: "app/routes/posts/admin.tsx",
                lineNumber: 25,
                columnNumber: 15
              }, this))
            }, void 0, false, {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "col-span-4 md:col-span-3",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
              fileName: "app/routes/posts/admin.tsx",
              lineNumber: 38,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/posts/admin.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/admin.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/admin.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  PostAdmin as default
};
//# sourceMappingURL=/build/routes/posts/admin-ZCAPAWKY.js.map