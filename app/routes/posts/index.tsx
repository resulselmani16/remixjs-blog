import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

type Post = {
  slug: string;
  title: string;
};

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData();
  return (
    <main>
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Blogs</h1>
      <Link
        to="admin"
        className="float-right m-2 w-40 cursor-pointer rounded bg-red-400 p-2 text-center font-bold text-white"
      >
        Admin
      </Link>
      <ul className="flex flex-col">
        {posts.map((post: Post) => (
          <Link
            className="m-2 w-60 cursor-pointer rounded bg-slate-400 p-2 text-center font-bold text-white"
            to={post.slug}
            key={post.slug}
          >
            <li key={post.slug}>{post.title}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
