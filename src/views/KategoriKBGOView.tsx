import React, { useState } from "react";
import {
  ShieldAlert,
  UserX,
  Eye,
  UserMinus,
  Sparkles,
  MessageSquareWarning,
  Scale,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Lock,
  PhoneCall,
} from "lucide-react";
import { PageRoute } from "../types";
import { KBGO_CATEGORIES } from "../data/content";

interface KategoriKBGOViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const KategoriKBGOView: React.FC<KategoriKBGOViewProps> = ({
  onNavigate,
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>(
    KBGO_CATEGORIES[0].id,
  );

  const activeCategory =
    KBGO_CATEGORIES.find((c) => c.id === selectedCatId) || KBGO_CATEGORIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "ncii":
        return ShieldAlert;
      case "doxing":
        return UserX;
      case "cyberstalking":
        return Eye;
      case "impersonation":
        return UserMinus;
      case "ai-deepfake":
        return Sparkles;
      case "cyber-harassment":
        return MessageSquareWarning;
      default:
        return ShieldAlert;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Klasifikasi & Panduan Hukum
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Katalog Lengkap Bentuk-Bentuk Kekerasan Berbasis Gender Online
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pelajari setiap modus kejahatan siber berbasis gender, pasal hukum
            yang menjerat pelaku, serta langkah taktis menyelamatkan diri dan
            mengamankan bukti.
          </p>
        </div>
      </section>

      {/* Main Interactive Category Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Category List (Sidebar / Pills) */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-3">
              Pilih Kategori Kejahatan:
            </h3>
            {KBGO_CATEGORIES.map((cat) => {
              const IconComp = getIcon(cat.id);
              const isSelected = cat.id === activeCategory.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? "bg-blue-900 text-white border-blue-900 shadow-md font-semibold"
                      : "bg-white text-slate-800 border-stone-200 hover:border-blue-300 hover:bg-stone-50"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected
                          ? "bg-blue-800 text-blue-200"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold truncate">
                      {cat.name}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "translate-x-1 text-blue-300" : "text-slate-300"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-lg space-y-8">
            <div className="space-y-3 pb-6 border-b border-stone-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                  Tingkat Resiko: {activeCategory.riskLevel}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Terdaftar dalam KUHP & UU TPKS No. 12/2022
                </span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                {activeCategory.name}
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeCategory.fullDesc}
              </p>
            </div>

            {/* Contoh Kasus di Indonesia */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Modus & Contoh Kasus Riil:
              </h4>
              <div className="space-y-2">
                {activeCategory.examples.map((ex, exIdx) => (
                  <div
                    key={exIdx}
                    className="p-3 bg-stone-50 rounded-xl text-xs text-slate-700 border border-stone-200/80 flex items-start gap-2.5"
                  >
                    <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      •
                    </span>
                    <span className="leading-relaxed">{ex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dasar Hukum Pidana */}
            <div className="space-y-3 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-amber-800" />
                <span>Jerat Hukum & Pasal Pidana:</span>
              </h4>
              <ul className="space-y-2 text-xs text-amber-950 font-medium">
                {activeCategory.legalBasis.map((law, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">✓</span>
                    <span>{law}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Langkah Tanggap Darurat */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                Langkah Tanggap Darurat yang Harus Dilakukan:
              </h4>
              <div className="space-y-2.5">
                {activeCategory.immediateActions.map((act, actIdx) => (
                  <div
                    key={actIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      {actIdx + 1}
                    </span>
                    <span className="leading-relaxed">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions for this category */}
            <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
              {activeCategory.id === "ncii" ? (
                <button
                  onClick={() =>
                    onNavigate("detail_panduan_protokol_penghapusan_ncii")
                  }
                  className="px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Buka Protokol Hapus Foto StopNCII</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => onNavigate("detail_program_keamanan_digital")}
                  className="px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Lihat Panduan Keamanan Akun</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => onNavigate("kontak_pengaduan")}
                className="px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Lock className="w-3.5 h-3.5 text-blue-200" />
                <span>Laporkan Kasus Ini ke TP.com</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
