import { useEffect, useState } from "react";
import type { PageRoute } from "./types";

import { DonationModal } from "./components/DonationModal";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import SEO from "./components/SEO";

import { BerandaView } from "./views/BerandaView";
import { DetailPanduanNCIIView } from "./views/DetailPanduanNCIIView";
import { DetailProgramKeamananDigitalView } from "./views/DetailProgramKeamananDigitalView";
import { DetailPublikasiLaporan2024View } from "./views/DetailPublikasiLaporan2024View";
import { DokumentasiKegiatanProgramView } from "./views/DokumentasiKegiatanProgramView";
import { IsuPengetahuanView } from "./views/IsuPengetahuanView";
import { KategoriKBGOView } from "./views/KategoriKBGOView";
import { KontakPengaduanView } from "./views/KontakPengaduanView";
import { ProgramView } from "./views/ProgramView";
import { PublikasiView } from "./views/PublikasiView";
import { TentangKamiView } from "./views/TentangKamiView";
import { VolunteerView } from "./views/VolunteerView";
import { ParalegalView } from "./views/ParalegalView";
import { ParalegalCasesView } from "./views/ParalegalCasesView";
import UmkmView from "./views/UmkmView";
import { ROUTES } from "./data/content";
import UmkmCatalogView from "./views/UmkmCatalogView";
import Header from "./components/Header";
import RuangJejaringView from "./views/RuangJejaringView";

const PATH_TO_ROUTE = Object.fromEntries(
  Object.entries(ROUTES).map(([route, config]) => [
    config.path,
    route as PageRoute,
  ]),
) as Record<string, PageRoute>;

const VALID_ROUTES = Object.keys(ROUTES) as PageRoute[];

function getPathname() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

function getInitialRoute(): PageRoute {
  const pathname = getPathname();
  const matchedRoute = PATH_TO_ROUTE[pathname];

  if (matchedRoute) return matchedRoute;

  const params = new URLSearchParams(window.location.search);

  const legacyRoute =
    params.get("page") ||
    params.get("route") ||
    window.location.hash.replace(/^#\/?/, "");

  if (VALID_ROUTES.includes(legacyRoute as PageRoute)) {
    const route = legacyRoute as PageRoute;

    window.history.replaceState(null, "", ROUTES[route].path);

    return route;
  }

  if (pathname.startsWith("/umkm/")) {
    return "umkm_katalog";
  }

  return "beranda";
}

function getInitialParalegalId(): string | null {
  if (getPathname() !== "/paralegal/kasus") return null;

  return new URLSearchParams(window.location.search).get("paralegal");
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  const [selectedParalegalId, setSelectedParalegalId] = useState<string | null>(
    getInitialParalegalId,
  );

  const [selectedUmkmId, setSelectedUmkmId] = useState<string | null>(() => {
    const pathname = getPathname();

    if (pathname.startsWith("/umkm/")) {
      return pathname.split("/")[2] || null;
    }

    return null;
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const pathname = getPathname();
      const route = PATH_TO_ROUTE[pathname];

      setCurrentRoute(route || "beranda");

      if (pathname.startsWith("/umkm/")) {
        setCurrentRoute("umkm_katalog");
        setSelectedUmkmId(pathname.split("/")[2] || null);
      } else {
        setSelectedUmkmId(null);
      }

      if (route === "paralegal_kasus") {
        setSelectedParalegalId(
          new URLSearchParams(window.location.search).get("paralegal"),
        );
      } else {
        setSelectedParalegalId(null);
      }

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleNavigate = (route: PageRoute) => {
    const config = ROUTES[route];

    if (!config) return;

    setCurrentRoute(route);
    setSelectedParalegalId(null);
    setIsSearchOpen(false);

    if (window.location.pathname !== config.path) {
      window.history.pushState(null, "", config.path);
    } else if (window.location.search) {
      window.history.pushState(null, "", config.path);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleViewUmkmCatalog = (businessId: string) => {
    const url = `/umkm/${businessId}`;

    setSelectedUmkmId(businessId);
    setCurrentRoute("umkm_katalog");
    setIsSearchOpen(false);

    window.history.pushState(null, "", url);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleViewParalegalCases = (paralegalId: string) => {
    const url = `${ROUTES.paralegal_kasus.path}?paralegal=${encodeURIComponent(
      paralegalId,
    )}`;

    setSelectedParalegalId(paralegalId);
    setCurrentRoute("paralegal_kasus");
    setIsSearchOpen(false);

    window.history.pushState(null, "", url);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackToParalegals = () => {
    handleNavigate("paralegal");
  };

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com/search?q=cuaca+hari+ini");
  };

  const seo = ROUTES[currentRoute];

  return (
    <div className="flex min-h-screen flex-col bg-[#fafaf8] text-slate-800">
      <SEO title={seo.title} description={seo.description} path={seo.path} />

      <Header
        currentRoute={currentRoute}
        onRouteChange={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDonation={() => setIsDonationOpen(true)}
      />

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

        {currentRoute === "volunteer" && <VolunteerView />}

        {currentRoute === "paralegal" && (
          <ParalegalView onViewCases={handleViewParalegalCases} />
        )}

        {currentRoute === "paralegal_kasus" && (
          <ParalegalCasesView
            paralegalId={selectedParalegalId}
            onBack={handleBackToParalegals}
          />
        )}

        {currentRoute === "program" && (
          <ProgramView
            onNavigate={handleNavigate}
            onViewUmkmCatalog={handleViewUmkmCatalog}
          />
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

        {currentRoute === "umkm" && (
          <UmkmView onViewCatalog={handleViewUmkmCatalog} />
        )}

        {currentRoute === "umkm_katalog" && (
          <UmkmCatalogView
            businessId={selectedUmkmId}
            onBack={() => handleNavigate("umkm")}
          />
        )}

        {currentRoute === "ruang_jejaring" && <RuangJejaringView />}
      </main>

      <Footer
        onRouteChange={handleNavigate}
        onOpenDonation={() => setIsDonationOpen(true)}
      />

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
