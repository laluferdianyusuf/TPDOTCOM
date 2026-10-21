import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Lock,
  MapPin,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import React, { useState } from "react";

import { KBGO_CATEGORIES, PROGRAMS, PUBLICATIONS } from "../data/content";
import { PageRoute } from "../types";

interface BerandaViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDonation: () => void;
}

type EmergencyTab = "ncii" | "doxing" | "stalking" | "deepfake";

const emergencyGuides: Record<
  EmergencyTab,
  {
    eyebrow: string;
    title: string;
    introduction: string;
    steps: string[];
    actionLabel: string;
    route: PageRoute;
  }
> = {
  ncii: {
    eyebrow: "Konten intim tanpa persetujuan",
    title: "Foto atau video intim diancam untuk disebarkan",
    introduction:
      "Kamu tidak harus memenuhi ancaman pelaku. Utamakan keselamatan dan simpan bukti jika aman dilakukan.",
    steps: [
      "Jangan terburu-buru membayar atau mengirim konten tambahan.",
      "Simpan pesan ancaman, nama akun, tautan, dan waktu kejadian jika aman.",
      "Laporkan konten melalui kanal resmi platform. StopNCII.org dapat membantu orang dewasa yang memenuhi syarat mencegah penyebaran gambar intim tertentu.",
    ],
    actionLabel: "Pelajari langkah penanganan",
    route: "detail_panduan_protokol_penghapusan_ncii" as PageRoute,
  },
  doxing: {
    eyebrow: "Penyebaran data pribadi",
    title: "Informasi pribadi disebarkan tanpa izin",
    introduction:
      "Penyebaran alamat, nomor telepon, atau informasi pribadi dapat meningkatkan risiko keselamatan. Kamu berhak mencari bantuan.",
    steps: [
      "Dokumentasikan unggahan dan tautannya jika aman dilakukan.",
      "Periksa pengaturan privasi dan amankan akun dari perangkat yang kamu percaya.",
      "Laporkan konten kepada platform dan pertimbangkan bantuan hukum jika ada ancaman atau kerugian.",
    ],
    actionLabel: "Kenali bentuk KBGO",
    route: "kategori_kbgo" as PageRoute,
  },
  stalking: {
    eyebrow: "Penguntitan digital",
    title: "Merasa akun atau perangkat sedang dipantau",
    introduction:
      "Jika kamu mencurigai pemantauan oleh seseorang yang mungkin membahayakanmu, hindari tindakan yang dapat meningkatkan risiko.",
    steps: [
      "Gunakan perangkat yang lebih aman untuk mencari bantuan bila memungkinkan.",
      "Periksa sesi masuk, berbagi lokasi, dan izin aplikasi hanya jika aman dilakukan.",
      "Catat kejadian yang mencurigakan dan cari bantuan teknis tepercaya sebelum menghapus aplikasi yang mungkin menjadi bukti.",
    ],
    actionLabel: "Pelajari keamanan digital",
    route: "detail_program_keamanan_digital" as PageRoute,
  },
  deepfake: {
    eyebrow: "Manipulasi gambar dengan AI",
    title: "Wajah atau identitas digunakan dalam gambar palsu",
    introduction:
      "Gambar manipulatif dapat digunakan untuk mempermalukan, mengancam, atau memeras seseorang. Kamu tidak bertanggung jawab atas tindakan pelaku.",
    steps: [
      "Simpan tautan dan informasi akun yang menyebarkan gambar jika aman.",
      "Hindari menyebarkan ulang gambar, terutama konten intim.",
      "Gunakan kanal pelaporan platform dan cari pendampingan untuk menentukan langkah berikutnya.",
    ],
    actionLabel: "Cari informasi dan bantuan",
    route: "kontak_pengaduan" as PageRoute,
  },
};

const programIcons: Record<string, React.ReactNode> = {
  "keamanan-digital": <ShieldCheck className="h-5 w-5" />,
  "advokasi-hukum": <Scale className="h-5 w-5" />,
  "pemulihan-psikologis": <HeartHandshake className="h-5 w-5" />,
  "advokasi-kebijakan": <FileText className="h-5 w-5" />,
};

export const BerandaView: React.FC<BerandaViewProps> = ({
  onNavigate,
  onOpenDonation,
}) => {
  const [activeEmergencyTab, setActiveEmergencyTab] =
    useState<EmergencyTab>("ncii");

  const currentGuide = emergencyGuides[activeEmergencyTab];

  return (
    <main className="pb-16 text-slate-800 sm:pb-24">
      {/* HERO */}
      <section className="border-b border-stone-200">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-700" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                Transformasi Perempuan Dotcom
              </span>
            </div>

            <h1 className="max-w-3xl font-editorial text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.25rem]">
              Ruang digital yang lebih aman,{" "}
              <span className="text-blue-800">adil, dan setara.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              TPDotcom bekerja untuk memperkuat kapasitas masyarakat, mendorong
              pemberdayaan perempuan, dan meningkatkan pemahaman tentang hak
              serta keamanan di ruang digital.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate("kontak_pengaduan")}
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                <Lock className="h-4 w-4" />
                Cari bantuan atau ajukan pengaduan
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("program")}
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-800"
              >
                Kenali kerja kami
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-stone-200 pt-5 text-xs leading-5 text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-700" />
                Berperspektif korban
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-700" />
                Menghormati persetujuan
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-700" />
                Berorientasi pada pemberdayaan
              </span>
            </div>
          </div>

          {/* Panel informasi yang lebih tenang */}
          <aside className="lg:col-span-5">
            <div className="border border-stone-200 bg-[#f8f7f3]">
              <div className="border-b border-stone-200 px-5 py-5 sm:px-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
                  Mulai dari sini
                </p>
                <h2 className="mt-2 font-editorial text-2xl font-bold text-slate-950">
                  Apa yang kamu butuhkan?
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Pilih informasi yang paling sesuai dengan kebutuhanmu.
                </p>
              </div>

              <div className="divide-y divide-stone-200">
                <button
                  type="button"
                  onClick={() => onNavigate("kontak_pengaduan")}
                  className="group flex w-full items-start gap-4 px-5 py-5 text-left transition hover:bg-white sm:px-7"
                >
                  <span className="mt-0.5 text-blue-800">
                    <HeartHandshake className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900">
                      Mencari bantuan
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      Informasi awal untuk mencari pendampingan atau
                      menyampaikan pengaduan.
                    </span>
                  </span>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-800" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("kategori_kbgo")}
                  className="group flex w-full items-start gap-4 px-5 py-5 text-left transition hover:bg-white sm:px-7"
                >
                  <span className="mt-0.5 text-blue-800">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900">
                      Memahami KBGO
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      Kenali bentuk kekerasan berbasis gender online dan langkah
                      yang dapat dipertimbangkan.
                    </span>
                  </span>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-800" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("program")}
                  className="group flex w-full items-start gap-4 px-5 py-5 text-left transition hover:bg-white sm:px-7"
                >
                  <span className="mt-0.5 text-blue-800">
                    <Users className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900">
                      Mengenal program
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      Pelajari area kerja, kegiatan, dan pendekatan pemberdayaan
                      TPDotcom.
                    </span>
                  </span>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-800" />
                </button>
              </div>

              <div className="border-t border-stone-200 px-5 py-4 sm:px-7">
                <p className="text-xs leading-5 text-slate-500">
                  Jika kamu berada dalam bahaya langsung, utamakan keselamatan
                  fisik dan hubungi layanan darurat setempat atau orang yang
                  dapat dipercaya.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* PERTOLONGAN PERTAMA KBGO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-700" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                Panduan Praktis
              </span>
            </div>

            <h2 className="mt-5 font-editorial text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Ketika kekerasan terjadi di ruang digital
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              Kamu tidak harus menyelesaikan semuanya sekaligus. Mulai dengan
              langkah yang aman dan pilih informasi sesuai situasi yang sedang
              dihadapi.
            </p>

            <button
              type="button"
              onClick={() =>
                onNavigate("detail_panduan_protokol_penghapusan_ncii")
              }
              className="mt-6 inline-flex items-center gap-2 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
            >
              Baca panduan penanganan
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-6 text-xs leading-5 text-slate-500">
              Panduan umum ini bukan pengganti pendampingan hukum, bantuan
              teknis khusus, atau layanan darurat.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-y border-stone-200">
              <div className="grid grid-cols-2 border-b border-stone-200 sm:grid-cols-4">
                {(
                  [
                    ["ncii", "Konten intim"],
                    ["doxing", "Doxing"],
                    ["stalking", "Penguntitan"],
                    ["deepfake", "Manipulasi AI"],
                  ] as [EmergencyTab, string][]
                ).map(([key, label], index) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveEmergencyTab(key)}
                    aria-pressed={activeEmergencyTab === key}
                    className={`relative px-3 py-4 text-left text-xs font-semibold transition sm:px-4 ${
                      index % 2 === 0
                        ? "border-r border-stone-200 sm:border-r-0"
                        : ""
                    } ${
                      index < 2 ? "border-b border-stone-200 sm:border-b-0" : ""
                    } ${index < 3 ? "sm:border-r sm:border-stone-200" : ""} ${
                      activeEmergencyTab === key
                        ? "bg-blue-50 text-blue-900"
                        : "bg-white text-slate-500 hover:bg-stone-50 hover:text-slate-900"
                    }`}
                  >
                    {label}
                    {activeEmergencyTab === key && (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800" />
                    )}
                  </button>
                ))}
              </div>

              <div className="bg-white px-5 py-6 sm:px-7 sm:py-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-800">
                  {currentGuide.eyebrow}
                </p>

                <h3 className="mt-3 max-w-2xl font-editorial text-2xl font-bold leading-snug text-slate-950">
                  {currentGuide.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  {currentGuide.introduction}
                </p>

                <ol className="mt-6 space-y-0">
                  {currentGuide.steps.map((step, index) => (
                    <li
                      key={`${activeEmergencyTab}-${index}`}
                      className="flex gap-4 border-t border-stone-100 py-4"
                    >
                      <span className="pt-0.5 font-editorial text-lg font-bold text-blue-800">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-7 text-slate-700">{step}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-3 flex flex-col gap-3 border-t border-stone-200 pt-5 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => onNavigate(currentGuide.route)}
                    className="inline-flex min-h-11 items-center justify-center gap-2 bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
                  >
                    {currentGuide.actionLabel}
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate("kontak_pengaduan")}
                    className="inline-flex min-h-11 items-center justify-center border border-stone-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-700 hover:text-blue-800"
                  >
                    Cari pendampingan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM KERJA */}
      <section className="border-y border-stone-200 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-700" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                  Area Kerja
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl font-editorial text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Perubahan membutuhkan lebih dari satu pendekatan.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Program TPDotcom menghubungkan pengetahuan, dukungan, dan
                advokasi untuk menjawab kebutuhan masyarakat.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <button
                type="button"
                onClick={() => onNavigate("program")}
                className="inline-flex items-center gap-2 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Lihat seluruh program
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-10 border-t border-stone-300">
            {PROGRAMS.map((program, index) => (
              <article
                key={program.id}
                className="group grid gap-4 border-b border-stone-300 py-6 sm:py-7 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-start gap-4 md:col-span-4">
                  <span className="pt-1 font-editorial text-xl text-blue-800">
                    0{index + 1}
                  </span>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      {program.category}
                    </span>
                    <h3 className="mt-2 font-editorial text-xl font-bold leading-snug text-slate-950 transition group-hover:text-blue-800">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <div className="md:col-span-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  {program.keyFeatures.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {program.keyFeatures.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                        >
                          <span className="mt-1 text-blue-800">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex items-center justify-between md:col-span-2 md:justify-end md:self-center">
                  <span className="text-slate-400">
                    {programIcons[program.id] ?? (
                      <FileText className="h-5 w-5" />
                    )}
                  </span>

                  <button
                    type="button"
                    onClick={() => onNavigate(program.route || "program")}
                    aria-label={`Pelajari ${program.title}`}
                    className="inline-flex h-10 w-10 items-center justify-center border border-stone-300 text-slate-700 transition hover:border-blue-800 hover:bg-blue-800 hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KATEGORI KBGO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-700" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                Isu dan Pengetahuan
              </span>
            </div>

            <h2 className="mt-5 font-editorial text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Mengenali kekerasan adalah langkah awal.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Pahami bentuk-bentuk kekerasan berbasis gender online, risiko yang
              mungkin muncul, dan pilihan untuk mencari bantuan.
            </p>

            <button
              type="button"
              onClick={() => onNavigate("kategori_kbgo")}
              className="mt-6 inline-flex items-center gap-2 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 hover:text-blue-950"
            >
              Buka katalog KBGO
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Tingkat risiko berbeda sesuai konteks dan kondisi setiap orang.
              Penilaian pada katalog bukan pengganti penilaian keselamatan
              secara individual.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-stone-200">
              {KBGO_CATEGORIES.slice(0, 6).map((category, index) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => onNavigate("kategori_kbgo")}
                  className="group grid w-full grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-stone-200 py-5 text-left transition hover:bg-stone-50 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-5 sm:px-3"
                >
                  <span className="pt-0.5 font-editorial text-lg text-blue-800">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    <span className="block font-editorial text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-800">
                      {category.name}
                    </span>

                    <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {category.shortDesc}
                    </span>

                    <span className="mt-3 block text-xs leading-5 text-slate-500">
                      Dasar hukum:{" "}
                      {category.legalBasis?.[0] ?? "Lihat penjelasan lengkap"}
                    </span>
                  </span>

                  <ArrowRight className="mt-1 h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-800" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIKASI */}
      <section className="border-y border-stone-200 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-700" />
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                  Publikasi dan Sumber Belajar
                </span>
              </div>

              <h2 className="mt-5 font-editorial text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                Pengetahuan yang dapat digunakan bersama.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Temukan bahan bacaan dan dokumen yang membantu masyarakat
                memahami isu, memperkuat kapasitas, serta mendukung kerja
                advokasi.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("publikasi")}
              className="inline-flex shrink-0 items-center gap-2 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 hover:text-blue-950"
            >
              Semua publikasi ({PUBLICATIONS.length})
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {PUBLICATIONS.length > 0 ? (
            <div className="mt-9 grid grid-cols-1 gap-0 border-y border-stone-300 md:grid-cols-2 md:divide-x md:divide-stone-300">
              {PUBLICATIONS.slice(0, 4).map((publication, index) => (
                <button
                  key={publication.id}
                  type="button"
                  onClick={() =>
                    onNavigate(
                      (publication.downloadUrl || "publikasi") as PageRoute,
                    )
                  }
                  className={`group flex h-full flex-col items-start p-5 text-left transition hover:bg-white sm:p-7 ${
                    index > 1 ? "border-t border-stone-300" : ""
                  } ${index % 2 === 1 ? "md:border-t-0" : ""}`}
                >
                  <div className="flex w-full items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-800">
                      Bahan bacaan
                    </span>
                    <FileText className="h-5 w-5 text-slate-400 transition group-hover:text-blue-800" />
                  </div>

                  <h3 className="mt-5 font-editorial text-xl font-bold leading-snug text-slate-950 group-hover:text-blue-800">
                    {publication.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                    {publication.subtitle}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-800">
                    Baca publikasi
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-9 border-y border-stone-300 py-10">
              <p className="text-sm text-slate-600">
                Publikasi sedang disiapkan. Kunjungi halaman publikasi untuk
                melihat informasi terbaru.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PENDEKATAN ORGANISASI */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-700" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-800">
                Cara Kami Bekerja
              </span>
            </div>

            <h2 className="mt-5 font-editorial text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
              Pendampingan yang menghormati pilihan setiap orang.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-slate-700">
              Setiap orang memiliki situasi, kebutuhan, dan pertimbangan
              keselamatan yang berbeda. Respons yang baik dimulai dengan
              mendengarkan, menghormati keputusan orang yang terdampak, serta
              menyediakan informasi yang jelas mengenai pilihan yang tersedia.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-0 border-t border-stone-200 sm:grid-cols-3">
              <div className="border-b border-stone-200 py-5 sm:border-b-0 sm:border-r sm:pr-5">
                <span className="text-xs font-bold text-blue-800">01</span>
                <h3 className="mt-3 text-sm font-bold text-slate-950">
                  Dengarkan
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Mulai dari pengalaman dan kebutuhan orang yang terdampak.
                </p>
              </div>

              <div className="border-b border-stone-200 py-5 sm:border-b-0 sm:border-r sm:px-5">
                <span className="text-xs font-bold text-blue-800">02</span>
                <h3 className="mt-3 text-sm font-bold text-slate-950">
                  Beri pilihan
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Jelaskan pilihan yang tersedia tanpa menyalahkan korban.
                </p>
              </div>

              <div className="py-5 sm:pl-5">
                <span className="text-xs font-bold text-blue-800">03</span>
                <h3 className="mt-3 text-sm font-bold text-slate-950">
                  Hormati keputusan
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Utamakan persetujuan dan pertimbangan keselamatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA AKHIR */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden border border-slate-800 bg-slate-950 text-white lg:grid-cols-12">
          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:col-span-8 lg:px-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                Langkah Berikutnya
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl font-editorial text-3xl font-bold leading-tight sm:text-4xl">
              Kamu tidak harus mencari jawaban sendirian.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Mulai dengan membaca informasi yang kamu butuhkan atau menghubungi
              organisasi untuk menanyakan pilihan dukungan yang tersedia.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate("kontak_pengaduan")}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <Lock className="h-4 w-4" />
                Hubungi kami
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("program")}
                className="inline-flex min-h-12 items-center justify-center border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Lihat program kami
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-slate-800 bg-slate-900 px-6 py-8 sm:px-10 lg:col-span-4 lg:border-l lg:border-t-0 lg:px-8">
            <div>
              <HeartHandshake className="h-6 w-6 text-blue-300" />

              <h3 className="mt-5 font-editorial text-2xl font-bold">
                Dukung kerja bersama.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Solidaritas masyarakat ikut mendukung keberlanjutan kerja
                pemberdayaan dan advokasi.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenDonation}
              className="mt-7 inline-flex items-center gap-2 self-start border-b border-blue-300 pb-1 text-sm font-semibold text-blue-300 transition hover:border-white hover:text-white"
            >
              Dukung melalui donasi
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Transformasi Perempuan Dotcom</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Pemberdayaan masyarakat dan keadilan digital
          </span>
        </div>
      </section>
    </main>
  );
};
