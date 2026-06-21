import Image from "next/image";

interface GalleryPhoto {
  id: string;
  image: string;
  title?: string;
  subtitle?: string;
  heightClass: string;
}

const LEFT_PHOTOS: GalleryPhoto[] = [
  {
    id: "l1",
    image:
      "https://images.unsplash.com/photo-1585744259332-111384f5def9?w=1200&q=80",
    title: "NUESTROS MATES",
    subtitle: "PARA CADA MOMENTO DE TU DÍA",
    heightClass: "h-72",
  },
  {
    id: "l2",
    image:
      "https://images.unsplash.com/photo-1675001077188-809370ce3279?w=800&q=80",
    heightClass: "h-72",
  },
  {
    id: "l3",
    image:
      "https://images.unsplash.com/photo-1646233487430-cb90b0d61bf2?w=800&q=80",
    heightClass: "h-[460px]",
  },
  {
    id: "l4",
    image:
      "https://images.unsplash.com/photo-1675001077145-890585f3c151?w=800&q=80",
    heightClass: "h-72",
  },
  {
    id: "l5",
    image:
      "https://images.unsplash.com/photo-1582301172000-1b72abddd10b?w=800&q=80",
    heightClass: "h-72",
  },
];

const RIGHT_PHOTOS: GalleryPhoto[] = [
  {
    id: "r1",
    image:
      "https://images.unsplash.com/photo-1675000958126-0dd0ebb6ae33?w=800&q=80",
    title: "ALGO RICO",
    subtitle: "PARA ACOMPAÑAR TU MATE",
    heightClass: "h-[460px]",
  },
  {
    id: "r2",
    image:
      "https://images.unsplash.com/photo-1609975031156-a626cd7001ef?w=800&q=80",
    heightClass: "h-72",
  },
  {
    id: "r3",
    image:
      "https://images.unsplash.com/photo-1675001077145-890585f3c151?w=800&q=80",
    heightClass: "h-72",
  },
  {
    id: "r4",
    image:
      "https://images.unsplash.com/photo-1675001077188-809370ce3279?w=800&q=80",
    title: "TERERÉ Y FRÍOS",
    subtitle: "EN CADA MOMENTO DE TU DÍA",
    heightClass: "h-72",
  },
  {
    id: "r5",
    image:
      "https://images.unsplash.com/photo-1585744259332-111384f5def9?w=800&q=80",
    heightClass: "h-[460px]",
  },
];

function BannerPhoto({ photo }: { photo: GalleryPhoto }) {
  return (
    <div className={`relative overflow-hidden group ${photo.heightClass}`}>
      <Image
        src={photo.image}
        alt={photo.title ?? "El Mate"}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

      {photo.title && (
        <div className="absolute bottom-6 left-6 text-left">
          {photo.subtitle && (
            <p className="text-cream/80 text-xs tracking-[0.25em] uppercase font-body mb-1">
              {photo.subtitle}
            </p>
          )}
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream drop-shadow-lg">
            {photo.title}
          </h3>
        </div>
      )}
    </div>
  );
}

export function MenuGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-8">
        {LEFT_PHOTOS.map((photo) => (
          <BannerPhoto key={photo.id} photo={photo} />
        ))}
      </div>
      <div className="flex flex-col gap-8">
        {RIGHT_PHOTOS.map((photo) => (
          <BannerPhoto key={photo.id} photo={photo} />
        ))}
      </div>
      <a
        href="/carta-el-mate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-mate-900 font-semibold text-sm px-6 py-3 rounded transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <line x1="9" y1="14" x2="15" y2="14" />
        </svg>
        Ver Carta Completa (PDF)
      </a>
    </div>
  );
}
