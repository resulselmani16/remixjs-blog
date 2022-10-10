import { json } from "@remix-run/node";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import authenticator from "~/services/auth.server";
import { sessionStorage } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/posts/admin",
  });

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const error = session.get("sessionErrorKey");
  return json<any>({ error });
};

export const action: ActionFunction = async ({ request, context }) => {
  const resp = await authenticator.authenticate("form", request, {
    successRedirect: "/posts/admin",
    failureRedirect: "/login",
    throwOnError: true,
    context,
  });
  return resp;
};

export default function LoginPage() {
  const loaderData = useLoaderData();
  return (
    <>
      <button className="m-12 w-40 rounded bg-slate-400 p-2 text-white">
        <Link to={"/posts"}>&lt; Back to blogs</Link>
      </button>
      <div className="flex h-80 w-full flex-col items-center justify-center">
        <h1>Log in to continue</h1>
        <Form method="post">
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="my-4 w-80 rounded border border-slate-400 p-2"
          />
          <br />
          <input
            className="my-4 w-80 rounded border border-slate-400 p-2"
            type="password"
            name="password"
            placeholder="password"
            autoComplete="current-password"
          />
          <br />
          <button className="w-80 rounded bg-green-600 p-2 font-bold text-white">
            Sign In
          </button>
        </Form>
        <div>
          {loaderData?.error ? (
            <p>ERROR: {loaderData?.error?.message}</p>
          ) : null}
        </div>
      </div>
    </>
  );
}
