import { Trash } from "@phosphor-icons/react";
import { useFetcher } from "@remix-run/react";
import { type CartProduct } from "../../hooks/cart";
import { formatPrice } from "../../utils/formatPrice";
import { Price } from "../price";
import { Button } from "../ui/button";
import * as Control from "../ui/control";

export function Product({product, quantity}: CartProduct) {
  const { submit } = useFetcher()

  const handleItem = (operation: string) => {
    submit(
      { product: JSON.stringify(product), _action: operation},
      { method: "POST", action: "/api/cart"}
    )
  }

  return (
    <div className="grid grid-cols-[56px_2fr_1fr] py-6 border-b-zinc-200 border-b-[1px] gap-3">
      <img src={product.imageUrl} alt={product.title} width="56px" height="56px"/>

      <div>
        <h3 className="pb-2 max-w-36 sm:max-w-none truncate">{product.title}</h3>

        <Control.Container>
          <Control.QuantityInput
            quantity={quantity}
            increaseItem={() => handleItem("add")}
            decreaseItem={() => handleItem("sub")}
          />

          <Button
            variant="tertiary"
            className="py-2 px-4 text-xs"
            onClick={() => handleItem("del")}
          >
            <Trash size={15} className="text-violet-500" />
            <p className="hidden sm:block">remover</p>
          </Button>
        </Control.Container>
      </div>

      <Control.Container className="justify-self-end">
        <Price>
          {formatPrice(product.price)}
        </Price>
      </Control.Container>
    </div>
  )
}
