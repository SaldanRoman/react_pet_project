import React, { useEffect, useState } from 'react';
import './App.css';
import { ProductCard } from './components/product-card/product-card';
import { Product } from './models/product.model';
import axios from 'axios';
import { PRODUCTS_URL } from './constants/api-urls';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const response = await axios.get<Product[]>(PRODUCTS_URL);
    setProducts(response.data);
  }

  useEffect(()=> {fetchProducts()}, [])
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {products.map((product, index)=> <ProductCard product={product} key={`id-prod${index}`}></ProductCard>)}
    </div>
  );
}

export default App;
