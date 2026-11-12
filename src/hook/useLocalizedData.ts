import { useTranslation } from "react-i18next";
import { contentEn } from "../i18n/locales/en/data";
import { content as idContent } from "../i18n/locales/id/data";

type TranslationMap = Record<string, any>;

export function useLocalizedData() {
  const { i18n } = useTranslation();

  const isEnglish = i18n.resolvedLanguage?.startsWith("en") ?? false;

  if (!isEnglish) {
    return {
      ...idContent,
      activityTypes: {
        pelatihan: "Pelatihan",
        kasus: "Pendampingan Kasus",
        workshop: "Workshop",
        sosialisasi: "Sosialisasi",
        event: "Acara",
        diskusi: "Diskusi",
        evaluasi: "Evaluasi",
        networking: "Jejaring",
        kunjungan: "Kunjungan",
      },
    };
  }

  const translations = contentEn as unknown as {
    impactStats: TranslationMap[];
    kbgoCategories: TranslationMap;
    programs: TranslationMap;
    activityTypes: TranslationMap;
    activityFallback: TranslationMap;
    activities: TranslationMap;
    publications: TranslationMap;
  };

  return {
    impactStats: idContent.impactStats.map((item, index) => ({
      ...item,
      ...(translations.impactStats[index] ?? {}),
    })),

    kbgoCategories: idContent.kbgoCategories.map((item) => {
      const translated = translations.kbgoCategories[item.id];

      if (!translated) return item;

      return {
        ...item,
        ...translated,
      };
    }),

    programs: idContent.programs.map((item) => {
      const translated = translations.programs[item.id];

      if (!translated) return item;

      return {
        ...item,
        ...translated,
      };
    }),

    programActivities: idContent.programActivities.map((item) => {
      const translated = translations.activities[item.id];

      const photos = item.photos.map((photo, index) => ({
        ...photo,
        caption:
          translated?.captions?.[index] ??
          (photo.caption === "Foto utama kegiatan"
            ? translations.activityFallback.mainPhoto
            : photo.caption),
      }));

      return {
        ...item,
        ...translated,
        date:
          item.date === "Informasi tanggal belum tersedia"
            ? translations.activityFallback.date
            : item.date,
        location:
          item.location === "Informasi lokasi belum tersedia"
            ? translations.activityFallback.location
            : item.location,
        typeLabel: translations.activityTypes[item.typeKey] ?? item.typeKey,
        photos,
      };
    }),

    publications: idContent.publications.map((item) => ({
      ...item,
      ...(translations.publications[item.id] ?? {}),
    })),

    activityTypes: translations.activityTypes,
  };
}
