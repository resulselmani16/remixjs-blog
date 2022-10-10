import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import authenticator from "~/services/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/posts" });
};

export default function AdminIndex() {
  const data = useLoaderData();
  return (
    <div className="mx-2">
      <div>
        <div className="flex w-full justify-between">
          <p className="italic">user - {data?.name}</p>
          <Form method="post">
            <button className="mb-4 rounded bg-red-600 py-2 px-4 font-bold text-white">
              Log out
            </button>
            <br />
            <Link
              className="mt-4 w-40 rounded bg-green-600 p-2 text-white"
              to="/posts/admin/new"
            >
              Create new blog
            </Link>
          </Form>
        </div>
        <br />
      </div>
    </div>
  );
}
