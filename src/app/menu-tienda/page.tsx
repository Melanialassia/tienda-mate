import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/templates";
import { MenuGallery } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Nuestro Menú — El Mate",
  description: "Bebidas, comidas y postres en nuestra tienda café.",
};

export default function MenuPage() {
  return (
    <PageLayout>
      {/* Hero intro — estilo tiendadecafe */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-mate-900">
        <Image
          src="https://images.unsplash.com/photo-1675000958126-0dd0ebb6ae33?w=1600&q=80"
          alt="Nuestro Menú"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mate-900/85 via-mate-900/30 to-transparent" />
        <div className="relative z-10 section-container pb-16 md:pb-24">
          <p className="text-cream/70 text-xl md:text-2xl font-body font-light tracking-[0.25em] uppercase">
            SOMOS MATE
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream leading-none mt-1">
            Y MUCHO MÁS
          </h1>
          <p className="text-cream/80 my-4 text-base md:text-lg max-w-md font-body">
            Vení a disfrutar nuestra selección, perfecta para cada momento de tu
            día.
          </p>
        </div>
      </section>

      {/* Galería fotográfica — 2 columnas */}
      <section className="py-10 md:py-14 bg-cream">
        <div className="section-container">
          <MenuGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mate-900 text-center">
        <div className="section-container">
          <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-body mb-3">
            VISITANOS
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-2">
            Conocé todas nuestras opciones
          </h2>
          <div className="gold-divider-center" />
          <p className="text-mate-200 mt-4 max-w-md mx-auto text-sm md:text-base font-body">
            Consultanos en el local o por nuestras redes para conocer el menú
            completo y nuestras propuestas del día.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
