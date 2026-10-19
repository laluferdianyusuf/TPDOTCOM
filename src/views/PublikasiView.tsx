import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ArrowRight, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  BookOpen, 
  Filter,
  Search,
  ExternalLink
} from 'lucide-react';
import { PageRoute, PublicationItem } from '../types';
import { PUBLICATIONS } from '../data/content';

interface PublikasiViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const PublikasiView: React.FC<PublikasiViewProps> = ({ onNavigate }) => {
  const [selectedType, setSelectedType] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const types = ['Semua', 'Laporan Tahunan', 'Panduan Praktis', 'Kertas Kebijakan'];

  const filteredPubs = PUBLICATIONS.filter(pub => {
    const matchType = selectedType === 'Semua' || pub.type === selectedType;
    const matchSearch = !searchQuery.trim() || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  });

  const handleOpenDetail = (pub: PublicationItem) => {
    if (pub.id === 'laporan-tahunan-2024') {
      onNavigate('detail_publikasi_laporan_tahunan_2024');
    } else if (pub.id === 'panduan-protokol-ncii') {
      onNavigate('detail_panduan_protokol_penghapusan_ncii');
    } else {
      // Default to publication detail
      onNavigate('detail_publikasi_laporan_tahunan_2024');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
            Perpustakaan & Riset Publik
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Publikasi Advokasi, Laporan Situasi, & Panduan Taktis
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Seluruh data, kertas kebijakan, dan pedoman keamanan siber yang kami rilis didasarkan pada dokumentasi kasus nyata dan dapat diunduh bebas untuk kepentingan edukasi publik.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedType === t
                    ? 'bg-rose-700 text-white font-bold'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari judul publikasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPubs.map((pub) => (
            <div 
              key={pub.id}
              className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider">
                    {pub.type}
                  </span>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{pub.year}</span>
                    <span>·</span>
                    <span>{pub.pages} Halaman</span>
                    <span>·</span>
                    <span>{pub.fileSize}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl font-bold text-slate-900 group-hover:text-rose-800 transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 italic">
                    {pub.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pub.summary}
                </p>

                {pub.keyFindings && pub.keyFindings.length > 0 && (
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-2">
                    <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Poin Penting Dokumen:</p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {pub.keyFindings.slice(0, 3).map((pt, pidx) => (
                        <li key={pidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => handleOpenDetail(pub)}
                  className="px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Buka Halaman Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => alert(`Memulai unduhan dokumen "${pub.title}". Dokumen ini berada di bawah lisensi Creative Commons (CC-BY).`)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-slate-800 font-semibold rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh Dokumen (PDF)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
