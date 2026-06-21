import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-mate-900">
      <Image
        src="https://images.unsplash.com/photo-1585744259332-111384f5def9?w=1600&q=80"
        alt="Mate"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-mate-900/90 via-mate-900/60 to-transparent" />

      <div className="relative z-10 section-container py-20">
        <div className="max-w-xl">
          <span className="inline-block text-gold-400 text-sm tracking-[0.3em] uppercase font-body mb-4">
            Tienda &amp; Café
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
            El mate, <br />
            <span className="text-gold-400">nuestro ritual</span>
          </h1>
          <p className="text-mate-200 text-lg leading-relaxed mb-8 max-w-lg">
            Yerbas seleccionadas, mates artesanales y todo lo que necesitás para vivir la experiencia mate como se merece.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tienda"
              className={cn(buttonVariants({ size: "lg" }), "bg-gold-600 text-mate-900 hover:bg-gold-500 font-semibold")}
            >
              Ver Productos
            </Link>
            <Link
              href="/menu-tienda"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-cream text-mate-900  hover:bg-mate-800 hover:border-mate-800 hover:text-cream")}
            >
              Nuestro Menú
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
