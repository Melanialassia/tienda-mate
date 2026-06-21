import type { Metadata } from "next";
import { PageLayout } from "@/components/templates";
import { PageHero, WorkForm } from "@/components/organisms";
import { SectionTitle } from "@/components/atoms";
import { BenefitCard, PositionCard } from "@/components/molecules";
import { WORK_BENEFITS } from "@/constants";
import type { WorkPosition } from "@/types";

export const metadata: Metadata = {
  title: "Trabajá con Nosotros — El Mate",
  description: "Sumate al equipo de El Mate y crecé con nosotros.",
};

const POSITIONS: WorkPosition[] = [
  {
    id: "p1",
    title: "Barista / Cebador",
    location: "Buenos Aires",
    type: "full-time",
    description: "Buscamos apasionados del mate para atender nuestra barra. Experiencia en preparación de bebidas valorada.",
  },
  {
    id: "p2",
    title: "Asesor de Ventas",
    location: "Rosario",
    type: "part-time",
    description: "Asesoramiento personalizado a clientes en tienda. Conocimiento de productos de yerba y accesorios.",
  },
  {
    id: "p3",
    title: "Community Manager",
    location: "Remoto",
    type: "freelance",
    description: "Gestión de redes sociales y contenido. Pasión por la cultura del mate y creatividad para comunicarla.",
  },
];

export default function TrabajaPage() {
  return (
    <PageLayout>
      <PageHero
        title="Trabajá con Nosotros"
        subtitle="Formá parte del equipo que lleva el mate a todo el país."
        image="https://images.unsplash.com/photo-1675001077145-890585f3c151?w=1400&q=80"
      />

      <section className="section-padding bg-mate-800">
        <div className="section-container">
          <SectionTitle title="Beneficios" subtitle="Porque tu bienestar también importa." centered light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {WORK_BENEFITS.map((b) => (
              <BenefitCard key={b.id} benefit={b} light />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="section-container">
          <SectionTitle title="Posiciones Abiertas" subtitle="Encontrá el lugar que se adapta a tu perfil." />
          <div className="flex flex-col gap-4 mt-8">
            {POSITIONS.map((pos) => (
              <PositionCard key={pos.id} position={pos} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="max-w-2xl">
            <SectionTitle title="Postulate" subtitle="Completá el formulario y nos ponemos en contacto." />
            <div className="mt-8">
              <WorkForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
