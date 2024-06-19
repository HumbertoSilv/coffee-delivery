import { json, type ActionFunctionArgs } from "@remix-run/node";
import { type CartProduct } from "../../hooks/cart";
import { commitSession, getSession } from "../../utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"))
  const formData = await request.formData()
  const cart = session.get("cart") as CartProduct[] || []
  const product = JSON.parse(formData.get("product") as string)
  const action = formData.get("_action")
  
  if (action === "add") {
    const alreadyExists = cart.find(({ product: item }) => item.id === product.id)

    if(!alreadyExists) {
      cart.push({ product, quantity: 1})
      session.set("cart", cart)

      return json({ cart }, { headers: { "Set-Cookie": await commitSession(session) } })
    }

    const updatedCart = cart.map((item) => {
      if (item.product.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }

      return item
    })
    session.set("cart", updatedCart)

    return json({ updatedCart }, { headers: { "Set-Cookie": await commitSession(session) } })
  }

  if (action === "sub") {
    const item = cart.find(({ product: item }) => item.id === product.id)

    if(!item || item.quantity < 2) return json({ headers: { "Set-Cookie": await commitSession(session) }})

    const updatedCart = cart.map((item) => {
      if (item.product.id === product.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        }
      }
  
      return item
    })
    session.set("cart", updatedCart)

    return json({ updatedCart }, { headers: { "Set-Cookie": await commitSession(session) } })
  }

  const updatedCart = cart.filter((item) => item.product.id !== product.id)
  session.set("cart", updatedCart)

  return json({ updatedCart }, { headers: { "Set-Cookie": await commitSession(session) } })

}
