"use client";
import { TutorialCard } from "@/components/molecules";
import { CategoryFilter } from "@/components/molecules";
import { useFilterStore } from "@/store";
import { TUTORIALS, TUTORIAL_CATEGORY_LABELS } from "@/constants";

const CATEGORIES = Object.entries(TUTORIAL_CATEGORY_LABELS).map(([value, label]) => ({ value, label }));

export function TutorialGrid() {
  const { tutorialCategory, setTutorialCategory } = useFilterStore();

  const filtered =
    tutorialCategory === "all"
      ? TUTORIALS
      : TUTORIALS.filter((t) => t.category === tutorialCategory);

  return (
    <div className="flex flex-col gap-8">
      <CategoryFilter
        categories={CATEGORIES}
        active={tutorialCategory}
        onChange={setTutorialCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}
