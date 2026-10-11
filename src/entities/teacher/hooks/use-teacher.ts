/**
 * Bitta o'qituvchi uchun hook.
 */

import { useQuery } from "@tanstack/react-query";
import { fetchTeacherDetail } from "../api/teacher-api";
import { Teacher } from "../model/types";

export const useTeacher = (slug: string) =>
  useQuery<Teacher, Error>({
    queryKey: ["teacher", slug],
    queryFn: () => fetchTeacherDetail(slug),
    enabled: !!slug,
  });
