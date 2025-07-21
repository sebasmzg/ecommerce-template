'use client'

import { useEffect, useMemo, useState } from "react"
import { IProduct } from "../../core/application/dto"

export const useProductSearch = (products: IProduct[]) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedSearchTerm(searchTerm);
        },300);
        return () => clearTimeout(timer);
    },[searchTerm]);

    const filteredProducts = useMemo(()=>{
        if(!debouncedSearchTerm.trim()){
            return products;
        }

        return products.filter((product: IProduct) =>
            product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || 
            product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
    },[products, debouncedSearchTerm])

    const clearSearch = () => {
        setSearchTerm("");
    }

    return {
        searchTerm,
        setSearchTerm,
        debouncedSearchTerm,
        filteredProducts,
        clearSearch,
        resultsCount: filteredProducts.length
    }
    
}