import { NetworkProduct, NetworkProductDetails, Product, ProductDetails } from '../types/productTypes';
/**
 * Normalizes the product data
 * @param networkProducts - the product data from the network
 * @returns Product
 */
export function productNormalizer(product: NetworkProduct): Product {
    return {
        product_id: product.productId,
        effective_from: product.effectiveFrom,
        effective_to: product.effectiveTo,
        product_category: product.productCategory,
        name: product.name,
        description: product.description,
        brand: product.brand
    }
}


export function productDetailsNormalizer(product: NetworkProductDetails): ProductDetails {
    return {
        product_id: product.productId,
        features: product.features,
        eligibility: product.eligibility,
        fees: product.fees
    }
}