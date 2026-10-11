/**
 * O'qituvchilar ro'yxati uchun hook.
 */

import { useQuery } from "@tanstack/react-query";
import { fetchTeachers } from "../api/teacher-api";
import { TeacherApiData } from "../model/types";

export const useTeachers = (page = 1, limit = 10) =>
  useQuery<TeacherApiData, Error>({
    queryKey: ["teachers", page],
    queryFn: () => fetchTeachers(page, limit),
  });
