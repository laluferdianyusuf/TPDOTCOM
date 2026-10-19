import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, Shield, FileText, AlertCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { ARTICLES, PUBLICATIONS, KBGO_CATEGORIES, PROGRAMS } from '../data/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: Array<{
      title: string;
      category: string;
      snippet: string;
      route: PageRoute;
      icon: 'article' | 'publication' | 'kbgo' | 'program';
    }> = [];

    // Search in KBGO Categories
    KBGO_CATEGORIES.forEach(item => {
      if (
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.examples.some(e => e.toLowerCase().includes(q))
      ) {
        results.push({
          title: item.name,
          category: 'Kategori KBGO',
          snippet: item.shortDesc,
          route: 'kategori_kbgo',
          icon: 'kbgo'
        });
      }
    });

    // Search in Publications
    PUBLICATIONS.forEach(item => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.keyFindings.some(f => f.toLowerCase().includes(q))
      ) {
        results.push({
          title: item.title,
          category: `Publikasi · ${item.type}`,
          snippet: item.summary,
          route: item.id === 'laporan-tahunan-2024' ? 'detail_publikasi_laporan_tahunan_2024' : (item.id === 'panduan-protokol-ncii' ? 'detail_panduan_protokol_penghapusan_ncii' : 'publikasi'),
          icon: 'publication'
        });
      }
    });

    // Search in Articles
    ARTICLES.forEach(item => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      ) {
        results.push({
          title: item.title,
          category: `Artikel · ${item.category}`,
          snippet: item.excerpt,
          route: 'isu_pengetahuan',
          icon: 'article'
        });
      }
    });

    // Search in Programs
    PROGRAMS.forEach(item => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      ) {
        results.push({
          title: item.title,
          category: 'Program Kerja TP.com',
          snippet: item.description,
          route: item.route || 'program',
          icon: 'program'
        });
      }
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6">
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari isu, panduan NCII, hukum UU TPKS, jenis KBGO..."
            className="w-full text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded bg-stone-100"
            >
              Hapus
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-stone-100"
            aria-label="Tutup pencarian"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {!query && (
          <div className="p-4 sm:p-6 bg-stone-50/70 border-b border-stone-100">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
              Paling Sering Dicari:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Hapus Foto NCII', 'Pasal 14 UU TPKS', 'Doxing', 'Stalkerware', 'Laporan 2024', 'Pemerasan Seksual'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 text-xs bg-white border border-stone-200 rounded-lg text-slate-700 hover:border-rose-400 hover:text-rose-700 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-stone-100">
          {query && searchResults.length === 0 && (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <AlertCircle className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-medium">Tidak ada hasil untuk "{query}"</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Coba gunakan kata kunci umum seperti "hukum", "konten intim", "doxing", atau langsung hubungi tim pengaduan kami.
              </p>
            </div>
          )}

          {searchResults.map((res, idx) => (
            <button
              key={idx}
              onClick={() => {
                onNavigate(res.route);
                onClose();
              }}
              className="w-full text-left p-3 hover:bg-rose-50/60 rounded-xl transition-colors group cursor-pointer block"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-rose-700 uppercase tracking-wider block">
                    {res.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-800 transition-colors">
                    {res.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {res.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-slate-500 flex items-center justify-between">
          <span>{searchResults.length} hasil ditemukan</span>
          <span>Tekan ESC untuk menutup</span>
        </div>
      </div>
    </div>
  );
};
