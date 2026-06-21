"use client";
import { MenuItemCard } from "@/components/molecules";
import { CategoryFilter } from "@/components/molecules";
import { useFilterStore } from "@/store";
import { MENU_ITEMS, MENU_CATEGORY_LABELS } from "@/constants";
import type { MenuItem } from "@/types";

const CATEGORIES = Object.entries(MENU_CATEGORY_LABELS).map(([value, label]) => ({ value, label }));

export function MenuSection() {
  const { menuCategory, setMenuCategory } = useFilterStore();

  const filtered =
    menuCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === menuCategory);

  const grouped = filtered.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-8">
      <CategoryFilter
        categories={CATEGORIES}
        active={menuCategory}
        onChange={setMenuCategory}
      />
      <div className="flex flex-col gap-10">
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat}>
            <h3 className="font-heading text-2xl font-bold text-mate-800 mb-2">
              {MENU_CATEGORY_LABELS[cat]}
            </h3>
            <div className="gold-divider mb-4" />
            <div>
              {items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
