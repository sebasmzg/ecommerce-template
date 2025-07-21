import { ICartItem, ICartState, IProduct } from "../dto";

export interface CartStore extends ICartState {
    addItem: (product: IProduct, quantity?: number) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getItem: (productId: number) => ICartItem | undefined;
}