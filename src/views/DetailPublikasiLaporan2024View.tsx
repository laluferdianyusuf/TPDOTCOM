import { Building2, Download, Scale, Shield } from "lucide-react";
import React from "react";
import { PageRoute } from "../types";

interface DetailPublikasiLaporan2024ViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const DetailPublikasiLaporan2024View: React.FC<
  DetailPublikasiLaporan2024ViewProps
> = ({ onNavigate }) => {
  const chapters = [
    {
      num: "Bab 01",
      title: "Peta Jalan & Eskalasi Kasus KBGO Nasional 2024",
      pages: "Hlm 14 - 42",
      summary:
        "Analisis mendalam terhadap 1.412 kasus yang masuk ke meja aduan TP.com, sebaran geografis di 34 provinsi, serta profil demografis korban dan relasi dengan pelaku.",
    },
    {
      num: "Bab 02",
      title: "Dua Tahun UU TPKS: Kemajuan vs Celah Implementasi di Lapangan",
      pages: "Hlm 43 - 78",
      summary:
        "Tinjauan kritis penanganan perkara di Subdit Siber dan Unit PPA. Menyoroti minimnya pemahaman aparat atas bukti hash kriptografi dan masih maraknya reviktimisasi.",
    },
    {
      num: "Bab 03",
      title:
        "Ancaman Baru: Komodifikasi Seksual Berbasis Generatif AI & Deepfake",
      pages: "Hlm 79 - 110",
      summary:
        "Eksaminasi modus operandi penggunaan bot Telegram AI nudifier yang menargetkan foto mahasiswi, pelajar, dan aktivis untuk pemerasan keuangan massal.",
    },
    {
      num: "Bab 04",
      title: "Rekomendasi Reformasi Sistemik 2025–2026",
      pages: "Hlm 111 - 148",
      summary:
        "Tuntutan mendesak kepada Kementerian Kominfo, penegak hukum, dan platform raksasa teknologi untuk menetapkan batas waktu takedown konten darurat maksimal 4 jam.",
    },
  ];

  const platformStats = [
    {
      platform: "WhatsApp",
      percentage: 44,
      cases: "621 Kasus",
      desc: "Penyebaran materi intim via grup tertutup dan nomor anonim",
    },
    {
      platform: "Telegram",
      percentage: 29,
      cases: "409 Kasus",
      desc: "Channel berbayar, bot AI deepfake, dan grup jual-beli database foto",
    },
    {
      platform: "Instagram & Threads",
      percentage: 14,
      cases: "198 Kasus",
      desc: "Akun kloningan/impersonasi dan pelecehan di direct message",
    },
    {
      platform: "X (Twitter)",
      percentage: 8,
      cases: "113 Kasus",
      desc: "Doxing publik massal dan penyebaran link file cloud storage",
    },
    {
      platform: "Lainnya (TikTok, Forum)",
      percentage: 5,
      cases: "71 Kasus",
      desc: "Live stream komentar cabul dan platform kencan online",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header Breadcrumb & Title */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-800">
            <button
              onClick={() => onNavigate("publikasi")}
              className="hover:underline cursor-pointer"
            >
              Publikasi
            </button>
            <span>/</span>
            <span>Laporan Tahunan 2024</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Laporan Riset Tahunan Resmi
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Mengurai Bayang-bayang Kekerasan Digital: Catatan Tahunan Situasi
            KBGO di Indonesia 2024
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dipublikasikan pada Hari Hak Asasi Manusia Sedunia, 10 Desember 2024
            oleh Transformasi Perempuan Dotcom.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                alert(
                  'Memulai unduhan dokumen lengkap "Laporan Tahunan KBGO 2024 TP.com" (Format PDF, 4.8 MB).',
                )
              }
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Laporan Lengkap (PDF · 4.8 MB)</span>
            </button>

            <button
              onClick={() => onNavigate("kontak_pengaduan")}
              className="px-5 py-3 bg-white border border-stone-300 hover:bg-stone-50 text-slate-800 font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Hubungi Tim Peneliti / Media Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Ringkasan Eksekutif */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Ringkasan Eksekutif
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
            Krisis Nyata di Balik Layar Kaca
          </h2>
        </div>

        <div className="pblue pblue-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
          <p>
            Sepanjang tahun 2024, Transformasi Perempuan Dotcom menerima dan
            mempblues{" "}
            <strong>
              1.412 aduan kasus kekerasan berbasis gender online (KBGO)
            </strong>{" "}
            dari 34 provinsi di Indonesia. Angka ini merepresentasikan kenaikan
            sebesar <strong>38%</strong> dibandingkan tahun 2023, mencerminkan
            meluasnya ruang siber tanpa diimbangi mekanisme perlindungan
            pengguna yang memadai.
          </p>
          <p>
            Tahun 2024 ditandai dengan perubahan drastis pada modus kekerasan.
            Jika tahun-tahun sebelumnya didominasi oleh konflik interpersonal
            pasca hubungan pacaran (Revenge Porn konvensional), tahun ini
            menyaksikan ledakan{" "}
            <strong>
              pemerasan seksual terorganisir (organized sextortion)
            </strong>{" "}
            serta eksploitasi materi seksual buatan berbasis Generatif AI
            (Deepfake Non-Konsensual).
          </p>
        </div>
      </section>

      {/* Statistik & Data Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 shadow-xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Data Kasus Empiris
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
              Distribusi Platform Media dan Saluran Distribusi KBGO 2024
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Berdasarkan 1.412 laporan terverifikasi yang didampingi langsung
              oleh paralegal TP.com.
            </p>
          </div>

          <div className="space-y-4">
            {platformStats.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span>{item.platform}</span>
                    <span className="text-slate-400 font-normal">
                      ({item.cases})
                    </span>
                  </span>
                  <span className="font-mono font-bold text-blue-400">
                    {item.percentage}%
                  </span>
                </div>
                {/* Visual bar */}
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-700"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Bab Laporan */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Struktur Dokumen
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
            Daftar Bab & Pokok Bahasan
          </h2>
        </div>

        <div className="space-y-4">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                  {ch.num}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {ch.pages}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{ch.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {ch.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Rekomendasi Multipihak */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 rounded-3xl p-6 sm:p-12 border border-stone-200 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Tuntutan Kebijakan
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
              Rekomendasi Aksi Bagi Pemangku Kepentingan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                1. Pemerintah & Kementerian
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Segera tuntaskan dan sahkan Rancangan Peraturan Pemerintah (RPP)
                tentang Penanganan Kekerasan Seksual Berbasis Elektronik yang
                mengamanatkan Dana Bantuan Korban (Victim Trust Fund) untuk
                pemulihan psikologis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                2. Kepolisian & Kejaksaan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Terapkan SOP penyelidikan tanpa reviktimisasi. Larang penyidik
                meminta korban memutar ulang rekaman intim di depan umum, serta
                akui sertifikasi hash bukti digital sebagai alat bukti sah.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                3. Platform Teknologi Global
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wajibkan platform (khususnya Telegram dan Meta) membuka kantor
                perwakilan resmi di Indonesia dengan tim penanganan darurat 24
                jam berbahasa Indonesia untuk takedown konten NCII dalam waktu
                maksimal 4 jam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sitasi Akademik & Lisensi */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3 text-xs text-slate-600">
          <p className="font-bold text-slate-900">
            Cara Mengutip Laporan Ini (Format APA 7th):
          </p>
          <div className="p-3 bg-stone-50 rounded-lg font-mono text-[11px] text-slate-800 break-all select-all">
            Transformasi Perempuan Dotcom. (2024).{" "}
            <em>
              Mengurai Bayang-bayang Kekerasan Digital: Laporan Situasi KBGO dan
              Hak Digital di Indonesia 2024
            </em>
            . Mataram: Transformasi Perempuan Dotcom Press.
          </div>
          <p className="text-[11px] text-slate-400">
            Publikasi ini berlisensi Creative Commons Attribution 4.0
            International (CC BY 4.0). Diperkenankan mengutip sebagian atau
            seluruh isi dokumen dengan mencantumkan kredit resmi.
          </p>
        </div>
      </section>
    </div>
  );
};
