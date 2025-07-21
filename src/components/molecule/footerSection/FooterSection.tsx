'use client'
import React from 'react';
import styles from './FooterSection.module.scss';
import { FooterLink } from '@/components/atoms'
interface FooterSectionProps {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
  className = ''
}) => {
  return (
    <div className={`${styles.section} ${className}`}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <FooterLink href={link.href} isExternal={link.isExternal}>
              {link.label}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
};