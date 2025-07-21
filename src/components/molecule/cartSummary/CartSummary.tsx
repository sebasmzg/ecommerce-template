'use client'
import React from 'react';
import { Button } from '@/components/atoms';
import styles from './CartSummary.module.scss';

interface CartSummaryProps {
  subtotal: number;
  shipping?: number;
  tax?: number;
  discount?: number;
  total?: number;
  onCheckout: () => void;
  onClearCart: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping = 5.00,
  discount = 0,
  onCheckout,
  onClearCart
}) => {
  const calculatedTax = subtotal * 0.05;
  const finalTotal = subtotal + shipping + calculatedTax - discount;

  return (
    <div className={styles.container}>
      <div className={styles.summaryLines}>
        <div className={styles.summaryLine}>
          <span className={styles.label}>Subtotal:</span>
          <span className={styles.value}>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className={styles.summaryLine}>
          <span className={styles.label}>Shipping:</span>
          <span className={styles.value}>${shipping.toFixed(2)}</span>
        </div>
        
        <div className={styles.summaryLine}>
          <span className={styles.label}>Taxes:</span>
          <span className={styles.value}>${calculatedTax.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className={styles.summaryLine}>
            <span className={styles.label}>Discount:</span>
            <span className={styles.discount}>-${discount.toFixed(2)}</span>
          </div>
        )}
      </div>
      
      <div className={styles.totalLine}>
        <span className={styles.totalLabel}>Total:</span>
        <span className={styles.totalValue}>${finalTotal.toFixed(2)}</span>
      </div>
      
      <div className={styles.actions}>
        <Button
          onClick={onCheckout}
          variant="primary"
          size="large"
          className={styles.checkoutButton}
        >
          Go to Checkout
        </Button>
        
        <Button
          onClick={onClearCart}
          variant="secondary"
          size="medium"
          className={styles.clearButton}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};