import {
  useLoaderData
} from "/build/_shared/chunk-W6NQB7CV.js";
import {
  require_dist
} from "/build/_shared/chunk-Y4RASYPP.js";
import "/build/_shared/chunk-64ZAIXVP.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/admin/index.tsx
var import_node = __toESM(require_dist());
function AdminIndex() {
  const data = useLoaderData();
  if (data.username) {
    return (0, import_node.redirect)("/posts/login");
  } else {
  }
}
export {
  AdminIndex as default
};
//# sourceMappingURL=/build/routes/posts/admin/index-WEK67SQA.js.map
