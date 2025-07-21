'use client'
import React from 'react';
import { Pages } from '@/app/core/application/models/pages.enum';
import styles from './Footer.module.scss';
import { SocialIcon } from '@/components/atoms';
import { FooterSection } from '@/components/molecule';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our History', href: '/history' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Blog', href: '/blog' }
  ];

  const customerServiceLinks = [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact', href: '/contact' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'FAQs', href: '/faq' }
  ];

  const legalLinks = [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Consumer Rights', href: '/consumer-rights' }
  ];

  const shopLinks = [
    { label: 'All Products', href: Pages.products },
    { label: 'Special Offers', href: '/offers' },
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'Best Sellers', href: '/bestsellers' },
    { label: 'Clearance', href: '/clearance' }
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: '📘', label: 'Facebook' },
    { href: 'https://instagram.com', icon: '📷', label: 'Instagram' },
    { href: 'https://twitter.com', icon: '🐦', label: 'Twitter' },
    { href: 'https://youtube.com', icon: '📺', label: 'YouTube' },
    { href: 'https://linkedin.com', icon: '💼', label: 'LinkedIn' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <h3 className={styles.brandName}>PT Éxito</h3>
              <p className={styles.tagline}>Your destination for the best shopping</p>
            </div>
            
            <p className={styles.description}>
              We offer high-quality products with the best online shopping experience. 
              Discover our exclusive deals and enjoy fast and secure shipping.
            </p>
            
            <div className={styles.socialMedia}>
              <h4 className={styles.socialTitle}>Follow us</h4>
              <div className={styles.socialIcons}>
                {socialLinks.map((social, index) => (
                  <SocialIcon
                    key={index}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <FooterSection title="Shop" links={shopLinks} />
            <FooterSection title="Company" links={companyLinks} />
            <FooterSection title="Customer Service" links={customerServiceLinks} />
            <FooterSection title="Legal" links={legalLinks} />
          </div>

          <div className={styles.newsletterSection}>
            <div className={styles.contactInfo}>
              <h4 className={styles.contactTitle}>Contact</h4>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>+57 (604) 123-4567</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>support@sebastian.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>123 Centro St, Medellín, Antioquia</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🕒</span>
                  <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Jorge Sebastian Muñoz. All rights reserved.
            </p>
            
            <div className={styles.paymentMethods}>
              <span className={styles.paymentText}>Payment methods:</span>
              <div className={styles.paymentIcons}>
                <span className={styles.paymentIcon} title="Visa">💳</span>
                <span className={styles.paymentIcon} title="Mastercard">💳</span>
                <span className={styles.paymentIcon} title="PayPal">🅿️</span>
                <span className={styles.paymentIcon} title="Apple Pay">🍎</span>
                <span className={styles.paymentIcon} title="Google Pay">🅶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
