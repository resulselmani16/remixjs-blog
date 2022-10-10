import {
  require_auth
} from "/build/_shared/chunk-RIRMJESR.js";
import {
  Form,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-RZNBLSRP.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/admin/index.tsx
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminIndex() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mx-2",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex w-full justify-between",
          children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "italic",
              children: [
                "user - ",
                data == null ? void 0 : data.name
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/admin/index.tsx",
              lineNumber: 22,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
              method: "post",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "rounded bg-red-600 py-2 px-4 font-bold text-white",
                children: "Log out"
              }, void 0, false, {
                fileName: "app/routes/posts/admin/index.tsx",
                lineNumber: 24,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/posts/admin/index.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/posts/admin/index.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/posts/admin/index.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/admin/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/admin/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  AdminIndex as default
};
//# sourceMappingURL=/build/routes/posts/admin/index-2RBGZ2BD.js.map
