'use client'
import React from 'react';
import Link from 'next/link';
import styles from './FooterLink.module.scss';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  isExternal = false,
  className = ''
}) => {
  const linkProps = isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <Link 
      href={href} 
      className={`${styles.link} ${className}`}
      {...linkProps}
    >
      {children}
    </Link>
  );
};