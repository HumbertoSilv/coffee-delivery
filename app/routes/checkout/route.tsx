/* eslint-disable max-len */
import { ArrowLeft, ArrowsClockwise, CreditCard, CurrencyDollar, ListMagnifyingGlass, MapPinLine, Money, PixLogo } from "@phosphor-icons/react";
import { json, redirect, type ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, Link, useActionData, useFetcher, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { z } from "zod";
import { Product } from "../../components/product";
import { Total } from "../../components/total";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Radio } from "../../components/ui/radio";
import { Select } from "../../components/ui/select";
import { useCart } from "../../hooks/cart";
import { cartSession } from "../../utils/cart.server";
import { checkoutSession } from "../../utils/checkout.server";
import { paymentMethod } from "../../utils/paymentMethodEnum";
import { states } from "../../utils/statesEnum";

export const meta: MetaFunction = () => {
  return [{ title: "Checkout | Coffee Delivery" }]
}

interface ErrorMessage {
  [key: string]: string;
}

const checkoutSchema = z.object({
  products: z.array(z.object({
    id: z.string(),
    price: z.number(),
    quantity: z.number(),
  })),
  paymentMethod: z.enum(["cash", "pix", "card"], {
    message: 'Informe um método de pagamento'
  }),
  delivery: z.number(),
  address: z.object({
    zipCode: z.string().min(3, 'CEP inválido'),
    street: z.string().min(3, 'Rua inválida'),
    number: z.string().min(1, 'Número inválido'),
    complement: z.string(),
    neighborhood: z.string().min(3, 'Bairro inválido'),
    city: z.string().min(3, 'Cidade inválida'),
    state: z.enum(states, {
      message: 'UF inválida'
    }),
  }),
})

export default function Checkout() {
  const actionData = useActionData<typeof action>();
  const { submit } = useFetcher()
  const { state } = useNavigation();
  const { cart, totalProductsPrice, hasAnyItem } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('')
  
  const isSubmitting = state === "submitting"
  const productsPrice = totalProductsPrice()
  const delivery = productsPrice * 0.1 // random value

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget)
    const products = cart.map(({ product, quantity}) => ({ id: product.id, price: product.price, quantity}))

    data.append("products", JSON.stringify(products))
    data.append("delivery", String(delivery))
    
    submit(data, { method: "post" });
  };
  
  return (
    <>
      <Link to="/home">
        <ArrowLeft size={32} />
      </Link>
      <div className="md:grid md:grid-cols-[55%_45%] gap-5">
        <div className="flex flex-col gap-4 py-10">
          <h2 className="font-black text-xl font-title">Complete seu pedido</h2>

          <div className="bg-stone-100 px-4 pt-9 pb-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div className="flex gap-2 pb-5">
                <MapPinLine className="text-amber-600" size={20} />
                <div>
                  <h3 className="text-base">Endereço de entrega</h3>
                  <p className="text-sm">Informe o endereço onde deseja receber o pedido</p>
                </div>
              </div>
              {/* <button className="hover:shadow-base p-2 rounded-full" onClick={() => setEditMode(true)}>
              <PencilSimple size={22} />
            </button> */}
            </div>

            <Form
              id="checkoutForm"
              onSubmit={handleSubmit}
              className="grid gap-3 [grid-template:'zipCode_zipCode_._.''stt_stt_stt_.''num_num_comp_comp''neighborhood_neighborhood_city_state'45px'edit_edit_edit_edit'/_15%_15%_37%_1fr]">
              <Input
                required
                disabled={isSubmitting}
                name="zipCode"
                className="[grid-area:zipCode]"
                placeholder="CEP*"
                messageError={actionData?.message?.zipCode}
              />
              <Input
                required
                disabled={isSubmitting}
                name="street"
                className="[grid-area:stt]"
                placeholder="Rua*"
                messageError={actionData?.message?.street}
              />
              <Input
                required
                disabled={isSubmitting}
                name="number"
                className="[grid-area:num]"
                placeholder="Número*"
                messageError={actionData?.message?.number}
              />
              <Input
                disabled={isSubmitting}
                name="complement"
                className="[grid-area:comp]"
                placeholder="Complemento"
                messageError={actionData?.message?.complement}
                isOptional />
              <Input
                required
                disabled={isSubmitting}
                name="neighborhood"
                className="[grid-area:neighborhood]"
                placeholder="Bairro*"
                messageError={actionData?.message?.neighborhood}
              />
              <Input
                required
                disabled={isSubmitting}
                name="city"
                className="[grid-area:city]"
                placeholder="Cidade*"
                messageError={actionData?.message?.city}
              />
              <Select
                required
                name="state"
                className="grid [grid-area:state]"
                disabled={isSubmitting}
                options={states as unknown as string[]}
              />

              {/* {editMode && (
              <div className="[grid-area:edit] flex justify-end relative gap-4 mt-5 animate-[slideIn_0.6s]">
                <Button
                  disabled={isSubmitting}
                  onClick={resetForm}
                  variant="tertiary"
                  className="p-2"
                >
                cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="p-2 min-w-16"
                  variant="secondary"
                >
                  {isSubmitting ? (<ArrowsClockwise className="animate-spin" size={21} />) : "salvar" }
                </Button>
              </div>)} */}
            </Form>
          </div>

          <div className="bg-stone-100 px-4 py-9 rounded-lg">
            <div className="flex gap-2">
              <CurrencyDollar className="text-violet-600" size={25} />
              <div>
                <h3 className="text-base">Pagamento</h3>
                <p className="text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-8 transition *:col-span-1 *:font-normal *:text-xs *:p-3 *:items-end">
              <Radio
                value="card"
                form="checkoutForm"
                name="paymentMethod"
                isSelected={selectedPaymentMethod === paymentMethod.CARD}
                onClick={() => setSelectedPaymentMethod(paymentMethod.CARD)}
              >
                <CreditCard className="text-violet-600" size={18} />
                <span>Cartão</span>
              </Radio>

              <Radio
                value="pix"
                form="checkoutForm"
                name="paymentMethod"
                isSelected={selectedPaymentMethod === paymentMethod.PIX}
                onClick={() => setSelectedPaymentMethod(paymentMethod.PIX)}
              >
                <PixLogo className="text-violet-600" size={18} />
                <span>Pix</span>
              </Radio>

              <Radio
                value="cash"
                form="checkoutForm"
                name="paymentMethod"
                isSelected={selectedPaymentMethod === paymentMethod.CASH}
                onClick={() => setSelectedPaymentMethod(paymentMethod.CASH)}
              >
                <Money className="text-violet-600" size={18} />
                <span>Dinheiro</span>
              </Radio>
            </div>
            {actionData?.message?.paymentMethod && (
              <span className="text-sm text-red-400 p-1" role="alert">
                {actionData?.message?.paymentMethod}
              </span>
            )}
          </div>

          <Button
            form="checkoutForm"
            type="submit"
            disabled={!hasAnyItem() || isSubmitting}
            variant="secondary"
            className="self-end py-3 w-1/2 md:hidden"
          >
            {isSubmitting ? (<ArrowsClockwise className="animate-spin" size={21} />) : "finalizar pedido" }
          </Button>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-col gap-4 py-12 h-full">
            <h2 className="font-black text-xl font-title">Seu pedido</h2>

            <div className="flex flex-col justify-between gap-8 bg-stone-100 rounded-tl-md rounded-br-md rounded-tr-[50px] rounded-bl-[50px] p-8 h-full max-w-[450px]">
              <div className="flex flex-col items-center font-body overflow-auto max-h-72">
                {!hasAnyItem() &&
              (<div className="pt-10">
                <ListMagnifyingGlass size={152} color="#d4cece" weight="bold" />
                <span className="text-zinc-500 font-semibold">Seu carrinho está vazio</span>
              </div>)}
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
                  form="checkoutForm"
                  type="submit"
                  disabled={!hasAnyItem() || isSubmitting}
                  variant="secondary"
                  className="py-3 w-full"
                >
                  {isSubmitting ? (<ArrowsClockwise className="animate-spin" size={21} />) : "finalizar pedido" }
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const checkoutStorage = await checkoutSession.getSession(request.headers.get("Cookie"))
  const cartStorage = await cartSession.getSession(request.headers.get("Cookie"))
  const formData = await request.formData()

  const payloadParsed = {
    products: JSON.parse(formData.get("products") as string),
    paymentMethod: formData.get("paymentMethod"),
    delivery: Number(formData.get("delivery")),
    address: {
      zipCode: formData.get("zipCode"),
      street: formData.get("street"),
      number: formData.get("number"),
      complement: formData.get("complement"),
      neighborhood: formData.get("neighborhood"),
      city: formData.get("city"),
      state: formData.get("state"),
    }
  }
  
  const { data, error } = checkoutSchema.safeParse(payloadParsed)

  if (error) {
    const errorMessage: ErrorMessage = error.issues.reduce((acc, issue) => {
      return Object.assign(acc, {[issue.path[issue.path.length -1]]: issue.message})
    },{})
    
    return json({ success: false, message: errorMessage })
  }

  const headers = new Headers()
  checkoutStorage.set("checkout", {
    paymentMethod: data.paymentMethod,
    address: data.address
  })

  headers.append('Set-Cookie', await cartSession.destroySession(cartStorage));
  headers.append('Set-Cookie', await checkoutSession.commitSession(checkoutStorage));
  
  return redirect("/success", { headers })
}
