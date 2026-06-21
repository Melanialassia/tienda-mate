import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import type { Tutorial } from "@/types";
import { TUTORIAL_CATEGORY_LABELS } from "@/constants";

interface TutorialCardProps {
  tutorial: Tutorial;
}

export function TutorialCard({ tutorial }: TutorialCardProps) {
  const cardContent = (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative h-48 overflow-hidden bg-mate-900">
        <Image
          src={tutorial.thumbnail}
          alt={tutorial.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-16 h-16 rounded-full bg-gold-600 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" width="22" height="22" className="ml-1">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-mate-900/80 text-cream text-xs px-2 py-1 rounded flex items-center gap-1">
          <Clock size={12} />
          {tutorial.duration}
        </div>
        {tutorial.youtubeId && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded font-semibold">
            YouTube
          </div>
        )}
      </div>
      <CardContent className="p-5 flex flex-col gap-2">
        <Badge variant="outline" className="w-fit text-xs border-gold-600 text-gold-700">
          {TUTORIAL_CATEGORY_LABELS[tutorial.category] ?? tutorial.category}
        </Badge>
        <h3 className="font-heading text-lg font-semibold text-mate-800 leading-tight group-hover:text-gold-700 transition-colors">
          {tutorial.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{tutorial.description}</p>
      </CardContent>
    </Card>
  );

  if (tutorial.youtubeId) {
    return (
      <a
        href={`https://www.youtube.com/watch?v=${tutorial.youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`Ver tutorial: ${tutorial.title}`}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
