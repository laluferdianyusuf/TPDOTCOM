import {
  ArrowLeft,
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
import { PageRoute, ProgramActivityPhoto, ProgramActivityType } from "../types";

interface DokumentasiKegiatanProgramViewProps {
  onNavigate: (route: PageRoute) => void;
}

const ACTIVITY_TYPES: Array<ProgramActivityType | "Semua"> = [
  "Semua",
  "Pelatihan",
  "Workshop",
  "Webinar",
  "Seminar",
  "Kegiatan Lapangan",
];

export const DokumentasiKegiatanProgramView: React.FC<
  DokumentasiKegiatanProgramViewProps
> = ({ onNavigate }) => {
  const [activityFilter, setActivityFilter] =
    useState<(typeof ACTIVITY_TYPES)[number]>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightbox, setLightbox] = useState<{
    photos: ProgramActivityPhoto[];
    index: number;
    title: string;
  } | null>(null);

  const filteredActivities = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PROGRAM_ACTIVITIES.filter((item) => {
      const matchType =
        activityFilter === "Semua" || item.type === activityFilter;
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q);
      return matchType && matchSearch;
    });
  }, [activityFilter, searchQuery]);

  const openLightbox = (
    photos: ProgramActivityPhoto[],
    index: number,
    title: string,
  ) => {
    setLightbox({ photos, index, title });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const goLightbox = useCallback((delta: number) => {
    setLightbox((prev) => {
      if (!prev || prev.photos.length === 0) return prev;
      const next =
        (prev.index + delta + prev.photos.length) % prev.photos.length;
      return { ...prev, index: next };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goLightbox(-1);
      if (e.key === "ArrowRight") goLightbox(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, goLightbox]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-800">
            <button
              type="button"
              onClick={() => onNavigate("program")}
              className="hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Program Kerja
            </button>
            <span>/</span>
            <span>Dokumentasi Kegiatan</span>
          </div>

          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
            Arsip Penyelenggaraan
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Program & Kegiatan yang Telah Diselenggarakan
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Daftar pelatihan, workshop, webinar, seminar, dan kegiatan lapangan
            TPDcom beserta dokumentasi foto dari setiap penyelenggaraan.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {ACTIVITY_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActivityFilter(type)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activityFilter === type
                    ? "bg-blue-700 text-white font-bold"
                    : "bg-stone-100 text-slate-700 hover:bg-stone-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Cari judul atau lokasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Menampilkan {filteredActivities.length} dari{" "}
          {PROGRAM_ACTIVITIES.length} kegiatan
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredActivities.map((activity) => {
            const relatedProgram = PROGRAMS.find(
              (p) => p.id === activity.relatedProgramId,
            );
            return (
              <article
                key={activity.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-[16/9] bg-stone-100">
                  <img
                    src={activity.coverImage}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white/95 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                    {activity.type}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <h2 className="font-editorial text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {activity.title}
                    </h2>
                    {relatedProgram && (
                      <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
                        Terkait: {relatedProgram.title}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      {activity.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      {activity.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      {activity.participants}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="pt-2 mt-auto space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                      <Images className="w-4 h-4 text-blue-600" />
                      Dokumentasi Foto ({activity.photos.length})
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {activity.photos.map((photo, photoIdx) => (
                        <button
                          key={`${activity.id}-photo-${photoIdx}`}
                          type="button"
                          onClick={() =>
                            openLightbox(
                              activity.photos,
                              photoIdx,
                              activity.title,
                            )
                          }
                          className="relative aspect-square rounded-xl overflow-hidden border border-stone-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <img
                            src={photo.url}
                            alt={
                              photo.caption || `Dokumentasi ${photoIdx + 1}`
                            }
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <span className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredActivities.length === 0 && (
          <p className="text-center text-sm text-slate-500 py-12">
            Tidak ada kegiatan yang cocok dengan filter atau pencarian Anda.
          </p>
        )}
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri foto: ${lightbox.title}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            aria-label="Tutup galeri"
          >
            <X className="w-5 h-5" />
          </button>

          {lightbox.photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goLightbox(-1);
                }}
                className="absolute left-2 sm:left-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goLightbox(1);
                }}
                className="absolute right-2 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Foto berikutnya"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="max-w-4xl w-full space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.photos[lightbox.index]?.url}
              alt={
                lightbox.photos[lightbox.index]?.caption || lightbox.title
              }
              className="w-full max-h-[75vh] object-contain rounded-xl mx-auto"
            />
            {lightbox.photos[lightbox.index]?.caption && (
              <p className="text-sm text-slate-200 text-center px-4">
                {lightbox.photos[lightbox.index].caption}
              </p>
            )}
            <p className="text-xs text-slate-400 text-center">
              {lightbox.index + 1} / {lightbox.photos.length} · {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
