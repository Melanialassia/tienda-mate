import type { Metadata } from "next";
import { PageLayout } from "@/components/templates";
import { PageHero, FranchiseForm } from "@/components/organisms";
import { SectionTitle } from "@/components/atoms";
import { BenefitCard } from "@/components/molecules";
import { FRANCHISE_BENEFITS } from "@/constants";

export const metadata: Metadata = {
  title: "Franquicias — El Mate",
  description: "Abrí tu propia tienda de mate con el respaldo de El Mate.",
};

const STEPS = [
  { num: "01", title: "Completá el formulario", desc: "Completá el formulario de interés con tus datos y zona." },
  { num: "02", title: "Reunión de evaluación", desc: "Un asesor te contactará para analizar tu proyecto juntos." },
  { num: "03", title: "Firma del contrato", desc: "Acordamos los términos y firmamos el contrato de franquicia." },
  { num: "04", title: "Apertura de tu local", desc: "Te acompañamos en la puesta en marcha hasta el día de apertura." },
];

export default function FranquiciasPage() {
  return (
    <PageLayout>
      <PageHero
        title="Franquicias"
        subtitle="Emprendé con el respaldo de una marca con 10 años en el mercado."
        image="https://images.unsplash.com/photo-1582301172000-1b72abddd10b?w=1400&q=80"
      />

      <section className="section-padding bg-cream-dark">
        <div className="section-container">
          <SectionTitle title="¿Por qué una franquicia El Mate?" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {FRANCHISE_BENEFITS.map((b) => (
              <BenefitCard key={b.id} benefit={b} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-mate-800">
        <div className="section-container">
          <SectionTitle title="El proceso" subtitle="4 pasos para abrir tu local." centered light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="font-heading text-5xl font-bold text-gold-600 mb-3">{step.num}</div>
                <h4 className="font-heading text-lg font-semibold text-cream mb-2">{step.title}</h4>
                <p className="text-sm text-mate-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="max-w-2xl">
            <SectionTitle
              title="Quiero ser franquiciado"
              subtitle="Completá el formulario y un asesor te contactará."
            />
            <div className="mt-8">
              <FranchiseForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
