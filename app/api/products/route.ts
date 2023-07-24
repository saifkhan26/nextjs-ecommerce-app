import { connectToDB } from "../../../utils/database";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Product from "../../../models/product";
import nextConnect, { createEdgeRouter } from "next-connect";
import { getSignature, compareFiles } from '../../../utils/cloudinary'
import multer from 'multer';
import axios from "axios";

// Returns a Multer instance that provides several methods for generating 
// middleware that process files uploaded in multipart/form-data format.

const getObjFromFormdata = (formdata) => {
  let newObject = {}
  for (const key of formdata.keys()) {
    newObject[key] = formdata.get(key)
  }
  return newObject
}

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => { 
      console.log(req, file, cb, "multer Middleware")
      return cb(null, file.originalname) 
    },
  }),
});

export const config = {
  api: {
    bodyParser: false,
  }
}

const router = createEdgeRouter<NextRequest, {params?: unknown}>();

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to Fetch all Products", { status: 500 });
  }
}


router.use(upload.single('image'));

router.post(async (req) => {
  try{
    await connectToDB()
    const formdata = await req.formData()
    console.log("👉 Getting Signature");
    const {timestamp, signature} = await getSignature()
    console.log(timestamp, signature, "😀")
    const image = formdata.get('image')
    const formdataCloud = new FormData()
    formdataCloud.append('file', image)
    formdataCloud.append('api_key', process.env.CLOUDINARY_API_KEY)
    formdataCloud.append('signature', signature)
    formdataCloud.append('timestamp', timestamp)
    formdataCloud.append('folder', 'next')
    const endpoint = process.env.CLOUDINARY_BASE_URL
    console.log("👉 Before Request", "Endpoint 👉", endpoint)
    const response = await axios.post(endpoint, formdataCloud)
    console.log("👉",response)
    await compareFiles({
      version: response?.data?.version,
      signature: response?.data?.signature,
      public_id: response?.data?.public_id 
    })
    const dataObj = getObjFromFormdata(formdata)
    delete dataObj['image']
    const newProduct = new Product({
      ...dataObj,
      image: response.data.secure_url
    })
    const data = await newProduct.save();
    return new NextResponse(data, { status: 200 });
  }
  catch(error){
    return new NextResponse(error, { status: 500 });
  }
})

export async function POST(request: NextRequest, ctx: { params?: unknown }) {
    return router.run(request, ctx)
}

