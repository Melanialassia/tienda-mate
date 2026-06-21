import { create } from "zustand";

interface FilterState {
  productCategory: string;
  tutorialCategory: string;
  menuCategory: string;
  setProductCategory: (category: string) => void;
  setTutorialCategory: (category: string) => void;
  setMenuCategory: (category: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  productCategory: "all",
  tutorialCategory: "all",
  menuCategory: "all",
  setProductCategory: (category) => set({ productCategory: category }),
  setTutorialCategory: (category) => set({ tutorialCategory: category }),
  setMenuCategory: (category) => set({ menuCategory: category }),
}));
