import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-6ZKKDW54.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/admin/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminIndex() {
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
      className: "rounded bg-green-600 p-2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "new",
        className: "text-white",
        children: "Create a new Post"
      }, void 0, false, {
        fileName: "app/routes/posts/admin/index.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/posts/admin/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/admin/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  AdminIndex as default
};
//# sourceMappingURL=/build/routes/posts/admin/index-UODBKCDP.js.map
