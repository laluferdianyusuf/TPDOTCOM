import {
  ArrowRight,
  Check,
  ChevronDown,
  LockKeyhole,
  MessageCircle,
  Phone,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import React, { useState } from "react";
import { EMERGENCY_HOTLINES, KBGO_CATEGORIES } from "../data/content";
import { CaseReportForm, PageRoute } from "../types";

interface KontakPengaduanViewProps {
  onNavigate: (route: PageRoute) => void;
}

const initialFormData: CaseReportForm = {
  fullName: "",
  aliasName: "",
  isAnonymous: true,
  safeContactMethod: "whatsapp",
  contactValue: "",
  victimAgeGroup: "18-24 tahun",
  victimLocation: "",
  category: "Penyebaran Konten Intim Non-Konsensual (NCII)",
  platforms: [],
  incidentDate: "",
  urgencyLevel: "konsultasi",
  neededServices: [],
  chronology: "",
  hasEvidence: false,
  consentAgreed: false,
};

const platforms = [
  "WhatsApp",
  "Telegram",
  "Instagram",
  "Facebook",
  "TikTok",
  "X",
  "Situs web atau forum",
  "Aplikasi kencan",
  "Lainnya",
];

const requestedServices = [
  "Informasi penghapusan konten",
  "Informasi dan konsultasi hukum",
  "Dukungan psikologis",
  "Keamanan akun dan perangkat",
  "Informasi layanan perlindungan",
  "Belum yakin, ingin berkonsultasi",
];

const fieldClass =
  "mt-2 w-full rounded-none border border-stone-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-stone-400 focus:border-blue-800 focus:ring-1 focus:ring-blue-800";

const labelClass = "block text-sm font-medium text-slate-800";

export const KontakPengaduanView: React.FC<KontakPengaduanViewProps> = ({
  onNavigate,
}) => {
  const [formData, setFormData] = useState<CaseReportForm>(initialFormData);

  const [showDemoNotice, setShowDemoNotice] = useState(false);

  const updateForm = <K extends keyof CaseReportForm>(
    field: K,
    value: CaseReportForm[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const togglePlatform = (platform: string) => {
    setFormData((previous) => ({
      ...previous,
      platforms: previous.platforms.includes(platform)
        ? previous.platforms.filter((item) => item !== platform)
        : [...previous.platforms, platform],
    }));
  };

  const toggleService = (service: string) => {
    setFormData((previous) => ({
      ...previous,
      neededServices: previous.neededServices.includes(service)
        ? previous.neededServices.filter((item) => item !== service)
        : [...previous.neededServices, service],
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.consentAgreed) {
      return;
    }

    // Form ini belum terhubung ke backend.
    // Jangan membuat nomor tiket atau mengklaim laporan telah diterima.
    setShowDemoNotice(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setShowDemoNotice(false);
  };

  return (
    <main className="bg-[#f8f7f3] pb-20 text-slate-900">
      {/* Intro */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-9 sm:px-8 sm:pb-16 sm:pt-12">
          <button
            type="button"
            onClick={() => onNavigate("program")}
            className="mb-10 inline-flex items-center gap-2 text-sm text-stone-600 transition-colors hover:text-blue-800"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Kembali ke program
          </button>

          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-800" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
                  Kontak dan pengaduan
                </p>
              </div>

              <h1 className="max-w-3xl font-editorial text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Anda tidak harus menghadapi ini sendirian.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                Halaman ini membantu Anda mengenali pilihan untuk mencari
                informasi, dukungan, dan pendampingan terkait kekerasan berbasis
                gender online (KBGO). Anda tidak perlu menceritakan semuanya
                sekaligus.
              </p>
            </div>

            <aside className="border-l-2 border-blue-800 py-1 pl-5">
              <ShieldCheck className="mb-4 h-6 w-6 text-blue-800" />
              <p className="font-semibold text-slate-900">
                Anda berhak menentukan langkah berikutnya.
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Bagikan hanya informasi yang diperlukan dan pertimbangkan
                keamanan perangkat sebelum menghubungi pihak lain.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Important status notice */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <div className="flex items-start gap-4 border border-amber-300 bg-amber-50 px-4 py-4 sm:px-5">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" />
          <div>
            <p className="text-sm font-semibold text-amber-950">
              Informasi penting tentang formulir
            </p>
            <p className="mt-1 text-sm leading-6 text-amber-950/80">
              Formulir pada versi website ini masih berupa prototipe dan belum
              terhubung ke sistem penerimaan pengaduan. Jangan masukkan nama
              asli, nomor pribadi, kronologi sensitif, atau informasi yang dapat
              mengidentifikasi Anda. Menekan tombol kirim tidak akan mengirimkan
              laporan kepada TPDotcom.
            </p>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-14">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          {/* Form */}
          <div>
            {showDemoNotice ? (
              <div
                role="status"
                className="border-y border-stone-300 py-10 sm:py-14"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-amber-300 bg-amber-50">
                  <TriangleAlert className="h-6 w-6 text-amber-800" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                  Prototipe formulir
                </p>

                <h2 className="mt-3 max-w-xl font-editorial text-2xl font-bold leading-snug sm:text-3xl">
                  Laporan belum dikirim.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                  Formulir ini belum memiliki sistem backend untuk menerima,
                  menyimpan, atau meneruskan pengaduan. Tidak ada nomor tiket
                  yang dibuat karena laporan belum tercatat sebagai kasus.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                  Jika Anda membutuhkan bantuan, gunakan kanal resmi yang telah
                  diverifikasi oleh organisasi atau layanan bantuan terkait.
                  Pastikan nomor dan jam operasionalnya benar sebelum membagikan
                  informasi pribadi.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="border border-stone-300 px-5 py-3 text-sm font-semibold transition-colors hover:border-blue-800 hover:text-blue-800"
                  >
                    Kembali ke formulir
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate("program")}
                    className="inline-flex items-center gap-2 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                  >
                    Lihat program TPDotcom
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="border-b border-stone-300 pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                    Formulir prototipe
                  </p>
                  <h2 className="mt-3 font-editorial text-2xl font-bold sm:text-3xl">
                    Ceritakan kebutuhan Anda
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600">
                    Gunakan data contoh saat menguji formulir ini. Kolom di
                    bawah belum mengirim data ke tim pendamping.
                  </p>
                </div>

                {/* Section 1 */}
                <fieldset className="border-b border-stone-200 py-8">
                  <legend className="mb-6 text-sm font-semibold text-slate-900">
                    <span className="mr-3 text-stone-400">01</span>
                    Identitas dan kontak
                  </legend>

                  <label className="flex items-start gap-3 border border-stone-300 bg-white px-4 py-4">
                    <input
                      type="checkbox"
                      checked={formData.isAnonymous}
                      onChange={(event) =>
                        updateForm("isAnonymous", event.target.checked)
                      }
                      className="mt-1 h-4 w-4 accent-blue-800"
                    />
                    <span>
                      <span className="block text-sm font-medium text-slate-900">
                        Saya ingin menggunakan nama samaran
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-stone-500">
                        Pilihan ini hanya mengubah tampilan formulir. Ini bukan
                        jaminan anonimitas atau kerahasiaan data.
                      </span>
                    </span>
                  </label>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        {formData.isAnonymous ? "Nama samaran" : "Nama"}
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        value={
                          formData.isAnonymous
                            ? formData.aliasName
                            : formData.fullName
                        }
                        onChange={(event) =>
                          updateForm(
                            formData.isAnonymous ? "aliasName" : "fullName",
                            event.target.value,
                          )
                        }
                        placeholder={
                          formData.isAnonymous
                            ? "Contoh: Bunga"
                            : "Gunakan data contoh"
                        }
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Rentang usia</label>
                      <div className="relative">
                        <select
                          value={formData.victimAgeGroup}
                          onChange={(event) =>
                            updateForm("victimAgeGroup", event.target.value)
                          }
                          className={`${fieldClass} appearance-none pr-10`}
                        >
                          <option value="Di bawah 18 tahun">
                            Di bawah 18 tahun
                          </option>
                          <option value="18-24 tahun">18–24 tahun</option>
                          <option value="25-34 tahun">25–34 tahun</option>
                          <option value="35-49 tahun">35–49 tahun</option>
                          <option value="50 tahun ke atas">
                            50 tahun ke atas
                          </option>
                          <option value="Tidak ingin menyebutkan">
                            Tidak ingin menyebutkan
                          </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Kanal kontak yang dipilih
                      </label>
                      <div className="relative">
                        <select
                          value={formData.safeContactMethod}
                          onChange={(event) =>
                            updateForm(
                              "safeContactMethod",
                              event.target
                                .value as CaseReportForm["safeContactMethod"],
                            )
                          }
                          className={`${fieldClass} appearance-none pr-10`}
                        >
                          <option value="whatsapp">WhatsApp</option>
                          <option value="signal">Signal</option>
                          <option value="telegram">Telegram</option>
                          <option value="email">Email</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Kontak contoh (opsional)
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        value={formData.contactValue}
                        onChange={(event) =>
                          updateForm("contactValue", event.target.value)
                        }
                        placeholder="Jangan gunakan kontak asli"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-stone-500">
                    Hindari memasukkan nomor telepon atau akun pribadi yang
                    sebenarnya selama formulir belum terhubung ke sistem aman.
                  </p>
                </fieldset>

                {/* Section 2 */}
                <fieldset className="border-b border-stone-200 py-8">
                  <legend className="mb-6 text-sm font-semibold text-slate-900">
                    <span className="mr-3 text-stone-400">02</span>
                    Informasi kejadian
                  </legend>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Kategori kejadian</label>
                      <div className="relative">
                        <select
                          value={formData.category}
                          onChange={(event) =>
                            updateForm("category", event.target.value)
                          }
                          className={`${fieldClass} appearance-none pr-10`}
                        >
                          {KBGO_CATEGORIES.map((category) => (
                            <option key={category.id} value={category.name}>
                              {category.name}
                            </option>
                          ))}
                          <option value="Lainnya">Lainnya</option>
                          <option value="Belum yakin">Belum yakin</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Tingkat kebutuhan</label>
                      <div className="relative">
                        <select
                          value={formData.urgencyLevel}
                          onChange={(event) =>
                            updateForm(
                              "urgencyLevel",
                              event.target
                                .value as CaseReportForm["urgencyLevel"],
                            )
                          }
                          className={`${fieldClass} appearance-none pr-10`}
                        >
                          <option value="darurat">
                            Mendesak — ada ancaman langsung
                          </option>
                          <option value="segera">
                            Perlu bantuan dalam waktu dekat
                          </option>
                          <option value="konsultasi">
                            Informasi atau konsultasi
                          </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Tanggal kejadian (opsional)
                      </label>
                      <input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(event) =>
                          updateForm("incidentDate", event.target.value)
                        }
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Lokasi umum (opsional)
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        value={formData.victimLocation}
                        onChange={(event) =>
                          updateForm("victimLocation", event.target.value)
                        }
                        placeholder="Contoh: kabupaten atau kota"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className={labelClass}>Platform yang terlibat</p>
                    <p className="mt-1 text-xs text-stone-500">
                      Pilih semua yang sesuai.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {platforms.map((platform) => {
                        const selected = formData.platforms.includes(platform);

                        return (
                          <button
                            key={platform}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => togglePlatform(platform)}
                            className={`inline-flex items-center gap-2 border px-3 py-2 text-sm transition-colors ${
                              selected
                                ? "border-blue-800 bg-blue-800 text-white"
                                : "border-stone-300 bg-white text-slate-700 hover:border-blue-800"
                            }`}
                          >
                            {selected && <Check className="h-3.5 w-3.5" />}
                            {platform}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className={labelClass}>
                      Bentuk bantuan yang ingin diketahui
                    </p>

                    <div className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
                      {requestedServices.map((service) => {
                        const selected =
                          formData.neededServices.includes(service);

                        return (
                          <label
                            key={service}
                            className="flex cursor-pointer items-start gap-3 py-3"
                          >
                            <input
                              type="checkbox"
                              checked={selected}
                              onChange={() => toggleService(service)}
                              className="mt-1 h-4 w-4 accent-blue-800"
                            />
                            <span className="text-sm leading-6 text-slate-700">
                              {service}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                {/* Section 3 */}
                <fieldset className="border-b border-stone-200 py-8">
                  <legend className="mb-4 text-sm font-semibold text-slate-900">
                    <span className="mr-3 text-stone-400">03</span>
                    Cerita singkat (opsional)
                  </legend>

                  <label className={labelClass}>
                    Apa yang ingin Anda sampaikan?
                  </label>
                  <textarea
                    rows={5}
                    value={formData.chronology}
                    onChange={(event) =>
                      updateForm("chronology", event.target.value)
                    }
                    placeholder="Untuk uji coba, gunakan cerita rekaan. Jangan cantumkan nama lengkap, alamat, kata sandi, atau detail intim."
                    className={`${fieldClass} resize-y`}
                  />

                  <label className="mt-5 flex items-start gap-3 border border-stone-300 bg-white p-4">
                    <input
                      type="checkbox"
                      checked={formData.hasEvidence}
                      onChange={(event) =>
                        updateForm("hasEvidence", event.target.checked)
                      }
                      className="mt-1 h-4 w-4 accent-blue-800"
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      Saya memiliki informasi atau dokumentasi terkait kejadian.
                      Saya tidak akan mengunggah atau mengirim materi intim
                      melalui formulir prototipe ini.
                    </span>
                  </label>
                </fieldset>

                {/* Consent and submit */}
                <div className="pt-8">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consentAgreed}
                      onChange={(event) =>
                        updateForm("consentAgreed", event.target.checked)
                      }
                      className="mt-1 h-4 w-4 accent-blue-800"
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      Saya memahami bahwa halaman ini masih berupa prototipe,
                      data tidak dikirim kepada TPDotcom, dan formulir ini tidak
                      menciptakan laporan atau nomor kasus resmi.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                  >
                    Tinjau status formulir
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="mt-4 text-xs leading-5 text-stone-500">
                    Ini hanya demonstrasi antarmuka. Sebelum diluncurkan,
                    formulir perlu dihubungkan ke backend dengan pengamanan
                    data, kontrol akses, kebijakan retensi, dan prosedur
                    penanganan pengaduan yang jelas.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10 lg:sticky lg:top-8">
            {/* Emergency information */}
            <section className="border-t-2 border-slate-900 pt-5">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-800" />
                <h2 className="font-editorial text-xl font-bold">
                  Butuh bantuan segera?
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Jika ada bahaya fisik langsung, prioritaskan keselamatan dan
                hubungi layanan darurat yang sesuai di wilayah Anda.
              </p>

              <div className="mt-5 divide-y divide-stone-200 border-y border-stone-200">
                {EMERGENCY_HOTLINES.map((hotline, index) => (
                  <div key={`${hotline.name}-${index}`} className="py-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {hotline.name}
                    </p>
                    <p className="mt-1 break-words font-mono text-sm text-blue-800">
                      {hotline.number}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-stone-500">
                      {hotline.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs leading-5 text-stone-500">
                Verifikasi nomor, wilayah layanan, dan jam operasional sebelum
                dipublikasikan. Jangan menganggap seluruh nomor tersedia
                sepanjang waktu.
              </p>
            </section>

            {/* Privacy notes */}
            <section className="border-t-2 border-slate-900 pt-5">
              <div className="flex items-center gap-3">
                <LockKeyhole className="h-5 w-5 text-blue-800" />
                <h2 className="font-editorial text-xl font-bold">
                  Pertimbangkan keamanan Anda
                </h2>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Perangkat mungkin dipantau?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Jika Anda khawatir pelaku memantau perangkat atau akun,
                    pertimbangkan mencari bantuan melalui perangkat yang lebih
                    aman. Menghapus riwayat browser tidak selalu menghilangkan
                    semua jejak aktivitas.
                  </p>
                </div>

                <div className="border-t border-stone-200 pt-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Belum siap bercerita?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Anda dapat membaca informasi tentang KBGO terlebih dahulu
                    tanpa mengisi formulir ini.
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate("kategori_kbgo")}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
                  >
                    Baca panduan KBGO
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="border-t border-stone-200 pt-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Apakah pengaduan ini rahasia?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Tingkat kerahasiaan bergantung pada sistem, pihak yang
                    memiliki akses, dan prosedur organisasi. Sebelum mengirimkan
                    data sensitif, pastikan Anda memperoleh informasi yang jelas
                    mengenai penggunaan dan perlindungan data.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact readiness */}
            <section className="border-y border-stone-300 py-5">
              <MessageCircle className="mb-4 h-5 w-5 text-blue-800" />
              <h2 className="font-editorial text-xl font-bold">
                Tentang layanan TPDotcom
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Informasi mengenai jenis pendampingan, biaya, jam layanan, dan
                mekanisme pengaduan perlu dijelaskan berdasarkan kapasitas serta
                kebijakan organisasi yang benar-benar tersedia.
              </p>
              <button
                type="button"
                onClick={() => onNavigate("program")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Pelajari program
                <ArrowRight className="h-4 w-4" />
              </button>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default KontakPengaduanView;
