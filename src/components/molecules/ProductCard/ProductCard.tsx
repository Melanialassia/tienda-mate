import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductTag } from "@/components/atoms";
import { PRODUCT_CATEGORY_LABELS } from "@/constants";
import type { Product } from "@/types";
import { ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left"
      aria-label={`Ver información de ${product.name}`}
    >
      <Card className="overflow-hidden border-border group-hover:border-gold-600 group-hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative h-52 overflow-hidden bg-cream-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.tag && (
            <div className="absolute top-3 left-3">
              <ProductTag tag={product.tag} />
            </div>
          )}
        </div>
        <CardContent className="p-5 flex flex-col gap-2">
          <Badge variant="outline" className="w-fit text-xs border-mate-600 text-mate-700">
            {PRODUCT_CATEGORY_LABELS[product.category] ?? product.category}
          </Badge>
          <div>
            <h3 className="font-heading text-lg font-semibold text-mate-800 leading-tight group-hover:text-gold-700 transition-colors">
              {product.name}
            </h3>
            {product.weight && (
              <span className="text-xs text-muted-foreground">{product.weight}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <span className="mt-2 flex items-center gap-1 text-xs font-semibold text-gold-700 group-hover:gap-2 transition-all">
            Ver más <ChevronRight size={14} />
          </span>
        </CardContent>
      </Card>
    </button>
  );
}
