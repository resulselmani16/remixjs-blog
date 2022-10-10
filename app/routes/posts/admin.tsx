import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async () => {
  return json({ posts: await getPosts() });
};

export default function PostAdmin() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div className="mx-auto max-w-4xl">
      <button
        onClick={() => {
          location.href = "/posts";
        }}
        className="m-12 w-40 rounded bg-slate-400 p-2 text-white"
      >
        &lt; Back to blogs
      </button>
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Blog Admin</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {posts.map((post: any) => (
              <Link to={post.slug} key={post.slug}>
                <li
                  key={post.slug}
                  className="m-2 cursor-pointer rounded bg-slate-400 p-2 font-bold text-white"
                >
                  {post.title}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
