import { formatPrice } from "../../utils/formatPrice";
import { Price } from "../price";
import { type TotalProps } from "./types";

export function Total({productsPrice, delivery, total}: TotalProps) {
  return (
    <div className="flex flex-col gap-1 py-4 *:flex *:items-center *:justify-between">
      <div>
        <span className="text-sm">Total dos itens</span>
        <Price variant="small">
          {formatPrice(productsPrice)}
        </Price>
      </div>

      <div>
        <span className="text-sm">Entrega</span>
        <Price variant="small">
          {formatPrice(delivery)}
        </Price>
      </div>

      <div className="text-xl font-bold">
        <span>Total</span>
        <Price variant="small">
          {formatPrice(total)}
        </Price>
      </div>
    </div>
  )
}
