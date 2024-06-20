/* eslint-disable max-len */
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { checkoutSession } from "../../utils/checkout.server";
import { formatPaymentMethod } from "../../utils/formatPaymentMethod";

export const meta: MetaFunction = () => {
  return [{ title: "Success | Coffee Delivery" }]
}

interface CheckoutInfo {
  paymentMethod: string,
  address: {
    zipCode: string,
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    state: string
  }
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await checkoutSession.getSession(request.headers.get("Cookie"))
  const checkoutInfo = session.get("checkout") as CheckoutInfo
  
  return json({ checkoutInfo })
}

export default function Success() {
  const { checkoutInfo: { address, paymentMethod} } = useLoaderData<typeof loader>()

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
                <p>Entrega em <strong>{address.street}, {address.number}</strong></p>
                <p>{address.neighborhood} - {address.city}, {address.state}</p>
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
                <strong>{formatPaymentMethod(paymentMethod)}</strong>
              </div>
            </div>
          </div>
        </div>

        <img className="justify-self-center h-full" src="/Illustration.svg" alt="Pedido concluído" />
      </div>
    </div>
  );
}
