import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Package,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { umkmBusinesses } from "../data/content";

const businessIcons = [Package, Store, BookOpen];
interface UmkmViewProps {
  onViewCatalog: (businessId: string) => void;
}

const UmkmView: React.FC<UmkmViewProps> = ({ onViewCatalog }) => {
  const [activeBusiness, setActiveBusiness] = useState<string | null>(null);

  const selectedBusiness = umkmBusinesses.find(
    (business) => business.id === activeBusiness,
  );

  const scrollToCatalog = (businessId: string) => {
    setActiveBusiness(businessId);

    setTimeout(() => {
      document
        .getElementById(`catalog-${businessId}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <main className="pb-20 text-slate-900">
      {/* HERO */}
      <section className="border-b border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-800" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                  Pemberdayaan ekonomi masyarakat
                </p>
              </div>

              <h1 className="max-w-3xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Mendukung usaha lokal,{" "}
                <span className="text-blue-800">membuka peluang ekonomi.</span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Kenali berbagai produk dan layanan dari UMKM yang tergabung
                dalam ekosistem pemberdayaan TPDotcom. Setiap usaha memiliki
                cerita, pemilik, dan katalog tersendiri.
              </p>

              <a
                href="#daftar-umkm"
                className="group mt-7 inline-flex items-center gap-2 border-b border-blue-800 pb-1.5 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
              >
                Jelajahi UMKM
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 border-t border-stone-300 pt-6 sm:mt-16">
            <div>
              <p className="font-editorial text-3xl font-semibold text-blue-800">
                03
              </p>
              <p className="mt-1 text-xs text-slate-500">Contoh UMKM</p>
            </div>
            <div className="border-l border-stone-300 pl-5 sm:pl-8">
              <p className="font-editorial text-3xl font-semibold text-blue-800">
                09
              </p>
              <p className="mt-1 text-xs text-slate-500">Contoh katalog</p>
            </div>
            <div className="border-l border-stone-300 pl-5 sm:pl-8">
              <p className="font-editorial text-3xl font-semibold text-blue-800">
                01
              </p>
              <p className="mt-1 text-xs text-slate-500">Ekosistem lokal</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
              Tentang direktori UMKM
            </p>
            <h2 className="font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Produk lokal dengan identitas dan cerita masing-masing.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              Halaman ini menjadi ruang untuk memperkenalkan usaha, produk,
              serta layanan yang dikembangkan oleh para pelaku UMKM. Pengunjung
              dapat mengenali setiap usaha melalui profil pemilik dan melihat
              katalog yang tersedia secara terpisah.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Melalui direktori ini, TPDotcom berupaya memperluas akses
              informasi dan peluang promosi bagi pelaku usaha lokal.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS DIRECTORY */}
      <section
        id="daftar-umkm"
        className="border-y border-stone-300 bg-[#f8f7f3]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                Direktori usaha
              </p>
              <h2 className="font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
                Kenali usaha yang tersedia.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Pilih salah satu usaha untuk melihat profil dan katalog produk
              atau layanan yang ditawarkan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {umkmBusinesses.map((business, index) => {
              const Icon = businessIcons[index] ?? BriefcaseBusiness;

              return (
                <article
                  key={business.id}
                  className="group flex flex-col border border-stone-300 bg-white transition-colors hover:border-blue-800"
                >
                  <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[#eae8e1]">
                    {business.coverImage ? (
                      <img
                        src={business.coverImage}
                        alt={business.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-stone-400">
                        <Icon className="h-12 w-12" strokeWidth={1} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                          Foto usaha
                        </span>
                      </div>
                    )}

                    <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-800">
                      UMKM {business.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-800">
                      {business.category}
                    </p>

                    <h3 className="mt-3 font-editorial text-2xl font-semibold">
                      {business.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                      {business.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-stone-200 pt-4">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Users className="h-4 w-4 text-blue-800" />
                        {business.owner}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <MapPin className="h-4 w-4 text-blue-800" />
                        {business.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <ShoppingBag className="h-4 w-4 text-blue-800" />
                        {business.products.length} item katalog
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onViewCatalog(business.id)}
                      className="group/button mt-7 flex min-h-11 w-full items-center justify-between bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
                    >
                      Lihat katalog usaha
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL CATALOGS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
            Katalog usaha
          </p>
          <h2 className="font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
            Temukan produk dan layanan pilihan.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Setiap katalog dikelola berdasarkan identitas usaha masing-masing,
            sehingga produk dari pemilik usaha yang berbeda tetap memiliki ruang
            informasi tersendiri.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {umkmBusinesses.map((business) => (
            <div
              id={`catalog-${business.id}`}
              key={business.id}
              className="scroll-mt-24"
            >
              <div className="border-y border-stone-300 py-6 sm:py-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
                      Katalog UMKM {business.number}
                    </p>
                    <h3 className="mt-2 font-editorial text-2xl font-semibold sm:text-3xl">
                      {business.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Dikelola oleh {business.owner}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="h-4 w-4 text-blue-800" />
                    {business.location}
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">
                  {business.description}
                </p>
              </div>

              <div className="grid gap-4 pt-7 sm:grid-cols-2 lg:grid-cols-3">
                {business.products.map((product, index) => (
                  <article
                    key={product.id}
                    className="flex flex-col border border-stone-300 bg-white"
                  >
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f0eee8]">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-3 text-stone-400">
                          {product.type === "layanan" ? (
                            <BookOpen className="h-10 w-10" strokeWidth={1} />
                          ) : (
                            <Package className="h-10 w-10" strokeWidth={1} />
                          )}
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                            Foto {product.type}
                          </span>
                        </div>
                      )}

                      <span className="absolute left-3 top-3 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-800">
                        {product.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="font-editorial text-xl font-semibold">
                        {product.name}
                      </h4>

                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                        {product.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                            {product.type === "produk"
                              ? "Harga produk"
                              : "Biaya layanan"}
                          </p>
                          <p className="mt-1 text-base font-semibold text-blue-800">
                            {product.price}
                          </p>
                        </div>

                        <span className="text-xs text-slate-400">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          const subject = encodeURIComponent(
                            `Informasi ${product.name} - ${business.name}`,
                          );
                          const body = encodeURIComponent(
                            `Halo, saya ingin mengetahui informasi lebih lanjut mengenai ${product.name} dari ${business.name}.`,
                          );

                          window.location.href = `mailto:info@tpdotcom.org?subject=${subject}&body=${body}`;
                        }}
                        className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 border border-stone-300 px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-blue-800 hover:text-blue-800"
                      >
                        Tanya produk
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="border-y border-stone-300 py-9 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                Bersama membangun ekonomi lokal
              </p>
              <h2 className="mt-3 max-w-2xl font-editorial text-2xl font-semibold leading-tight sm:text-3xl">
                Punya usaha dan ingin bergabung dalam direktori UMKM?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                Hubungi TPDotcom untuk memperoleh informasi mengenai peluang
                promosi dan pengembangan usaha.
              </p>
            </div>

            <a
              href="mailto:info@tpdotcom.org?subject=Informasi%20Pendaftaran%20UMKM"
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950 lg:self-center"
            >
              Hubungi TPDotcom
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UmkmView;
