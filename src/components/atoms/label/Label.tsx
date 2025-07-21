import React from "react";
import styles from './Label.module.scss';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  variant?: 'default' | 'primary' | 'secondary';
  hasError?: boolean;
  disabled?: boolean;
}

export const Label = ({
    className,
    children,
    required = false,
    variant = 'default',
    hasError = false,
    disabled = false,
    ...props
}: LabelProps) => {
    const labelClasses = [
        styles.label,
        styles[variant],
        hasError && styles.error,
        disabled && styles.disabled,
        className
    ].filter(Boolean).join(' ');

    return (
        <label className={labelClasses} {...props}>
            {children}
            {required && <span className={styles.required}>*</span>}
        </label>
    );
};