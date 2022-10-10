import {
  require_session
} from "/build/_shared/chunk-GLWAIFE6.js";
import {
  require_auth
} from "/build/_shared/chunk-GWKZO3TS.js";
import {
  Form,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-QEGWQXTZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/login.tsx
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LoginPage() {
  var _a;
  const loaderData = useLoaderData();
  console.log(loaderData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-screen w-full items-center justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Log in to continue"
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "email",
            name: "email",
            placeholder: "email",
            required: true
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 39,
            columnNumber: 76
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "password",
            name: "password",
            placeholder: "password",
            autoComplete: "current-password"
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            children: "Sign In "
          }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: (loaderData == null ? void 0 : loaderData.error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            "ERROR: ",
            (_a = loaderData == null ? void 0 : loaderData.error) == null ? void 0 : _a.message
          ]
        }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
export {
  LoginPage as default
};
//# sourceMappingURL=/build/routes/login-BHEDETL2.js.map
