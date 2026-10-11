/**
 * O'qituvchilar API chaqiruvlari.
 */

import { Teacher, TeacherApiData } from "../model/types";
import api from "@/shared/api/client";

const TEACHERS_URL = "teachers/teachers/";

export const fetchTeachers = async (page = 1): Promise<TeacherApiData> => {
  const res = await api.get<unknown>(`${TEACHERS_URL}?page=${page}&limit=10`);
  return res.data as TeacherApiData;
};

export const fetchTeacherDetail = async (slug: string): Promise<Teacher> => {
  const res = await api.get<Teacher>(`${TEACHERS_URL}${slug}/`);
  return res.data;
};
