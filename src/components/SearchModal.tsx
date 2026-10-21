import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CornerDownLeft,
  FileText,
  PhoneCall,
  Search,
  Shield,
  Users,
  X,
} from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import {
  ARTICLES,
  EMERGENCY_HOTLINES,
  KBGO_CATEGORIES,
  PROGRAMS,
  PROGRAM_ACTIVITIES,
  PUBLICATIONS,
  TEAM_MEMBERS,
} from "../data/content";

import { PageRoute } from "../types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

type SearchResult = {
  id: string;
  title: string;
  category: string;
  snippet: string;
  route: PageRoute;
  type:
    | "article"
    | "publication"
    | "kbgo"
    | "program"
    | "activity"
    | "team"
    | "hotline";
  keywords: string;
};

const QUICK_SEARCHES = [
  "NCII",
  "Doxing",
  "Sextortion",
  "UU TPKS",
  "Keamanan digital",
  "Laporan 2024",
];

const SEARCH_ALIASES: Record<string, string[]> = {
  ncii: [
    "revenge porn",
    "non consensual intimate imagery",
    "konten intim",
    "foto intim",
    "video intim",
    "foto pribadi",
    "ancaman penyebaran foto",
  ],
  doxing: [
    "doxxing",
    "kebocoran data",
    "data pribadi",
    "privasi digital",
    "alamat rumah",
    "nomor telepon",
  ],
  sextortion: [
    "pemerasan seksual",
    "pemerasan konten intim",
    "ancaman sebar foto",
    "ancaman video intim",
    "pemerasan online",
  ],
  kbgo: [
    "kekerasan berbasis gender online",
    "kekerasan digital",
    "kekerasan siber",
    "pelecehan online",
  ],
  "keamanan digital": [
    "keamanan siber",
    "perlindungan akun",
    "privasi online",
    "keselamatan digital",
    "audit keamanan",
  ],
  "uu tpks": [
    "tindak pidana kekerasan seksual",
    "kekerasan seksual berbasis elektronik",
    "ksbe",
    "hukum digital",
  ],
  deepfake: [
    "ai",
    "kecerdasan buatan",
    "manipulasi gambar",
    "pornografi sintetis",
    "gambar palsu",
  ],
  cyberstalking: [
    "penguntitan siber",
    "stalkerware",
    "pelacakan lokasi",
    "pelacakan gps",
  ],
  impersonasi: [
    "akun palsu",
    "pemalsuan identitas",
    "identity theft",
    "akun tiruan",
  ],
  "laporan 2024": [
    "laporan tahunan",
    "laporan situasi kbgo",
    "data kasus",
    "temuan kasus",
    "laporan kekerasan digital",
  ],
  disabilitas: ["inklusi", "aksesibilitas", "kelompok rentan"],
  "bantuan hukum": [
    "pendampingan hukum",
    "advokasi hukum",
    "litigasi",
    "konsultasi hukum",
  ],
  konseling: [
    "pemulihan trauma",
    "dukungan psikologis",
    "kesehatan mental",
    "peer support",
  ],
};

const normalizeText = (value: string) =>
  value
    .toLocaleLowerCase("id-ID")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();

const containsPhrase = (text: string, phrase: string) =>
  ` ${normalizeText(text)} `.includes(` ${normalizeText(phrase)} `);

/**
 * Memperluas kata kunci berdasarkan istilah yang dikenal.
 * Contoh: NCII <-> revenge porn / konten intim.
 */
const expandSearchText = (value: string) => {
  const normalized = normalizeText(value);
  const expanded: string[] = [normalized];

  Object.entries(SEARCH_ALIASES).forEach(([canonical, aliases]) => {
    const matched =
      containsPhrase(normalized, canonical) ||
      aliases.some((alias) => containsPhrase(normalized, alias));

    if (matched) {
      expanded.push(canonical, ...aliases);
    }
  });

  return normalizeText(expanded.join(" "));
};

const getResultIcon = (type: SearchResult["type"]) => {
  switch (type) {
    case "article":
      return BookOpen;
    case "publication":
      return FileText;
    case "kbgo":
      return Shield;
    case "program":
    case "activity":
      return CalendarDays;
    case "team":
      return Users;
    case "hotline":
      return PhoneCall;
  }
};

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const searchResults = useMemo(() => {
    const normalizedQuery = normalizeText(query);

    if (!normalizedQuery) return [];

    const terms = normalizedQuery.split(" ").filter(Boolean);
    const results: SearchResult[] = [];

    const addResult = (
      result: SearchResult,
      searchableValues: Array<string | undefined | null>,
    ) => {
      const searchableText = normalizeText(
        searchableValues.filter(Boolean).join(" "),
      );

      const expandedText = expandSearchText(searchableText);

      // Semua kata yang dicari harus cocok dengan konten
      // atau istilah alternatif yang sudah dikenali.
      const matched = terms.every(
        (term) =>
          expandedText.split(" ").includes(term) ||
          containsPhrase(expandedText, term),
      );

      if (matched) {
        results.push(result);
      }
    };

    // 1. Kategori KBGO
    KBGO_CATEGORIES.forEach((item) => {
      const searchableValues = [
        item.id,
        item.name,
        item.shortDesc,
        item.fullDesc,
        ...(item.examples ?? []),
        ...(item.legalBasis ?? []),
        ...(item.immediateActions ?? []),
      ];

      addResult(
        {
          id: `kbgo-${item.id}`,
          title: item.name,
          category: "Isu & Pengetahuan · KBGO",
          snippet: item.shortDesc,
          route: "kategori_kbgo",
          type: "kbgo",
          keywords: normalizeText(searchableValues.join(" ")),
        },
        searchableValues,
      );
    });

    // 2. Publikasi
    PUBLICATIONS.forEach((item) => {
      let route: PageRoute = "publikasi";

      if (item.id === "laporan-tahunan-2024") {
        route = "detail_publikasi_laporan_tahunan_2024";
      } else if (item.id === "panduan-protokol-ncii") {
        route = "detail_panduan_protokol_penghapusan_ncii";
      }

      const searchableValues = [
        item.id,
        item.title,
        item.subtitle,
        item.summary,
        item.type,
        String(item.year ?? ""),
        item.date,
        ...(item.keyFindings ?? []),
      ];

      addResult(
        {
          id: `publication-${item.id}`,
          title: item.title,
          category: `Publikasi · ${item.type}`,
          snippet: item.summary,
          route,
          type: "publication",
          keywords: normalizeText(searchableValues.join(" ")),
        },
        searchableValues,
      );
    });

    // 3. Artikel edukasi dan analisis
    ARTICLES.forEach((item) => {
      const searchableValues = [
        item.id,
        item.slug,
        item.title,
        item.excerpt,
        item.category,
        item.author,
        item.date,
        ...(item.tags ?? []),
        ...(item.content ?? []),
      ];

      addResult(
        {
          id: `article-${item.id}`,
          title: item.title,
          category: `Artikel · ${item.category}`,
          snippet: item.excerpt,
          route: "isu_pengetahuan",
          type: "article",
          keywords: normalizeText(searchableValues.join(" ")),
        },
        searchableValues,
      );
    });

    // 4. Program TPDotcom
    PROGRAMS.forEach((item) => {
      const searchableValues = [
        item.id,
        item.title,
        item.category,
        item.description,
        item.beneficiariesCount,
        ...(item.keyFeatures ?? []),
      ];

      addResult(
        {
          id: `program-${item.id}`,
          title: item.title,
          category: `Program TPDotcom · ${item.category}`,
          snippet: item.description,
          route: item.route || "program",
          type: "program",
          keywords: normalizeText(searchableValues.join(" ")),
        },
        searchableValues,
      );
    });

    // 5. Dokumentasi kegiatan
    PROGRAM_ACTIVITIES.forEach((item) => {
      const searchableValues = [
        item.id,
        item.title,
        item.description,
        item.location,
        item.typeKey,
        item.date,
        item.participants,
        item.relatedProgramId,
      ];

      addResult(
        {
          id: `activity-${item.id}`,
          title: item.title,
          category: `Dokumentasi Kegiatan · ${item.typeKey}`,
          snippet: item.description,
          route: "dokumentasi_kegiatan_program",
          type: "activity",
          keywords: normalizeText(searchableValues.join(" ")),
        },
        searchableValues,
      );
    });

    // 6. Struktur kepengurusan dan anggota organisasi
    TEAM_MEMBERS.forEach((item) => {
      const searchableValues = [item.name, item.role, item.bio];

      addResult(
        {
          id: `team-${item.name}`,
          title: item.name,
          category: `Tim TPDotcom · ${item.role}`,
          snippet: item.bio,
          route: "tentang_kami",
          type: "team",
          keywords: normalizeText(searchableValues.join(" ")),
        },
        searchableValues,
      );
    });

    // 7. Kontak pengaduan dan layanan bantuan
    EMERGENCY_HOTLINES.forEach((item) => {
      const searchableValues = [
        item.name,
        item.number,
        item.description,
        item.type,
      ];

      addResult(
        {
          id: `hotline-${item.name}`,
          title: item.name,
          category: "Kontak & Layanan",
          snippet: item.description,
          route: "kontak_pengaduan",
          type: "hotline",
          keywords: normalizeText(searchableValues.join(" ")),
        },
        searchableValues,
      );
    });

    // Hilangkan hasil duplikat.
    const uniqueResults = Array.from(
      new Map(results.map((result) => [result.id, result])).values(),
    );

    // Ranking hasil pencarian.
    const scoreResult = (result: SearchResult) => {
      const title = normalizeText(result.title);
      const category = normalizeText(result.category);
      const keywords = normalizeText(result.keywords);

      let score = 0;

      if (title === normalizedQuery) {
        score += 150;
      } else if (title.startsWith(normalizedQuery)) {
        score += 100;
      } else if (terms.every((term) => title.split(" ").includes(term))) {
        score += 75;
      } else if (terms.every((term) => title.includes(term))) {
        score += 60;
      }

      if (category.includes(normalizedQuery)) {
        score += 30;
      }

      if (keywords.includes(normalizedQuery)) {
        score += 20;
      }

      // Judul yang mengandung istilah pencarian mendapat prioritas.
      const matchingTitleTerms = terms.filter((term) =>
        title.includes(term),
      ).length;

      score += matchingTitleTerms * 5;

      return score;
    };

    return uniqueResults
      .map((result) => ({
        result,
        score: scoreResult(result),
      }))
      .sort(
        (a, b) =>
          b.score - a.score ||
          a.result.title.localeCompare(b.result.title, "id-ID"),
      )
      .map(({ result }) => result)
      .slice(0, 30);
  }, [query]);

  // Reset input, fokus, dan scroll halaman ketika modal dibuka.
  useEffect(() => {
    if (!isOpen) return;

    setQuery("");
    setActiveIndex(0);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Pastikan indeks aktif selalu valid ketika hasil berubah.
  useEffect(() => {
    setActiveIndex(0);
    resultRefs.current = [];
  }, [query]);

  useEffect(() => {
    if (activeIndex >= 0) {
      resultRefs.current[activeIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeIndex]);

  // Keyboard navigation.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowDown" && searchResults.length > 0) {
        event.preventDefault();

        setActiveIndex((previous) =>
          Math.min(previous + 1, searchResults.length - 1),
        );
      }

      if (event.key === "ArrowUp" && searchResults.length > 0) {
        event.preventDefault();

        setActiveIndex((previous) => Math.max(previous - 1, 0));
      }

      if (event.key === "Enter" && searchResults.length > 0) {
        // Jangan mengambil alih Enter ketika pengguna sedang
        // menggunakan tombol atau elemen interaktif lainnya.
        const selected = searchResults[activeIndex];

        if (selected) {
          event.preventDefault();
          onNavigate(selected.route);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, searchResults, activeIndex, onClose, onNavigate]);

  if (!isOpen) return null;

  const handleSelect = (result: SearchResult) => {
    onNavigate(result.route);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-950/55 px-0 pt-0 backdrop-blur-[2px] sm:px-5 sm:pt-[8vh]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Pencarian situs TPDotcom"
        className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden border-stone-200 bg-[#fdfcf9] shadow-2xl sm:min-h-0 sm:max-w-2xl sm:border"
      >
        {/* Search field */}
        <div className="flex items-center gap-4 border-b border-stone-200 px-5 py-5 sm:px-6">
          <Search className="h-5 w-5 shrink-0 text-blue-800" />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari isu, artikel, program, atau publikasi..."
            aria-label="Kata kunci pencarian"
            aria-controls="tpdotcom-search-results"
            className="min-w-0 flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-stone-400 sm:text-lg"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="shrink-0 text-xs font-medium text-stone-500 transition-colors hover:text-blue-800"
            >
              Hapus
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pencarian"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-stone-200 text-stone-500 transition-colors hover:border-stone-400 hover:text-slate-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick searches */}
        {!query.trim() && (
          <div className="border-b border-stone-200 px-5 py-6 sm:px-6">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Jelajahi topik
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {QUICK_SEARCHES.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="border-b border-stone-300 pb-1 text-sm text-slate-700 transition-colors hover:border-blue-800 hover:text-blue-800"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results heading */}
        {query.trim() && (
          <div className="flex items-center justify-between gap-3 border-b border-stone-200 px-5 py-3 sm:px-6">
            <p className="min-w-0 truncate text-xs text-stone-500">
              Hasil untuk{" "}
              <span className="font-semibold text-slate-900">
                “{query.trim()}”
              </span>
            </p>

            <span
              className="shrink-0 text-xs tabular-nums text-stone-500"
              aria-live="polite"
            >
              {searchResults.length} hasil
            </span>
          </div>
        )}

        {/* Results */}
        <div
          id="tpdotcom-search-results"
          className="min-h-0 flex-1 overflow-y-auto sm:max-h-[55vh]"
        >
          {!query.trim() ? (
            <div className="px-5 py-8 sm:px-6">
              <p className="max-w-md text-sm leading-7 text-stone-500">
                Temukan pengetahuan, panduan keamanan digital, dokumentasi
                kegiatan, anggota organisasi, dan informasi program TPDotcom.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="px-5 py-16 text-center sm:px-6">
              <Search className="mx-auto mb-4 h-6 w-6 text-stone-400" />

              <h3 className="font-editorial text-xl font-semibold text-slate-900">
                Belum menemukan hasil
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-stone-500">
                Coba kata kunci yang lebih singkat atau istilah lain, seperti
                “NCII”, “doxing”, “keamanan digital”, atau “program”.
              </p>

              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-5 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Jelajahi topik lainnya
              </button>
            </div>
          ) : (
            <div>
              {searchResults.map((result, index) => {
                const Icon = getResultIcon(result.type);
                const isActive = activeIndex === index;

                return (
                  <button
                    key={result.id}
                    ref={(element) => {
                      resultRefs.current[index] = element;
                    }}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => handleSelect(result)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex w-full items-start gap-4 border-b border-stone-100 px-5 py-5 text-left transition-colors sm:px-6 ${
                      isActive ? "bg-blue-50/70" : "hover:bg-stone-50"
                    }`}
                  >
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-stone-200 bg-white text-blue-800">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-blue-800">
                        {result.category}
                      </p>

                      <h3 className="font-editorial text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-900 sm:text-lg">
                        {result.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-600">
                        {result.snippet}
                      </p>
                    </div>

                    <ArrowRight
                      className={`mt-2 h-4 w-4 shrink-0 transition-transform ${
                        isActive
                          ? "translate-x-1 text-blue-800"
                          : "text-stone-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Keyboard hints */}
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 bg-[#f8f7f3] px-5 py-3 sm:px-6">
          <div className="flex items-center gap-4 text-[11px] text-stone-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center border border-stone-300 bg-white">
                ↑
              </span>
              <span className="flex h-5 w-5 items-center justify-center border border-stone-300 bg-white">
                ↓
              </span>
              Navigasi
            </span>

            <span className="inline-flex items-center gap-1.5">
              <CornerDownLeft className="h-3.5 w-3.5" />
              Buka hasil
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-[11px] font-medium text-stone-500 transition-colors hover:text-slate-900"
          >
            Tutup · Esc
          </button>
        </footer>
      </section>
    </div>
  );
};

export default SearchModal;
