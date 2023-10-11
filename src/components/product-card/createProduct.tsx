import {Product} from '../../models/product.model'
import axios from 'axios'
import {ErrorMessage} from '../shared/error'
import React, { useState } from 'react'

const productData: Product =  {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}

interface CreateProductProps {
  onCreate: (product: Product) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [inputValue, setValue] = useState('')
  const [error, setError] = useState('')

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (inputValue.trim().length === 0) {
      setError('Please enter valid title.')
      return
    }

    productData.title = inputValue
    const response = await axios.post<Product>('https://fakestoreapi.com/products', productData)

    onCreate(response.data)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={inputValue}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}