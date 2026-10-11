/**
 * Maqola modellar.
 */

export interface Article {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  content?: string;
  image?: string | null;
  is_published?: boolean;
  created_at?: string;
  article_type?: number;
  author_name?: string;
}

export interface ArticleType {
  id: number;
  title: string;
}

export interface ArticleApiData {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Article[];
}
