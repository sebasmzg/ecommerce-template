import React from "react";
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning";
    size?: "small" | "medium" | "large";
    isLoading?: boolean;
}

export const Button = ({
    className,
    children,
    variant = "primary",
    size = "medium",
    isLoading = false,
    disabled,
    ...props
}: ButtonProps) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        isLoading && styles.loading,
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={buttonClasses}
            disabled={isLoading || disabled}
            {...(isLoading && { "aria-busy": true })}
            {...props}
        >
            {isLoading && (
                <span className={styles.spinner}>⏳</span>
            )}
            {children}
        </button>
    );
};