import { createContext, useContext, useState } from "react";

export interface Product {
  id: string
  title: string
  description: string
  tags: Array<string>,
  price: number,
  image: string
}

interface CartProduct {
  product: Product
  quantity: number
}

interface CartContextType {
  cart: CartProduct[]
  increaseItem: (product: Product, quantity: number) => void
  decreaseItem: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  totalPrice: () => number
  hasAnyItem: () => boolean
}

const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
  const [cart, setCart] = useState<CartProduct[]>([])

  const increaseItem = (product: Product, quantity: number) => {
    const alreadyExists = cart.find(({ product: item }) => item.id === product.id)

    if(!alreadyExists) {
      setCart((state) => [...state, { product, quantity}])

      return
    }

    setCart((state) => state.map((item) => {
      if (item.product.id === product.id) {
        return {
          product: item.product,
          quantity: item.quantity + quantity,
        }
      }

      return item
    }))
  }

  const decreaseItem = (product: Product, quantity: number) => {
    const item = cart.find(({ product: item }) => item.id === product.id)

    if(!item || item.quantity < 2) return

    setCart((state) => state.map((item) => {
      if (item.product.id === product.id) {
        return {
          product: item.product,
          quantity: item.quantity - quantity,
        }
      }

      return item
    }))
  }

  const removeFromCart = (productId: string) => {
    setCart((state) => state.filter((item) => item.product.id !== productId))
  }

  const totalPrice = () => cart.reduce((acc, item) => acc + (item.quantity * item.product.price), 0)

  const hasAnyItem = () => cart.reduce((acc, item) => acc + item.quantity, 0) > 0

  return (
    <CartContext.Provider value={{ cart, increaseItem, decreaseItem, removeFromCart, totalPrice, hasAnyItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
