import { ICart } from "../dto";

export interface PCart {
    getAllCarts():Promise<ICart>

    getCartById(id: number):Promise<ICart>

    updateCart(id: number, cart: ICart):Promise<ICart>

    addCart(cart: ICart): Promise<ICart>

    deleteCart(id: number):Promise<ICart>
}