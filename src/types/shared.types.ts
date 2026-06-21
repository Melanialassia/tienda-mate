export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}

export interface WorkPosition {
  id: string;
  title: string;
  location: string;
  type: "full-time" | "part-time" | "freelance";
  description: string;
}
