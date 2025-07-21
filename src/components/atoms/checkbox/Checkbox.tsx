import React, { forwardRef } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    hasError?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((initialProps, ref) => {
    const {
        label,
        className,
        hasError,
        ...props 
    } = initialProps;

    return (
        <label className={`${styles.wrapper} ${className || ''}`}>
            <input 
                ref={ref}
                type="checkbox" 
                className={`${styles.checkbox} ${hasError ? styles.error : ''}`} 
                {...props}
            />
            <span className={styles.checkmark}></span>
            <span className={`${styles.label} ${hasError ? styles.errorText : ''}`}>
                {label}
            </span>
        </label>
    );
});

Checkbox.displayName = "Checkbox";