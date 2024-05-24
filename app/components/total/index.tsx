import { Price } from "../ui/control";
import { type TotalProps } from "./types";

export function Total({productsPrice, delivery, total}: TotalProps) {
  return (
    <div className="flex flex-col gap-1 py-4 *:flex *:items-center *:justify-between">
      <div>
        <span className="text-sm">Total dos itens</span>
        <Price variant="small" price={productsPrice} />
      </div>

      <div>
        <span className="text-sm">Entrega</span>
        <Price variant="small" price={delivery} />
      </div>

      <div className="text-xl font-bold">
        <span>Total</span>
        <Price variant="bigger" price={total} />
      </div>
    </div>
  )
}
