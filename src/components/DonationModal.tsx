import {
  ArrowLeft,
  Check,
  Copy,
  Heart,
  Info,
  Landmark,
  QrCode,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = "bank" | "qris" | "kitabisa";

const BANK_NAME = "BSI";
const ACCOUNT_NAME = "TRANSFORMASI PEREMPUAN DOTCOM";
const ACCOUNT_NUMBER = "5655555562";

const DONATION_TIERS = [
  { amount: 50000, label: "Rp50.000" },
  { amount: 150000, label: "Rp150.000" },
  { amount: 250000, label: "Rp250.000" },
  { amount: 1000000, label: "Rp1.000.000" },
];

const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedAmount, setSelectedAmount] = useState(250000);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("bank");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");

  const parsedCustomAmount =
    customAmount.trim() === "" ? null : Number(customAmount);

  const amount =
    parsedCustomAmount !== null &&
    Number.isFinite(parsedCustomAmount) &&
    parsedCustomAmount > 0
      ? Math.floor(parsedCustomAmount)
      : selectedAmount;

  const isCustomAmountValid =
    parsedCustomAmount === null ||
    (Number.isFinite(parsedCustomAmount) &&
      parsedCustomAmount >= 1000 &&
      Number.isSafeInteger(parsedCustomAmount));

  const canShowBankInstructions =
    paymentMethod === "bank" && isCustomAmountValid && amount >= 1000;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
      setCopyError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async (text: string) => {
    setCopyError("");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
      setCopyError(
        "Tidak dapat menyalin otomatis. Silakan salin teks secara manual.",
      );
    }
  };

  const handleCustomAmountChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    setCustomAmount(digitsOnly);
    setCopied(false);
    setCopyError("");
  };

  const handleSelectTier = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount("");
    setCopied(false);
    setCopyError("");
  };

  const handleMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setCopied(false);
    setCopyError("");
  };

  const bankInstructions = [
    "Informasi Donasi TPDotcom",
    `Nominal: ${formatRupiah(amount)}`,
    `Bank: ${BANK_NAME}`,
    `Nama rekening: ${ACCOUNT_NAME}`,
    `Nomor rekening: ${ACCOUNT_NUMBER}`,
    "Mohon verifikasi detail rekening sebelum transfer.",
  ].join("\n");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/65 backdrop-blur-[3px] sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-modal-title"
        className="relative flex max-h-[92dvh] w-full max-w-xl flex-col overflow-hidden border border-stone-200 bg-[#faf9f5] shadow-2xl sm:max-h-[88dvh]"
      >
        {/* Header */}
        <div className="relative shrink-0 bg-[#142238] px-5 py-6 text-white sm:px-7">
          <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-10 border border-white/10" />
          <div className="absolute right-10 top-8 h-16 w-16 border border-white/10" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                Solidaritas & Dukungan
              </p>

              <h2
                id="donation-modal-title"
                className="font-editorial text-2xl leading-tight tracking-tight sm:text-3xl"
              >
                Dukung kerja
                <br />
                pemberdayaan perempuan.
              </h2>

              <p className="mt-3 max-w-sm text-xs leading-6 text-slate-300">
                Pilih nominal dan metode pembayaran untuk melihat instruksi
                donasi yang tersedia.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup jendela donasi"
              className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto overscroll-contain">
          <div className="space-y-7 px-5 py-6 sm:px-7">
            {/* Amount */}
            <section>
              <div className="mb-3 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Langkah 01
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    Tentukan nominal
                  </h3>
                </div>

                <span className="text-[11px] text-slate-500">Dalam rupiah</span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {DONATION_TIERS.map((tier) => {
                  const selected =
                    !customAmount && selectedAmount === tier.amount;

                  return (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => handleSelectTier(tier.amount)}
                      aria-pressed={selected}
                      className={`min-h-[60px] border px-3 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                        selected
                          ? "border-blue-800 bg-blue-50 text-blue-950"
                          : "border-stone-300 bg-white text-slate-700 hover:border-slate-500"
                      }`}
                    >
                      <span className="block text-sm font-semibold">
                        {tier.label}
                      </span>
                      <span
                        className={`mt-1 block text-[10px] ${
                          selected ? "text-blue-700" : "text-slate-400"
                        }`}
                      >
                        {selected ? "Dipilih" : "Pilih nominal"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <label
                htmlFor="donation-custom-amount"
                className="mt-4 block text-xs font-medium text-slate-700"
              >
                Atau masukkan nominal sendiri
              </label>

              <div className="mt-2 flex items-center border border-stone-300 bg-white focus-within:border-blue-800 focus-within:ring-1 focus-within:ring-blue-800">
                <span className="border-r border-stone-200 px-3 py-3 text-sm text-slate-500">
                  Rp
                </span>

                <input
                  id="donation-custom-amount"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="Minimal 1.000"
                  value={customAmount}
                  onChange={(event) =>
                    handleCustomAmountChange(event.target.value)
                  }
                  aria-invalid={!isCustomAmountValid}
                  aria-describedby="donation-amount-help"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <p
                id="donation-amount-help"
                className={`mt-2 text-[11px] leading-5 ${
                  !isCustomAmountValid ? "text-red-700" : "text-slate-500"
                }`}
              >
                {!isCustomAmountValid
                  ? "Masukkan nominal minimal Rp1.000 dalam angka bulat."
                  : customAmount
                    ? `Nominal pilihan: ${formatRupiah(amount)}`
                    : "Pilih salah satu nominal di atas atau masukkan jumlah sendiri."}
              </p>
            </section>

            {/* Payment method */}
            <section>
              <div className="mb-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Langkah 02
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">
                  Pilih metode pembayaran
                </h3>
              </div>

              <div className="grid grid-cols-3 border-y border-stone-300">
                <button
                  type="button"
                  onClick={() => handleMethodChange("bank")}
                  aria-pressed={paymentMethod === "bank"}
                  className={`flex min-h-[84px] flex-col items-start justify-between border-r border-stone-300 p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700 ${
                    paymentMethod === "bank"
                      ? "bg-blue-50 text-blue-950"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  <Landmark size={19} strokeWidth={1.7} />
                  <span>
                    <span className="block text-xs font-semibold">
                      Transfer bank
                    </span>
                    <span className="mt-1 block text-[10px] text-slate-500">
                      Instruksi rekening
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleMethodChange("qris")}
                  aria-pressed={paymentMethod === "qris"}
                  className={`flex min-h-[84px] flex-col items-start justify-between border-r border-stone-300 p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700 ${
                    paymentMethod === "qris"
                      ? "bg-blue-50 text-blue-950"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  <QrCode size={19} strokeWidth={1.7} />
                  <span>
                    <span className="block text-xs font-semibold">QRIS</span>
                    <span className="mt-1 block text-[10px] text-slate-500">
                      Belum tersedia
                    </span>
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleMethodChange("kitabisa")}
                  aria-pressed={paymentMethod === "kitabisa"}
                  className={`flex min-h-[84px] flex-col items-start justify-between p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700 ${
                    paymentMethod === "kitabisa"
                      ? "bg-blue-50 text-blue-950"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  <Heart size={19} strokeWidth={1.7} />
                  <span>
                    <span className="block text-xs font-semibold">
                      Kitabisa
                    </span>
                    <span className="mt-1 block text-[10px] text-slate-500">
                      Belum tersedia
                    </span>
                  </span>
                </button>
              </div>
            </section>

            {/* Bank transfer instructions */}
            {paymentMethod === "bank" && (
              <section className="border border-stone-300 bg-white">
                <div className="flex items-start justify-between gap-3 border-b border-stone-200 px-4 py-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Instruksi transfer
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900">
                      Rekening {BANK_NAME}
                    </h3>
                  </div>

                  <Landmark
                    size={19}
                    className="text-slate-400"
                    aria-hidden="true"
                  />
                </div>

                <div className="space-y-4 p-4">
                  <div>
                    <p className="text-[11px] text-slate-500">Nama rekening</p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-900">
                      {ACCOUNT_NAME}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-500">Nomor rekening</p>

                    <div className="mt-1 flex items-center justify-between gap-3">
                      <p className="font-mono text-xl font-semibold tracking-wide text-slate-950">
                        {ACCOUNT_NUMBER}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleCopy(ACCOUNT_NUMBER)}
                        className="inline-flex min-h-9 shrink-0 items-center gap-1.5 border border-stone-300 px-2.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-800 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                      >
                        {copied ? (
                          <Check size={14} aria-hidden="true" />
                        ) : (
                          <Copy size={14} aria-hidden="true" />
                        )}
                        {copied ? "Tersalin" : "Salin"}
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-3">
                    <p className="text-[11px] text-slate-500">Nominal donasi</p>
                    <p className="mt-1 text-lg font-semibold text-blue-900">
                      {formatRupiah(amount)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(bankInstructions)}
                    className="inline-flex min-h-10 w-full items-center justify-center gap-2 border border-blue-800 px-4 text-xs font-semibold text-blue-900 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    {copied ? (
                      <Check size={15} aria-hidden="true" />
                    ) : (
                      <Copy size={15} aria-hidden="true" />
                    )}
                    {copied
                      ? "Informasi berhasil disalin"
                      : "Salin seluruh instruksi"}
                  </button>

                  {copyError && (
                    <p role="status" className="text-xs leading-5 text-red-700">
                      {copyError}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* QRIS unavailable */}
            {paymentMethod === "qris" && (
              <section className="border border-stone-300 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stone-100 text-slate-500">
                    <QrCode size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      QRIS belum dikonfigurasi
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      Kode QR pembayaran resmi belum tersedia di halaman ini.
                      Kami tidak menampilkan gambar QR pengganti agar kamu tidak
                      keliru melakukan pembayaran.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Kitabisa unavailable */}
            {paymentMethod === "kitabisa" && (
              <section className="border border-stone-300 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stone-100 text-slate-500">
                    <Heart size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Tautan Kitabisa belum tersedia
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-600">
                      Halaman penggalangan dana resmi belum ditautkan. Pilih
                      transfer bank jika detail rekening telah dikonfirmasi oleh
                      pihak TPDotcom.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Important note */}
            <div className="flex items-start gap-3 border-l-2 border-amber-500 bg-amber-50/70 px-4 py-3">
              <Info
                size={17}
                className="mt-0.5 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <p className="text-[11px] leading-5 text-slate-700">
                Sebelum mentransfer, pastikan nama penerima dan nomor rekening
                sesuai dengan informasi resmi TPDotcom. Modal ini belum
                memproses pembayaran atau memverifikasi transaksi.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-blue-800 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Kembali ke situs
            </button>

            <p className="pb-1 text-center text-[10px] leading-5 text-slate-500">
              Dukungan diberikan secara sukarela. Informasi pembayaran perlu
              dikonfirmasi sebelum digunakan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationModal;
