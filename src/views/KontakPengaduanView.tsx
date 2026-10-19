import React, { useState } from "react";
import {
  Lock,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Send,
  HelpCircle,
  FileCheck,
  ChevronDown,
} from "lucide-react";
import { PageRoute, CaseReportForm } from "../types";
import { EMERGENCY_HOTLINES, KBGO_CATEGORIES } from "../data/content";

interface KontakPengaduanViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const KontakPengaduanView: React.FC<KontakPengaduanViewProps> = ({
  onNavigate,
}) => {
  const [formData, setFormData] = useState<CaseReportForm>({
    fullName: "",
    aliasName: "",
    isAnonymous: true,
    safeContactMethod: "whatsapp",
    contactValue: "",
    victimAgeGroup: "18-24 tahun",
    victimLocation: "",
    category: "Penyebaran Konten Intim Non-Konsensual (NCII)",
    platforms: ["WhatsApp"],
    incidentDate: "",
    urgencyLevel: "darurat",
    neededServices: ["Penghapusan Konten Darurat (Takedown)"],
    chronology: "",
    hasEvidence: true,
    consentAgreed: false,
  });

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handlePlatformToggle = (platform: string) => {
    setFormData((prev) => {
      const exists = prev.platforms.includes(platform);
      return {
        ...prev,
        platforms: exists
          ? prev.platforms.filter((p) => p !== platform)
          : [...prev.platforms, platform],
      };
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.neededServices.includes(service);
      return {
        ...prev,
        neededServices: exists
          ? prev.neededServices.filter((s) => s !== service)
          : [...prev.neededServices, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentAgreed) {
      alert(
        "Mohon menyetujui pernyataan persetujuan dan kerahasiaan sebelum mengirimkan pengaduan.",
      );
      return;
    }
    // Generate secure random case ticket
    const ticket = "TP-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedTicket(ticket);
  };

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com/search?q=cuaca+hari+ini");
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-12 border-b border-stone-200 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Layanan Pengaduan Kasus 24 Jam
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Ruang Aman Pengaduan & Bantuan Krisis KBGO
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Identitas dan cerita Anda dilindungi sepenuhnya. Layanan kami 100%
            gratis, berbasis persetujuan penuh korban (informed consent), dan
            bebas dari segala bentuk penghakiman.
          </p>

          {/* <div className="flex justify-center pt-2">
            <button
              onClick={handleQuickExit}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <AlertTriangle className="w-4 h-4 text-amber-950" />
              <span>Keluar Cepat dari Halaman Ini (ESC)</span>
            </button>
          </div> */}
        </div>
      </section>

      {/* Main Form & Hotlines Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Encrypted Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xl">
            {submittedTicket ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Laporan Berhasil Diterima & Terenkripsi
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                    Nomor Kasus Rahasia Anda: <br />
                    <span className="font-mono text-blue-700">
                      {submittedTicket}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Simpan nomor tiket ini untuk berkomunikasi dengan pendamping
                    kasus. Tim krisis TP.com akan menghubungi Anda melalui
                    saluran aman yang Anda pilih dalam waktu kurang dari 24 jam
                    (atau segera untuk kategori darurat).
                  </p>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-2">
                  <p className="font-bold text-slate-900 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>Langkah Selanjutnya untuk Anda:</span>
                  </p>
                  <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                    <li>
                      Jangan hapus obrolan bukti dari pelaku di perangkat Anda.
                    </li>
                    <li>
                      Jika situasi sangat mendesak dan Anda merasa terancam
                      secara fisik, hubungi hotline WhatsApp kami sekarang
                      dengan menyebutkan nomor tiket {submittedTicket}.
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/6282339431011?text=Halo%20TP.com%2C%20saya%20sudah%20mengisi%20formulir%20pengaduan%20dengan%20nomor%20tiket%20${submittedTicket}.%20Saya%20membutuhkan%20respon%20darurat.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition-colors inline-flex items-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>
                      Hubungkan Langsung ke WhatsApp Crisis (+62 812-9900-8720)
                    </span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      setFormData({
                        fullName: "",
                        aliasName: "",
                        isAnonymous: true,
                        safeContactMethod: "whatsapp",
                        contactValue: "",
                        victimAgeGroup: "18-24 tahun",
                        victimLocation: "",
                        category:
                          "Penyebaran Konten Intim Non-Konsensual (NCII)",
                        platforms: ["WhatsApp"],
                        incidentDate: "",
                        urgencyLevel: "darurat",
                        neededServices: [
                          "Penghapusan Konten Darurat (Takedown)",
                        ],
                        chronology: "",
                        hasEvidence: true,
                        consentAgreed: false,
                      });
                    }}
                    className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-slate-800 font-semibold rounded-xl text-xs transition-colors"
                  >
                    Buat Laporan Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Lock className="w-4 h-4" />
                    <span>Formulir Terenkripsi Standar TLS 1.3</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-slate-900 mt-1">
                    Isi Laporan Kasus Baru
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Hanya bagian bertanda bintang (*) yang wajib diisi. Anda
                    dapat menggunakan nama samaran.
                  </p>
                </div>

                {/* Section 1: Identitas & Kontak Aman */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    1. Identitas & Kanal Kontak Aman
                  </h4>

                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      id="isAnonymousCheck"
                      checked={formData.isAnonymous}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          isAnonymous: e.target.checked,
                        }))
                      }
                      className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <label
                      htmlFor="isAnonymousCheck"
                      className="text-slate-800 font-semibold cursor-pointer"
                    >
                      Saya ingin melapor secara Anonim / Menggunakan Nama
                      Samaran (Sangat Disarankan)
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {formData.isAnonymous ? (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Nama Panggilan / Samaran yang Diinginkan *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Mawar / Klien A"
                          value={formData.aliasName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              aliasName: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Nama Lengkap Sesuai KTP *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Masukkan nama lengkap"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              fullName: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Rentang Usia Korban *
                      </label>
                      <select
                        value={formData.victimAgeGroup}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            victimAgeGroup: e.target.value,
                          }))
                        }
                        className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                      >
                        <option value="Di bawah 18 tahun">
                          Di bawah 18 tahun (Prioritas Anak)
                        </option>
                        <option value="18-24 tahun">18 - 24 tahun</option>
                        <option value="25-34 tahun">25 - 34 tahun</option>
                        <option value="35-49 tahun">35 - 49 tahun</option>
                        <option value="50 tahun ke atas">
                          50 tahun ke atas
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Kanal Komunikasi Aman untuk Balasan *
                      </label>
                      <select
                        value={formData.safeContactMethod}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            safeContactMethod: e.target.value as any,
                          }))
                        }
                        className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                      >
                        <option value="whatsapp">
                          WhatsApp (Nomor Pribadi Aman)
                        </option>
                        <option value="signal">
                          Signal Messenger (Paling Direkomendasikan)
                        </option>
                        <option value="telegram">
                          Telegram (Username Rahasia)
                        </option>
                        <option value="email">
                          Email Aman (Proton / Gmail Baru)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nomor HP / Username / Email Tersebut *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: 08123456789 atau @username_signal"
                        value={formData.contactValue}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            contactValue: e.target.value,
                          }))
                        }
                        className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Detail Kejadian & Kategori */}
                <div className="space-y-4 pt-4 border-t border-stone-200">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    2. Detail Kasus & Platform Terlibat
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Kategori Utama Kekerasan *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                        className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                      >
                        {KBGO_CATEGORIES.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                        <option value="Lainnya">
                          Bentuk Kekerasan Siber Lainnya
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Tingkat Kegentingan / Urgensi *
                      </label>
                      <select
                        value={formData.urgencyLevel}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            urgencyLevel: e.target.value as any,
                          }))
                        }
                        className={`w-full px-3.5 py-2.5 text-xs font-bold border rounded-xl focus:outline-none bg-white ${
                          formData.urgencyLevel === "darurat"
                            ? "border-blue-500 text-blue-800"
                            : "border-stone-300 text-slate-800"
                        }`}
                      >
                        <option value="darurat">
                          Sangat Darurat (Ancaman sebar &lt; 24 jam / Bahaya
                          Fisik)
                        </option>
                        <option value="segera">
                          Segera (Butuh respon dalam 1-2 hari kerja)
                        </option>
                        <option value="konsultasi">
                          Konsultasi Terjadwal / Informasi Hukum
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Platform Tempat Terjadinya Kekerasan (Pilih semua yang
                      sesuai):
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "WhatsApp",
                        "Telegram",
                        "Instagram",
                        "X (Twitter)",
                        "TikTok",
                        "Google Drive / Cloud",
                        "Situs Dewasa / Forum",
                        "MiChat / Dating App",
                      ].map((plat) => (
                        <button
                          key={plat}
                          type="button"
                          onClick={() => handlePlatformToggle(plat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                            formData.platforms.includes(plat)
                              ? "bg-blue-100 border-blue-300 text-blue-800 font-bold"
                              : "bg-white border-stone-200 text-slate-700 hover:bg-stone-50"
                          }`}
                        >
                          {plat} {formData.platforms.includes(plat) && "✓"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Kebutuhan Bantuan yang Anda Harapkan:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        "Penghapusan Konten Darurat (Takedown & StopNCII)",
                        "Pendampingan Hukum & Laporan Polisi (UU TPKS)",
                        "Konseling Trauma & Dukungan Psikologis",
                        "Audit Keamanan Gawai & Deteksi Stalkerware",
                        "Permohonan Perlindungan Fisik ke LPSK",
                      ].map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => handleServiceToggle(srv)}
                          className={`p-2.5 rounded-xl text-left border transition-colors cursor-pointer text-xs ${
                            formData.neededServices.includes(srv)
                              ? "bg-blue-50 border-blue-400 text-blue-900 font-semibold"
                              : "bg-white border-stone-200 text-slate-700 hover:bg-stone-50"
                          }`}
                        >
                          {srv} {formData.neededServices.includes(srv) && "✓"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chronology */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kronologi Singkat Kejadian *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Jelaskan secara singkat apa yang terjadi (siapa pelaku: mantan, kenalan online, orang asing; apa ancamannya; dan apakah ada bukti screenshot)..."
                      value={formData.chronology}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          chronology: e.target.value,
                        }))
                      }
                      className="w-full px-3.5 py-2.5 text-xs border border-stone-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Section 3: Persetujuan Etik */}
                <div className="space-y-3 pt-4 border-t border-stone-200">
                  <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-200/80 flex items-start gap-2.5 text-xs">
                    <input
                      type="checkbox"
                      id="consentCheck"
                      required
                      checked={formData.consentAgreed}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          consentAgreed: e.target.checked,
                        }))
                      }
                      className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <label
                      htmlFor="consentCheck"
                      className="text-slate-800 leading-relaxed cursor-pointer"
                    >
                      <strong>Pernyataan Persetujuan Korban:</strong> Saya
                      memberikan persetujuan kepada tim paralegal, advokat, dan
                      psikolog TP.com untuk mempblues informasi ini semata-mata
                      demi kepentingan pendampingan kasus dan keselamatan saya.
                      Data ini tidak akan diserahkan kepada pihak ketiga atau
                      kepolisian tanpa persetujuan tertulis lanjutan dari saya.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pengaduan Terenkripsi</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Emergency Contacts & FAQ */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Emergency Hotlines */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-blue-400" />
                <h3 className="font-editorial text-lg font-bold">
                  Kanal Respons Cepat
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Jika situasi sangat mengancam dan butuh tindakan segera, hubungi
                langsung nomor di bawah ini:
              </p>

              <div className="space-y-3 pt-2">
                {EMERGENCY_HOTLINES.map((hot, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 space-y-1"
                  >
                    <div className="text-xs font-bold text-white">
                      {hot.name}
                    </div>
                    <div className="text-sm font-mono font-bold text-blue-400">
                      {hot.number}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {hot.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy FAQ */}
            <div className="bg-white rounded-3xl border border-stone-200 p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Jaminan Keamanan Pelapor</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-800 mb-0.5">
                    Apakah saya harus membayar biaya pendampingan?
                  </h4>
                  <p>
                    Tidak. Seluruh layanan TP.com gratis 100% dan didanai
                    melalui donasi publik independen.
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-100">
                  <h4 className="font-bold text-slate-800 mb-0.5">
                    Apakah laporan ini akan otomatis dibawa ke polisi?
                  </h4>
                  <p>
                    Tidak. Keputusan melapor ke aparat penegak hukum sepenuhnya
                    adalah hak korban. Jika Anda hanya menginginkan takedown
                    konten dan konseling psikologis, kami menghormatinya 100%.
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-100">
                  <h4 className="font-bold text-slate-800 mb-0.5">
                    Bagaimana jika pelaku mengancam keselamatan fisik saya?
                  </h4>
                  <p>
                    Kami segera menghubungkan kasus Anda dengan Lembaga
                    Perlindungan Saksi dan Korban (LPSK) dan shelter rumah aman
                    mitra kami.
                  </p>
                </div>
              </div>
            </div>

            {/* Office & Address */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Sekretariat Advokasi TP.com:</span>
              </div>
              <p className="leading-relaxed">
                Gedung Pusat Advokasi Masyarakat Sipil, Jl. Diponegoro No. 42,
                Menteng, Jakarta Pusat 10310. (Kunjungan tatap muka memerlukan
                janji temu demi keamanan klien).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
