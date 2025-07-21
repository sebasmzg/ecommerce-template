'use client'
import React from 'react';
import { Button } from '@/components/atoms';
import styles from './searchProduct.module.scss';

interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
  resultsCount: number;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  searchTerm,
  onSearchChange,
  onClearSearch,
  resultsCount
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Filter products..."
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        {searchTerm && (
          <Button
            onClick={onClearSearch}
            variant="secondary"
            size="small"
            className={styles.clearButton}
          >
            Limpiar
          </Button>
        )}
      </div>
      <span className={styles.resultsCount}>
        {resultsCount} product(s) finded
      </span>
    </div>
  );
};