/* eslint-disable max-len */
import { CreditCard, CurrencyDollar, MapPinLine, Money, PixLogo } from "@phosphor-icons/react";
import { useNavigate } from "@remix-run/react";
import { Product } from "../../components/product";
import { Total } from "../../components/total";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useCart } from "../../hooks/cart";

export default function Checkout() {
  const { cart, totalProductsPrice, hasAnyItem } = useCart();
  const navigate = useNavigate();

  const productsPrice = totalProductsPrice()
  const delivery = productsPrice * 0.1 // random value

  return (
    <div className="md:grid md:grid-cols-[55%_45%] gap-5">
      <div className="flex flex-col gap-4 py-12">
        <h2 className="font-black text-xl font-title">Complete seu pedido</h2>

        <div className="bg-stone-100 px-4 py-9 rounded-lg">
          <div className="flex gap-2 pb-5">
            <MapPinLine className="text-amber-600" size={20} />
            <div>
              <h3 className="text-base">Endereço de entrega</h3>
              <p className="text-sm">Informe o endereço onde deseja receber o pedido</p>
            </div>
          </div>

          <form 
            id="address"
            className="grid gap-3 [grid-template:'zipCode_zipCode_._.''stt_stt_stt_stt''num_comp_comp_comp''neighborhood_neighborhood_city_code'/_25%_25%_25%_15%]">
            <Input className="[grid-area:zipCode]" placeholder="CEP*" />
            <Input className="[grid-area:stt]" placeholder="Rua*" />
            <Input className="[grid-area:num]" placeholder="Número*" />
            <Input className="[grid-area:comp]" placeholder="Complemento" isOptional />
            <Input className="[grid-area:neighborhood]" placeholder="Bairro*" />
            <Input className="[grid-area:city]" placeholder="Cidade*" />
            <Input className="[grid-area:code]" placeholder="UF*" />
          </form>
        </div>

        <div className="bg-stone-100 px-4 py-9 rounded-lg">
          <div className="flex gap-2">
            <CurrencyDollar className="text-violet-600" size={25} />
            <div>
              <h3 className="text-base">Pagamento</h3>
              <p className="text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div className="flex gap-3 pt-8 *:flex *:bg-stone-200 *:uppercase *:text-xs *:p-3 *:gap-2 *:rounded-md *:w-4/5 *:items-end *:justify-center">
            <div>
              <CreditCard className="text-violet-600" size={18} />
              <span>Cartão</span>
            </div>
            <div>
              <PixLogo className="text-violet-600" size={18} />
              <span>Pix</span>
            </div>
            <div>
              <Money className="text-violet-600" size={18} />
              <span>Dinheiro</span>
            </div>
          </div>
        </div>

        <Button
          disabled={!hasAnyItem()}
          onClick={() => navigate("/success")}
          className="self-end bg-yellow-500 text-slate-50 font-bold py-3 w-1/2 md:hidden">
            finalizar pedido
        </Button>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-col gap-4 py-12 h-full">
          <h2 className="font-black text-xl font-title">Seu pedido</h2>

          <div className="flex flex-col justify-between gap-8 bg-stone-100 rounded-tl-md rounded-br-md rounded-tr-[50px] rounded-bl-[50px] p-8 h-full max-w-[450px]">
            <div className="font-body overflow-auto max-h-80">
              {cart.map((item) => {
                return (
                  <Product key={item.product.id} {...item} />
                )
              })}
            </div>

            <div>
              <Total
                productsPrice={productsPrice}
                delivery={delivery}
                total={productsPrice + delivery}
              />

              <Button
                type="submit"
                form="address"
                disabled={!hasAnyItem()}
                onClick={() => navigate("/success")}
                className="bg-yellow-500 text-slate-50 font-bold py-3 w-full">
                finalizar pedido
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
