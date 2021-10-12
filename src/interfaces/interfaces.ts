export interface iProduct {
  id: string;
  name: string;
  productImageUrl: string;
  longDescription: string;
  description: string;
  ingredients: string[];
}

export interface iCategory {
  id: string;
  name: string;
  imageURL: string;
  description: string;
  products: iProduct[];
}
