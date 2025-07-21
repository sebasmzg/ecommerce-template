'use client'
import React from 'react';
import { ICartItem } from '@/app/core/application/dto';
import styles from './CartTable.module.scss';
import { CartItemRow } from '@/components/molecule';

interface CartTableProps {
  items: ICartItem[];
  onIncreaseQuantity: (productId: number) => void;
  onDecreaseQuantity: (productId: number) => void;
  onRemoveItem: (productId: number) => void;
}

export const CartTable: React.FC<CartTableProps> = ({
  items,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem
}) => {
  return (
    <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.imageHeader}>Product</th>
              <th className={styles.productHeader}>Name</th>
              <th className={styles.priceHeader}>Price</th>
              <th className={styles.quantityHeader}>Quantity</th>
              <th className={styles.subtotalHeader}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onIncrease={() => onIncreaseQuantity(item.product.id)}
                onDecrease={() => onDecreaseQuantity(item.product.id)}
                onRemove={() => onRemoveItem(item.product.id)}
              />
            ))}
          </tbody>
        </table>
    </div>
  );
};