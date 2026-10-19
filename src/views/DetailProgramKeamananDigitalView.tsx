import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  FileCode,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Download,
  RefreshCw,
  Calendar,
  Users,
  EyeOff,
} from "lucide-react";
import { PageRoute } from "../types";

interface DetailProgramKeamananDigitalViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const DetailProgramKeamananDigitalView: React.FC<
  DetailProgramKeamananDigitalViewProps
> = ({ onNavigate }) => {
  // Interactive Self-Assessment State
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({
    q1_2fa: true,
    q2_unique_pwd: false,
    q3_location: false,
    q4_unknown_apps: false,
    q5_private_social: true,
    q6_secure_backup: false,
  });

  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  const toggleAnswer = (key: string) => {
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateScore = () => {
    let score = 0;
    if (answers.q1_2fa) score += 20;
    if (answers.q2_unique_pwd) score += 20;
    if (!answers.q3_location) score += 15;
    if (!answers.q4_unknown_apps) score += 15;
    if (answers.q5_private_social) score += 15;
    if (answers.q6_secure_backup) score += 15;
    return score;
  };

  const score = calculateScore();

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-800">
            <button
              onClick={() => onNavigate("program")}
              className="hover:underline cursor-pointer"
            >
              Program Kerja
            </button>
            <span>/</span>
            <span>Detail Program</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Klinik Keamanan Digital & Tanggap Forensik KBGO
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Menghadirkan benteng pertahanan teknis bagi korban kekerasan seksual
            siber, jurnalis, dan aktivis hak asasi manusia. Dari audit perangkat
            anti-stalkerware hingga preservasi bukti digital berstandar
            peradilan.
          </p>
        </div>
      </section>

      {/* 4 Pilar Layanan Teknis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Layanan Teknis Laboratorium
          </span>
          <h2 className="font-editorial text-3xl font-bold text-slate-900">
            Fasilitas Forensik & Sanitasi Siber
          </h2>
          <p className="text-sm text-slate-600">
            Teknisi kami bersertifikasi forensik digital dan mematuhi etika
            perlindungan privasi internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              1. Audit Stalkerware & Sanitasi Perangkat
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mendeteksi apakah gawai (smartphone/laptop) korban telah dipasangi
              spyware komersial, keylogger, atau aplikasi pelacak tersembunyi
              oleh mantan pasangan atau pelaku penguntitan. Kami membersihkan
              perangkat tanpa menghilangkan data penting korban.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  Pemeriksaan izin aplikasi (permission audit) tersembunyi
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  Analisis lalu lintas data mencurigakan keluar (outbound
                  telemetry)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <FileCode className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              2. Preservasi Bukti Digital Berstandar UU TPKS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Banyak laporan kepolisian gugur karena bukti screenshot dianggap
              tidak otentik. Kami mendokumentasikan bukti digital lengkap dengan
              metadata, header email, timestamp UTC, dan kalkulasi nilai hash
              kriptografi (SHA-256) agar sah dan memiliki kekuatan hukum
              pembuktian.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Format Berita Acara Preservasi Bukti Digital resmi</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  Kesesuaian dengan Pasal 24 UU TPKS tentang Alat Bukti Sah
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              3. Takedown Darurat NCII & Eskalasi Platform
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bekerja sama dengan inisiatif StopNCII global dan perwakilan
              platform media sosial di Indonesia, kami memfasilitasi pembuatan
              hash sidik jari digital untuk mencegah foto intim korban diunggah
              ke Facebook, Instagram, Threads, dan platform mitra.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Foto tidak pernah meninggalkan perangkat korban</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Jalur komunikasi darurat (trusted flagger)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              4. Sanitasi Jejak Digital & Pertahanan Doxing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Membantu korban melenyapkan data pribadi (nomor NIK, nomor
              telepon, alamat rumah, foto keluarga) yang telah terlanjur
              terindeks di mesin pencari Google, database nomor publik
              (GetContact/TrueCaller), dan forum perundungan.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-stone-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Permintaan de-indexing mesin pencari resmi</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Konfigurasi identitas samaran aman (pseudonymity)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Self-Assessment Widget */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 bg-slate-900 text-white space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Alat Evaluasi Mandiri Interaktif
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              Kalkulator Kerentanan Keamanan Digital Pribadi
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Ukur sejauh mana akun dan perangkat Anda terlindungi dari ancaman
              peretasan, doxing, dan KBGO.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between p-3.5 bg-stone-50 rounded-xl gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    1. Apakah seluruh akun penting (Email, WhatsApp, IG) sudah
                    memakai 2FA via Aplikasi Authenticator?
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Bukan hanya via SMS yang rentan terhadap pembajakan SIM
                    Swap.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAnswer("q1_2fa")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                    answers.q1_2fa
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-slate-700"
                  }`}
                >
                  {answers.q1_2fa ? "Sudah (Aman)" : "Belum"}
                </button>
              </div>

              <div className="flex items-start justify-between p-3.5 bg-stone-50 rounded-xl gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    2. Apakah Anda menggunakan kata sandi unik yang berbeda di
                    setiap akun media sosial?
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Menggunakan kata sandi yang sama memudahkan peretas membobol
                    seluruh akun sekaligus.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAnswer("q2_unique_pwd")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                    answers.q2_unique_pwd
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-slate-700"
                  }`}
                >
                  {answers.q2_unique_pwd ? "Ya, Beda" : "Masih Sama"}
                </button>
              </div>

              <div className="flex items-start justify-between p-3.5 bg-stone-50 rounded-xl gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    3. Apakah Anda mematikan fitur berbagi lokasi otomatis di
                    ponsel dan aplikasi chat?
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Mencegah penguntit melacak rute dan tempat tinggal Anda
                    secara realtime.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAnswer("q3_location")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                    !answers.q3_location
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-slate-700"
                  }`}
                >
                  {!answers.q3_location ? "Dimatikan" : "Masih Aktif"}
                </button>
              </div>

              <div className="flex items-start justify-between p-3.5 bg-stone-50 rounded-xl gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    4. Apakah baterai ponsel Anda sering panas/cepat habis
                    secara tidak wajar saat diam?
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Merupakan salah satu indikator klasik adanya stalkerware
                    atau aplikasi penyadap latar belakang.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAnswer("q4_unknown_apps")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                    !answers.q4_unknown_apps
                      ? "bg-emerald-600 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {!answers.q4_unknown_apps ? "Normal" : "Sering Panas"}
                </button>
              </div>

              <div className="flex items-start justify-between p-3.5 bg-stone-50 rounded-xl gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    5. Apakah akun media sosial utama Anda dikunci (Private
                    Mode)?
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Mencegah pelaku mengunduh foto wajah Anda untuk manipulasi
                    deepfake atau doxing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAnswer("q5_private_social")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                    answers.q5_private_social
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-slate-700"
                  }`}
                >
                  {answers.q5_private_social ? "Private" : "Publik"}
                </button>
              </div>
            </div>

            {/* Score Result Card */}
            <div className="p-6 rounded-2xl bg-stone-100/90 border border-stone-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Skor Ketahanan Digital Anda
                  </span>
                  <div className="font-editorial text-3xl font-extrabold text-slate-900">
                    {score} / 100 Poin
                  </div>
                </div>

                <div
                  className={`px-4 py-2 rounded-xl text-xs font-bold ${
                    score >= 80
                      ? "bg-emerald-100 text-emerald-800"
                      : score >= 50
                        ? "bg-amber-100 text-amber-800"
                        : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {score >= 80
                    ? "Cukup Aman"
                    : score >= 50
                      ? "Rentan Menengah"
                      : "Sangat Rentan!"}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {score >= 80
                  ? "Bagus! Anda telah menerapkan kebiasaan keamanan digital dasar dengan baik. Pastikan tetap berhati-hati terhadap tautan phishing di email dan pesan instan."
                  : "Perhatian: Pengaturan keamanan Anda saat ini memiliki celah yang dapat dimanfaatkan pelaku untuk peretasan, doxing, atau pemantauan aktivitas tanpa izin."}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() =>
                    onNavigate("detail_panduan_protokol_penghapusan_ncii")
                  }
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Pelajari Protokol Keamanan NCII
                </button>
                <button
                  onClick={() => onNavigate("kontak_pengaduan")}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Minta Audit Perangkat dengan Teknisi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop & Permintaan Pelatihan Organisasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Pelatihan Komunitas & Kampus
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              Undang Tim Keamanan Siber TP.com ke Kampus atau Organisasi Anda
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Kami menyelenggarakan workshop hands-on (praktik langsung) gratis
              untuk Satgas PPKS universitas, serikat buruh perempuan, jurnalis
              investigasi, dan organisasi masyarakat sipil.
            </p>
          </div>

          <button
            onClick={() => onNavigate("kontak_pengaduan")}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors shrink-0 cursor-pointer shadow-lg"
          >
            Ajukan Permohonan Pelatihan
          </button>
        </div>
      </section>
    </div>
  );
};
