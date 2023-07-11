import { connectToDB } from "@utils/database";
import Product from "@models/product";

export async function GET(req, res) {
  try {
    await connectToDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to Fetch all Products", { status: 500 });
  }

  return new Response(JSON.stringify(products));
}
