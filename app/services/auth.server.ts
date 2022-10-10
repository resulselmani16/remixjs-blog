import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "~/session.server";
import { FormStrategy } from "remix-auth-form";
import type { User } from "./session.server";

const authenticator = new Authenticator<User | Error | null>(sessionStorage, {
  sessionKey: "sessionKey",
  sessionErrorKey: "sessionErrorKey",
});

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email") as string;
    let password = form.get("password") as string;

    let user = null;

    if (!email || email?.length === 0)
      throw new AuthorizationError("Bad Credentials: Email is required");
    if (typeof email !== "string")
      throw new AuthorizationError("Bad Credentials: Email must be a string");

    if (!password || password?.length === 0)
      throw new AuthorizationError("Bad Credentials: Password is required");
    if (typeof password !== "string")
      throw new AuthorizationError(
        "Bad Credentials: Password must be a string"
      );

    if (email === "admin@gmail.com" && password === "admin-test") {
      user = {
        name: email,
        token: `${password}-${new Date().getTime()}`,
      };

      return await Promise.resolve({ ...user });
    } else {
      throw new AuthorizationError("Bad Credentials");
    }
  })
);

export default authenticator;
