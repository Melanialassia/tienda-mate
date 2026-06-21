import type { Metadata } from "next";
import { PageLayout } from "@/components/templates";
import { PageHero, MenuSection } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Nuestro Menú — El Mate",
  description: "Bebidas, comidas y postres en nuestra tienda café.",
};

export default function MenuPage() {
  return (
    <PageLayout>
      <PageHero
        title="Nuestro Menú"
        subtitle="Bebidas calientes y frías, algo rico para acompañar y los mejores postres."
        image="https://images.unsplash.com/photo-1675000958126-0dd0ebb6ae33?w=1400&q=80"
      />
      <section className="section-padding bg-cream">
        <div className="section-container">
          <MenuSection />
        </div>
      </section>
    </PageLayout>
  );
}
