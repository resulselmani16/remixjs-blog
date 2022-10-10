import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/login/index.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Login = () => {
  const [username, setUsername] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      method: "post",
      className: "mx-auto my-20 flex h-max max-w-xs flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          className: "my-4",
          children: "Username:"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "rounded-md p-1",
          type: "text",
          onChange: ({ target }) => setUsername(target.value),
          placeholder: "username",
          value: username
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          className: "my-4",
          children: "Password:"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "rounded-md p-1",
          onChange: ({ target }) => setPassword(target.value),
          type: "password",
          value: password,
          placeholder: "password"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "my-4 cursor-pointer rounded-md border border-solid border-white p-1 hover:border-slate-100 hover:bg-slate-100",
          type: "submit",
          name: "Submit",
          value: "submit"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/login/index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/login/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
var login_default = Login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/posts/login/index-W4NKLUPS.js.map
