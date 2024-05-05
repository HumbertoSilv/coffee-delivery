import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export default function Card() {
  return (
    <div className="bg-gray-50 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl flex flex-col mt-6 px-3 text-center">
      <img 
        className="mt-[-25px] self-center"
        src="/images/Type=Latte.png"
        alt="Latte"
      />

      <div className="flex items-center self-center gap-1 mt-3">
        <span className="py-1 px-2 rounded-full bg-amber-100 text-yellow-600 uppercase font-medium text-min">tradicional</span>
        <span className="py-1 px-2 rounded-full bg-amber-100 text-yellow-600 uppercase font-medium text-min">com leite</span>
      </div>

      <h3 className="font-bold pt-3 pb-1 text-sm font-title">Expresso Tradicional</h3>

      <span className="text-zinc-500 text-center text-xs">O tradicional café feito com água quente e grãos moídos</span>

      <div className="flex items-center justify-around py-2 ">
        <div>
          <span className="text-min px-[2px]">R$</span>
          <span className="font-bold text-base font-title">9,90</span>
        </div>

        <div className="flex gap-1">
          <div className="flex items-center bg-zinc-200 rounded-md text-xs py-1 px-2 gap-1 text-violet-800">
            <button >
              <Minus size={10} weight="bold" />
            </button>
            <span className="text-zinc-700">2</span>
            <button >
              <Plus size={10} weight="bold" />
            </button>
          </div>

          <button className="bg-violet-800 text-slate-50 p-1 rounded-md">
            <ShoppingCart size={15} weight="fill" />
          </button>
        </div>

      </div>
    </div>
  )
}