import React, { useState, useEffect } from "react";
import { PageRoute } from "./types";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { DonationModal } from "./components/DonationModal";

// Views
import { BerandaView } from "./views/BerandaView";
import { TentangKamiView } from "./views/TentangKamiView";
import { ProgramView } from "./views/ProgramView";
import { DetailProgramKeamananDigitalView } from "./views/DetailProgramKeamananDigitalView";
import { DokumentasiKegiatanProgramView } from "./views/DokumentasiKegiatanProgramView";
import { IsuPengetahuanView } from "./views/IsuPengetahuanView";
import { KategoriKBGOView } from "./views/KategoriKBGOView";
import { PublikasiView } from "./views/PublikasiView";
import { DetailPublikasiLaporan2024View } from "./views/DetailPublikasiLaporan2024View";
import { DetailPanduanNCIIView } from "./views/DetailPanduanNCIIView";
import { KontakPengaduanView } from "./views/KontakPengaduanView";

import { AlertTriangle, ShieldAlert } from "lucide-react";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>("beranda");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDonationOpen, setIsDonationOpen] = useState<boolean>(false);

  // Sync with URL hash or query param on load and hash change
  useEffect(() => {
    const validRoutes: PageRoute[] = [
      "beranda",
      "tentang_kami",
      "program",
      "detail_program_keamanan_digital",
      "dokumentasi_kegiatan_program",
      "isu_pengetahuan",
      "kategori_kbgo",
      "publikasi",
      "detail_publikasi_laporan_tahunan_2024",
      "detail_panduan_protokol_penghapusan_ncii",
      "kontak_pengaduan",
    ];

    const syncRouteFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const routeParam = params.get("page") || params.get("route");
      const hashParam = window.location.hash.replace("#", "");

      if (routeParam && validRoutes.includes(routeParam as PageRoute)) {
        setCurrentRoute(routeParam as PageRoute);
      } else if (hashParam && validRoutes.includes(hashParam as PageRoute)) {
        setCurrentRoute(hashParam as PageRoute);
      }
    };

    syncRouteFromUrl();
    window.addEventListener("hashchange", syncRouteFromUrl);
    return () => window.removeEventListener("hashchange", syncRouteFromUrl);
  }, []);

  // Update hash when route changes and scroll to top
  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com/search?q=cuaca+hari+ini");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8] text-slate-800">
      {/* Header */}
      <Header
        currentRoute={currentRoute}
        onRouteChange={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDonation={() => setIsDonationOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1" id="main-content">
        {currentRoute === "beranda" && (
          <BerandaView
            onNavigate={handleNavigate}
            onOpenDonation={() => setIsDonationOpen(true)}
          />
        )}
        {currentRoute === "tentang_kami" && (
          <TentangKamiView
            onNavigate={handleNavigate}
            onOpenDonation={() => setIsDonationOpen(true)}
          />
        )}
        {currentRoute === "program" && (
          <ProgramView onNavigate={handleNavigate} />
        )}
        {currentRoute === "detail_program_keamanan_digital" && (
          <DetailProgramKeamananDigitalView onNavigate={handleNavigate} />
        )}
        {currentRoute === "dokumentasi_kegiatan_program" && (
          <DokumentasiKegiatanProgramView onNavigate={handleNavigate} />
        )}
        {currentRoute === "isu_pengetahuan" && (
          <IsuPengetahuanView onNavigate={handleNavigate} />
        )}
        {currentRoute === "kategori_kbgo" && (
          <KategoriKBGOView onNavigate={handleNavigate} />
        )}
        {currentRoute === "publikasi" && (
          <PublikasiView onNavigate={handleNavigate} />
        )}
        {currentRoute === "detail_publikasi_laporan_tahunan_2024" && (
          <DetailPublikasiLaporan2024View onNavigate={handleNavigate} />
        )}
        {currentRoute === "detail_panduan_protokol_penghapusan_ncii" && (
          <DetailPanduanNCIIView onNavigate={handleNavigate} />
        )}
        {currentRoute === "kontak_pengaduan" && (
          <KontakPengaduanView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onRouteChange={handleNavigate}
        onOpenDonation={() => setIsDonationOpen(true)}
      />

      {/* Floating Quick Exit Trigger for Mobile / Bottom Right Safety */}
      {/* <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <button
          onClick={handleQuickExit}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1.5 text-xs border border-amber-500"
          title="Keluar Cepat"
        >
          <AlertTriangle className="w-4 h-4 text-amber-950" />
          <span>Keluar Cepat</span>
        </button>
      </div> */}

      {/* Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
      />
    </div>
  );
}
