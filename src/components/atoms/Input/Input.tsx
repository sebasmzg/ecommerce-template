import React, { forwardRef } from "react";
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (initialProps, ref) => {
    const { hasError, className, ...props } = initialProps;

    return (
      <input
        ref={ref}
        className={`${styles.input} ${hasError ? styles.error : ''} ${className || ""}`}
        aria-invalid={hasError ? "true" : "false"}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";