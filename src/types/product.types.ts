export type ProductCategory = "yerba" | "bombilla" | "mate" | "accesorios" | "combos";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  tag?: "nuevo" | "destacado" | "oferta";
  weight?: string;
}
