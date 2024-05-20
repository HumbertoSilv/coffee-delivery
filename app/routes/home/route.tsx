import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useLoaderData } from "@remix-run/react";
import Card from "../../components/card";
import { api } from "../../utils/api";

interface Product {
  id: string
  title: string
  description: string
  tags: Array<string>,
  price: number,
  image: string
}

export async function loader() {
  const response = await api('/products')  
  const data: Array<Product> = await response.json()

  return data
}

export default function Home() {
  const products = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="lg:flex lg:items-center lg:gap-4">
        <section className="py-12 relative">
          <h1 className="font-black text-5xl font-title">Encontre o café perfeito para qualquer hora do dia</h1>
          <span className="py-4 block text-xl">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <div className="pt-12 *:flex *:items-center *:gap-2 *:py-2 xl:grid xl:grid-cols-[40%_60%] xl:gap-4">
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                className="bg-amber-700 text-slate-50 rounded-full p-1.5"
              />
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Package
                size={32}
                weight="fill"
                className="bg-zinc-500 text-slate-50 rounded-full p-1.5"
              />
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <Timer
                size={32}
                weight="fill"
                className="bg-yellow-500 text-slate-50 rounded-full p-1.5"
              />
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Coffee
                size={32}
                weight="fill"
                className="bg-violet-700 text-slate-50 rounded-full p-1.5"
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </section>

        <img src="/Imagem.svg" alt="" className="hidden lg:block" width="476px" height="360" />
      </div>

      <section >
        <h2 className="font-black text-3xl font-title">Nossos cafés</h2>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-evenly py-6 gap-3">
          {products.map(product => {
            return (
              <Card key={product.id} {...product} />
            )
          })}
        </div>
      </section>

    </div>
  )
}

// TODO: skeleton