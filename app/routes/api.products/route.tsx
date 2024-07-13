import { json, type LoaderFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { getProducts } from "../../../server/application/products/products.server";


export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const filter = url.searchParams.get("tag")

  try {
    const products = await getProducts(filter)

    return json(products, { status: 200 });
  } catch (error) {

    return json(error, { status: 400 });
  }
};
