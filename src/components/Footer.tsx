import { ArrowUpRight, Heart, Mail, MessageCircle } from "lucide-react";
import React from "react";
import Logo from "../assets/images/logo.png";
import { PageRoute } from "../types";

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenDonation: () => void;
}

interface FooterLink {
  label: string;
  route: PageRoute;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Tentang",
    links: [
      { label: "Profil organisasi", route: "tentang_kami" },
      { label: "Program kerja", route: "program" },
      {
        label: "Dokumentasi kegiatan",
        route: "dokumentasi_kegiatan_program",
      },
      { label: "Publikasi", route: "publikasi" },
    ],
  },
  {
    title: "Isu & Pengetahuan",
    links: [
      { label: "Artikel dan analisis", route: "isu_pengetahuan" },
      { label: "Bentuk-bentuk KBGO", route: "kategori_kbgo" },
      {
        label: "Keamanan digital",
        route: "detail_program_keamanan_digital",
      },
      {
        label: "Panduan penghapusan NCII",
        route: "detail_panduan_protokol_penghapusan_ncii",
      },
    ],
  },
  {
    title: "Publikasi",
    links: [
      { label: "Arsip publikasi", route: "publikasi" },
      {
        label: "Laporan tahunan 2024",
        route: "detail_publikasi_laporan_tahunan_2024",
      },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({
  onRouteChange,
  onOpenDonation,
}) => {
  const currentYear = new Date().getFullYear();

  const navigateTo = (route: PageRoute) => {
    onRouteChange(route);

    // Kembali ke awal halaman setelah navigasi.
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#111b2a] text-slate-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* CTA penutup */}
        <section className="grid gap-6 border-b border-slate-700/80 py-10 sm:py-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300">
              Transformasi Perempuan Dotcom
            </p>

            <h2 className="font-editorial text-2xl leading-tight tracking-tight text-white sm:text-3xl">
              Pengetahuan membuka jalan menuju ruang digital yang lebih aman.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Temukan informasi, pelajari isu kekerasan berbasis gender online,
              dan kenali langkah yang dapat dilakukan untuk mendukung
              pemberdayaan perempuan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigateTo("isu_pengetahuan")}
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-slate-600 px-4 text-sm font-medium text-white transition-colors hover:border-slate-400 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Jelajahi pengetahuan
              <ArrowUpRight size={15} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onOpenDonation}
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-blue-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111b2a]"
            >
              <Heart size={15} aria-hidden="true" />
              Dukung kami
            </button>
          </div>
        </section>

        {/* Informasi organisasi dan navigasi */}
        <div className="grid gap-10 py-10 sm:py-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.1fr_1fr] lg:gap-8">
          {/* Identitas */}
          <div>
            <button
              type="button"
              onClick={() => navigateTo("beranda")}
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Kembali ke beranda TPDotcom"
            >
              <img
                src={Logo}
                alt="Transformasi Perempuan Dotcom"
                className="h-auto max-h-14 w-auto max-w-[210px] object-contain object-left"
              />
            </button>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              TPDotcom berfokus pada pemberdayaan perempuan melalui informasi,
              pengetahuan, dan perhatian terhadap isu kekerasan berbasis gender
              online serta keamanan di ruang digital.
            </p>

            <button
              type="button"
              onClick={() => navigateTo("tentang_kami")}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-blue-300 transition-colors hover:text-white"
            >
              Mengenal TPDotcom
              <ArrowUpRight size={13} aria-hidden="true" />
            </button>
          </div>

          {/* Navigasi */}
          {FOOTER_SECTIONS.map((section) => (
            <nav
              key={section.title}
              aria-label={section.title}
              className="min-w-0"
            >
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <button
                      type="button"
                      onClick={() => navigateTo(link.route)}
                      className="group inline-flex items-start gap-2 text-left text-[13px] leading-5 text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={12}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-70"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Kontak */}
          <div className="border-t border-slate-700/80 pt-8 md:col-span-2 lg:col-span-1 lg:border-t-0 lg:pt-0">
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              Hubungi Kami
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Untuk pertanyaan atau informasi lebih lanjut, silakan gunakan
              kanal kontak yang tersedia.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/6282339431011"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm transition-colors hover:text-white"
              >
                <MessageCircle
                  size={17}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-blue-300"
                />

                <span>
                  <span className="block font-medium text-slate-200">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-xs text-slate-400 group-hover:text-slate-300">
                    Buka percakapan
                    <ArrowUpRight
                      size={11}
                      aria-hidden="true"
                      className="ml-1 inline"
                    />
                  </span>
                </span>
              </a>

              <a
                href="mailto:transformasiperempuan@gmail.com"
                className="group flex items-start gap-3 text-sm transition-colors hover:text-white"
              >
                <Mail
                  size={17}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-blue-300"
                />

                <span className="min-w-0">
                  <span className="block font-medium text-slate-200">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-xs leading-5 text-slate-400 group-hover:text-slate-300">
                    transformasiperempuan@gmail.com
                  </span>
                </span>
              </a>

              <button
                type="button"
                onClick={() => navigateTo("kontak_pengaduan")}
                className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-slate-600 px-3 text-xs font-semibold text-white transition-colors hover:border-blue-400 hover:bg-blue-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Informasi kontak & pengaduan
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Catatan keamanan */}
        <div className="border-t border-slate-700/80 py-5">
          <p className="max-w-4xl text-xs leading-6 text-slate-400">
            <span className="font-semibold text-slate-300">
              Perhatikan keamanan pribadi.
            </span>{" "}
            Jika perangkat atau akun yang digunakan mungkin dipantau orang lain,
            pertimbangkan keamanan perangkat sebelum membuka tautan atau
            menghubungi pihak lain. Tombol keluar dari situs tidak menghapus
            riwayat penjelajahan atau aktivitas jaringan.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 border-t border-slate-700/80 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Transformasi Perempuan Dotcom.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={() => navigateTo("tentang_kami")}
              className="transition-colors hover:text-slate-200"
            >
              Tentang organisasi
            </button>

            <button
              type="button"
              onClick={() => navigateTo("kontak_pengaduan")}
              className="transition-colors hover:text-slate-200"
            >
              Hubungi kami
            </button>

            <button
              type="button"
              onClick={onOpenDonation}
              className="inline-flex items-center gap-1.5 font-medium text-blue-300 transition-colors hover:text-white"
            >
              <Heart size={12} aria-hidden="true" />
              Dukung TPDotcom
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
