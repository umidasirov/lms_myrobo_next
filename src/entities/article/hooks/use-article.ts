/**
 * Bitta maqola uchun TanStack Query hook.
 */

import { useQuery } from "@tanstack/react-query";

import { fetchArticleDetail } from "../api/article-api";
import { Article } from "../model/types";

export const useArticle = (slug: string) =>
  useQuery<Article, Error>({
    queryKey: ["article", slug],
    queryFn: () => fetchArticleDetail(slug),
    enabled: !!slug,
  });
