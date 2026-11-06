import bayuPhoto from "../assets/members/bayu.jpeg";
import beautyPhoto from "../assets/members/beauty.jpeg";
import ferdiPhoto from "../assets/members/ferdi.jpeg";
import hulmayadiPhoto from "../assets/members/hulmayadi.jpeg";
import nestiPhoto from "../assets/members/nesty.jpeg";
import okiPhoto from "../assets/members/oki.jpeg";
import stellaPhoto from "../assets/members/stella.jpeg";
import sulaemanPhoto from "../assets/members/sulaeman.jpeg";
import terePhoto from "../assets/members/tere.jpeg";
import toniPhoto from "../assets/members/tony.jpeg";
import {
  ArticleItem,
  KBGOCategory,
  PageRoute,
  ParalegalMember,
  ProgramActivity,
  ProgramActivityPhoto,
  ProgramActivityPhotoTypeKey,
  ProgramActivityTypeKey,
  ProgramItem,
  PublicationItem,
  UmkmBusiness,
} from "../types";

export const IMPACT_STATS = [
  {
    value: "2.840+",
    label: "Kasus Didampingi",
    detail: "Sejak 2018 di 34 provinsi",
  },
  {
    value: "91,4%",
    label: "Keberhasilan Takedown",
    detail: "Konten intim non-konsensual dihapus",
  },
  {
    value: "14.200+",
    label: "Penerima Edukasi",
    detail: "Pelatihan literasi & keamanan digital",
  },
  {
    value: "100%",
    label: "Layanan Gratis & Rahasia",
    detail: "Didukung donasi publik & mitra independen",
  },
];

export const KBGO_CATEGORIES: KBGOCategory[] = [
  {
    id: "ncii",
    name: "Penyebaran Konten Intim Non-Konsensual (NCII)",
    shortDesc:
      "Penyebaran, ancaman penyebaran, atau publikasi foto/video intim tanpa persetujuan korban (Revenge Porn / Sextortion).",
    fullDesc:
      "Non-Consensual Intimate Imagery (NCII) adalah salah satu bentuk KBGO yang paling merusak secara psikologis dan sosial. Pelaku menyebarkan atau mengancam akan menyebarkan materi visual bermuatan seksual korban untuk memeras, mempermalukan, atau memaksakan kehendak.",
    examples: [
      "Mantan pasangan mengancam menyebarkan foto pribadi ke keluarga atau rekan kerja jika hubungan berakhir",
      "Penyebaran rekaman video call intim tanpa izin di grup perpesanan Telegram atau forum daring",
      "Pemerasan uang atau permintaan konten baru dengan ancaman kebocoran arsip lama (sextortion)",
    ],
    legalBasis: [
      "UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS) Pasal 14 ayat (1) huruf a dan b (Pidana hingga 4-6 tahun & denda Rp 200-300 juta)",
      "Pasal 27 ayat (1) jo Pasal 45 ayat (1) UU ITE No. 1 Tahun 2024 (Revisi Kedua)",
    ],
    riskLevel: "Sangat Kritis",
    immediateActions: [
      "JANGAN menuruti ancaman pelaku untuk mengirim uang atau konten baru",
      "Amankan bukti berupa tangkapan layar lengkap dengan nama akun, URL profil, tanggal, dan jam",
      "Gunakan alat StopNCII.org atau Take It Down untuk membuat sidik jari digital (hash) tanpa mengunggah foto asli",
      "Hubungi Hotline TPDcom segera untuk pendampingan darurat & take down lintas platform",
    ],
    icon: "ShieldAlert",
  },
  {
    id: "doxing",
    name: "Doxing & Pelanggaran Privasi Digital",
    shortDesc:
      "Penyebaran data pribadi korban (alamat, nomor telepon, KTP, tempat kerja) secara publik untuk memicu perundungan.",
    fullDesc:
      "Doxing dilakukan dengan mengumpulkan dan menyebarkan informasi pribadi seseorang di internet dengan maksud jahat, sehingga memicu pelecehan massal, teror fisik, hingga ancaman keselamatan di dunia nyata.",
    examples: [
      "Mempublikasikan nomor WhatsApp dan foto korban di situs kencan dengan deskripsi palsu",
      "Membagikan alamat rumah, identitas keluarga, dan rute perjalanan aktivis perempuan untuk mengintimidasi",
      "Penyebaran data KTP dan swafoto di media sosial pasca konflik daring",
    ],
    legalBasis: [
      "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) Pasal 65 jo Pasal 67",
      "Pasal 29 jo Pasal 45B UU ITE (Ancaman kekerasan atau menakut-nakuti)",
    ],
    riskLevel: "Tinggi",
    immediateActions: [
      "Kunci seluruh akun media sosial menjadi privat (private mode)",
      "Laporkan tautan dan unggahan doxing langsung ke penyedia platform dengan rujukan pelanggaran data pribadi",
      "Informasikan keluarga dekat dan pengurus tempat tinggal untuk mengantisipasi kehadiran pihak tak dikenal",
      "Ajukan permintaan darurat penghapusan hasil pencarian ke Google Personal Information Removal",
    ],
    icon: "UserX",
  },
  {
    id: "cyberstalking",
    name: "Penguntitan Siber (Cyberstalking)",
    shortDesc:
      "Pemantauan berkala, pelacakan GPS, atau pengawasan aktivitas daring seseorang tanpa izin secara intensif.",
    fullDesc:
      "Cyberstalking melibatkan penggunaan teknologi (stalkerware, spyware, fitur pelacak, akun palsu) untuk mengawasi setiap gerak-gerik korban, menimbulkan rasa takut yang melumpuhkan dan kecemasan berkepanjangan.",
    examples: [
      "Pemasangan aplikasi pelacak tersembunyi di ponsel pasangan tanpa sepengetahuannya",
      "Pelaku selalu muncul di kolom komentar, mengirim pesan ke seluruh pengikut korban, dan melacak check-in lokasi",
      "Mengirim email dan pesan berulang puluhan kali per hari meski sudah diblokir",
    ],
    legalBasis: [
      "UU TPKS Pasal 14 ayat (1) huruf c (Penguntitan elektronik)",
      "Pasal 30 UU ITE (Akses ilegal terhadap perangkat/sistem komputer)",
    ],
    riskLevel: "Tinggi",
    immediateActions: [
      "Lakukan audit perangkat dengan teknisi keamanan digital TPDcom untuk mendeteksi stalkerware",
      'Matikan riwayat lokasi dan fitur "Find My" atau layanan berbagi lokasi keluarga',
      "Ubah seluruh kata sandi akun penting dan aktifkan Two-Factor Authentication (2FA) via aplikasi authenticator",
      "Catat log pesan dan waktu teror untuk lampiran berkas laporan kepolisian",
    ],
    icon: "Eye",
  },
  {
    id: "impersonation",
    name: "Impersonasi & Pemalsuan Identitas",
    shortDesc:
      "Pembuatan akun palsu menggunakan nama, foto, dan reputasi korban untuk mencemarkan nama baik atau menipu.",
    fullDesc:
      "Pelaku membuat akun tiruan di Instagram, X, TikTok, atau aplikasi percakapan menggunakan foto dan biodata korban, lalu mengirim konten vulgar atau pesan menipu kepada teman dan kolega korban.",
    examples: [
      "Akun palsu atas nama dosen/mahasiswi menawarkan jasa seksual berbayar",
      "Pembuatan akun kloning untuk meminjam uang secara daring atas nama korban",
      "Penggunaan identitas aktivis untuk menyebarkan ujaran kebencian palsu",
    ],
    legalBasis: [
      "Pasal 35 jo Pasal 51 ayat (1) UU ITE (Manipulasi informasi elektronik)",
      "Pasal 310 & 311 KUHP (Pencemaran nama baik dan fitnah)",
    ],
    riskLevel: "Sedang",
    immediateActions: [
      "Buat klarifikasi singkat di akun resmi tanpa menyertakan screenshot konten vulgar akun palsu",
      'Ajak jejaring terpercaya untuk melaporkan akun palsu secara massal via fitur "Impersonation / Pretending to be me"',
      "Dapatkan Surat Keterangan Pendampingan dari TPDcom untuk eskalasi ke perwakilan platform Meta/TikTok Indonesia",
    ],
    icon: "UserMinus",
  },
  {
    id: "ai-deepfake",
    name: "Manipulasi Gambar & Deepfake Berbasis AI",
    shortDesc:
      "Pemanfaatan kecerdasan buatan untuk menempelkan wajah korban pada konten pornografi atau video manipulatif.",
    fullDesc:
      "Kemajuan teknologi generatif AI kini disalahgunakan untuk menciptakan gambar dan video telanjang palsu (Non-Consensual Deepfake Pornography) dari foto biasa yang diambil dari media sosial korban.",
    examples: [
      "Foto wisuda atau liburan korban di-generate menjadi gambar telanjang menggunakan bot Telegram / web AI",
      "Klip video pendek wajah korban disinkronkan ke video dewasa orang lain",
      "Pemerasan dengan ancaman memviralkan rekaman deepfake audio/video",
    ],
    legalBasis: [
      "UU TPKS Pasal 14 ayat (1) & ayat (2) (Kekerasan Seksual Berbasis Elektronik)",
      "UU ITE Pasal 27 ayat (1) jo Pasal 45 ayat (1)",
    ],
    riskLevel: "Sangat Kritis",
    immediateActions: [
      "Jangan panik dan jangan bernegosiasi secara emosional dengan pelaku",
      "Laporkan channel Telegram / grup bot ke tim respons krisis TPDcom untuk takedown massal",
      'Laporkan ke Google menggunakan formulir "Remove sexually explicit non-consensual synthetic media"',
      "Konsultasikan opsi hukum UU TPKS dengan tim pengacara pro-bono TPDcom",
    ],
    icon: "Sparkles",
  },
  {
    id: "cyber-harassment",
    name: "Pelecehan & Perundungan Daring (Cyber Harassment)",
    shortDesc:
      "Pengiriman pesan kasar, rayuan seksual yang tidak diinginkan, sexting paksa, atau serbuan ujaran kebencian seksis.",
    fullDesc:
      "Bentuk kekerasan di mana korban dibombardir secara terus-menerus dengan konten bermuatan seksual, cercaan berbasis gender, ancaman pemerkosaan, atau gambar alat kelamin tanpa persetujuan (cyber flashing).",
    examples: [
      "Mengirim foto kelamin (dickpic) ke Direct Message korban tanpa izin",
      "Komentar bernada cabul dan objektifikasi tubuh berulang di video siaran langsung korban",
      "Serangan komentar seksis terorganisir untuk membungkam opini korban di ruang publik",
    ],
    legalBasis: [
      "UU TPKS Pasal 5 (Pelecehan seksual nonfisik secara elektronik)",
      "Pasal 27 ayat (1) UU ITE",
    ],
    riskLevel: "Sedang",
    immediateActions: [
      "Aktifkan filter kata kunci (hidden words) di pengaturan privasi Instagram / X / TikTok",
      "Blokir pelaku setelah seluruh bukti tangkapan layar dan tautan profil disimpan aman",
      "Batasi komentar postingan hanya untuk orang yang Anda ikuti",
      "Cari dukungan emosional dari support group penyintas TPDcom",
    ],
    icon: "MessageSquareWarning",
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: "keamanan-digital",
    title: "Klinik Keamanan Digital & Tanggap Forensik",
    category: "Pencegahan & Mitigasi Teknis",
    description:
      "Layanan terpadu audit keamanan akun, pembersihan jejak digital, ekstraksi bukti forensik berstandar peradilan, serta pelatihan mitigasi ancaman siber bagi perempuan pembela HAM dan jurnalis.",
    beneficiariesCount: "1.240+ individu didampingi teknis",
    keyFeatures: [
      "Audit Kerentanan Perangkat & Stalkerware Detection",
      "Protokol Hashing & Takedown Konten Intim (StopNCII/TakeItDown)",
      "Preservasi Bukti Digital Terenkripsi (Hash SHA-256)",
      "Pelatihan Keamanan Siber Komunitas & Kampus",
    ],
    icon: "ShieldCheck",
    route: "detail_program_keamanan_digital",
  },
  {
    id: "advokasi-hukum",
    title: "Bantuan Hukum & Litigasi Pro Bono",
    category: "Perlindungan & Akses Keadilan",
    description:
      "Pendampingan hukum komprehensif mulai dari konsultasi awal, pembuatan berkas laporan kepolisian, pendampingan Berita Acara Pemeriksaan (BAP), hingga persidangan dengan perspektif keadilan korban berbasis UU TPKS.",
    beneficiariesCount: "860+ korban didampingi hukum",
    keyFeatures: [
      "Penyusunan Konstruksi Hukum Berbasis UU TPKS & UU PDP",
      "Pendampingan di Kepolisian (Unit PPA & Subdit Siber)",
      "Permohonan Perlindungan ke LPSK (Lembaga Perlindungan Saksi dan Korban)",
      "Mediasi Etik & Surat Tuntutan Resmi ke Platform Media Sosial",
    ],
    icon: "Scale",
    route: "program",
  },
  {
    id: "pemulihan-psikologis",
    title: "Konseling Trauma & Ruang Aman Pulih",
    category: "Psikososial & Kesehatan Mental",
    description:
      "Ruang aman pemulihan trauma bersama psikolog klinis berlisensi dan fasilitator peer-support. Membantu penyintas mengatasi kecemasan akut, depresi, dan rasa terisolasi pasca kekerasan digital.",
    beneficiariesCount: "1.450+ sesi konseling gratis",
    keyFeatures: [
      "Konseling Krisis Psikologis 1-on-1 (Daring & Luring)",
      "Peer Support Group Penyintas KBGO Mingguan",
      "Psikoedukasi Pengelolaan Kecemasan & Self-Compassion",
      "Rujukan Medis & Pendampingan Psikiatri Lanjutan",
    ],
    icon: "HeartHandshake",
    route: "program",
  },
  {
    id: "advokasi-kebijakan",
    title: "Advokasi Kebijakan & Akuntabilitas Platform",
    category: "Reformasi Sistemik",
    description:
      "Mendesak platform teknologi global (Meta, Google, X, Telegram, TikTok) agar memiliki perwakilan responsif di Indonesia, serta mengawal peraturan turunan UU TPKS demi perlindungan ruang digital yang adil gender.",
    beneficiariesCount: "6 Dokumen Kebijakan & Koalisi Nasional",
    keyFeatures: [
      "Riset Pemantauan Situasi KBGO Nasional Tahunan",
      "Dialog Kebijakan dengan Kementerian PPPA & Kominfo",
      "Koalisi Masyarakat Sipil untuk Hak Asasi Digital (KMSHAD)",
      "Desakan Transparansi Moderasi Konten Bahasa Daerah",
    ],
    icon: "FileText",
    route: "program",
  },
];

export const PROGRAM_ACTIVITIES: ProgramActivity[] = [
  {
    id: "pdp-paralegal",

    title: "PDP PARALEGAL",

    typeKey: "pelatihan",

    date: "22 Desember 2024",

    location: "Fave Hotel Mataram",

    participants: "Calon Paralegal / Masyarakat",

    description:
      "Pelatihan Dasar-Dasar Paralegal (PDP) untuk memperkuat pemahaman hukum di tingkat komunitas, membantu masyarakat mengakses keadilan, serta memberikan pendampingan hukum non-litigasi dasar.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793757862/IMG_0200.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757862/IMG_0200.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757783/IMG_0797.jpg",
        caption: "Dokumentasi kegiatan paralegal",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757859/IMG_0828.jpg",
        caption: "Dokumentasi pembelajaran paralegal",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757932/IMG_0175.jpg",
        caption: "Dokumentasi diskusi paralegal",
      },
    ],
  },

  {
    id: "pelatihan-keamanan-digital-kelompok-rentan",

    title: "PELATIHAN KEAMANAN DIGITAL BAGI KELOMPOK RENTAN",

    typeKey: "pelatihan",

    date: "8 - 10 Maret 2024",

    location: "Informasi lokasi belum tersedia",

    participants: "Kelompok Rentan",

    description:
      "Pelatihan praktis untuk meningkatkan kesadaran dan keterampilan kelompok rentan dalam mengamankan data pribadi, menghadapi ancaman online, serta menggunakan perangkat digital secara aman.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793757281/IMG_0033.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757313/_MG_0073.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757283/IMG_0039.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757279/IMG_0012.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "pelatihan-literasi-digital-pencegahan-kekerasan",

    title:
      "Pelatihan Literasi Digital dan Pencegahan Kekerasan Terhadap Perempuan dan Anak",

    typeKey: "pelatihan",

    date: "7 Februari 2024",

    location: "Informasi lokasi belum tersedia",

    participants: "Perempuan, anak-anak, dan pendamping",

    description:
      "Edukasi literasi digital yang fokus pada pencegahan kekerasan berbasis gender online (KBGO) serta perlindungan anak di dunia maya, membekali peserta dengan langkah-langkah preventif dan penanganan.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793757579/DSCF2679.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757577/DSCF2673.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757578/DSCF2697.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757581/DSCF2719.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "pelatihan-pemberdayaan-ekonomi-digital",

    title: "PELATIHAN PEMBERDAYAAN EKONOMI DIGITAL",

    typeKey: "pelatihan",

    date: "24 Agustus 2026",

    location: "Informasi lokasi belum tersedia",

    participants: "Pelaku UMKM / Masyarakat",

    description:
      "Program peningkatan kapasitas ekonomi melalui digitalisasi, termasuk pemanfaatan e-commerce, pemasaran digital, dan manajemen keuangan berbasis aplikasi untuk memperluas jangkauan pasar.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793757029/IMG-20250810-WA0044.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757118/20250809_110109.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757028/IMG-20250809-WA0008.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793757029/IMG-20250809-WA0014.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "pelatihan-participatory-rural-appraisal",

    title: "PELATIHAN PARTICIPATORY RURAL APPRAISAL",

    typeKey: "pelatihan",

    date: "15 Juli 2026",

    location: "Informasi lokasi belum tersedia",

    participants: "Masyarakat Desa / Fasilitator Komunitas",

    description:
      "Pelatihan metode pemahaman keadaan desa secara partisipatif (PRA), melibatkan masyarakat secara aktif untuk menganalisis kondisi, masalah, dan potensi mereka dalam merencanakan pembangunan.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793758055/IMG-20251103-WA0045.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758055/IMG-20251103-WA0045.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758050/IMG-20251103-WA0027.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "kasus-alih-fungsi-rumah",

    title: "KASUS ALIH FUNGSI RUMAH",

    typeKey: "kasus",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Pihak Terkait",

    description:
      "Pendampingan dan penanganan hukum terkait kasus sengketa atau alih fungsi rumah.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793760828/WhatsApp_Image_2026-07-15_at_10.56.44.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793760831/WhatsApp_Image_2026-07-15_at_10.52.16.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793760834/WhatsApp_Image_2026-07-15_at_10.52.16_1.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  // {
  //   id: "kasus-beleka",

  //   title: "KASUS BELEKA",

  //   typeKey: "kasus",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Informasi lokasi belum tersedia",

  //   participants: "Pihak Terkait",

  //   description:
  //     "Pendampingan hukum untuk kasus yang terjadi di wilayah Beleka atau melibatkan pihak terkait.",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  {
    id: "kasus-ijazah-unw",

    title: "KASUS IJAZAH UNW",

    typeKey: "kasus",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Pihak Terkait",

    description:
      "Penanganan kasus dan pendampingan hukum terkait sengketa atau masalah ijazah UNW.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761035/20250603_133225.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761063/20250703_104822.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793760913/20250703_153555.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  // {
  //   id: "kasus-kekerasan-kakak-kandung",

  //   title: "KASUS KEKERASAN KAKAK KANDUNG",

  //   typeKey: "kasus",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Informasi lokasi belum tersedia",

  //   participants: "Korban dan Pihak Terkait",

  //   description:
  //     "Pendampingan hukum dan psikologis bagi korban kekerasan dalam rumah tangga/keluarga.",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  // {
  //   id: "kasus-penipuan-truk-200-jt",

  //   title: "KASUS PENIPUAN TRUK 200 JT",

  //   typeKey: "kasus",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Informasi lokasi belum tersedia",

  //   participants: "Pihak Terkait",

  //   description:
  //     "Advokasi dan proses hukum terkait kasus penipuan transaksi kendaraan truk senilai 200 juta rupiah.",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  // {
  //   id: "kasus-pidana-rosidatul-jannah",

  //   title: "KASUS PIDANA ROSIDATUL JANNAH",

  //   typeKey: "kasus",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Informasi lokasi belum tersedia",

  //   participants: "Pihak Terkait",

  //   description:
  //     "Pendampingan hukum terkait perkara pidana atas nama Rosidatul Jannah.",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1505664159854-232618df4fac?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1505664159854-232618df4fac?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  // {
  //   id: "klu",

  //   title: "KLU",

  //   typeKey: "kasus",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Informasi lokasi belum tersedia",

  //   participants: "Pihak Terkait",

  //   description:
  //     "Dokumentasi perkara dan pendampingan di wilayah Kabupaten Lombok Utara (KLU).",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  {
    id: "marni-setuta",

    title: "KASUS HUMAN TRAFFICKING",

    typeKey: "kasus",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Pihak Terkait",

    description: "Pendampingan hukum dan advokasi untuk kasus Marni Setuta.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761054/WhatsApp_Image_2024-10-14_at_12.22.31_c399a0b4.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761058/IMG_7187.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "pelecehan-online-oleh-oknum-dosen",

    title: "PELECEHAN ONLINE OLEH OKNUM DOSEN",

    typeKey: "kasus",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Korban dan Pihak Terkait",

    description:
      "Pendampingan korban Kekerasan Berbasis Gender Online (KBGO) yang melibatkan oknum akademisi.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761331/WhatsApp_Image_2026-09-11_at_14.10.56_3.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761331/WhatsApp_Image_2026-09-11_at_14.10.56_5.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761329/WhatsApp_Image_2026-07-06_at_12.16.21.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761328/WhatsApp_Image_2026-07-06_at_15.50.53_1.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  // {
  //   id: "pencemaran-nama-baik-beleka",

  //   title: "PENCEMARAN NAMA BAIK BELEKA",

  //   typeKey: "kasus",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Informasi lokasi belum tersedia",

  //   participants: "Pihak Terkait",

  //   description:
  //     "Advokasi hukum terkait kasus dugaan pencemaran nama baik di wilayah Beleka.",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  // {
  //   id: "rizkil-wathon",

  //   title: "RIZKIL WATHON",

  //   typeKey: "kasus",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Informasi lokasi belum tersedia",

  //   participants: "Pihak Terkait",

  //   description:
  //     "Dokumentasi dan pendampingan hukum untuk kasus atas nama Rizkil Wathon.",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1505664159854-232618df4fac?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1505664159854-232618df4fac?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  {
    id: "sengketa-status-perkawinan",

    title: "SENGKETA STATUS PERKAWINAN",

    typeKey: "kasus",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Pihak Terkait",

    description:
      "Pendampingan hukum perdata terkait sengketa status perkawinan dan hak-hak keluarga.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761281/WhatsApp_Image_2026-09-27_at_10.37.27.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761283/20261022_093557.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "refreshing-penanganan-kasus",

    title: "REFRESHING PENANGANAN KASUS",

    typeKey: "workshop",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Pendamping dan Pihak Terkait",

    description:
      "Kegiatan penyegaran dan peningkatan kapasitas bagi para pendamping dalam menangani berbagai kasus di lapangan.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793765271/WhatsApp_Image_2026-07-14_at_11.05.06_FDFSFR.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793765277/WhatsApp_Image_2026-07-14_at_11.05.06_FDER.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793765273/WhatsApp_Image_2026-07-14_at_11.05.05_FSDFDSF.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "workshop-penanganan-kasus-kbgo",

    title: "WORKSHOP PENANGANAN KASUS KEKERASAN BERBASIS GENDER ONLINE",

    typeKey: "workshop",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Pihak Terkait",

    description:
      "Workshop komprehensif mengenai strategi, mitigasi, dan penanganan kasus Kekerasan Berbasis Gender Online (KBGO).",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793758201/P1080661.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758183/P1080476.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758216/P1080645.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758287/P1080647.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "workshop-kebutuhan-kelompok-berkebutuhan-khusus",

    title: "WORKSHOP KEBUTUHAN KELOMPOK BERKEBUTAHAN KHUSUS",

    typeKey: "workshop",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Kelompok Berkebutuhan Khusus / Pihak Terkait",

    description:
      "Diskusi dan pelatihan untuk memahami serta memfasilitasi kebutuhan kelompok rentan dan disabilitas agar lebih inklusif.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793758304/WhatsApp_Image_2024-05-09_at_18.29.07_a0043b5c.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758301/WhatsApp_Image_2024-05-09_at_18.29.07_147390de.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "workshop-qamarul-huda",

    title: "WORKSHOP HUMAN EMPOWERMENT",

    typeKey: "workshop",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Peserta Terkait",

    description:
      "Pelaksanaan workshop dan pelatihan Human Empowerment yang diselenggarakan di/bersama institusi Qamarul Huda.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793758478/WhatsApp_Image_2026-07-15_at_10.52.14_1.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758482/WhatsApp_Image_2026-07-15_at_10.52.13.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "workshop-transfer-knowledge-lingkungan",

    title: "WORKSHOP TRANSFER KNOWLEDGE LINGKUNGAN",

    typeKey: "workshop",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Pegiat Lingkungan / Masyarakat",

    description:
      "Kegiatan berbagi pengetahuan, inovasi, dan praktik terbaik dalam pelestarian serta pengelolaan lingkungan hidup.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793758384/WhatsApp_Image_2026-09-24_at_09.23.19.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758390/WhatsApp_Image_2026-09-24_at_09.23.54_1.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758359/WhatsApp_Image_2026-09-24_at_09.24.05.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793758387/WhatsApp_Image_2026-09-24_at_09.23.58_2.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "sosialisasi-desa-jenggala",

    title: "SOSIALISASI PERKENALAN TPDOTCOM",

    typeKey: "sosialisasi",

    date: "Informasi tanggal belum tersedia",

    location: "Desa Jenggala",

    participants: "Masyarakat Desa",

    description:
      "Kegiatan sosialisasi dan penyuluhan yang dilaksanakan di Desa Jenggala. Dalam rangka memperkenalkan Transformasi Perempuan Dotcom.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761908/WhatsApp_Image_2024-01-10_at_12.20.25.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761910/WhatsApp_Image_2024-01-10_at_12.22.00_1.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761909/WhatsApp_Image_2024-01-10_at_12.22.01_1.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "sosialisasi-diskusi-kbgo",

    title: "DISKUSI KBGO BERSAMA CSO DAN LEMBAGA TERKAIT",

    typeKey: "sosialisasi",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Peserta Terkait",

    description:
      "Diskusi dan sosialisasi terkait pencegahan serta penanganan Kekerasan Berbasis Gender Online (KBGO).",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761940/WhatsApp_Image_2024-11-01_at_09.34.40.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761938/WhatsApp_Image_2024-11-01_at_09.34.43.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "sosialisasi-sman-1-janapria",

    title:
      "LITERASI DIGITAL DAN PENCEGAHAN KEKERASAN TERHADAP PEREMPUAN DAN ANAK",

    typeKey: "sosialisasi",

    date: "16 April 2024",

    location: "SMAN 1 Janapria",

    participants: "Siswa dan Guru",

    description:
      "Kegiatan sosialisasi dan edukasi yang diselenggarakan di lingkungan SMAN 1 Janapria.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761802/IMG_7181.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761801/IMG_7176.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761803/IMG_7155.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761801/IMG_7151.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "sosialisasi-sman-3-mataram",

    title:
      "LITERASI DIGITAL DAN PENCEGAHAN KEKERASAN TERHADAP PEREMPUAN DAN ANAK",

    typeKey: "sosialisasi",

    date: "Informasi tanggal belum tersedia",

    location: "SMAN 3 Mataram",

    participants: "Siswa dan Guru",

    description:
      "Kegiatan sosialisasi dan edukasi yang diselenggarakan di lingkungan SMAN 3 Mataram.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761855/WhatsApp_Image_2024-04-23_at_08.02.01_9ff1fa23.jpg",

    relatedProgramId: "",

    photos: [],
  },

  {
    id: "sosialisasi-kanwil-kemenkum-ntb-posbankum-batulayar",

    title: "Sosialisasi dari Kanwil Kemenkum NTB, ke Posbankum Desa Batulayar",

    typeKey: "sosialisasi",

    date: "Informasi tanggal belum tersedia",

    location: "Posbankum Desa Batulayar",

    participants: "Pengurus Posbankum / Masyarakat",

    description:
      "Sosialisasi layanan bantuan hukum dan penguatan kapasitas dari Kanwil Kemenkumham NTB kepada pengurus Posbankum di Desa Batulayar.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761876/WhatsApp_Image_2026-10-28_at_09.40.05.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761877/WhatsApp_Image_2026-10-28_at_09.40.05_1.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "sosialisasi-kbgo-sman-1-janapria-okt",

    title: "SOSIALISASI KBGO SMAN 1 JANAPRIE 22 OKTOBER 2026",

    typeKey: "sosialisasi",

    date: "22 Oktober 2026",

    location: "SMAN 1 Janapria",

    participants: "Siswa dan Guru",

    description:
      "Edukasi dan sosialisasi pencegahan Kekerasan Berbasis Gender Online (KBGO) yang dilaksanakan khusus di SMAN 1 Janapria.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793761783/20261022_080250.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761787/20261022_075308.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761777/20261022_075224.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793761777/20261022_080539.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  // {
  //   id: "sosialisasi-pengenalan-tpdotcom-desa-ganti",

  //   title: "SOSIALISASI PENGENALAN TPDOTCOM DESA GANTI",

  //   typeKey: "sosialisasi",

  //   date: "Informasi tanggal belum tersedia",

  //   location: "Desa Ganti",

  //   participants: "Masyarakat Desa",

  //   description:
  //     "Kegiatan sosialisasi untuk memperkenalkan program, layanan, dan peran TPDotcom kepada masyarakat di Desa Ganti.",

  //   coverImage:
  //     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",

  //   relatedProgramId: "",

  //   photos: [
  //     {
  //       url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
  //       caption: "Foto utama kegiatan",
  //     },
  //   ],
  // },

  {
    id: "acara-senyumpuan",

    title: "PERINGATAN HARI PEREMPUAN BERSAMA JEJARING SENYUMPUAN",

    typeKey: "event",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Peserta Terkait",

    description:
      "Penyelenggaraan Acara Senyumpuan sebagai bentuk keterlibatan dan partisipasi aktif masyarakat/komunitas.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935206/WhatsApp_Image_2025-03-08_at_15.58.36_5f4c9c60.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935206/WhatsApp_Image_2025-03-08_at_15.58.36_ba7bd170.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "begawe-ngulat-oktober-2026",

    title: "BEGAWE NGULAT 18 OKTOBER 2026",

    typeKey: "event",

    date: "18 Oktober 2026",

    location: "Informasi lokasi belum tersedia",

    participants: "Masyarakat / Komunitas",

    description:
      "Penyelenggaraan acara tradisi atau kegiatan komunitas Begawe Ngulat.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935302/IMG-20261018-WA0023.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935292/20261018_095953.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935313/20261018_095944.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "dialog-terbuka-janapria",

    title:
      "DIALOG TERBUKA TENTANG BAHAYA PERNIKAHAN DINI DAN PERGAULAN BEBAS DI JANAPRIA",

    typeKey: "diskusi",

    date: "Informasi tanggal belum tersedia",

    location: "Janapria",

    participants: "Masyarakat dan Remaja",

    description:
      "Kegiatan dialog terbuka interaktif yang membahas isu penting mengenai bahaya pernikahan anak/usia dini dan pergaulan bebas.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935455/WhatsApp_Image_2025-07-21_at_17.04.55_ba5a003a.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935469/WhatsApp_Image_2025-07-21_at_17.26.29_5d69e7b6.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "diskusi-bersama-mahasiswa",

    title:
      "DISKUSI BERSAMA MAHASISWA TENTANG KEKERASAN YANG ADA DI LINGKUNGAN KAMPUS",

    typeKey: "diskusi",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Mahasiswa",

    description:
      "Forum diskusi tematik bersama elemen mahasiswa untuk menjaring aspirasi dan meningkatkan kesadaran terhadap isu sosial-hukum.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935477/WhatsApp_Image_2025-01-31_at_09.49.19_d87a0c39.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935478/WhatsApp_Image_2025-01-31_at_09.49.20_3b2c623e.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935482/WhatsApp_Image_2025-01-31_at_09.49.23_4849ea51.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "diskusi-dengan-sp-mataram",

    title: "DISKUSI DENGAN SP MATARAM TERKAIT PERUBAHAN IKLIM",

    typeKey: "diskusi",

    date: "Informasi tanggal belum tersedia",

    location: "Mataram",

    participants: "SP Mataram / Pihak Terkait",

    description:
      "Pertemuan dan ruang diskusi bersama kelompok SP Mataram untuk penguatan kelembagaan atau koordinasi program.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935514/WhatsApp_Image_2025-03-04_at_14.48.09_9d357943.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935526/WhatsApp_Image_2025-03-04_at_14.35.30_7e151eef.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935507/WhatsApp_Image_2025-03-04_at_14.35.31_be087d5b.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "evaluasi-penanganan-kasus",

    title: "EVALUASI PENANGANAN KASUS",

    typeKey: "evaluasi",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Tim Pendamping dan Internal",

    description:
      "Agenda evaluasi internal berkala terkait metode, proses, dan hasil akhir dari penanganan berbagai kasus klien di lapangan.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935576/WhatsApp_Image_2025-07-19_at_20.29.52_e5b28dcf.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935575/8.png",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "hobicon-2026",

    title: "HOBICON 2026",

    typeKey: "event",

    date: "Tahun 2026",

    location: "Informasi lokasi belum tersedia",

    participants: "Masyarakat Umum",

    description:
      "Kegiatan acara pameran, komunitas, dan pertemuan berskala besar dalam rangkaian Hobicon 2026.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935340/20260619_151214.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935339/20260619_151319.jpg",
        caption: "Foto utama kegiatan",
      },
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935342/WhatsApp_Image_2026-11-02_at_09.43.58_1.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "hobicon-student-olympiad",

    title: "HOBICON STUDENT OLYMPIAD",

    typeKey: "event",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Siswa/Pelajar",

    description:
      "Kompetisi dan olimpiade tingkat pelajar yang diselenggarakan sebagai bagian dari kegiatan Hobicon.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935412/20260404_092658.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935368/20260404_085808.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "networking-cso-apik",

    title: "DISKUSI TENTANG KERJASAMA TPDOTCOM DAN LBH APIK",

    typeKey: "networking",

    date: "Informasi tanggal belum tersedia",

    location: "Informasi lokasi belum tersedia",

    participants: "Lembaga CSO / Jaringan APIK",

    description:
      "Forum pertemuan lintas lembaga Civil Society Organization (CSO) untuk membangun jejaring kerja dan memperkuat kolaborasi bersama APIK.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793935539/IMG-20260812-WA0004.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793935538/IMG-20260812-WA0012.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },

  {
    id: "kunjungan-umkm-lombok-tengah-april-2026",

    title: "KUNJUNGAN UMKM LOMBOK TENGAH 28 APRIL 2026",

    typeKey: "kunjungan",

    date: "28 April 2026",

    location: "Lombok Tengah",

    participants: "Pelaku UMKM / Tim Kunjungan",

    description:
      "Kegiatan kunjungan lapangan ke berbagai UMKM di wilayah Lombok Tengah untuk dukungan dan pendampingan usaha.",

    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793759117/20260428_114907_1.jpg",

    relatedProgramId: "",

    photos: [
      {
        url: "https://res.cloudinary.com/obyq9wil/image/upload/v1793759120/20260428_131556_1.jpg",
        caption: "Foto utama kegiatan",
      },
    ],
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  // {
  //   id: "laporan-tahunan-2024",
  //   title:
  //     "Mengurai Bayang-bayang Kekerasan Digital: Laporan Situasi KBGO di Indonesia 2024",
  //   subtitle:
  //     "Catatan Tahunan Advokasi, Data Kasus, dan Rekomendasi Kebijakan TPDcom",
  //   type: "Laporan Tahunan",
  //   year: 2024,
  //   date: "10 Desember 2024",
  //   pages: 148,
  //   fileSize: "4.8 MB",
  //   summary:
  //     "Laporan komprehensif mendokumentasikan 1.412 aduan kekerasan digital sepanjang 2024. Menyoroti lonjakan 42% kasus pemerasan konten intim (sextortion) dan ancaman baru pornografi berbasis Generatif AI/Deepfake di kalangan pelajar dan perempuan muda.",
  //   keyFindings: [
  //     "1.412 aduan kasus diterima sepanjang 2024, naik 38% dibandingkan tahun sebelumnya",
  //     "WhatsApp (44%) dan Telegram (29%) menjadi kanal teratas distribusi konten intim non-konsensual",
  //     "78% korban berusia 18–29 tahun, dengan 14% di antaranya adalah anak di bawah usia 18 tahun",
  //     "Hambatan terbesar penegakan hukum: lambatnya respons platform teknologi dan reviktimisasi saat pelaporan kepolisian",
  //   ],
  //   downloadUrl: "#",
  //   isFeatured: true,
  // },
  // {
  //   id: "panduan-protokol-ncii",
  //   title: "Panduan Protokol Penghapusan Konten Intim Non-Konsensual (NCII)",
  //   subtitle:
  //     "Langkah Taktis Mandiri & Institusional Menghapus Foto/Video Tanpa Persetujuan",
  //   type: "Panduan Praktis",
  //   year: 2024,
  //   date: "15 September 2024",
  //   pages: 64,
  //   fileSize: "2.4 MB",
  //   summary:
  //     "Buku saku praktis langkah demi langkah bagi korban dan pendamping kasus untuk menghapus foto/video intim dari internet secara mandiri dan legal, memanfaatkan teknologi hash StopNCII serta jalur eskalasi darurat.",
  //   keyFindings: [
  //     "Penjelasan tuntas cara kerja StopNCII.org tanpa pernah menyerahkan foto/video asli ke server pihak ketiga",
  //     "Panduan pengamanan bukti elektronik (screenshot URL, header metadata, tanggal) yang sah di pengadilan",
  //     "Format draf surat somasi dan pelaporan langsung ke perwakilan platform Meta, X, Google, dan Telegram",
  //     "Hak-hak ganti rugi (restitusi) dan pemulihan nama baik bagi korban berdasarkan Pasal 30 UU TPKS",
  //   ],
  //   downloadUrl: "#",
  //   isFeatured: true,
  // },
  // {
  //   id: "policy-brief-uu-tpks-kbgo",
  //   title:
  //     "Kertas Kebijakan: Akselerasi Peraturan Pelaksana UU TPKS untuk Kasus Kekerasan Digital",
  //   subtitle:
  //     "Menutup Celah Hukum Penanganan Bukti Elektronik & Pelindungan Saksi Korban",
  //   type: "Kertas Kebijakan",
  //   year: 2024,
  //   date: "28 Juli 2024",
  //   pages: 42,
  //   fileSize: "1.9 MB",
  //   summary:
  //     "Analisis kritis terhadap lambatnya pengesahan RPP tentang penanganan kekerasan seksual berbasis elektronik, serta rekomendasi standarisasi SOP bagi aparat penegak hukum agar tidak menuntut bukti materiil yang memalukan korban.",
  //   keyFindings: [
  //     "Urgennya mandat kejaksaan dan kepolisian untuk mengakui sertifikasi hash digital sebagai bukti otentik",
  //     "Pentingnya integrasi Dana Bantuan Korban (Victim Trust Fund) untuk biaya pemulihan psikologis trauma digital",
  //   ],
  //   downloadUrl: "#",
  // },
  // {
  //   id: "buku-saku-keamanan-digital-mahasiswa",
  //   title: "Buku Saku: Menjaga Kedaulatan Digital di Kampus",
  //   subtitle:
  //     "Panduan Mengenali, Menghindari, dan Melawan KBGO bagi Civitas Academica",
  //   type: "Panduan Praktis",
  //   year: 2023,
  //   date: "18 November 2023",
  //   pages: 56,
  //   fileSize: "3.1 MB",
  //   summary:
  //     "Pedoman edukasi bagi Satgas PPKS (Pencegahan dan Penanganan Kekerasan Seksual) di perguruan tinggi untuk menangani kasus kebocoran data, grup chat perpeloncoan seksual, dan pelecehan daring di lingkungan kampus.",
  //   keyFindings: [
  //     "Alur penanganan kasus KBGO di level universitas dengan menjaga kerahasiaan identitas korban",
  //     "Checklist audit keamanan akun media sosial organisasi mahasiswa",
  //   ],
  //   downloadUrl: "#",
  // },
  {
    id: "strategic-plan-tpdotcom",
    type: "Strategic Plan",
    title: "Strategic Plan TPDotcom",
    subtitle: "Rencana Strategis Organisasi",
    summary:
      "Dokumen perencanaan strategis yang memuat arah organisasi, prioritas program, tujuan, serta strategi pengembangan TPDotcom dalam periode perencanaan.",
    year: 2026,
    pages: null,
    date: "18 November 2023",
    fileSize: "",
    keyFindings: [
      "Arah dan prioritas strategis organisasi.",
      "Tujuan dan sasaran pengembangan organisasi.",
      "Strategi pelaksanaan program dan kegiatan.",
      "Kerangka pemantauan dan evaluasi organisasi.",
    ],
  },
  {
    id: "sop-tpdotcom",
    type: "SOP",
    title: "Standar Operasional Prosedur TPDotcom",
    subtitle: "Pedoman Pelaksanaan dan Tata Kelola Organisasi",
    summary:
      "Kumpulan prosedur operasional sebagai pedoman pelaksanaan kegiatan, koordinasi tim, administrasi, serta tata kelola organisasi TPDotcom.",
    year: 2026,
    pages: null,
    date: "18 November 2023",
    fileSize: "",
    keyFindings: [
      "Prosedur pelaksanaan kegiatan organisasi.",
      "Alur koordinasi dan komunikasi internal.",
      "Prosedur administrasi dan dokumentasi.",
      "Standar pelaksanaan dan evaluasi kegiatan.",
    ],
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "memahami-uu-tpks-kbgo",
    title:
      "Bagaimana UU TPKS Melindungi Korban Kekerasan Berbasis Gender Online?",
    slug: "bagaimana-uu-tpks-melindungi-korban-kbgo",
    category: "Analisis Kebijakan",
    date: "14 Oktober 2024",
    readTime: "6 menit baca",
    author: "Tim Advokasi Hukum TPDcom",
    excerpt:
      "Hadirnya UU No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS) menjadi tonggak sejarah baru dalam penegakan hukum kekerasan seksual di ranah digital. Pelajari pasal-pasal kunci yang menjadi senjata bagi korban.",
    content: [
      "Sebelum disahkannya UU TPKS pada April 2022, korban kekerasan seksual di ranah digital sering kali berada dalam posisi terjepit. Sering kali, pasal-pasal dalam UU ITE yang bermasalah justru digunakan untuk mengkriminalisasi korban dengan tuduhan mendistribusikan muatan asusila.",
      "Pasal 14 UU TPKS secara eksplisit mengatur Tindak Pidana Kekerasan Seksual Berbasis Elektronik (KSBE). Pasal ini memuat larangan merekam, mentransmisikan, dan menyebarluaskan konten intim tanpa persetujuan, dengan ancaman pidana penjara maksimal 4 tahun dan denda paling banyak Rp 200 juta.",
      "Jika perbuatan tersebut dilakukan dengan tujuan pemerasan, ancaman, atau penyesatan, hukumannya diperberat menjadi maksimal 6 tahun penjara dan denda Rp 300 juta.",
      "Yang paling revolusioner, UU TPKS menetapkan bahwa satu keterangan saksi korban yang didukung dengan satu alat bukti sah lainnya (termasuk informasi/dokumen elektronik yang tersimpan) sudah cukup untuk menjatuhkan pidana bagi pelaku.",
    ],
    tags: ["UU TPKS", "Advokasi Hukum", "Hak Korban", "Hukum Digital"],
  },
  {
    id: "menghadapi-ancaman-sextortion",
    title:
      "Jangan Menuruti Pemerasan: Langkah Taktis Saat Mengalami Sextortion",
    slug: "langkah-taktis-saat-mengalami-sextortion",
    category: "Edukasi Digital",
    date: "28 September 2024",
    readTime: "5 menit baca",
    author: "Divisi Keamanan Siber TPDcom",
    excerpt:
      "Sextortion adalah bentuk pemerasan di mana pelaku mengancam menyebarkan foto atau video intim korban jika tuntutan uang atau konten tambahan tidak dipenuhi. Inilah hal pertama yang harus dan tidak boleh Anda lakukan.",
    content: [
      "Reaksi pertama saat seseorang menerima ancaman penyebaran foto intim biasanya adalah ketakutan luar biasa, panik, dan rasa bersalah. Pelaku sangat memahami psikologi ini dan sengaja memberikan batas waktu singkat agar korban bertindak tanpa berpikir jernih.",
      "Kaidah pertama yang mutlak: Jangan pernah mentransfer uang atau menuruti permintaan konten seksual baru. Pengalaman kami mendampingi ribuan kasus membuktikan bahwa menuruti tuntutan tidak akan pernah membuat pelaku berhenti; justru pelaku akan meminta lebih banyak.",
      "Langkah kedua: Amankan bukti percakapan sebelum akun pelaku dihapus atau diblokir. Ambil tangkapan layar lengkap yang memuat nama pengguna (username), nomor telepon, ID akun, serta tautan profil pelaku.",
      "Segera daftarkan foto ke sistem StopNCII.org untuk mencegah penyebaran di platform Meta dan mitra platform lainnya, lalu hubungi kanal aduan darurat TPDcom.",
    ],
    tags: ["Sextortion", "Keamanan Siber", "Panduan Praktis", "Darurat KBGO"],
  },
  {
    id: "kisah-penyintas-mengambil-kembali-suara",
    title:
      "Mengambil Kembali Kendali: Catatan Perjalanan Seorang Penyintas Doxing",
    slug: "mengambil-kembali-kendali-perjalanan-penyintas-doxing",
    category: "Suara Penyintas",
    date: "05 September 2024",
    readTime: "8 menit baca",
    author: "Nadia (Nama Samaran), Didampingi TPDcom",
    excerpt:
      '"Saat nomor ponsel dan alamat rumah saya disebar di forum online oleh mantan rekan kerja, rasanya dunia saya runtuh seketika. Namun menemukan ruang aman di TPDcom mengubah ketakutan saya menjadi keberanian."',
    content: [
      "Pagi itu di awal tahun 2024, ponsel saya tidak berhenti berdering. Ratusan pesan WhatsApp dari nomor tak dikenal masuk bertubi-tubi dengan kata-kata cabul dan panggilan video yang melecehkan. Saya gemetar, tidak sanggup melangkah keluar kamar kos.",
      "Seseorang telah menyebarkan nomor pribadi saya di sebuah grup Facebook dengan klaim palsu bahwa saya menyediakan layanan open BO. Alamat kos saya pun dicantumkan secara lengkap.",
      "Seorang teman merekomendasikan saya untuk menghubungi hotline Transformasi Perempuan Dotcom. Dari percakapan pertama, tidak ada satu pun pertanyaan yang menghakimi. Pendamping TPDcom segera membantu saya mengamankan nomor darurat baru, melatih cara melaporkan grup tersebut, dan menyediakan sesi konseling trauma psikologis gratis.",
      "Hari ini, saya menulis ini bukan sebagai korban yang kalah, melainkan sebagai perempuan yang telah merebut kembali privasi, martabat, dan hak saya atas rasa aman.",
    ],
    tags: ["Suara Penyintas", "Pemulihan Trauma", "Doxing", "Solidaritas"],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Triati",
    role: "Pengawas",
    bio: "Mengawasi tata kelola organisasi, memberikan arahan strategis, serta memastikan pelaksanaan kegiatan sejalan dengan visi, misi, dan prinsip akuntabilitas TPDotcom.",
    avatar: terePhoto,
    level: 1,
  },
  {
    name: "Beauty Erowati",
    role: "Ketua",
    bio: "Memimpin dan mengoordinasikan jalannya organisasi, menetapkan arah pelaksanaan program, serta membangun kolaborasi untuk mendukung pemberdayaan perempuan dan masyarakat.",
    avatar: beautyPhoto,
    level: 3,
  },
  {
    name: "Prof. Ruth Stella",
    role: "Wakil Ketua",
    bio: "Mendampingi ketua dalam koordinasi organisasi, memberikan masukan strategis, serta membantu memastikan program dan kegiatan berjalan sesuai tujuan organisasi.",
    avatar: stellaPhoto,
    level: 3,
  },
  {
    name: "Sulaeman Utama",
    role: "Bendahara",
    bio: "Mengelola administrasi dan pencatatan keuangan, menyusun laporan keuangan, serta mendukung pengelolaan anggaran yang transparan dan bertanggung jawab.",
    avatar: sulaemanPhoto,
    level: 3,
  },
  {
    name: "Bayu Sustiwi",
    role: "Sekretaris",
    bio: "Mengelola administrasi organisasi, surat-menyurat, notulensi rapat, dokumentasi, dan pengarsipan untuk mendukung koordinasi serta kelancaran kegiatan.",
    avatar: bayuPhoto,
    level: 3,
  },
  {
    name: "Tony Hoban",
    role: "Anggota",
    bio: "Berpartisipasi dalam pelaksanaan program dan kegiatan organisasi serta mendukung pencapaian tujuan TPDotcom melalui kerja sama tim.",
    avatar: toniPhoto,
    level: 3,
  },
  {
    name: "Hulmayadi Rahman",
    role: "Anggota",
    bio: "Mendukung pelaksanaan kegiatan, kolaborasi dengan pemangku kepentingan, serta penguatan inisiatif pemberdayaan perempuan dan masyarakat.",
    avatar: hulmayadiPhoto,
    level: 3,
  },
  {
    name: "Lalu Ocky Saktiya Luhung",
    role: "Koordinator Keuangan",
    bio: "Mengoordinasikan kebutuhan operasional keuangan, memantau pencatatan transaksi, serta membantu menyiapkan data dan dokumen pendukung pelaporan keuangan.",
    avatar: okiPhoto,
    level: 6,
  },
  {
    name: "Lalu Ferdian Yusuf",
    role: "Koordinator IT",
    bio: "Mengoordinasikan pengembangan dan pemeliharaan platform digital TPDotcom, mengelola kebutuhan teknologi informasi, serta mendukung penyebaran informasi dan edukasi digital.",
    avatar: ferdiPhoto,
    level: 6,
  },
  {
    name: "Nesti Diayu",
    role: "Direktur Pelaksana",
    bio: "Mengoordinasikan kebutuhan operasional organisasi, mendukung pelaksanaan kegiatan, serta memastikan kebutuhan administrasi dan logistik terkelola dengan baik.",
    avatar: nestiPhoto,
    level: 5,
  },
];

export const EMERGENCY_HOTLINES = [
  {
    name: "Hotline Darurat TPDcom (WhatsApp)",
    number: "+62 823-3943-1011",
    description:
      "Respon cepat 24 jam untuk kasus darurat ancaman sebar konten intim dan doxing",
    type: "whatsapp",
  },
];

export const PARALEGALS: ParalegalMember[] = [
  {
    id: "paralegal-01",
    name: "Sulaeman Utama, M.Pd",
    role: "Paralegal",
    location: "Sabe, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673781/sulaeman_utama.png",
    bio: "Berfokus pada edukasi hukum masyarakat, pemberian informasi mengenai hak-hak perempuan, serta koordinasi pendampingan dan rujukan layanan bagi masyarakat yang membutuhkan.",
    cases: [
      {
        id: "CASE-001",
        title: "Pendampingan Awal Kasus Kekerasan terhadap Perempuan",
        category: "Kekerasan terhadap Perempuan",
        status: "Berjalan",
        year: "2026",
        date: "12 Januari 2026",
        description:
          "Melakukan komunikasi awal, mengidentifikasi kebutuhan pendampingan, serta mengoordinasikan akses terhadap layanan perlindungan yang sesuai.",
      },
      {
        id: "CASE-002",
        title: "Konsultasi Hak dan Perlindungan Hukum",
        category: "Konsultasi Hukum",
        status: "Selesai",
        year: "2026",
        date: "18 Februari 2026",
        description:
          "Memberikan informasi awal mengenai hak-hak hukum, pilihan penyelesaian, serta layanan yang dapat diakses oleh masyarakat.",
      },
      {
        id: "CASE-003",
        title: "Koordinasi Rujukan Layanan Pendampingan",
        category: "Rujukan Layanan",
        status: "Dalam Proses",
        year: "2026",
        date: "10 Maret 2026",
        description:
          "Mengoordinasikan kebutuhan rujukan dengan lembaga atau penyedia layanan terkait agar pihak yang membutuhkan memperoleh dukungan yang sesuai.",
      },
    ],
  },

  {
    id: "paralegal-02",
    name: "Hulmayadi Rahman",
    role: "Paralegal",
    location: "Sabe, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673762/WhatsApp_Image_2026-07-15_at_11.57.24.jpg",
    bio: "Berperan dalam meningkatkan kesadaran hukum masyarakat, memperkuat akses terhadap keadilan, serta membantu menghubungkan masyarakat dengan layanan pendampingan.",
    cases: [
      {
        id: "CASE-004",
        title: "Pendampingan Akses Layanan Perlindungan",
        category: "Pendampingan Masyarakat",
        status: "Dalam Proses",
        year: "2026",
        date: "15 Januari 2026",
        description:
          "Membantu masyarakat memperoleh informasi mengenai layanan perlindungan dan melakukan koordinasi awal dengan pihak terkait.",
      },
      {
        id: "CASE-005",
        title: "Edukasi Hak Perempuan dan Mekanisme Perlindungan",
        category: "Edukasi Hukum",
        status: "Selesai",
        year: "2026",
        date: "20 Februari 2026",
        description:
          "Memberikan edukasi mengenai hak perempuan, bentuk-bentuk kekerasan, serta mekanisme pelaporan dan akses layanan perlindungan.",
      },
    ],
  },

  {
    id: "paralegal-03",
    name: "Baiq Apriyeni, SH.",
    role: "Paralegal",
    location: "Lingkok Berenge, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673773/baiq_apriyeni.png",
    bio: "Mendukung penguatan pemahaman masyarakat mengenai hak perempuan, perlindungan hukum, serta akses terhadap keadilan melalui konsultasi dan pendampingan awal.",
    cases: [
      {
        id: "CASE-006",
        title: "Konsultasi Awal terkait Perlindungan Perempuan",
        category: "Konsultasi Hukum",
        status: "Berjalan",
        year: "2026",
        date: "5 April 2026",
        description:
          "Memberikan informasi awal mengenai hak dan perlindungan hukum, sekaligus mengidentifikasi kebutuhan dukungan berdasarkan situasi yang disampaikan.",
      },
      {
        id: "CASE-007",
        title: "Informasi Hukum terkait Hak Perempuan",
        category: "Edukasi Hukum",
        status: "Selesai",
        year: "2026",
        date: "22 April 2026",
        description:
          "Memberikan penjelasan mengenai hak-hak perempuan dan pilihan layanan yang dapat dimanfaatkan ketika menghadapi permasalahan hukum.",
      },
    ],
  },

  {
    id: "paralegal-04",
    name: "Baiq Dian Oktapiana",
    role: "Paralegal",
    location: "Stuta, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673782/WhatsApp_Image_2026-07-10_at_13.55.27.jpg",
    bio: "Mendukung konsultasi awal, komunikasi dengan masyarakat, serta koordinasi rujukan kepada lembaga layanan sesuai kebutuhan pihak yang didampingi.",
    cases: [
      {
        id: "CASE-008",
        title: "Pendampingan Awal dan Identifikasi Kebutuhan Layanan",
        category: "Pendampingan Masyarakat",
        status: "Berjalan",
        year: "2026",
        date: "8 Mei 2026",
        description:
          "Melakukan komunikasi awal untuk memahami kebutuhan dukungan serta membantu menghubungkan pihak yang membutuhkan dengan layanan terkait.",
      },
      {
        id: "CASE-009",
        title: "Koordinasi Rujukan Kasus kepada Layanan Terkait",
        category: "Rujukan Layanan",
        status: "Dalam Proses",
        year: "2026",
        date: "19 Mei 2026",
        description:
          "Mendukung proses koordinasi dan komunikasi rujukan dengan mempertimbangkan kebutuhan serta persetujuan pihak yang didampingi.",
      },
    ],
  },

  {
    id: "paralegal-05",
    name: "Nurhasanah",
    role: "Paralegal",
    location: "Sabe, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673775/nurhasana.png",
    bio: "Berpartisipasi dalam edukasi hukum berbasis masyarakat, peningkatan kesadaran mengenai hak perempuan, serta penguatan kapasitas masyarakat dalam mengakses layanan perlindungan.",
    cases: [
      {
        id: "CASE-010",
        title: "Edukasi Masyarakat tentang Hak Perempuan",
        category: "Edukasi Hukum",
        status: "Selesai",
        year: "2026",
        date: "3 Juni 2026",
        description:
          "Mendukung penyampaian informasi kepada masyarakat mengenai hak perempuan, pencegahan kekerasan, dan pentingnya akses terhadap layanan perlindungan.",
      },
    ],
  },

  {
    id: "paralegal-06",
    name: "Laely Rahmawati",
    role: "Paralegal",
    location: "Janggawana, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673774/laely.png",
    bio: "Mendukung koordinasi pendampingan, penyampaian informasi hukum, serta penguatan akses masyarakat terhadap layanan yang tersedia.",
    cases: [
      {
        id: "CASE-011",
        title: "Konsultasi Informasi dan Akses Layanan",
        category: "Konsultasi Hukum",
        status: "Berjalan",
        year: "2026",
        date: "12 Juni 2026",
        description:
          "Memberikan informasi awal mengenai pilihan layanan yang tersedia dan membantu mengidentifikasi langkah dukungan yang dapat diakses.",
      },
    ],
  },

  {
    id: "paralegal-07",
    name: "Samsul Haris",
    role: "Paralegal",
    location: "Stuta, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673765/WhatsApp_Image_2026-07-28_at_22.48.18.jpg",
    bio: "Mendukung kegiatan paralegal di tingkat komunitas melalui koordinasi masyarakat, penyebaran informasi hukum, dan penghubungan dengan layanan pendampingan.",
    cases: [
      {
        id: "CASE-012",
        title: "Koordinasi Informasi Layanan di Tingkat Komunitas",
        category: "Pendampingan Masyarakat",
        status: "Selesai",
        year: "2026",
        date: "18 Juni 2026",
        description:
          "Membantu menyampaikan informasi mengenai keberadaan layanan pendampingan dan mekanisme memperoleh bantuan kepada masyarakat.",
      },
    ],
  },

  {
    id: "paralegal-08",
    name: "Agus Hariadi",
    role: "Paralegal",
    location: "Lingkok Berenge, Janapria",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673769/WhatsApp_Image_2026-07-29_at_14.17.32.jpg",
    bio: "Berperan dalam koordinasi pendampingan berbasis komunitas serta membantu masyarakat memperoleh informasi dan akses terhadap layanan yang dibutuhkan.",
    cases: [
      {
        id: "CASE-013",
        title: "Pemetaan Kebutuhan Informasi dan Layanan Masyarakat",
        category: "Pendampingan Masyarakat",
        status: "Dalam Proses",
        year: "2026",
        date: "2 Juli 2026",
        description:
          "Mendukung identifikasi kebutuhan informasi masyarakat dan mengoordinasikan akses terhadap layanan pendampingan yang relevan.",
      },
    ],
  },

  {
    id: "paralegal-09",
    name: "Saeti",
    role: "Paralegal",
    location: "Batu Layar",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673761/WhatsApp_Image_2026-07-14_at_10.11.09.jpg",
    bio: "Mendukung penguatan akses informasi hukum di lingkungan masyarakat serta membantu koordinasi awal bagi warga yang membutuhkan layanan pendampingan.",
    cases: [
      {
        id: "CASE-014",
        title: "Penyampaian Informasi Layanan Perlindungan Perempuan",
        category: "Edukasi Hukum",
        status: "Selesai",
        year: "2026",
        date: "14 Juli 2026",
        description:
          "Mendukung penyebaran informasi mengenai layanan perlindungan perempuan, mekanisme konsultasi, dan akses bantuan bagi masyarakat.",
      },
    ],
  },

  {
    id: "paralegal-10",
    name: "Suhaeli",
    role: "Paralegal",
    location: "Jenggala, KLU",
    avatar:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793673779/suhaeli.png",
    bio: "Mendukung koordinasi pendampingan dan penguatan akses masyarakat terhadap informasi hukum serta layanan perlindungan di wilayah komunitas.",
    cases: [
      {
        id: "CASE-015",
        title: "Koordinasi Akses Informasi dan Pendampingan",
        category: "Rujukan Layanan",
        status: "Berjalan",
        year: "2026",
        date: "21 Juli 2026",
        description:
          "Membantu mengidentifikasi kebutuhan informasi dan mengoordinasikan akses terhadap layanan pendampingan yang sesuai dengan kebutuhan masyarakat.",
      },
    ],
  },
];

export const ROUTES: Record<
  PageRoute,
  { path: string; title: string; description: string }
> = {
  beranda: {
    path: "/",
    title: "Transformasi Perempuan Dotcom | Pemberdayaan Perempuan",
    description:
      "TPDotcom menyediakan informasi, edukasi, dan sumber daya untuk mendukung pemberdayaan perempuan serta ruang digital yang aman dan inklusif.",
  },

  tentang_kami: {
    path: "/tentang-kami",
    title: "Tentang Kami | Transformasi Perempuan Dotcom",
    description:
      "Kenali Transformasi Perempuan Dotcom, organisasi yang berfokus pada pemberdayaan perempuan, edukasi, dan ruang digital yang aman.",
  },

  volunteer: {
    path: "/volunteer",
    title: "Volunteer | Transformasi Perempuan Dotcom",
    description:
      "Kenali volunteer TPDotcom dan kontribusi mereka dalam mendukung pemberdayaan perempuan serta masyarakat yang inklusif.",
  },

  paralegal: {
    path: "/paralegal",
    title: "Paralegal | Transformasi Perempuan Dotcom",
    description:
      "Kenali tim paralegal TPDotcom, ruang lingkup pendampingan, dan informasi kasus yang ditangani.",
  },

  paralegal_kasus: {
    path: "/paralegal/kasus",
    title: "Kasus Paralegal | Transformasi Perempuan Dotcom",
    description:
      "Informasi ringkasan kasus yang ditangani oleh tim paralegal TPDotcom.",
  },

  program: {
    path: "/program",
    title: "Program Pemberdayaan Perempuan | TPDotcom",
    description:
      "Jelajahi program dan kegiatan TPDotcom untuk mendukung pemberdayaan perempuan, literasi digital, dan lingkungan yang aman.",
  },

  detail_program_keamanan_digital: {
    path: "/program/keamanan-digital",
    title: "Program Keamanan Digital | TPDotcom",
    description:
      "Informasi program TPDotcom untuk meningkatkan pengetahuan dan kemampuan keamanan digital bagi perempuan dan masyarakat.",
  },

  dokumentasi_kegiatan_program: {
    path: "/program/dokumentasi-kegiatan",
    title: "Dokumentasi Kegiatan Program | TPDotcom",
    description:
      "Lihat dokumentasi kegiatan dan pelaksanaan program Transformasi Perempuan Dotcom.",
  },

  isu_pengetahuan: {
    path: "/informasi-edukasi",
    title: "Informasi dan Edukasi | Transformasi Perempuan Dotcom",
    description:
      "Temukan informasi dan materi edukasi tentang kekerasan berbasis gender online, keamanan digital, teknologi, dan isu perempuan.",
  },

  kategori_kbgo: {
    path: "/informasi-edukasi/kbgo",
    title: "Kekerasan Berbasis Gender Online (KBGO) | TPDotcom",
    description:
      "Pelajari bentuk kekerasan berbasis gender online, pencegahan, keamanan digital, dan sumber informasi bagi penyintas.",
  },

  publikasi: {
    path: "/publikasi",
    title: "Publikasi dan Laporan | Transformasi Perempuan Dotcom",
    description:
      "Akses publikasi, laporan, panduan, dan sumber pengetahuan dari Transformasi Perempuan Dotcom.",
  },

  detail_publikasi_laporan_tahunan_2024: {
    path: "/publikasi/laporan-tahunan-2024",
    title: "Laporan Tahunan 2024 | TPDotcom",
    description:
      "Baca laporan tahunan 2024 Transformasi Perempuan Dotcom untuk mengetahui dokumentasi dan informasi kegiatan organisasi.",
  },

  detail_panduan_protokol_penghapusan_ncii: {
    path: "/publikasi/panduan-penghapusan-ncii",
    title: "Panduan Penghapusan NCII | TPDotcom",
    description:
      "Panduan mengenai langkah dan sumber bantuan terkait penghapusan konten intim nonkonsensual atau NCII.",
  },

  kontak_pengaduan: {
    path: "/kontak-pengaduan",
    title: "Kontak dan Pengaduan | Transformasi Perempuan Dotcom",
    description:
      "Temukan informasi kontak dan jalur pengaduan TPDotcom. Perhatikan privasi dan keamanan saat mencari bantuan.",
  },

  umkm: {
    path: "/umkm",
    title: "UMKM | Direktori Usaha TPDotcom",
    description:
      "Temukan produk dan layanan UMKM binaan TPDotcom. Kenali profil pelaku usaha dan katalog produk lokal.",
  },

  umkm_katalog: {
    path: "/umkm/:slug",
    title: "Katalog UMKM | TPDotcom",
    description: "Jelajahi katalog produk dan layanan UMKM binaan TPDotcom.",
  },
};

export const umkmBusinesses: UmkmBusiness[] = [
  {
    id: "keripik-talas",
    number: "01",
    name: "Keripik Talas",
    owner: "Harianti",
    location: "Desa Sabe, Janaprie, Nusa Tenggara Barat",
    category: "Makanan dan Camilan",
    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793938628/WhatsApp_Image_2026-11-04_at_11.18.47.jpg",
    description:
      "Usaha olahan pangan lokal yang menghadirkan camilan berbahan dasar talas dengan cita rasa khas dan pilihan varian rasa.",
    products: [
      {
        id: "talas-original",
        name: "Keripik Talas Original",
        description: "Keripik talas dengan cita rasa gurih dan renyah.",
        price: "Rp10.000",
        category: "Camilan",
        image:
          "https://res.cloudinary.com/obyq9wil/image/upload/v1793938619/WhatsApp_Image_2026-07-09_at_15.14.35_121.jpg",
        type: "produk",
      },
      {
        id: "talas-balado",
        name: "Keripik Talas Balado",
        description: "Keripik talas dengan bumbu balado.",
        price: "Rp12.000",
        category: "Camilan",
        type: "produk",
        image:
          "https://res.cloudinary.com/obyq9wil/image/upload/v1793938622/WhatsApp_Image_2026-07-09_at_15.14.35.jpg",
      },
      {
        id: "talas-jagung-manis",
        name: "Keripik Talas Jagung Manis",
        description: "Keripik talas dengan bumbu jagung manis.",
        price: "Rp12.000",
        category: "Camilan",
        image:
          "https://res.cloudinary.com/obyq9wil/image/upload/v1793938624/WhatsApp_Image_2026-07-09_at_15.14.38DAFDSFDSF.jpg",
        type: "produk",
      },
    ],
  },
  {
    id: "soto",
    number: "02",
    name: "Soto Nusantara",
    owner: "Meme Ito",
    location: "Desa Sabe, Janaprie, Nusa Tenggara Barat",
    category: "Kuliner",
    coverImage:
      "https://res.cloudinary.com/obyq9wil/image/upload/v1793762776/WhatsApp_Image_2026-11-04_at_11.18.48.jpg",
    description:
      "Usaha kuliner yang menyajikan hidangan soto dengan racikan bumbu dan cita rasa khas. Menghadirkan pilihan menu untuk kebutuhan makan sehari-hari.",
    products: [
      {
        id: "soto-ayam",
        name: "Soto Ayam Kampung",
        description: "Soto ayam dengan kuah gurih dan pelengkap pilihan.",
        price: "Rp12.000",
        category: "Menu utama",
        image:
          "https://res.cloudinary.com/obyq9wil/image/upload/v1793762776/WhatsApp_Image_2026-11-04_at_11.18.48.jpg",
        type: "produk",
      },
    ],
  },
  {
    id: "english-course",
    number: "03",
    name: "English Learning Course",
    owner: "Hulmayadi Rahman",
    location: "Desa Sabe, Janaprie, Nusa Tenggara Barat",
    category: "Pendidikan dan Pelatihan",
    description:
      "Layanan pembelajaran bahasa Inggris yang menyediakan kelas untuk berbagai tingkat kemampuan, mulai dari pemula hingga kebutuhan komunikasi profesional.",
    products: [
      // {
      //   id: "english-basic",
      //   name: "Basic English",
      //   description:
      //     "Kelas dasar untuk mengenal kosakata, tata bahasa, dan percakapan sederhana.",
      //   price: "Mulai Rp150.000",
      //   category: "Kelas",
      //   type: "layanan",
      // },
      // {
      //   id: "english-speaking",
      //   name: "Speaking Class",
      //   description:
      //     "Kelas praktik percakapan untuk meningkatkan kepercayaan diri berbicara bahasa Inggris.",
      //   price: "Mulai Rp200.000",
      //   category: "Kelas",
      //   type: "layanan",
      // },
      // {
      //   id: "english-private",
      //   name: "Private English Course",
      //   description:
      //     "Pembelajaran personal dengan materi yang disesuaikan kebutuhan peserta.",
      //   price: "Hubungi pemilik",
      //   category: "Kelas privat",
      //   type: "layanan",
      // },
    ],
  },
];
