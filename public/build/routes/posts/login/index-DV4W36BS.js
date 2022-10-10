import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/login/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var index = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      method: "post",
      onSubmit: handleSubmit,
      className: "flex flex-col max-w-xs mx-auto my-20 h-max",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          className: "my-4",
          children: "Username:"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "p-1 rounded-md",
          type: "text",
          onChange: ({ target }) => setUsername(target.value),
          placeholder: "username",
          value: username
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          className: "my-4",
          children: "Password:"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "p-1 rounded-md",
          onChange: ({ target }) => setPassword(target.value),
          type: "password",
          value: password,
          placeholder: "password"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "my-4 border cursor-pointer p-1 hover:bg-slate-100 hover:border-slate-100 rounded-md border-solid border-white",
          type: "submit",
          name: "Submit",
          value: "submit"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/login/index.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/login/index.tsx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
};
var login_default = index;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/posts/login/index-DV4W36BS.js.map
