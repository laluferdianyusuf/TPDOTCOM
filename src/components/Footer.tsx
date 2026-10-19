import {
  AlertTriangle,
  Heart,
  Lock,
  Mail,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { PageRoute } from "../types";

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenDonation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRouteChange,
  onOpenDonation,
}) => {
  const handleQuickExit = () => {
    window.location.replace("https://www.google.com/search?q=cuaca+hari+ini");
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Safety Warning Notice for Survivors */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                Penting: Keamanan Riwayat Penjelajahan Anda
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Jika Anda mengakses situs ini dari perangkat yang dipantau atau
                tidak aman, selalu ingat untuk menghapus riwayat browser (cache
                & cookies) atau gunakan Mode Penyamaran (Incognito). Tombol{" "}
                <strong className="text-amber-400">Keluar Cepat</strong> selalu
                tersedia di bagian atas untuk mengalihkan layar seketika.
              </p>
            </div>
          </div>
          <button
            onClick={handleQuickExit}
            className="shrink-0 px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Keluar Cepat Sekarang</span>
          </button>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                TanpaPelecehan<span className="text-rose-500">.com</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Organisasi advokasi masyarakat sipil non-pemerintah yang berfokus
              pada pencegahan kekerasan berbasis gender online (KBGO),
              perlindungan hak asasi digital, pendampingan hukum dan psikologis
              gratis berpusat pada korban, serta reformasi regulasi ruang siber
              di Indonesia.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Layanan Berbasis UU TPKS No. 12 Tahun 2022</span>
              </div>
            </div>
          </div>

          {/* Navigasi Program */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              Program Kerja
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() =>
                    onRouteChange("detail_program_keamanan_digital")
                  }
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Klinik Keamanan Digital & Forensik
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange("program")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bantuan Hukum Pro Bono
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange("program")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Konseling Trauma Psikososial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange("program")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Advokasi Kebijakan & Regulasi
                </button>
              </li>
            </ul>
          </div>

          {/* Pusat Isu & Panduan */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              Isu & Panduan
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onRouteChange("kategori_kbgo")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Katalog 8 Bentuk KBGO
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onRouteChange("detail_panduan_protokol_penghapusan_ncii")
                  }
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Protokol Hapus Konten NCII
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    onRouteChange("detail_publikasi_laporan_tahunan_2024")
                  }
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Laporan Tahunan KBGO 2024
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange("isu_pengetahuan")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Analisis UU TPKS & UU PDP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onRouteChange("tentang_kami")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Prinsip Pendampingan Korban
                </button>
              </li>
            </ul>
          </div>

          {/* Layanan Darurat & Kontak */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              Kontak Aman
            </h5>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-medium">
                    WhatsApp Crisis Hotline:
                  </span>
                  <a
                    href="https://wa.me/6281299008720"
                    target="_blank"
                    rel="noreferrer"
                    className="text-rose-400 hover:underline"
                  >
                    +62 812-9900-8720 (24 Jam)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-medium">
                    Email Terenkripsi:
                  </span>
                  <span className="text-slate-400">
                    transformasiperempuan@gmail.com
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onRouteChange("kontak_pengaduan")}
                  className="w-full py-2 px-3 bg-rose-700 hover:bg-rose-600 text-white font-semibold rounded-lg text-center transition-colors cursor-pointer block"
                >
                  Formulir Pengaduan Aman
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Coalition, & Donasi */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <p>
              © 2023–2026 Transformasi Perempuan Dotcom. Seluruh hak cipta
              dilindungi.
            </p>
            <span className="hidden md:inline">·</span>
            <span>Berizin Kemenkumham RI No. AHU-0014282.AH.01.04</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDonation}
              className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
              <span>Dukung Donasi Independen</span>
            </button>
            <span>·</span>
            <button
              onClick={() => onRouteChange("tentang_kami")}
              className="hover:text-slate-300 cursor-pointer"
            >
              Kode Etik & Privasi
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
