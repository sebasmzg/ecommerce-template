'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useProductById } from '../../../infrastructure/hooks/UseProductById';
import { useCart } from '../../../infrastructure/hooks';
import { Pages } from '../../../core/application/models/pages.enum';
import { LoadingState, ErrorState, Button } from '@/components/atoms';
import styles from './page.module.scss';
import { Breadcrumb } from '@/components/molecule';
import { ProductDetail } from '@/components/organisms';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const { product, loading, error, refetch } = useProductById(productId);
  const { addToCart, isInCart, getItemQuantity, increaseQuantity, decreaseQuantity } = useCart();

  if (loading) {
    return (
      <div className={styles.container}>
        <LoadingState message="Cargando producto..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorContainer}>
          <ErrorState 
            message={error}
            onRetry={refetch}
            retryText="Try again"
          />
          <Link href={Pages.products} className={styles.backLink}>
            <Button variant="secondary" size="small">
              ← back to products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.notFoundContainer}>
          <div className={styles.notFoundContent}>
            <div className={styles.notFoundIcon}>🔍</div>
            <h2 className={styles.notFoundTitle}>Producto no encontrado</h2>
            <p className={styles.notFoundDescription}>
              El producto que buscas no existe o ha sido eliminado.
            </p>
            <Link href={Pages.products} className={styles.backLink}>
              <Button variant="primary">
                Volver a productos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Tienda', href: '/' },
    { label: 'Productos', href: Pages.products },
    { label: product.category, href: `${Pages.products}?category=${product.category}` },
    { label: product.title }
  ];

  const inCart = isInCart(product.id);
  const quantity = getItemQuantity(product.id);

  return (
    <div className={styles.container}>
      <Link href={Pages.products} className={styles.backButton}>
          <Button variant="secondary" size="small">
            ← Back to products
          </Button>
        </Link>
      <Breadcrumb items={breadcrumbItems} />
      
      <ProductDetail
        product={product}
        isInCart={inCart}
        quantity={quantity}
        onAddToCart={() => addToCart(product)}
        onIncreaseQuantity={() => increaseQuantity(product.id)}
        onDecreaseQuantity={() => decreaseQuantity(product.id)}
      />
    </div>
  );
}