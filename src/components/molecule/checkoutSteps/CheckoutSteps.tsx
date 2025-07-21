import React from 'react';
import styles from './CheckoutSteps.module.scss';

interface Step {
  id: string;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
}

interface CheckoutStepsProps {
  steps: Step[];
}

export const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ steps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div key={step.id} className={styles.stepContainer}>
            <div 
              className={`${styles.step} ${
                step.isCompleted ? styles.completed : 
                step.isActive ? styles.active : styles.pending
              }`}
            >
              <div className={styles.stepCircle}>
                {step.isCompleted ? (
                  <span className={styles.checkIcon}>✓</span>
                ) : (
                  <span className={styles.stepNumber}>{index + 1}</span>
                )}
              </div>
              <span className={styles.stepTitle}>{step.title}</span>
            </div>
            
            {index < steps.length - 1 && (
              <div 
                className={`${styles.connector} ${
                  step.isCompleted ? styles.connectorCompleted : ''
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};