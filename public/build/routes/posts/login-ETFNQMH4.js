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
    className: "flex justify-center items-center content-center text-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "lg:m-10 my-10 md:w-2/3 lg:w-1/2 bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300  font-bold px-5 py-6 rounded-md",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-center text-2xl text-white",
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 20,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "redirectTo",
            value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 21,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            className: "text-center ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
                className: "sr-only",
                children: "Login or Register?"
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 29,
                columnNumber: 25
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
                    lineNumber: 33,
                    columnNumber: 29
                  }, this),
                  " ",
                  "Login"
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 32,
                columnNumber: 25
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
                    lineNumber: 45,
                    columnNumber: 29
                  }, this),
                  " ",
                  "Register"
                ]
              }, void 0, true, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 44,
                columnNumber: 25
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 28,
            columnNumber: 21
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
                "aria-invalid": Boolean(
                  (_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.username
                ),
                "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.username) ? "username-error" : void 0
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 59,
                columnNumber: 25
              }, this),
              ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.username) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-red-500",
                role: "alert",
                id: "username-error",
                children: actionData.fieldErrors.username
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 76,
                columnNumber: 29
              }, this) : null
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 57,
            columnNumber: 21
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
                "aria-invalid": Boolean(
                  (_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.password
                ) || void 0,
                "aria-errormessage": ((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password) ? "password-error" : void 0
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 87,
                columnNumber: 25
              }, this),
              ((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-red-500",
                role: "alert",
                id: "password-error",
                children: actionData.fieldErrors.password
              }, void 0, false, {
                fileName: "app/routes/posts/login.tsx",
                lineNumber: 105,
                columnNumber: 29
              }, this) : null
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 85,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            id: "form-error-message",
            children: (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "text-red-500",
              role: "alert",
              children: actionData.formError
            }, void 0, false, {
              fileName: "app/routes/posts/login.tsx",
              lineNumber: 116,
              columnNumber: 29
            }, this) : null
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 114,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "my-4 py-2 px-7 text-purple-500 font-bold border-2 hover:scale-105 border-purple-500 rounded-lg bg-white",
            type: "submit",
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/posts/login.tsx",
            lineNumber: 124,
            columnNumber: 21
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/login.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: "app/routes/posts/login.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/routes/posts/login.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
export {
  LoginRoute as default
};
//# sourceMappingURL=/build/routes/posts/login-ETFNQMH4.js.map
