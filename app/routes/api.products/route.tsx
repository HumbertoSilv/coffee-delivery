import { json, type LoaderFunction } from "@remix-run/node";
import { getProducts } from "../../../server/application/products/products.server";


export const loader: LoaderFunction = async () => {
  try {
    const products = await getProducts()

    return json(products, { status: 200});
  } catch (error) {

    return json(error, { status: 400});
  }
};
