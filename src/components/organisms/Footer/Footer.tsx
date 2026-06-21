import Link from "next/link";
import { Camera, Globe, CirclePlay, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/atoms";
import { NAV_ITEMS, CONTACT_INFO } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-mate-900 text-cream mt-auto p-5">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-5">
          <div className="flex flex-col gap-4">
            <Logo light />
            <p className="text-sm text-mate-200 leading-relaxed max-w-xs">
              Tu tienda de mate de confianza. Yerbas, mates, bombillas y accesorios seleccionados con pasión.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-mate-700 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Camera size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-mate-700 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Globe size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-mate-700 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <CirclePlay size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-base font-semibold text-gold-400 mb-4">Páginas</h4>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-mate-200 hover:text-gold-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-base font-semibold text-gold-400 mb-4">Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-mate-200">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold-400" />
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-mate-200">
                <Phone size={14} className="flex-shrink-0 text-gold-400" />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-mate-200">
                <Mail size={14} className="flex-shrink-0 text-gold-400" />
                {CONTACT_INFO.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-mate-700 py-4">
        <p className="section-container text-center text-xs text-mate-200">
          © {new Date().getFullYear()} El Mate — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
