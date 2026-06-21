"use client";

interface CategoryFilterProps {
  categories: Array<{ value: string; label: string }>;
  active: string;
  onChange: (value: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {[{ value: "all", label: "Todos" }, ...categories].map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === cat.value
              ? "bg-mate-800 text-cream shadow-sm"
              : "bg-cream-dark text-mate-800 hover:bg-mate-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
