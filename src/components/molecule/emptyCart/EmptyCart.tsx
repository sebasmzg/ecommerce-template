'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms';
import { Pages } from '@/app/core/application/models/pages.enum';
import styles from './EmptyCart.module.scss';

export const EmptyCart: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>🛒</div>
        <h2 className={styles.title}>Your cart is empty</h2>
        <p className={styles.description}>
          You dont have products in cart. ¡Explore our shop and find something incredible!
        </p>
        <Link href={Pages.products} className={styles.shopLink}>
          <Button variant="primary" size="large">
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};