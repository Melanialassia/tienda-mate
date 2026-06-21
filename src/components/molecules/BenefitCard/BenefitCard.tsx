import { Coffee, Users, TrendingUp, Heart, Award, BookOpen, ShoppingBag, BarChart2 } from "lucide-react";
import type { Benefit } from "@/types";

type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;

const ICONS: Record<string, LucideIcon> = {
  Coffee, Users, TrendingUp, Heart, Award, BookOpen, ShoppingBag, BarChart2,
};

interface BenefitCardProps {
  benefit: Benefit;
  light?: boolean;
}

export function BenefitCard({ benefit, light = false }: BenefitCardProps) {
  const Icon = ICONS[benefit.icon] ?? Coffee;
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6">
      <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center flex-shrink-0">
        <Icon size={28} className="text-mate-900" />
      </div>
      <div>
        <h3 className={`font-heading text-lg font-semibold mb-2 ${light ? "text-cream" : "text-mate-800"}`}>
          {benefit.title}
        </h3>
        <p className={`text-sm leading-relaxed ${light ? "text-mate-200" : "text-muted-foreground"}`}>
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
