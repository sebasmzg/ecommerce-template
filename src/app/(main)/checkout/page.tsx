"use client";
import { useCart } from "@/app/infrastructure/hooks";
import { CheckoutFormData } from "@/app/lib/validation/form.schema";
import { Button, LoadingState } from "@/components/atoms";
import {
  CheckoutSteps,
  CheckoutSummary,
  EmptyCart,
} from "@/components/molecule";
import { DynamicForm } from "@/components/organisms";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.scss";
import { Pages } from "@/app/core/application/models/pages.enum";

export default function CheckoutPage() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentStep] = useState(0);
  const [summaryCollapsed, setSummaryCollapsed] = useState(false);
  const { items, total, totalQuantity, isEmpty, clearCart } = useCart();

  const steps = [
    {
      id: "info",
      title: "Personal Information",
      isCompleted: currentStep > 0,
      isActive: currentStep === 0,
    },
    {
      id: "shipping",
      title: "Shipping Address",
      isCompleted: currentStep > 1,
      isActive: currentStep === 1,
    },
    {
      id: "payment",
      title: "Payment Method",
      isCompleted: currentStep > 2,
      isActive: currentStep === 2,
    },
    {
      id: "review",
      title: "Review Order",
      isCompleted: false,
      isActive: currentStep === 3,
    },
  ];

  const handleCheckout = async (data: CheckoutFormData) => {
    const orderSummary = `
        🛒 CONFIRM YOUR ORDER

👤 Customer: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📱 Phone: ${data.phone}

📍 Delivery Address:
${data.address}
${data.city}, ${data.department}
Postal Code: ${data.postalCode}

🛍️ Items (${items.length}):
${items
  .map(
    (item) =>
      `• ${item.product.title} x${item.quantity} - $${(
        item.product.price * item.quantity
      ).toFixed(2)}`
  )
  .join("\n")}

💰 TOTAL: $${total}
💳 Payment: ****${data.cardNumber.slice(-4)}

⚠️ Are you sure you want to complete this purchase?`;

    const confirmed = confirm(orderSummary);

    if (!confirmed) {
      console.log("❌ Purchase cancelled by user");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(`Payment successful ✅🤑
        Thank you ${data.firstName} ${data.lastName}!
            Your order has been processed.

            📧 Confirmation will be sent to: ${data.email}
            📱 Phone: ${data.phone}
            📍 Delivery to: ${data.address}, ${data.city}, ${data.department}
            💳 Card ending in: ****${data.cardNumber.slice(-4)}

            Order details will be sent to your email shortly.`);
      clearCart();
    } catch (err: unknown) {
      setError("Payment failed. Please try again.");
      console.error("Checkout error: ", err);
    } finally {
      setLoading(false);

      setTimeout(() => {
        router.push("/products");
      }, 1000);
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <LoadingState message="Loading checkout..." />
      </div>
    );
  }

  if (error) {
    return <div>Oops, something went wrong :(</div>;
  }

  if (isEmpty) {
    return (
      <div className={styles.container}>
        <EmptyCart />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <h1>🛒 Your cart is empty</h1>
        <p>Add some products before proceeding to checkout</p>
        <button onClick={() => router.push("/products")}>Go to Products</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Checkout</h1>
          <div className={styles.headerActions}>
            <Link href={Pages.cart} className={styles.backLink}>
              <Button variant="secondary" size="small">
                ← Back to Cart
              </Button>
            </Link>
            <span className={styles.itemCount}>
              {totalQuantity} item{totalQuantity !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <CheckoutSteps steps={steps} />

        <div className={styles.checkoutContent}>
          <div className={styles.formSection}>
            <DynamicForm
              type="checkout"
              title="Checkout Information"
              onSubmit={handleCheckout}
              isLoading={loading}
              globalError={error}
            />
          </div>
          <div className={styles.summarySection}>
            <CheckoutSummary
              items={items}
              subtotal={total}
              isCollapsed={summaryCollapsed}
              onToggleCollapse={() => setSummaryCollapsed(!summaryCollapsed)}
            />

            <div className={styles.securityNotice}>
              <div className={styles.securityIcon}>🔒</div>
              <div className={styles.securityText}>
                <h4>Secure Checkout</h4>
                <p>Your data is protected with encryption</p>
              </div>
            </div>

            <div className={styles.supportInfo}>
              <h4>Need help?</h4>
              <p>Contact us:</p>
              <ul>
                <li>📞 +57 (555) 123-4567</li>
                <li>📧 support@ptexito.com</li>
                <li>💬 Live chat available 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
