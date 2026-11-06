export type PageRoute =
  | "beranda"
  | "tentang_kami"
  | "program"
  | "detail_program_keamanan_digital"
  | "dokumentasi_kegiatan_program"
  | "isu_pengetahuan"
  | "kategori_kbgo"
  | "publikasi"
  | "detail_publikasi_laporan_tahunan_2024"
  | "detail_panduan_protokol_penghapusan_ncii"
  | "kontak_pengaduan"
  | "volunteer"
  | "paralegal"
  | "paralegal_kasus"
  | "umkm"
  | "umkm_katalog";

export interface KBGOCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  examples: string[];
  legalBasis: string[]; // e.g. UU TPKS Pasal 14
  riskLevel: "Tinggi" | "Sangat Kritis" | "Sedang";
  immediateActions: string[];
  icon: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  subtitle: string;
  type:
    | "Laporan Tahunan"
    | "Panduan Praktis"
    | "Kertas Kebijakan"
    | "Riset & Data"
    | "Strategic Plan"
    | "SOP";
  year: number;
  date: string;
  pages: number | null;
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
  category:
    | "Analisis Kebijakan"
    | "Edukasi Digital"
    | "Suara Penyintas"
    | "Advokasi Hukum";
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

export type ProgramActivityTypeKey =
  | "pelatihan"
  | "kasus"
  | "workshop"
  | "sosialisasi"
  | "event"
  | "diskusi"
  | "evaluasi"
  | "kunjungan"
  | "networking"
  | "kegiatan";

export type ProgramActivityPhotoTypeKey = "paralegal";

export interface ProgramActivityPhoto {
  url: string;
  caption?: string;
}

export interface ProgramActivity {
  id: string;
  title: string;
  typeKey: ProgramActivityTypeKey;
  date: string;
  location: string;
  participants: string;
  description: string;
  coverImage: string;
  photos: ProgramActivityPhoto[];
  relatedProgramId?: string;
}

export interface CaseReportForm {
  fullName: string;
  aliasName?: string;
  isAnonymous: boolean;
  safeContactMethod: "whatsapp" | "signal" | "telegram" | "email";
  contactValue: string;
  victimAgeGroup: string;
  victimLocation: string;
  category: string;
  platforms: string[];
  incidentDate: string;
  urgencyLevel: "darurat" | "segera" | "konsultasi";
  neededServices: string[];
  chronology: string;
  hasEvidence: boolean;
  consentAgreed: boolean;
}

export type CaseStatus = "Berjalan" | "Dalam Proses" | "Selesai";

export interface ParalegalCase {
  id: string;
  title: string;
  category: string;
  status: CaseStatus;
  year: string;
  description: string;
  date: string;
}

export interface ParalegalMember {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  bio: string;
  cases: ParalegalCase[];
}

export interface UmkmProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  type: "produk" | "layanan";
}

export interface UmkmBusiness {
  id: string;
  number: string;
  name: string;
  owner: string;
  location: string;
  category: string;
  description: string;
  coverImage?: string;
  products: UmkmProduct[];
}
