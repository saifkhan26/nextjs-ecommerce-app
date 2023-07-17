'use client'
import { useState } from 'react'
import { Input } from '@components/Input'
import { Textarea } from '@components/TextArea'
import { Dropdown } from '@components/Dropdown'
import { ImageUpload } from '@components/ImageUpload'
import { Button } from '@components/Button'
import axios from 'axios'

const CreateProduct = () => {

  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')

  const categoryOptions = [
    { value: 'uncategorizied', label: 'Uncategorizied' }
  ]

  const submitHandler = async () => {
    const body = {
      name,
      brand,
      price,
      description,
      category: category?.value,
      image
    }
    console.log(body)
    for (const key in body) {
      if (body[key] === undefined || body[key] === '') {
        console.log(key + ' not present');
        return
      }
    }
    const formData = new FormData()
    for (const key in body) {
      if (body[key] !== '' || body[key] !== undefined) {
        formData.append(key, body[key])
      }
    }
    const response = await axios.post('http://localhost:3000/api/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if(response !== undefined){
      console.log(response)
    }
  }

  return (
    <main className='py-8 md:px-24 px-4'>
      <div className="mb-4">
        <h1 className='font-medium text-4xl'>Add new Product</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input value={name} setValue={setName} placeholder="Enter Product Name" className="" label="Product Name" labelStyles="" />
        <Input value={brand} setValue={setBrand} placeholder="Enter Brand Name" className="" label="Brand Name" labelStyles="" />
        <Input value={price} setValue={setPrice} placeholder="Enter Price" className="" label="Product Price" labelStyles="" />
        <Input value={price} setValue={setPrice} placeholder="Enter Price" className="" label="Product Price" labelStyles="" />
        <Dropdown value={category} onSelect={setCategory} options={categoryOptions} containerStyles="col-span-2" label="Product Category" />
        <Textarea value={description} setValue={setDescription} placeholder="Enter Description" containerStyles="col-span-2" label="Product Description" labelStyles="" />
        <ImageUpload className="col-span-2" value={image} setValue={setImage} label="Product Image"/>
        <Button className="w-fit text-white" onClick={submitHandler}>Add Product</Button>
      </div>
    </main>
  )
}
export default CreateProduct
