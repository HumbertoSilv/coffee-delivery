import { ShoppingCart } from "@phosphor-icons/react";
import * as Control from "./ui/control";

interface CardProps {
  id: string
  title: string
  description: string
  tags: Array<string>,
  price: number,
  image: string
}

export default function Card({ id, title, description, price, tags, image } : CardProps) {
  
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
        <Control.Price price={price} />
        <Control.Container>
          <Control.QuantityInput quantity={2} />
          <Control.Button>
            <ShoppingCart weight="fill" className="w-4 sm:w-6 sm:h-5 text-slate-50" />
          </Control.Button>
        </Control.Container>
      </div>
    </div>
  )
}