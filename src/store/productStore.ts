import { ICartItem, IProduct } from "@/app/core/application/dto";
import { CartStore } from "@/app/core/application/models/cartStore.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const calculateCartTotals = (items: ICartItem[]) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.subtotal, 0);
  const isEmpty = items.length === 0;

  return { totalQuantity, total, isEmpty };
};

const createCartItems = (product: IProduct, quantity: number): ICartItem => ({
  id: `${product.id}_${Date.now}`,
  product,
  quantity,
  subtotal: parseFloat((product.price * quantity).toFixed(2)),
});

export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
    items: [],
    total: 0,
    totalQuantity: 0,
    isEmpty: true,
    loading: false,
    error: null,

    addItem: (product: IProduct, quantity = 1) => {
      try {
        set({ loading: true, error: null });

        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) => item.product.id === product.id
        );

        let newItems: ICartItem[];

        if (existingItemIndex >= 0) {
          newItems = items.map((item, index) => {
            if (index === existingItemIndex) {
              const newQuantity = item.quantity + quantity;
              return {
                ...item,
                quantity: newQuantity,
                subtotal: parseFloat(
                  (item.product.price * newQuantity).toFixed(2)
                ),
              };
            }
            return item;
          });
        } else {
          const newItem = createCartItems(product, quantity);
          newItems = [...items, newItem];
        }

        const totals = calculateCartTotals(newItems);

        set({
            items: newItems,
            ...totals,
            loading: false
          });

      } catch (error) {
        set({
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Error adding product",
        });
      }
    },
    removeItem: (productId: number) => {
        try {
          set({ loading: true, error: null });

          const { items } = get();
          const newItems = items.filter(item => item.product.id !== productId);
          const totals = calculateCartTotals(newItems);

          set({
            items: newItems,
            ...totals,
            loading: false
          });
        } catch (error) {
          set({
            loading: false,
            error: error instanceof Error ? error.message : 'Error removing product'
          });
        }
      },

      updateQuantity: (productId: number, quantity: number) => {
        try {
          set({ loading: true, error: null });

          if (quantity <= 0) {
            get().removeItem(productId);
            return;
          }

          const { items } = get();
          const newItems = items.map(item => {
            if (item.product.id === productId) {
              return {
                ...item,
                quantity,
                subtotal: parseFloat((item.product.price * quantity).toFixed(2))
              };
            }
            return item;
          });

          const totals = calculateCartTotals(newItems);

          set({
            items: newItems,
            ...totals,
            loading: false
          });
        } catch (error) {
          set({
            loading: false,
            error: error instanceof Error ? error.message : 'Error updating quantity'
          });
        }
      },

      clearCart: () => {
        try {
          set({ loading: true, error: null });

          set({
            items: [],
            total: 0,
            totalQuantity: 0,
            isEmpty: true,
            loading: false
          });
        } catch (error) {
          set({
            loading: false,
            error: error instanceof Error ? error.message : 'Error cleaning cart'
          });
        }
      },

      getItem: (productId: number) => {
        const { items } = get();
        return items.find(item => item.product.id === productId);
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
        total: state.total,
        totalQuantity: state.totalQuantity,
        isEmpty: state.isEmpty
      })
    }
  )
);
