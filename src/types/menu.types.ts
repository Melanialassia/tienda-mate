export type MenuCategory = "bebidas-frias" | "bebidas-calientes" | "comidas" | "postres";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  tag?: "nuevo" | "popular" | "especial";
}
