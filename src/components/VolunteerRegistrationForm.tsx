import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import React, { useState } from "react";

interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  motivation: string;
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialFormData: VolunteerFormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  interest: "",
  motivation: "",
};

export const VolunteerRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>(initialFormData);

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setStatus("idle");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.location.trim() ||
      !formData.interest ||
      !formData.motivation.trim()
    ) {
      setStatus("error");
      setError("Mohon lengkapi seluruh formulir pendaftaran.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_VOLUNTEER_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setError(
        "Konfigurasi pengiriman email belum tersedia. Silakan hubungi administrator.",
      );
      return;
    }

    setStatus("sending");

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        location: formData.location.trim(),
        interest: formData.interest,
        motivation: formData.motivation.trim(),
        sent_at: new Date().toLocaleString("id-ID"),
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      console.error("EmailJS error:", err);

      setStatus("error");
      setError(
        "Pendaftaran belum berhasil dikirim. Silakan periksa koneksi internet dan coba kembali.",
      );
    }
  };

  return (
    <section
      id="bergabung"
      className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12"
    >
      <div className="grid overflow-hidden border border-stone-300 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Informasi */}
        <div className="bg-[#f8f7f3] p-7 sm:p-10 lg:p-12">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">
            Bergabung bersama kami
          </p>

          <h2 className="font-editorial text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Jadilah bagian dari perubahan yang berarti.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Kami membuka kesempatan bagi individu yang memiliki semangat untuk
            berkontribusi dalam pemberdayaan perempuan, kesetaraan, dan
            penguatan kapasitas masyarakat.
          </p>

          <div className="mt-9 space-y-5">
            {[
              {
                title: "Belajar dan berkembang",
                description:
                  "Mengembangkan pengetahuan dan pengalaman melalui kegiatan organisasi.",
              },
              {
                title: "Berkolaborasi",
                description:
                  "Bekerja bersama tim dan komunitas untuk menciptakan perubahan.",
              },
              {
                title: "Memberikan dampak",
                description:
                  "Menggunakan kemampuan untuk mendukung masyarakat.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 border-t border-stone-300 pt-4"
              >
                <span className="font-editorial text-sm text-blue-800">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-stone-300 pt-5">
            <p className="text-xs leading-6 text-slate-500">
              Setelah formulir dikirim, tim TPDotcom akan menerima informasi
              pendaftaran melalui email dan menindaklanjutinya.
            </p>
          </div>
        </div>

        {/* Formulir */}
        <div className="bg-white p-7 sm:p-10 lg:p-12">
          <div className="mb-8">
            <h3 className="font-editorial text-2xl font-semibold text-slate-900">
              Formulir Pendaftaran
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Silakan lengkapi informasi berikut untuk mendaftar menjadi
              volunteer TPDotcom.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold text-slate-700"
              >
                Nama lengkap <span className="text-red-600">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                required
                disabled={status === "sending"}
                className="w-full border border-stone-300 bg-[#fffefa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-800 disabled:opacity-60"
              />
            </div>

            {/* Email dan Nomor HP */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Email aktif <span className="text-red-600">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  required
                  disabled={status === "sending"}
                  className="w-full border border-stone-300 bg-[#fffefa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-800 disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold text-slate-700"
                >
                  Nomor WhatsApp <span className="text-red-600">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  required
                  disabled={status === "sending"}
                  className="w-full border border-stone-300 bg-[#fffefa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-800 disabled:opacity-60"
                />
              </div>
            </div>

            {/* Domisili */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-xs font-semibold text-slate-700"
              >
                Domisili <span className="text-red-600">*</span>
              </label>

              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Contoh: Mataram, Lombok Barat"
                required
                disabled={status === "sending"}
                className="w-full border border-stone-300 bg-[#fffefa] px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-blue-800 disabled:opacity-60"
              />
            </div>

            {/* Bidang kontribusi */}
            <div>
              <label
                htmlFor="interest"
                className="mb-2 block text-xs font-semibold text-slate-700"
              >
                Bidang kontribusi yang diminati{" "}
                <span className="text-red-600">*</span>
              </label>

              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                disabled={status === "sending"}
                className="w-full border border-stone-300 bg-[#fffefa] px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-blue-800 disabled:opacity-60"
              >
                <option value="">Pilih bidang kontribusi</option>
                <option value="Kegiatan dan Program">
                  Kegiatan dan Program
                </option>
                <option value="Edukasi dan Literasi">
                  Edukasi dan Literasi
                </option>
                <option value="Kampanye dan Advokasi">
                  Kampanye dan Advokasi
                </option>
                <option value="Dukungan Digital">Dukungan Digital</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            {/* Motivasi */}
            <div>
              <label
                htmlFor="motivation"
                className="mb-2 block text-xs font-semibold text-slate-700"
              >
                Alasan ingin bergabung <span className="text-red-600">*</span>
              </label>

              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Ceritakan sedikit tentang diri dan alasan Anda ingin menjadi volunteer..."
                required
                disabled={status === "sending"}
                className="w-full resize-y border border-stone-300 bg-[#fffefa] px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-800 disabled:opacity-60"
              />
            </div>

            {/* Notifikasi berhasil */}
            {status === "success" && (
              <div
                role="status"
                className="flex gap-3 border border-green-200 bg-green-50 px-4 py-4 text-sm text-green-800"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

                <div>
                  <p className="font-semibold">Pendaftaran berhasil dikirim!</p>
                  <p className="mt-1 text-xs leading-5">
                    Terima kasih telah mendaftar menjadi volunteer TPDotcom. Tim
                    kami akan menghubungi Anda melalui kontak yang telah
                    diberikan.
                  </p>
                </div>
              </div>
            )}

            {/* Notifikasi gagal */}
            {status === "error" && (
              <div
                role="alert"
                className="flex gap-3 border border-red-200 bg-red-50 px-4 py-3 text-xs leading-6 text-red-700"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {/* Persetujuan */}
            <p className="text-xs leading-6 text-slate-500">
              Dengan mengirimkan formulir ini, Anda menyetujui bahwa informasi
              yang diberikan dapat digunakan oleh TPDotcom untuk keperluan
              komunikasi dan proses pendaftaran volunteer.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Mengirim pendaftaran...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Pendaftaran Terkirim
                </>
              ) : (
                <>
                  Kirim Pendaftaran
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-center text-[11px] leading-5 text-slate-400">
              Pendaftaran akan dikirim langsung ke email resmi TPDotcom.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
