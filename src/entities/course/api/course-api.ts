/**
 * Kurslar API chaqiruvari.
 */

import { Course, CourseType, CourseDetail, CourseApiData } from "../model/types";
import api from "@/shared/api/client";
import { results } from "@/shared/lib/pagination";

const CATALOG_URL = "courses/courses/";
const TYPES_URL = "courses/course-types/";
const DETAIL_URL = "courses/courses/";

export const fetchCourses = async (page = 1): Promise<CourseApiData> => {
  const res = await api.get<unknown>(
    `${CATALOG_URL}?page=${page}&limit=12&ordering=title`
  );
  return res.data as CourseApiData;
};

export const fetchCourseTypes = async (): Promise<CourseType[]> => {
  const res = await api.get<unknown>(TYPES_URL);
  return results(res.data);
};

export const fetchCourseDetail = async (slug: string): Promise<CourseDetail> => {
  const res = await api.get<CourseDetail>(`${DETAIL_URL}${slug}/`);
  return res.data;
};
