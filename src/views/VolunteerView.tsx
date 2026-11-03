import {
  ArrowDownRight,
  ArrowRight,
  HeartHandshake,
  HandHeart,
  Users,
  Lightbulb,
  Megaphone,
  Laptop,
} from "lucide-react";
import React from "react";
import { VolunteerRegistrationForm } from "../components/VolunteerRegistrationForm";

interface VolunteerMember {
  name: string;
  role: string;
  location?: string;
  avatar: string;
  bio?: string;
}

const volunteerMembers: VolunteerMember[] = [
  {
    name: "Nama Volunteer 1",
    role: "Volunteer",
    location: "Mataram",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    bio: "Berpartisipasi dalam mendukung kegiatan dan program pemberdayaan masyarakat.",
  },
  {
    name: "Nama Volunteer 2",
    role: "Volunteer",
    location: "Lombok Barat",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    bio: "Mendukung pelaksanaan kegiatan edukasi dan penguatan kapasitas masyarakat.",
  },
  {
    name: "Nama Volunteer 3",
    role: "Volunteer",
    location: "Lombok Tengah",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800",
    bio: "Terlibat dalam kegiatan sosial dan kampanye kesetaraan.",
  },
  {
    name: "Nama Volunteer 4",
    role: "Volunteer",
    location: "Lombok Timur",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
    bio: "Mendukung kegiatan lapangan dan keterlibatan masyarakat.",
  },
  {
    name: "Nama Volunteer 5",
    role: "Volunteer",
    location: "Mataram",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    bio: "Berkontribusi dalam pengembangan materi dan publikasi kegiatan.",
  },
  {
    name: "Nama Volunteer 6",
    role: "Volunteer",
    location: "Lombok Utara",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800",
    bio: "Mendukung perluasan informasi dan partisipasi masyarakat.",
  },
];

const volunteerAreas = [
  {
    number: "01",
    title: "Kegiatan dan Program",
    desc: "Mendukung persiapan, pelaksanaan, dan dokumentasi kegiatan organisasi bersama tim.",
    icon: Users,
  },
  {
    number: "02",
    title: "Edukasi dan Literasi",
    desc: "Membantu menyebarluaskan pengetahuan mengenai kesetaraan, hak, dan literasi digital.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Kampanye dan Advokasi",
    desc: "Berpartisipasi dalam kampanye publik untuk mendorong kesadaran dan perubahan sosial.",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Dukungan Digital",
    desc: "Mendukung kebutuhan komunikasi, publikasi, desain, dan pengelolaan informasi digital.",
    icon: Laptop,
  },
];

function VolunteerCard({ member }: { member: VolunteerMember }) {
  return (
    <article className="group relative isolate aspect-[4/5] overflow-hidden border border-stone-200 bg-stone-100">
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

        <h3 className="mt-3 text-base font-semibold leading-snug text-white sm:text-lg">
          {member.name}
        </h3>

        {member.location && (
          <p className="mt-1 text-xs text-white/70">{member.location}</p>
        )}

        {member.bio && (
          <p className="mt-2 line-clamp-3 text-xs leading-5 text-white/80 sm:text-sm">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}

function VolunteerGroup({
  title,
  description,
  members,
}: {
  title: string;
  description: string;
  members: VolunteerMember[];
}) {
  if (members.length === 0) return null;

  return (
    <section className="py-9 sm:py-12">
      <div className="mb-6 flex flex-col gap-2 border-b border-stone-300 pb-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
            Komunitas TPDotcom
          </p>

          <h3 className="font-editorial text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h3>
        </div>

        <p className="max-w-sm text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <VolunteerCard key={`${member.name}-${index}`} member={member} />
        ))}
      </div>
    </section>
  );
}

export const VolunteerView: React.FC = () => {
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
                  Volunteer TPDotcom
                </p>
              </div>

              <h1 className="max-w-3xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Bersama menjadi bagian dari{" "}
                <span className="text-blue-800">perubahan yang berarti.</span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Volunteer TPDotcom merupakan individu yang secara sukarela
                memberikan waktu, tenaga, pengetahuan, dan keterampilan untuk
                mendukung pemberdayaan perempuan serta penguatan kapasitas
                masyarakat. Setiap kontribusi menjadi bagian penting dalam
                mewujudkan lingkungan yang lebih setara dan inklusif.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#daftar-volunteer"
                  className="group inline-flex items-center gap-2 border-b border-blue-800 pb-1.5 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
                >
                  Kenali volunteer kami
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#bergabung"
                  className="inline-flex items-center gap-2 pb-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                >
                  Bergabung bersama kami
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-stone-300 pt-5 sm:mt-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Kontribusi
            </span>

            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium text-slate-700 sm:gap-x-5 sm:text-sm">
              <span>Kepedulian</span>
              <span className="text-stone-400">/</span>
              <span>Kolaborasi</span>
              <span className="text-stone-400">/</span>
              <span>Perubahan sosial</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT VOLUNTEER */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
              Tentang volunteer
            </p>

            <h2 className="max-w-md font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Setiap orang punya sesuatu yang bisa diberikan.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Menjadi volunteer bukan hanya tentang membantu sebuah kegiatan.
              Ini adalah kesempatan untuk belajar, berbagi pengalaman,
              mengembangkan kemampuan, dan terlibat langsung dalam proses
              perubahan di masyarakat.
            </p>

            <div className="mt-8 border-l-2 border-blue-800 pl-4">
              <p className="text-sm leading-6 text-slate-700">
                Kami percaya perubahan dapat dimulai dari kontribusi kecil yang
                dilakukan bersama-sama.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border-t border-stone-300 pt-5">
              <HeartHandshake
                className="mb-5 h-6 w-6 text-blue-800"
                strokeWidth={1.5}
              />
              <h3 className="font-editorial text-xl font-semibold">
                Berbagi kepedulian
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Menggunakan waktu dan kemampuan untuk mendukung kegiatan yang
                memberikan manfaat bagi masyarakat.
              </p>
            </div>

            <div className="border-t border-stone-300 pt-5">
              <HandHeart
                className="mb-5 h-6 w-6 text-blue-800"
                strokeWidth={1.5}
              />
              <h3 className="font-editorial text-xl font-semibold">
                Tumbuh bersama
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Mendapatkan pengalaman, pengetahuan, dan kesempatan
                berkolaborasi dengan berbagai pihak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER AREAS */}
      <section className="border-y border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                Ruang kontribusi
              </p>

              <h2 className="max-w-xl font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
                Beragam cara untuk ikut berkontribusi.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
              Volunteer dapat terlibat sesuai minat, kemampuan, dan kebutuhan
              program yang sedang dijalankan oleh TPDotcom.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {volunteerAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="border-t border-stone-300 py-6 sm:py-7"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-editorial text-sm text-blue-800">
                      {area.number}
                    </span>

                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-500"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-editorial text-xl font-semibold leading-snug">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VOLUNTEER DIRECTORY */}
      <section
        id="daftar-volunteer"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 border-b border-stone-300 pb-8 sm:pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
              Orang-orang di balik kontribusi
            </p>

            <h2 className="font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
              Kenali volunteer TPDotcom.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 lg:justify-self-end">
            Mereka adalah individu yang meluangkan waktu dan kemampuan untuk
            mendukung berbagai kegiatan serta inisiatif TPDotcom. Setiap
            kontribusi memiliki arti dalam perjalanan organisasi.
          </p>
        </div>

        <VolunteerGroup
          title="Volunteer"
          description="Individu yang terlibat dan berkontribusi dalam berbagai kegiatan serta program TPDotcom."
          members={volunteerMembers}
        />
      </section>

      {/* JOIN CTA */}
      <VolunteerRegistrationForm />
    </main>
  );
};
