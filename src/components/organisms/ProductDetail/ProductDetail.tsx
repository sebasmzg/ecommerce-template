'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import { IProduct } from '@/app/core/application/dto';
import styles from './ProductDetail.module.scss';
import { ProductRating } from '../ProductRating/ProductRating';
import { useRouter } from 'next/navigation';
import { Pages } from '@/app/core/application/models/pages.enum';

interface ProductDetailProps {
  product: IProduct;
  isInCart: boolean;
  quantity: number;
  onAddToCart: () => void;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isInCart,
  quantity,
  onAddToCart,
  onIncreaseQuantity,
  onDecreaseQuantity
}) => {
  const router = useRouter();

  const ratingData = {
    averageRating: 4.5,
    totalReviews: 120,
    ratingsBreakdown: {
      5: 48, // 40%
      4: 36, // 30%
      3: 18, // 15%
      2: 12, // 10%
      1: 6   // 5%
    }
  };

  const handleGoToCheckout = () => {
    if (!isInCart) {
      onAddToCart();
    }
    router.push(Pages.checkout);
  };

  const handleGoToCart = () => {
    router.push(Pages.cart);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className={styles.productImage}
              priority
            />
          </div>
          <p className={styles.imageDescription}>
            {product.description}
          </p>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.productInfo}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.category}>{product.category}</p>
            <h2 className={styles.price}>${product.price}</h2>
            
            <div className={styles.purchaseInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🚚</span>
                <span className={styles.infoText}>Envío gratis en compras mayores a $50</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🔄</span>
                <span className={styles.infoText}>Devoluciones hasta 30 días</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🔒</span>
                <span className={styles.infoText}>Compra 100% segura</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⭐</span>
                <span className={styles.infoText}>Garantía de calidad</span>
              </div>
            </div>
          </div>

          <ProductRating
            averageRating={ratingData.averageRating}
            totalReviews={ratingData.totalReviews}
            ratingsBreakdown={ratingData.ratingsBreakdown}
          />

          <div className={styles.imageActions}>
            {isInCart ? (
              <div className={styles.cartActions}>
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
                
                <div className={styles.actionButtons}>
                  <Button
                    onClick={handleGoToCheckout}
                    variant="primary"
                    size="large"
                    className={styles.checkoutButton}
                  >
                    💳 Checkout
                  </Button>
                  
                  <Button
                    onClick={handleGoToCart}
                    variant="secondary"
                    size="large"
                    className={styles.cartButton}
                  >
                    🛒 Cart
                  </Button>
                </div>
              </div>
            ) : (
              <div className={styles.purchaseActions}>
                <Button
                  onClick={onAddToCart}
                  variant="secondary"
                  size="large"
                  className={styles.addToCartButton}
                >
                  🛒 Add to cart
                </Button>
                
                <Button
                  onClick={handleGoToCheckout}
                  variant="primary"
                  size="large"
                  className={styles.buyNowButton}
                >
                  💳 Buy now
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};