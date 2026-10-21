import {
  ArrowDownRight,
  ArrowRight,
  Check,
  CheckCircle2,
  HeartHandshake,
  LockKeyhole,
  Scale,
} from "lucide-react";
import React from "react";
import { TEAM_MEMBERS } from "../data/content";
import { PageRoute } from "../types";

interface TentangKamiViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenDonation: () => void;
}

type TeamMember = (typeof TEAM_MEMBERS)[number];

const values = [
  {
    number: "01",
    title: "Berpihak pada manusia",
    desc: "Kami mendengarkan pengalaman setiap orang tanpa menghakimi. Martabat, pilihan, dan kebutuhan orang yang didampingi menjadi pertimbangan utama.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Persetujuan dan kendali",
    desc: "Informasi disampaikan dengan jelas agar setiap orang dapat memahami pilihan yang tersedia dan menentukan langkah sesuai kebutuhannya.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Menjaga privasi",
    desc: "Informasi pribadi perlu ditangani secara hati-hati. Pengumpulan, penggunaan, dan pembagian data harus mempertimbangkan persetujuan serta keamanan.",
    icon: LockKeyhole,
  },
  {
    number: "04",
    title: "Keadilan yang inklusif",
    desc: "Kami memperhatikan perbedaan pengalaman, akses, dan hambatan yang dihadapi perempuan, anak, penyandang disabilitas, serta kelompok lainnya.",
    icon: Scale,
  },
];

const missions = [
  "Memperkuat pemberdayaan perempuan melalui peningkatan literasi dan kapasitas digital.",
  "Meningkatkan pemahaman masyarakat mengenai hak asasi manusia, kesetaraan, dan perlindungan kelompok rentan.",
  "Mendorong partisipasi perempuan, generasi muda, penyandang disabilitas, dan lanjut usia dalam pembangunan.",
  "Melakukan advokasi untuk mendorong pemenuhan hak, akses yang setara, dan kehidupan masyarakat yang lebih adil.",
];

const memberGroups = [
  {
    level: 1,
    title: "Pengawas",
    description: "Menjalankan fungsi pengawasan organisasi.",
    size: "small" as const,
  },
  {
    level: 2,
    title: "Ketua",
    description: "Memimpin arah dan koordinasi organisasi.",
    size: "leader" as const,
  },
  {
    level: 3,
    title: "Pengurus Inti",
    description: "Menggerakkan tata kelola dan pelaksanaan kerja organisasi.",
    size: "medium" as const,
  },
];

function MemberCard({
  member,
  size = "medium",
}: {
  member: TeamMember;
  size?: "small" | "leader" | "medium" | "compact";
}) {
  const sizeClasses = {
    small: "aspect-[4/5] max-w-[280px]",
    leader: "aspect-[4/5] max-w-[340px]",
    medium: "aspect-[4/5]",
    compact: "aspect-[4/5]",
  };

  return (
    <article
      className={`group relative isolate overflow-hidden border border-stone-200 bg-stone-100 ${sizeClasses[size]}`}
    >
      <img
        src={member.avatar}
        alt={`Foto ${member.name}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent opacity-90" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="inline-block max-w-full border border-white/35 bg-slate-950/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          {member.role}
        </span>

        <h4 className="mt-3 text-base font-semibold leading-snug text-white sm:text-lg">
          {member.name}
        </h4>

        {member.bio && (
          <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-white/80 sm:text-sm">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}

function MemberGroup({
  level,
  title,
  description,
  size,
}: {
  level: number;
  title: string;
  description: string;
  size: "small" | "leader" | "medium";
}) {
  const members = TEAM_MEMBERS.filter((member) => member.level === level);

  if (members.length === 0) return null;

  const isLeader = size === "leader";

  return (
    <section className="py-9 sm:py-12">
      <div className="mb-6 flex flex-col gap-2 border-b border-stone-300 pb-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
            Struktur organisasi
          </p>
          <h3 className="font-editorial text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <div
        className={
          isLeader
            ? "flex justify-center"
            : level === 3
              ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-wrap justify-center gap-5"
        }
      >
        {members.map((member) => (
          <div
            key={`${member.level}-${member.name}`}
            className={
              isLeader
                ? "w-full max-w-[340px]"
                : level === 3
                  ? "min-w-0"
                  : "w-full max-w-[280px]"
            }
          >
            <MemberCard member={member} size={size} />
          </div>
        ))}
      </div>
    </section>
  );
}

export const TentangKamiView: React.FC<TentangKamiViewProps> = ({
  onNavigate,
  onOpenDonation,
}) => {
  const anggota = TEAM_MEMBERS.filter((member) => member.level === 4);
  const staf = TEAM_MEMBERS.filter((member) => member.level === 5);

  return (
    <main className="pb-20 text-slate-900">
      {/* INTRODUCTION */}
      <section className="border-b border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.75fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-800" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                  Tentang TPDotcom
                </p>
              </div>

              <h1 className="max-w-3xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Perubahan dimulai ketika setiap orang{" "}
                <span className="text-blue-800">
                  punya ruang untuk berdaya.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Transformasi Perempuan Dotcom bekerja dalam pemberdayaan
                perempuan dan penguatan kapasitas masyarakat. Kami mendorong
                akses terhadap pengetahuan, partisipasi yang bermakna, serta
                pemanfaatan teknologi yang lebih aman dan inklusif.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <button
                  type="button"
                  onClick={() => onNavigate("program")}
                  className="group inline-flex items-center gap-2 border-b border-blue-800 pb-1.5 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
                >
                  Kenali program kami
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate("kontak_pengaduan")}
                  className="inline-flex items-center gap-2 pb-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                >
                  Hubungi kami
                  <ArrowDownRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-stone-300 pt-5 sm:mt-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Fokus kerja
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium text-slate-700 sm:gap-x-5 sm:text-sm">
              <span>Pemberdayaan perempuan</span>
              <span className="text-stone-400">/</span>
              <span>Literasi digital</span>
              <span className="text-stone-400">/</span>
              <span>Partisipasi masyarakat</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
              Arah organisasi
            </p>

            <h2 className="max-w-md font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Masyarakat yang berdaya, setara, dan inklusif.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Kami percaya bahwa kesempatan untuk belajar, berpartisipasi, dan
              mengakses hak harus terbuka bagi setiap orang.
            </p>

            <div className="mt-8 border-l-2 border-blue-800 pl-4">
              <p className="text-sm leading-6 text-slate-700">
                Teknologi dan pembangunan seharusnya memperluas kesempatan,
                bukan menciptakan hambatan baru.
              </p>
            </div>
          </div>

          <div className="border-t border-stone-300 lg:border-l lg:border-t-0 lg:pl-10">
            <div className="flex items-center justify-between border-b border-stone-300 py-5">
              <h3 className="font-editorial text-2xl font-semibold">
                Misi kami
              </h3>
              <span className="text-xs text-slate-400">01 — 04</span>
            </div>

            <ol className="divide-y divide-stone-200">
              {missions.map((mission, index) => (
                <li
                  key={mission}
                  className="group grid grid-cols-[36px_1fr] gap-4 py-5 sm:grid-cols-[48px_1fr] sm:gap-5"
                >
                  <span className="pt-0.5 font-editorial text-lg text-blue-800">
                    0{index + 1}
                  </span>
                  <p className="max-w-2xl text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-950 sm:text-base">
                    {mission}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL VALUES */}
      <section className="border-y border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                Prinsip kerja
              </p>
              <h2 className="max-w-xl font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
                Bukan hanya apa yang kami kerjakan, tetapi bagaimana kami
                melakukannya.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
              Cara bekerja sama pentingnya dengan tujuan yang ingin dicapai.
              Setiap kegiatan perlu menghormati martabat, pilihan, dan keragaman
              pengalaman masyarakat.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="border-t border-stone-300 py-6 sm:py-7"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-editorial text-sm text-blue-800">
                      {value.number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-500"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-editorial text-xl font-semibold leading-snug">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONAL STRUCTURE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-6 border-b border-stone-300 pb-8 sm:pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
              Orang-orang di balik kerja kami
            </p>
            <h2 className="font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
              Struktur kepengurusan TPDotcom
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 lg:justify-self-end">
            Organisasi berjalan melalui kerja bersama, pembagian peran, dan
            kontribusi orang-orang yang mendukung pemberdayaan perempuan serta
            penguatan kapasitas masyarakat.
          </p>
        </div>

        <div className="divide-y divide-stone-300">
          {memberGroups.map((group) => (
            <MemberGroup
              key={group.level}
              level={group.level}
              title={group.title}
              description={group.description}
              size={group.size}
            />
          ))}
        </div>

        {(anggota.length > 0 || staf.length > 0) && (
          <div className="mt-3 grid gap-12 border-t border-stone-300 lg:grid-cols-2 lg:gap-10">
            {anggota.length > 0 && (
              <section className="pt-9 sm:pt-12">
                <div className="mb-6 border-b border-stone-300 pb-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                    Berkontribusi bersama
                  </p>
                  <h3 className="font-editorial text-2xl font-semibold">
                    Anggota organisasi
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Mendukung pelaksanaan program dan kegiatan TPDotcom.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {anggota.map((member) => (
                    <MemberCard
                      key={`${member.level}-${member.name}`}
                      member={member}
                      size="compact"
                    />
                  ))}
                </div>
              </section>
            )}

            {staf.length > 0 && (
              <section
                className={`pt-9 sm:pt-12 ${
                  anggota.length > 0
                    ? "lg:border-l lg:border-stone-300 lg:pl-8"
                    : ""
                }`}
              >
                <div className="mb-6 border-b border-stone-300 pb-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                    Pelaksanaan program
                  </p>
                  <h3 className="font-editorial text-2xl font-semibold">
                    Staf dan koordinator
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Mendukung koordinasi program, kebutuhan teknis, dan
                    operasional organisasi.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {staf.map((member) => (
                    <MemberCard
                      key={`${member.level}-${member.name}`}
                      member={member}
                      size="compact"
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </section>

      {/* ACCOUNTABILITY */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-400" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-xs">
                  Akuntabilitas publik
                </p>
              </div>

              <h2 className="max-w-2xl font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Kepercayaan dibangun melalui keterbukaan dan tanggung jawab.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Informasi mengenai organisasi, program, dan publikasi menjadi
                bagian penting agar masyarakat dapat mengenali kerja TPDotcom
                serta memahami kegiatan yang kami lakukan.
              </p>
            </div>

            <div className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8">
              <p className="text-sm leading-7 text-slate-300">
                Untuk mengetahui informasi organisasi dan materi yang telah
                dipublikasikan, kunjungi halaman publikasi TPDotcom.
              </p>

              <button
                type="button"
                onClick={() => onNavigate("publikasi")}
                className="group mt-6 inline-flex items-center gap-3 border-b border-blue-300 pb-2 text-sm font-semibold text-white transition-colors hover:text-blue-200"
              >
                Lihat publikasi
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-sm font-semibold text-white">
                Informasi yang jelas
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                Menyajikan informasi organisasi dan kegiatan dengan bahasa yang
                mudah dipahami.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Tanggung jawab bersama
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                Mendorong praktik kerja yang bertanggung jawab kepada masyarakat
                dan mitra.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Dokumentasi kegiatan
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-400">
                Menggunakan publikasi untuk membantu masyarakat mengikuti
                kegiatan dan pembelajaran organisasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-5 pt-4 sm:px-8 sm:pt-8 lg:px-12">
        <div className="relative overflow-hidden border border-stone-300 bg-[#f8f7f3] px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                Bergerak bersama
              </p>
              <h2 className="font-editorial text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                Perubahan yang berarti membutuhkan partisipasi banyak pihak.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                Kenali program kami, bagikan pengetahuan, atau dukung inisiatif
                pemberdayaan yang kami jalankan.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate("program")}
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
              >
                Jelajahi program
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={onOpenDonation}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500 hover:bg-stone-100"
              >
                <Check className="h-4 w-4" />
                Dukung kerja kami
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
