import React, { useState } from "react";
import {
  ShieldAlert,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Download,
  HelpCircle,
  Copy,
  FileCheck,
  Globe,
} from "lucide-react";
import { PageRoute } from "../types";

interface DetailPanduanNCIIViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const DetailPanduanNCIIView: React.FC<DetailPanduanNCIIViewProps> = ({
  onNavigate,
}) => {
  const [completedSteps, setCompletedSteps] = useState<{
    [key: number]: boolean;
  }>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const toggleStep = (step: number) => {
    setCompletedSteps((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const sampleTakedownTemplate = `Kepada Tim Kepercayaan & Keamanan Platform,

Saya menulis untuk meminta PENGHAPUSAN DARURAT atas materi intim non-konsensual (Non-Consensual Intimate Imagery) yang diunggah dan disebarluaskan tanpa persetujuan saya pada tautan URL berikut:
[MASUKKAN TAUTAN URL KONTEN DI SINI]

Tindakan ini merupakan pelanggaran berat terhadap Syarat dan Ketentuan Komunitas Platform Anda, serta memenuhi unsur tindak pidana berdasarkan UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS) Pasal 14 ayat (1) huruf a dan b Republik Indonesia.

Saya meminta agar konten tersebut dan akun pengunggah segera ditangguhkan dalam waktu maksimal 24 jam untuk mencegah penyebaran lebih luas.

Hormat saya,
[Nama Pelapor / Inisial Terlindungi]`;

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(sampleTakedownTemplate);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-800">
            <button
              onClick={() => onNavigate("publikasi")}
              className="hover:underline cursor-pointer"
            >
              Panduan Praktis
            </button>
            <span>/</span>
            <span>Protokol Penghapusan NCII</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Protokol Standar Darurat Korban & Pendamping
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Panduan Protokol Penghapusan Konten Intim Non-Konsensual (NCII)
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Langkah terstruktur, aman, dan berlandaskan hukum untuk menghentikan
            penyebaran, menghapus materi intim dari mesin pencari dan media
            sosial, serta mengamankan bukti sah bagi penegakan hukum.
          </p>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">
                PENTING SEBELUM ANDA MEMULAI:
              </span>
              <p className="leading-relaxed text-amber-800">
                Jangan pernah menghapus obrolan (chat log) ancaman dari pelaku
                sebelum Anda mengamankan tangkapan layarnya. Jangan menuruti
                permintaan uang atau konten baru, karena hal itu tidak akan
                menghentikan pemerasan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Interactive Checklist */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Alur Langkah Demi Langkah
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
            Checklist Tindakan Darurat Penanganan NCII
          </h2>
          <p className="text-sm text-slate-600">
            Centang setiap langkah setelah Anda menyelesaikannya untuk
            memastikan perlindungan optimal.
          </p>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div
            className={`p-6 rounded-3xl border transition-all ${
              completedSteps[1]
                ? "bg-emerald-50/60 border-emerald-300"
                : "bg-white border-stone-200 shadow-xs"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Amankan Alat Bukti Otentik Sebelum Memblokir Pelaku
                </h3>
              </div>
              <button
                type="button"
                onClick={() => toggleStep(1)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  completedSteps[1]
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-200 text-slate-700"
                }`}
              >
                {completedSteps[1] ? "Sudah Selesai ✓" : "Tandai Selesai"}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Bukti digital sangat mudah hilang jika pelaku menghapus pesan
              (unsend) atau menghapus akunnya. Tangkapan layar yang sah harus
              memenuhi kriteria berikut:
            </p>

            <ul className="space-y-2 text-xs text-slate-700 bg-stone-50 p-4 rounded-xl border border-stone-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Screenshot yang memuat{" "}
                  <strong>nama profil, nomor telepon, atau ID username</strong>{" "}
                  pelaku secara jelas (bukan hanya balon chat tanpa identitas).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Tangkapan layar URL lengkap tautan postingan / profil tempat
                  materi disebarkan di browser.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Ekspor riwayat obrolan (Export Chat tanpa media) ke format
                  .txt dan simpan di Google Drive / cloud pribadi yang aman.
                </span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div
            className={`p-6 rounded-3xl border transition-all ${
              completedSteps[2]
                ? "bg-emerald-50/60 border-emerald-300"
                : "bg-white border-stone-200 shadow-xs"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Gunakan Teknologi StopNCII.org untuk Mencegah Unggahan
                </h3>
              </div>
              <button
                type="button"
                onClick={() => toggleStep(2)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  completedSteps[2]
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-200 text-slate-700"
                }`}
              >
                {completedSteps[2] ? "Sudah Selesai ✓" : "Tandai Selesai"}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              <strong>
                Bagaimana StopNCII bekerja secara aman tanpa membocorkan foto
                Anda?
              </strong>
            </p>

            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 text-xs text-blue-950 space-y-2 mb-3">
              <div className="font-bold flex items-center gap-2 text-blue-900">
                <Lock className="w-4 h-4 text-blue-700" />
                <span>
                  Foto asli TIDAK PERNAH dikirim atau disimpan di internet!
                </span>
              </div>
              <p className="leading-relaxed">
                Browser Anda mengubah foto menjadi deretan angka unik (sidik
                jari digital / cryptographic hash). Hanya kode deretan angka
                inilah yang dibagikan ke Meta (Facebook, Instagram, Threads),
                OnlyFans, TikTok, dan Reddit. Jika seseorang mencoba mengunggah
                file yang cocok dengan hash tersebut, sistem platform langsung
                memblokirnya secara otomatis.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://stopncii.org"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <span>Buka Layanan StopNCII.org (Usia 18+)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://takeitdown.ncmec.org"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <span>Take It Down (Jika Usia di Bawah 18)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className={`p-6 rounded-3xl border transition-all ${
              completedSteps[3]
                ? "bg-emerald-50/60 border-emerald-300"
                : "bg-white border-stone-200 shadow-xs"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Hapus Tautan dari Hasil Pencarian Google (De-indexing)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => toggleStep(3)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  completedSteps[3]
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-200 text-slate-700"
                }`}
              >
                {completedSteps[3] ? "Sudah Selesai ✓" : "Tandai Selesai"}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Jika konten sudah terlanjur tersebar di situs web atau blog
              publik, Google memiliki formulir darurat wajib untuk menghapus
              halaman web dan foto eksplisit dari hasil pencarian nama Anda.
            </p>

            <a
              href="https://support.google.com/websearch/troubleshooter/3111061"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-white border border-stone-300 hover:bg-stone-50 text-slate-800 text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <span>Formulir Penghapusan Konten Eksplisit Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Step 4 */}
          <div
            className={`p-6 rounded-3xl border transition-all ${
              completedSteps[4]
                ? "bg-emerald-50/60 border-emerald-300"
                : "bg-white border-stone-200 shadow-xs"
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Eskalasi ke Jalur Darurat TP.com & Bantuan Hukum UU TPKS
                </h3>
              </div>
              <button
                type="button"
                onClick={() => toggleStep(4)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  completedSteps[4]
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-200 text-slate-700"
                }`}
              >
                {completedSteps[4] ? "Sudah Selesai ✓" : "Tandai Selesai"}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Untuk platform yang membandel (seperti grup Telegram tertutup atau
              forum luar negeri), tim penanganan krisis TP.com memiliki jalur
              komunikasi khusus (Trusted Partner) untuk eskalasi takedown massal
              dan pelaporan pidana resmi.
            </p>

            <button
              onClick={() => onNavigate("kontak_pengaduan")}
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Hubungi Pendamping Kasus TP.com Sekarang</span>
            </button>
          </div>
        </div>
      </section>

      {/* Template Surat Laporan Resmi Platform */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Alat Bantu Pelaporan
              </span>
              <h3 className="font-editorial text-xl font-bold text-slate-900 mt-1">
                Template Teks Laporan Darurat ke Penyedia Layanan
              </h3>
            </div>

            <button
              onClick={handleCopyTemplate}
              className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedTemplate ? "Tersalin!" : "Salin Template"}</span>
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Gunakan teks ini saat mengajukan laporan ke Help Center platform
            media sosial atau mengirim email pengaduan:
          </p>

          <pre className="p-4 bg-stone-50 rounded-xl border border-stone-200 font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed select-all">
            {sampleTakedownTemplate}
          </pre>
        </div>
      </section>
    </div>
  );
};
