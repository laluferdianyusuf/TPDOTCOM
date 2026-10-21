import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock,
  Search,
  Tag,
  UserRound,
  X,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { ARTICLES } from "../data/content";
import { ArticleItem, PageRoute } from "../types";

interface IsuPengetahuanViewProps {
  onNavigate: (route: PageRoute) => void;
}

const CATEGORIES = [
  "Semua",
  "Analisis Kebijakan",
  "Edukasi Digital",
  "Suara Penyintas",
];

const GLOSSARY_TERMS = [
  {
    term: "NCII",
    fullName: "Non-Consensual Intimate Imagery",
    category: "Privasi dan persetujuan",
    meaning:
      "Gambar atau video intim yang dibuat, dibagikan, atau disebarkan tanpa persetujuan orang yang ada di dalamnya. Ancaman penyebarannya juga dapat menjadi bentuk kekerasan.",
  },
  {
    term: "Doxing",
    fullName: "Pengungkapan data pribadi",
    category: "Privasi dan keamanan",
    meaning:
      "Pengumpulan atau penyebaran informasi pribadi seseorang tanpa persetujuan, terutama ketika digunakan untuk mengintimidasi, melecehkan, mengancam, atau membahayakan keselamatannya.",
  },
  {
    term: "Sextortion",
    fullName: "Pemerasan seksual",
    category: "Pemaksaan dan ancaman",
    meaning:
      "Pemaksaan atau pemerasan menggunakan ancaman untuk menyebarkan materi intim, dengan tujuan memperoleh uang, materi tambahan, tindakan seksual, atau sesuatu yang dikehendaki pelaku.",
  },
  {
    term: "Cyberstalking",
    fullName: "Penguntitan di ruang digital",
    category: "Pengawasan dan intimidasi",
    meaning:
      "Pola pengawasan, pelacakan, atau kontak berulang melalui teknologi yang menimbulkan ketakutan, tekanan, atau gangguan terhadap rasa aman seseorang.",
  },
  {
    term: "Cyberflashing",
    fullName: "Pengiriman konten seksual tanpa diminta",
    category: "Pelecehan digital",
    meaning:
      "Pengiriman gambar atau konten seksual yang tidak diminta melalui pesan, aplikasi, atau fitur berbagi berkas. Tindakan ini dapat menjadi bagian dari pelecehan seksual.",
  },
  {
    term: "Impersonasi",
    fullName: "Penyamaran identitas",
    category: "Identitas dan reputasi",
    meaning:
      "Penggunaan nama, foto, atau informasi seseorang untuk berpura-pura menjadi orang tersebut. Penyalahgunaan identitas dapat digunakan untuk menipu, mengintimidasi, atau merusak reputasi.",
  },
];

const categoryDescriptions: Record<string, string> = {
  Semua: "Seluruh artikel dan bahan pengetahuan yang tersedia.",
  "Analisis Kebijakan":
    "Membaca kebijakan, hak, dan respons terhadap persoalan perempuan di ruang digital.",
  "Edukasi Digital":
    "Panduan praktis untuk memahami teknologi, privasi, dan keamanan digital.",
  "Suara Penyintas":
    "Perspektif dan pengalaman yang membantu kita memahami dampak kekerasan dengan lebih manusiawi.",
};

export const IsuPengetahuanView: React.FC<IsuPengetahuanViewProps> = ({
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredArticles = useMemo(() => {
    const keyword = searchKeyword.trim().toLocaleLowerCase("id");

    return ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === "Semua" || article.category === selectedCategory;

      const searchableText = [
        article.title,
        article.excerpt,
        article.author,
        article.category,
        ...article.tags,
      ]
        .join(" ")
        .toLocaleLowerCase("id");

      return matchesCategory && (!keyword || searchableText.includes(keyword));
    });
  }, [selectedCategory, searchKeyword]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  useEffect(() => {
    if (!activeArticle) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArticle(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeArticle]);

  const openArticle = (article: ArticleItem) => {
    setActiveArticle(article);
    setCopied(false);
  };

  const closeArticle = () => {
    setActiveArticle(null);
    setCopied(false);
  };

  const handleCopyArticle = async () => {
    if (!activeArticle) return;

    const articleText = [
      activeArticle.title,
      "",
      activeArticle.excerpt,
      "",
      ...activeArticle.content,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(articleText);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const clearFilters = () => {
    setSelectedCategory("Semua");
    setSearchKeyword("");
  };

  return (
    <main className="bg-[#f8f7f3] pb-20 text-slate-900">
      {/* Intro */}
      <section className="border-b border-stone-300">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-800" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800">
                  Isu dan Pengetahuan
                </span>
              </div>

              <h1 className="max-w-4xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Memahami persoalan.{" "}
                <span className="text-blue-800">Membuka percakapan.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Ruang belajar tentang kekerasan berbasis gender online, keamanan
                digital, kebijakan, dan pengalaman perempuan dalam menghadapi
                perubahan teknologi.
              </p>
            </div>

            <div className="border-t border-stone-300 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <BookOpen
                size={25}
                strokeWidth={1.4}
                className="mb-5 text-blue-800"
              />

              <p className="max-w-md font-editorial text-xl leading-relaxed text-slate-800 sm:text-2xl">
                Pengetahuan bukan sekadar informasi. Ia membantu kita memahami
                hak, mengenali risiko, dan menentukan langkah.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <span className="h-1.5 w-1.5 bg-blue-800" />
                <span>Belajar bersama, tanpa menghakimi.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article discovery */}
      <section
        id="daftar-artikel"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-12 sm:px-8 sm:py-16 lg:px-12"
      >
        <div className="flex flex-col justify-between gap-6 border-b border-stone-300 pb-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-800">
              Ruang baca
            </p>

            <h2 className="mt-3 font-editorial text-3xl font-semibold sm:text-4xl">
              Artikel dan perspektif
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Telusuri analisis, panduan, dan perspektif berdasarkan isu yang
              ingin kamu pahami.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-900">
              {filteredArticles.length}
            </span>{" "}
            {filteredArticles.length === 1
              ? "artikel ditemukan"
              : "artikel ditemukan"}
          </p>
        </div>

        {/* Search */}
        <div className="grid gap-5 border-b border-stone-200 py-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative max-w-xl">
            <Search
              size={17}
              strokeWidth={1.7}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="search"
              aria-label="Cari artikel"
              placeholder="Cari topik, judul, atau kata kunci..."
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
              className="w-full border-0 border-b border-stone-300 bg-transparent py-3 pl-7 pr-8 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-800 focus:ring-0"
            />

            {searchKeyword && (
              <button
                type="button"
                onClick={() => setSearchKeyword("")}
                aria-label="Hapus pencarian"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-900"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                  className={`border-b-2 pb-2 text-xs transition-colors ${
                    isActive
                      ? "border-blue-800 font-bold text-blue-800"
                      : "border-transparent text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 min-h-6">
          <p className="text-xs leading-6 text-slate-500">
            {categoryDescriptions[selectedCategory]}
          </p>
        </div>

        {/* Featured article */}
        {featuredArticle ? (
          <div className="mt-7">
            <article className="grid overflow-hidden border border-stone-300 bg-white lg:grid-cols-[0.8fr_1.2fr]">
              <div className="flex min-h-[230px] flex-col justify-between bg-[#eae8e1] p-6 sm:min-h-[280px] sm:p-9 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-800">
                    {searchKeyword || selectedCategory !== "Semua"
                      ? "Hasil pencarian"
                      : "Pilihan bacaan"}
                  </span>

                  <BookOpen
                    size={21}
                    strokeWidth={1.4}
                    className="text-slate-500"
                  />
                </div>

                <div>
                  <span className="inline-block border border-stone-400 px-3 py-1 text-[10px] font-semibold text-slate-700">
                    {featuredArticle.category}
                  </span>

                  <div className="mt-5 font-editorial text-5xl font-semibold leading-none text-blue-800 sm:text-6xl">
                    01
                  </div>

                  <p className="mt-3 max-w-xs text-xs leading-6 text-slate-600">
                    Satu bacaan untuk memulai percakapan dan memperluas
                    pemahaman.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} />
                      {featuredArticle.readTime}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <UserRound size={13} />
                      {featuredArticle.author}
                    </span>

                    {featuredArticle.date && (
                      <span>{featuredArticle.date}</span>
                    )}
                  </div>

                  <h3 className="mt-5 max-w-2xl font-editorial text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="mt-7 flex flex-col justify-between gap-5 border-t border-stone-200 pt-5 sm:flex-row sm:items-end">
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {featuredArticle.tags.slice(0, 4).map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => {
                          setSearchKeyword(tag);
                          document
                            .getElementById("daftar-artikel")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-1 text-[10px] text-slate-500 transition-colors hover:text-blue-800"
                      >
                        <Tag size={11} />
                        {tag}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => openArticle(featuredArticle)}
                    className="inline-flex shrink-0 items-center gap-3 self-start text-xs font-bold text-blue-800 transition-colors hover:text-blue-950 sm:self-auto"
                  >
                    Baca artikel
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div className="mt-7 border border-dashed border-stone-300 px-6 py-16 text-center">
            <Search
              size={27}
              strokeWidth={1.3}
              className="mx-auto text-stone-400"
            />

            <h3 className="mt-5 font-editorial text-2xl font-semibold">
              Belum menemukan artikel yang sesuai
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
              Coba kata kunci lain atau pilih kategori yang berbeda untuk
              melihat bahan pengetahuan lainnya.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 border border-stone-300 px-4 py-3 text-xs font-semibold transition-colors hover:border-blue-800 hover:text-blue-800"
            >
              Hapus semua filter
              <ArrowRight size={14} />
            </button>
          </div>
        )}

        {/* Remaining articles */}
        {remainingArticles.length > 0 && (
          <div className="mt-14">
            <div className="mb-5 flex items-center justify-between border-b border-stone-300 pb-4">
              <h3 className="font-editorial text-xl font-semibold">
                Bacaan lainnya
              </h3>

              <span className="text-xs text-slate-500">
                {remainingArticles.length} artikel
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-3">
              {remainingArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="group flex flex-col border-b border-stone-300 py-7 sm:py-8"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-blue-800">
                      {article.category}
                    </span>

                    <span className="font-editorial text-lg text-stone-400">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="mt-4 font-editorial text-xl font-semibold leading-snug transition-colors group-hover:text-blue-800">
                    {article.title}
                  </h4>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => {
                          setSearchKeyword(tag);
                          document
                            .getElementById("daftar-artikel")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-[10px] text-slate-500 transition-colors hover:text-blue-800"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-stone-200 pt-4">
                    <span className="flex min-w-0 items-center gap-1.5 text-[11px] text-slate-500">
                      <Clock size={12} className="shrink-0" />
                      <span>{article.readTime}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => openArticle(article)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 transition-colors hover:text-blue-800"
                    >
                      Baca
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {filteredArticles.length > 0 && (
          <p className="mt-8 text-xs leading-6 text-slate-500">
            Menampilkan {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "artikel" : "artikel"} berdasarkan
            filter yang dipilih.
          </p>
        )}
      </section>

      {/* Glossary */}
      <section className="border-y border-stone-800 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3 text-blue-300">
                <span className="h-px w-7 bg-blue-400" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                  Glosarium KBGO
                </span>
              </div>

              <h2 className="font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
                Mengenali istilah untuk memahami persoalan.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Istilah digital sering terdengar rumit. Memahami artinya dapat
                membantu kita mengenali pola kekerasan, membicarakan risiko, dan
                mencari informasi yang relevan.
              </p>

              <button
                type="button"
                onClick={() => onNavigate("kategori_kbgo")}
                className="mt-7 inline-flex items-center gap-3 border border-white/30 px-4 py-3 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-slate-950"
              >
                Jelajahi topik KBGO
                <ArrowRight size={14} />
              </button>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                Istilah membantu menjelaskan pola kejadian, tetapi konteks
                setiap pengalaman tetap perlu diperhatikan.
              </p>
            </div>

            <div className="border-t border-white/20">
              {GLOSSARY_TERMS.map((item, index) => {
                const isOpen = selectedTerm === item.term;

                return (
                  <article key={item.term} className="border-b border-white/15">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setSelectedTerm(isOpen ? null : item.term)}
                      className="flex w-full items-center gap-4 py-5 text-left sm:py-6"
                    >
                      <span className="w-7 shrink-0 font-editorial text-sm text-blue-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-semibold text-white">
                          {item.term}
                        </span>
                        <span className="mt-1 block text-xs text-slate-400">
                          {item.fullName}
                        </span>
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 transition-transform ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        <ChevronRight size={16} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6 pl-11 pr-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-300">
                          {item.category}
                        </span>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                          {item.meaning}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-8 border-b border-stone-300 pb-12 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800">
              Terus belajar
            </p>

            <h2 className="mt-4 max-w-2xl font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Punya pertanyaan tentang keamanan digital atau KBGO?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Mulai dari informasi yang tersedia atau hubungi TPDotcom untuk
              mengetahui jalur komunikasi dan bantuan yang relevan.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("kontak_pengaduan")}
            className="inline-flex items-center justify-center gap-3 bg-blue-800 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
          >
            Hubungi TPDotcom
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Article reading modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-0 backdrop-blur-sm sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeArticle();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-dialog-title"
            className="flex h-full max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden bg-[#fdfcf9] shadow-2xl sm:h-auto sm:border sm:border-stone-300"
          >
            <header className="flex items-start justify-between gap-5 border-b border-stone-200 px-5 py-5 sm:px-8 sm:py-7">
              <div className="min-w-0">
                <button
                  type="button"
                  onClick={closeArticle}
                  className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-blue-800"
                >
                  <ArrowLeft size={14} />
                  Kembali ke daftar artikel
                </button>

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-800">
                  {activeArticle.category}
                </p>

                <h2
                  id="article-dialog-title"
                  className="mt-3 font-editorial text-2xl font-semibold leading-tight sm:text-3xl"
                >
                  {activeArticle.title}
                </h2>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <UserRound size={13} />
                    {activeArticle.author}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {activeArticle.readTime}
                  </span>

                  {activeArticle.date && <span>{activeArticle.date}</span>}
                </div>
              </div>

              <button
                type="button"
                onClick={closeArticle}
                aria-label="Tutup artikel"
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-stone-300 text-slate-500 transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                <X size={18} />
              </button>
            </header>

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <div className="border-l-2 border-blue-800 bg-[#f1efe9] px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-800">
                  Ringkasan
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {activeArticle.excerpt}
                </p>
              </div>

              <div className="mt-7 space-y-5">
                {activeArticle.content.map((paragraph, index) => (
                  <p
                    key={`${activeArticle.id}-${index}`}
                    className="whitespace-pre-line text-sm leading-8 text-slate-700 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {activeArticle.tags.length > 0 && (
                <div className="mt-8 border-t border-stone-200 pt-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    Topik terkait
                  </p>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {activeArticle.tags.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => {
                          closeArticle();
                          setSearchKeyword(tag);
                          setSelectedCategory("Semua");

                          window.setTimeout(() => {
                            document
                              .getElementById("daftar-artikel")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }, 0);
                        }}
                        className="text-xs text-blue-800 hover:underline"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <footer className="flex flex-col gap-3 border-t border-stone-200 bg-[#f8f7f3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <button
                type="button"
                onClick={handleCopyArticle}
                className="inline-flex items-center justify-center gap-2 border border-stone-300 px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-800 hover:text-blue-800"
              >
                {copied ? <Check size={14} /> : <BookOpen size={14} />}
                {copied ? "Artikel berhasil disalin" : "Salin teks artikel"}
              </button>

              <button
                type="button"
                onClick={() => onNavigate("kontak_pengaduan")}
                className="inline-flex items-center justify-center gap-2 bg-blue-800 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-blue-900"
              >
                Hubungi TPDotcom
                <ArrowDownRight size={14} />
              </button>
            </footer>
          </section>
        </div>
      )}
    </main>
  );
};
