'use client'
import React from 'react';
import styles from './RatingBreakdown.module.scss';

interface RatingBreakdownProps {
  ratings: {
    [key: number]: number;
  };
  totalReviews: number;
}

export const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
  ratings,
  totalReviews
}) => {
  const stars = [5, 4, 3, 2, 1];

  return (
    <div className={styles.breakdown}>
      {stars.map((star) => {
        const count = ratings[star] || 0;
        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

        return (
          <div key={star} className={styles.row}>
            <span className={styles.starLabel}>{star}</span>
            <div className={styles.progressContainer}>
              <div 
                className={styles.progressBar}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className={styles.percentage}>{Math.round(percentage)}%</span>
          </div>
        );
      })}
    </div>
  );
};