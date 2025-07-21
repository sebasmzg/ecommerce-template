import React from 'react';
import styles from './formTitle.module.scss';

interface TitleProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    variant?: 'primary' | 'secondary' | 'accent';
    align?: 'left' | 'center' | 'right';
    className?: string;
}

export const Title = ({ 
    children, 
    level = 2,
    variant = 'primary',
    align = 'center',
    className 
}: TitleProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    
    const titleClasses = [
        styles.title,
        styles[`h${level}`],
        styles[variant],
        styles[align],
        className
    ].filter(Boolean).join(' ');

    return (
        <Tag className={titleClasses}>
            {children}
        </Tag>
    );
};