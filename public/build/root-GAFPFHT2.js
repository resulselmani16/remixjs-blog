import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-K7Y2GTZL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:./session.server
var require_session = __commonJS({
  "empty-module:./session.server"(exports, module) {
    module.exports = {};
  }
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZQDQ4HH3.css";

// app/root.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => ({
  charset: "utf-8",
  title: "Remix Blog App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: "h-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-GAFPFHT2.js.map
