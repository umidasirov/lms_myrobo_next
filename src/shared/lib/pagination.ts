export const results = <T>(value: unknown): T[] => {
  if (Array.isArray(value)) return value as T[];

  if (value && typeof value === "object" && "results" in value) {
    const maybeResults = (value as { results?: unknown }).results;
    return Array.isArray(maybeResults) ? (maybeResults as T[]) : [];
  }

  return [];
};
