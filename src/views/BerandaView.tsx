import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Lock,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import React, { useState } from "react";
import {
  IMPACT_STATS,
  KBGO_CATEGORIES,
  PROGRAMS,
  PUBLICATIONS,
} from "../data/content";
import { PageRoute } from "../types";

interface BerandaViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDonation: () => void;
}

export const BerandaView: React.FC<BerandaViewProps> = ({
  onNavigate,
  onOpenDonation,
}) => {
  const [activeEmergencyTab, setActiveEmergencyTab] = useState<
    "ncii" | "doxing" | "stalking" | "deepfake"
  >("ncii");

  const emergencyGuides = {
    ncii: {
      title: "Diancam Sebar Foto / Video Intim (NCII & Sextortion)",
      urgency: "Sangat Kritis",
      steps: [
        "JANGAN pernah menuruti permintaan uang atau konten tambahan dari pelaku.",
        "Amankan bukti berupa tangkapan layar (screenshot) nomor, username, dan tautan profil pelaku.",
        "Buka StopNCII.org untuk mendaftarkan sidik jari digital (hash) foto Anda secara lokal tanpa mengunggah file asli.",
        "Hubungi Hotline Darurat TP.com untuk pendampingan takedown langsung ke perwakilan platform.",
      ],
      actionLabel: "Buka Panduan Lengkap Protokol NCII",
      route: "detail_panduan_protokol_penghapusan_ncii" as PageRoute,
    },
    doxing: {
      title: "Data Pribadi Anda Disebar di Media Sosial (Doxing)",
      urgency: "Tinggi",
      steps: [
        "Kunci (private) seluruh akun sosial media Anda dan ubah kata sandi dengan autentikasi 2FA.",
        "Laporkan postingan doxing ke platform penyedia dan minta penghapusan darurat via Google Removal Tool.",
        "Informasikan keluarga atau pengurus lingkungan agar waspada terhadap orang tak dikenal yang mencari Anda.",
        "Konsultasikan pelaporan pelanggaran UU Perlindungan Data Pribadi (UU PDP) dengan advokat kami.",
      ],
      actionLabel: "Pelajari Hak Perlindungan Data Korban",
      route: "kategori_kbgo" as PageRoute,
    },
    stalking: {
      title: "Ponsel atau Akun Anda Terus Diintai (Stalkerware & Penguntitan)",
      urgency: "Tinggi",
      steps: [
        "Matikan fitur berbagi lokasi (location sharing / GPS tracking) di seluruh aplikasi ponsel Anda.",
        "Periksa daftar aplikasi aktif untuk mendeteksi aplikasi pelacak tersembunyi dengan izin berlebih.",
        "Gunakan perangkat lain yang bersih untuk menghubungi pendamping teknis TP.com guna audit forensik.",
        "Buat log catatan harian teror penguntit sebagai alat bukti sah tindak pidana UU TPKS Pasal 14.",
      ],
      actionLabel: "Audit Keamanan Perangkat Anda",
      route: "detail_program_keamanan_digital" as PageRoute,
    },
    deepfake: {
      title: "Wajah Anda Dimanipulasi Menjadi Gambar Pornografi AI (Deepfake)",
      urgency: "Sangat Kritis",
      steps: [
        "Simpan URL dan ID channel/bot tempat gambar disebarkan tanpa membagikannya ulang.",
        "Laporkan channel dan tautan tersebut ke tim takedown darurat TP.com.",
        "Klaim hak penghapusan media sintetis eksplisit melalui Google Search Removal & Meta Take It Down.",
        "Gunakan hak hukum perlindungan martabat di bawah UU TPKS dengan pendampingan advokat pro bono.",
      ],
      actionLabel: "Konsultasikan Kasus Deepfake",
      route: "kontak_pengaduan" as PageRoute,
    },
  };

  const currentGuide = emergencyGuides[activeEmergencyTab];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Hero Section: Editorial & Urgent */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Organisasi Advokasi Hak Asasi & Keadilan Digital</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                Membela Korban, <br />
                <span className="text-blue-700 italic">
                  Menghentikan Impunitas
                </span>{" "}
                <br />
                di Ruang Siber.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Transformasi Perempuan Dotcom (TPDcom) hadir sebagai ruang aman
                terpercaya bagi perempuan, anak, dan kelompok rentan di
                Indonesia. Kami memberikan pendampingan hukum pro bono, dukungan
                pemulihan trauma, audit keamanan digital, dan bantuan takedown
                konten intim non-konsensual secara{" "}
                <strong>100% gratis dan rahasia</strong>.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate("kontak_pengaduan")}
                  className="px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer hover:shadow-lg"
                >
                  <Lock className="w-4 h-4 text-blue-200" />
                  <span>Lapor Kasus (Aman & Terenkripsi)</span>
                </button>

                <button
                  onClick={() =>
                    onNavigate("detail_panduan_protokol_penghapusan_ncii")
                  }
                  className="px-5 py-3.5 bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Panduan Hapus Konten NCII</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Privasi 100% Dijamin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Berperspektif Korban (Zero Blaming)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tanpa Biaya Sepeser Pun</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Emergency First-Aid Widget */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden">
                <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-amber-400" />
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      Pertolongan Pertama KBGO
                    </h3>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-blue-900/80 text-blue-200 font-semibold">
                    {currentGuide.urgency}
                  </span>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-4 border-b border-stone-200 bg-stone-50 text-[11px] font-semibold text-center divide-x divide-stone-200">
                  <button
                    onClick={() => setActiveEmergencyTab("ncii")}
                    className={`py-2.5 px-1 transition-colors cursor-pointer ${
                      activeEmergencyTab === "ncii"
                        ? "bg-white text-blue-700 font-bold border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Foto Intim
                  </button>
                  <button
                    onClick={() => setActiveEmergencyTab("doxing")}
                    className={`py-2.5 px-1 transition-colors cursor-pointer ${
                      activeEmergencyTab === "doxing"
                        ? "bg-white text-blue-700 font-bold border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Doxing
                  </button>
                  <button
                    onClick={() => setActiveEmergencyTab("stalking")}
                    className={`py-2.5 px-1 transition-colors cursor-pointer ${
                      activeEmergencyTab === "stalking"
                        ? "bg-white text-blue-700 font-bold border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Diintai
                  </button>
                  <button
                    onClick={() => setActiveEmergencyTab("deepfake")}
                    className={`py-2.5 px-1 transition-colors cursor-pointer ${
                      activeEmergencyTab === "deepfake"
                        ? "bg-white text-blue-700 font-bold border-b-2 border-blue-700"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    AI Deepfake
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    {currentGuide.title}
                  </h4>

                  <div className="space-y-2.5">
                    {currentGuide.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => onNavigate(currentGuide.route)}
                      className="w-full py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{currentGuide.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigate("kontak_pengaduan")}
                      className="shrink-0 py-2.5 px-3 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold rounded-xl text-center transition-colors cursor-pointer"
                    >
                      Minta Bantuan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Rekam Jejak Advokasi
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              Angka di Balik Perjuangan Memulihkan Keberdayaan Penyintas
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <div
                key={i}
                className="border-l-2 border-blue-500 pl-4 space-y-1"
              >
                <div className="font-editorial text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-blue-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pilar Program Kerja */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Layanan & Intervensi
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900">
              Empat Pilar Penanganan Terpadu TP.com
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Kami memadukan mitigasi teknologi siber, pendampingan hukum
              berkeadilan, terapi pemulihan psikologis, serta riset kebijakan
              untuk meruntuhkan kekerasan struktural.
            </p>
          </div>
          <button
            onClick={() => onNavigate("program")}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Lihat Seluruh Alur Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 group-hover:scale-105 transition-transform">
                  {prog.id === "keamanan-digital" && (
                    <ShieldCheck className="w-6 h-6" />
                  )}
                  {prog.id === "advokasi-hukum" && (
                    <Scale className="w-6 h-6" />
                  )}
                  {prog.id === "pemulihan-psikologis" && (
                    <HeartHandshake className="w-6 h-6" />
                  )}
                  {prog.id === "advokasi-kebijakan" && (
                    <FileText className="w-6 h-6" />
                  )}
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider block mb-1">
                    {prog.category}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-800 transition-colors">
                    {prog.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {prog.description}
                </p>

                <div className="pt-2 border-t border-stone-100">
                  <p className="text-[11px] font-semibold text-slate-500 mb-2">
                    Fasilitas Utama:
                  </p>
                  <ul className="space-y-1.5 text-[11px] text-slate-600">
                    {prog.keyFeatures.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">·</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-stone-100">
                <button
                  onClick={() => onNavigate(prog.route || "program")}
                  className="w-full py-2 px-3 rounded-lg bg-stone-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>Pelajari Layanan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mengenal 8 Bentuk KBGO Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100/70 border border-stone-200 rounded-3xl p-6 sm:p-10">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Literasi Hak Digital
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
              Kenali Bentuk-Bentuk Kekerasan Berbasis Gender Online (KBGO)
            </h2>
            <p className="text-sm text-slate-600">
              Kekerasan digital bukan kesalahan korban. Pelajari definisinya,
              tanda-tanda bahaya, dan dasar hukum penjeratan pidana di
              Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {KBGO_CATEGORIES.slice(0, 6).map((cat) => (
              <div
                key={cat.id}
                className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs hover:border-blue-300 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 uppercase tracking-wider">
                      Tingkat Resiko: {cat.riskLevel}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium truncate max-w-[170px]">
                    {cat.legalBasis[0]}
                  </span>
                  <button
                    onClick={() => onNavigate("kategori_kbgo")}
                    className="text-blue-700 hover:text-blue-900 font-bold text-xs inline-flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate("kategori_kbgo")}
              className="px-6 py-3 bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 font-bold rounded-xl text-xs transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Buka Seluruh Katalog & Alur Tanggap Darurat KBGO</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Publications: Laporan 2024 & Panduan NCII */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Riset & Advokasi Pengetahuan
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900">
              Publikasi & Dokumen Kebijakan Pilihan
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Dokumentasi data kasus riil, analisis yuridis, dan panduan taktis
              yang kami terbitkan sebagai rujukan akademisi, penegak hukum, dan
              masyarakat sipil.
            </p>
          </div>
          <button
            onClick={() => onNavigate("publikasi")}
            className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Lihat Semua Publikasi ({PUBLICATIONS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Laporan Tahunan 2024 Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider">
                  Laporan Tahunan 2024
                </span>
                <span className="text-xs text-slate-400">
                  148 Halaman · PDF
                </span>
              </div>

              <h3 className="font-editorial text-2xl font-bold text-white leading-tight">
                Mengurai Bayang-bayang Kekerasan Digital: Laporan Situasi KBGO
                di Indonesia
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Menyajikan temuan empiris 1.412 kasus sepanjang 2024, evaluasi 2
                tahun implementasi UU TPKS, data platform terbanyak digunakan
                pelaku, serta peta jalan reformasi moderasi konten.
              </p>

              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 space-y-1.5">
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                  Temuan Kunci:
                </p>
                <p className="text-xs text-slate-300">
                  • Lonjakan 38% kasus baru & penyebaran konten intim via
                  Telegram dan WhatsApp grup tertutup.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={() =>
                  onNavigate("detail_publikasi_laporan_tahunan_2024")
                }
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Baca Ringkasan & Unduh
              </button>
              <span className="text-xs text-slate-400">
                Gratis · Lisensi Terbuka CC-BY
              </span>
            </div>
          </div>

          {/* Panduan NCII Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md border border-stone-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                  Panduan Praktis
                </span>
                <span className="text-xs text-slate-500">
                  64 Halaman · Edisi Revisi
                </span>
              </div>

              <h3 className="font-editorial text-2xl font-bold text-slate-900 leading-tight">
                Panduan Protokol Penghapusan Konten Intim Non-Konsensual (NCII)
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pedoman komprehensif bagi korban dan pendamping untuk menghapus
                materi intim dari platform digital secara mandiri, memanfaatkan
                StopNCII, Take It Down, serta perlindungan hukum UU TPKS.
              </p>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                  Termasuk di dalamnya:
                </p>
                <p className="text-xs text-slate-600">
                  • Template resmi draf somasi platform, panduan screenshot
                  bukti sah, dan kontak eskalasi darurat.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between gap-4">
              <button
                onClick={() =>
                  onNavigate("detail_panduan_protokol_penghapusan_ncii")
                }
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Buka Panduan Protokol
              </button>
              <span className="text-xs text-slate-500">
                Panduan Resmi TP.com
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Voices of Survivors / Testimoni */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
              Suara Penyintas
            </span>
            <blockquote className="font-editorial text-xl sm:text-2xl lg:text-3xl font-medium text-blue-50 leading-relaxed italic">
              "Saat foto pribadi saya diancam disebar, ketakutan membuat saya
              hampir menyerah. TP.com tidak hanya membantu men-takedown konten
              tersebut dari platform dalam 48 jam, tetapi juga memulihkan
              martabat dan kesehatan mental saya tanpa satu pun penghakiman."
            </blockquote>
            <div className="pt-2">
              <p className="text-sm font-bold text-white">
                — Maya (Nama Samaran, 22 tahun)
              </p>
              <p className="text-xs text-blue-300">
                Penyintas Kasus Sextortion, Didampingi Tim TP.com Periode 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Lapor atau Donasi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 text-center space-y-6 shadow-md">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900">
              Jangan Menghadapi Kekerasan Digital Sendirian
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kerahasiaan identitas dan data Anda adalah prioritas tertinggi
              kami. Layanan pendampingan kami bersifat non-judgemental, berpusat
              pada persetujuan korban, dan tidak dipungut biaya apa pun.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate("kontak_pengaduan")}
              className="px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-md text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-blue-200" />
              <span>Isi Formulir Pengaduan Kasus</span>
            </button>

            <button
              onClick={onOpenDonation}
              className="px-6 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Dukung Solidaritas Donasi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
