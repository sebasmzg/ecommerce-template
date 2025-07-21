'use client'
import React from 'react';
import { ICartItem } from '@/app/core/application/dto';
import { Button } from '@/components/atoms';
import styles from './CheckoutSummary.module.scss';

interface CheckoutSummaryProps {
  items: ICartItem[];
  subtotal: number;
  shipping?: number;
  discount?: number;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  items,
  subtotal,
  shipping = 5.00,
  discount = 0,
  isCollapsed = false,
  onToggleCollapse
}) => {
  const calculatedTax = subtotal * 0.05;
  const finalTotal = subtotal + shipping + calculatedTax - discount;

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={onToggleCollapse}>
        <h3 className={styles.title}>
          Order Summary ({items.length} item{items.length !== 1 ? 's' : ''})
        </h3>
        {onToggleCollapse && (
          <Button variant="secondary" size="small" className={styles.toggleButton}>
            {isCollapsed ? '▼' : '▲'}
          </Button>
        )}
      </div>

      {!isCollapsed && (
        <div className={styles.content}>
          <div className={styles.itemsList}>
            {items.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemInfo}>
                  <span className={styles.itemName}>{item.product.title}</span>
                  <span className={styles.itemQuantity}>x{item.quantity}</span>
                </div>
                <span className={styles.itemPrice}>${item.subtotal.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className={styles.calculations}>
            <div className={styles.calcLine}>
              <span className={styles.label}>Subtotal:</span>
              <span className={styles.value}>${subtotal.toFixed(2)}</span>
            </div>

            <div className={styles.calcLine}>
              <span className={styles.label}>Shipping:</span>
              <span className={styles.value}>${shipping.toFixed(2)}</span>
            </div>

            <div className={styles.calcLine}>
              <span className={styles.label}>Taxes:</span>
              <span className={styles.value}>${calculatedTax.toFixed(2)}</span>
            </div>

            {discount > 0 && (
              <div className={styles.calcLine}>
                <span className={styles.label}>Discount:</span>
                <span className={styles.discount}>-${discount.toFixed(2)}</span>
              </div>
            )}
          </div>

          <div className={styles.total}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue}>${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};
