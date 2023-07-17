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
}

export async function POST(req, res) {
  try {
    await connectToDB()
    const uploadImage = upload.single('image')

    await new Promise((resolve, reject) => {
      uploadImage(req, res, (err) => {
        if(err) {
          return reject(err);
        }
        resolve();
      })
    })

    const newProduct = new Product({
      ...req.body,
      image: req.file.path
    })

    const data = await newProduct.save();

    return res.status(201).json({success: true, message: 'Product Created Successfully', data: data})
    
  } catch (error) {
     return res.status(500).json({ success: false, error: 'Failed to create product' });
  }
}
