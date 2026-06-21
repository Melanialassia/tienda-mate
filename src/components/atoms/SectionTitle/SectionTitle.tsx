import type { SectionTitleProps } from "./SectionTitle.types";

export function SectionTitle({ title, subtitle, centered = false, light = false }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-3 ${light ? "text-cream" : "text-mate-800"}`}>
        {title}
      </h2>
      <div className={centered ? "gold-divider-center" : "gold-divider"} />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-mate-200" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
