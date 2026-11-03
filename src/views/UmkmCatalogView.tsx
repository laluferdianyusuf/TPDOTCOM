import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Package,
  ShoppingBag,
  Store,
  UserRound,
} from "lucide-react";
import React from "react";
import { umkmBusinesses } from "../data/content";

interface UmkmCatalogViewProps {
  businessId: string | null;
  onBack: () => void;
}

const UmkmCatalogView: React.FC<UmkmCatalogViewProps> = ({
  businessId,
  onBack,
}) => {
  const business = umkmBusinesses.find((item) => item.id === businessId);

  if (!business) {
    return (
      <main className="min-h-screen bg-[#f8f7f3] px-6 py-24 text-center">
        <div className="mx-auto flex max-w-md flex-col items-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-stone-300 bg-white">
            <Store className="h-7 w-7 text-slate-400" />
          </div>

          <h1 className="font-editorial text-3xl font-semibold text-slate-900">
            UMKM tidak ditemukan
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Katalog usaha yang kamu cari belum tersedia atau mungkin telah
            diperbarui.
          </p>

          <button
            onClick={onBack}
            className="mt-8 inline-flex items-center gap-2 bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-950"
          >
            <ArrowLeft size={16} />
            Kembali ke Direktori UMKM
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f3]">
      {/* HEADER DAN PROFIL UMKM */}
      <section className="border-b border-stone-300 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          {/* Breadcrumb / Back */}
          <button
            onClick={onBack}
            className="mb-10 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-blue-800"
          >
            <ArrowLeft size={16} />
            Kembali ke Direktori UMKM
          </button>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* Informasi UMKM */}
            <div>
              <span className="mb-5 inline-flex items-center border border-blue-100 bg-blue-50 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
                {business.category}
              </span>

              <h1 className="max-w-2xl font-editorial text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {business.name}
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600">
                {business.description}
              </p>

              <div className="mt-8 space-y-4 border-t border-stone-200 pt-6">
                <div className="flex items-start gap-3">
                  <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Pemilik Usaha
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {business.owner}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Lokasi Usaha
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      {business.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Foto Cover */}
            <div className="relative h-72 overflow-hidden bg-stone-200 sm:h-96 lg:h-[440px]">
              {business.coverImage ? (
                <img
                  src={business.coverImage}
                  alt={`Foto usaha ${business.name}`}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-slate-400">
                  <Store size={44} strokeWidth={1} />
                  <span className="mt-4 text-xs">
                    Foto usaha belum tersedia
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* KATALOG PRODUK */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-stone-300 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Jelajahi Produk
            </p>

            <h2 className="font-editorial text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Produk dan Layanan
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Kenali berbagai produk dan layanan yang ditawarkan oleh{" "}
              {business.name}.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShoppingBag size={15} className="text-blue-800" />
            <span>{business.products.length} produk tersedia</span>
          </div>
        </div>

        {/* Product List */}
        {business.products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.products.map((product, index) => (
              <article
                key={product.id}
                className="group overflow-hidden border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative h-60 overflow-hidden bg-stone-100">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-slate-400">
                      <Package size={36} strokeWidth={1} />
                      <span className="mt-3 text-xs">
                        Foto produk belum tersedia
                      </span>
                    </div>
                  )}

                  <span className="absolute left-4 top-4 bg-white/95 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-blue-800">
                    {product.type}
                  </span>
                </div>

                {/* Product Information */}
                <div className="p-6">
                  <span className="text-[10px] font-medium text-slate-400">
                    PRODUK 0{index + 1}
                  </span>

                  <h3 className="mt-2 font-editorial text-xl font-semibold text-slate-900 transition group-hover:text-blue-800">
                    {product.name}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-xs leading-6 text-slate-500">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-stone-200 pt-5">
                    <span className="text-sm font-semibold text-slate-900">
                      {product.price}
                    </span>

                    <a
                      href={`mailto:info@tpdotcom.org?subject=${encodeURIComponent(
                        `Informasi ${product.name} - ${business.name}`,
                      )}`}
                      className="inline-flex items-center gap-2 bg-blue-800 px-4 py-2.5 text-[11px] font-semibold text-white transition hover:bg-blue-950"
                    >
                      Tanya Produk
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
            <Package className="mx-auto h-9 w-9 text-slate-300" />

            <h3 className="mt-4 font-editorial text-xl font-semibold text-slate-800">
              Belum Ada Produk
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Produk atau layanan dari usaha ini belum tersedia.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden bg-[#173F35] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center border border-white/20 bg-white/10">
            <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
          </div>

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Dukung Produk Lokal
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
            Tertarik dengan produk dari {business.name}?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
            Hubungi TPDotcom untuk mendapatkan informasi lebih lanjut mengenai
            produk dan layanan UMKM ini.
          </p>

          <a
            href="mailto:info@tpdotcom.org?subject=Informasi%20UMKM"
            className="mt-8 inline-flex items-center gap-3 bg-white px-7 py-3.5 text-xs font-semibold text-[#173F35] transition hover:bg-stone-100"
          >
            Hubungi Kami
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default UmkmCatalogView;
