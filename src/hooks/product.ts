import { useEffect, useState } from "react";
import { Product } from "../models/product.model";
import { PRODUCTS_URL } from "../constants/api-urls";
import axios, { AxiosError } from "axios";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [error, setError] = useState('');

    async function fetchProducts() {
        try {
        setIsLoading(true);
        const response = await axios.get<Product[]>(PRODUCTS_URL);
        setProducts(response.data);
        setIsLoading(false);
    } catch(e: unknown) {
        setIsLoading(false);
        const error = e as AxiosError;
        setError(error.message);
    }

  }
  useEffect(()=> {fetchProducts()}, []);

  return {products, isLoading, error}
}