import {
  Form,
  Link,
  Links,
  useActionData,
  useLoaderData,
  useParams,
  useTransition,
} from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "~/models/post.server";
import invariant from "tiny-invariant";
import type { Post } from "~/models/post.server";
import authenticator from "~/services/auth.server";
import { useState } from "react";
import { marked } from "marked";
import styles from "./style.css";
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};
type LoaderData = { post?: Post; html?: string };

export const loader: LoaderFunction = async ({ request, params }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  if (params.slug === "new") {
    return json<LoaderData>({});
  }

  const post = await getPost(params.slug || "");
  if (!post) {
    return redirect("/posts/admin");
  }
  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      markdown: null | string;
    }
  | undefined;

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.slug, "slug is required");
  const formData = await request.formData();
  const intent = formData.get("intent");
  if (intent === "delete") {
    await deletePost(params.slug);
    return redirect("/posts/admin");
  } else if (intent === "cancel") {
    return redirect("/posts/admin");
  }

  //returns values one by one
  //to get all values - formData.getAll(); returns all data values
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors: ActionData = {
    title: title ? null : "Title is required",
    slug:
      slug && slug !== "new" ? null : "Slug is required. Cannot set this slug",
    markdown: markdown ? null : "Markdown is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasErrors) {
    return json<ActionData>(errors);
  }

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof markdown === "string", "markdown must be a string");

  if (params.slug === "new") {
    await createPost({ title, slug, markdown });
  } else {
    await updatePost(params.slug, { title, slug, markdown });
  }
  return redirect("/posts/admin");
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function NewPost() {
  const [isEditMode, setIsEditMode] = useState(true);
  const handleCreateNewPost = () => {
    location.href = "/posts/admin/new";
  };
  const { post, html } = useLoaderData() as LoaderData;
  const errors = useActionData() as ActionData;
  const transition = useTransition();
  const isCreating = transition.submission?.formData.get("intent") === "create";
  const isUpdating = transition.submission?.formData.get("intent") === "update";
  const isDeleting = transition.submission?.formData.get("intent") === "delete";
  const isNewPost = !post;
  const urlParams = useParams();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [hasMargin, setHasMargin] = useState(true);
  let isValid = false;

  const handleHover = () => {
    if (title === "" || slug === "" || markdown === "") {
      setHasMargin(!hasMargin);
    }
  };
  if (title !== "" && slug !== "" && markdown !== "") {
    isValid = true;
  }

  return (
    <>
      <Links />
      {isEditMode ? (
        <div className="mx-8">
          <Form method="post" key={post?.slug ?? "new"}>
            <p>
              Tip:{" "}
              <em>
                You've entered Edit mode. If the fields are empty but you want
                to edit any post, just click on any post on the left and you
                will be given access to edit the post.
              </em>{" "}
            </p>
            <br />
            <div>
              {urlParams.slug !== "new" ? (
                <>
                  <button
                    onClick={() => setIsEditMode(false)}
                    className="mb-2 mr-4 h-12 w-40 rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600 focus:bg-yellow-400 disabled:bg-yellow-300"
                  >
                    Quit edit mode
                  </button>
                  <Link
                    className="mt-4 w-40 rounded bg-green-600 p-2 text-white"
                    to="/posts/admin/new"
                  >
                    Create New Blog
                  </Link>
                </>
              ) : null}
            </div>
            <br />
            <div className="flex justify-between">
              <div>
                <label>
                  Post Title:
                  {errors?.title ? (
                    <em className="text-red-600">{errors.title}</em>
                  ) : null}
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    className={inputClassName}
                    defaultValue={post?.slug && post?.title}
                  />
                </label>
              </div>
              <div>
                <label>
                  Post Slug:
                  {errors?.slug ? (
                    <em className="text-red-600">{errors.slug}</em>
                  ) : null}
                  <input
                    onChange={(e) => setSlug(e.target.value)}
                    type="text"
                    name="slug"
                    className={inputClassName}
                    defaultValue={post?.slug && post?.slug}
                  />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="markdown">
                Markdown:
                {errors?.markdown ? (
                  <em className="text-red-600">{errors.markdown}</em>
                ) : null}
              </label>
              <textarea
                onChange={(e) => setMarkdown(e.target.value)}
                id="markdown"
                rows={20}
                name="markdown"
                className={`${inputClassName} font-mono`}
                defaultValue={post?.slug && post?.markdown}
              />
            </div>
            <div className="flex justify-end gap-4">
              {isNewPost ? null : (
                <button
                  type="submit"
                  name="intent"
                  value="delete"
                  className="rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              )}
              <button
                type="submit"
                onMouseOver={() => (isNewPost ? handleHover() : () => {})}
                name="intent"
                value={isNewPost ? "create" : "update"}
                className={`${
                  hasMargin ? "margin-right-none" : "margin-right"
                } ${
                  isValid
                    ? "margin-right-none bg-green-500 hover:bg-green-600 focus:bg-green-400 disabled:bg-green-300"
                    : "bg-blue-500 hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
                } rounded  py-2 px-4 text-white disabled:bg-blue-300`}
                disabled={isCreating || isUpdating}
              >
                {isNewPost
                  ? isCreating
                    ? "Creating..."
                    : "Create Post"
                  : null}
                {isNewPost ? null : isUpdating ? "Updating..." : "Update"}
              </button>
            </div>
          </Form>
        </div>
      ) : (
        <main className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <h1 className="my-6 text-3xl">{post?.title}</h1>
            <div>
              <button
                onClick={() => setIsEditMode(true)}
                className="mb-2 w-40 rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600 focus:bg-yellow-400 disabled:bg-yellow-300"
              >
                Edit mode
              </button>
              <br />
              <button
                onClick={() => handleCreateNewPost()}
                id="submit-btn"
                className={`w-40 rounded bg-green-600 p-2 text-white`}
              >
                Create a new Blog
              </button>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html || "" }} />
        </main>
      )}
    </>
  );
}
