import React, { forwardRef } from 'react';
import styles from './Select.module.scss';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  options: Option[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((initialProps, ref) => {
    const {
        hasError,
        className,
        options,
        placeholder,
        ...props
    } = initialProps;

    const selectClasses = [
        styles.select,
        hasError && styles.error,
        className
    ].filter(Boolean).join(' ');

    return (
        <select
            ref={ref}
            className={selectClasses}
            {...props}
        >
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
});

Select.displayName = "Select";