import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connectToDB } from '../../../utils/database'
import User from '../../../models/user'
import cookie from 'cookie'
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectToDB()
    const { username, email, password } = await request.json()
    console.log({ username, email, password }, "😅")
    return NextResponse.json({ data: 'data' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error', ...error }, { status: 500 })
  }
}
