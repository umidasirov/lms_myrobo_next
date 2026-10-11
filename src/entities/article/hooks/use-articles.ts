/**
 * Maqolalar ro'yxati uchun TanStack Query hook.
 */

import { useQuery } from "@tanstack/react-query";

import { fetchArticles } from "../api/article-api";
import { ArticleApiData } from "../model/types";

export const useArticles = (page = 1, limit = 10) =>
  useQuery<ArticleApiData, Error>({
    queryKey: ["articles", page],
    queryFn: () => fetchArticles(page, limit),
  });
