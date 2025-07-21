import { PCart } from "@/app/core/application/ports";
import { HttpClient } from "../utils/client-http";
import { ICart } from "@/app/core/application/dto";

export class CartsServices implements PCart {
    private clientHttp: HttpClient;
    private basePath: string = "carts";
    
    constructor(){
        this.clientHttp = new HttpClient();
    }

    async getAllCarts(): Promise<ICart> {
        return await this.clientHttp.get(this.basePath);
    }

    async getCartById(id: number): Promise<ICart> {
        return await this.clientHttp.getById(this.basePath, id)
    }
    
    async updateCart(id: number, cart: ICart): Promise<ICart> {
        return await this.clientHttp.put(this.basePath, id, cart);
    }
    
    async addCart(cart: ICart): Promise<ICart> {
        return await this.clientHttp.post(this.basePath, cart);
    }
    
    async deleteCart(id: number): Promise<ICart> {
        return await this.clientHttp.delete(this.basePath, id);
    }
}