'use client'
import React from 'react';

import styles from './ProductRating.module.scss';
import { StarRating } from '@/components/atoms';
import { RatingBreakdown } from '../../molecule/RatingBrakdown/RatingBreakdown';

interface ProductRatingProps {
  averageRating: number;
  totalReviews: number;
  ratingsBreakdown: {
    [key: number]: number;
  };
}

export const ProductRating: React.FC<ProductRatingProps> = ({
  averageRating,
  totalReviews,
  ratingsBreakdown
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        <div className={styles.rating}>
          <span className={styles.ratingValue}>
            {averageRating.toFixed(1)}
          </span>
          <StarRating rating={averageRating} size="large" />
        </div>
        <p className={styles.reviewCount}>
          {totalReviews} review{totalReviews !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className={styles.breakdown}>
        <RatingBreakdown 
          ratings={ratingsBreakdown}
          totalReviews={totalReviews}
        />
      </div>
    </div>
  );
};