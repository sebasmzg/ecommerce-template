'use client'

import { ProductsServices } from '@/app/infrastructure/services/products.service';
import { useState, useEffect, useCallback } from 'react';
import { IProduct } from '../../core/application/dto';

interface UseProductByIdState {
  product: IProduct | null;
  loading: boolean;
  error: string | null;
}

export const useProductById = (id: string | number) => {
  const [state, setState] = useState<UseProductByIdState>({
    product: null,
    loading: true,
    error: null
  });

  const fetchProduct = useCallback(async () => {
    if (!id) {
      setState({ product: null, loading: false, error: 'ID requerido' });
      return;
    }

    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      const productsService = new ProductsServices();
      const product = await productsService.getProductById(Number(id));
      setState({ product, loading: false, error: null });
    } catch (error) {
      console.error("Error fetching product:", error);
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Error al cargar el producto'
      }));
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const refetch = useCallback(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    ...state,
    refetch
  };
};