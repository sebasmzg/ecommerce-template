import React from 'react';
import styles from './LoadingState.module.scss';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = "Cargando..." 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div className={styles.spinnerInner}></div>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};