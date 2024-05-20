import { Trash } from "@phosphor-icons/react";
import * as Control from "./ui/control";

export default function Coffee() {
  return (
    <div className="grid grid-cols-[56px_2fr_1fr] py-6 border-b-zinc-200 border-b-[1px] gap-3">
      <img src="/images/Type=Latte.png" alt="Latte" width="56px" height="56px"/>

      <div>
        <h3 className="pb-2 max-w-36 sm:max-w-none truncate">Expresso Tradicional</h3>

        <Control.Container>
          <Control.QuantityInput quantity={2} />

          <Control.Button variant="tertiary" className="py-2 px-4 text-xs">
            <Trash size={15} className="text-violet-500" />
            <p className="hidden sm:block">remover</p>
          </Control.Button>
        </Control.Container>
      </div>

      <Control.Container className="justify-self-end">
        <Control.Price price={9.90} />
      </Control.Container>
    </div>
  )
}
