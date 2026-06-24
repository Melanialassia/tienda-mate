import { Badge } from "@/components/atoms/ui/badge";
import type { ProductTagProps } from "./ProductTag.types";

const TAG_CONFIG = {
  nuevo: {
    label: "Nuevo",
    className: "bg-mate-600 text-white hover:bg-mate-700",
  },
  destacado: {
    label: "Destacado",
    className: "bg-gold-600 text-mate-900 hover:bg-gold-500",
  },
  recomendado: {
    label: "Recomendado",
    className: "bg-mate-800 text-cream hover:bg-mate-700",
  },
};

export function ProductTag({ tag }: ProductTagProps) {
  const config = TAG_CONFIG[tag];
  return (
    <Badge className={`text-xs font-semibold ${config.className}`}>
      {config.label}
    </Badge>
  );
}
