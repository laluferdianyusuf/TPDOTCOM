import {
  ChevronDown,
  Heart,
  Lock,
  Menu,
  PhoneCall,
  Search,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { PageRoute } from "../types";

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenSearch: () => void;
  onOpenDonation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onRouteChange,
  onOpenSearch,
  onOpenDonation,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isPublikasiDropdownOpen, setIsPublikasiDropdownOpen] = useState(false);

  // Quick Exit: immediately redirects and clears history state
  const handleQuickExit = () => {
    // Replace URL immediately with weather/news
    window.location.replace("https://www.google.com/search?q=cuaca+hari+ini");
  };

  // Keyboard shortcut: ESC triggers quick exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleQuickExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { label: "Beranda", route: "beranda" as PageRoute },
    { label: "Tentang Kami", route: "tentang_kami" as PageRoute },
    {
      label: "Program",
      route: "program" as PageRoute,
      hasDropdown: true,
      dropdownItems: [
        { label: "Semua Program Advokasi", route: "program" as PageRoute },
        {
          label: "Klinik Keamanan Digital & Forensik",
          route: "detail_program_keamanan_digital" as PageRoute,
        },
      ],
    },
    {
      label: "Isu & Pengetahuan",
      route: "isu_pengetahuan" as PageRoute,
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Pusat Pengetahuan & Artikel",
          route: "isu_pengetahuan" as PageRoute,
        },
        {
          label: "Kategori & Bentuk KBGO",
          route: "kategori_kbgo" as PageRoute,
        },
      ],
    },
    {
      label: "Publikasi",
      route: "publikasi" as PageRoute,
      hasDropdown: true,
      dropdownItems: [
        { label: "Semua Publikasi & Riset", route: "publikasi" as PageRoute },
        {
          label: "Laporan Tahunan KBGO 2024",
          route: "detail_publikasi_laporan_tahunan_2024" as PageRoute,
        },
        {
          label: "Panduan Protokol Hapus NCII",
          route: "detail_panduan_protokol_penghapusan_ncii" as PageRoute,
        },
      ],
    },
    { label: "Kontak & Pengaduan", route: "kontak_pengaduan" as PageRoute },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8]/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Security & Crisis Banner */}
      <div className="bg-rose-950 text-rose-50 text-xs px-4 py-2 border-b border-rose-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-rose-800 text-rose-100 font-bold uppercase tracking-wider text-[10px]">
              Kanal Darurat
            </span>
            <span className="hidden sm:inline">
              Sedang dalam bahaya atau ancaman sebar konten intim?
            </span>
            <span className="sm:hidden">Butuh bantuan darurat?</span>
            <a
              href="https://wa.me/6281299008720"
              target="_blank"
              rel="noreferrer"
              className="underline font-semibold hover:text-white inline-flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" /> WA: 0812-9900-8720
            </a>
          </div>

          {/* <div className="flex items-center gap-3 ml-auto">
            <span className="text-rose-200 text-[11px] hidden md:inline">
              Tekan <kbd className="px-1.5 py-0.5 bg-rose-900 rounded border border-rose-700 font-mono text-[10px]">ESC</kbd> untuk keluar cepat
            </span>
            <button
              onClick={handleQuickExit}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Segera tinggalkan situs ini dan alihkan ke Google untuk keamanan Anda"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-950" />
              <span>Keluar Cepat</span>
            </button>
          </div> */}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onRouteChange("beranda");
                setIsMobileMenuOpen(false);
              }}
              className="text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-700 to-rose-900 flex items-center justify-center text-white shadow-md shadow-rose-900/10 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div> */}
                <div>
                  <img
                    src="../assets/images/logo.png"
                    alt="Transformasi Perempuan Dotcom"
                  />
                  {/* <div className="flex items-center gap-1.5">
                    <span className="font-editorial text-2xl font-bold tracking-tight text-slate-900 leading-none">
                      TanpaPelecehan<span className="text-rose-700">.com</span>
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest mt-1">
                    Advokasi & Hak Asasi Digital
                  </p> */}
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isProgram = item.route === "program";
                const isPublikasi = item.route === "publikasi";
                const isIsu = item.route === "isu_pengetahuan";
                const isOpen = isProgram
                  ? isProgramDropdownOpen
                  : isPublikasi
                    ? isPublikasiDropdownOpen
                    : false;

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => {
                      if (isProgram) setIsProgramDropdownOpen(true);
                      if (isPublikasi) setIsPublikasiDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (isProgram) setIsProgramDropdownOpen(false);
                      if (isPublikasi) setIsPublikasiDropdownOpen(false);
                    }}
                  >
                    <button
                      onClick={() => onRouteChange(item.route)}
                      className={`px-3 py-2 rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                        currentRoute === item.route ||
                        item.dropdownItems?.some(
                          (d) => d.route === currentRoute,
                        )
                          ? "text-rose-700 font-semibold bg-rose-50"
                          : "hover:text-slate-950 hover:bg-stone-100"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
                    </button>

                    <div className="absolute top-full left-0 w-64 bg-white border border-stone-200 rounded-xl shadow-xl p-2 py-2 mt-1 hidden group-hover:block transition-all z-50">
                      {item.dropdownItems?.map((drop) => (
                        <button
                          key={drop.label}
                          onClick={() => {
                            onRouteChange(drop.route);
                            setIsProgramDropdownOpen(false);
                            setIsPublikasiDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer block ${
                            currentRoute === drop.route
                              ? "bg-rose-50 text-rose-800 font-semibold"
                              : "text-slate-700 hover:bg-stone-50 hover:text-slate-950"
                          }`}
                        >
                          {drop.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => onRouteChange(item.route)}
                  className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    currentRoute === item.route
                      ? "text-rose-700 font-semibold bg-rose-50"
                      : "hover:text-slate-950 hover:bg-stone-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-600 hover:text-slate-950 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              title="Cari artikel, panduan, atau informasi hukum"
              aria-label="Pencarian"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDonation}
              className="px-3.5 py-2 text-xs font-semibold text-rose-800 bg-rose-100/70 hover:bg-rose-200/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
              <span>Dukung Kami</span>
            </button>

            <button
              onClick={() => onRouteChange("kontak_pengaduan")}
              className="px-4 py-2.5 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer hover:shadow-md"
            >
              <Lock className="w-3.5 h-3.5 text-rose-200" />
              <span>Lapor Kasus (Aman)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:bg-stone-100 rounded-lg"
              aria-label="Pencarian"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-stone-100 rounded-lg cursor-pointer"
              aria-label="Buka navigasi menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#fafaf8] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            <button
              onClick={() => {
                onRouteChange("beranda");
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentRoute === "beranda"
                  ? "bg-rose-50 text-rose-800 font-bold"
                  : "text-slate-800"
              }`}
            >
              Beranda
            </button>

            <button
              onClick={() => {
                onRouteChange("tentang_kami");
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentRoute === "tentang_kami"
                  ? "bg-rose-50 text-rose-800 font-bold"
                  : "text-slate-800"
              }`}
            >
              Tentang Kami
            </button>

            <div className="pt-2 pb-1 border-t border-stone-200">
              <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Program
              </p>
              <button
                onClick={() => {
                  onRouteChange("program");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  currentRoute === "program"
                    ? "bg-rose-50 text-rose-800 font-bold"
                    : "text-slate-700"
                }`}
              >
                Semua Program
              </button>
              <button
                onClick={() => {
                  onRouteChange("detail_program_keamanan_digital");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  currentRoute === "detail_program_keamanan_digital"
                    ? "bg-rose-50 text-rose-800 font-bold"
                    : "text-slate-700"
                }`}
              >
                Klinik Keamanan Digital & Forensik
              </button>
            </div>

            <div className="pt-2 pb-1 border-t border-stone-200">
              <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Isu & Pengetahuan
              </p>
              <button
                onClick={() => {
                  onRouteChange("isu_pengetahuan");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  currentRoute === "isu_pengetahuan"
                    ? "bg-rose-50 text-rose-800 font-bold"
                    : "text-slate-700"
                }`}
              >
                Artikel & Analisis Kebijakan
              </button>
              <button
                onClick={() => {
                  onRouteChange("kategori_kbgo");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  currentRoute === "kategori_kbgo"
                    ? "bg-rose-50 text-rose-800 font-bold"
                    : "text-slate-700"
                }`}
              >
                Katalog 8 Bentuk KBGO
              </button>
            </div>

            <div className="pt-2 pb-1 border-t border-stone-200">
              <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Publikasi
              </p>
              <button
                onClick={() => {
                  onRouteChange("publikasi");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  currentRoute === "publikasi"
                    ? "bg-rose-50 text-rose-800 font-bold"
                    : "text-slate-700"
                }`}
              >
                Arsip Riset & Publikasi
              </button>
              <button
                onClick={() => {
                  onRouteChange("detail_publikasi_laporan_tahunan_2024");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  currentRoute === "detail_publikasi_laporan_tahunan_2024"
                    ? "bg-rose-50 text-rose-800 font-bold"
                    : "text-slate-700"
                }`}
              >
                Laporan Tahunan 2024
              </button>
              <button
                onClick={() => {
                  onRouteChange("detail_panduan_protokol_penghapusan_ncii");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                  currentRoute === "detail_panduan_protokol_penghapusan_ncii"
                    ? "bg-rose-50 text-rose-800 font-bold"
                    : "text-slate-700"
                }`}
              >
                Panduan Protokol Hapus NCII
              </button>
            </div>

            <div className="pt-2 border-t border-stone-200">
              <button
                onClick={() => {
                  onRouteChange("kontak_pengaduan");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold ${
                  currentRoute === "kontak_pengaduan"
                    ? "bg-rose-50 text-rose-800"
                    : "text-rose-700"
                }`}
              >
                Kontak & Pengaduan Kasus
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenDonation();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-rose-800 bg-rose-100 rounded-xl"
            >
              Dukung Donasi
            </button>
            <button
              onClick={() => {
                onRouteChange("kontak_pengaduan");
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-rose-700 rounded-xl"
            >
              Lapor Kasus
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
