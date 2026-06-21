"use client";
import { useState } from "react";
import { ProductCard } from "@/components/molecules";
import { CategoryFilter } from "@/components/molecules";
import { ProductDetailModal } from "@/components/organisms/ProductDetailModal";
import { useFilterStore } from "@/store";
import { PRODUCTS, PRODUCT_CATEGORY_LABELS } from "@/constants";
import type { Product } from "@/types";

const CATEGORIES = Object.entries(PRODUCT_CATEGORY_LABELS).map(([value, label]) => ({ value, label }));

export function ProductGrid() {
  const { productCategory, setProductCategory } = useFilterStore();
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered =
    productCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === productCategory);

  return (
    <>
      <div className="flex flex-col gap-8">
        <CategoryFilter
          categories={CATEGORIES}
          active={productCategory}
          onChange={setProductCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelected(product)}
            />
          ))}
        </div>
      </div>

      <ProductDetailModal
        product={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
