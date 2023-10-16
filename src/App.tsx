import React, { useContext, useState } from 'react';
import './App.css';
import { ProductCard } from './components/product-card/product-card';
import { Loading } from './components/shared/loading';
import { ErrorMessage } from './components/shared/error';
import { useProducts } from './hooks/product';
import { Modal } from './components/shared/modal';
import { CreateProduct } from './components/product-card/createProduct';
import { Product } from './models/product.model';
import { ModalContext } from './components/context/modalContext';

function App() {
  const {products, isLoading, error, addProduct} = useProducts();
const {modal, open, close} = useContext(ModalContext);
const createHandler = (product:Product) => { 
  addProduct(product) ;
 close();
}

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {isLoading && <Loading></Loading>}
      {error && <ErrorMessage error={error}></ErrorMessage>}
      {products.map((product, index)=> <ProductCard product={product} key={`id-prod${index}`}></ProductCard>)}
      <button className='fixed bottom-5 right-5 rounded-full bg-yellow-400 text-white text-2xl px-4 py-2"' onClick={open}>+</button>
      {modal && <Modal onClose={close} title='Create product'> <CreateProduct onCreate={createHandler}></CreateProduct> </Modal>}
    </div>
  );
}

export default App;
