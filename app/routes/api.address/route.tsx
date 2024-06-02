import { json, type ActionFunctionArgs } from "@remix-run/node";

export async function action({ request }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());

  return json({message: "success"})
}
