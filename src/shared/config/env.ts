/**
 * API va sayt konfiguratsiyasi.
 *
 * NEXT_PUBLIC_API_URL — backend endpointlari uchun bazaviy URL.
 * (eski kod: https://myrobo.adxamov.uz/)
 */
export const API_URL =
  process.env.VITE_BASE_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  "https://myrobo.adxamov.uz/";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://myrobo.uz";

export const API_VERSION = "";
