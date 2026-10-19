export type PageRoute = 
  | 'beranda'
  | 'tentang_kami'
  | 'program'
  | 'detail_program_keamanan_digital'
  | 'isu_pengetahuan'
  | 'kategori_kbgo'
  | 'publikasi'
  | 'detail_publikasi_laporan_tahunan_2024'
  | 'detail_panduan_protokol_penghapusan_ncii'
  | 'kontak_pengaduan';

export interface KBGOCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  examples: string[];
  legalBasis: string[]; // e.g. UU TPKS Pasal 14
  riskLevel: 'Tinggi' | 'Sangat Kritis' | 'Sedang';
  immediateActions: string[];
  icon: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'Laporan Tahunan' | 'Panduan Praktis' | 'Kertas Kebijakan' | 'Riset & Data';
  year: number;
  date: string;
  pages: number;
  fileSize: string;
  summary: string;
  keyFindings: string[];
  downloadUrl?: string;
  coverImage?: string;
  isFeatured?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  category: 'Analisis Kebijakan' | 'Edukasi Digital' | 'Suara Penyintas' | 'Advokasi Hukum';
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beneficiariesCount: string;
  keyFeatures: string[];
  icon: string;
  route?: PageRoute;
}

export interface CaseReportForm {
  fullName: string;
  aliasName?: string;
  isAnonymous: boolean;
  safeContactMethod: 'whatsapp' | 'signal' | 'telegram' | 'email';
  contactValue: string;
  victimAgeGroup: string;
  victimLocation: string;
  category: string;
  platforms: string[];
  incidentDate: string;
  urgencyLevel: 'darurat' | 'segera' | 'konsultasi';
  neededServices: string[];
  chronology: string;
  hasEvidence: boolean;
  consentAgreed: boolean;
}
