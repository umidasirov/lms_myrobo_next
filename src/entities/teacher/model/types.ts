/**
 * O'qituvchi modellar.
 */

export interface Teacher {
  id: number;
  full_name: string;
  slug: string;
  about?: string;
  image?: string | null;
  workplace?: string | null;
  students_count?: number;
  courses_count?: number;
}

export interface TeacherApiData {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Teacher[];
}
