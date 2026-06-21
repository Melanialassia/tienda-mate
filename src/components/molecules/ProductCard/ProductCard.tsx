import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProductTag } from "@/components/atoms";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300">
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
      <CardContent className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-mate-800 leading-tight">
            {product.name}
          </h3>
          {product.weight && (
            <span className="text-xs text-muted-foreground">{product.weight}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-heading text-xl font-bold text-mate-800">
            ${product.price.toLocaleString("es-AR")}
          </span>
          <Button size="sm" className="bg-mate-800 text-cream hover:bg-mate-700 transition-colors">
            Agregar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
