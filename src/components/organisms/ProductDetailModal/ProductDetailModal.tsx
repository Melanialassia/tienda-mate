"use client";
import { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Weight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductTag } from "@/components/atoms";
import { PRODUCT_CATEGORY_LABELS } from "@/constants";
import type { Product } from "@/types";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        {/* Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl bg-cream-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-mate-900/70 hover:bg-mate-900 text-cream flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
          {product.tag && (
            <div className="absolute top-4 left-4">
              <ProductTag tag={product.tag} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-mate-600 text-mate-700 text-xs">
              {PRODUCT_CATEGORY_LABELS[product.category] ?? product.category}
            </Badge>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-mate-800">
            {product.name}
          </h2>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {product.weight && (
              <span className="flex items-center gap-1.5">
                <Weight size={14} className="text-gold-600" />
                {product.weight}
              </span>
            )}
            {product.origin && (
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-gold-600" />
                {product.origin}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="gold-divider" />

          {/* Description */}
          <div className="flex flex-col gap-3">
            <p className="text-base text-foreground leading-relaxed">{product.description}</p>
            {product.details && (
              <p className="text-sm text-muted-foreground leading-relaxed">{product.details}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
