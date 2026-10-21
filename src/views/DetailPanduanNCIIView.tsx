import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileCheck,
  LockKeyhole,
  ShieldAlert,
} from "lucide-react";
import React, { useState } from "react";
import { PageRoute } from "../types";

interface DetailPanduanNCIIViewProps {
  onNavigate: (route: PageRoute) => void;
}

const sampleTakedownTemplate = `Kepada Tim Kepercayaan dan Keamanan,

Saya ingin melaporkan konten intim yang dibagikan tanpa persetujuan orang yang ada di dalam konten tersebut.

Tautan konten:
[MASUKKAN URL KONTEN]

Nama pengguna atau akun terkait:
[MASUKKAN JIKA DIKETAHUI]

Konten tersebut dibagikan tanpa persetujuan dan menimbulkan risiko terhadap privasi serta keselamatan pihak yang terdampak.

Saya meminta agar laporan ini ditinjau berdasarkan kebijakan platform mengenai konten intim non-konsensual. Jika terbukti melanggar kebijakan, mohon lakukan tindakan yang sesuai, termasuk pembatasan akses atau penghapusan konten.

Saya berharap identitas dan informasi pribadi pelapor ditangani secara hati-hati sesuai kebijakan privasi platform.

Terima kasih.

[NAMA ATAU INISIAL, JIKA DIPERLUKAN]`;

const checklist = [
  {
    number: 1,
    title: "Simpan informasi yang relevan",
    description:
      "Catat tautan, nama akun, waktu kejadian, dan bentuk ancaman yang diterima. Simpan pesan atau tangkapan layar yang relevan jika aman dilakukan.",
    details: [
      "Catat URL lengkap unggahan atau profil terkait.",
      "Simpan nama pengguna, tanggal, dan waktu yang terlihat.",
      "Simpan pesan ancaman beserta konteks percakapannya.",
    ],
    note: "Jangan menyebarkan ulang konten intim untuk mengumpulkan bukti. Jika konten melibatkan anak di bawah 18 tahun, jangan mengunduh atau meneruskan materi tersebut.",
  },
  {
    number: 2,
    title: "Pertimbangkan layanan StopNCII atau Take It Down",
    description:
      "Layanan ini membuat sidik jari digital atau hash dari file di perangkat. Hash dapat digunakan oleh platform peserta untuk mendeteksi kecocokan konten sesuai kebijakan mereka.",
    details: [
      "StopNCII ditujukan untuk orang dewasa yang memenuhi persyaratan layanan.",
      "Take It Down ditujukan untuk gambar atau video intim yang dibuat ketika orang di dalamnya berusia di bawah 18 tahun.",
      "Periksa persyaratan, informasi privasi, dan daftar platform peserta sebelum memulai.",
    ],
    note: "Kedua layanan tidak menjamin penghapusan di seluruh internet. Jangan mengunggah atau mengirim konten kepada pihak lain hanya untuk mencoba layanan ini.",
  },
  {
    number: 3,
    title: "Laporkan konten ke platform dan mesin pencari",
    description:
      "Ajukan laporan melalui kanal resmi platform tempat konten diunggah. Jika konten muncul di Google Search, Anda juga dapat meminta peninjauan untuk menghapus hasil pencarian yang memenuhi persyaratan Google.",
    details: [
      "Gunakan fitur laporan untuk konten intim yang dibagikan tanpa persetujuan.",
      "Sertakan tautan dan informasi yang diminta formulir resmi.",
      "Simpan nomor laporan atau konfirmasi jika tersedia.",
    ],
    note: "Penghapusan hasil pencarian tidak otomatis menghapus konten dari situs asal. Jika konten masih tersedia, laporkan juga kepada situs atau platform sumbernya.",
  },
  {
    number: 4,
    title: "Cari dukungan dan pertimbangkan langkah lanjutan",
    description:
      "Jika terdapat ancaman, pemerasan, penyebaran berulang, atau risiko keselamatan, pertimbangkan menghubungi orang tepercaya, layanan pendamping, bantuan hukum, atau pihak berwenang yang relevan.",
    details: [
      "Jangan merasa harus menghadapi pelaku sendirian.",
      "Jangan memenuhi tuntutan uang atau mengirim konten tambahan karena tekanan.",
      "Pertimbangkan keselamatan perangkat dan akun sebelum memblokir pelaku.",
    ],
    note: "Anda tidak harus menyelesaikan semua langkah sekaligus. Pilih tindakan yang paling aman sesuai situasi Anda.",
  },
];

export const DetailPanduanNCIIView: React.FC<DetailPanduanNCIIViewProps> = ({
  onNavigate,
}) => {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>(
    {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  );

  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const completedCount = Object.values(completedSteps).filter(Boolean).length;

  const toggleStep = (step: number) => {
    setCompletedSteps((previous) => ({
      ...previous,
      [step]: !previous[step],
    }));
  };

  const handleCopyTemplate = async () => {
    setCopyError(false);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(sampleTakedownTemplate);
        setCopiedTemplate(true);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = sampleTakedownTemplate;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();

        const success = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (!success) {
          throw new Error("Copy failed");
        }

        setCopiedTemplate(true);
      }
    } catch {
      setCopyError(true);
    }
  };

  const resources = [
    {
      number: "01",
      title: "StopNCII.org",
      description:
        "Untuk orang dewasa yang memenuhi kriteria layanan dan ingin membantu mencegah penyebaran gambar intim non-konsensual.",
      url: "https://stopncii.org/",
      action: "Buka StopNCII",
    },
    {
      number: "02",
      title: "Take It Down",
      description:
        "Layanan untuk gambar atau video intim yang dibuat ketika orang di dalamnya berusia di bawah 18 tahun.",
      url: "https://takeitdown.ncmec.org/",
      action: "Buka Take It Down",
    },
    {
      number: "03",
      title: "Bantuan Google Search",
      description:
        "Pelajari cara mengajukan permintaan peninjauan dan penghapusan hasil pencarian yang menampilkan gambar intim tertentu.",
      url: "https://support.google.com/websearch/",
      action: "Buka Pusat Bantuan",
    },
  ];

  return (
    <main className="pb-24">
      {/* Header */}
      <section className="border-b border-stone-200 bg-[#f8f7f3]">
        <div className="mx-auto max-w-5xl px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
          <button
            type="button"
            onClick={() => onNavigate("publikasi")}
            className="mb-10 inline-flex items-center gap-2 text-sm text-stone-600 transition-colors hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke publikasi
          </button>

          <div className="grid gap-8 md:grid-cols-[1fr_190px] md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
                Panduan praktis / Keamanan digital
              </p>

              <h1 className="max-w-3xl font-editorial text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Panduan menghadapi penyebaran konten intim tanpa persetujuan
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                Langkah awal untuk menjaga keselamatan, mendokumentasikan
                kejadian secara hati-hati, melaporkan konten, dan mencari
                dukungan ketika gambar atau video intim disebarkan tanpa
                persetujuan.
              </p>
            </div>

            <div className="border-l-2 border-blue-800 py-1 pl-5">
              <ShieldAlert className="mb-4 h-7 w-7 text-blue-800" />
              <p className="text-sm font-semibold text-slate-900">
                Utamakan keselamatan
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Tidak semua langkah cocok untuk setiap situasi. Pilih yang
                paling aman untuk Anda.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-start gap-4 border-y border-amber-300/70 py-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Sebelum memulai
              </h2>
              <p className="mt-1 text-sm leading-6 text-stone-700">
                Jangan menyalahkan diri sendiri. Hindari membayar pemeras atau
                mengirim konten tambahan karena tekanan. Jika perangkat Anda
                mungkin dipantau pelaku, gunakan perangkat yang lebih aman untuk
                mencari bantuan bila memungkinkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="mx-auto max-w-5xl px-5 pt-14 sm:px-8 sm:pt-20">
        <div className="mb-9 flex flex-col gap-5 border-b border-stone-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
              Panduan tindakan
            </p>
            <h2 className="font-editorial text-2xl font-bold text-slate-900 sm:text-3xl">
              Langkah yang bisa Anda pertimbangkan
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600">
              Gunakan daftar ini sebagai pengingat. Anda dapat menandai langkah
              yang sudah dilakukan selama halaman ini terbuka.
            </p>
          </div>

          <div className="min-w-36">
            <div className="mb-2 flex items-center justify-between gap-4 text-xs text-stone-500">
              <span>Progres checklist</span>
              <span className="font-semibold tabular-nums text-slate-900">
                {completedCount}/4
              </span>
            </div>
            <div
              className="h-1.5 w-full bg-stone-200"
              role="progressbar"
              aria-label="Progres checklist"
              aria-valuemin={0}
              aria-valuemax={4}
              aria-valuenow={completedCount}
            >
              <div
                className="h-full bg-blue-800 transition-all duration-300"
                style={{ width: `${(completedCount / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="divide-y divide-stone-200">
          {checklist.map((step) => {
            const completed = completedSteps[step.number];

            return (
              <article
                key={step.number}
                className={`py-8 transition-colors sm:py-10 ${
                  completed ? "bg-emerald-50/30" : ""
                }`}
              >
                <div className="grid gap-5 sm:grid-cols-[54px_1fr] sm:gap-7">
                  <div className="flex items-start">
                    <span
                      className={`flex h-11 w-11 items-center justify-center border text-sm font-semibold ${
                        completed
                          ? "border-emerald-700 bg-emerald-700 text-white"
                          : "border-stone-300 text-slate-800"
                      }`}
                    >
                      {completed ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        String(step.number).padStart(2, "0")
                      )}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="max-w-2xl font-editorial text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                        {step.title}
                      </h3>

                      <button
                        type="button"
                        onClick={() => toggleStep(step.number)}
                        aria-pressed={completed}
                        className={`inline-flex shrink-0 items-center justify-center gap-2 border px-3 py-2 text-xs font-semibold transition-colors ${
                          completed
                            ? "border-emerald-700 bg-emerald-700 text-white"
                            : "border-stone-300 bg-white text-slate-700 hover:border-blue-800 hover:text-blue-800"
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <span className="h-4 w-4 rounded-full border border-current" />
                        )}
                        {completed ? "Sudah dilakukan" : "Tandai selesai"}
                      </button>
                    </div>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">
                      {step.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-800" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 border-l-2 border-amber-400 bg-amber-50/60 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                        Perlu diperhatikan
                      </p>
                      <p className="mt-1 text-sm leading-6 text-stone-700">
                        {step.note}
                      </p>
                    </div>

                    {step.number === 2 && (
                      <div className="mt-6 grid gap-0 border-y border-stone-200 sm:grid-cols-2 sm:divide-x sm:divide-stone-200">
                        <a
                          href="https://stopncii.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-4 py-5 pr-4"
                        >
                          <div>
                            <p className="font-semibold text-slate-900">
                              StopNCII.org
                            </p>
                            <p className="mt-1 text-xs leading-5 text-stone-600">
                              Untuk orang dewasa yang memenuhi kriteria layanan.
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-blue-800" />
                        </a>

                        <a
                          href="https://takeitdown.ncmec.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-4 border-t border-stone-200 py-5 sm:border-t-0 sm:pl-5"
                        >
                          <div>
                            <p className="font-semibold text-slate-900">
                              Take It Down
                            </p>
                            <p className="mt-1 text-xs leading-5 text-stone-600">
                              Untuk konten yang dibuat ketika orang di dalamnya
                              berusia di bawah 18 tahun.
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-blue-800" />
                        </a>
                      </div>
                    )}

                    {step.number === 3 && (
                      <a
                        href="https://support.google.com/websearch/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 border-b border-blue-800 pb-1 text-sm font-semibold text-blue-800 hover:text-blue-950"
                      >
                        Buka Pusat Bantuan Google Search
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                    {step.number === 4 && (
                      <button
                        type="button"
                        onClick={() => onNavigate("kontak_pengaduan")}
                        className="mt-6 inline-flex items-center gap-3 border border-blue-800 bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
                      >
                        Lihat kanal kontak dan pengaduan
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Reporting template */}
      <section className="mt-16 border-y border-stone-200 bg-[#f8f7f3] sm:mt-24">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <FileCheck className="mb-5 h-7 w-7 text-blue-800" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                Alat bantu pelaporan
              </p>
              <h2 className="mt-3 font-editorial text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                Contoh teks laporan ke platform
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Sesuaikan contoh berikut dengan situasi Anda. Isi hanya
                informasi yang diperlukan dan hindari mencantumkan data pribadi
                yang tidak relevan.
              </p>

              <div className="mt-6 flex items-start gap-3 border-t border-stone-300 pt-5">
                <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
                <p className="text-xs leading-5 text-stone-600">
                  Periksa kebijakan privasi dan kanal resmi platform sebelum
                  mengirim laporan. Jangan mengirim salinan gambar intim melalui
                  kanal yang tidak jelas.
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-300 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Template · Bahasa Indonesia
                </span>
                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="inline-flex items-center gap-2 border border-stone-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:border-blue-800 hover:text-blue-800"
                >
                  {copiedTemplate ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copiedTemplate ? "Berhasil disalin" : "Salin template"}
                </button>
              </div>

              <pre className="overflow-x-auto whitespace-pre-wrap break-words py-5 font-sans text-sm leading-7 text-slate-700">
                {sampleTakedownTemplate}
              </pre>

              {copyError && (
                <p role="alert" className="text-sm text-red-700">
                  Template belum berhasil disalin. Silakan pilih dan salin teks
                  secara manual.
                </p>
              )}

              {copiedTemplate && (
                <p role="status" className="text-sm text-emerald-800">
                  Template berhasil disalin. Periksa dan sesuaikan sebelum
                  mengirim laporan.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resource directory */}
      <section className="mx-auto max-w-5xl px-5 pt-14 sm:px-8 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
          Direktori bantuan
        </p>
        <h2 className="mt-3 max-w-2xl font-editorial text-2xl font-bold text-slate-900 sm:text-3xl">
          Sumber resmi untuk langkah berikutnya
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
          Layanan berikut dikelola oleh pihak eksternal, bukan oleh TPDotcom.
          Baca ketentuan masing-masing layanan sebelum menggunakannya.
        </p>

        <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
          {resources.map((resource) => (
            <div
              key={resource.number}
              className="grid gap-3 py-6 sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-5"
            >
              <span className="font-editorial text-xl text-stone-400">
                {resource.number}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-stone-600">
                  {resource.description}
                </p>
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                {resource.action}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-stone-400 pl-5">
          <h3 className="font-semibold text-slate-900">
            Catatan tentang hukum dan dukungan
          </h3>
          <p className="mt-2 text-sm leading-7 text-stone-600">
            Panduan ini bersifat informasi umum, bukan nasihat hukum atau
            jaminan bahwa konten akan dihapus. Penerapan hukum bergantung pada
            fakta dan konteks kasus. Untuk memahami pilihan yang sesuai,
            pertimbangkan berkonsultasi dengan pendamping atau penasihat hukum
            yang kompeten.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => onNavigate("publikasi")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke publikasi
          </button>

          <button
            type="button"
            onClick={() => onNavigate("kontak_pengaduan")}
            className="inline-flex items-center gap-2 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
          >
            Lihat informasi kontak TPDotcom
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default DetailPanduanNCIIView;
