import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { defer, json } from "@remix-run/node";
import { Outlet, useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import { useEffect, useState } from "react";
import Carousel from "../../components/ProductsCarousel";
import { type Product } from "../../hooks/cart";
import { api } from "../../utils/api";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Coffee Delivery" }]
}

export async function loader() {
  const response = await api('/products?tag=tradicional')
  const data: Array<Product> = await response.json()

  return defer({ products: data })
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()

  const response = await api(`/products?tag=${formData.get("tag")}`)
  const data: Array<Product> = await response.json()

  return json({ filteredProducts: data })
}

export default function Home() {
  const { products } = useLoaderData<typeof loader>()
  const data = useActionData<typeof action>()
  const submit = useSubmit()

  const [selectedTag, setFilter] = useState<string>("tradicional")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  useEffect(() => {
    if (data) setFilteredProducts(data.filteredProducts)
  }, [data])

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
        <h2 className="font-black text-3xl font-title my-2">Sugeridos</h2>

        {["tradicional", "com leite", "gelado", "especial", "alcoólico"].map(tag => {
          return (
            <button
              key={tag}
              onClick={() => {
                setFilter(tag)
                submit({ tag }, { method: "post" });
              }}
              disabled={selectedTag === tag}
              className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-yellow-600 uppercase font-extrabold text-xs transition duration-200 disabled:bg-amber-200"
            >
              {tag}
            </button>
          )
        })}

        <Carousel products={filteredProducts} />
      </section>


      {/* <section >
        <h2 className="pt-4 font-black text-3xl font-title">Nossos cafés</h2>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-evenly py-7 gap-3">
          <Suspense fallback={<ListSkeleton />}>
            <Await resolve={products}>
              {products.map(product => {
                return (
                  <Card key={product.title} {...product} />
                )
              })}
            </Await>
          </Suspense>
        </div>
      </section> */}

      <Outlet />
    </div>
  )
}

