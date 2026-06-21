import type { Tutorial } from "@/types";

export const TUTORIALS: Tutorial[] = [
  {
    id: "1",
    title: "Cómo cebar el mate perfecto",
    description: "Aprende la técnica tradicional argentina para cebar el mate ideal: temperatura del agua, inclinación de la yerba y el primer cebado.",
    duration: "8 min",
    thumbnail: "https://img.youtube.com/vi/wX2NvguIM6c/hqdefault.jpg",
    category: "preparacion",
    youtubeId: "wX2NvguIM6c",
  },
  {
    id: "2",
    title: "Selección de yerba para cada momento",
    description: "Descubrí las diferencias entre yerbas con palo y sin palo, suaves e intensas, y cuál es la mejor opción según el momento del día.",
    duration: "6 min",
    thumbnail: "https://img.youtube.com/vi/eRkM2nkrA2E/hqdefault.jpg",
    category: "seleccion",
    youtubeId: "eRkM2nkrA2E",
  },
  {
    id: "3",
    title: "Cómo curar un mate de calabaza",
    description: "El proceso de curado es esencial para que tu mate dure años. Te explicamos paso a paso cómo hacerlo correctamente.",
    duration: "10 min",
    thumbnail: "https://img.youtube.com/vi/TcCZSNIZTXY/hqdefault.jpg",
    category: "cuidado",
    youtubeId: "TcCZSNIZTXY",
  },
  {
    id: "4",
    title: "Historia y cultura del mate",
    description: "Un recorrido por los orígenes del mate, su importancia cultural en Argentina y Uruguay, y cómo se convirtió en símbolo de identidad.",
    duration: "12 min",
    thumbnail: "https://img.youtube.com/vi/aj_LEvhRC5k/hqdefault.jpg",
    category: "historia",
    youtubeId: "aj_LEvhRC5k",
  },
  {
    id: "5",
    title: "Tipos de bombillas y cómo elegir",
    description: "Conocé las diferencias entre bombillas de alpaca, acero y madera, con filtro recto o en espiral. ¿Cuál va con tu mate?",
    duration: "7 min",
    thumbnail: "https://img.youtube.com/vi/FyaxYx7nj6c/hqdefault.jpg",
    category: "seleccion",
    youtubeId: "FyaxYx7nj6c",
  },
  {
    id: "6",
    title: "Mate en verano: tereré y fríos",
    description: "Te enseñamos a preparar tereré paraguayo y mate frío con jugo, opciones refrescantes para los días de calor.",
    duration: "5 min",
    thumbnail: "https://img.youtube.com/vi/zmy-JcbDoZ0/hqdefault.jpg",
    category: "preparacion",
    youtubeId: "zmy-JcbDoZ0",
  },
];

export const TUTORIAL_CATEGORY_LABELS: Record<string, string> = {
  preparacion: "Preparación",
  seleccion: "Selección",
  cuidado: "Cuidado",
  historia: "Historia",
};
