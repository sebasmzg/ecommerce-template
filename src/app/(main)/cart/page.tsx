"use client";

import Link from "next/link";
import { useCart } from "../../infrastructure/hooks";
import { LoadingState, Button } from "@/components/atoms";
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { EmptyCart } from "@/components/molecule/emptyCart/EmptyCart";
import { CartTable } from "@/components/organisms";
import { CartSummary } from "@/components/molecule";
import { Pages } from "@/app/core/application/models/pages.enum";

export default function CartPage() {
  const router = useRouter();
  const {
    items,
    total,
    totalQuantity,
    isEmpty,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    loading
  } = useCart();

  const handleCheckout = () => {
    router.push(Pages.checkout);
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      clearCart();
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <LoadingState message="Cargando carrito..." />
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className={styles.container}>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Carrito de Compras</h1>
          <div className={styles.headerActions}>
            <span className={styles.itemCount}>
              {totalQuantity} producto{totalQuantity !== 1 ? 's' : ''}
            </span>
            <Link href={Pages.products} className={styles.continueShoppingLink}>
              <Button variant="secondary" size="small">
                Continuar Comprando
              </Button>
            </Link>
          </div>
        </div>

        {/* Cart Content */}
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            <CartTable
              items={items}
              onIncreaseQuantity={increaseQuantity}
              onDecreaseQuantity={decreaseQuantity}
              onRemoveItem={removeFromCart}
            />
          </div>

          <div className={styles.cartSidebar}>
            <CartSummary
              subtotal={total}
              total={total}
              onCheckout={handleCheckout}
              onClearCart={handleClearCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}