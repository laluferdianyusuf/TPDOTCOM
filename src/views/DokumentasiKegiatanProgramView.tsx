import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  Search,
  Users,
  X,
} from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { PROGRAM_ACTIVITIES, PROGRAMS } from "../data/content";
import { PageRoute, ProgramActivityPhoto } from "../types";

interface DokumentasiKegiatanProgramViewProps {
  onNavigate: (route: PageRoute) => void;
}

const FILTERS = [
  { label: "Semua kegiatan", value: "Semua" },
  { label: "Pelatihan", value: "pelatihan" },
  { label: "Workshop", value: "workshop" },
  { label: "Webinar", value: "webinar" },
  { label: "Seminar", value: "seminar" },
  { label: "Kegiatan lapangan", value: "kegiatan_lapangan" },
];

const TYPE_LABELS: Record<string, string> = {
  pelatihan: "Pelatihan",
  workshop: "Workshop",
  webinar: "Webinar",
  seminar: "Seminar",
  kegiatan_lapangan: "Kegiatan lapangan",
};

export const DokumentasiKegiatanProgramView: React.FC<
  DokumentasiKegiatanProgramViewProps
> = ({ onNavigate }) => {
  const [filter, setFilter] = useState("Semua");
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<{
    photos: ProgramActivityPhoto[];
    index: number;
    title: string;
  } | null>(null);

  const activities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return PROGRAM_ACTIVITIES.filter((item) => {
      const matchesFilter = filter === "Semua" || item.typeKey === filter;

      const matchesQuery =
        !normalizedQuery ||
        [item.title, item.description, item.location, item.participants].some(
          (value) => value.toLowerCase().includes(normalizedQuery),
        );

      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const featuredActivity = activities[0];
  const remainingActivities = activities.slice(1);

  const openGallery = (
    photos: ProgramActivityPhoto[],
    index: number,
    title: string,
  ) => {
    if (!photos.length) return;
    setLightbox({ photos, index, title });
  };

  const closeGallery = useCallback(() => setLightbox(null), []);

  const moveGallery = useCallback((delta: number) => {
    setLightbox((current) => {
      if (!current || current.photos.length < 2) return current;

      return {
        ...current,
        index:
          (current.index + delta + current.photos.length) %
          current.photos.length,
      };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") moveGallery(-1);
      if (event.key === "ArrowRight") moveGallery(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, closeGallery, moveGallery]);

  const renderPhotoStrip = (photos: ProgramActivityPhoto[], title: string) => {
    if (!photos.length) {
      return (
        <p className="border-t border-stone-200 pt-3 text-xs leading-5 text-stone-500">
          Dokumentasi foto belum ditambahkan.
        </p>
      );
    }

    return (
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {photos.slice(0, 5).map((photo, index) => (
          <button
            key={`${title}-photo-${index}`}
            type="button"
            onClick={() => openGallery(photos, index, title)}
            aria-label={`Buka foto ${index + 1}: ${title}`}
            className="group relative h-[76px] w-[88px] shrink-0 overflow-hidden bg-stone-100 sm:h-[88px] sm:w-[104px]"
          >
            <img
              src={photo.url}
              alt={photo.caption || `Foto ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:opacity-80"
            />
          </button>
        ))}
        {photos.length > 5 && (
          <button
            type="button"
            onClick={() => openGallery(photos, 5, title)}
            className="flex h-[76px] w-[88px] shrink-0 items-center justify-center bg-stone-100 text-xs font-semibold text-stone-700 hover:bg-stone-200 sm:h-[88px] sm:w-[104px]"
          >
            +{photos.length - 5} foto
          </button>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#fbfaf7] pb-20 text-[#252923]">
      {/* INTRODUCTION */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12">
          <button
            type="button"
            onClick={() => onNavigate("program")}
            className="mb-12 inline-flex items-center gap-2 text-xs font-medium text-stone-600 transition hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke program
          </button>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-800">
                Transformasi Perempuan Dotcom
              </p>

              <h1 className="max-w-3xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Kerja bersama.
                <br />
                <span className="text-blue-800">Perubahan nyata.</span>
              </h1>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <p className="text-sm leading-7 text-stone-600 sm:text-base">
                Catatan kegiatan, ruang belajar, dan kerja kolaboratif TPDotcom
                dalam mendukung perempuan dan masyarakat yang lebih berdaya.
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-stone-300 pt-4 text-xs text-stone-500">
                <span className="font-semibold text-stone-900">
                  {PROGRAM_ACTIVITIES.length.toString().padStart(2, "0")}
                </span>
                <span>entri dalam arsip kegiatan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        {/* Search and category navigation */}
        <div className="flex flex-col gap-5 border-b border-stone-300 pb-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <h2 className="font-editorial text-2xl font-semibold text-stone-900">
              Arsip kegiatan
            </h2>

            <label className="relative block w-full md:max-w-xs">
              <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari kegiatan..."
                aria-label="Cari kegiatan"
                className="w-full border-0 border-b border-stone-300 bg-transparent py-3 pl-7 pr-2 text-sm outline-none transition placeholder:text-stone-400 focus:border-blue-800 focus:ring-0"
              />
            </label>
          </div>

          <div className="flex gap-x-6 gap-y-3 overflow-x-auto">
            {FILTERS.map((item) => {
              const selected = filter === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  aria-pressed={selected}
                  className={`relative shrink-0 pb-3 text-xs transition ${
                    selected
                      ? "font-bold text-blue-800"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {item.label}
                  {selected && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <p className="py-5 text-xs text-stone-500">
          {activities.length} kegiatan ditemukan
          {filter !== "Semua" &&
            ` · ${FILTERS.find((item) => item.value === filter)?.label}`}
          {query.trim() && ` · Pencarian: “${query.trim()}”`}
        </p>

        {activities.length > 0 ? (
          <div className="space-y-12">
            {/* Featured activity */}
            {featuredActivity && (
              <article className="grid gap-6 border-b border-stone-300 pb-10 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:pb-12">
                <div className="relative min-h-[250px] overflow-hidden bg-stone-200 sm:min-h-[340px]">
                  <img
                    src={featuredActivity.coverImage}
                    alt={`Sampul ilustrasi ${featuredActivity.title}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-[#fbfaf7] px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-blue-800">
                    Kegiatan pilihan
                  </span>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                    {TYPE_LABELS[featuredActivity.typeKey] || "Kegiatan"}
                  </p>

                  <h3 className="mt-4 font-editorial text-2xl font-semibold leading-snug text-stone-900 sm:text-3xl">
                    {featuredActivity.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-stone-500">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredActivity.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {featuredActivity.location}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-stone-600">
                    {featuredActivity.description}
                  </p>

                  <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-stone-500">
                    <Users className="mt-0.5 h-4 w-4 shrink-0" />
                    {featuredActivity.participants}
                  </div>

                  {(() => {
                    const related = PROGRAMS.find(
                      (program) =>
                        program.id === featuredActivity.relatedProgramId,
                    );

                    return related ? (
                      <p className="mt-3 text-xs text-stone-500">
                        Bagian dari{" "}
                        <span className="font-semibold text-stone-800">
                          {related.title}
                        </span>
                      </p>
                    ) : null;
                  })()}

                  {renderPhotoStrip(
                    featuredActivity.photos,
                    featuredActivity.title,
                  )}
                </div>
              </article>
            )}

            {/* Remaining activities */}
            {remainingActivities.length > 0 && (
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {remainingActivities.map((activity, index) => {
                  const related = PROGRAMS.find(
                    (program) => program.id === activity.relatedProgramId,
                  );

                  return (
                    <article
                      key={activity.id}
                      className="flex min-w-0 flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                        <img
                          src={activity.coverImage}
                          alt={`Sampul ilustrasi ${activity.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 hover:scale-[1.025]"
                        />
                      </div>

                      <div className="flex flex-1 flex-col pt-5">
                        <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.13em] text-blue-800">
                          <span>
                            {TYPE_LABELS[activity.typeKey] || "Kegiatan"}
                          </span>
                          <span className="font-normal tracking-normal text-stone-400">
                            {String(index + 2).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="mt-3 font-editorial text-xl font-semibold leading-snug text-stone-900">
                          {activity.title}
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-stone-500">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {activity.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {activity.location}
                          </span>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-stone-600">
                          {activity.description}
                        </p>

                        {related && (
                          <p className="mt-3 text-xs text-stone-500">
                            Program: {related.title}
                          </p>
                        )}

                        <div className="mt-auto pt-5">
                          <div className="flex items-center gap-2 border-t border-stone-200 pt-4 text-xs text-stone-500">
                            <Images className="h-4 w-4" />
                            {activity.photos.length} foto dokumentasi
                          </div>

                          {renderPhotoStrip(activity.photos, activity.title)}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-editorial text-2xl font-semibold text-stone-900">
              Belum ada kegiatan yang cocok.
            </p>
            <p className="mt-3 text-sm text-stone-500">
              Coba kata kunci atau kategori lainnya.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter("Semua");
                setQuery("");
              }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
            >
              Tampilkan semua kegiatan <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>

      {/* FOOTNOTE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="border-t border-stone-300 pt-5 text-xs leading-6 text-stone-500">
          Arsip ini menjadi catatan kegiatan dan pembelajaran TPDotcom.
          Informasi dan dokumentasi dapat diperbarui sesuai arsip resmi
          organisasi.
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && lightbox.photos[lightbox.index] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri foto: ${lightbox.title}`}
          onClick={closeGallery}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-950/95 p-4"
        >
          <button
            type="button"
            onClick={closeGallery}
            aria-label="Tutup galeri"
            className="absolute right-4 top-4 p-3 text-white hover:text-blue-200"
          >
            <X className="h-6 w-6" />
          </button>

          {lightbox.photos.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Foto sebelumnya"
                onClick={(event) => {
                  event.stopPropagation();
                  moveGallery(-1);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white hover:text-blue-200 sm:left-8"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                type="button"
                aria-label="Foto berikutnya"
                onClick={(event) => {
                  event.stopPropagation();
                  moveGallery(1);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white hover:text-blue-200 sm:right-8"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightbox.photos[lightbox.index].url}
              alt={lightbox.photos[lightbox.index].caption || lightbox.title}
              className="mx-auto max-h-[75vh] w-full object-contain"
            />

            {lightbox.photos[lightbox.index].caption && (
              <p className="mt-4 text-center text-sm text-stone-200">
                {lightbox.photos[lightbox.index].caption}
              </p>
            )}

            <p className="mt-2 text-center text-xs text-stone-400">
              {lightbox.index + 1} / {lightbox.photos.length}
              {" — "}
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};
