'use client'

import { ProductsServices } from '@/app/infrastructure/services/products.service';
import { useState, useEffect } from 'react';
import { IProduct } from '../../core/application/dto';


interface UseProductsState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

export const useProducts = () => {
  const [state, setState] = useState<UseProductsState>({
    products: [],
    loading: true,
    error: null
  });

  const fetchProducts = async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const productsService = new ProductsServices();
      const products = await productsService.getAllProducts();
      setState({ products, loading: false, error: null });
    } catch (error) {
      console.error("Error fetching products:", error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Error al cargar productos'
      }));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refetch = () => {
    fetchProducts();
  };

  return {
    ...state,
    refetch
  };
};

