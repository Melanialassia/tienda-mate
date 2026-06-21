import { MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { WorkPosition } from "@/types";

interface PositionCardProps {
  position: WorkPosition;
}

const TYPE_LABEL: Record<string, string> = {
  "full-time": "Tiempo completo",
  "part-time": "Medio tiempo",
  freelance: "Freelance",
};

export function PositionCard({ position }: PositionCardProps) {
  return (
    <div className="border border-border rounded-lg p-5 hover:border-gold-600 hover:shadow-md transition-all duration-200 bg-card">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <h3 className="font-heading text-lg font-semibold text-mate-800">{position.title}</h3>
        <Badge variant="outline" className="border-gold-600 text-gold-700 text-xs">
          {TYPE_LABEL[position.type]}
        </Badge>
      </div>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
        <span className="flex items-center gap-1">
          <MapPin size={12} /> {position.location}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {TYPE_LABEL[position.type]}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{position.description}</p>
    </div>
  );
}
