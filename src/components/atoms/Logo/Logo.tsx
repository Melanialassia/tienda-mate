import Link from "next/link";

interface LogoProps {
  light?: boolean;
}

export function Logo({ light = false }: LogoProps) {
  return (
    <Link href="/" className="flex flex-col leading-none group">
      <span
        className={`font-heading text-2xl font-bold transition-colors group-hover:text-gold-600 ${
          light ? "text-cream" : "text-mate-800"
        }`}
      >
        El Mate
      </span>
      <span className="text-xs tracking-[0.25em] uppercase text-gold-600 font-body">
        tienda &amp; café
      </span>
    </Link>
  );
}
