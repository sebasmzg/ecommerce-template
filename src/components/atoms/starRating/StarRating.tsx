'use client'
import React from 'react';
import styles from './StarRating..module.scss';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'small' | 'medium' | 'large';
  showValue?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'medium',
  showValue = false
}) => {
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= Math.floor(rating);
    const isHalfFilled = starValue === Math.ceil(rating) && rating % 1 !== 0;

    return (
      <span
        key={index}
        className={`${styles.star} ${styles[size]} ${
          isFilled ? styles.filled : isHalfFilled ? styles.halfFilled : styles.empty
        }`}
      >
        ⭐
      </span>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.stars}>{stars}</div>
      {showValue && (
        <span className={styles.value}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};