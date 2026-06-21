import { Badge } from "@/components/ui/badge";
import type { MenuItem } from "@/types";

interface MenuItemCardProps {
  item: MenuItem;
}

const TAG_STYLE: Record<string, string> = {
  nuevo: "bg-mate-600 text-white",
  popular: "bg-gold-600 text-mate-900",
  especial: "bg-mate-900 text-cream",
};

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-border last:border-0 group">
      <div className="flex flex-col gap-1 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-heading text-base font-semibold text-mate-800 group-hover:text-gold-700 transition-colors">
            {item.name}
          </h4>
          {item.tag && (
            <Badge className={`text-xs ${TAG_STYLE[item.tag]}`}>{item.tag}</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
      <span className="font-heading text-lg font-bold text-mate-800 whitespace-nowrap">
        ${item.price.toLocaleString("es-AR")}
      </span>
    </div>
  );
}
