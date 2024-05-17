/* eslint-disable max-len */
import { CreditCard, CurrencyDollar, MapPinLine, Money, PixLogo } from "@phosphor-icons/react";
import Coffee from "../../components/coffee";

export default function Checkout() {
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
        
          <form className="grid gap-3 [grid-template:'zipCode_zipCode_._.''street_street_street_street''number_complement_complement_complement''neighborhood_neighborhood_city_code'/_25%_25%_25%_45px] *:p-3 *:rounded-md *:bg-stone-200/30 *:text-sm *:border *:border-stone-300">
            <input type="text" className="[grid-area:zipCode]" placeholder="CEP" />
            <input type="text" className="[grid-area:street]" placeholder="Rua" />
            <input type="text" className="[grid-area:number]" placeholder="Número" />
            <input type="text" className="[grid-area:complement]" placeholder="Complemento" />
            <input type="text" className="[grid-area:neighborhood]" placeholder="Bairro" />
            <input type="text" className="[grid-area:city]" placeholder="Cidade" />
            <input type="text" className="[grid-area:code]" placeholder="UF" />
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

        <button className="self-end bg-amber-500 text-slate-50 text-sm font-bold rounded-md py-2 w-1/2 uppercase md:hidden">
          finalizar pedido
        </button>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-col gap-4 py-12 h-full">
          <h2 className="font-black text-xl font-title">Seu pedido</h2>

          <div className="flex flex-col justify-between gap-8 bg-stone-100 rounded-tl-md rounded-br-md rounded-tr-[50px] rounded-bl-[50px] p-8 h-full">
            <div className="font-body overflow-auto max-h-80">
              <Coffee />
            </div>

            <div>
              <div className="flex flex-col gap-1 py-4 *:flex *:items-center *:justify-between">
                <div>
                  <span className="text-sm">Total de itens</span>
                  <span className="text-base">R$ 29,70</span>
                </div>

                <div>
                  <span className="text-sm">Entrega</span>
                  <span className="text-base">R$ 3,50</span>
                </div>

                <div className="text-xl font-bold">
                  <span>Total</span>
                  <span>R$ 33,20</span>
                </div>
              </div>

              <button className="bg-yellow-500 text-slate-50 text-sm font-black rounded-md py-3.5 mb-2 w-full uppercase">
                finalizar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
