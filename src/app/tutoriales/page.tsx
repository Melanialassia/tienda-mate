import type { Metadata } from "next";
import { PageLayout } from "@/components/templates";
import { PageHero, TutorialGrid } from "@/components/organisms";

export const metadata: Metadata = {
  title: "Tutoriales — El Mate",
  description: "Aprendé todo sobre el mate: cómo cebarlo, qué yerba elegir y mucho más.",
};

export default function TutorialesPage() {
  return (
    <PageLayout>
      <PageHero
        title="Tutoriales"
        subtitle="Todo lo que necesitás saber para disfrutar el mate como un experto."
        image="https://images.unsplash.com/photo-1675001077188-809370ce3279?w=1400&q=80"
      />
      <section className="section-padding bg-cream">
        <div className="section-container">
          <TutorialGrid />
        </div>
      </section>
    </PageLayout>
  );
}
