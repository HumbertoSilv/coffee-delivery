import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useFetcher } from "@remix-run/react";
import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { Price } from "../price";
import { Button } from "../ui/button";
import * as Control from "../ui/control";
import { type ICardProps } from "./types";

export default function Card({ id, title, description, price, tags, imageUrl } : ICardProps) {
  const [animationTimer, setAnimationTimer] = useState(false)
  const { submit } = useFetcher()

  const handleAddItem = () => {
    submit(
      { product: JSON.stringify({
        id,
        title,
        description,
        price,
        tags,
        imageUrl
      }),
      _action: "add"
      },
      { method: "POST", action: "/api/cart"}
    )

    setAnimationTimer(true)
    setTimeout(() => {
      setAnimationTimer(false)
    }, 1000)
  }

  return (
    // eslint-disable-next-line max-len
    <div className="justify-between bg-gray-100 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl flex flex-col mt-6 px-3 sm:px-7 text-center max-w-64 hover:scale-[1.01] transition-transform duration-400 hover:shadow-base">
      <div className="flex flex-col">
        <img 
          className="mt-[-25px] self-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
          src={imageUrl}
          alt={title}
        />

        <div className="flex items-center self-center gap-1 mt-3">
          {tags.map(tag => {
            return (
              <span key={id} className="py-1 px-2 rounded-full bg-amber-100 text-yellow-600 uppercase font-extrabold text-[8px] sm:text-min">{tag}</span>
            )
          })}
        </div>

        <h3 className="font-extrabold pt-3 text-sm sm:text-xl font-title">{title}</h3>

        <span className="text-zinc-500 text-center text-xs sm:text-sm">{description}</span>
      </div>

      <div className="flex items-center justify-between pt-5 pb-4">
        <Price>
          {formatPrice(price)}
        </Price>
        <Control.Container>
          <Button
            className="text-slate-50"
            disabled={animationTimer}
            onClick={handleAddItem}
          >
            {animationTimer ? (
              <CheckFat
                weight="fill"
                className="w-6 h-5 sm:w-7 sm:h-7 animate-[pulse_0.6s_ease-in-out]"
              />
            ) : (
              <ShoppingCart weight="fill" className="p-[2px] w-6 h-5 sm:w-7 sm:h-7" />

            )}
          </Button>
        </Control.Container>
      </div>
    </div>
  )
}
