import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-OORGIWBZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/$slug.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostSlug() {
  const { slug } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "mx-auto max-w-4xl",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      className: "my-6 border-b-2 text-center text-3xl",
      children: [
        "Some Post: ",
        slug
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/$slug.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/$slug.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-WANVXGAY.js.map
