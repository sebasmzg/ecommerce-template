import { IProduct } from "../dto";

export interface PProducts {
    /**
     * Fetches the list of products.
     * @param page The page number to fetch.
     * @param size The number of elements to fetch.
     * @returns A promise that resolves to the products response.
     */
    getAllProducts():Promise<IProduct[]>

    /**
     * Fetches a product by its id.
     * @param id The id of the product to fetch.
     * @returns A promise that resolves to the product response.
     */
    getProductById(id: number):Promise<IProduct>
}