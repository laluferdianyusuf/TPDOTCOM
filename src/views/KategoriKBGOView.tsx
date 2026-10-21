import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Eye,
  Lock,
  MessageSquareWarning,
  Scale,
  ShieldAlert,
  Sparkles,
  UserMinus,
  UserX,
} from "lucide-react";
import React, { useState } from "react";
import { KBGO_CATEGORIES } from "../data/content";
import { PageRoute } from "../types";

interface KategoriKBGOViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const KategoriKBGOView: React.FC<KategoriKBGOViewProps> = ({
  onNavigate,
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>(
    KBGO_CATEGORIES[0]?.id ?? "",
  );

  const activeCategory =
    KBGO_CATEGORIES.find((category) => category.id === selectedCatId) ??
    KBGO_CATEGORIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "ncii":
        return ShieldAlert;
      case "doxing":
        return UserX;
      case "cyberstalking":
        return Eye;
      case "impersonation":
        return UserMinus;
      case "ai-deepfake":
        return Sparkles;
      case "cyber-harassment":
        return MessageSquareWarning;
      default:
        return ShieldAlert;
    }
  };

  if (!activeCategory) {
    return (
      <main className="min-h-[60vh] bg-[#f8f7f3] px-5 py-24">
        <div className="mx-auto max-w-3xl border-t border-stone-300 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
            Isu dan Pengetahuan
          </p>
          <h1 className="mt-4 font-editorial text-3xl font-semibold text-slate-900">
            Kategori belum tersedia
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Materi kategori KBGO belum tersedia. Silakan kembali ke halaman Isu
            dan Pengetahuan untuk melihat materi lainnya.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("publikasi")}
            className="mt-6 inline-flex items-center gap-2 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
          >
            Kembali ke Isu dan Pengetahuan
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    );
  }

  const ActiveIcon = getIcon(activeCategory.id);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f3] pb-20 text-slate-900">
      {/* Intro */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.17em] text-blue-800">
                <span>Isu dan Pengetahuan</span>
                <ChevronRight size={13} />
                <span>KBGO</span>
              </div>

              <h1 className="mt-6 max-w-4xl font-editorial text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Mengenali kekerasan berbasis gender online.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Kenali bentuk kekerasan di ruang digital, pahami pilihan
                perlindungan yang tersedia, dan pelajari langkah awal yang dapat
                dipertimbangkan sesuai situasi.
              </p>
            </div>

            <div className="border-t border-stone-300 pt-5 lg:col-span-4 lg:justify-self-end lg:border-l lg:border-t-0 lg:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
                Tentang panduan ini
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-700">
                Materi edukasi untuk membantu memahami risiko digital. Setiap
                kasus memiliki konteks berbeda dan mungkin memerlukan bantuan
                hukum atau pendampingan khusus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category explorer */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="mb-7 flex flex-col gap-3 border-b border-stone-300 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
              Jelajahi topik
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold tracking-tight sm:text-3xl">
              Bentuk-bentuk KBGO
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Pilih topik untuk membaca penjelasan, contoh modus, informasi hukum,
            dan langkah awal yang bisa dipertimbangkan.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Category navigation */}
          <aside className="lg:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              Daftar kategori
            </p>

            <nav
              aria-label="Kategori kekerasan berbasis gender online"
              className="divide-y divide-stone-200 border-y border-stone-300"
            >
              {KBGO_CATEGORIES.map((category, index) => {
                const Icon = getIcon(category.id);
                const isSelected = category.id === activeCategory.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCatId(category.id)}
                    aria-current={isSelected ? "true" : undefined}
                    className={`group flex w-full items-center gap-4 py-4 text-left transition-colors ${
                      isSelected
                        ? "text-blue-900"
                        : "text-slate-700 hover:text-blue-800"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-colors ${
                        isSelected
                          ? "border-blue-900 bg-blue-900 text-white"
                          : "border-stone-300 bg-transparent text-stone-500 group-hover:border-blue-700 group-hover:text-blue-800"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="mb-1 block text-[10px] font-medium tabular-nums tracking-[0.12em] text-stone-400">
                        TOPIK {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`block text-sm leading-5 ${
                          isSelected ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {category.name}
                      </span>
                    </span>

                    <ArrowRight
                      size={16}
                      className={`shrink-0 transition-transform ${
                        isSelected
                          ? "translate-x-0 text-blue-800"
                          : "-translate-x-1 text-stone-300 group-hover:translate-x-0 group-hover:text-blue-700"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="mt-7 border-l-2 border-blue-800 pl-4">
              <p className="text-sm font-semibold text-slate-900">
                Membutuhkan bantuan?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Jika kamu sedang mengalami kekerasan, kamu bisa mempelajari
                pilihan langkah berikutnya dan mempertimbangkan bantuan yang
                sesuai dengan situasimu.
              </p>
              <button
                type="button"
                onClick={() => onNavigate("kontak_pengaduan")}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Lihat informasi pengaduan
                <ArrowRight size={15} />
              </button>
            </div>
          </aside>

          {/* Selected category detail */}
          <article key={activeCategory.id} className="min-w-0 lg:col-span-8">
            {/* Category heading */}
            <div className="border-t-2 border-slate-900 pt-6 sm:pt-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-blue-800">
                  <ActiveIcon size={15} />
                  Materi edukasi
                </span>

                {activeCategory.riskLevel && (
                  <span className="border border-stone-300 px-3 py-1.5 text-xs text-slate-600">
                    Tingkat risiko:{" "}
                    <strong className="font-semibold text-slate-900">
                      {activeCategory.riskLevel}
                    </strong>
                  </span>
                )}
              </div>

              <h2 className="mt-5 font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {activeCategory.name}
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-[17px] sm:leading-8">
                {activeCategory.fullDesc}
              </p>
            </div>

            {/* Examples */}
            <section className="mt-10 border-t border-stone-300 pt-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-blue-800">
                  <Eye size={19} strokeWidth={1.7} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-editorial text-xl font-semibold">
                    Mengenali modus
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Beberapa contoh situasi yang dapat terjadi di ruang digital.
                  </p>
                </div>
              </div>

              {activeCategory.examples?.length ? (
                <ol className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
                  {activeCategory.examples.map((example, index) => (
                    <li
                      key={`${activeCategory.id}-example-${index}`}
                      className="grid grid-cols-[2rem_1fr] gap-3 py-4"
                    >
                      <span className="pt-0.5 font-editorial text-lg text-stone-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-7 text-slate-700">
                        {example}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-5 border-y border-stone-200 py-5 text-sm text-slate-500">
                  Contoh modus untuk topik ini sedang disiapkan.
                </p>
              )}
            </section>

            {/* Legal context */}
            <section className="mt-10 border-y border-stone-300 py-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-blue-800">
                  <Scale size={20} strokeWidth={1.7} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-editorial text-xl font-semibold">
                    Memahami aspek hukum
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Ketentuan yang relevan bergantung pada perbuatan, konteks,
                    bukti, dan aturan yang berlaku. Informasi berikut merupakan
                    titik awal untuk memahami pilihan hukum, bukan penetapan
                    bahwa suatu pasal pasti berlaku pada kasus tertentu.
                  </p>
                </div>
              </div>

              {activeCategory.legalBasis?.length ? (
                <ul className="mt-5 space-y-3">
                  {activeCategory.legalBasis.map((law, index) => (
                    <li
                      key={`${activeCategory.id}-law-${index}`}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-blue-800" />
                      <span>{law}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-sm text-slate-500">
                  Rujukan hukum untuk topik ini belum tersedia.
                </p>
              )}

              <div className="mt-5 flex items-start gap-2 border-l-2 border-amber-500 bg-amber-50/70 p-4">
                <AlertTriangle
                  size={17}
                  className="mt-0.5 shrink-0 text-amber-800"
                />
                <p className="text-xs leading-6 text-amber-950">
                  Peraturan dapat berubah dan penerapannya perlu dilihat sesuai
                  fakta kasus. Untuk menentukan langkah hukum, pertimbangkan
                  konsultasi dengan pendamping atau tenaga hukum yang kompeten.
                </p>
              </div>
            </section>

            {/* Immediate actions */}
            <section className="mt-10">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-blue-800">
                  <ShieldAlert size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="font-editorial text-xl font-semibold">
                    Langkah awal yang bisa dipertimbangkan
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Utamakan keselamatan dan pilih langkah yang sesuai dengan
                    situasimu.
                  </p>
                </div>
              </div>

              {activeCategory.immediateActions?.length ? (
                <ol className="mt-5 space-y-0">
                  {activeCategory.immediateActions.map((action, index) => (
                    <li
                      key={`${activeCategory.id}-action-${index}`}
                      className="grid grid-cols-[2rem_1fr] gap-3 border-b border-stone-200 py-4 first:border-t"
                    >
                      <span className="flex h-7 w-7 items-center justify-center border border-stone-300 text-xs font-semibold tabular-nums text-blue-900">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-sm leading-7 text-slate-700">
                        {action}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="mt-5 text-sm text-slate-500">
                  Panduan langkah awal untuk topik ini sedang disiapkan.
                </p>
              )}

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Catatan keselamatan: jika perangkat atau akunmu mungkin dipantau
                pelaku, perubahan kata sandi, penghapusan konten, atau tindakan
                lain dapat meningkatkan risiko. Pertimbangkan menggunakan
                perangkat yang lebih aman dan meminta bantuan sebelum bertindak.
              </p>
            </section>

            {/* Actions */}
            <section className="mt-10 border-t-2 border-slate-900 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
                Langkah selanjutnya
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {activeCategory.id === "ncii" ? (
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate("detail_panduan_protokol_penghapusan_ncii")
                    }
                    className="group flex min-h-28 flex-col items-start justify-between border border-stone-300 bg-white p-5 text-left transition-colors hover:border-blue-800"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <BookOpen size={17} className="text-blue-800" />
                      Panduan NCII
                    </span>
                    <span className="mt-4 flex items-center gap-2 text-sm text-blue-800">
                      Pelajari pilihan perlindungan
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate("detail_program_keamanan_digital")
                    }
                    className="group flex min-h-28 flex-col items-start justify-between border border-stone-300 bg-white p-5 text-left transition-colors hover:border-blue-800"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <Lock size={17} className="text-blue-800" />
                      Keamanan digital
                    </span>
                    <span className="mt-4 flex items-center gap-2 text-sm text-blue-800">
                      Baca panduan keamanan
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onNavigate("kontak_pengaduan")}
                  className="group flex min-h-28 flex-col items-start justify-between bg-blue-900 p-5 text-left text-white transition-colors hover:bg-blue-950"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-200">
                    Dukungan dan informasi
                  </span>
                  <span className="mt-4 flex items-center gap-2 text-sm font-semibold">
                    Lihat informasi pengaduan
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </div>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Membaca panduan ini tidak mengharuskan kamu melaporkan kasus.
                Kamu berhak mempertimbangkan keselamatan, kebutuhan, dan
                pilihanmu sendiri.
              </p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
};
