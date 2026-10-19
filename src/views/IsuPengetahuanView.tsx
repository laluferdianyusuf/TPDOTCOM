import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Tag,
  ArrowRight,
  Clock,
  User,
  ChevronRight,
  HelpCircle,
  X,
  Share2,
} from "lucide-react";
import { PageRoute, ArticleItem } from "../types";
import { ARTICLES } from "../data/content";

interface IsuPengetahuanViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const IsuPengetahuanView: React.FC<IsuPengetahuanViewProps> = ({
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const categories = [
    "Semua",
    "Analisis Kebijakan",
    "Edukasi Digital",
    "Suara Penyintas",
  ];

  const glossaryTerms = [
    {
      term: "Non-Consensual Intimate Imagery (NCII)",
      meaning:
        "Distribusi, ancaman penyebaran, atau publikasi foto dan rekaman video telanjang/intim tanpa persetujuan eksplisit dari individu yang ada di dalamnya.",
    },
    {
      term: "Doxing (Dropping Dox)",
      meaning:
        "Tindakan mencari dan mempublikasikan data pribadi (alamat rumah, nomor NIK, nomor telepon, nama orang tua) seseorang di internet dengan maksud memicu pelecehan atau persekusi.",
    },
    {
      term: "Sextortion (Pemerasan Seksual)",
      meaning:
        "Bentuk pemerasan di mana pelaku mengancam akan mempublikasikan materi seksual korban kecuali korban memberikan uang, hubungan seksual, atau konten intim tambahan.",
    },
    {
      term: "Cyberstalking",
      meaning:
        "Penggunaan internet, GPS, atau perangkat lunak pelacak tersembunyi (stalkerware) untuk mengawasi dan mengintimidasi aktivitas korban secara terus-menerus.",
    },
    {
      term: "Cyber Flashing",
      meaning:
        "Pengiriman foto alat kelamin atau materi pornografi yang tidak diminta ke perangkat seseorang melalui fitur AirDrop, Bluetooth, atau pesan instan.",
    },
    {
      term: "Impersonasi (Identity Theft)",
      meaning:
        "Pembuatan akun tiruan dengan mencuri foto dan identitas korban untuk merusak reputasi, meminjam uang secara ilegal, atau mempermalukan korban.",
    },
  ];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchCat =
      selectedCategory === "Semua" || art.category === selectedCategory;
    const matchSearch =
      !searchKeyword.trim() ||
      art.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      art.tags.some((t) =>
        t.toLowerCase().includes(searchKeyword.toLowerCase()),
      );
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
            Isu & Pengetahuan
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Pusat Pengetahuan, Analisis Regulasi, & Suara Penyintas
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Membongkar kompleksitas kekerasan digital di Indonesia melalui
            artikel kritis, panduan hak hukum UU TPKS, dan cerita keberanian
            para penyintas.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-700 text-white font-bold"
                    : "bg-stone-100 text-slate-700 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari artikel atau tag..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="text-blue-700 font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-slate-600"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500 mt-4">
                <div className="flex items-center gap-1.5 pt-4">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate max-w-[150px]">
                    {article.author}
                  </span>
                </div>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="pt-4 text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Baca</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Glosarium KBGO Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Glosarium Istilah
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold">
                Kamus Istilah Kekerasan Berbasis Gender Online
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Memahami bahasa kejahatan digital adalah langkah pertama untuk
                mengenali dan melawan manipulasi pelaku.
              </p>
            </div>

            <button
              onClick={() => onNavigate("kategori_kbgo")}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors shrink-0 cursor-pointer"
            >
              Buka Katalog 8 Bentuk KBGO Lengkap
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 space-y-2"
              >
                <h4 className="text-sm font-bold text-blue-300">{item.term}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="fixed inset-0"
            onClick={() => setActiveArticle(null)}
            aria-hidden="true"
          />

          <div className="relative bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-3xl overflow-hidden z-10 my-8 max-h-[85vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-blue-700 uppercase">
                    {activeArticle.category}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500">{activeArticle.date}</span>
                </div>
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 italic text-slate-600 text-xs sm:text-sm">
                "{activeArticle.excerpt}"
              </div>

              {activeArticle.content.map((p, pidx) => (
                <p key={pidx}>{p}</p>
              ))}

              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeArticle.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded bg-blue-50 text-blue-800 font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate("kontak_pengaduan")}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Konsultasikan Isu Ini
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
