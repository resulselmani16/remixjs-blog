import { redirect } from "@remix-run/server-runtime";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { getPosts } from "~/models/post.server";
import type { Post } from "~/models/post.server";
import { deletePost, getPost } from "~/models/post.server";
import { marked } from "marked";

type LoaderData = { post: Post; html: string; posts: Post[] };
export const loader: LoaderFunction = async ({ params }) => {
  const post = await getPost(params.slug || "");
  const posts = await getPosts();
  if (post?.slug === "new") {
    deletePost("new");
  }
  if (!post) {
    return redirect("/posts");
  }
  invariant(params.slug, `params.slug is required`);
  invariant(post, `Post not found: ${params.slug}`);
  const html = marked(post.markdown);
  return json<LoaderData>({ post, html, posts });
};

export default function PostSlug() {
  const { post, html, posts } = useLoaderData();
  const getNextItem = (slug: string) => {
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

  return (
    <>
      <Link to={"/posts"}>
        <button className="m-12 w-40 rounded bg-slate-400 p-2 text-white">
          &lt; Back to blogs
        </button>
      </Link>
      <main className="mx-auto max-w-4xl">
        <div className="my-6 flex w-full items-end justify-between border-b-2 pb-5">
          <h1 className="text-center text-3xl">{post.title}</h1>
          <div className="mt-4">
            <p>Discover next:</p>
            <Link
              className="rounded bg-yellow-500 py-2 px-4 text-white hover:bg-yellow-600 disabled:bg-yellow-300"
              to={`/posts/${getNextItem(post.slug).slug}`}
            >
              {getNextItem(post.slug).title}
            </Link>
          </div>{" "}
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}
