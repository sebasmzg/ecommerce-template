'use client'
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './formField.module.scss';

interface FormFieldProps {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  error?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  options,
  required = false,
  error,
  className = ''
}) => {
  const { register, formState: { errors } } = useFormContext();
  const fieldError = error || errors[name]?.message;

  const renderInput = () => {
    const commonProps = {
      ...register(name),
      className: `${styles.input} ${fieldError ? styles.inputError : ''}`,
      placeholder,
      'aria-invalid': !!fieldError,
      'aria-describedby': fieldError ? `${name}-error` : undefined
    };

    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={4}
            className={`${styles.textarea} ${fieldError ? styles.inputError : ''}`}
          />
        );

      case 'select':
        return (
          <select {...commonProps} className={`${styles.select} ${fieldError ? styles.inputError : ''}`}>
            <option value="">{placeholder || 'Seleccionar...'}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className={styles.checkboxWrapper}>
            <input
              {...register(name)}
              type="checkbox"
              className={styles.checkbox}
              id={name}
            />
            <label htmlFor={name} className={styles.checkboxLabel}>
              {label}
            </label>
          </div>
        );

      default:
        return (
          <input
            {...commonProps}
            type={type}
          />
        );
    }
  };

  if (type === 'checkbox') {
    return (
      <div className={`${styles.fieldContainer} ${styles.checkboxContainer} ${className}`}>
        {renderInput()}
        {fieldError && (
          <span id={`${name}-error`} className={styles.errorMessage}>
            {fieldError as string}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.fieldContainer} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {renderInput()}
      {fieldError && (
        <span id={`${name}-error`} className={styles.errorMessage}>
          {fieldError as string}
        </span>
      )}
    </div>
  );
};