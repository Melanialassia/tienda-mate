import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { PageLayout } from "@/components/templates";
import { Hero } from "@/components/organisms";
import { SectionTitle } from "@/components/atoms";
import { ProductCard, BenefitCard } from "@/components/molecules";
import { PRODUCTS, WORK_BENEFITS } from "@/constants";

const FEATURED = PRODUCTS.filter((p) => p.tag === "destacado").slice(0, 3);

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />

      <section className="section-padding bg-cream-dark">
        <div className="section-container">
          <SectionTitle
            title="Por qué elegirnos"
            subtitle="Más de 10 años acompañando la cultura del mate en Argentina."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {WORK_BENEFITS.map((b) => (
              <BenefitCard key={b.id} benefit={b} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionTitle
              title="Productos Destacados"
              subtitle="Lo más elegido por nuestra comunidad."
            />
            <Link
              href="/tienda"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-mate-800 text-mate-800 hover:bg-mate-800 hover:text-cream"
              )}
            >
              Ver todos
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-mate-800">
        <Image
          src="https://images.unsplash.com/photo-1646233487430-cb90b0d61bf2?w=1400&q=80"
          alt="Franquicias"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative z-10 section-container text-center">
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-body">
            Oportunidad de negocio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mt-3 mb-4">
            Abrí tu propia tienda de mate
          </h2>
          <p className="text-mate-200 max-w-lg mx-auto mb-8">
            Sumate a nuestra red de franquicias y emprendé con el respaldo de una marca reconocida.
          </p>
          <Link
            href="/franquicias"
            className={cn(buttonVariants({ size: "lg" }), "bg-gold-600 text-mate-900 hover:bg-gold-500 font-semibold")}
          >
            Quiero saber más
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
