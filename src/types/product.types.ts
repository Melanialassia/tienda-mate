export type ProductCategory = "yerba" | "bombilla" | "mate" | "accesorios" | "combos";

export interface Product {
  id: string;
  name: string;
  description: string;
  details?: string;
  image: string;
  category: ProductCategory;
  tag?: "nuevo" | "destacado" | "recomendado";
  weight?: string;
  origin?: string;
}
