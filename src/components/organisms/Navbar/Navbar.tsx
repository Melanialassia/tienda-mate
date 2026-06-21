"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atoms";
import { NAV_ITEMS } from "@/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-mate-800 text-cream sticky top-0 z-50 shadow-md">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          <Logo light />

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    pathname === item.href
                      ? "text-gold-400 bg-mate-900/40"
                      : "text-cream hover:text-gold-400 hover:bg-mate-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded text-cream hover:text-gold-400 transition-colors"
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden bg-mate-900 border-t border-mate-700">
          <ul className="section-container flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded transition-colors ${
                    pathname === item.href
                      ? "text-gold-400"
                      : "text-cream hover:text-gold-400"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
