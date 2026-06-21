export type TutorialCategory = "preparacion" | "seleccion" | "cuidado" | "historia";

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: TutorialCategory;
  youtubeId?: string;
}
