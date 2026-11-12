import React, { useEffect, useRef, useState } from "react";

import {
  ArrowUpRight,
  ChevronDown,
  Heart,
  LockKeyhole,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import Logo from "../assets/images/logo.png";
import { PageRoute } from "../types";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenSearch: () => void;
  onOpenDonation: () => void;
}

interface DropdownItem {
  key: string;
  route: PageRoute;
}

interface NavigationItem {
  key: string;
  route: PageRoute;
  dropdownItems?: DropdownItem[];
}

const NAV_ITEMS: NavigationItem[] = [
  {
    key: "home",
    route: "beranda",
  },
  {
    key: "about",
    route: "tentang_kami",
    dropdownItems: [
      {
        key: "profile",
        route: "tentang_kami",
      },
      {
        key: "paralegal",
        route: "paralegal",
      },
      {
        key: "volunteer",
        route: "volunteer",
      },
    ],
  },
  {
    key: "program",
    route: "program",
    dropdownItems: [
      {
        key: "allPrograms",
        route: "program",
      },
      {
        key: "digitalSecurity",
        route: "detail_program_keamanan_digital",
      },
      {
        key: "documentation",
        route: "dokumentasi_kegiatan_program",
      },
      {
        key: "msme",
        route: "umkm",
      },
    ],
  },
  {
    key: "issues",
    route: "isu_pengetahuan",
    dropdownItems: [
      {
        key: "articles",
        route: "isu_pengetahuan",
      },
      {
        key: "kbgo",
        route: "kategori_kbgo",
      },
    ],
  },
  {
    key: "publication",
    route: "publikasi",
    dropdownItems: [
      {
        key: "allPublications",
        route: "publikasi",
      },
    ],
  },
  {
    key: "contact",
    route: "kontak_pengaduan",
  },

  // {
  //   key: "network",
  //   route: "ruang_jejaring",
  // },
];

const isRouteActive = (
  currentRoute: PageRoute,
  item: NavigationItem,
): boolean => {
  if (currentRoute === item.route) {
    return true;
  }

  return Boolean(
    item.dropdownItems?.some(
      (dropdownItem) => dropdownItem.route === currentRoute,
    ),
  );
};

const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onRouteChange,
  onOpenSearch,
  onOpenDonation,
}) => {
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);

  const navigateTo = (route: PageRoute) => {
    onRouteChange(route);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  const handleSearch = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    onOpenSearch();
  };

  const handleDonation = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    onOpenDonation();
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-stone-200 bg-[#f8f7f3]/95 backdrop-blur-md"
    >
      {/* Informasi kontak */}
      <div className="border-b border-slate-700 bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 text-xs">
            <span className="shrink-0 text-blue-300">
              <Phone size={13} aria-hidden="true" />
            </span>

            <span className="hidden text-slate-300 sm:inline">
              {t("header.contactQuestion")}
            </span>

            <span className="text-slate-300 sm:hidden">
              {t("header.contactMobile")}
            </span>

            <a
              href="https://wa.me/6282339431011"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("header.whatsappLabel")}
              className="inline-flex shrink-0 items-center gap-1 font-semibold text-white underline decoration-slate-500 underline-offset-4 transition-colors hover:text-blue-200"
            >
              {t("header.whatsapp")}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>

          <span className="hidden text-[10px] tracking-wide text-slate-400 md:inline">
            Transformasi Perempuan Dotcom
          </span>
        </div>
      </div>

      {/* Navigasi utama */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigateTo("beranda")}
            aria-label={t("header.backHome")}
            className="flex min-w-0 shrink-0 items-center rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4"
          >
            <img
              src={Logo}
              alt="Transformasi Perempuan Dotcom"
              className="h-auto max-h-12 w-auto max-w-[155px] object-contain sm:max-w-[190px]"
            />
          </button>

          {/* Navigasi desktop */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label={t("header.navigation")}
          >
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(currentRoute, item);
              const hasDropdown = Boolean(item.dropdownItems?.length);
              const dropdownOpen = openDropdown === item.key;

              if (!hasDropdown) {
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => navigateTo(item.route)}
                    aria-current={
                      currentRoute === item.route ? "page" : undefined
                    }
                    className={`
                      relative whitespace-nowrap px-3 py-3
                      text-[13px] transition-colors
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-blue-700
                      ${
                        active
                          ? "font-semibold text-blue-800"
                          : "text-slate-600 hover:text-slate-950"
                      }
                    `}
                  >
                    {t(`header.${item.key}`)}

                    {active && (
                      <span className="absolute inset-x-3 bottom-0 h-[2px] bg-blue-800" />
                    )}
                  </button>
                );
              }

              return (
                <div key={item.key} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.key)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    className={`
                      relative flex items-center gap-1
                      whitespace-nowrap px-3 py-3
                      text-[13px] transition-colors
                      focus-visible:outline-none
                      focus-visible:ring-2 focus-visible:ring-blue-700
                      ${
                        active
                          ? "font-semibold text-blue-800"
                          : "text-slate-600 hover:text-slate-950"
                      }
                    `}
                  >
                    {t(`header.${item.key}`)}

                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />

                    {active && (
                      <span className="absolute inset-x-3 bottom-0 h-[2px] bg-blue-800" />
                    )}
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 w-64 border border-stone-200 bg-[#fffefa] py-2 shadow-xl shadow-slate-900/10">
                      <div className="border-b border-stone-100 px-4 pb-2 pt-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                          {t("header.explore")}
                        </p>

                        <p className="mt-1 font-editorial text-base text-slate-900">
                          {t(`header.${item.key}`)}
                        </p>
                      </div>

                      <div className="py-1">
                        {item.dropdownItems?.map((dropdownItem) => {
                          const selected = currentRoute === dropdownItem.route;

                          return (
                            <button
                              key={dropdownItem.key}
                              type="button"
                              onClick={() => navigateTo(dropdownItem.route)}
                              aria-current={selected ? "page" : undefined}
                              className={`
                                flex w-full items-center justify-between
                                gap-3 px-4 py-3 text-left text-xs
                                transition-colors
                                ${
                                  selected
                                    ? "bg-blue-50 font-semibold text-blue-900"
                                    : "text-slate-600 hover:bg-stone-100 hover:text-slate-950"
                                }
                              `}
                            >
                              <span>{t(`header.${dropdownItem.key}`)}</span>

                              {selected && (
                                <span className="h-1.5 w-1.5 shrink-0 bg-blue-800" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Aksi desktop */}
          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <button
              type="button"
              onClick={handleSearch}
              title={t("header.search")}
              aria-label={t("header.openSearch")}
              className="inline-flex h-10 w-10 items-center justify-center text-slate-600 transition-colors hover:bg-stone-200/70 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              <Search size={18} strokeWidth={1.7} />
            </button>
            <LanguageSelector />

            <button
              type="button"
              onClick={handleDonation}
              className="inline-flex h-10 items-center gap-2 border border-stone-300 px-3 text-xs font-medium text-slate-700 transition-colors hover:border-blue-800 hover:text-blue-800"
            >
              <Heart size={15} strokeWidth={1.8} />
              {t("header.support")}
            </button>

            <button
              type="button"
              onClick={() => navigateTo("kontak_pengaduan")}
              className="inline-flex h-10 items-center gap-2 bg-blue-800 px-4 text-xs font-semibold text-white transition-colors hover:bg-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              <LockKeyhole size={14} strokeWidth={1.8} />
              {t("header.contactComplaint")}
            </button>
          </div>

          {/* Aksi mobile */}
          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <LanguageSelector compact />

            <button
              type="button"
              onClick={handleSearch}
              aria-label={t("header.openSearch")}
              className="inline-flex h-10 w-10 items-center justify-center text-slate-700 transition-colors hover:bg-stone-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              <Search size={19} strokeWidth={1.7} />
            </button>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen((current) => !current);
                setOpenDropdown(null);
              }}
              aria-label={
                isMobileMenuOpen ? t("header.closeMenu") : t("header.openMenu")
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center text-slate-800 transition-colors hover:bg-stone-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              {isMobileMenuOpen ? (
                <X size={22} strokeWidth={1.7} />
              ) : (
                <Menu size={22} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile dan tablet */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-stone-200 bg-[#f8f7f3] lg:hidden"
        >
          <nav
            aria-label={t("header.mobileNavigation")}
            className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6"
          >
            {NAV_ITEMS.map((item, index) => {
              const active = isRouteActive(currentRoute, item);
              const hasDropdown = Boolean(item.dropdownItems?.length);
              const dropdownOpen = openDropdown === item.key;

              return (
                <div
                  key={item.key}
                  className={index === 0 ? "" : "border-t border-stone-200/80"}
                >
                  {hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.key)}
                        aria-expanded={dropdownOpen}
                        className={`
                          flex w-full items-center justify-between
                          gap-3 py-3.5 text-left text-sm
                          transition-colors
                          ${
                            active
                              ? "font-semibold text-blue-900"
                              : "font-medium text-slate-700"
                          }
                        `}
                      >
                        <span>{t(`header.${item.key}`)}</span>

                        <ChevronDown
                          size={17}
                          aria-hidden="true"
                          className={`shrink-0 transition-transform duration-200 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className="mb-3 ml-2 border-l-2 border-stone-300 pl-3">
                          {item.dropdownItems?.map((dropdownItem) => {
                            const selected =
                              currentRoute === dropdownItem.route;

                            return (
                              <button
                                key={dropdownItem.key}
                                type="button"
                                onClick={() => navigateTo(dropdownItem.route)}
                                aria-current={selected ? "page" : undefined}
                                className={`
                                  block w-full py-2.5 pl-2
                                  text-left text-[13px]
                                  transition-colors
                                  ${
                                    selected
                                      ? "font-semibold text-blue-900"
                                      : "text-slate-600 hover:text-slate-950"
                                  }
                                `}
                              >
                                {t(`header.${dropdownItem.key}`)}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => navigateTo(item.route)}
                      aria-current={
                        currentRoute === item.route ? "page" : undefined
                      }
                      className={`
                        flex w-full items-center justify-between
                        gap-3 py-3.5 text-left text-sm
                        transition-colors
                        ${
                          active
                            ? "font-semibold text-blue-900"
                            : "font-medium text-slate-700"
                        }
                      `}
                    >
                      <span>{t(`header.${item.key}`)}</span>

                      {active && (
                        <span
                          className="h-1.5 w-1.5 shrink-0 bg-blue-800"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  )}
                </div>
              );
            })}

            {/* Aksi utama */}
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-stone-200 pt-4">
              <button
                type="button"
                onClick={handleDonation}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-stone-300 px-3 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-800 hover:text-blue-800"
              >
                <Heart size={15} strokeWidth={1.8} />
                {t("header.supportUs")}
              </button>

              <button
                type="button"
                onClick={() => navigateTo("kontak_pengaduan")}
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-blue-800 px-3 text-xs font-semibold text-white transition-colors hover:bg-blue-950"
              >
                <LockKeyhole size={14} strokeWidth={1.8} />
                {t("header.contactComplaint")}
              </button>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
              Transformasi Perempuan Dotcom — {t("header.description")}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
