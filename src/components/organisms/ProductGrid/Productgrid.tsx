'use client'
import React from 'react';
import { IProduct } from '@/app/core/application/dto';
import styles from './ProductGrid.module.scss';
import { ProductCard } from '@/components/molecule/ProductCard/ProductCard';

interface ProductGridProps {
  products: IProduct[];
  isInCart: (productId: number) => boolean;
  getItemQuantity: (productId: number) => number;
  onAddToCart: (product: IProduct) => void;
  onIncreaseQuantity: (productId: number) => void;
  onDecreaseQuantity: (productId: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isInCart,
  getItemQuantity,
  onAddToCart,
  onIncreaseQuantity,
  onDecreaseQuantity
}) => {
  if (products.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>🔍</div>
        <h3 className={styles.emptyTitle}>No products found</h3>
        <p className={styles.emptyDescription}>
          Try using different search terms
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product: IProduct) => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={isInCart(product.id)}
          quantity={getItemQuantity(product.id)}
          onAddToCart={() => onAddToCart(product)}
          onIncreaseQuantity={() => onIncreaseQuantity(product.id)}
          onDecreaseQuantity={() => onDecreaseQuantity(product.id)}
        />
      ))}
    </div>
  );
};