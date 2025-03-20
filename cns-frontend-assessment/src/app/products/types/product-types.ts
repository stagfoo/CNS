export type Product = {
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
}

export type ProductNetworkResponse = {
    data: {
        products: Product[]; 
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