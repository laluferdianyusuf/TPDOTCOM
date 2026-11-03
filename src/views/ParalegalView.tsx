import React from "react";
import {
  ArrowRight,
  ArrowDownRight,
  HeartHandshake,
  ShieldCheck,
  Scale,
  Users,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";
import { PARALEGALS } from "../data/content";

interface ParalegalViewProps {
  onViewCases: (paralegalId: string) => void;
}

const paralegalAreas = [
  {
    number: "01",
    title: "Informasi Hukum",
    desc: "Memberikan informasi awal mengenai hak, prosedur, dan pilihan layanan yang dapat diakses masyarakat.",
    icon: Scale,
  },
  {
    number: "02",
    title: "Pendampingan Awal",
    desc: "Mendukung proses awal pendampingan dengan memperhatikan kebutuhan dan persetujuan pihak yang didampingi.",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Rujukan Layanan",
    desc: "Membantu menghubungkan masyarakat dengan lembaga atau layanan yang sesuai dengan kebutuhannya.",
    icon: Users,
  },
  {
    number: "04",
    title: "Pemantauan Kasus",
    desc: "Mendukung pencatatan, koordinasi, dan pemantauan perkembangan penanganan kasus.",
    icon: FileText,
  },
];

function ParalegalCard({
  member,
  onViewCases,
}: {
  member: (typeof PARALEGALS)[number];
  onViewCases: (id: string) => void;
}) {
  return (
    <article className="group overflow-hidden border border-stone-200 bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          src={member.avatar}
          alt={`Foto ${member.name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent opacity-90" />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <span className="inline-block border border-white/35 bg-slate-950/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {member.role}
          </span>

          <h3 className="mt-3 text-base font-semibold leading-snug text-white sm:text-lg">
            {member.name}
          </h3>

          <p className="mt-1 text-xs text-white/70">{member.location}</p>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <p className="line-clamp-3 min-h-[60px] text-sm leading-6 text-slate-600">
          {member.bio}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Kasus ditangani
            </p>

            <p className="mt-1 font-editorial text-2xl font-semibold text-slate-900">
              {member.cases.length}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onViewCases(member.id)}
            className="inline-flex items-center gap-2 border-b border-blue-800 pb-1 text-xs font-semibold text-blue-800 transition-colors hover:text-blue-950"
          >
            Lihat kasus
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export const ParalegalView: React.FC<ParalegalViewProps> = ({
  onViewCases,
}) => {
  const totalCases = PARALEGALS.reduce(
    (total, member) => total + member.cases.length,
    0,
  );

  const totalParalegals = PARALEGALS.length;

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
                  Paralegal TPDotcom
                </p>
              </div>

              <h1 className="max-w-3xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Mendukung akses keadilan dan{" "}
                <span className="text-blue-800">perlindungan bagi semua.</span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Paralegal TPDotcom berperan dalam mendukung masyarakat
                memperoleh informasi hukum, memahami hak-haknya, serta mengakses
                layanan pendampingan yang dibutuhkan.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="#daftar-paralegal"
                  className="group inline-flex items-center gap-2 border-b border-blue-800 pb-1.5 text-sm font-semibold text-blue-800"
                >
                  Kenali paralegal kami
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#kasus-ditangani"
                  className="inline-flex items-center gap-2 pb-1.5 text-sm font-medium text-slate-600"
                >
                  Informasi kasus
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-stone-300 pt-5 sm:mt-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Fokus pendampingan
            </span>

            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium text-slate-700 sm:gap-x-5 sm:text-sm">
              <span>Informasi hukum</span>
              <span className="text-stone-400">/</span>
              <span>Pendampingan</span>
              <span className="text-stone-400">/</span>
              <span>Akses keadilan</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Mengenal paralegal
            </p>

            <h2 className="max-w-md font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
              Mendampingi masyarakat untuk memahami hak dan pilihannya.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Paralegal menjadi bagian penting dalam memperluas akses informasi
              dan layanan bagi masyarakat. Pendampingan dilakukan dengan
              memperhatikan kebutuhan, persetujuan, keselamatan, dan kerahasiaan
              pihak yang didampingi.
            </p>

            <div className="mt-8 border-l-2 border-blue-800 pl-4">
              <p className="text-sm leading-6 text-slate-700">
                Setiap proses pendampingan harus menghormati keputusan dan
                kendali pihak yang didampingi.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border-t border-stone-300 pt-5">
              <ShieldCheck className="mb-5 h-6 w-6 text-blue-800" />
              <h3 className="font-editorial text-xl font-semibold">
                Pendampingan yang aman
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Mengutamakan keselamatan, persetujuan, privasi, dan kebutuhan
                pihak yang didampingi.
              </p>
            </div>

            <div className="border-t border-stone-300 pt-5">
              <BriefcaseBusiness className="mb-5 h-6 w-6 text-blue-800" />
              <h3 className="font-editorial text-xl font-semibold">
                Penanganan terkoordinasi
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Mendukung pencatatan dan koordinasi kasus bersama pihak atau
                layanan yang relevan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="border-y border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                Ruang lingkup kerja
              </p>

              <h2 className="max-w-xl font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
                Mendukung proses pendampingan secara menyeluruh.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
              Peran paralegal disesuaikan dengan kapasitas, kompetensi,
              kebutuhan masyarakat, dan ketentuan yang berlaku.
            </p>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {paralegalAreas.map((area) => {
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

                    <Icon className="h-5 w-5 text-slate-500" />
                  </div>

                  <h3 className="font-editorial text-xl font-semibold">
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

      {/* DIRECTORY */}
      <section
        id="daftar-paralegal"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="grid gap-6 border-b border-stone-300 pb-8 sm:pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Tim pendamping
            </p>

            <h2 className="font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
              Kenali paralegal TPDotcom.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 lg:justify-self-end">
            Kenali individu yang berkontribusi dalam mendukung informasi hukum,
            pendampingan, dan akses keadilan bagi masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {PARALEGALS.map((member) => (
            <ParalegalCard
              key={member.id}
              member={member}
              onViewCases={onViewCases}
            />
          ))}
        </div>
      </section>

      {/* CASE SUMMARY */}
      <section
        id="kasus-ditangani"
        className="border-y border-stone-300 bg-[#f8f7f3]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                Dokumentasi pendampingan
              </p>

              <h2 className="max-w-xl font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
                Kasus yang didukung oleh tim paralegal.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
              Informasi kasus yang ditampilkan merupakan informasi anonim dan
              telah disesuaikan untuk menjaga privasi serta keselamatan pihak
              yang didampingi.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-stone-300 bg-white p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                Jumlah paralegal
              </p>

              <p className="mt-3 font-editorial text-4xl font-semibold">
                {totalParalegals}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Anggota tim pendamping
              </p>
            </div>

            <div className="border border-stone-300 bg-white p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                Total kasus tercatat
              </p>

              <p className="mt-3 font-editorial text-4xl font-semibold">
                {totalCases}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Kasus dalam data paralegal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="border border-stone-300 bg-[#f8f7f3] px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                Akses informasi dan pendampingan
              </p>

              <h2 className="font-editorial text-2xl font-semibold leading-tight sm:text-3xl">
                Setiap orang berhak mendapatkan informasi dan dukungan.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                Jika membutuhkan informasi atau dukungan terkait pendampingan,
                silakan hubungi TPDotcom melalui layanan yang tersedia.
              </p>
            </div>

            <a
              href="/kontak-pengaduan"
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-blue-800 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-950"
            >
              Hubungi kami
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
