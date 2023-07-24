'use client'
import { useState } from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import Link from 'next/link'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = async () => {
    console.log('❤')
    const data = {
      email, password
    }
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key] === undefined || data === '') return;
      }
    }
    const response = await axios.post('http://localhost:3000/api/login', data)
    console.log(response, "👉")
  }
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl w-full mx-auto grid gap-4">
        <h1 className='text-6xl text-center mb-4 font-semibold'>Login</h1>
        <Input value={email} setValue={setEmail} placeholder="Enter Email.." label='Email Address' />
        <Input value={password} setValue={setPassword} placeholder="Enter Password..." label="Password" />
        <div> <p>Don't already have an account?{" "}<Link href='/signup' className="text-bright-rose">Sign up</Link> </p></div>
        <Button className="btn-primary py-2 mt-4" onClick={submitHandler}>Login</Button>
      </div>
    </div>
  )
}
