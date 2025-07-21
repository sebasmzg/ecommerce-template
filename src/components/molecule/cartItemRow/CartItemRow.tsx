'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import { ICartItem } from '@/app/core/application/dto';
import styles from './CartItemRow.module.scss';

interface CartItemRowProps {
  item: ICartItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  return (
    <tr className={styles.row}>
      <td className={styles.imageCell}>
        <div className={styles.imageContainer}>
          <Image
            src={item.product.image}
            alt={item.product.title}
            width={40}
            height={40}
            className={styles.productImage}
          />
        </div>
      </td>
      
      <td className={styles.productCell}>
        <span className={styles.productTitle}>{item.product.title}</span>
      </td>
      
      <td className={styles.priceCell}>
        <span className={styles.unitPrice}>Price by unit: ${item.product.price}</span>
      </td>
      
      <td className={styles.quantityCell}>
        <div className={styles.quantityControls}>
          <Button
            onClick={onDecrease}
            variant="secondary"
            size="small"
            className={styles.quantityButton}
          >
            −
          </Button>
          <span className={styles.quantityValue}>{item.quantity}</span>
          <Button
            onClick={onIncrease}
            variant="secondary"
            size="small"
            className={styles.quantityButton}
          >
            +
          </Button>
        </div>
      </td>
      
      <td className={styles.subtotalCell}>
        <span className={styles.subtotal}>${item.subtotal.toFixed(2)}</span>
      </td>
      
      <td className={styles.actionCell}>
        <Button
          onClick={onRemove}
          variant="danger"
          size="small"
          className={styles.removeButton}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
};