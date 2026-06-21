import type { Metadata } from "next";
import { PageLayout } from "@/components/templates";
import { PageHero, ProductGrid } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Nuestra Yerba — El Mate",
  description: "Explorá nuestra selección de yerbas, mates, bombillas y accesorios.",
};

export default function TiendaPage() {
  return (
    <PageLayout>
      <PageHero
        title="Nuestra Yerba"
        subtitle="Yerbas seleccionadas, mates artesanales y todo lo que el cebador exigente necesita."
        image="https://images.unsplash.com/photo-1609975031156-a626cd7001ef?w=1400&q=80"
      />
      <section className="section-padding bg-cream">
        <div className="section-container">
          <ProductGrid />
        </div>
      </section>
    </PageLayout>
  );
}
