export interface ProductNetworkError {
    status: number;
    error: string;
    message: string;
}

export interface NetworkProduct {
    brand: string;
    brandName: string;
    description: string;
    isTailored: true
    lastUpdated: string;
    name: string;
    productCategory: string;
    productId: string;
    additionalInformation: {
        feesAndPricingUri: string;
        productPageUri: string;
    }
    effectiveFrom: string;
    effectiveTo: string;
}

export type ProductNetworkResponse = {
    data: {
        products: NetworkProduct[];
    }
    links: {
        first: string;
        last: string;
        next: string;
        self: string;
    }
    meta: {
        totalPages: number;
        totalRecords: number;
    }
}

// Some fields are unknown, because I don't have the full schema
export interface NetworkProductDetails {
    bundles: unknown[];
    features: ProductFeature[];
    constraints: unknown[];
    eligibility: ProductEligibility[];
    fees: ProductFees[];
    depositRates: Array<Record<string, {
        depositRateType: string,
        rate: string,
        calculationFrequency: string,
        applicationFrequency: string
    }>>;
    productId: string;
    effectiveFrom: string;
    effectiveTo: string;
    lastUpdated: string;
    productCategory: string;
    name: string;
    description: string;
    brand: string;
    brandName: string;
    applicationUri: string;
    isTailored: boolean;
    additionalInformation: {
        overviewUri: string;
        termsUri: string;
        eligibilityUri: string;
        feesAndPricingUri: string;
    };
}

export type ProductDetailsNetworkResponse = {
    data: NetworkProductDetails;
    links: {
        first: string;
        last: string;
        next: string;
        self: string;
    }
    meta: {
        totalPages: number;
        totalRecords: number;
    }
}


// Local Types

export interface Product {
    product_id: string;
    effective_from: string;
    effective_to: string;
    product_category: string;
    name: string;
    description: string;
    brand: string;
}

type Additionals = {
    additionalValue?: string;
    additionalInfo?: string;
}

type ProductFeature = {
    featureType: string;
    additionalValue?: string;
    additionalInfo?: string;
} & Additionals;

type ProductEligibility = {
    // I typed this to show I know more then just string
    eligibilityType: "STAFF" | "MIN_AGE" | "NATURAL_PERSON" | "OTHER";
} & Additionals;

type ProductFees = {
    name: string;
    feeType: string;
    amount: string;
    discounts: unknown[];
} & Additionals;

export interface ProductDetails {
    product_id: string;
    features: ProductFeature[];
    eligibility: ProductEligibility[];
    fees: ProductFees[];
}