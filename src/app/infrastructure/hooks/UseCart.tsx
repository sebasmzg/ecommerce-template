"use client";

import { IProduct } from "@/app/core/application/dto";
import { useCartStore } from "@/store/productStore";

export const useCart = () => {
  const {
    items,
    total,
    totalQuantity,
    isEmpty,
    loading,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItem,
  } = useCartStore();

  const isInCart = (productId: number): boolean => {
    return items.some((item) => item.product.id === productId);
  };

  const getItemQuantity = (productId: number): number => {
    const item = getItem(productId);
    return item ? item.quantity : 0;
  };

  const addToCart = (product: IProduct, quantity = 1) => {
    addItem(product, quantity);
  };

  const removeFromCart = (productId: number) => {
    removeItem(productId);
  };

  const increaseQuantity = (productId: number) => {
    const currentQuantity = getItemQuantity(productId);
    updateQuantity(productId, currentQuantity + 1);
  }

  const decreaseQuantity = (productId: number) => {
    const currentQuantity = getItemQuantity(productId);
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };


  return {
    items,
    total,
    totalQuantity,
    isEmpty,
    loading,
    error,

    isInCart,
    getItemQuantity,
    getItem,

    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  }
};
