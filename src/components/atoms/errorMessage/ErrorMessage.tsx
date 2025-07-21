import React from 'react';
import styles from './errorMessage.module.scss';

interface ErrorMessageProps {
    message?: string;
    className?: string;
}

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => {
    if (!message) return null;

    return (
        <p 
            className={`${styles.errorMessage} ${className || ''}`} 
            role="alert"
        >
            {message}
        </p>
    );
};