'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms';
import { useProducts } from '@/app/infrastructure/hooks';
import { Pages } from '@/app/core/application/models/pages.enum';
import styles from './FeaturedProducts.module.scss';
import { ProductCard } from '@/components/molecule';

export const FeaturedProducts: React.FC = () => {
  const { products, loading } = useProducts();
  
  const featuredProducts = products.slice(0, 4);

  if (loading) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Featured products</h2>
          </div>
          <div className={styles.loadingGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className={styles.loadingCard}>
                <div className={styles.loadingImage}></div>
                <div className={styles.loadingContent}>
                  <div className={styles.loadingLine}></div>
                  <div className={styles.loadingLine}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>🌟 Featured Products</h2>
          <p className={styles.subtitle}>
            Discover our most popular products with the best reviews
          </p>
        </div>
        
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} className={styles.productWrapper}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className={styles.actions}>
          <Link href={Pages.products} className={styles.viewAllLink}>
            <Button variant="primary" size="large" className={styles.viewAllButton}>
              Discover more products →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};