import "/build/_shared/chunk-52C552IL.js";
import {
  require_post
} from "/build/_shared/chunk-ZR76UYVX.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-K7Y2GTZL.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/posts/$slug.tsx
var import_post = __toESM(require_post());
var import_post2 = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostSlug() {
  const { post, html, posts } = useLoaderData();
  const getNextItem = (slug) => {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].slug === slug) {
        if (i == posts.length - 1) {
          return posts[0];
        } else {
          return posts[i + 1];
        }
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "/posts",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "m-12 w-40 rounded bg-slate-400 p-2 text-white",
          children: "< Back to blogs"
        }, void 0, false, {
          fileName: "app/routes/posts/$slug.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "mx-auto max-w-4xl",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "my-6 border-b-2 text-center text-3xl",
            children: post.title
          }, void 0, false, {
            fileName: "app/routes/posts/$slug.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            dangerouslySetInnerHTML: { __html: html }
          }, void 0, false, {
            fileName: "app/routes/posts/$slug.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            className: "rounded bg-yellow-500 py-2 px-4 text-white hover:bg-yellow-600 focus:bg-yellow-400 disabled:bg-yellow-300",
            to: `/posts/${getNextItem(post.slug).slug}`,
            children: [
              "Next Blog: ",
              getNextItem(post.slug).title
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/$slug.tsx",
            lineNumber: 52,
            columnNumber: 7
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/$slug.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/$slug.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-XWPHJCWW.js.map
