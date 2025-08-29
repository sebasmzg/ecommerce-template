'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/atoms';
import { IProduct } from '@/app/core/application/dto';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: IProduct;
  isInCart?: boolean;
  quantity?: number;
  onAddToCart?: () => void;
  onIncreaseQuantity?: () => void;
  onDecreaseQuantity?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInCart,
  quantity,
  onAddToCart,
  onIncreaseQuantity,
  onDecreaseQuantity
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          fill
          src={product.image} 
          alt={`${product.title} product image`}
          className={styles.productImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.category}>{product.category}</span>
        </div>
        
        <div className={styles.actions}>
          {isInCart ? (
            <div className={styles.quantityControls}>
              <Button
                onClick={onDecreaseQuantity}
                variant="secondary"
                size="small"
                className={styles.quantityButton}
              >
                −
              </Button>
              <span className={styles.quantity}>Quantity: {quantity}</span>
              <Button
                onClick={onIncreaseQuantity}
                variant="secondary"
                size="small"
                className={styles.quantityButton}
              >
                +
              </Button>
            </div>
          ) : (
            <Button
              onClick={onAddToCart}
              variant="primary"
              className={styles.addToCartButton}
            >
              Add to cart
            </Button>
          )}
          
          <Link href={`/products/${product.id}`}>
            <Button 
              variant="secondary" 
              size="small"
              className={styles.detailsButton}
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};