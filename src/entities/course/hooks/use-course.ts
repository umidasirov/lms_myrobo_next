/**
 * Bitta kurs uchun hook.
 */

import { useQuery } from "@tanstack/react-query";
import { fetchCourseDetail } from "../api/course-api";
import { CourseDetail } from "../model/types";

export const useCourse = (slug: string) =>
  useQuery<CourseDetail, Error>({
    queryKey: ["course", slug],
    queryFn: () => fetchCourseDetail(slug),
    enabled: !!slug,
  });
