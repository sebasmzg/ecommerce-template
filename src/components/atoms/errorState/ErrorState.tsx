import React from 'react';
import styles from './ErrorState.module.scss';
import { Button } from '../button/Button';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  retryText?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  message, 
  onRetry,
  retryText = "Intentar de nuevo"
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>⚠️</div>
      <h3 className={styles.title}>Oops! Algo salió mal</h3>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="primary"
          className={styles.retryButton}
        >
          {retryText}
        </Button>
      )}
    </div>
  );
};