/* eslint-disable max-len */
import { ArrowsClockwise, CreditCard, CurrencyDollar, MapPinLine, Money, PencilSimple, PixLogo } from "@phosphor-icons/react";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Product } from "../../components/product";
import { Total } from "../../components/total";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Select } from "../../components/ui/select";
import { useCart } from "../../hooks/cart";
import { api } from "../../utils/api";
import { states } from "../../utils/statesEnum";

interface ErrorMessage {
  [key: string]: string;
}

const addressSchema = z.object({
  zipCode: z.string().min(3, 'CEP inválido'),
  street: z.string().min(3, 'Rua inválida'),
  number: z.string().min(1, 'Número inválido'),
  complement: z.string(),
  neighborhood: z.string().min(3, 'Bairro inválido'),
  city: z.string().min(3, 'Cidade inválida'),
  state: z.enum(states, {
    message: 'UF inválida'
  }),
})

export default function Checkout() {
  const actionData = useActionData<typeof action>();
  const { state } = useNavigation();
  const navigate = useNavigate();  
  const { cart, totalProductsPrice, hasAnyItem } = useCart();
  
  const [editMode, setEditMode] = useState<boolean>(false)
  const [errorsForm, setErrosForm] = useState<ErrorMessage | null | undefined>(null)
  
  const isSubmitting = state === "submitting"
  const productsPrice = totalProductsPrice()
  const delivery = productsPrice * 0.1 // random value

  const resetForm = () => {
    setEditMode(false)
    setErrosForm(null)
  }
  
  useEffect(() => {
    if (actionData?.success) resetForm()
    
    if (actionData?.message) setErrosForm(actionData.message)
  }, [actionData])
  
  return (
    <div className="md:grid md:grid-cols-[55%_45%] gap-5">
      <div className="flex flex-col gap-4 py-12">
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
            <button className="hover:shadow-base p-2 rounded-full" onClick={() => setEditMode(true)}>
              <PencilSimple size={22} />
            </button>
          </div>

          <Form
            method="POST"
            className="grid gap-3 [grid-template:'zipCode_zipCode_._.''stt_stt_stt_.''num_num_comp_comp''neighborhood_neighborhood_city_state'45px'edit_edit_edit_edit'/_15%_15%_37%_1fr]">
            <Input
              required
              disabled={!editMode || isSubmitting}
              name="zipCode"
              className="[grid-area:zipCode]"
              placeholder="CEP*"
              messageError={errorsForm?.zipCode}
            />
            <Input
              required
              disabled={!editMode || isSubmitting}
              name="street"
              className="[grid-area:stt]"
              placeholder="Rua*"
              messageError={errorsForm?.street}
            />
            <Input
              required
              disabled={!editMode || isSubmitting}
              name="number"
              className="[grid-area:num]"
              placeholder="Número*"
              messageError={errorsForm?.number}
            />
            <Input
              disabled={!editMode || isSubmitting}
              name="complement"
              className="[grid-area:comp]"
              placeholder="Complemento"
              messageError={errorsForm?.complement}
              isOptional />
            <Input
              required
              disabled={!editMode || isSubmitting}
              name="neighborhood"
              className="[grid-area:neighborhood]"
              placeholder="Bairro*"
              messageError={errorsForm?.neighborhood}
            />
            <Input
              required
              disabled={!editMode || isSubmitting}
              name="city"
              className="[grid-area:city]"
              placeholder="Cidade*"
              messageError={errorsForm?.city}
            />
            <Select
              required
              name="state"
              className="grid [grid-area:state]"
              disabled={!editMode || isSubmitting}
              options={states as unknown as string[]}
            />

            {editMode && (
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
              </div>)}
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
          variant="secondary"
          className="self-end py-3 w-1/2 md:hidden">
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
                disabled={!hasAnyItem()}
                onClick={() => navigate("/success")}
                variant="secondary"
                className="py-3 w-full">
                finalizar pedido
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  
  const { error } = addressSchema.safeParse(Object.fromEntries(formData))

  if (error) {
    const errorMessage: ErrorMessage = error.issues.reduce((acc, issue) => {  
      return Object.assign(acc, {[issue.path[0]]: issue.message})
    },{})
    
    return json({ success: false, message: errorMessage })
  }

  await api('/address', {
    method: "POST",
    body: formData
  })  

  return json({ success: true, message: null });
}
