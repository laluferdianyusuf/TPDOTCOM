import {
  ArrowRight,
  CheckCircle2,
  FileText,
  HeartHandshake,
  Images,
  Lock,
  Scale,
  ShieldCheck,
} from "lucide-react";
import React from "react";
import { PROGRAM_ACTIVITIES, PROGRAMS } from "../data/content";
import { PageRoute } from "../types";

interface ProgramViewProps {
  onNavigate: (route: PageRoute) => void;
}

const programDetails: Record<
  string,
  { rationale: string; icon: React.ElementType; number: string }
> = {
  "keamanan-digital": {
    number: "01",
    icon: ShieldCheck,
    rationale:
      "Pemahaman tentang keamanan akun, privasi, dan jejak digital membantu masyarakat mengambil langkah yang lebih tepat ketika menghadapi risiko di ruang digital.",
  },
  "advokasi-hukum": {
    number: "02",
    icon: Scale,
    rationale:
      "Akses terhadap informasi hukum dan pendampingan yang peka terhadap pengalaman korban dapat membantu seseorang memahami hak serta pilihan yang tersedia.",
  },
  "pemulihan-psikologis": {
    number: "03",
    icon: HeartHandshake,
    rationale:
      "Pengalaman kekerasan dapat memengaruhi rasa aman dan kesejahteraan seseorang. Ruang yang suportif dan akses rujukan yang sesuai dapat menjadi bagian dari proses pemulihan.",
  },
  "advokasi-kebijakan": {
    number: "04",
    icon: FileText,
    rationale:
      "Perubahan yang berkelanjutan membutuhkan kebijakan yang responsif, partisipasi masyarakat, dan pertanggungjawaban dari pihak yang berkaitan.",
  },
};

const serviceFlow = [
  {
    step: "01",
    title: "Kontak awal",
    desc: "Sampaikan situasi atau kebutuhan melalui kanal kontak yang tersedia. Bagikan informasi secukupnya sesuai kenyamanan dan keamanan Anda.",
  },
  {
    step: "02",
    title: "Memahami kebutuhan",
    desc: "Kebutuhan, risiko, dan kondisi yang dihadapi dibicarakan untuk membantu menentukan informasi atau bentuk dukungan yang relevan.",
  },
  {
    step: "03",
    title: "Membahas pilihan",
    desc: "Langkah yang mungkin dilakukan dijelaskan bersama, termasuk pertimbangan keamanan, kebutuhan dokumentasi, dan pilihan rujukan.",
  },
  {
    step: "04",
    title: "Dukungan atau rujukan",
    desc: "Tindak lanjut disesuaikan dengan kebutuhan, ruang lingkup layanan, persetujuan, dan kapasitas pendampingan yang tersedia.",
  },
  {
    step: "05",
    title: "Tindak lanjut",
    desc: "Jika sesuai dan memungkinkan, kebutuhan lanjutan dibicarakan untuk membantu menentukan langkah berikutnya.",
  },
];

export const ProgramView: React.FC<ProgramViewProps> = ({ onNavigate }) => {
  const recentActivities = PROGRAM_ACTIVITIES.slice(0, 3);

  return (
    <main className="pb-20 text-slate-900">
      {/* HERO */}
      <section className="border-b border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-800" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                  Program kerja TPDotcom
                </p>
              </div>

              <h1 className="max-w-3xl font-editorial text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Mendorong perubahan melalui{" "}
                <span className="text-blue-800">
                  pengetahuan, pendampingan, dan advokasi.
                </span>
              </h1>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                TPDotcom mengembangkan kerja pemberdayaan perempuan dan
                penguatan kapasitas masyarakat melalui literasi digital,
                dukungan terhadap akses keadilan, pemulihan, serta advokasi
                kebijakan.
              </p>

              <button
                type="button"
                onClick={() => onNavigate("kontak_pengaduan")}
                className="group mt-7 inline-flex items-center gap-2 border-b border-blue-800 pb-1.5 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
              >
                Hubungi TPDotcom
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-stone-300 pt-5 sm:mt-16 sm:gap-x-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Area kerja
            </span>
            {[
              "Keamanan digital",
              "Advokasi hukum",
              "Pemulihan",
              "Advokasi kebijakan",
            ].map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && (
                  <span aria-hidden="true" className="text-stone-400">
                    /
                  </span>
                )}
                <span className="text-xs font-medium text-slate-700 sm:text-sm">
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
              Fokus program
            </p>
            <h2 className="max-w-2xl font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">
              Empat bidang kerja, satu tujuan bersama.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-slate-600 lg:justify-self-end">
            Setiap bidang menjawab kebutuhan yang berbeda. Pelaksanaannya dapat
            saling melengkapi sesuai konteks, kebutuhan masyarakat, dan
            kapasitas organisasi.
          </p>
        </div>

        <div className="divide-y divide-stone-300 border-y border-stone-300">
          {PROGRAMS.map((prog, index) => {
            const details = programDetails[prog.id];
            const Icon = details?.icon ?? FileText;
            const number =
              details?.number ?? String(index + 1).padStart(2, "0");

            return (
              <article
                key={prog.id}
                className="grid gap-8 py-9 sm:py-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14 lg:py-14"
              >
                {/* Main content */}
                <div className="min-w-0">
                  <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-editorial text-sm text-blue-800">
                      {number}
                    </span>
                    <span className="h-px w-5 bg-stone-400" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {prog.category}
                    </span>
                  </div>

                  <h3 className="max-w-3xl font-editorial text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                    {prog.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    {prog.description}
                  </p>

                  {prog.keyFeatures.length > 0 && (
                    <div className="mt-7">
                      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Cakupan kegiatan
                      </p>

                      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {prog.keyFeatures.map((feature, featureIndex) => (
                          <li
                            key={`${prog.id}-${featureIndex}`}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                          >
                            <CheckCircle2
                              aria-hidden="true"
                              className="mt-1 h-4 w-4 shrink-0 text-blue-800"
                              strokeWidth={1.7}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {prog.beneficiariesCount && (
                    <p className="mt-6 border-l-2 border-stone-300 pl-3 text-xs leading-5 text-slate-500">
                      <span className="font-semibold text-slate-700">
                        Sasaran:
                      </span>{" "}
                      {prog.beneficiariesCount}
                    </p>
                  )}

                  <div className="mt-7">
                    {prog.id === "keamanan-digital" ? (
                      <button
                        type="button"
                        onClick={() =>
                          onNavigate("detail_program_keamanan_digital")
                        }
                        className="group inline-flex min-h-11 items-center gap-2 bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
                      >
                        Lihat detail program
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNavigate("kontak_pengaduan")}
                        className="group inline-flex min-h-11 items-center gap-2 border-b border-stone-400 pb-1.5 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-800 hover:text-blue-800"
                      >
                        Diskusikan kebutuhan
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Editorial side panel */}
                <aside className="flex flex-col border-t border-stone-300 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Perspektif program
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-blue-800"
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="mt-5 font-editorial text-lg font-medium leading-snug text-slate-900">
                    {prog.id === "keamanan-digital" &&
                      "Ruang digital yang lebih aman dimulai dari akses terhadap pengetahuan."}
                    {prog.id === "advokasi-hukum" &&
                      "Memahami hak adalah salah satu langkah untuk memperoleh akses keadilan."}
                    {prog.id === "pemulihan-psikologis" &&
                      "Setiap orang berhak didengarkan dan dihormati dalam proses pemulihan."}
                    {prog.id === "advokasi-kebijakan" &&
                      "Perubahan sistemik membutuhkan suara masyarakat dan kebijakan yang responsif."}
                    {!programDetails[prog.id] &&
                      "Mendukung masyarakat melalui pendekatan yang sesuai kebutuhan."}
                  </p>

                  <div className="mt-5 border-t border-stone-200 pt-4">
                    <p className="text-xs leading-6 text-slate-600">
                      {details?.rationale ??
                        "Program ini menjadi bagian dari upaya pemberdayaan dan penguatan kapasitas masyarakat."}
                    </p>
                  </div>

                  <div className="mt-auto flex items-start gap-2 pt-6 text-xs leading-5 text-slate-500">
                    <Lock
                      aria-hidden="true"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      strokeWidth={1.7}
                    />
                    <span>
                      Bentuk dukungan dan tindak lanjut disesuaikan dengan
                      kebutuhan serta kapasitas layanan yang tersedia.
                    </span>
                  </div>
                </aside>
              </article>
            );
          })}
        </div>
      </section>

      {/* ACTIVITY DOCUMENTATION */}
      <section className="border-y border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-800" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                  Dari kegiatan ke pembelajaran
                </p>
              </div>

              <h2 className="max-w-lg font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Kerja kami juga dapat dilihat melalui dokumentasi kegiatan.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
                Telusuri dokumentasi pelatihan, pertemuan, dan kegiatan lapangan
                untuk mengenal proses kerja serta pembelajaran yang dibagikan
                oleh TPDotcom.
              </p>

              <button
                type="button"
                onClick={() => onNavigate("dokumentasi_kegiatan_program")}
                className="group mt-7 inline-flex items-center gap-2 border-b border-blue-800 pb-1.5 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950"
              >
                <Images className="h-4 w-4" />
                Buka dokumentasi kegiatan
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {recentActivities.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {recentActivities.map((activity, index) => (
                  <button
                    key={activity.id}
                    type="button"
                    onClick={() => onNavigate("dokumentasi_kegiatan_program")}
                    aria-label={`Lihat dokumentasi kegiatan ${index + 1}`}
                    className={`group relative aspect-[4/3] overflow-hidden border border-stone-300 bg-stone-200 text-left ${
                      index === 0 ? "col-span-2 aspect-[16/7]" : ""
                    }`}
                  >
                    <img
                      src={activity.coverImage}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white sm:bottom-4 sm:left-4">
                      Dokumentasi kegiatan
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex min-h-52 items-center justify-center border border-dashed border-stone-300 px-6 text-center">
                <p className="max-w-sm text-sm leading-6 text-slate-500">
                  Dokumentasi kegiatan akan ditampilkan di bagian ini ketika
                  tersedia.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICE FLOW */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-800" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800 sm:text-xs">
                Alur pendampingan
              </p>
            </div>

            <h2 className="max-w-md font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Memahami kebutuhan sebelum menentukan langkah.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Setiap situasi memiliki konteks yang berbeda. Gambaran berikut
              menjelaskan tahapan umum yang dapat disesuaikan dengan kebutuhan,
              persetujuan, dan layanan yang tersedia.
            </p>

            <div className="mt-7 border-l-2 border-blue-800 pl-4">
              <p className="text-sm leading-6 text-slate-700">
                Anda dapat menyampaikan kebutuhan terlebih dahulu tanpa harus
                langsung memutuskan langkah berikutnya.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate("kontak_pengaduan")}
              className="group mt-7 inline-flex min-h-11 items-center gap-2 bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
            >
              Hubungi kami
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="border-t border-stone-300">
            {serviceFlow.map((flow) => (
              <article
                key={flow.step}
                className="grid grid-cols-[42px_1fr] gap-4 border-b border-stone-300 py-5 sm:grid-cols-[58px_1fr] sm:gap-6 sm:py-6"
              >
                <span className="font-editorial text-lg text-blue-800">
                  {flow.step}
                </span>

                <div>
                  <h3 className="font-editorial text-lg font-semibold leading-snug sm:text-xl">
                    {flow.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {flow.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 border-y border-stone-300 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Langkah berikutnya
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold tracking-tight sm:text-3xl">
              Punya pertanyaan tentang program kami?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Hubungi TPDotcom untuk menyampaikan pertanyaan atau mendiskusikan
              kebutuhan yang relevan.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("kontak_pengaduan")}
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950 lg:self-center"
          >
            Hubungi TPDotcom
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </main>
  );
};
