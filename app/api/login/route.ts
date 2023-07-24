import type { NextRequest } from "next/server";
import { connectToDB } from "../../../utils/database";
import { NextResponse } from "next/server";
import User from "../../../models/user";

export async function POST(request: NextRequest) {
  try {
    await connectToDB()
    const body = await request.json()
    const {email, password} = body
    const user = await User.findOne({ email });
    if(!user){
      return NextResponse.json({ error: 'User not found!' }, { status: 404 })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return NextResponse.json({ error: 'Password is Invalid' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error', ...error }, { status: 500 })
  }
}
