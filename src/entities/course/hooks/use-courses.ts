/**
 * Kurslar ro'yxati uchun TanStack Query hook.
 */

import { useQuery } from "@tanstack/react-query";

import { fetchCourses } from "../api/course-api";
import { CourseApiData } from "../model/types";

export const useCourses = (page = 1, limit = 12) =>
  useQuery<CourseApiData, Error>({
    queryKey: ["courses", page],
    queryFn: () => fetchCourses(page, limit),
  });

export const useCourseTypes = () =>
  useQuery<{ types: unknown[]; count: number }>({
    queryKey: ["course_types"],
    queryFn: async () => {
      const data = await fetchCourses(1, 20);
      return { types: data.results, count: data.count };
    },
  });
