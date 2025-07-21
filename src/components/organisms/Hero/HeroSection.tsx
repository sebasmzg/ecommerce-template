'use client'
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms';
import { Pages } from '@/app/core/application/models/pages.enum';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Discover the
              <span className={styles.highlight}> Best Products</span>
              <br />
              for You
            </h1>
            
            <p className={styles.subtitle}>
              Find everything you need with the best quality and incredible prices. 
              Free shipping on orders over $50.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚚</span>
                <span className={styles.featureText}>Free Shipping</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🔄</span>
                <span className={styles.featureText}>Easy Returns</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>⭐</span>
                <span className={styles.featureText}>Guaranteed Quality</span>
              </div>
            </div>
            
            <div className={styles.actions}>
              <Link href={Pages.products} className={styles.primaryLink}>
                <Button variant="primary" size="large" className={styles.primaryButton}>
                  🛍️ Explore Products
                </Button>
              </Link>
              
              <Link href="#" className={styles.secondaryLink}>
                <Button variant="secondary" size="large" className={styles.secondaryButton}>
                  🏷️ View Offers
                </Button>
              </Link>
            </div>
          </div>
          
          <div className={styles.visualContent}>
            <div className={styles.heroImage}>
              <div className={styles.imageContainer}>
                <div className={styles.floatingCard}>
                  <span className={styles.cardIcon}>📦</span>
                  <div className={styles.cardContent}>
                    <span className={styles.cardTitle}>Premium Products</span>
                    <span className={styles.cardSubtitle}>Guaranteed Quality</span>
                  </div>
                </div>
                
                <div className={styles.floatingCard} style={{ animationDelay: '0.5s' }}>
                  <span className={styles.cardIcon}>🚚</span>
                  <div className={styles.cardContent}>
                    <span className={styles.cardTitle}>Fast Shipping</span>
                    <span className={styles.cardSubtitle}>24–48 hours</span>
                  </div>
                </div>
                
                <div className={styles.floatingCard} style={{ animationDelay: '1s' }}>
                  <span className={styles.cardIcon}>💳</span>
                  <div className={styles.cardContent}>
                    <span className={styles.cardTitle}>Secure Payment</span>
                    <span className={styles.cardSubtitle}>SSL Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
