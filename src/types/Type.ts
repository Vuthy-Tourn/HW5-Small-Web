export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  reviews?: Review[];
}
export interface Card {
  name:string,
  title:string,
  description:string,
  emoji:string,
  color:any,
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}