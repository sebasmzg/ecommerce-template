import { IProduct } from "../products/product.dto";

export interface ICart {
    id: number,
    userId: number,
    products: IProduct[]
}

export interface ICartItem {
    id: string;
    product: IProduct;
    quantity: number;
    subtotal: number;
}

export interface ILocalCart {
    items: ICartItem[];
    total: number;
    totalQuantity: number;
    isEmpty: boolean;
}

export interface ICartState extends ILocalCart {
    loading: boolean;
    error: string | null;
}