import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  FileText,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { PUBLICATIONS } from "../data/content";
import { PageRoute, PublicationItem } from "../types";

interface PublikasiViewProps {
  onNavigate: (route: PageRoute) => void;
}

const PUBLICATION_TYPES = [
  "Semua",
  "Laporan Tahunan",
  "Panduan Praktis",
  "Kertas Kebijakan",
];

export const PublikasiView: React.FC<PublikasiViewProps> = ({ onNavigate }) => {
  const [selectedType, setSelectedType] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPubs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PUBLICATIONS.filter((publication) => {
      const matchesType =
        selectedType === "Semua" || publication.type === selectedType;

      const searchableText = [
        publication.title,
        publication.subtitle,
        publication.summary,
        publication.type,
        String(publication.year),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesType && (!query || searchableText.includes(query));
    });
  }, [selectedType, searchQuery]);

  const handleOpenDetail = (publication: PublicationItem) => {
    switch (publication.id) {
      case "laporan-tahunan-2024":
        onNavigate("detail_publikasi_laporan_tahunan_2024");
        break;

      case "panduan-protokol-ncii":
        onNavigate("detail_panduan_protokol_penghapusan_ncii");
        break;

      default:
        // Jangan arahkan publikasi yang belum memiliki halaman detail
        // ke halaman dokumen lain secara keliru.
        break;
    }
  };

  const getDownloadUrl = (publication: PublicationItem): string | undefined => {
    // Sesuaikan properti ini dengan skema PublicationItem di proyekmu.
    // Contoh jika tipe datanya memiliki properti fileUrl:
    // return publication.fileUrl;
    return undefined;
  };

  const handleDownload = (publication: PublicationItem) => {
    const fileUrl = getDownloadUrl(publication);

    if (!fileUrl) {
      window.alert(
        "File unduhan untuk publikasi ini belum tersedia. Silakan buka halaman publikasi untuk melihat informasi lebih lanjut.",
      );
      return;
    }

    window.open(fileUrl, "_blank", "noopener,noreferrer");
  };

  const hasFilters = selectedType !== "Semua" || searchQuery.trim() !== "";

  return (
    <main className="min-h-screen bg-[#f8f7f3] pb-20 text-slate-900">
      {/* Header editorial */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-blue-800">
                <BookOpen size={15} strokeWidth={1.8} />
                <span>Arsip pengetahuan</span>
              </div>

              <h1 className="mt-6 max-w-4xl font-editorial text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Pengetahuan untuk perubahan yang berarti.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Temukan laporan, panduan, dan bahan bacaan mengenai pemberdayaan
                perempuan, keamanan digital, serta isu sosial yang menjadi
                perhatian TPDotcom.
              </p>
            </div>

            <div className="border-t border-stone-300 pt-5 lg:col-span-4 lg:justify-self-end lg:border-l lg:border-t-0 lg:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
                Jelajahi koleksi
              </p>
              <p className="mt-3 font-editorial text-4xl font-semibold tabular-nums text-slate-900">
                {String(PUBLICATIONS.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Dokumen dalam katalog publikasi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 sm:pt-10 lg:px-12">
        <div className="flex flex-col gap-5 border-b border-stone-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 flex-1">
            <label
              htmlFor="publication-search"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-stone-500"
            >
              Cari dalam koleksi
            </label>

            <div className="relative max-w-xl">
              <Search
                size={18}
                strokeWidth={1.7}
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                id="publication-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Cari judul, topik, atau tahun..."
                className="w-full border-0 border-b border-stone-300 bg-transparent py-3 pl-7 pr-9 text-sm text-slate-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-800 focus:ring-0"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Hapus pencarian"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-stone-500 hover:text-slate-900"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="min-w-0 lg:max-w-2xl">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              <SlidersHorizontal size={14} />
              <span>Jenis publikasi</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {PUBLICATION_TYPES.map((type) => {
                const isActive = selectedType === type;

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    aria-pressed={isActive}
                    className={`border px-3 py-2 text-xs font-medium transition-colors ${
                      isActive
                        ? "border-blue-900 bg-blue-900 text-white"
                        : "border-stone-300 bg-transparent text-slate-700 hover:border-blue-800 hover:text-blue-900"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-5">
          <p className="text-sm text-slate-600" aria-live="polite">
            Menampilkan{" "}
            <span className="font-semibold text-slate-900">
              {filteredPubs.length}
            </span>{" "}
            dari {PUBLICATIONS.length} publikasi
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setSelectedType("Semua");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 hover:text-blue-950"
            >
              <X size={14} />
              Hapus filter
            </button>
          )}
        </div>
      </section>

      {/* Publication list */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {filteredPubs.length > 0 ? (
          <div className="border-t-2 border-slate-900">
            {filteredPubs.map((publication, index) => {
              const fileUrl = getDownloadUrl(publication);
              const hasDetail = [
                "laporan-tahunan-2024",
                "panduan-protokol-ncii",
              ].includes(publication.id);

              return (
                <article
                  key={publication.id}
                  className="grid gap-5 border-b border-stone-300 py-7 sm:py-8 lg:grid-cols-12 lg:gap-8"
                >
                  {/* Index and metadata */}
                  <div className="flex items-start gap-4 lg:col-span-3">
                    <span className="font-editorial text-2xl font-medium tabular-nums text-stone-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 pt-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-800">
                        {publication.type}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500">
                        <span>{publication.year}</span>
                        {publication.pages != null && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{publication.pages} halaman</span>
                          </>
                        )}
                        {publication.fileSize && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{publication.fileSize}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="min-w-0 lg:col-span-6">
                    <h2 className="font-editorial text-2xl font-semibold leading-snug tracking-tight text-slate-950 sm:text-3xl">
                      {publication.title}
                    </h2>

                    {publication.subtitle && (
                      <p className="mt-2 text-sm italic leading-6 text-slate-500">
                        {publication.subtitle}
                      </p>
                    )}

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                      {publication.summary}
                    </p>

                    {publication.keyFindings &&
                      publication.keyFindings.length > 0 && (
                        <details className="group mt-5 border-t border-stone-200 pt-3">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-sm font-semibold text-slate-800 marker:hidden">
                            <span>Pokok isi dokumen</span>
                            <ArrowRight
                              size={16}
                              className="shrink-0 text-blue-800 transition-transform group-open:rotate-90"
                            />
                          </summary>

                          <ul className="mt-2 space-y-3 pb-2">
                            {publication.keyFindings.map(
                              (finding, findingIndex) => (
                                <li
                                  key={`${publication.id}-finding-${findingIndex}`}
                                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-blue-800" />
                                  <span>{finding}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </details>
                      )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 border-t border-stone-200 pt-4 sm:items-start lg:col-span-3 lg:flex-col lg:items-start lg:border-t-0 lg:pt-1">
                    {hasDetail ? (
                      <button
                        type="button"
                        onClick={() => handleOpenDetail(publication)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
                      >
                        Baca publikasi
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    ) : (
                      <span className="text-xs text-stone-500">
                        Halaman detail belum tersedia
                      </span>
                    )}

                    {fileUrl ? (
                      <button
                        type="button"
                        onClick={() => handleDownload(publication)}
                        className="inline-flex items-center gap-2 border border-stone-300 px-3 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-800 hover:text-blue-900"
                      >
                        <ArrowDownToLine size={15} />
                        Unduh dokumen
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs text-stone-400">
                        <FileText size={15} />
                        File belum ditautkan
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border-y border-stone-300 py-16 sm:py-20">
            <div className="mx-auto max-w-lg text-center">
              <Search
                size={26}
                strokeWidth={1.4}
                className="mx-auto text-stone-400"
              />
              <h2 className="mt-5 font-editorial text-2xl font-semibold">
                Publikasi tidak ditemukan
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Coba kata kunci lain atau pilih jenis publikasi yang berbeda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedType("Semua");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex items-center gap-2 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Tampilkan semua publikasi
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Closing note */}
      <section className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-20 lg:px-12">
        <div className="grid gap-5 border-t border-stone-300 pt-6 sm:grid-cols-12 sm:gap-8">
          <div className="sm:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
              Tentang koleksi
            </p>
          </div>

          <div className="sm:col-span-8">
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Koleksi publikasi ini menjadi ruang untuk berbagi pengetahuan dan
              bahan pembelajaran. Informasi mengenai ketersediaan file, izin
              penggunaan, serta atribusi sebaiknya dicantumkan pada setiap
              dokumen sesuai ketentuan yang benar-benar berlaku.
            </p>

            <button
              type="button"
              onClick={() => onNavigate("kontak_pengaduan")}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
            >
              Hubungi TPDotcom
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
