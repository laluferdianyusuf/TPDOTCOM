import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  FileText,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { PARALEGALS } from "../data/content";

interface ParalegalCasesViewProps {
  paralegalId: string | null;
  onBack: () => void;
}

export const ParalegalCasesView: React.FC<ParalegalCasesViewProps> = ({
  paralegalId,
  onBack,
}) => {
  const paralegal = PARALEGALS.find((member) => member.id === paralegalId);

  if (!paralegal) {
    return (
      <main className="min-h-[60vh] px-5 py-20 text-center">
        <FileText className="mx-auto h-10 w-10 text-slate-400" />

        <h1 className="mt-5 font-editorial text-3xl font-semibold">
          Data paralegal tidak ditemukan
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Profil paralegal yang Anda cari tidak tersedia.
        </p>

        <button
          type="button"
          onClick={onBack}
          className="mt-7 inline-flex items-center gap-2 bg-blue-800 px-5 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Paralegal
        </button>
      </main>
    );
  }

  const cases = paralegal.cases;

  const completedCases = cases.filter(
    (item) => item.status === "Selesai",
  ).length;

  const activeCases = cases.filter((item) => item.status !== "Selesai").length;

  const statusClasses = {
    Berjalan: "border-blue-200 bg-blue-50 text-blue-800",
    "Dalam Proses": "border-amber-200 bg-amber-50 text-amber-800",
    Selesai: "border-emerald-200 bg-emerald-50 text-emerald-800",
  };

  return (
    <main className="pb-20 text-slate-900">
      {/* HEADER */}
      <section className="border-b border-stone-300 bg-[#f8f7f3]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
          <button
            type="button"
            onClick={onBack}
            className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke daftar paralegal
          </button>

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14">
            <div className="flex items-center gap-5">
              <img
                src={paralegal.avatar}
                alt={`Foto ${paralegal.name}`}
                className="h-28 w-28 shrink-0 border border-stone-300 object-cover object-top sm:h-36 sm:w-36"
              />

              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-800">
                  {paralegal.role}
                </span>

                <h1 className="mt-2 font-editorial text-2xl font-semibold sm:text-3xl">
                  {paralegal.name}
                </h1>

                <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {paralegal.location}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                Dokumentasi pendampingan
              </p>

              <h2 className="mt-3 font-editorial text-3xl font-semibold leading-tight sm:text-4xl">
                Kasus yang ditangani.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                {paralegal.bio} Berikut merupakan ringkasan informasi kasus yang
                tercatat pada profil paralegal ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border border-stone-300 p-5 sm:p-6">
            <p className="text-xs text-slate-500">Total kasus</p>
            <p className="mt-2 font-editorial text-3xl font-semibold">
              {cases.length}
            </p>
          </div>

          <div className="border border-stone-300 p-5 sm:p-6">
            <p className="text-xs text-slate-500">Kasus berjalan</p>
            <p className="mt-2 font-editorial text-3xl font-semibold">
              {activeCases}
            </p>
          </div>

          <div className="border border-stone-300 p-5 sm:p-6">
            <p className="text-xs text-slate-500">Kasus selesai</p>
            <p className="mt-2 font-editorial text-3xl font-semibold">
              {completedCases}
            </p>
          </div>
        </div>
      </section>

      {/* CASE LIST */}
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mb-7 flex flex-col gap-3 border-b border-stone-300 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Daftar penanganan
            </p>

            <h2 className="mt-2 font-editorial text-2xl font-semibold sm:text-3xl">
              Riwayat kasus
            </h2>
          </div>

          <p className="text-xs text-slate-500">
            {cases.length} kasus tercatat
          </p>
        </div>

        {cases.length === 0 ? (
          <div className="border border-stone-300 px-6 py-16 text-center">
            <FileText className="mx-auto h-9 w-9 text-slate-400" />

            <h3 className="mt-4 font-editorial text-xl font-semibold">
              Belum ada kasus tercatat
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Belum ada informasi kasus yang dapat ditampilkan pada profil ini.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {cases.map((item, index) => (
              <article
                key={item.id}
                className="border border-stone-300 bg-white p-5 transition-colors hover:border-stone-400 sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-stone-200 bg-[#f8f7f3]">
                      <span className="font-editorial text-sm text-blue-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {item.id}
                      </p>

                      <h3 className="mt-2 font-editorial text-lg font-semibold leading-snug sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs font-medium text-blue-800">
                        {item.category}
                      </p>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex w-fit shrink-0 items-center border px-3 py-1.5 text-[10px] font-semibold ${statusClasses[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-stone-200 pt-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {item.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5" />
                    Tahun {item.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 border-l-2 border-blue-800 bg-[#f8f7f3] p-5 sm:p-6">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-800" />

            <div>
              <h3 className="text-sm font-semibold">
                Perlindungan privasi dan kerahasiaan
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Informasi yang ditampilkan merupakan ringkasan anonim.
                Identitas, alamat, kronologi rinci, dan informasi sensitif pihak
                yang didampingi tidak ditampilkan untuk umum.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="mt-8 inline-flex items-center gap-2 border-b border-blue-800 pb-1.5 text-sm font-semibold text-blue-800 hover:text-blue-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke daftar paralegal
        </button>
      </section>
    </main>
  );
};
