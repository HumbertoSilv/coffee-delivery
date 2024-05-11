/* eslint-disable max-len */
import { CreditCard, CurrencyDollar, MapPinLine, Money, PixLogo } from "@phosphor-icons/react";

export default function Checkout() {
  return (
    <div className="flex flex-col gap-4 py-12">
      <h2 className="font-black text-xl font-title">Complete seu pedido</h2>

      <div className="bg-stone-100 px-4 py-9 rounded-lg">
        <div className="flex gap-2 pb-5">
          <MapPinLine className="text-amber-600" size={20} />
          <div>
            <h3 className="text-base">Endereço de entrega</h3>
            <p className="text-xs">Informe o endereço onde deseja receber o pedido</p>
          </div>
        </div>
      
        <form className="grid gap-3 [grid-template:'CEP_CEP_._.''Rua_Rua_Rua_Rua''Numero_Complemento_Complemento_Complemento''Bairro_Bairro_Cidade_UF'/_25%_25%_25%_40px] *:p-2 *:rounded-md *:bg-stone-200 *:text-xs *:border *:border-stone-300">
          <input type="text" className="[grid-area:CEP]" placeholder="CEP" />
          <input type="text" className="[grid-area:Rua]" placeholder="Rua" />
          <input type="text" className="[grid-area:Numero]" placeholder="Número" />
          <input type="text" className="[grid-area:Complemento]" placeholder="Complemento" />
          <input type="text" className="[grid-area:Bairro]" placeholder="Bairro" />
          <input type="text" className="[grid-area:Cidade]" placeholder="Cidade" />
          <input type="text" className="[grid-area:UF]" placeholder="UF" />
        </form>
      </div>

      <div className="bg-stone-100 px-4 py-9 rounded-lg">
        <div className="flex gap-2">
          <CurrencyDollar className="text-violet-600" size={25} />
          <div>
            <h3 className="text-base">Pagamento</h3>
            <p className="text-xs">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 *:flex *:bg-stone-200 *:uppercase *:text-xs *:p-3 *:gap-2 *:rounded-md *:w-4/5 *:items-center">
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

      <button className="self-end bg-amber-500 text-slate-50 text-sm font-bold rounded-md py-2 w-1/2 uppercase">
        finalizar pedido
      </button>
    </div>
  );
}
