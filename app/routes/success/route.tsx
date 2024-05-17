import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export default function Success() {
  return (
    <div className="py-16">
      <h2 className="font-extrabold text-titleL font-title text-amber-600">Uhu! Pedido confirmado</h2>
      <p className="text-xl">Agora é só aguardar que logo o café chegará até você</p>

      <div className="grid gap-6 pt-6 md:grid-cols-2">
        <div className="border rounded-tl-md rounded-tr-[2.5rem] rounded-br-md rounded-bl-[2.5rem] border-transparent bg-origin-border bg-gradient-to-br from-yellow-300 to-purple-400">
          <div className="flex gap-5 flex-col justify-evenly rounded-tl-md rounded-tr-[2.5rem] rounded-br-md rounded-bl-[2.5rem] bg-main p-5 h-full lg:p-10">
            <div className="flex items-center gap-3">
              <MapPin size={35} weight="fill" className="bg-violet-600 text-white p-2 rounded-full" />
              <div>
                <p>Entrega em <strong>R. João Daniel Martinelli, 102</strong></p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Timer size={35} weight="fill" className="bg-yellow-500 text-white p-2 rounded-full" />
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CurrencyDollar size={35} className="bg-amber-600 text-white p-2 rounded-full" />
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
        </div>

        <img className="justify-self-center h-full" src="/Illustration.svg" alt="Pedido concluído" />
      </div>
    </div>
  );
}
