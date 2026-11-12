import React, { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FilePlus2,
  Filter,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Newspaper,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  UserRoundPen,
  X,
  ClipboardList,
  History,
  AlertCircle,
  Eye,
} from "lucide-react";

/**
 * RUANG JEJARING TPDOTCOM
 *
 * Komponen frontend untuk:
 * - Update profil jejaring
 * - Input laporan kasus oleh paralegal/jejaring
 * - Melihat kasus yang dilaporkan / ditangani
 * - Menambahkan perkembangan penanganan kasus
 * - Dashboard admin untuk memantau seluruh laporan
 *
 * CATATAN:
 * Komponen ini belum menghubungkan data ke database. Hubungkan callback
 * onCreateCase, onAddCaseUpdate, dan onSubmitProfile ke backend/API yang
 * memiliki autentikasi serta kontrol akses. Jangan menyimpan identitas korban,
 * kronologi lengkap, atau bukti sensitif pada penyimpanan publik.
 */

export type NetworkRole =
  | "paralegal"
  | "alumni"
  | "volunteer"
  | "partner"
  | "admin";

export type CaseStatus =
  | "menunggu_verifikasi"
  | "dalam_pendampingan"
  | "menunggu_rujukan"
  | "selesai"
  | "ditutup";

export type CaseUpdateType =
  | "kontak_awal"
  | "kunjungan"
  | "konsultasi"
  | "koordinasi"
  | "rujukan"
  | "pendampingan"
  | "lainnya";

export interface NetworkUser {
  id: string;
  name: string;
  role: NetworkRole;
  region?: string;
}

export interface AlumniUpdateData {
  fullName: string;
  whatsapp: string;
  email: string;
  location: string;
  training: string;
  currentActivity: string;
  development: string;
  collaboration: string[];
  consent: boolean;
}

export interface NewCaseData {
  category: string;
  region: string;
  village: string;
  receivedDate: string;
  incidentDate: string;
  summary: string;
  initialAction: string;
  supportNeeds: string[];
  urgency: "normal" | "perlu_perhatian" | "darurat";
  consentConfirmed: boolean;
  confidentialityConfirmed: boolean;
}

export interface CaseUpdateData {
  caseId: string;
  date: string;
  type: CaseUpdateType;
  description: string;
  nextStep: string;
  status: CaseStatus;
}

export interface CaseUpdate extends CaseUpdateData {
  id: string;
  authorId: string;
  authorName: string;
  createdAt: string;
}

export interface NetworkCase {
  id: string;
  code: string;
  category: string;
  region: string;
  village: string;
  receivedDate: string;
  incidentDate?: string;
  summary: string;
  initialAction: string;
  supportNeeds: string[];
  urgency: "normal" | "perlu_perhatian" | "darurat";
  status: CaseStatus;
  createdById: string;
  createdByName: string;
  createdAt: string;
  updates: CaseUpdate[];
}

interface RuangJejaringViewProps {
  currentUser?: NetworkUser;
  isAdmin?: boolean;
  initialCases?: NetworkCase[];
  onSubmitProfile?: (data: AlumniUpdateData) => void | Promise<void>;
  onCreateCase?: (
    data: NewCaseData,
  ) => Promise<NetworkCase | void> | NetworkCase | void;
  onAddCaseUpdate?: (
    data: CaseUpdateData,
  ) => Promise<CaseUpdate | void> | CaseUpdate | void;
  onUpdateCaseStatus?: (
    caseId: string,
    status: CaseStatus,
  ) => Promise<void> | void;
}

const STORIES = [
  {
    id: 1,
    category: "Cerita Alumni",
    title: "Dari pelatihan menuju usaha digital mandiri",
    description:
      "Bagaimana pengalaman mengikuti pelatihan membantu peserta mengembangkan usaha dan memanfaatkan media digital.",
    author: "Cerita peserta pelatihan",
    location: "Lombok Tengah",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=85",
  },
  {
    id: 2,
    category: "Perkembangan Alumni",
    title: "Terus belajar dan berbagi manfaat di lingkungan sekitar",
    description:
      "Perjalanan peserta dalam menerapkan pengetahuan yang didapatkan dari kegiatan pemberdayaan.",
    author: "Cerita peserta pelatihan",
    location: "Lombok Barat",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=85",
  },
  {
    id: 3,
    category: "Inspirasi",
    title: "Membangun kepercayaan diri melalui ruang belajar",
    description:
      "Pengalaman belajar bersama dan keberanian untuk mencoba hal-hal baru setelah pelatihan.",
    author: "Cerita peserta pelatihan",
    location: "Mataram",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=900&q=85",
  },
];

const ACTIVITIES = [
  {
    id: 1,
    category: "Informasi",
    title: "Kesempatan bergabung dalam kegiatan TPDotCom",
    description:
      "Ikuti informasi kegiatan, pelatihan, dan ruang partisipasi yang terbuka bagi jejaring TPDotCom.",
    date: "Informasi kegiatan",
    icon: CalendarDays,
  },
  {
    id: 2,
    category: "Relawan",
    title: "Berpartisipasi sebagai relawan",
    description:
      "Berkontribusi dalam kegiatan sosial, pemberdayaan perempuan, dan literasi digital.",
    date: "Kesempatan kolaborasi",
    icon: HeartHandshake,
  },
];

const LEARNING_MATERIALS = [
  {
    id: 1,
    category: "Literasi Digital",
    title: "Panduan aman menggunakan media sosial",
    description:
      "Materi dasar untuk mengenali risiko dan menjaga keamanan saat beraktivitas di ruang digital.",
    icon: BookOpen,
  },
  {
    id: 2,
    category: "Pemberdayaan",
    title: "Memanfaatkan teknologi untuk usaha",
    description:
      "Pengetahuan dasar pemanfaatan teknologi digital untuk mendukung kegiatan ekonomi.",
    icon: Lightbulb,
  },
  {
    id: 3,
    category: "Hak Perempuan",
    title: "Mengenal hak dan perlindungan perempuan",
    description:
      "Informasi dasar mengenai hak perempuan dan akses terhadap layanan pendampingan.",
    icon: GraduationCap,
  },
];

const COLLABORATION_OPTIONS = [
  "Menjadi relawan",
  "Menjadi fasilitator atau narasumber",
  "Mengikuti kegiatan TPDotCom",
  "Berbagi pengalaman atau cerita",
  "Mengembangkan usaha bersama",
  "Menjadi mitra kegiatan",
];

const CASE_CATEGORIES = [
  "Kekerasan Dalam Rumah Tangga (KDRT)",
  "Kekerasan Seksual",
  "Kekerasan Berbasis Gender Online (KBGO)",
  "Perundungan / Kekerasan terhadap Anak",
  "Diskriminasi",
  "Perdagangan Orang",
  "Pelanggaran Hak Penyandang Disabilitas",
  "Kasus lainnya",
];

const SUPPORT_NEEDS = [
  "Konsultasi hukum",
  "Pendampingan psikologis",
  "Pendampingan sosial",
  "Rujukan layanan",
  "Koordinasi dengan pemerintah/lembaga",
  "Dukungan keamanan",
  "Belum diketahui",
];

const STATUS_LABEL: Record<CaseStatus, string> = {
  menunggu_verifikasi: "Menunggu verifikasi",
  dalam_pendampingan: "Dalam pendampingan",
  menunggu_rujukan: "Menunggu rujukan",
  selesai: "Selesai",
  ditutup: "Ditutup",
};

const STATUS_STYLE: Record<CaseStatus, string> = {
  menunggu_verifikasi: "bg-amber-50 text-amber-800 border-amber-200",
  dalam_pendampingan: "bg-blue-50 text-blue-800 border-blue-200",
  menunggu_rujukan: "bg-violet-50 text-violet-800 border-violet-200",
  selesai: "bg-emerald-50 text-emerald-800 border-emerald-200",
  ditutup: "bg-slate-100 text-slate-600 border-slate-200",
};

const UPDATE_TYPE_LABEL: Record<CaseUpdateType, string> = {
  kontak_awal: "Kontak awal",
  kunjungan: "Kunjungan",
  konsultasi: "Konsultasi",
  koordinasi: "Koordinasi",
  rujukan: "Rujukan",
  pendampingan: "Pendampingan",
  lainnya: "Aktivitas lainnya",
};

const EMPTY_PROFILE: AlumniUpdateData = {
  fullName: "",
  whatsapp: "",
  email: "",
  location: "",
  training: "",
  currentActivity: "",
  development: "",
  collaboration: [],
  consent: false,
};

const EMPTY_CASE: NewCaseData = {
  category: "",
  region: "",
  village: "",
  receivedDate: new Date().toISOString().slice(0, 10),
  incidentDate: "",
  summary: "",
  initialAction: "",
  supportNeeds: [],
  urgency: "normal",
  consentConfirmed: false,
  confidentialityConfirmed: false,
};

const LockKeyholeIcon = () => <LockKeyhole size={19} strokeWidth={1.7} />;

const formatDate = (value: string) => {
  if (!value) return "-";
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value.slice(0, 10)}T00:00:00`));
};

const makeCaseCode = () => {
  const date = new Date();
  const ymd = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  return `TPD-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
};

const RuangJejaringView: React.FC<RuangJejaringViewProps> = ({
  currentUser = {
    id: "demo-paralegal",
    name: "Paralegal Jejaring",
    role: "paralegal",
    region: "Lombok Tengah",
  },
  isAdmin = false,
  initialCases = [],
  onSubmitProfile,
  onCreateCase,
  onAddCaseUpdate,
  onUpdateCaseStatus,
}) => {
  const adminView = isAdmin || currentUser.role === "admin";
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showCaseForm, setShowCaseForm] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [showProgressForm, setShowProgressForm] = useState(false);
  const [cases, setCases] = useState<NetworkCase[]>(initialCases);
  const [profileData, setProfileData] =
    useState<AlumniUpdateData>(EMPTY_PROFILE);
  const [caseData, setCaseData] = useState<NewCaseData>({
    ...EMPTY_CASE,
    region: currentUser.region || "",
  });
  const [progressData, setProgressData] = useState<
    Omit<CaseUpdateData, "caseId">
  >({
    date: new Date().toISOString().slice(0, 10),
    type: "pendampingan",
    description: "",
    nextStep: "",
    status: "dalam_pendampingan",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"semua" | CaseStatus>(
    "semua",
  );

  const visibleCases = useMemo(() => {
    return cases
      .filter((item) => adminView || item.createdById === currentUser.id)
      .filter((item) => {
        const query = searchTerm.toLowerCase();
        return (
          item.code.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.region.toLowerCase().includes(query) ||
          item.village.toLowerCase().includes(query)
        );
      })
      .filter(
        (item) => statusFilter === "semua" || item.status === statusFilter,
      )
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }, [cases, currentUser.id, adminView, searchTerm, statusFilter]);

  const selectedCase =
    visibleCases.find((item) => item.id === selectedCaseId) || null;

  const stats = useMemo(
    () => ({
      total: visibleCases.length,
      active: visibleCases.filter((item) =>
        ["dalam_pendampingan", "menunggu_rujukan"].includes(item.status),
      ).length,
      waiting: visibleCases.filter(
        (item) => item.status === "menunggu_verifikasi",
      ).length,
      completed: visibleCases.filter((item) => item.status === "selesai")
        .length,
    }),
    [visibleCases],
  );

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openProfileForm = () => {
    setShowProfileForm(true);
    window.setTimeout(() => scrollTo("update-profil"), 80);
  };

  const openCaseForm = () => {
    setNotice("");
    setCaseData({
      ...EMPTY_CASE,
      receivedDate: new Date().toISOString().slice(0, 10),
      region: currentUser.region || "",
    });
    setShowCaseForm(true);
    setSelectedCaseId(null);
    window.setTimeout(() => scrollTo("ruang-penanganan"), 80);
  };

  const updateProfileField = <K extends keyof AlumniUpdateData>(
    field: K,
    value: AlumniUpdateData[K],
  ) => setProfileData((previous) => ({ ...previous, [field]: value }));

  const toggleProfileCollaboration = (value: string) => {
    setProfileData((previous) => ({
      ...previous,
      collaboration: previous.collaboration.includes(value)
        ? previous.collaboration.filter((item) => item !== value)
        : [...previous.collaboration, value],
    }));
  };

  const handleProfileSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("");
    if (!profileData.consent) {
      setNotice("Silakan setujui penggunaan data sebelum mengirim formulir.");
      return;
    }
    if (!onSubmitProfile) {
      setNotice(
        "Tampilan formulir siap. Hubungkan onSubmitProfile ke backend agar data tersimpan.",
      );
      return;
    }
    try {
      setIsSubmitting(true);
      await onSubmitProfile(profileData);
      setNotice("Terima kasih. Pembaruan profil berhasil dikirim.");
      setProfileData(EMPTY_PROFILE);
      setShowProfileForm(false);
    } catch {
      setNotice(
        "Maaf, pembaruan profil belum berhasil dikirim. Silakan coba kembali.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleSupportNeed = (value: string) => {
    setCaseData((previous) => ({
      ...previous,
      supportNeeds: previous.supportNeeds.includes(value)
        ? previous.supportNeeds.filter((item) => item !== value)
        : [...previous.supportNeeds, value],
    }));
  };

  const handleCreateCase = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice("");

    if (!caseData.consentConfirmed || !caseData.confidentialityConfirmed) {
      setNotice(
        "Pastikan persetujuan dan komitmen kerahasiaan sudah dicentang.",
      );
      return;
    }

    try {
      setIsSubmitting(true);
      const payload = { ...caseData };
      const returnedCase = onCreateCase
        ? await onCreateCase(payload)
        : undefined;

      const newCase: NetworkCase =
        returnedCase ||
        ({
          id: `local-${Date.now()}`,
          code: makeCaseCode(),
          category: payload.category,
          region: payload.region,
          village: payload.village,
          receivedDate: payload.receivedDate,
          incidentDate: payload.incidentDate,
          summary: payload.summary,
          initialAction: payload.initialAction,
          supportNeeds: payload.supportNeeds,
          urgency: payload.urgency,
          status: "menunggu_verifikasi",
          createdById: currentUser.id,
          createdByName: currentUser.name,
          createdAt: new Date().toISOString(),
          updates: [],
        } satisfies NetworkCase);

      setCases((previous) => [newCase, ...previous]);
      setSelectedCaseId(newCase.id);
      setShowCaseForm(false);
      setNotice(
        onCreateCase
          ? `Laporan ${newCase.code} berhasil dikirim.`
          : `Laporan ${newCase.code} ditambahkan ke tampilan sementara. Hubungkan onCreateCase ke backend agar tersimpan permanen.`,
      );
      setCaseData({ ...EMPTY_CASE, region: currentUser.region || "" });
    } catch {
      setNotice(
        "Laporan belum berhasil dikirim. Silakan periksa koneksi dan coba kembali.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProgressSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedCase) return;
    setNotice("");

    try {
      setIsSubmitting(true);
      const payload: CaseUpdateData = {
        ...progressData,
        caseId: selectedCase.id,
      };
      const returnedUpdate = onAddCaseUpdate
        ? await onAddCaseUpdate(payload)
        : undefined;

      const newUpdate: CaseUpdate =
        returnedUpdate ||
        ({
          ...payload,
          id: `update-${Date.now()}`,
          authorId: currentUser.id,
          authorName: currentUser.name,
          createdAt: new Date().toISOString(),
        } satisfies CaseUpdate);

      setCases((previous) =>
        previous.map((item) =>
          item.id === selectedCase.id
            ? {
                ...item,
                status: progressData.status,
                updates: [...item.updates, newUpdate],
              }
            : item,
        ),
      );
      setShowProgressForm(false);
      setProgressData({
        date: new Date().toISOString().slice(0, 10),
        type: "pendampingan",
        description: "",
        nextStep: "",
        status: progressData.status,
      });
      setNotice(
        onAddCaseUpdate
          ? "Perkembangan kasus berhasil ditambahkan."
          : "Perkembangan ditambahkan pada tampilan sementara. Hubungkan onAddCaseUpdate ke backend agar tersimpan permanen.",
      );
    } catch {
      setNotice("Perkembangan belum berhasil disimpan. Silakan coba kembali.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateCaseStatus = async (
    caseItem: NetworkCase,
    status: CaseStatus,
  ) => {
    try {
      if (onUpdateCaseStatus) await onUpdateCaseStatus(caseItem.id, status);
      setCases((previous) =>
        previous.map((item) =>
          item.id === caseItem.id ? { ...item, status } : item,
        ),
      );
      setNotice(
        onUpdateCaseStatus
          ? `Status ${caseItem.code} berhasil diperbarui.`
          : `Status ${caseItem.code} diperbarui pada tampilan sementara. Hubungkan onUpdateCaseStatus ke backend agar tersimpan permanen.`,
      );
    } catch {
      setNotice(`Status ${caseItem.code} belum berhasil diperbarui.`);
    }
  };

  const scrollToProfile = () => openProfileForm();

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#153d35] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#24594d]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-100">
              <Sparkles size={14} />
              Ruang Jejaring TPDotCom
            </div>
            <h1 className="max-w-2xl font-serif text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
              Terhubung, Bergerak,
              <span className="block text-[#c8dfc9]">
                dan Saling Menguatkan.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-emerald-50/80 sm:text-base">
              Ruang bersama bagi paralegal, alumni, relawan, dan mitra TPDotCom
              untuk berbagi perkembangan, mencatat pendampingan, belajar, dan
              memperkuat kerja-kerja perlindungan serta pemberdayaan masyarakat.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openCaseForm}
                className="inline-flex items-center justify-center gap-3 bg-[#d7e9d8] px-6 py-4 text-sm font-semibold text-[#153d35] transition hover:bg-white"
              >
                <FilePlus2 size={17} />
                Laporkan Kasus
              </button>
              <button
                type="button"
                onClick={() => scrollTo("ruang-penanganan")}
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Lihat Ruang Penanganan
                <ChevronRight size={17} />
              </button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-emerald-100/70">
              <span className="inline-flex items-center gap-2">
                <Users size={15} /> Jejaring bergerak
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={15} /> Pendampingan terpantau
              </span>
              <span className="inline-flex items-center gap-2">
                <Handshake size={15} /> Kolaborasi berkelanjutan
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-white/10" />
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90"
              alt="Sekelompok orang berkumpul dan berkolaborasi"
              className="relative h-[330px] w-full object-cover sm:h-[430px]"
            />
            <div className="absolute -bottom-6 left-5 max-w-xs bg-[#f8f7f3] p-5 text-slate-800 shadow-xl sm:-left-8">
              <p className="font-serif text-xl leading-snug">
                "Terhubung, bertumbuh, dan saling menguatkan."
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#52796d]">
                Transformasi Perempuan Dotcom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="tentang-jejaring"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#628276]">
              Tentang Ruang Jejaring
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#183e35] sm:text-4xl">
              Satu ruang untuk menjaga hubungan dan memperkuat dampak.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              Ruang Jejaring merupakan tempat bagi paralegal, peserta kegiatan,
              relawan, alumni, dan mitra TPDotCom untuk tetap terhubung. Melalui
              ruang ini, anggota jejaring dapat melaporkan kasus yang sedang
              ditangani, memperbarui perkembangan pendampingan, membagikan
              pengalaman, mengakses materi, dan menemukan peluang kolaborasi.
            </p>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Catatan perkembangan membantu TPDotCom memahami kebutuhan
              pendampingan, mengidentifikasi kebutuhan rujukan, serta memantau
              proses penanganan secara lebih terstruktur.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#eeeee7] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#628276]">
              Tetap Terhubung
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#183e35] sm:text-4xl">
              Apa yang bisa dilakukan jejaring?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Bukan hanya berbagi kabar, tetapi juga mendokumentasikan proses
              pendampingan dan saling mendukung.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FilePlus2,
                number: "01",
                title: "Laporan Kasus",
                description:
                  "Catat informasi awal kasus yang ditemukan atau sedang didampingi.",
              },
              {
                icon: History,
                number: "02",
                title: "Update Perkembangan",
                description:
                  "Tambahkan aktivitas pendampingan, koordinasi, kunjungan, atau rujukan.",
              },
              {
                icon: Newspaper,
                number: "03",
                title: "Cerita Perjalanan",
                description:
                  "Bagikan pengalaman, pembelajaran, dan praktik baik dari jejaring.",
              },
              {
                icon: Handshake,
                number: "04",
                title: "Kolaborasi",
                description:
                  "Temukan kesempatan menjadi relawan, fasilitator, atau mitra kegiatan.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="group border border-[#deded4] bg-[#f8f7f3] p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={27}
                      strokeWidth={1.5}
                      className="text-[#477365]"
                    />
                    <span className="font-serif text-2xl text-[#c2c9bd]">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-8 font-serif text-xl text-[#183e35]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      item.number === "01" || item.number === "02"
                        ? scrollTo("ruang-penanganan")
                        : scrollTo(
                            item.number === "03"
                              ? "cerita-alumni"
                              : "kolaborasi",
                          )
                    }
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#477365] transition group-hover:gap-3"
                  >
                    Selengkapnya <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE MANAGEMENT */}
      <section
        id="ruang-penanganan"
        className="scroll-mt-20 bg-white py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#628276]">
                Ruang Penanganan Kasus
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#183e35] sm:text-4xl">
                Catat dan pantau perkembangan pendampingan.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                {adminView
                  ? "Dashboard pengurus untuk memantau laporan kasus dari seluruh jejaring."
                  : "Kelola laporan kasus yang kamu buat dan tambahkan perkembangan setiap kali ada proses penanganan."}
              </p>
            </div>
            <button
              type="button"
              onClick={openCaseForm}
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#183e35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#28594c]"
            >
              <Plus size={17} /> Input Kasus Baru
            </button>
          </div>

          {notice && (
            <div className="mt-7 flex items-start gap-3 border border-[#d5e6d8] bg-[#f0f7f0] p-4 text-sm leading-6 text-[#315b43]">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              <span>{notice}</span>
              <button
                type="button"
                onClick={() => setNotice("")}
                className="ml-auto text-[#315b43]"
              >
                <X size={16} />
              </button>
            </div>
          )}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Kasus", value: stats.total, icon: ClipboardList },
              {
                label: "Dalam Proses",
                value: stats.active,
                icon: HeartHandshake,
              },
              {
                label: "Menunggu Verifikasi",
                value: stats.waiting,
                icon: Clock3,
              },
              { label: "Selesai", value: stats.completed, icon: CheckCircle2 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="border border-[#e5e3da] bg-[#f8f7f3] p-5"
                >
                  <div className="flex items-center justify-between text-[#628276]">
                    <span className="text-xs font-medium">{item.label}</span>
                    <Icon size={18} />
                  </div>
                  <p className="mt-3 font-serif text-3xl text-[#183e35]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Cari kode kasus, kategori, atau wilayah..."
                    className="w-full border border-slate-200 bg-[#fcfcfa] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#477365]"
                  />
                </div>
                <div className="relative sm:w-56">
                  <Filter
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(
                        event.target.value as "semua" | CaseStatus,
                      )
                    }
                    className="w-full appearance-none border border-slate-200 bg-[#fcfcfa] py-3 pl-9 pr-4 text-sm outline-none focus:border-[#477365]"
                  >
                    <option value="semua">Semua status</option>
                    {Object.entries(STATUS_LABEL).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                {visibleCases.length === 0 ? (
                  <div className="flex min-h-[280px] flex-col items-center justify-center border border-dashed border-[#d8d8ce] bg-[#fcfcfa] px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f0e9] text-[#477365]">
                      <ClipboardList size={25} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-[#183e35]">
                      Belum ada laporan kasus
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      Laporan yang kamu buat akan muncul di sini. Mulai dengan
                      mencatat kasus yang sedang ditangani.
                    </p>
                    <button
                      type="button"
                      onClick={openCaseForm}
                      className="mt-5 inline-flex items-center gap-2 bg-[#183e35] px-5 py-3 text-xs font-semibold text-white hover:bg-[#28594c]"
                    >
                      <Plus size={15} /> Buat Laporan Kasus
                    </button>
                  </div>
                ) : (
                  visibleCases.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSelectedCaseId(item.id);
                        setShowCaseForm(false);
                        setShowProgressForm(false);
                      }}
                      className={`w-full border p-5 text-left transition hover:border-[#8ca99a] hover:shadow-sm ${selectedCaseId === item.id ? "border-[#477365] bg-[#f5f8f4]" : "border-[#e5e3da] bg-white"}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#628276]">
                            {item.code}
                          </p>
                          <h3 className="mt-2 font-serif text-lg text-[#183e35]">
                            {item.category}
                          </h3>
                        </div>
                        <span
                          className={`border px-2.5 py-1 text-[10px] font-semibold ${STATUS_STYLE[item.status]}`}
                        >
                          {STATUS_LABEL[item.status]}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={13} />{" "}
                          {item.village ? `${item.village}, ` : ""}
                          {item.region}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={13} />{" "}
                          {formatDate(item.receivedDate)}
                        </span>
                        {adminView && (
                          <span className="inline-flex items-center gap-1.5">
                            <Users size={13} /> {item.createdByName}
                          </span>
                        )}
                      </div>
                      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
                        {item.summary}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-[#477365]">
                        <span>{item.updates.length} catatan perkembangan</span>
                        <span className="inline-flex items-center gap-1 font-semibold">
                          Lihat detail <ArrowRight size={13} />
                        </span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            <aside className="border border-[#e5e3da] bg-[#f8f7f3] p-6">
              {showCaseForm ? (
                <div>
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#628276]">
                        Formulir Jejaring
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-[#183e35]">
                        Laporan Kasus Baru
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCaseForm(false)}
                      aria-label="Tutup formulir"
                      className="p-1 text-slate-400 hover:bg-slate-100"
                    >
                      <X size={19} />
                    </button>
                  </div>
                  <form onSubmit={handleCreateCase} className="space-y-4">
                    <Field label="Jenis kasus *">
                      <select
                        required
                        value={caseData.category}
                        onChange={(e) =>
                          setCaseData({ ...caseData, category: e.target.value })
                        }
                        className={fieldClass}
                      >
                        <option value="">Pilih jenis kasus</option>
                        {CASE_CATEGORIES.map((category) => (
                          <option key={category}>{category}</option>
                        ))}
                      </select>
                    </Field>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      <Field label="Kabupaten/kota *">
                        <select
                          required
                          value={caseData.region}
                          onChange={(e) =>
                            setCaseData({ ...caseData, region: e.target.value })
                          }
                          className={fieldClass}
                        >
                          <option value="">Pilih wilayah</option>
                          {[
                            "Kota Mataram",
                            "Lombok Barat",
                            "Lombok Tengah",
                            "Lombok Utara",
                            "Lombok Timur",
                            "Luar NTB",
                          ].map((region) => (
                            <option key={region}>{region}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Desa/kelurahan">
                        <input
                          value={caseData.village}
                          onChange={(e) =>
                            setCaseData({
                              ...caseData,
                              village: e.target.value,
                            })
                          }
                          placeholder="Nama desa/kelurahan"
                          className={fieldClass}
                        />
                      </Field>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      <Field label="Tanggal informasi diterima *">
                        <input
                          type="date"
                          required
                          value={caseData.receivedDate}
                          onChange={(e) =>
                            setCaseData({
                              ...caseData,
                              receivedDate: e.target.value,
                            })
                          }
                          className={fieldClass}
                        />
                      </Field>
                      <Field label="Tanggal kejadian (jika diketahui)">
                        <input
                          type="date"
                          value={caseData.incidentDate}
                          onChange={(e) =>
                            setCaseData({
                              ...caseData,
                              incidentDate: e.target.value,
                            })
                          }
                          className={fieldClass}
                        />
                      </Field>
                    </div>
                    <Field
                      label="Ringkasan awal kasus *"
                      hint="Jangan masukkan nama lengkap, alamat rinci, nomor telepon, atau informasi yang dapat mengidentifikasi korban."
                    >
                      <textarea
                        required
                        rows={4}
                        value={caseData.summary}
                        onChange={(e) =>
                          setCaseData({ ...caseData, summary: e.target.value })
                        }
                        placeholder="Tuliskan ringkasan umum tanpa identitas korban..."
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Langkah awal yang sudah dilakukan">
                      <textarea
                        rows={3}
                        value={caseData.initialAction}
                        onChange={(e) =>
                          setCaseData({
                            ...caseData,
                            initialAction: e.target.value,
                          })
                        }
                        placeholder="Contoh: komunikasi awal, mendengarkan kebutuhan, atau koordinasi internal..."
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Kebutuhan dukungan">
                      <div className="grid gap-2">
                        {SUPPORT_NEEDS.map((need) => (
                          <label
                            key={need}
                            className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-slate-600"
                          >
                            <input
                              type="checkbox"
                              checked={caseData.supportNeeds.includes(need)}
                              onChange={() => toggleSupportNeed(need)}
                              className="mt-0.5 accent-[#477365]"
                            />
                            {need}
                          </label>
                        ))}
                      </div>
                    </Field>
                    <Field label="Tingkat urgensi *">
                      <select
                        value={caseData.urgency}
                        onChange={(e) =>
                          setCaseData({
                            ...caseData,
                            urgency: e.target.value as NewCaseData["urgency"],
                          })
                        }
                        className={fieldClass}
                      >
                        <option value="normal">Normal</option>
                        <option value="perlu_perhatian">
                          Perlu perhatian segera
                        </option>
                        <option value="darurat">
                          Darurat / ada risiko keselamatan
                        </option>
                      </select>
                    </Field>
                    <label className="flex items-start gap-2 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-600">
                      <input
                        type="checkbox"
                        checked={caseData.consentConfirmed}
                        onChange={(e) =>
                          setCaseData({
                            ...caseData,
                            consentConfirmed: e.target.checked,
                          })
                        }
                        className="mt-1 accent-[#477365]"
                      />
                      Saya telah memperoleh persetujuan yang diperlukan untuk
                      menyampaikan informasi awal ini kepada TPDotCom.
                    </label>
                    <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
                      <input
                        type="checkbox"
                        checked={caseData.confidentialityConfirmed}
                        onChange={(e) =>
                          setCaseData({
                            ...caseData,
                            confidentialityConfirmed: e.target.checked,
                          })
                        }
                        className="mt-1 accent-[#477365]"
                      />
                      Saya berkomitmen menjaga kerahasiaan identitas korban dan
                      tidak mengunggah dokumen sensitif melalui formulir ini.
                    </label>
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 bg-[#183e35] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#28594c] disabled:opacity-60"
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Laporan Kasus"}{" "}
                      <Send size={15} />
                    </button>
                  </form>
                </div>
              ) : selectedCase ? (
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#628276]">
                        Detail Penanganan
                      </p>
                      <h3 className="mt-2 font-serif text-xl text-[#183e35]">
                        {selectedCase.code}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedCaseId(null)}
                      aria-label="Tutup detail"
                      className="p-1 text-slate-400 hover:bg-slate-100"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <span
                    className={`mt-4 inline-flex border px-2.5 py-1 text-[10px] font-semibold ${STATUS_STYLE[selectedCase.status]}`}
                  >
                    {STATUS_LABEL[selectedCase.status]}
                  </span>
                  <h4 className="mt-4 font-serif text-lg text-[#183e35]">
                    {selectedCase.category}
                  </h4>
                  <div className="mt-3 space-y-2 text-xs text-slate-500">
                    <p className="flex items-center gap-2">
                      <MapPin size={13} />{" "}
                      {selectedCase.village ? `${selectedCase.village}, ` : ""}
                      {selectedCase.region}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarDays size={13} /> Diterima{" "}
                      {formatDate(selectedCase.receivedDate)}
                    </p>
                    {adminView && (
                      <p className="flex items-center gap-2">
                        <Users size={13} /> Pelapor:{" "}
                        {selectedCase.createdByName}
                      </p>
                    )}
                  </div>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Ringkasan awal
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {selectedCase.summary}
                    </p>
                  </div>
                  {selectedCase.initialAction && (
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Langkah awal
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {selectedCase.initialAction}
                      </p>
                    </div>
                  )}
                  {selectedCase.supportNeeds.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Kebutuhan dukungan
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedCase.supportNeeds.map((need) => (
                          <span
                            key={need}
                            className="bg-white px-2.5 py-1 text-[10px] text-slate-600"
                          >
                            {need}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {adminView && (
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Ubah status kasus
                      </label>
                      <select
                        value={selectedCase.status}
                        onChange={(e) =>
                          updateCaseStatus(
                            selectedCase,
                            e.target.value as CaseStatus,
                          )
                        }
                        className={fieldClass}
                      >
                        {Object.entries(STATUS_LABEL).map(([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                    <h4 className="font-serif text-lg text-[#183e35]">
                      Riwayat perkembangan
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      {selectedCase.updates.length} catatan
                    </span>
                  </div>
                  {selectedCase.updates.length === 0 ? (
                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      Belum ada perkembangan yang dicatat untuk kasus ini.
                    </p>
                  ) : (
                    <div className="mt-4 space-y-4">
                      {selectedCase.updates
                        .slice()
                        .reverse()
                        .map((update) => (
                          <div
                            key={update.id}
                            className="relative border-l-2 border-[#c7d8ca] pl-4"
                          >
                            <p className="text-[10px] font-semibold text-[#477365]">
                              {UPDATE_TYPE_LABEL[update.type]} ·{" "}
                              {formatDate(update.date)}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {update.description}
                            </p>
                            {update.nextStep && (
                              <p className="mt-2 text-xs leading-5 text-slate-500">
                                <strong>Tindak lanjut:</strong>{" "}
                                {update.nextStep}
                              </p>
                            )}
                            <p className="mt-2 text-[10px] text-slate-400">
                              Dicatat oleh {update.authorName}
                            </p>
                          </div>
                        ))}
                    </div>
                  )}
                  {selectedCase.status !== "selesai" &&
                    selectedCase.status !== "ditutup" && (
                      <button
                        type="button"
                        onClick={() => setShowProgressForm((value) => !value)}
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-[#477365] px-4 py-3 text-xs font-semibold text-[#315b43] transition hover:bg-[#e9f0e9]"
                      >
                        <Plus size={15} /> Tambahkan Perkembangan
                      </button>
                    )}
                  {showProgressForm && (
                    <form
                      onSubmit={handleProgressSubmit}
                      className="mt-5 space-y-4 border-t border-slate-200 pt-5"
                    >
                      <h4 className="font-serif text-lg text-[#183e35]">
                        Update perkembangan
                      </h4>
                      <Field label="Tanggal aktivitas *">
                        <input
                          required
                          type="date"
                          value={progressData.date}
                          onChange={(e) =>
                            setProgressData({
                              ...progressData,
                              date: e.target.value,
                            })
                          }
                          className={fieldClass}
                        />
                      </Field>
                      <Field label="Jenis aktivitas *">
                        <select
                          value={progressData.type}
                          onChange={(e) =>
                            setProgressData({
                              ...progressData,
                              type: e.target.value as CaseUpdateType,
                            })
                          }
                          className={fieldClass}
                        >
                          {Object.entries(UPDATE_TYPE_LABEL).map(
                            ([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ),
                          )}
                        </select>
                      </Field>
                      <Field label="Ceritakan perkembangan *">
                        <textarea
                          required
                          rows={4}
                          value={progressData.description}
                          onChange={(e) =>
                            setProgressData({
                              ...progressData,
                              description: e.target.value,
                            })
                          }
                          placeholder="Tuliskan aktivitas dan hasil perkembangannya tanpa menyertakan identitas korban..."
                          className={fieldClass}
                        />
                      </Field>
                      <Field label="Rencana tindak lanjut">
                        <textarea
                          rows={2}
                          value={progressData.nextStep}
                          onChange={(e) =>
                            setProgressData({
                              ...progressData,
                              nextStep: e.target.value,
                            })
                          }
                          placeholder="Apa langkah berikutnya?"
                          className={fieldClass}
                        />
                      </Field>
                      <Field label="Status penanganan *">
                        <select
                          value={progressData.status}
                          onChange={(e) =>
                            setProgressData({
                              ...progressData,
                              status: e.target.value as CaseStatus,
                            })
                          }
                          className={fieldClass}
                        >
                          {Object.entries(STATUS_LABEL).map(
                            ([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ),
                          )}
                        </select>
                      </Field>
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 bg-[#183e35] px-4 py-3 text-xs font-semibold text-white hover:bg-[#28594c] disabled:opacity-60"
                      >
                        {isSubmitting ? "Menyimpan..." : "Simpan Perkembangan"}{" "}
                        <Send size={14} />
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="flex min-h-[340px] flex-col justify-center">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#e7eee6] text-[#477365]">
                    <Eye size={23} />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-[#183e35]">
                    Pilih laporan kasus
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Pilih salah satu laporan di sebelah kiri untuk melihat
                    ringkasan, riwayat perkembangan, dan menambahkan catatan
                    penanganan.
                  </p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-xs font-semibold text-[#183e35]">
                      Alur penggunaan
                    </p>
                    <ol className="mt-3 space-y-2 text-xs leading-5 text-slate-500">
                      <li>1. Buat laporan kasus baru.</li>
                      <li>2. Pilih laporan dari daftar kasus.</li>
                      <li>3. Tambahkan perkembangan setiap ada aktivitas.</li>
                      <li>4. Perbarui status sesuai proses penanganan.</li>
                    </ol>
                  </div>
                </div>
              )}
            </aside>
          </div>

          <div className="mt-8 flex items-start gap-3 border border-amber-200 bg-amber-50 p-4 text-xs leading-6 text-amber-900">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <p>
              <strong>Pengingat kerahasiaan:</strong> Gunakan kode kasus dan
              ringkasan umum. Jangan menuliskan nama korban, alamat lengkap,
              nomor telepon, identitas anak, atau mengunggah bukti sensitif pada
              halaman ini. Data kasus lengkap hanya boleh dikelola melalui
              sistem internal dengan akses terbatas.
            </p>
          </div>
        </div>
      </section>

      {/* PROFILE UPDATE */}
      <section
        id="update-profil"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#628276]">
              Update Data Jejaring
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-[#183e35] sm:text-4xl">
              Ceritakan kabar terbarumu kepada kami.
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              Perbarui informasi dan aktivitasmu agar TPDotCom dapat menjaga
              komunikasi, mengetahui perkembangan jejaring, dan menghadirkan
              kesempatan kolaborasi yang sesuai.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#e7eee6] text-[#477365]">
                  <LockKeyholeIcon />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#183e35]">
                    Data dijaga dengan baik
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    Informasi pribadi hanya digunakan untuk kebutuhan komunikasi
                    dan pengelolaan jejaring.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#e7eee6] text-[#477365]">
                  <MessageCircle size={19} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#183e35]">
                    Tetap terhubung
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    Informasi yang kamu berikan membantu kami mengetahui
                    perkembangan dan kebutuhan jejaring.
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowProfileForm(true)}
              className="mt-9 inline-flex items-center gap-3 bg-[#183e35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#28594c]"
            >
              <UserRoundPen size={17} /> Perbarui Profil Saya
            </button>
          </div>

          <div className="border border-[#e5e3da] bg-white p-6 sm:p-9">
            {!showProfileForm ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e9f0e9] text-[#477365]">
                  <UserRoundPen size={30} strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#183e35]">
                  Mari tetap terhubung!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                  Luangkan beberapa menit untuk memperbarui informasi dan
                  membagikan perkembanganmu.
                </p>
                <button
                  type="button"
                  onClick={() => setShowProfileForm(true)}
                  className="mt-7 inline-flex items-center gap-2 border border-[#183e35] px-6 py-3 text-sm font-semibold text-[#183e35] transition hover:bg-[#183e35] hover:text-white"
                >
                  Mulai Isi Formulir <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#628276]">
                      Formulir Jejaring
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-[#183e35]">
                      Update Profil
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      Isi informasi berikut sesuai kondisi terbarumu.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowProfileForm(false)}
                    aria-label="Tutup formulir"
                    className="p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-800"
                  >
                    <X size={20} />
                  </button>
                </div>
                <form onSubmit={handleProfileSubmit} className="space-y-5">
                  <Field label="Nama lengkap *">
                    <input
                      required
                      value={profileData.fullName}
                      onChange={(e) =>
                        updateProfileField("fullName", e.target.value)
                      }
                      placeholder="Masukkan nama lengkap"
                      className={fieldClass}
                    />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nomor WhatsApp *">
                      <input
                        required
                        type="tel"
                        value={profileData.whatsapp}
                        onChange={(e) =>
                          updateProfileField("whatsapp", e.target.value)
                        }
                        placeholder="08xxxxxxxxxx"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          updateProfileField("email", e.target.value)
                        }
                        placeholder="nama@email.com"
                        className={fieldClass}
                      />
                    </Field>
                  </div>
                  <Field label="Domisili saat ini *">
                    <select
                      required
                      value={profileData.location}
                      onChange={(e) =>
                        updateProfileField("location", e.target.value)
                      }
                      className={fieldClass}
                    >
                      <option value="">Pilih domisili</option>
                      {[
                        "Kota Mataram",
                        "Lombok Barat",
                        "Lombok Tengah",
                        "Lombok Utara",
                        "Lombok Timur",
                        "Luar NTB",
                      ].map((location) => (
                        <option key={location}>{location}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Pelatihan atau kegiatan yang pernah diikuti *">
                    <input
                      required
                      value={profileData.training}
                      onChange={(e) =>
                        updateProfileField("training", e.target.value)
                      }
                      placeholder="Contoh: Pelatihan Literasi Digital"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Aktivitas saat ini *">
                    <textarea
                      required
                      rows={3}
                      value={profileData.currentActivity}
                      onChange={(e) =>
                        updateProfileField("currentActivity", e.target.value)
                      }
                      placeholder="Ceritakan kegiatan, pekerjaan, usaha, atau aktivitasmu saat ini..."
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Perkembangan setelah mengikuti kegiatan">
                    <textarea
                      rows={4}
                      value={profileData.development}
                      onChange={(e) =>
                        updateProfileField("development", e.target.value)
                      }
                      placeholder="Apa yang sudah kamu pelajari, terapkan, atau kembangkan?"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Apa yang ingin kamu ikuti bersama TPDotCom?">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {COLLABORATION_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-start gap-3 border border-slate-200 p-3 text-xs leading-5 transition hover:border-[#477365]"
                        >
                          <input
                            type="checkbox"
                            checked={profileData.collaboration.includes(option)}
                            onChange={() => toggleProfileCollaboration(option)}
                            className="mt-0.5 accent-[#477365]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </Field>
                  <label className="flex cursor-pointer items-start gap-3 border-t border-slate-100 pt-5">
                    <input
                      required
                      type="checkbox"
                      checked={profileData.consent}
                      onChange={(e) =>
                        updateProfileField("consent", e.target.checked)
                      }
                      className="mt-1 accent-[#477365]"
                    />
                    <span className="text-xs leading-6 text-slate-500">
                      Saya menyetujui penggunaan informasi ini oleh TPDotCom
                      untuk keperluan pendataan, komunikasi, dan pengembangan
                      jejaring. Informasi pribadi saya tidak dipublikasikan
                      tanpa persetujuan terpisah.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-3 bg-[#183e35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#28594c] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Pembaruan"}{" "}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ALUMNI STORIES */}
      <section id="cerita-alumni" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#628276]">
                Cerita dan Perkembangan
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#183e35] sm:text-4xl">
                Setiap perjalanan punya cerita.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                Ruang untuk berbagi pengalaman, perkembangan, dan inspirasi dari
                jejaring TPDotCom.
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToProfile}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#477365] hover:text-[#183e35]"
            >
              Bagikan Ceritamu <ArrowUpRight size={17} />
            </button>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((story) => (
              <article key={story.id} className="group">
                <div className="relative overflow-hidden bg-[#e9e9e2]">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[#f8f7f3] px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#477365]">
                    {story.category}
                  </span>
                </div>
                <div className="pt-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <MapPin size={13} />
                    {story.location}
                  </div>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-[#183e35]">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {story.description}
                  </p>
                  <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                    {story.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-[11px] leading-6 text-slate-400">
            Cerita yang dipublikasikan harus melalui pemeriksaan admin,
            anonimisasi bila diperlukan, dan persetujuan pihak terkait.
          </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="kegiatan" className="bg-[#eeeee7] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#628276]">
              Tetap Berpartisipasi
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#183e35] sm:text-4xl">
              Selalu ada ruang untuk terlibat.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Temukan informasi kegiatan dan kesempatan untuk berkontribusi
              bersama TPDotCom.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {ACTIVITIES.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="flex flex-col justify-between gap-8 border border-[#deded4] bg-[#f8f7f3] p-7 sm:flex-row sm:items-start sm:p-9"
                >
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#628276]">
                      {activity.category}
                    </span>
                    <h3 className="mt-4 max-w-md font-serif text-2xl text-[#183e35]">
                      {activity.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                      {activity.description}
                    </p>
                    <p className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                      <Clock3 size={14} />
                      {activity.date}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#e6ede5] text-[#477365]">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#628276]">
              Ruang Belajar
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#183e35] sm:text-4xl">
              Belajar tidak harus berhenti.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Temukan kembali pengetahuan dan materi yang dapat membantu kamu
              terus berkembang.
            </p>
          </div>
          <span className="text-xs text-slate-400">
            Sumber belajar TPDotCom
          </span>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {LEARNING_MATERIALS.map((material) => {
            const Icon = material.icon;
            return (
              <div
                key={material.id}
                className="border border-[#e5e3da] bg-white p-7 transition hover:border-[#8ca99a] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-[#e9f0e9] text-[#477365]">
                  <Icon size={23} strokeWidth={1.5} />
                </div>
                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#628276]">
                  {material.category}
                </p>
                <h3 className="mt-3 font-serif text-xl leading-snug text-[#183e35]">
                  {material.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {material.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#477365]">
                  Materi segera tersedia <ArrowRight size={14} />
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* COLLABORATION CTA */}
      <section id="kolaborasi" className="bg-[#153d35] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9d6c0]">
              Mari Bertumbuh Bersama
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">
              Kontribusi kecil bisa membawa perubahan yang berarti.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-emerald-50/75">
              Punya pengalaman, ide, atau ingin terlibat dalam kegiatan
              berikutnya? Mari bangun kolaborasi dan terus saling menguatkan
              melalui jejaring TPDotCom.
            </p>
          </div>
          <div className="border border-white/20 bg-white/[0.05] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center bg-[#d7e9d8] text-[#153d35]">
              <Handshake size={25} />
            </div>
            <h3 className="mt-6 font-serif text-2xl">
              Punya ide untuk berkolaborasi?
            </h3>
            <p className="mt-3 text-sm leading-7 text-emerald-50/70">
              Bagikan minat dan kemampuanmu. Kami terbuka untuk membangun
              kegiatan bersama.
            </p>
            <button
              type="button"
              onClick={scrollToProfile}
              className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#d7e9d8] px-6 py-4 text-sm font-semibold text-[#153d35] transition hover:bg-white"
            >
              Sampaikan Minat Saya <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="border-t border-[#e5e3da] bg-[#f8f7f3]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="font-serif text-lg text-[#183e35]">
              Transformasi Perempuan Dotcom
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Bersama membangun masyarakat yang berkeadilan gender dan
              berkemampuan digital.
            </p>
          </div>
          <a
            href="https://transformasi-perempuan.com/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#477365] hover:text-[#183e35]"
          >
            Kembali ke Beranda <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </main>
  );
};

const fieldClass =
  "w-full border border-slate-200 bg-[#fcfcfa] px-4 py-3 text-sm outline-none transition focus:border-[#477365]";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-slate-700">
        {label}
      </label>
      {children}
      {hint && (
        <p className="mt-1.5 text-[10px] leading-5 text-slate-400">{hint}</p>
      )}
    </div>
  );
}

export default RuangJejaringView;
