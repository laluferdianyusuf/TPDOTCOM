import type { Locale } from "./types";
import { en } from "./locales/en";
import { id } from "./locales/id";

const dictionaries = { id, en } as const;

export type TranslationKey = string;

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export function translate(locale: Locale, key: TranslationKey): string {
  const value = getByPath(dictionaries[locale], key);
  if (typeof value === "string") return value;
  if (import.meta.env.DEV) {
    console.warn(`Missing translation: [${locale}] ${key}`);
  }
  const fallback = getByPath(dictionaries.id, key);
  return typeof fallback === "string" ? fallback : key;
}

export function translateValue<T>(locale: Locale, key: TranslationKey): T {
  const value = getByPath(dictionaries[locale], key);
  if (value !== undefined) return value as T;
  const fallback = getByPath(dictionaries.id, key);
  return fallback as T;
}
