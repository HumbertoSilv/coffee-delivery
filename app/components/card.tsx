import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export default function Card() {
  return (
    <div className="bg-gray-100 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl flex flex-col mt-6 px-3 text-center max-w-64">
      <img 
        className="mt-[-25px] self-center w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
        src="/images/Type=Latte.png"
        alt="Latte"
      />

      <div className="flex items-center self-center gap-1 mt-3">
        <span className="py-1 px-2 rounded-full bg-amber-100 text-yellow-600 uppercase font-extrabold text-[8px] sm:text-min">tradicional</span>
        <span className="py-1 px-2 rounded-full bg-amber-100 text-yellow-600 uppercase font-extrabold text-[8px] sm:text-min">com leite</span>
      </div>

      <h3 className="font-extrabold pt-3 py-3 text-sm sm:text-xl font-title">Expresso Tradicional</h3>

      <span className="text-zinc-500 text-center text-xs sm:text-sm">O tradicional café feito com água quente e grãos moídos</span>

      <div className="flex items-center justify-around py-5">
        <div>
          <span className="text-min px-[2px]">R$</span>
          <span className="font-black text-base sm:text-2xl font-title">19,90</span>
        </div>

        <div className="flex gap-1">
          <div className="flex items-center bg-zinc-200 rounded-md text-xs py-1 px-2 gap-1 text-violet-800 sm:gap-3">
            <button >
              <Minus weight="bold" className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
            </button>
            <span className="text-zinc-700 sm:text-base">2</span>
            <button >
              <Plus weight="bold" className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          <button className="bg-violet-800 text-slate-50 p-1 rounded-md">
            <ShoppingCart weight="fill" className="w-4 sm:w-6" />
          </button>
        </div>

      </div>
    </div>
  )
}