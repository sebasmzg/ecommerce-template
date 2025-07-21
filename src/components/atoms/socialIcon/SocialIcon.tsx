'use client'
import React from 'react';
import styles from './SocialIcon.module.scss';

interface SocialIconProps {
  href: string;
  icon: string;
  label: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon,
  label,
  className = ''
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.socialIcon} ${className}`}
      aria-label={label}
      title={label}
    >
      <span className={styles.icon}>{icon}</span>
    </a>
  );
};