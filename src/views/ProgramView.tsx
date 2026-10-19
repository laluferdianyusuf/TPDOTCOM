import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Lock,
  Scale,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { PROGRAMS } from "../data/content";
import { PageRoute } from "../types";

interface ProgramViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const ProgramView: React.FC<ProgramViewProps> = ({ onNavigate }) => {
  const serviceFlow = [
    {
      step: "01",
      title: "Pelaporan Aman & Terenkripsi",
      desc: "Korban mengisi formulir pengaduan terenkripsi atau menghubungi hotline WhatsApp/Signal kami. Korban berhak memilih anonimitas penuh.",
    },
    {
      step: "02",
      title: "Triage Darurat & Penilaian Risiko (24 Jam)",
      desc: "Tim krisis melakukan verifikasi cepat atas tingkat urgensi ancaman (pemerasan, doxing, ancaman kekerasan fisik) dan menentukan langkah pengamanan seketika.",
    },
    {
      step: "03",
      title: "Intervensi Terpadu (Teknis, Hukum, Psikologis)",
      desc: "Berdasarkan persetujuan korban, teknisi kami mempblues hashing & takedown konten, advokat menyiapkan berkas hukum UU TPKS, dan psikolog memberikan konseling krisis.",
    },
    {
      step: "04",
      title: "Pemantauan Lintas Platform & Pendampingan BAP",
      desc: "Tim memantau penyebaran konten di mesin pencari dan forum tertutup, serta mendampingi korban saat pemeriksaan kepolisian (Unit PPA/Siber).",
    },
    {
      step: "05",
      title: "Pemulihan Berkelanjutan & Support Group",
      desc: "Penyintas diundang bergabung ke ruang pemulihan trauma mingguan bersama sesama penyintas untuk saling menguatkan dan merebut kembali otonomi diri.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header Banner */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Program Kerja TP.com
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Intervensi Terpadu Menghentikan Kekerasan Digital dari Berbagai
            Lini.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pendekatan kami mengintegrasikan keahlian keamanan siber, litigasi
            hukum berperspektif korban, layanan psikoterapi trauma, serta
            advokasi struktural kepada platform global.
          </p>
        </div>
      </section>

      {/* 4 Program Detail Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {PROGRAMS.map((prog, index) => (
          <div
            key={prog.id}
            className={`rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs hover:shadow-md transition-all bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
                  {prog.category}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-semibold text-emerald-700">
                  {prog.beneficiariesCount}
                </span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {prog.title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {prog.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Layanan & Fitur Unggulan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {prog.keyFeatures.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                {prog.id === "keamanan-digital" ? (
                  <button
                    onClick={() =>
                      onNavigate("detail_program_keamanan_digital")
                    }
                    className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Buka Detail Klinik Keamanan Digital</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate("kontak_pengaduan")}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Konsultasikan Kebutuhan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 border border-stone-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-blue-700 shadow-xs">
                {prog.id === "keamanan-digital" && (
                  <ShieldCheck className="w-6 h-6" />
                )}
                {prog.id === "advokasi-hukum" && <Scale className="w-6 h-6" />}
                {prog.id === "pemulihan-psikologis" && (
                  <HeartHandshake className="w-6 h-6" />
                )}
                {prog.id === "advokasi-kebijakan" && (
                  <FileText className="w-6 h-6" />
                )}
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-900">
                  Mengapa Program Ini Krusial?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prog.id === "keamanan-digital" &&
                    "Banyak korban terancam karena tidak memiliki pengetahuan teknis tentang cara mengamankan akun dan menghapus konten intim dari internet secara tuntas."}
                  {prog.id === "advokasi-hukum" &&
                    "Tanpa pendampingan hukum yang peka gender, korban sering kali mengalami reviktimisasi dan disalahkan saat melapor ke pihak kepolisian."}
                  {prog.id === "pemulihan-psikologis" &&
                    "Trauma akibat kekerasan digital sering kali memicu kepanikan akut, depresi berat, hingga ide bunuh diri tanpa ruang aman untuk pulih."}
                  {prog.id === "advokasi-kebijakan" &&
                    "Hukum dan regulasi harus terus ditekan agar platform teknologi bertanggung jawab secara hukum dan tidak lepas tangan atas konten ilegal di platform mereka."}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 text-[11px] text-slate-500 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  Seluruh layanan dapat diakses cuma-cuma tanpa dipungut biaya.
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Alur Layanan Pendampingan 5 Langkah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Pbluedur Operasional Standar (SOP)
            </span>
            <h2 className="font-editorial text-3xl font-bold">
              Alur Penanganan Kasus di Transformasi Perempuan Dotcom
            </h2>
            <p className="text-sm text-slate-300">
              Bagaimana kami mendampingi korban mulai dari menit pertama
              pelaporan hingga pemulihan jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {serviceFlow.map((flow, idx) => (
              <div key={idx} className="relative space-y-3">
                <div className="text-2xl font-editorial font-bold text-blue-400">
                  {flow.step}
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">
                  {flow.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Butuh konsultasi atau pendampingan untuk Anda atau kerabat?
            </div>
            <button
              onClick={() => onNavigate("kontak_pengaduan")}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Ajukan Pengaduan Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
