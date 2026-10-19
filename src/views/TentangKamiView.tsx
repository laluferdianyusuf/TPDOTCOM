import { CheckCircle2, HeartHandshake, Lock, Scale } from "lucide-react";
import React from "react";
import { TEAM_MEMBERS } from "../data/content";
import { PageRoute } from "../types";

interface TentangKamiViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDonation: () => void;
}

export const TentangKamiView: React.FC<TentangKamiViewProps> = ({
  onNavigate,
  onOpenDonation,
}) => {
  const milestones = [
    {
      year: "2018",
      title: "Kelahiran Inisiatif Akar Rumput",
      desc: "Berdiri sebagai respon darurat sekumpulan advokat perempuan, teknisi siber, dan psikolog atas maraknya grup percakapan anonim penyebar foto intim tanpa izin di Jakarta dan Yogyakarta.",
    },
    {
      year: "2020",
      title: "Peluncuran Hotline Krisis KBGO 24 Jam",
      desc: "Merespon lonjakan 300% kekerasan digital selama pembatasan sosial pandemi. Menyediakan layanan pendampingan krisis terpadu satu atap (psikologis, hukum, teknis).",
    },
    {
      year: "2022",
      title: "Advokasi Pengesahan UU TPKS",
      desc: "Mengawal masuknya Pasal 14 (Kekerasan Seksual Berbasis Elektronik) dalam UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual bersama Koalisi Masyarakat Sipil.",
    },
    {
      year: "2024",
      title: "Adopsi Teknologi Hashing & Integrasi Global",
      desc: "Menjadi mitra rujukan regional untuk StopNCII dan Take It Down, memungkinkan takedown proaktif materi intim tanpa korban harus menyerahkan foto asli.",
    },
    {
      year: "2026",
      title: "Jejaring 34 Provinsi & Klinik Forensik",
      desc: "Mengoperasikan Klinik Forensik Digital mandiri dan membina lebih dari 450 paralegal komunitas di seluruh wilayah Indonesia.",
    },
  ];

  const values = [
    {
      title: "Berpusat pada Korban (Survivor-Centered)",
      desc: "Setiap keputusan, langkah hukum, dan tindakan teknis berada sepenuhnya di tangan korban. Kami mendengarkan tanpa menghakimi (zero-blaming) dan mengutamakan pemulihan emosional.",
      icon: HeartHandshake,
    },
    {
      title: "Persetujuan Sadar (Informed Consent)",
      desc: "Tidak ada informasi, dokumen, atau langkah yang diambil tanpa persetujuan eksplisit, terinformasi, dan tertulis dari korban.",
      icon: CheckCircle2,
    },
    {
      title: "Privasi & Enkripsi Absolut",
      desc: "Kerahasiaan data adalah garis merah. Seluruh catatan kasus disimpan di server terenkripsi dengan protokol zero-knowledge dan akses multi-faktor berjenjang.",
      icon: Lock,
    },
    {
      title: "Keadilan Interseksional",
      desc: "Kami menyadari bahwa kekerasan digital berdampak lebih berat pada perempuan, anak, disabilitas, dan kelompok marjinal. Pendampingan kami dirancang sensitif terhadap ragam latar belakang.",
      icon: Scale,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header Intro */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Tentang Transformasi Perempuan Dotcom
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Membangun Ruang Digital yang Adil, Setara, dan Berpihak pada Korban.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Transformasi Perempuan Dotcom adalah organisasi nirlaba independen
            yang bergerak di garis depan penanganan kekerasan berbasis gender
            online (KBGO), perlindungan privasi data, dan pembelaan hak asasi
            digital di Indonesia.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Visi Organisasi
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold leading-snug">
                Mewujudkan masyarakat yang berkeadilan gender dan berkemampuan
                digital yang mendukung pembangunan ekonomi, hukum, dan sosial
                lainnya yang berwawasan lingkungan.
              </h2>
            </div>
            <p className="text-xs text-slate-400 pt-6 mt-6 border-t border-slate-800">
              Prinsip kami: Dunia digital adalah cerminan dunia nyata; keadilan
              dan perlindungan hukum di internet harus setara dengan di dunia
              fisik.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Misi Strategis
              </span>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <span>
                    Mendorong pemberdayaan dan peningkatan perempuan literasi
                    digital bagi perempuan, generasi muda, dan kelompok
                    penyandang disabilitas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <span>
                    Meningkatkan kapasitas perempuan dan kelompok rentan
                    kelompok (pemuda, penyandang disabilitas, lanjut usia)
                    mengenai hak asasi manusia dan hak asasi manusia lainnya
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <span>
                    Memberikan ruang bagi partisipasi perempuan, generasi muda,
                    penyandang disabilitas, dan lanjut usia dalam proses
                    pembangunan berwawasan lingkungan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-xs">
                    4
                  </span>
                  <span>
                    Melaksanakan advokasi dalam rangka mencapai kemanusiaan hak
                    bagi perempuan, penyandang disabilitas, dan orang lanjut
                    usia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Dasar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Prinsip Etik Kerja
          </span>
          <h2 className="font-editorial text-3xl font-bold text-slate-900">
            Nilai-Nilai Dasar yang Kami Pegang Teguh
          </h2>
          <p className="text-sm text-slate-600">
            Etika kerja yang melindungi martabat manusia di setiap langkah
            pendampingan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Linimasa Perjalanan */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-12">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Linimasa Gerakan
            </span>
            <h2 className="font-editorial text-3xl font-bold text-slate-900">
              Rekam Jejak Advokasi dari Akar Rumput ke Regulasi Nasional
            </h2>
            <p className="text-sm text-slate-600">
              Perjalanan tanpa henti membela ribuan korban di tengah pesatnya
              disrupsi teknologi digital.
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-blue-200">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="relative flex items-start gap-4 sm:gap-6"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 z-10 text-xs shadow-xs">
                  {idx + 1}
                </div>
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-bold">
                      {m.year}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Tim & Dewan Ahli */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Penggerak & Pakar
          </span>
          <h2 className="font-editorial text-3xl font-bold text-slate-900">
            Tim Ahli Transformasi perempuan Dotcom
          </h2>
          <p className="text-sm text-slate-600">
            Dipimpin oleh para profesional yang berdedikasi membela hak asasi
            manusia dan keadilan gender.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs space-y-3"
            >
              <div className="h-48 overflow-hidden bg-stone-100">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-4 pt-1 space-y-1.5">
                <h3 className="text-sm font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-blue-700">
                  {member.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Akuntabilitas & Transparansi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Akuntabilitas Publik
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                Transparansi Sumber Dana & Audit Keuangan
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                TP.com menjaga independensi mutlak. Kami tidak menerima dana
                dari entitas politik, korporasi dengan rekam jejak pelanggaran
                HAM, atau platform yang menolak mematuhi standar perlindungan
                perempuan dan anak. Laporan keuangan diaudit secara independen
                oleh Kantor Akuntan Publik (KAP) terdaftar.
              </p>
            </div>

            <button
              onClick={() => onNavigate("publikasi")}
              className="px-5 py-3 bg-white hover:bg-stone-100 text-slate-900 font-bold rounded-xl text-xs transition-colors shrink-0 cursor-pointer"
            >
              Unduh Laporan Akuntabilitas & Audit
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-400">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <p className="font-bold text-white text-sm mb-1">
                Status Badan Hukum
              </p>
              <p>SK Kemenkumham No. AHU-0014282.AH.01.04 Tahun 2019</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <p className="font-bold text-white text-sm mb-1">
                Hasil Audit 2024
              </p>
              <p>Wajar Tanpa Pengecualian (WTP) oleh KAP Hendrawan & Rekan</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
              <p className="font-bold text-white text-sm mb-1">
                Kode Etik Pendampingan
              </p>
              <p>Tersertifikasi Standar Perlindungan Data ISO/IEC 27001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
