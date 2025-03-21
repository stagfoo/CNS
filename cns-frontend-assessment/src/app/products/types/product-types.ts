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