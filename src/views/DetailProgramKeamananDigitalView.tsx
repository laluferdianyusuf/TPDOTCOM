import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  EyeOff,
  FileCode,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { PageRoute } from "../types";

interface DetailProgramKeamananDigitalViewProps {
  onNavigate: (route: PageRoute) => void;
}

type AssessmentKey =
  | "q1_2fa"
  | "q2_unique_pwd"
  | "q3_location"
  | "q4_unknown_apps"
  | "q5_private_social"
  | "q6_secure_backup";

interface AssessmentQuestion {
  key: AssessmentKey;
  number: string;
  title: string;
  description: string;
  positiveLabel: string;
  negativeLabel: string;
  positiveValue: boolean;
  points: number;
}

const QUESTIONS: AssessmentQuestion[] = [
  {
    key: "q1_2fa",
    number: "01",
    title: "Apakah akun pentingmu sudah menggunakan autentikasi dua faktor?",
    description:
      "Aktifkan 2FA pada email, WhatsApp, dan media sosial. Aplikasi autentikator atau passkey dapat menjadi pilihan, tergantung dukungan layanan.",
    positiveLabel: "Sudah aktif",
    negativeLabel: "Belum aktif",
    positiveValue: true,
    points: 20,
  },
  {
    key: "q2_unique_pwd",
    number: "02",
    title: "Apakah setiap akun menggunakan kata sandi yang berbeda?",
    description:
      "Kata sandi yang unik membantu membatasi dampak ketika salah satu akun mengalami kebocoran. Password manager dapat membantu mengelolanya.",
    positiveLabel: "Berbeda",
    negativeLabel: "Masih sama",
    positiveValue: true,
    points: 20,
  },
  {
    key: "q3_location",
    number: "03",
    title: "Apakah kamu memeriksa akses berbagi lokasi secara berkala?",
    description:
      "Periksa lokasi real-time, izin lokasi aplikasi, serta perangkat dan akun yang masih memiliki akses ke lokasimu.",
    positiveLabel: "Sudah diperiksa",
    negativeLabel: "Belum diperiksa",
    positiveValue: true,
    points: 15,
  },
  {
    key: "q4_unknown_apps",
    number: "04",
    title: "Apakah kamu memeriksa aplikasi dan izin akses yang tidak dikenal?",
    description:
      "Tinjau aplikasi terpasang, akses administrator, aksesibilitas, mikrofon, kamera, dan izin lain sesuai sistem perangkatmu.",
    positiveLabel: "Sudah diperiksa",
    negativeLabel: "Belum diperiksa",
    positiveValue: true,
    points: 15,
  },
  {
    key: "q5_private_social",
    number: "05",
    title: "Apakah pengaturan privasi media sosial sudah sesuai kebutuhanmu?",
    description:
      "Tinjau siapa yang dapat melihat unggahan, menghubungimu, menandai akunmu, dan menemukan profilmu. Akun privat bukan perlindungan mutlak.",
    positiveLabel: "Sudah ditinjau",
    negativeLabel: "Belum ditinjau",
    positiveValue: true,
    points: 15,
  },
  {
    key: "q6_secure_backup",
    number: "06",
    title: "Apakah kamu memiliki cadangan data penting yang aman?",
    description:
      "Simpan salinan data penting di tempat yang terlindungi. Pastikan akun cadangan aman dan jangan mencadangkan materi sensitif ke lokasi bersama tanpa pertimbangan.",
    positiveLabel: "Sudah tersedia",
    negativeLabel: "Belum tersedia",
    positiveValue: true,
    points: 15,
  },
];

const INITIAL_ANSWERS: Record<AssessmentKey, boolean> = {
  q1_2fa: true,
  q2_unique_pwd: false,
  q3_location: false,
  q4_unknown_apps: false,
  q5_private_social: true,
  q6_secure_backup: false,
};

const SERVICES = [
  {
    number: "01",
    icon: Smartphone,
    title: "Pemeriksaan keamanan perangkat",
    description:
      "Meninjau pengaturan keamanan, izin aplikasi, akses akun, dan tanda-tanda aktivitas yang tidak dikenal. Pemeriksaan tidak selalu dapat memastikan ada atau tidaknya spyware.",
    details: [
      "Meninjau aplikasi dan izin akses",
      "Memeriksa sesi akun dan perangkat tertaut",
      "Membahas langkah pengamanan sesuai situasi",
    ],
  },
  {
    number: "02",
    icon: FileCode,
    title: "Dokumentasi bukti digital",
    description:
      "Membantu memahami cara menyimpan informasi terkait dugaan KBGO dengan mempertimbangkan konteks, keutuhan, privasi, dan risiko keselamatan.",
    details: [
      "Mencatat tautan, akun, tanggal, dan konteks",
      "Menyimpan salinan secara aman",
      "Mendiskusikan kebutuhan rujukan hukum",
    ],
  },
  {
    number: "03",
    icon: EyeOff,
    title: "Panduan pelaporan konten intim",
    description:
      "Memberikan informasi mengenai pilihan pelaporan konten intim nonkonsensual (NCII), termasuk mekanisme yang tersedia pada platform dan layanan yang relevan.",
    details: [
      "Meninjau mekanisme pelaporan platform",
      "Mengenali opsi bantuan seperti StopNCII.org",
      "Mempertimbangkan risiko sebelum mengambil tindakan",
    ],
  },
  {
    number: "04",
    icon: LockKeyhole,
    title: "Privasi dan pencegahan doxing",
    description:
      "Mendampingi identifikasi informasi pribadi yang terekspos dan menyusun langkah untuk mengurangi paparan, sesuai kontrol yang tersedia pada masing-masing layanan.",
    details: [
      "Meninjau informasi pribadi yang terbuka",
      "Mencari opsi penghapusan atau pembatasan",
      "Memperkuat keamanan akun dan identitas digital",
    ],
  },
];

export const DetailProgramKeamananDigitalView: React.FC<
  DetailProgramKeamananDigitalViewProps
> = ({ onNavigate }) => {
  const [answers, setAnswers] =
    useState<Record<AssessmentKey, boolean>>(INITIAL_ANSWERS);

  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  const score = QUESTIONS.reduce((total, question) => {
    return total + (answers[question.key] ? question.points : 0);
  }, 0);

  const answeredCount = QUESTIONS.filter(
    (question) => answers[question.key] !== undefined,
  ).length;

  const resetAssessment = () => {
    setAnswers(INITIAL_ANSWERS);
    setAssessmentSubmitted(false);
  };

  const updateAnswer = (key: AssessmentKey, value: boolean) => {
    setAnswers((previous) => ({
      ...previous,
      [key]: value,
    }));
    setAssessmentSubmitted(false);
  };

  const getAssessmentResult = () => {
    if (score >= 80) {
      return {
        label: "Kebiasaan perlindungan cukup baik",
        description:
          "Kamu sudah menerapkan beberapa langkah perlindungan dasar. Tetap tinjau pengaturan akun secara berkala dan sesuaikan langkah keamanan dengan risiko yang kamu hadapi.",
        className: "border-emerald-200 bg-emerald-50 text-emerald-900",
      };
    }

    if (score >= 50) {
      return {
        label: "Masih ada hal yang perlu diperkuat",
        description:
          "Beberapa kebiasaan perlindungan sudah diterapkan, tetapi masih ada langkah yang bisa ditingkatkan. Mulailah dari akun utama, kata sandi, dan akses perangkat.",
        className: "border-amber-200 bg-amber-50 text-amber-950",
      };
    }

    return {
      label: "Prioritaskan perlindungan dasar",
      description:
        "Hasil ini menunjukkan masih ada beberapa langkah perlindungan dasar yang belum dilakukan. Pilih satu atau dua langkah yang paling relevan dan lakukan secara bertahap.",
      className: "border-rose-200 bg-rose-50 text-rose-950",
    };
  };

  const assessmentResult = getAssessmentResult();

  return (
    <main className="bg-[#f8f7f3] pb-20 text-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-stone-200">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-xs sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => onNavigate("program")}
            className="text-slate-500 transition-colors hover:text-blue-800"
          >
            Program
          </button>
          <span className="text-stone-400">/</span>
          <span className="font-medium text-slate-900">Keamanan Digital</span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-stone-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:px-12 lg:py-24">
          <div className="flex flex-col items-start">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-800" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800">
                Program TPDotcom
              </span>
            </div>

            <h1 className="max-w-4xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Keamanan digital adalah bagian dari{" "}
              <span className="text-blue-800">hak untuk merasa aman.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Ruang informasi dan pendampingan untuk memahami keamanan akun,
              privasi perangkat, dokumentasi bukti digital, serta pilihan
              penanganan Kekerasan Berbasis Gender Online (KBGO).
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("evaluasi-mandiri")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="inline-flex items-center justify-center gap-3 bg-blue-800 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
              >
                Periksa kebiasaan digital
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("kontak_pengaduan")}
                className="inline-flex items-center justify-center gap-3 border border-stone-300 px-5 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-800 hover:text-blue-800"
              >
                Cari informasi bantuan
              </button>
            </div>

            <p className="mt-5 max-w-lg text-xs leading-6 text-slate-500">
              Informasi di halaman ini bersifat edukatif. Bentuk bantuan yang
              tersedia bergantung pada kebutuhan, kapasitas, dan layanan yang
              dapat diakses.
            </p>
          </div>

          <aside className="flex flex-col justify-between border-t border-stone-300 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center border border-blue-200 text-blue-800">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Fokus pendampingan
              </p>

              <h2 className="mt-3 font-editorial text-2xl font-semibold leading-snug sm:text-3xl">
                Memahami risiko. Menentukan pilihan. Menjaga kendali.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Setiap situasi berbeda. Langkah yang tepat perlu
                mempertimbangkan keamanan, privasi, kondisi korban, dan
                kemungkinan dampak dari setiap tindakan.
              </p>
            </div>

            <div className="mt-8 border-t border-stone-200 pt-5">
              <div className="flex items-start gap-3">
                <LockKeyhole
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-800"
                />
                <p className="text-xs leading-6 text-slate-500">
                  Jangan mengirim kata sandi, kode OTP, atau salinan materi
                  intim melalui kanal komunikasi yang belum kamu pastikan
                  keamanannya.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Service overview */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800">
              Area dukungan
            </p>
            <h2 className="mt-4 max-w-md font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Dukungan digital yang berangkat dari kebutuhan nyata.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Tidak semua masalah membutuhkan langkah teknis yang sama. Memahami
              situasi dan risiko merupakan bagian penting sebelum menentukan
              tindakan.
            </p>
          </div>

          <div className="border-t border-stone-300">
            {SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="grid gap-4 border-b border-stone-200 py-7 sm:grid-cols-[52px_1fr] sm:gap-6 sm:py-8"
                >
                  <div className="flex items-start gap-3 sm:block">
                    <span className="font-editorial text-sm text-stone-400">
                      {service.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center border border-stone-300 text-blue-800 sm:mt-4">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-editorial text-xl font-semibold sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-xs leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-1 shrink-0 text-blue-800"
                            strokeWidth={1.7}
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-assessment */}
      <section
        id="evaluasi-mandiri"
        className="scroll-mt-8 border-y border-stone-200 bg-[#f0eee8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <div className="mb-6 flex h-11 w-11 items-center justify-center border border-blue-200 bg-white text-blue-800">
                <ShieldCheck size={22} strokeWidth={1.5} />
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800">
                Evaluasi mandiri
              </p>

              <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
                Seberapa baik kebiasaan keamanan digitalmu?
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Jawab enam pertanyaan berikut untuk melihat langkah perlindungan
                dasar yang sudah kamu lakukan dan hal yang masih bisa
                diperbaiki.
              </p>

              <div className="mt-7 border-l-2 border-blue-800 pl-4">
                <p className="text-xs leading-6 text-slate-600">
                  Ini bukan pemeriksaan teknis, audit perangkat, atau alat
                  diagnosis. Hasilnya hanya ringkasan kebiasaan berdasarkan
                  jawabanmu.
                </p>
              </div>

              <button
                type="button"
                onClick={resetAssessment}
                className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition-colors hover:text-blue-800"
              >
                <RefreshCw size={14} />
                Atur ulang jawaban
              </button>
            </div>

            <div className="border border-stone-200 bg-white">
              <div className="flex items-center justify-between gap-4 border-b border-stone-200 px-5 py-4 sm:px-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Pemeriksaan kebiasaan
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {QUESTIONS.length} pertanyaan · Tidak memerlukan data
                    pribadi
                  </p>
                </div>

                <span className="shrink-0 font-editorial text-xl font-semibold text-blue-800">
                  {answeredCount}/{QUESTIONS.length}
                </span>
              </div>

              <div className="divide-y divide-stone-200">
                {QUESTIONS.map((question) => {
                  const answer = answers[question.key];

                  return (
                    <fieldset
                      key={question.key}
                      className="min-w-0 px-5 py-6 sm:px-7 sm:py-7"
                    >
                      <legend className="w-full">
                        <span className="mb-2 block text-[11px] font-bold tracking-[0.15em] text-blue-800">
                          PERTANYAAN {question.number}
                        </span>
                        <span className="block text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                          {question.title}
                        </span>
                      </legend>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {question.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {[true, false].map((value) => {
                          const label =
                            value === question.positiveValue
                              ? question.positiveLabel
                              : question.negativeLabel;

                          const selected = answer === value;

                          return (
                            <button
                              key={String(value)}
                              type="button"
                              aria-pressed={selected}
                              onClick={() => updateAnswer(question.key, value)}
                              className={`border px-3.5 py-2.5 text-xs font-semibold transition-colors ${
                                selected
                                  ? "border-blue-800 bg-blue-800 text-white"
                                  : "border-stone-300 bg-white text-slate-700 hover:border-blue-800 hover:text-blue-800"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  );
                })}
              </div>

              <div className="border-t border-stone-200 bg-[#faf9f6] p-5 sm:p-7">
                <button
                  type="button"
                  onClick={() => setAssessmentSubmitted(true)}
                  className="flex w-full items-center justify-center gap-3 bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                >
                  Lihat ringkasan jawaban
                  <ArrowRight size={16} />
                </button>

                {assessmentSubmitted && (
                  <div
                    aria-live="polite"
                    className={`mt-5 border p-5 sm:p-6 ${assessmentResult.className}`}
                  >
                    <div className="flex items-start gap-3">
                      {score >= 80 ? (
                        <CheckCircle2 size={22} className="mt-0.5 shrink-0" />
                      ) : (
                        <AlertTriangle size={22} className="mt-0.5 shrink-0" />
                      )}

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.12em]">
                          Ringkasan kebiasaan
                        </p>
                        <h3 className="mt-2 font-editorial text-2xl font-semibold">
                          {score}/100
                        </h3>
                        <p className="mt-1 text-sm font-semibold">
                          {assessmentResult.label}
                        </p>
                        <p className="mt-3 text-xs leading-6 opacity-90">
                          {assessmentResult.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-current/15 pt-4">
                      <p className="text-xs font-bold">Langkah selanjutnya</p>
                      <p className="mt-2 text-xs leading-6 opacity-90">
                        Prioritaskan jawaban yang masih menunjukkan langkah
                        perlindungan belum dilakukan. Jika kamu merasa sedang
                        dipantau atau berada dalam situasi berbahaya, jangan
                        langsung menghapus aplikasi atau mengubah pengaturan
                        tanpa mempertimbangkan risiko keselamatan.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigate("kontak_pengaduan")}
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold underline underline-offset-4"
                    >
                      Cari informasi bantuan
                      <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety note */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-6 border-b border-stone-300 pb-10 sm:grid-cols-[48px_1fr] sm:gap-8">
          <div className="flex h-11 w-11 items-center justify-center border border-amber-300 text-amber-800">
            <AlertTriangle size={21} strokeWidth={1.6} />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-800">
              Utamakan keselamatan
            </p>
            <h2 className="mt-3 max-w-2xl font-editorial text-2xl font-semibold sm:text-3xl">
              Tidak semua perubahan pengaturan aman dilakukan saat itu juga.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Jika seseorang mungkin memantau perangkatmu, perubahan kata sandi,
              penghapusan aplikasi, atau penonaktifan berbagi lokasi bisa
              diketahui oleh orang tersebut. Bila memungkinkan, gunakan
              perangkat yang lebih aman untuk mencari bantuan dan susun langkah
              berdasarkan situasimu.
            </p>
          </div>
        </div>
      </section>

      {/* Community education */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden border border-slate-800 bg-slate-950 text-white md:grid-cols-[1fr_0.75fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 text-blue-300">
              <Users size={19} strokeWidth={1.6} />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                Edukasi komunitas
              </span>
            </div>

            <h2 className="mt-6 max-w-xl font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Membawa percakapan tentang keamanan digital ke ruang komunitas.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              TPDotcom dapat menjadi titik awal untuk membahas KBGO, privasi,
              keamanan akun, dan respons terhadap kekerasan digital bersama
              komunitas, kampus, atau organisasi masyarakat sipil.
            </p>

            <button
              type="button"
              onClick={() => onNavigate("kontak_pengaduan")}
              className="mt-8 inline-flex items-center gap-3 border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-slate-950"
            >
              Diskusikan kebutuhan edukasi
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex flex-col justify-between border-t border-white/15 bg-white/[0.03] p-7 sm:p-10 md:border-l md:border-t-0 lg:p-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Prinsip pendampingan
              </p>

              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Berpusat pada korban",
                    text: "Menghormati keputusan dan kebutuhan orang yang mencari bantuan.",
                  },
                  {
                    title: "Mempertimbangkan risiko",
                    text: "Tidak menyarankan tindakan teknis tanpa melihat konteks keselamatan.",
                  },
                  {
                    title: "Menjaga privasi",
                    text: "Menghindari pengumpulan informasi sensitif yang tidak diperlukan.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="border-t border-white/15 pt-4"
                  >
                    <span className="text-[10px] font-bold tracking-[0.16em] text-blue-300">
                      0{index + 1}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
