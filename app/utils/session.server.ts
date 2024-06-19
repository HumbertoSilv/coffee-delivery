import { createCookieSessionStorage } from "@remix-run/node"

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "cart",
    secure: process.env.NODE_ENV === "production",
    secrets: [process.env.SESSION_SECRET as string],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  }
})

export { commitSession, destroySession, getSession }

