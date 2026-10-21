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
  ProgramActivity,
  ProgramItem,
  PublicationItem,
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
    id: "legal-digital-empowerment-communities",
    title: "Legal and Digital Empowerment for Communities",
    typeKey: "pelatihan",
    date: "Informasi tanggal belum tersedia",
    location: "Informasi lokasi belum tersedia",
    participants: "Informasi peserta belum tersedia",
    description:
      "Program pemberdayaan masyarakat melalui penguatan akses terhadap pengetahuan hukum dan keterampilan digital. Informasi detail kegiatan dan dokumentasi dapat ditambahkan setelah diverifikasi dari arsip TPDotcom.",
    coverImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000",
    relatedProgramId: "",
    photos: [],
  },
  {
    id: "workshop-kewirausahaan-digital-inklusif",
    title: "Workshop Kewirausahaan Berbasis Digital",
    typeKey: "workshop",
    date: "Informasi tanggal belum tersedia",
    location: "Informasi lokasi belum tersedia",
    participants: "Kelompok rentan dan penyandang disabilitas",
    description:
      "Workshop untuk mendukung kelompok rentan dan penyandang disabilitas dalam mengembangkan keterampilan kewirausahaan berbasis digital. Rincian pelaksanaan dan foto kegiatan perlu dilengkapi berdasarkan dokumentasi resmi.",
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    relatedProgramId: "",
    photos: [],
  },
  {
    id: "komunitas-orang-muda-melek-teknologi",
    title: "Pembentukan Komunitas Orang Muda Melek Teknologi",
    typeKey: "kegiatan_lapangan",
    date: "Informasi tanggal belum tersedia",
    location: "Informasi lokasi belum tersedia",
    participants: "Orang muda",
    description:
      "Inisiatif pembentukan komunitas orang muda untuk mendorong pemahaman, keterampilan, dan pemanfaatan teknologi secara lebih baik. Informasi kegiatan lanjutan dapat ditambahkan sesuai arsip resmi organisasi.",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    relatedProgramId: "",
    photos: [],
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "laporan-tahunan-2024",
    title:
      "Mengurai Bayang-bayang Kekerasan Digital: Laporan Situasi KBGO di Indonesia 2024",
    subtitle:
      "Catatan Tahunan Advokasi, Data Kasus, dan Rekomendasi Kebijakan TPDcom",
    type: "Laporan Tahunan",
    year: 2024,
    date: "10 Desember 2024",
    pages: 148,
    fileSize: "4.8 MB",
    summary:
      "Laporan komprehensif mendokumentasikan 1.412 aduan kekerasan digital sepanjang 2024. Menyoroti lonjakan 42% kasus pemerasan konten intim (sextortion) dan ancaman baru pornografi berbasis Generatif AI/Deepfake di kalangan pelajar dan perempuan muda.",
    keyFindings: [
      "1.412 aduan kasus diterima sepanjang 2024, naik 38% dibandingkan tahun sebelumnya",
      "WhatsApp (44%) dan Telegram (29%) menjadi kanal teratas distribusi konten intim non-konsensual",
      "78% korban berusia 18–29 tahun, dengan 14% di antaranya adalah anak di bawah usia 18 tahun",
      "Hambatan terbesar penegakan hukum: lambatnya respons platform teknologi dan reviktimisasi saat pelaporan kepolisian",
    ],
    downloadUrl: "#",
    isFeatured: true,
  },
  {
    id: "panduan-protokol-ncii",
    title: "Panduan Protokol Penghapusan Konten Intim Non-Konsensual (NCII)",
    subtitle:
      "Langkah Taktis Mandiri & Institusional Menghapus Foto/Video Tanpa Persetujuan",
    type: "Panduan Praktis",
    year: 2024,
    date: "15 September 2024",
    pages: 64,
    fileSize: "2.4 MB",
    summary:
      "Buku saku praktis langkah demi langkah bagi korban dan pendamping kasus untuk menghapus foto/video intim dari internet secara mandiri dan legal, memanfaatkan teknologi hash StopNCII serta jalur eskalasi darurat.",
    keyFindings: [
      "Penjelasan tuntas cara kerja StopNCII.org tanpa pernah menyerahkan foto/video asli ke server pihak ketiga",
      "Panduan pengamanan bukti elektronik (screenshot URL, header metadata, tanggal) yang sah di pengadilan",
      "Format draf surat somasi dan pelaporan langsung ke perwakilan platform Meta, X, Google, dan Telegram",
      "Hak-hak ganti rugi (restitusi) dan pemulihan nama baik bagi korban berdasarkan Pasal 30 UU TPKS",
    ],
    downloadUrl: "#",
    isFeatured: true,
  },
  {
    id: "policy-brief-uu-tpks-kbgo",
    title:
      "Kertas Kebijakan: Akselerasi Peraturan Pelaksana UU TPKS untuk Kasus Kekerasan Digital",
    subtitle:
      "Menutup Celah Hukum Penanganan Bukti Elektronik & Pelindungan Saksi Korban",
    type: "Kertas Kebijakan",
    year: 2024,
    date: "28 Juli 2024",
    pages: 42,
    fileSize: "1.9 MB",
    summary:
      "Analisis kritis terhadap lambatnya pengesahan RPP tentang penanganan kekerasan seksual berbasis elektronik, serta rekomendasi standarisasi SOP bagi aparat penegak hukum agar tidak menuntut bukti materiil yang memalukan korban.",
    keyFindings: [
      "Urgennya mandat kejaksaan dan kepolisian untuk mengakui sertifikasi hash digital sebagai bukti otentik",
      "Pentingnya integrasi Dana Bantuan Korban (Victim Trust Fund) untuk biaya pemulihan psikologis trauma digital",
    ],
    downloadUrl: "#",
  },
  {
    id: "buku-saku-keamanan-digital-mahasiswa",
    title: "Buku Saku: Menjaga Kedaulatan Digital di Kampus",
    subtitle:
      "Panduan Mengenali, Menghindari, dan Melawan KBGO bagi Civitas Academica",
    type: "Panduan Praktis",
    year: 2023,
    date: "18 November 2023",
    pages: 56,
    fileSize: "3.1 MB",
    summary:
      "Pedoman edukasi bagi Satgas PPKS (Pencegahan dan Penanganan Kekerasan Seksual) di perguruan tinggi untuk menangani kasus kebocoran data, grup chat perpeloncoan seksual, dan pelecehan daring di lingkungan kampus.",
    keyFindings: [
      "Alur penanganan kasus KBGO di level universitas dengan menjaga kerahasiaan identitas korban",
      "Checklist audit keamanan akun media sosial organisasi mahasiswa",
    ],
    downloadUrl: "#",
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
    level: 2,
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
    level: 4,
  },
  {
    name: "Hulmayadi Rahman",
    role: "Anggota",
    bio: "Mendukung pelaksanaan kegiatan, kolaborasi dengan pemangku kepentingan, serta penguatan inisiatif pemberdayaan perempuan dan masyarakat.",
    avatar: hulmayadiPhoto,
    level: 4,
  },
  {
    name: "Lalu Ocky Saktiya Luhung",
    role: "Koordinator Keuangan",
    bio: "Mengoordinasikan kebutuhan operasional keuangan, memantau pencatatan transaksi, serta membantu menyiapkan data dan dokumen pendukung pelaporan keuangan.",
    avatar: okiPhoto,
    level: 5,
  },
  {
    name: "Nesti Diayu",
    role: "Koordinator Umum",
    bio: "Mengoordinasikan kebutuhan operasional organisasi, mendukung pelaksanaan kegiatan, serta memastikan kebutuhan administrasi dan logistik terkelola dengan baik.",
    avatar: nestiPhoto,
    level: 5,
  },
  {
    name: "Lalu Ferdian Yusuf",
    role: "Koordinator IT",
    bio: "Mengoordinasikan pengembangan dan pemeliharaan platform digital TPDotcom, mengelola kebutuhan teknologi informasi, serta mendukung penyebaran informasi dan edukasi digital.",
    avatar: ferdiPhoto,
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
  {
    name: "Kanal Terenkripsi Signal TPDcom",
    number: "+62 812-9900-8721",
    description:
      "Pilihan paling aman untuk pengiriman dokumen bukti sensitif dengan enkripsi end-to-end tanpa rekaman metadata",
    type: "signal",
  },
  {
    name: "Layanan SAPA 129 (KemenPPPA)",
    number: "129 / +62 8111-129-129",
    description:
      "Saluran resmi penanganan kekerasan perempuan dan anak pemerintah RI",
    type: "phone",
  },
  {
    name: "LPSK (Lembaga Perlindungan Saksi & Korban)",
    number: "148 / +62 857-7001-0048",
    description:
      "Permohonan perlindungan fisik, hukum, dan pemulihan medis korban kekerasan seksual",
    type: "phone",
  },
];
