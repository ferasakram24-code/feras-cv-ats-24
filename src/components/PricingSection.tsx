import React from 'react';
import { Check, Sparkles, Zap, ShieldCheck, MessageCircle, ArrowLeft } from 'lucide-react';
import { PRICING_PACKAGES, WHATSAPP_NUMBER } from '../data/packages';

interface PricingSectionProps {
  onSelectPackage: (packageId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>أسعار واضحة ومناسبة للجميع</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            باقات وأسعار تصميم السيرة الذاتية <span className="text-blue-600">ATS</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            اختر الباقة المناسبة لاحتياجك المهني مع ضمان التعديلات والمراجعات حتى رضاك التام:
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl border-2 border-blue-500 scale-100 md:-translate-y-2'
                    : 'bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-1/2 translate-x-1/2">
                    <span className={`px-4 py-1 rounded-full text-xs font-black shadow-md ${
                      isPopular
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950'
                        : 'bg-blue-600 text-white'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-1 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {pkg.nameEn}
                    </p>
                    <p className={`text-xs mt-3 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className={`p-4 rounded-2xl mb-6 text-center ${
                    isPopular ? 'bg-slate-800/80 border border-slate-700' : 'bg-white border border-slate-200 shadow-xs'
                  }`}>
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className={`text-4xl sm:text-5xl font-black ${
                        isPopular ? 'text-emerald-400' : 'text-emerald-600'
                      }`}>
                        {pkg.priceJod}
                      </span>
                      <span className={`text-sm font-bold ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                        دينار أردني
                      </span>
                    </div>
                    <span className={`text-[11px] block mt-1 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      دفعة واحدة شاملة التصميم والمراجعة
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className={`text-xs font-bold block ${isPopular ? 'text-slate-300' : 'text-slate-700'}`}>
                      ما تشمله هذه الباقة:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Actions */}
                <div className="space-y-2 pt-4 border-t border-slate-200/20">
                  <button
                    onClick={() => onSelectPackage(pkg.id)}
                    className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    <span>اختيار هذه الباقة ({pkg.priceJod} د.أ)</span>
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`مرحباً أستاذ فراس، أرغب بطلب: ${pkg.name} بسعر ${pkg.priceJod} دينار أردني.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors ${
                      isPopular
                        ? 'text-emerald-400 hover:bg-slate-800'
                        : 'text-emerald-700 hover:bg-emerald-50'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>طلب سريع عبر الواتساب</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Payment Guarantee Note */}
        <div className="mt-14 max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>طرق الدفع المعتمدة:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 font-semibold text-slate-700">CliQ فوري (الأردن)</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 font-semibold text-slate-700">محافظ إلكترونية (زين/أورانج/أمنية)</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 font-semibold text-slate-700">تحويل بنكي</span>
            <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 font-semibold text-slate-700">Western Union للعملاء بالخارج</span>
          </div>
        </div>

      </div>
    </section>
  );
};
