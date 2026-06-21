import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageLayout } from "@/components/templates";
import { PageHero, ContactForm } from "@/components/organisms";
import { SectionTitle } from "@/components/atoms";
import { CONTACT_INFO } from "@/constants";

export const metadata: Metadata = {
  title: "Contacto — El Mate",
  description: "Ponete en contacto con nosotros.",
};

const INFO_ITEMS = [
  { Icon: MapPin, label: "Dirección", value: CONTACT_INFO.address },
  { Icon: Phone, label: "Teléfono", value: CONTACT_INFO.phone },
  { Icon: Mail, label: "Email", value: CONTACT_INFO.email },
  { Icon: Clock, label: "Horarios", value: CONTACT_INFO.hours },
];

export default function ContactoPage() {
  return (
    <PageLayout>
      <PageHero
        title="Contacto"
        subtitle="Estamos para ayudarte. Escribinos o visitanos."
        image="https://images.unsplash.com/photo-1675000958126-0dd0ebb6ae33?w=1400&q=80"
      />

      <section className="section-padding bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <SectionTitle
                title="¿Cómo encontrarnos?"
                subtitle="Visitanos o escribinos por cualquiera de estos medios."
              />
              <ul className="flex flex-col gap-6 mt-8">
                {INFO_ITEMS.map(({ Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-mate-800 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-mate-800 text-sm">{label}</p>
                      <p className="text-muted-foreground text-sm">{value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionTitle title="Envianos un mensaje" />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
