import { createCookieSessionStorage } from "@remix-run/node"

export type CheckoutSession = {
  checkout: {
    paymentMethod: string,
    address: {
      zipCode: string,
      street: string,
      number: string,
      complement: string,
      neighborhood: string,
      city: string,
      state: string
    }
  }
}

type CheckoutSessionFlash = {
  error: {
    [key: string]: string;
  }
}

export const checkoutSession = createCookieSessionStorage<CheckoutSession, CheckoutSessionFlash>({
  cookie: {
    name: "checkout",
    secure: process.env.NODE_ENV === "production",
    secrets: process.env.SESSION_SECRET.split(","),
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  }
})
