'use client'
import { useState } from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import axios from 'axios'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const submitHandler = async () => {
    console.log('❤')
    const data = {
      email, password
    }
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if(data[key] === undefined || data === '') return;
      }
    }
    const response = await axios.post('http://localhost:3000/api/login', data)
    console.log(response, "👉")
  }
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl w-full mx-auto grid gap-4">
        <h1 className='text-6xl text-center mb-4 font-semibold'>Login</h1>
        <Input value={username} setValue={setUsername} placeholder="Enter Username.." label='Username'/>
        <Input value={email} setValue={setEmail} placeholder="Enter Email.." label='Email Address'/>
        <Input value={password} setValue={setPassword} placeholder="Enter Password..." label="Password"/>
        <Input value={confirmPassword} setValue={setConfirmPassword} placeholder="Enter Password again..." label="Confirm Password"/>
        <Button className="btn-primary py-2 mt-4" onClick={submitHandler}>Sign Up</Button>
      </div>
    </div>
  )
}
