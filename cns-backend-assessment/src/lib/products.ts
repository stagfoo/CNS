import axios from "axios";
import { NetworkProduct, NetworkProductDetails, Product, ProductDetails } from "../types/productTypes";
import { productDetailsNormalizer, productNormalizer, errorNormalizer } from "./normalizers";

/**
 * This function should contain code to retrieve the product data
 * @returns <Promise>
 */
export async function getProducts(): Promise<Product[]> {
    const url: string = 'https://api.commbank.com.au/public/cds-au/v1/banking/products';
    const headers = { 'x-v': 3 };
    try {
        const response = await axios.get(url, { headers });
        if (response.status !== 200) {
            throw errorNormalizer(response, 'Failed to fetch products');
        }
        const products = response.data?.data?.products.map(productNormalizer);
        return products
    } catch (error) {
        throw errorNormalizer(error, 'Failed to fetch products');
    }
}

/**
 * This function should contain code to retrieve details for a single product and return it as the correct type
 * @param product_id - id of product, retrieved from getProducts() function
 * @returns Promise<ProductDetails>
 */
export async function getProductDetails(product_id: string): Promise<ProductDetails> {
    const url: string = 'https://api.commbank.com.au/public/cds-au/v1/banking/products';
    const headers = { 'x-v': 4 };
    try {
        const response = await axios.get(`${url}/${product_id}`, { headers });
        if (response.status !== 200) {
            throw errorNormalizer(response, 'Failed to fetch single product');
        }
        const product = productDetailsNormalizer(response.data?.data);
        return product
    } catch (error) {
        const commbankError = error?.response?.data?.errors ?? error;
        throw errorNormalizer(error, `Failed to fetch single product [${product_id}]`);
    }
}