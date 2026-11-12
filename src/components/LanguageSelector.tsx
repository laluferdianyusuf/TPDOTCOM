import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

type Language = "id" | "en";

const languageOptions: {
  code: Language;
  label: string;
  nativeName: string;
  flag: string;
}[] = [
  {
    code: "id",
    label: "Indonesia",
    nativeName: "Bahasa Indonesia",
    flag: "🇮🇩",
  },
  {
    code: "en",
    label: "English",
    nativeName: "English",
    flag: "🇬🇧",
  },
];

interface LanguageSelectorProps {
  compact?: boolean;
}

const LanguageSelector = ({ compact = false }: LanguageSelectorProps) => {
  const { i18n, t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentLanguage: Language = i18n.resolvedLanguage?.startsWith("en")
    ? "en"
    : "id";

  const selectedLanguage = languageOptions.find(
    (language) => language.code === currentLanguage,
  )!;

  const handleLanguageChange = async (language: Language) => {
    if (language === currentLanguage) {
      setIsOpen(false);
      return;
    }

    await i18n.changeLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={t("header.selectLanguage")}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={`
          group inline-flex h-10 items-center justify-center gap-2
          border border-stone-300 bg-transparent
          text-slate-700 transition-all duration-200
          hover:border-blue-800 hover:bg-white
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-blue-700
          focus-visible:ring-offset-2
          ${compact ? "px-2" : "px-2.5"}
        `}
      >
        <Languages
          size={16}
          strokeWidth={1.8}
          className="text-slate-500 transition-colors group-hover:text-blue-800"
          aria-hidden="true"
        />

        <span className="text-xs font-semibold tracking-wide">
          {selectedLanguage.code.toUpperCase()}
        </span>

        <ChevronDown
          size={13}
          className={`text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={t("header.selectLanguage")}
          className="
            absolute right-0 top-full z-[100]
            mt-2 w-56 overflow-hidden
            border border-stone-200
            bg-[#fffefa]
            shadow-xl shadow-slate-900/10
          "
        >
          <div className="border-b border-stone-100 px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {t("header.selectLanguage")}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-900">
              {selectedLanguage.nativeName}
            </p>
          </div>

          <div className="p-1.5">
            {languageOptions.map((language) => {
              const isSelected = currentLanguage === language.code;

              return (
                <button
                  key={language.code}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isSelected}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`
                    flex w-full items-center gap-3 px-3 py-2.5
                    text-left transition-colors duration-150
                    ${
                      isSelected
                        ? "bg-blue-50 text-blue-900"
                        : "text-slate-600 hover:bg-stone-100 hover:text-slate-950"
                    }
                  `}
                >
                  <span className="text-xl" aria-hidden="true">
                    {language.flag}
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-xs font-semibold">
                      {language.code === "id"
                        ? t("header.indonesian")
                        : t("header.english")}
                    </span>

                    <span className="mt-0.5 text-[10px] text-slate-400">
                      {language.code.toUpperCase()}
                    </span>
                  </span>

                  {isSelected && (
                    <Check
                      size={15}
                      className="shrink-0 text-blue-800"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
