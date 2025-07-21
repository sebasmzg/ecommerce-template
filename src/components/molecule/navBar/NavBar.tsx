"use client";

import { useProductSearch } from "@/app/infrastructure/hooks/UseSearchProduct";
import { useProducts } from "@/app/infrastructure/hooks/UseProducts";
import { useCart } from "@/app/infrastructure/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.scss";
import { Button } from "@/components/atoms";

export const Header = () => {
  const router = useRouter();
  const { totalQuantity } = useCart();
  const { products } = useProducts();

  const { searchTerm, setSearchTerm, filteredProducts, clearSearch } =
    useProductSearch(products || []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
      setShowSearchResults(false);
    }
  };

  const handleSearchFocus = () => {
    if (searchTerm.trim()) setShowSearchResults(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSearchResults(value.length > 0);
  };

  const handleProductClick = (id: number) => {
    router.push(`/products/${id}`);
    setShowSearchResults(false);
    clearSearch();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoIcon}>🛍️</span>
            <span className={styles.logoText}>PT Exito</span>
          </Link>
        </div>

        <div className={styles.searchSection} ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search for a product..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                className={styles.searchInput}
              />
              <Button
                type="submit"
                variant="primary"
                size="small"
                className={styles.searchButton}
              >
                🔍
              </Button>
            </div>

            {showSearchResults && (
              <div className={styles.searchResults}>
                {filteredProducts.length > 0 ? (
                  <>
                    {filteredProducts.slice(0, 5).map((product) => (
                      <div
                        key={product.id}
                        className={styles.searchResultItem}
                        onClick={() => handleProductClick(product.id)}
                      >
                        <span className={styles.resultTitle}>
                          {product.title}
                        </span>
                        <span className={styles.resultPrice}>
                          ${product.price}
                        </span>
                      </div>
                    ))}
                    {filteredProducts.length > 5 && (
                      <div className={styles.searchResultsMore}>
                        View {filteredProducts.length - 5} more results...
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.noResults}>
                    No products found for "{searchTerm}"
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
        <nav className={styles.navigation}>
          <div className={styles.navItems}>
            <Link href="/products" className={styles.navLink}>
              Products
            </Link>
          </div>

          <Link href="/cart" className={styles.cartButton}>
            <span className={styles.cartIcon}>🛒</span>
            {totalQuantity > 0 && (
              <span className={styles.cartBadge}>{totalQuantity}</span>
            )}
          </Link>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="/products"
            className={styles.mobileMenuItem}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/cart"
            className={styles.mobileMenuItem}
            onClick={() => setIsMenuOpen(false)}
          >
            Cart {totalQuantity > 0 && `(${totalQuantity})`}
          </Link>
        </div>
      )}
    </header>
  );
};
