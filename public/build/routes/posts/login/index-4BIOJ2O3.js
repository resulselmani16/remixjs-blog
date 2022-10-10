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
          lineNumber: 35,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "rounded-md p-1",
          type: "text",
          placeholder: "username",
          value: username
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
          className: "my-4",
          children: "Password:"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "rounded-md p-1",
          type: "password",
          value: password,
          placeholder: "password"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          className: "my-4 cursor-pointer rounded-md border border-solid border-black p-1 hover:border-black-100 hover:bg-black-100",
          type: "submit",
          name: "Submit",
          value: "submit"
        }, void 0, false, {
          fileName: "app/routes/posts/login/index.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/posts/login/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/login/index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
var login_default = Login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/posts/login/index-4BIOJ2O3.js.map
