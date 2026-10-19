import { useMemo } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import * as contentId from "./content";
import * as contentEn from "./content.en";

const bundles = {
  id: contentId,
  en: contentEn,
} as const;

export function useSiteData() {
  const { locale } = useLanguage();
  return useMemo(() => bundles[locale], [locale]);
}
