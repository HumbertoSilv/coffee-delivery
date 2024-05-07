import { Minus, Plus, Trash } from "@phosphor-icons/react";

export default function Coffee() {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] pb-2 pt-6 border-b-zinc-200 border-b-[1px] gap-1">
      <img src="/images/Type=Latte.png" alt="Latte" className="grid justify-self-start w-14 h-14"/>

      <div>
        <h3 className="text-sm pb-2">Expresso Tradicional</h3>
        <div className="grid grid-cols-[2fr_1fr] gap-4">
          <div className="flex justify-evenly bg-zinc-200 rounded-md text-xs py-1.5 px-2 gap-1 text-violet-500">
            <button >
              <Minus size={10} />
            </button>
            <span className="text-zinc-700">2</span>
            <button >
              <Plus size={10} />
            </button>
          </div>

          <button className="flex justify-center bg-zinc-200 rounded-md py-1.5 px-4">
            <Trash size={15} className="text-violet-500" />
          </button>
        </div>
      </div>

      <div className="grid justify-self-end font-bold text-sm font-title text-zinc-600">
        <span>R$9,90</span>
      </div>
    </div>
  )
}
