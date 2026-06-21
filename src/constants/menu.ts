import type { MenuItem } from "@/types";

export const MENU_ITEMS: MenuItem[] = [
  { id: "m1", name: "Mate Cocido", description: "Infusión caliente de yerba mate con leche o agua", price: 850, category: "bebidas-calientes", tag: "popular" },
  { id: "m2", name: "Té de Hierbas", description: "Blend de hierbas aromáticas: menta, cedrón y manzanilla", price: 750, category: "bebidas-calientes" },
  { id: "m3", name: "Café de Especialidad", description: "Café de origen único preparado en V60", price: 950, category: "bebidas-calientes", tag: "nuevo" },
  { id: "m4", name: "Chocolate Caliente", description: "Chocolate artesanal con leche entera y canela", price: 1100, category: "bebidas-calientes" },
  { id: "m5", name: "Tereré Paraguayo", description: "Mate frío con jugo de pomelo y hierbas frescas", price: 900, category: "bebidas-frias", tag: "popular" },
  { id: "m6", name: "Limonada de Menta", description: "Limonada artesanal con menta y hielo", price: 800, category: "bebidas-frias" },
  { id: "m7", name: "Mate Frío con Jugo", description: "Yerba con jugo de naranja y hielo. Estilo moderno", price: 950, category: "bebidas-frias", tag: "nuevo" },
  { id: "m8", name: "Medialunas de Manteca", description: "Tres medialunas artesanales, crocantes y esponjosas", price: 650, category: "comidas", tag: "popular" },
  { id: "m9", name: "Tostado Mixto", description: "Pan de campo con jamón y queso, tostado en plancha", price: 1200, category: "comidas" },
  { id: "m10", name: "Tabla de Fiambres", description: "Jamón crudo, queso cuartirolo y aceitunas", price: 2800, category: "comidas", tag: "especial" },
  { id: "m11", name: "Alfajor Artesanal", description: "Alfajor de maicena con dulce de leche y coco", price: 700, category: "postres", tag: "popular" },
  { id: "m12", name: "Torta de Zanahoria", description: "Porción de torta húmeda con crema cheese frosting", price: 1100, category: "postres" },
];

export const MENU_CATEGORY_LABELS: Record<string, string> = {
  "bebidas-calientes": "Bebidas Calientes",
  "bebidas-frias": "Bebidas Frías",
  comidas: "Para Comer",
  postres: "Postres",
};
