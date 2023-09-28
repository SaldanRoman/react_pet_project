import React from 'react';
import './App.css';
import { ProductCard } from './components/product-card/product-card';
import { Loading } from './components/shared/loading';
import { Error } from './components/shared/error';
import { useProducts } from './hooks/product';

function App() {
  const {products, isLoading, error} = useProducts();
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {isLoading && <Loading></Loading>}
      {error && <Error error={error}></Error>}
      {products.map((product, index)=> <ProductCard product={product} key={`id-prod${index}`}></ProductCard>)}
    </div>
  );
}

export default App;
