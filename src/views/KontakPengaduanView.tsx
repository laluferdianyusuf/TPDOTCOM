import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { EMERGENCY_HOTLINES, KBGO_CATEGORIES } from "../data/content";
import { PageRoute } from "../types";

interface KontakPengaduanViewProps {
  onNavigate: (route: PageRoute) => void;
}

interface ContactFormData {
  name: string;
  contactMethod: "whatsapp" | "signal" | "telegram" | "email";
  contactValue: string;
  category: string;
  urgency: "darurat" | "segera" | "konsultasi";
  neededServices: string[];
  message: string;
  consent: boolean;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialFormData: ContactFormData = {
  name: "",
  contactMethod: "whatsapp",
  contactValue: "",
  category: "",
  urgency: "konsultasi",
  neededServices: [],
  message: "",
  consent: false,
};

const requestedServices = [
  "Informasi penghapusan konten",
  "Informasi dan konsultasi hukum",
  "Dukungan psikologis",
  "Keamanan akun dan perangkat",
  "Informasi layanan perlindungan",
  "Belum yakin, ingin berkonsultasi",
];

const fieldClass =
  "mt-2 w-full rounded-none border border-stone-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-stone-400 focus:border-blue-800 focus:ring-1 focus:ring-blue-800";

const labelClass = "block text-sm font-semibold text-slate-800";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const KontakPengaduanView: React.FC<KontakPengaduanViewProps> = ({
  onNavigate,
}) => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const updateForm = <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.consent) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          sender_name: formData.name,
          contact_method: formData.contactMethod,
          contact_value: formData.contactValue,
          category: formData.category || "Belum ditentukan",
          urgency: formData.urgency,
          needed_services:
            formData.neededServices.length > 0
              ? formData.neededServices.join(", ")
              : "Belum ditentukan",
          message: formData.message || "Tidak ada pesan tambahan.",
          consent: "Ya, pelapor menyetujui pengiriman permintaan konsultasi.",
          to_email: "transformasiperempuan@gmail.com",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitStatus("idle");
  };

  return (
    <main className="bg-[#f8f7f3] pb-20 text-slate-900">
      {/* HERO */}
      <section className="border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12">
          <button
            type="button"
            onClick={() => onNavigate("program")}
            className="mb-10 inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-blue-800"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Kembali ke program
          </button>

          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-800" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-800">
                  Kontak dan pengaduan
                </p>
              </div>

              <h1 className="max-w-3xl font-editorial text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Anda berhak mendapatkan informasi dan dukungan.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                TPDotcom menyediakan ruang komunikasi awal bagi masyarakat yang
                membutuhkan informasi, konsultasi, atau dukungan terkait
                kekerasan berbasis gender online (KBGO). Anda dapat menyampaikan
                kebutuhan tanpa harus menceritakan seluruh pengalaman sekaligus.
              </p>
            </div>

            <aside className="border-l-2 border-blue-800 py-1 pl-5">
              <ShieldCheck className="mb-4 h-7 w-7 text-blue-800" />
              <h2 className="font-semibold text-slate-900">
                Kendali tetap ada pada Anda.
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Sampaikan informasi secukupnya. Anda berhak menentukan informasi
                yang ingin dibagikan dan langkah yang ingin diambil.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* PRIVACY NOTICE */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <div className="flex items-start gap-4 border border-amber-300 bg-amber-50 px-4 py-5 sm:px-5">
          <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" />
          <div>
            <h2 className="text-sm font-bold text-amber-950">
              Perhatikan keamanan informasi Anda
            </h2>
            <p className="mt-1 text-sm leading-6 text-amber-950/80">
              Formulir ini digunakan untuk mengirim permintaan konsultasi awal
              melalui email. Jangan menuliskan kata sandi, alamat lengkap,
              detail intim, kronologi sensitif, atau mengirim bukti berupa foto
              maupun video intim. Email bukan kanal khusus untuk penyimpanan
              bukti atau informasi kasus yang sangat sensitif.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-14">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          {/* FORM */}
          <div>
            {submitStatus === "success" ? (
              <div
                role="status"
                className="border-y border-stone-300 py-12 sm:py-16"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center bg-emerald-50">
                  <CheckCircle2 className="h-7 w-7 text-emerald-700" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Pengiriman berhasil
                </p>

                <h2 className="mt-3 max-w-xl font-editorial text-3xl font-bold leading-snug text-slate-950">
                  Permintaan konsultasi berhasil dikirim.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
                  Terima kasih telah menghubungi TPDotcom. Permintaan konsultasi
                  awal Anda telah diteruskan melalui email. Tim TPDotcom dapat
                  menindaklanjuti melalui kontak yang Anda cantumkan sesuai
                  kapasitas layanan yang tersedia.
                </p>

                <p className="mt-4 text-sm leading-6 text-stone-500">
                  Pengiriman email bukan jaminan bahwa pendampingan langsung
                  tersedia. Jika Anda berada dalam bahaya langsung, jangan
                  menunggu balasan email untuk mencari pertolongan darurat.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="border border-stone-300 px-5 py-3 text-sm font-semibold transition hover:border-blue-800 hover:text-blue-800"
                  >
                    Kirim permintaan lain
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate("program")}
                    className="inline-flex items-center gap-2 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900"
                  >
                    Kembali ke program
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="border-b border-stone-300 pb-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                    Formulir konsultasi
                  </p>

                  <h2 className="mt-3 font-editorial text-2xl font-bold text-slate-950 sm:text-3xl">
                    Sampaikan kebutuhan Anda
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    Isi informasi berikut agar tim TPDotcom dapat memahami
                    kebutuhan awal dan mengetahui cara menghubungi Anda.
                  </p>
                </div>

                {/* IDENTITAS */}
                <fieldset className="border-b border-stone-200 py-8">
                  <legend className="mb-6 text-sm font-bold text-slate-900">
                    <span className="mr-3 text-stone-400">01</span>
                    Informasi kontak
                  </legend>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Nama atau nama samaran
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        maxLength={100}
                        autoComplete="off"
                        value={formData.name}
                        onChange={(event) =>
                          updateForm("name", event.target.value)
                        }
                        placeholder="Masukkan nama atau nama samaran"
                        className={fieldClass}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-method" className={labelClass}>
                          Metode kontak
                        </label>
                        <div className="relative">
                          <select
                            id="contact-method"
                            value={formData.contactMethod}
                            onChange={(event) =>
                              updateForm(
                                "contactMethod",
                                event.target
                                  .value as ContactFormData["contactMethod"],
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
                        <label htmlFor="contact-value" className={labelClass}>
                          Nomor atau alamat kontak
                        </label>
                        <input
                          id="contact-value"
                          type="text"
                          required
                          maxLength={150}
                          autoComplete="off"
                          value={formData.contactValue}
                          onChange={(event) =>
                            updateForm("contactValue", event.target.value)
                          }
                          placeholder="Kontak yang aman untuk dihubungi"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <p className="text-xs leading-5 text-stone-500">
                      Pastikan kontak yang dicantumkan aman untuk dihubungi.
                      Jangan gunakan kontak yang dapat dipantau oleh pihak yang
                      membahayakan Anda.
                    </p>
                  </div>
                </fieldset>

                {/* KEBUTUHAN */}
                <fieldset className="border-b border-stone-200 py-8">
                  <legend className="mb-6 text-sm font-bold text-slate-900">
                    <span className="mr-3 text-stone-400">02</span>
                    Kebutuhan konsultasi
                  </legend>

                  <div className="space-y-5">
                    <div>
                      <label htmlFor="category" className={labelClass}>
                        Topik atau kategori kebutuhan
                      </label>
                      <div className="relative">
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(event) =>
                            updateForm("category", event.target.value)
                          }
                          className={`${fieldClass} appearance-none pr-10`}
                        >
                          <option value="">
                            Pilih kategori jika sudah mengetahui
                          </option>
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
                      <label htmlFor="urgency" className={labelClass}>
                        Tingkat kebutuhan
                      </label>
                      <div className="relative">
                        <select
                          id="urgency"
                          value={formData.urgency}
                          onChange={(event) =>
                            updateForm(
                              "urgency",
                              event.target.value as ContactFormData["urgency"],
                            )
                          }
                          className={`${fieldClass} appearance-none pr-10`}
                        >
                          <option value="darurat">
                            Mendesak — ada ancaman langsung
                          </option>
                          <option value="segera">
                            Membutuhkan bantuan dalam waktu dekat
                          </option>
                          <option value="konsultasi">
                            Informasi atau konsultasi
                          </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                      </div>
                    </div>

                    <div>
                      <p className={labelClass}>
                        Bentuk dukungan yang dibutuhkan
                      </p>
                      <p className="mt-1 text-xs leading-5 text-stone-500">
                        Anda dapat memilih lebih dari satu.
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
                  </div>
                </fieldset>

                {/* PESAN */}
                <fieldset className="border-b border-stone-200 py-8">
                  <legend className="mb-4 text-sm font-bold text-slate-900">
                    <span className="mr-3 text-stone-400">03</span>
                    Pesan awal
                  </legend>

                  <label htmlFor="message" className={labelClass}>
                    Apakah ada hal yang ingin disampaikan?
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={(event) =>
                      updateForm("message", event.target.value)
                    }
                    placeholder="Tuliskan pertanyaan umum atau waktu yang aman untuk dihubungi. Jangan tuliskan kronologi sensitif atau detail intim."
                    className={`${fieldClass} resize-y`}
                  />

                  <p className="mt-2 text-xs leading-5 text-stone-500">
                    Maksimal 500 karakter. Hindari mencantumkan informasi
                    sensitif, nama pihak lain, alamat lengkap, kata sandi, atau
                    detail kejadian yang bersifat pribadi.
                  </p>
                </fieldset>

                {/* CONSENT */}
                <div className="pt-8">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(event) =>
                        updateForm("consent", event.target.checked)
                      }
                      className="mt-1 h-4 w-4 accent-blue-800"
                    />

                    <span className="text-sm leading-6 text-slate-700">
                      Saya menyetujui pengiriman informasi awal yang saya
                      masukkan melalui formulir ini ke email pengelola TPDotcom
                      untuk keperluan tindak lanjut permintaan konsultasi.
                    </span>
                  </label>

                  {submitStatus === "error" && (
                    <div
                      role="alert"
                      className="mt-5 flex items-start gap-3 border border-red-200 bg-red-50 p-4"
                    >
                      <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                      <div>
                        <p className="text-sm font-semibold text-red-900">
                          Pengiriman belum berhasil.
                        </p>
                        <p className="mt-1 text-sm leading-6 text-red-800">
                          Periksa koneksi internet dan konfigurasi EmailJS.
                          Silakan coba kembali beberapa saat lagi.
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === "loading" || !formData.consent}
                    className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-blue-800 px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-950 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Mengirim permintaan...
                      </>
                    ) : (
                      <>
                        Kirim permintaan konsultasi
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-xs leading-5 text-stone-500">
                    Permintaan akan dikirim melalui layanan EmailJS kepada
                    pengelola TPDotcom. Hindari mengirimkan informasi yang
                    sangat sensitif melalui formulir ini.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-10 lg:sticky lg:top-8">
            {/* EMERGENCY */}
            <section className="border-t-2 border-slate-900 pt-5">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-800" />
                <h2 className="font-editorial text-xl font-bold">
                  Butuh bantuan segera?
                </h2>
              </div>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Jika terdapat ancaman fisik langsung, prioritaskan keselamatan
                dan hubungi layanan darurat yang sesuai di wilayah Anda. Jangan
                menunggu balasan email.
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
            </section>

            {/* PRIVACY */}
            <section className="border-t-2 border-slate-900 pt-5">
              <div className="flex items-center gap-3">
                <LockKeyhole className="h-5 w-5 text-blue-800" />
                <h2 className="font-editorial text-xl font-bold">
                  Jaga keamanan Anda
                </h2>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Gunakan perangkat yang aman
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Jika perangkat atau akun Anda mungkin dipantau,
                    pertimbangkan menggunakan perangkat lain yang lebih aman
                    untuk mencari bantuan.
                  </p>
                </div>

                <div className="border-t border-stone-200 pt-5">
                  <h3 className="text-sm font-semibold text-slate-900">
                    Belum siap bercerita?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Anda dapat membaca informasi mengenai KBGO terlebih dahulu
                    tanpa mengisi formulir.
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
                    Tentang kerahasiaan
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Informasi yang dikirim melalui email dapat diakses oleh
                    pihak yang memiliki akses ke akun penerima. Jangan
                    mengirimkan informasi yang dapat membahayakan keselamatan
                    Anda.
                  </p>
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section className="border-y border-stone-300 py-5">
              <Mail className="mb-4 h-5 w-5 text-blue-800" />
              <h2 className="font-editorial text-xl font-bold">
                Hubungi TPDotcom
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Untuk informasi mengenai program, kegiatan, dan layanan
                organisasi, silakan pelajari halaman program TPDotcom.
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
