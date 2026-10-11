/**
 * Kurs modellar.
 */

export interface Course {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  is_free: boolean;
  price?: string | null;
  price_rub?: string | null;
  duration?: string | null;
  image?: string | null;
  is_published?: boolean;
  course_type?: number;
  published_at?: string | null;
  video_url?: string | null;
  likes?: number;
}

export interface CourseType {
  id: number;
  title: string;
  slug: string;
  image?: string | null;
}

export interface CourseApiData {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Course[];
}

export interface CourseDetail {
  id: number;
  title: string;
  slug: string;
  description: string;
  is_free: boolean;
  price?: string | null;
  price_rub?: string | null;
  duration?: string | null;
  image?: string | null;
  is_published?: boolean;
  course_type?: number;
  likes?: number;
  teacher?: number;
  teacher_name?: string;
  published_at?: string | null;
}
