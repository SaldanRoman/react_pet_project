import React, { useState } from 'react';
import './App.css';
import { ProductCard } from './components/product-card/product-card';
import { Loading } from './components/shared/loading';
import { ErrorMessage } from './components/shared/error';
import { useProducts } from './hooks/product';
import { Modal } from './components/shared/modal';
import { CreateProduct } from './components/product-card/createProduct';
import { Product } from './models/product.model';

function App() {
  const {products, isLoading, error, addProduct} = useProducts();
  const [modal, setModal] = useState(true)

const createHandler = (product:Product) => { 
  addProduct(product) ;
  setModal(false)
}

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {isLoading && <Loading></Loading>}
      {error && <ErrorMessage error={error}></ErrorMessage>}
      {products.map((product, index)=> <ProductCard product={product} key={`id-prod${index}`}></ProductCard>)}

      {modal && <Modal onClose={()=> setModal(false)} title='Create product'> <CreateProduct onCreate={createHandler}></CreateProduct> </Modal>}
    </div>
  );
}

export default App;
