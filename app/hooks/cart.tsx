import { useLoaderData } from "@remix-run/react";
import { createContext, useContext, useEffect, useState } from "react";

export interface Product {
  id: string
  title: string
  description: string
  tags: Array<string>,
  price: number,
  imageUrl: string
}

export interface CartProduct {
  product: Product
  quantity: number
}

interface CartContextType {
  cart: CartProduct[]
  totalProductsPrice: () => number
  hasAnyItem: () => boolean
}

const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
  const { cart: initialCart } = useLoaderData<{cart: CartProduct[]}>()
  const [cart, setCart] = useState<CartProduct[]>(initialCart)

  const totalProductsPrice = () => cart.reduce((acc, item) => acc + (item.quantity * item.product.price), 0)

  const hasAnyItem = () => cart.reduce((acc, item) => acc + item.quantity, 0) > 0

  useEffect(() => {
    setCart(initialCart)
  }, [initialCart])

  return (
    <CartContext.Provider value={{ cart, totalProductsPrice, hasAnyItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
