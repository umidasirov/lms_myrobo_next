/**
 * Maqolalar API chaqiruvlari.
 */

import { Article, ArticleType, ArticleApiData } from "../model/types";
import api from "@/shared/api/client";
import { results } from "@/shared/lib/pagination";

const ARTICLES_URL = "articles/articles/";
const TYPES_URL = "articles/types/";

export const fetchArticles = async (page = 1): Promise<ArticleApiData> => {
  const res = await api.get<unknown>(`${ARTICLES_URL}?page=${page}&limit=10&ordering=-created_at`);
  return res.data as ArticleApiData;
};

export const fetchArticleTypes = async (): Promise<ArticleType[]> => {
  const res = await api.get<unknown>(TYPES_URL);
  return results(res.data);
};

export const fetchArticleDetail = async (slug: string): Promise<Article> => {
  const res = await api.get<Article>(`${ARTICLES_URL}${slug}/`);
  return res.data;
};
