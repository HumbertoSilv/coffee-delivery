import { Price } from "./ui/control";

export function Total() {
  return (
    <div className="flex flex-col gap-1 py-4 *:flex *:items-center *:justify-between">
      <div>
        <span className="text-sm">Total de itens</span>
        <Price variant="small" price={29.7} />
      </div>

      <div>
        <span className="text-sm">Entrega</span>
        <Price variant="small" price={3.5} />
      </div>

      <div className="text-xl font-bold">
        <span>Total</span>
        <Price variant="bigger" price={33.2} />
      </div>
    </div>
  )
}