import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "../../hooks/cart";
import { formatPrice } from "../../utils/formatPrice";
import { Price } from "../price";
import { Button } from "../ui/button";
import * as Control from "../ui/control";
import { type ICardProps } from "./types";

export default function Card({ id, title, description, price, tags, image } : ICardProps) {
  const [quantity, setQuantity] = useState<number>(0)
  const { increaseItem } = useCart();

  const zeroItems = quantity < 1

  const increase = () => {
    setQuantity((state) => state + 1)
  }

  const decrease = () => {
    if (zeroItems) return
    setQuantity((state) => state - 1)
  }
  
  return (
    <div className="justify-between bg-gray-100 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl flex flex-col mt-6 px-3 text-center max-w-64">
      <img 
        className="mt-[-25px] self-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
        src={image}
        alt={title}
      />

      <div className="flex items-center self-center gap-1 mt-3">
        {tags.map(tag => {
          return (
            <span key={id} className="py-1 px-2 rounded-full bg-amber-100 text-yellow-600 uppercase font-extrabold text-[8px] sm:text-min">{tag}</span>
          )
        })}
      </div>

      <h3 className="font-extrabold pt-3 py-3 text-sm sm:text-xl font-title">{title}</h3>

      <span className="text-zinc-500 text-center text-xs sm:text-sm">{description}</span>

      <div className="flex items-center justify-around py-5">
        <Price>
          {formatPrice(price)}
        </Price>
        <Control.Container>
          <Control.QuantityInput
            quantity={quantity}
            increaseItem={increase}
            decreaseItem={decrease} />

          <Button
            disabled={zeroItems}
            onClick={() => increaseItem({id, title, description, price, tags, image}, quantity)}
          >
            <ShoppingCart weight="fill" className="w-4 sm:w-6 sm:h-5 text-slate-50" />
          </Button>
        </Control.Container>
      </div>
    </div>
  )
}
