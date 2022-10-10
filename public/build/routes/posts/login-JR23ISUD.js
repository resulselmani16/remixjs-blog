import {
  require_jsx_dev_runtime,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-QEGWQXTZ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg text-purple-900 outline-purple-300 `;
function LoginRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex content-center items-center justify-center text-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "my-10 rounded-md bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300 px-5 py-6  font-bold md:w-2/3 lg:m-10 lg:w-1/2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-center text-2xl text-white",
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "redirectTo",
            value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 12,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            className: "text-center ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
                className: "sr-only",
                children: "Login or Register?"
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 18,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "radio",
                    name: "loginType",
                    value: "login",
                    defaultChecked: !((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) || ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "login"
                  }, void 0, false, {
                    fileName: "app/routes/posts/login.tsx",
                    lineNumber: 20,
                    columnNumber: 15
                  }, this),
                  " ",
                  "Login"
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 19,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "radio",
                    name: "loginType",
                    value: "register",
                    defaultChecked: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.loginType) === "register"
                  }, void 0, false, {
                    fileName: "app/routes/posts/login.tsx",
                    lineNumber: 32,
                    columnNumber: 15
                  }, this),
                  " ",
                  "Register"
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            className: "text-lg leading-7 text-white",
            children: [
              "Username:",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                className: inputClassName,
                name: "username",
                required: true,
                minLength: 3,
                defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.username,
                "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.username),
                "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.username) ? "username-error" : undefinedds
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this),
              ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.username) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-red-500",
                role: "alert",
                id: "username-error",
                children: actionData.fieldErrors.username
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 56,
                columnNumber: 15
              }, this) : null
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            className: "text-lg leading-7 text-white",
            children: [
              "Password",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                name: "password",
                className: inputClassName,
                required: true,
                defaultValue: (_i = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _i.password,
                type: "password",
                "aria-invalid": Boolean((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.password) || void 0,
                "aria-errormessage": ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password) ? "password-error" : void 0
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 63,
                columnNumber: 13
              }, this),
              ((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-red-500",
                role: "alert",
                id: "password-error",
                children: actionData.fieldErrors.password
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 77,
                columnNumber: 15
              }, this) : null
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            id: "form-error-message",
            children: (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-red-500",
              role: "alert",
              children: actionData.formError
            }, void 0, false, {
              fileName: "app/routes/posts/login.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this) : null
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 82,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "my-4 rounded-lg border-2 border-purple-500 bg-white py-2 px-7 font-bold text-purple-500 hover:scale-105",
            type: "submit",
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/login.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/posts/login.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/login.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
export {
  LoginRoute as default
};
//# sourceMappingURL=/build/routes/posts/login-JR23ISUD.js.map
