import type { StaticImageData } from "next/image";

export type Slide = {
  id: number;
  badge: string;
  title: string;
  mentor: string;
  description: string;
  image: StaticImageData;
  rating: string;
};
