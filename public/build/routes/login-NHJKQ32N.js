import {
  require_session
} from "/build/_shared/chunk-GLWAIFE6.js";
import {
  require_auth
} from "/build/_shared/chunk-GWKZO3TS.js";
import {
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
  const loaderData = useLoaderData();
  console.log(loaderData);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
export {
  LoginPage as default
};
//# sourceMappingURL=/build/routes/login-NHJKQ32N.js.map
