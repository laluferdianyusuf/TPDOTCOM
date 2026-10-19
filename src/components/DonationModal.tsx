import React, { useState } from "react";
import {
  X,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Copy,
  QrCode,
} from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedTier, setSelectedTier] = useState<number>(250000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<
    "qris" | "bank" | "kitabisa"
  >("qris");
  const [donorName, setDonorName] = useState<string>("");
  const [donorEmail, setDonorEmail] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [copiedAccount, setCopiedAccount] = useState<boolean>(false);

  const tiers = [
    {
      amount: 50000,
      label: "Rp 50.000",
      impact: "Pulsa & paket data darurat untuk 1 korban pelapor",
    },
    {
      amount: 150000,
      label: "Rp 150.000",
      impact: "Paket transportasi aman & pendampingan BAP",
    },
    {
      amount: 250000,
      label: "Rp 250.000",
      impact: "1 sesi konseling pemulihan trauma psikologis",
    },
    {
      amount: 1000000,
      label: "Rp 1.000.000",
      impact: "Bantuan hukum & litigasi pro bono hingga tuntas",
    },
  ];

  const handleCopyBank = () => {
    navigator.clipboard.writeText("8720199000");
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-lg overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-blue-900 to-blue-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-700/60 rounded-xl">
              <Heart className="w-5 h-5 fill-blue-200 text-blue-200" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold leading-none">
                Dukung Kedaulatan Korban
              </h3>
              <p className="text-xs text-blue-200 mt-1">
                Donasi independen untuk layanan pendampingan 100% gratis
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-blue-200 hover:text-white rounded-lg hover:bg-blue-700/50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-editorial text-2xl font-bold text-slate-900">
              Terima Kasih Atas Solidaritas Anda!
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Dukungan Anda memungkinkan tim pendamping hukum, teknisi keamanan
              siber, dan psikolog TP.com terus mendampingi ratusan perempuan dan
              kelompok rentan yang sedang berjuang keluar dari jeratan kekerasan
              digital.
            </p>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-slate-500 border border-stone-200">
              Konfirmasi donasi dan bukti penerimaan telah dikirimkan ke email
              Anda. Laporan akuntabilitas keuangan kami diaudit dan
              dipublikasikan setiap tahun.
            </div>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Selesai
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            {/* Tier Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Pilih Nominal Solidaritas
              </label>
              <div className="grid grid-cols-2 gap-2">
                {tiers.map((tier) => (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount("");
                    }}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      selectedTier === tier.amount && !customAmount
                        ? "border-blue-600 bg-blue-50/80 text-blue-950 font-bold ring-1 ring-blue-600"
                        : "border-stone-200 hover:border-slate-400 text-slate-800 bg-white"
                    }`}
                  >
                    <div className="text-sm font-bold">{tier.label}</div>
                    <div className="text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-1">
                      {tier.impact}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mt-2.5">
                <input
                  type="number"
                  placeholder="Atau masukkan nominal lain (Rp)"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedTier(0);
                  }}
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Metode Pembayaran
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "qris", label: "QRIS Instan", icon: QrCode },
                  { id: "bank", label: "Transfer Bank", icon: ShieldCheck },
                  { id: "kitabisa", label: "Kitabisa Partner", icon: Heart },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`py-2 px-2 text-center text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      paymentMethod === m.id
                        ? "border-blue-600 bg-blue-50 text-blue-900 font-bold"
                        : "border-stone-200 text-slate-600 hover:bg-stone-50"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bank details if bank transfer */}
            {paymentMethod === "bank" && (
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">
                    Bank BSI (TRANSFORMASI PEREMPUAN DOTCOM):
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyBank}
                    className="text-blue-700 hover:underline inline-flex items-center gap-1 font-bold"
                  >
                    <Copy className="w-3 h-3" />{" "}
                    {copiedAccount ? "Tersalin!" : "Salin Rekening"}
                  </button>
                </div>
                <div className="font-mono text-sm font-bold text-slate-900">
                  5655555562
                </div>
              </div>
            )}

            {paymentMethod === "qris" && (
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-2">
                <div className="w-32 h-32 bg-white p-2 border border-stone-300 rounded-lg mx-auto flex items-center justify-center">
                  <QrCode className="w-24 h-24 text-slate-900" />
                </div>
                <p className="text-[11px] text-slate-500">
                  Dapat dipindai dari BCA, Mandiri, GoPay, OVO, ShopeePay, DANA
                  & seluruh aplikasi perbankan.
                </p>
              </div>
            )}

            {/* Donor info */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anonymousCheck"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="anonymousCheck"
                  className="text-slate-700 font-medium"
                >
                  Donasikan sebagai Anonim (Nama tidak dipublikasikan)
                </label>
              </div>

              {!isAnonymous && (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="px-3 py-2 border border-stone-300 rounded-lg text-xs"
                    required={!isAnonymous}
                  />
                  <input
                    type="email"
                    placeholder="Email Penerima Laporan"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="px-3 py-2 border border-stone-300 rounded-lg text-xs"
                    required={!isAnonymous}
                  />
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>
                Lanjutkan Donasi (
                {customAmount
                  ? `Rp ${Number(customAmount).toLocaleString("id-ID")}`
                  : `Rp ${selectedTier.toLocaleString("id-ID")}`}
                )
              </span>
            </button>

            <p className="text-[11px] text-center text-slate-400">
              TP.com adalah yayasan nirlaba independen. Seluruh dana disalurkan
              langsung untuk operasional pendampingan korban.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
