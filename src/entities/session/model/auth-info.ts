/**
 * Sessiya va o'quvchi modellar.
 */

export interface User {
  id: number;
  username: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  image?: string | null;
  balance?: string;
  locate?: string;
}

export interface AuthInfo {
  token: string | null;
  refresh: string | null;
  user: User | null;
}
