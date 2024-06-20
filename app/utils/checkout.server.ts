import { createCookieSessionStorage } from "@remix-run/node"

export const checkoutSession = createCookieSessionStorage({
  cookie: {
    name: "checkout",
    secure: process.env.NODE_ENV === "production",
    secrets: process.env.SESSION_SECRET?.split(","),
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  }
})
