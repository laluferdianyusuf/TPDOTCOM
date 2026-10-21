import {
  AlertCircle,
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  FileText,
  Scale,
  Shield,
} from "lucide-react";
import React from "react";
import { PageRoute } from "../types";

interface DetailPublikasiLaporan2024ViewProps {
  onNavigate: (route: PageRoute) => void;
}

/**
 * Masukkan URL PDF yang benar setelah dokumen final tersedia.
 * Contoh: "/documents/laporan-kbgo-2024.pdf"
 */
const REPORT_PDF_URL = "";

const chapters = [
  {
    num: "01",
    title: "Peta Jalan dan Eskalasi Kasus KBGO",
    pages: "Halaman 14–42",
    summary:
      "Bagian untuk membahas pola kasus, konteks geografis, karakteristik laporan, serta relasi antara korban dan pelaku berdasarkan data yang benar-benar tercantum dalam laporan.",
  },
  {
    num: "02",
    title: "Implementasi Kebijakan dan Penanganan Kasus",
    pages: "Halaman 43–78",
    summary:
      "Pembahasan mengenai implementasi kebijakan, pengalaman korban dalam mengakses keadilan, serta tantangan penanganan kasus berdasarkan temuan dan sumber yang dapat ditelusuri.",
  },
  {
    num: "03",
    title: "Perkembangan Ancaman Digital dan Generative AI",
    pages: "Halaman 79–110",
    summary:
      "Ulasan mengenai penyalahgunaan teknologi, manipulasi gambar, penyebaran konten intim tanpa persetujuan, serta risiko yang muncul bagi perempuan dan kelompok rentan.",
  },
  {
    num: "04",
    title: "Rekomendasi dan Arah Perubahan Kebijakan",
    pages: "Halaman 111–148",
    summary:
      "Rangkaian rekomendasi yang dapat digunakan untuk mendorong perlindungan korban, peningkatan respons platform digital, dan penguatan akses terhadap keadilan.",
  },
];

const platformStats = [
  {
    platform: "WhatsApp",
    percentage: 44,
    cases: "621 kasus",
    desc: "Saluran distribusi yang dicatat dalam draf laporan.",
  },
  {
    platform: "Telegram",
    percentage: 29,
    cases: "409 kasus",
    desc: "Saluran distribusi yang dicatat dalam draf laporan.",
  },
  {
    platform: "Instagram dan Threads",
    percentage: 14,
    cases: "198 kasus",
    desc: "Saluran distribusi yang dicatat dalam draf laporan.",
  },
  {
    platform: "X",
    percentage: 8,
    cases: "113 kasus",
    desc: "Saluran distribusi yang dicatat dalam draf laporan.",
  },
  {
    platform: "Lainnya",
    percentage: 5,
    cases: "71 kasus",
    desc: "Saluran distribusi yang dicatat dalam draf laporan.",
  },
];

const recommendations = [
  {
    icon: Building2,
    number: "01",
    title: "Pemerintah dan pembuat kebijakan",
    description:
      "Memperkuat pelaksanaan kebijakan perlindungan korban, akses terhadap layanan pemulihan, dan koordinasi antarlembaga.",
  },
  {
    icon: Scale,
    number: "02",
    title: "Aparat penegak hukum",
    description:
      "Mendorong penanganan yang berperspektif korban, menghormati privasi, dan menghindari praktik yang berpotensi menyebabkan viktimisasi ulang.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Platform teknologi",
    description:
      "Meningkatkan akses pelaporan, transparansi proses penanganan, dan respons terhadap konten berbahaya sesuai kebijakan serta ketentuan yang berlaku.",
  },
];

export const DetailPublikasiLaporan2024View: React.FC<
  DetailPublikasiLaporan2024ViewProps
> = ({ onNavigate }) => {
  const handleDownload = () => {
    if (!REPORT_PDF_URL.trim()) return;

    const link = document.createElement("a");
    link.href = REPORT_PDF_URL;
    link.download = "";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <main className="min-h-screen bg-[#f8f7f3] pb-20 text-slate-900">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-7 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => onNavigate("publikasi")}
          className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-blue-800"
        >
          <ArrowLeft size={16} />
          Kembali ke publikasi
        </button>
      </div>

      {/* Article header */}
      <header className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 sm:pb-14 sm:pt-14 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-9">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
              <span>Publikasi</span>
              <span className="text-stone-400">/</span>
              <span>Laporan tahunan</span>
              <span className="text-stone-400">/</span>
              <span>2024</span>
            </div>

            <h1 className="mt-7 max-w-5xl font-editorial text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Mengurai Bayang-bayang Kekerasan Digital
            </h1>

            <p className="mt-5 max-w-3xl font-editorial text-xl leading-relaxed text-slate-600 sm:text-2xl">
              Catatan Tahunan Situasi Kekerasan Berbasis Gender Online di
              Indonesia 2024
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-stone-300 py-4 text-xs text-slate-500">
              <span>Transformasi Perempuan Dotcom</span>
              <span className="text-stone-300">/</span>
              <span>Laporan tahun 2024</span>
              <span className="text-stone-300">/</span>
              <span>Bahasa Indonesia</span>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Laporan ini membahas kekerasan berbasis gender online (KBGO),
              tantangan perlindungan di ruang digital, dan pilihan respons yang
              dapat dipertimbangkan oleh masyarakat sipil, pembuat kebijakan,
              serta penyedia layanan digital.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {REPORT_PDF_URL ? (
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
                >
                  <ArrowDownToLine size={17} />
                  Unduh laporan PDF
                </button>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center gap-2 border border-stone-300 bg-stone-100 px-5 py-3 text-sm font-medium text-stone-500"
                  title="Tautan PDF belum dikonfigurasi"
                >
                  <ArrowDownToLine size={17} />
                  PDF belum tersedia
                </span>
              )}

              <button
                type="button"
                onClick={() => onNavigate("kontak_pengaduan")}
                className="inline-flex items-center gap-2 border border-stone-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-800 hover:text-blue-900"
              >
                Hubungi TPDotcom
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Publication information */}
          <aside className="self-start border-t-2 border-slate-900 pt-5 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
              Tentang dokumen
            </p>

            <dl className="mt-5 divide-y divide-stone-200">
              <div className="py-3">
                <dt className="text-xs text-stone-500">Penerbit</dt>
                <dd className="mt-1 text-sm font-medium">
                  Transformasi Perempuan Dotcom
                </dd>
              </div>
              <div className="py-3">
                <dt className="text-xs text-stone-500">Periode</dt>
                <dd className="mt-1 text-sm font-medium">2024</dd>
              </div>
              <div className="py-3">
                <dt className="text-xs text-stone-500">Jenis dokumen</dt>
                <dd className="mt-1 text-sm font-medium">
                  Laporan situasi tahunan
                </dd>
              </div>
              <div className="py-3">
                <dt className="text-xs text-stone-500">Format</dt>
                <dd className="mt-1 text-sm font-medium">PDF, jika tersedia</dd>
              </div>
            </dl>
          </aside>
        </div>
      </header>

      {/* Verification notice */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-start gap-3 border-y border-amber-300 bg-amber-50/70 px-4 py-4 sm:px-5">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-amber-800" />
          <div>
            <p className="text-sm font-semibold text-amber-950">
              Pemeriksaan dokumen sebelum publikasi
            </p>
            <p className="mt-1 text-xs leading-6 text-amber-950/80">
              Pastikan angka statistik, metodologi, temuan, tanggal terbit,
              daftar isi, dan informasi lisensi pada halaman ini sudah cocok
              dengan dokumen final. Jangan gunakan angka dalam draf sebagai data
              resmi sebelum sumbernya dikonfirmasi.
            </p>
          </div>
        </div>
      </section>

      {/* Executive summary */}
      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
              01 / Ringkasan
            </p>
            <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Memahami persoalan di balik layar.
            </h2>
          </div>

          <div className="space-y-5 lg:col-span-8">
            <p className="text-base leading-8 text-slate-700">
              Kekerasan berbasis gender online tidak hanya terjadi melalui satu
              platform atau satu bentuk tindakan. Ancaman, penyebaran konten
              tanpa persetujuan, penyamaran identitas, penguntitan digital, dan
              pemerasan dapat menimbulkan dampak terhadap keselamatan, privasi,
              kesehatan psikologis, serta partisipasi perempuan di ruang
              digital.
            </p>

            <p className="text-base leading-8 text-slate-700">
              Memahami situasi ini memerlukan dokumentasi yang cermat,
              perlindungan identitas korban, serta penjelasan tentang metode
              pengumpulan dan keterbatasan data. Temuan laporan perlu dibaca
              sesuai konteks dan tidak otomatis mewakili seluruh kejadian KBGO
              di Indonesia.
            </p>

            <blockquote className="border-l-2 border-blue-800 py-2 pl-5">
              <p className="font-editorial text-xl leading-relaxed text-slate-800 sm:text-2xl">
                Perlindungan di ruang digital perlu berangkat dari keselamatan,
                martabat, dan pilihan orang yang terdampak.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Platform statistics */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
              02 / Data dan konteks
            </p>
            <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Memahami pola distribusi digital.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Distribusi platform hanya bermakna jika sumber, periode, definisi
              kasus, dan metode penghitungan dijelaskan dengan jelas.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t-2 border-slate-900 pt-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-editorial text-xl font-semibold">
                  Distribusi platform dalam draf
                </h3>
                <span className="border border-amber-300 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-amber-900">
                  Perlu verifikasi
                </span>
              </div>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Angka berikut dipertahankan dari materi yang kamu berikan untuk
                membantu proses penyuntingan. Angka ini bukan data terverifikasi
                dan sebaiknya tidak ditampilkan kepada publik sebelum diperiksa
                terhadap laporan final.
              </p>

              <div className="mt-6 divide-y divide-stone-200 border-y border-stone-300">
                {platformStats.map((item) => (
                  <div key={item.platform} className="py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm font-semibold text-slate-900">
                        {item.platform}
                      </h4>
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs text-stone-500">
                          {item.cases}
                        </span>
                        <span className="font-editorial text-xl font-semibold tabular-nums text-blue-900">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>

                    <div
                      className="mt-3 h-1.5 w-full bg-stone-200"
                      role="img"
                      aria-label={`${item.platform}: ${item.percentage} persen pada data draf`}
                    >
                      <div
                        className="h-full bg-blue-800"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
              03 / Isi laporan
            </p>
            <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Menelusuri isi dokumen.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Ringkasan berikut membantu pembaca memahami cakupan setiap bagian.
              Nomor halaman dan judul perlu dicocokkan dengan PDF final.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t-2 border-slate-900">
              {chapters.map((chapter) => (
                <article
                  key={chapter.num}
                  className="grid gap-3 border-b border-stone-300 py-6 sm:grid-cols-[5rem_1fr] sm:gap-5 sm:py-7"
                >
                  <div>
                    <span className="font-editorial text-2xl font-semibold text-blue-900">
                      {chapter.num}
                    </span>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-stone-500">
                      Bab
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-editorial text-xl font-semibold leading-snug sm:text-2xl">
                        {chapter.title}
                      </h3>
                      <span className="text-[11px] text-stone-500">
                        {chapter.pages}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {chapter.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="border-t-2 border-slate-900 pt-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
                04 / Arah perubahan
              </p>
              <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
                Dari temuan menuju tindakan.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Respons terhadap KBGO membutuhkan kerja bersama, dengan tanggung
                jawab yang disesuaikan pada peran setiap pihak.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-stone-300">
                {recommendations.map((recommendation) => {
                  const Icon = recommendation.icon;

                  return (
                    <article
                      key={recommendation.number}
                      className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center border border-stone-300 text-blue-900">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-stone-500">
                          Rekomendasi {recommendation.number}
                        </p>
                        <h3 className="mt-2 font-editorial text-xl font-semibold">
                          {recommendation.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {recommendation.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation and license */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-8 border-t border-stone-300 pt-6 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
              Informasi publikasi
            </p>
            <h2 className="mt-4 font-editorial text-2xl font-semibold">
              Sitasi dan penggunaan.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="flex items-start gap-3">
              <FileText
                size={19}
                className="mt-1 shrink-0 text-blue-800"
                strokeWidth={1.7}
              />
              <div>
                <h3 className="text-sm font-semibold">Cara mengutip laporan</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Transformasi Perempuan Dotcom. (2024).{" "}
                  <em>
                    Mengurai Bayang-bayang Kekerasan Digital: Catatan Tahunan
                    Situasi Kekerasan Berbasis Gender Online di Indonesia 2024
                  </em>
                  .
                </p>
                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Gunakan format sitasi ini setelah judul, nama penerbit, tahun,
                  dan informasi penerbitan dicocokkan dengan dokumen final.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 border-t border-stone-200 pt-5">
              <BookOpen
                size={19}
                className="mt-1 shrink-0 text-blue-800"
                strokeWidth={1.7}
              />
              <div>
                <h3 className="text-sm font-semibold">Ketentuan penggunaan</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Sebelum publikasi, cantumkan lisensi atau ketentuan penggunaan
                  yang benar-benar berlaku pada dokumen. Jika menggunakan
                  lisensi Creative Commons, pastikan jenis lisensi dan izin
                  pemegang hak telah dikonfirmasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="flex flex-col gap-6 border-t-2 border-slate-900 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-800">
              Terhubung dengan TPDotcom
            </p>
            <h2 className="mt-3 font-editorial text-2xl font-semibold sm:text-3xl">
              Pengetahuan adalah bagian dari perlindungan.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Jelajahi publikasi lainnya untuk memahami isu, kebijakan, dan
              upaya membangun ruang digital yang lebih aman dan setara.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("publikasi")}
            className="inline-flex shrink-0 items-center gap-2 border-b border-blue-800 pb-2 text-sm font-semibold text-blue-900 transition-colors hover:text-blue-700"
          >
            Lihat publikasi lainnya
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
};
