import { PProducts } from "@/app/core/application/ports";
import { HttpClient } from "../utils/client-http";
import { IProduct } from "@/app/core/application/dto";

export class ProductsServices implements PProducts {
    private clientHttp: HttpClient;
    private basePath: string = "products";
    
    constructor(){
        this.clientHttp = new HttpClient();
    }
    async getAllProducts(): Promise<IProduct[]> {
        return await this.clientHttp.get(this.basePath);
    }
    async getProductById(id: number): Promise<IProduct> {
        return await this.clientHttp.getById(this.basePath, id)
    }

}