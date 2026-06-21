import Image from "next/image";
import { SectionTitle } from "@/components/atoms";
import type { PageHeroProps } from "./PageHero.types";

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1400&q=80";

export function PageHero({ title, subtitle, image = DEFAULT_IMAGE }: PageHeroProps) {
  return (
    <section className="relative h-56 md:h-72 flex items-center overflow-hidden bg-mate-800">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-mate-900/80 to-mate-800/60" />
      <div className="relative z-10 section-container">
        <SectionTitle title={title} subtitle={subtitle} light />
      </div>
    </section>
  );
}
