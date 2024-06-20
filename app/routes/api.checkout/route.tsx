import { json, type ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  // console.log(await request.json());

  return json({message: "success"})
}
