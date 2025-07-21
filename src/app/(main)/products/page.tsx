"use client";

import { IProduct } from "../../core/application/dto";
import {
  useCart,
  useProductSearch,
  useProducts,
} from "../../infrastructure/hooks";

import { Button, ErrorState, LoadingState } from "@/components/atoms";
import styles from "./page.module.scss";
import { ProductGrid, ProductSearch } from "@/components/organisms";

export default function ProductsPage() {
  const { products, loading, error, refetch } = useProducts();
  const {
    addToCart,
    isInCart,
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    filteredProducts,
    clearSearch,
    resultsCount,
  } = useProductSearch(products);

  const handleAddToCart = (product: IProduct) => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Products</h1>
        </div>
        <LoadingState message="Loading products..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Products</h1>
        </div>
        <ErrorState
          message={error}
          onRetry={refetch}
          retryText="Try again"
        />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Products</h1>
        </div>
        <div className={styles.emptyProducts}>
          <div className={styles.emptyIcon}>📦</div>
          <h2 className={styles.emptyTitle}>No products available</h2>
          <p className={styles.emptyDescription}>
            Seems there its not products.
          </p>
          <Button onClick={refetch} variant="primary">
            Reload
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products</h1>
      </div>

      <ProductSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onClearSearch={clearSearch}
        resultsCount={resultsCount}
      />

      {filteredProducts.length === 0 && debouncedSearchTerm ? (
        <div className={styles.noSearchResults}>
          <div className={styles.noResultsIcon}>🔍</div>
          <h3 className={styles.noResultsTitle}>No se encontraron productos</h3>
          <p className={styles.noResultsDescription}>
            No hay productos que coincidan con &quot;
            <strong>{debouncedSearchTerm}</strong>&quot;
          </p>

          <Button onClick={clearSearch} variant="secondary">
            Limpiar búsqueda
          </Button>
        </div>
      ) : (
        <ProductGrid
          products={filteredProducts}
          isInCart={isInCart}
          getItemQuantity={getItemQuantity}
          onAddToCart={handleAddToCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
        />
      )}
    </div>
  );
}
