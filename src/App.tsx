import { useEffect, useState } from "react";
import type { PageRoute } from "./types";

import { DonationModal } from "./components/DonationModal";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
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

const ROUTES: Record<
  PageRoute,
  { path: string; title: string; description: string }
> = {
  beranda: {
    path: "/",
    title: "Transformasi Perempuan Dotcom | Pemberdayaan Perempuan",
    description:
      "TPDotcom menyediakan informasi, edukasi, dan sumber daya untuk mendukung pemberdayaan perempuan serta ruang digital yang aman dan inklusif.",
  },
  tentang_kami: {
    path: "/tentang-kami",
    title: "Tentang Kami | Transformasi Perempuan Dotcom",
    description:
      "Kenali Transformasi Perempuan Dotcom, organisasi yang berfokus pada pemberdayaan perempuan, edukasi, dan ruang digital yang aman.",
  },
  program: {
    path: "/program",
    title: "Program Pemberdayaan Perempuan | TPDotcom",
    description:
      "Jelajahi program dan kegiatan TPDotcom untuk mendukung pemberdayaan perempuan, literasi digital, dan lingkungan yang aman.",
  },
  detail_program_keamanan_digital: {
    path: "/program/keamanan-digital",
    title: "Program Keamanan Digital | TPDotcom",
    description:
      "Informasi program TPDotcom untuk meningkatkan pengetahuan dan kemampuan keamanan digital bagi perempuan dan masyarakat.",
  },
  dokumentasi_kegiatan_program: {
    path: "/program/dokumentasi-kegiatan",
    title: "Dokumentasi Kegiatan Program | TPDotcom",
    description:
      "Lihat dokumentasi kegiatan dan pelaksanaan program Transformasi Perempuan Dotcom.",
  },
  isu_pengetahuan: {
    path: "/informasi-edukasi",
    title: "Informasi dan Edukasi | Transformasi Perempuan Dotcom",
    description:
      "Temukan informasi dan materi edukasi tentang kekerasan berbasis gender online, keamanan digital, teknologi, dan isu perempuan.",
  },
  kategori_kbgo: {
    path: "/informasi-edukasi/kbgo",
    title: "Kekerasan Berbasis Gender Online (KBGO) | TPDotcom",
    description:
      "Pelajari bentuk kekerasan berbasis gender online, pencegahan, keamanan digital, dan sumber informasi bagi penyintas.",
  },
  publikasi: {
    path: "/publikasi",
    title: "Publikasi dan Laporan | Transformasi Perempuan Dotcom",
    description:
      "Akses publikasi, laporan, panduan, dan sumber pengetahuan dari Transformasi Perempuan Dotcom.",
  },
  detail_publikasi_laporan_tahunan_2024: {
    path: "/publikasi/laporan-tahunan-2024",
    title: "Laporan Tahunan 2024 | TPDotcom",
    description:
      "Baca laporan tahunan 2024 Transformasi Perempuan Dotcom untuk mengetahui dokumentasi dan informasi kegiatan organisasi.",
  },
  detail_panduan_protokol_penghapusan_ncii: {
    path: "/publikasi/panduan-penghapusan-ncii",
    title: "Panduan Penghapusan NCII | TPDotcom",
    description:
      "Panduan mengenai langkah dan sumber bantuan terkait penghapusan konten intim nonkonsensual atau NCII.",
  },
  kontak_pengaduan: {
    path: "/kontak-pengaduan",
    title: "Kontak dan Pengaduan | Transformasi Perempuan Dotcom",
    description:
      "Temukan informasi kontak dan jalur pengaduan TPDotcom. Perhatikan privasi dan keamanan saat mencari bantuan.",
  },
};

const PATH_TO_ROUTE = Object.fromEntries(
  Object.entries(ROUTES).map(([route, config]) => [
    config.path,
    route as PageRoute,
  ]),
) as Record<string, PageRoute>;

const VALID_ROUTES = Object.keys(ROUTES) as PageRoute[];

function getInitialRoute(): PageRoute {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const matchedRoute = PATH_TO_ROUTE[pathname];

  if (matchedRoute) return matchedRoute;

  // Kompatibilitas dengan URL hash dan query lama.
  const params = new URLSearchParams(window.location.search);
  const legacyRoute =
    params.get("page") ||
    params.get("route") ||
    window.location.hash.replace(/^#\/?/, "");

  if (VALID_ROUTES.includes(legacyRoute as PageRoute)) {
    const route = legacyRoute as PageRoute;

    // Pindahkan URL lama ke format URL baru.
    window.history.replaceState(null, "", ROUTES[route].path);

    return route;
  }

  return "beranda";
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
      const route = PATH_TO_ROUTE[pathname];

      if (route) {
        setCurrentRoute(route);
      } else {
        setCurrentRoute("beranda");
      }

      window.scrollTo({ top: 0, behavior: "auto" });
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
    setIsSearchOpen(false);

    if (window.location.pathname !== config.path) {
      window.history.pushState(null, "", config.path);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com/search?q=cuaca+hari+ini");
  };

  const seo = ROUTES[currentRoute];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8] text-slate-800">
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
