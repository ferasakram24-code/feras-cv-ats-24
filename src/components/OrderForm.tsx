import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageCircle, 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  User, 
  Phone, 
  Briefcase, 
  Globe, 
  Layers, 
  Info,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PACKAGES, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/packages';
import { OrderFormData, CvLanguage, ExperienceLevel } from '../types';

interface OrderFormProps {
  initialPackageId?: string;
}

export const OrderForm: React.FC<OrderFormProps> = ({ initialPackageId = 'standard' }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    targetJobTitle: '',
    experienceLevel: 'mid_level',
    language: 'both',
    packageId: initialPackageId,
    additionalNotes: '',
    currentCvStatus: 'need_major_update'
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackageId) {
      setFormData(prev => ({ ...prev, packageId: initialPackageId }));
    }
  }, [initialPackageId]);

  const selectedPackage = PRICING_PACKAGES.find(p => p.id === formData.packageId) || PRICING_PACKAGES[0];

  const getLanguageLabel = (lang: CvLanguage) => {
    switch (lang) {
      case 'arabic': return 'اللغة العربية';
      case 'english': return 'English (الإنجليزية)';
      case 'both': return 'عربي + إنجليزي (باقة ثنائية)';
    }
  };

  const getExperienceLabel = (exp: ExperienceLevel) => {
    switch (exp) {
      case 'fresh_graduate': return 'خريج جديد (Fresh Graduate)';
      case 'mid_level': return 'خبرة 1 - 4 سنوات (Mid-Level)';
      case 'senior_level': return 'خبرة 5 - 9 سنوات (Senior)';
      case 'executive': return 'خبرة 10+ سنوات / مستوى إداري وتنفيذي';
    }
  };

  const getStatusLabel = (st: string) => {
    switch (st) {
      case 'has_old_cv': return 'لدي سيرة ذاتية قديمة وأرغب بإعادة صياغتها وتحويلها لـ ATS';
      case 'from_scratch': return 'لا أملك سيرة ذاتية وسأرسل بياناتي للبدء من الصفر';
      case 'need_major_update': return 'أرغب بتحديث شامل وتغيير المسمى والكلمات المفتاحية';
      default: return '';
    }
  };

  const generateWhatsAppMessage = () => {
    return (
      `*طلب تصميم سيرة ذاتية احترافية ATS (Feras CV ATS)*\n\n` +
      `👤 *الاسم الكريم:* ${formData.fullName.trim() || 'لم يُحدد'}\n` +
      `📱 *رقم الواتساب:* ${formData.phone.trim() || 'لم يُحدد'}\n` +
      `💼 *المسمى الوظيفي / التخصص:* ${formData.targetJobTitle.trim() || 'لم يُحدد'}\n` +
      `📊 *المستوى والخبرة:* ${getExperienceLabel(formData.experienceLevel)}\n` +
      `🌐 *لغة السيرة الذاتية:* ${getLanguageLabel(formData.language)}\n` +
      `📦 *الباقة المختارة:* ${selectedPackage.name} (${selectedPackage.priceJod} دينار أردني)\n` +
      `📝 *حالة الملف الحالي:* ${getStatusLabel(formData.currentCvStatus)}\n` +
      (formData.additionalNotes.trim() ? `📌 *ملاحظات إضافية:* ${formData.additionalNotes.trim()}\n\n` : `\n`) +
      `يرجى التواصل معي للبدء بالتنفيذ والمراجعة مع الأستاذ فراس.`
    );
  };

  const handleCopyMessage = () => {
    const msg = generateWhatsAppMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);

    const msg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="order-form-section" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>طلب فوري ومباشر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            اطلب سيرتك الذاتية الاحترافية الآن
          </h2>
          <p className="mt-3 text-base text-slate-300">
            املأ بياناتك الأساسية لنقوم بتجهيز رسالة الطلب وإرسالها فوراً للأستاذ فراس عبد اللطيف عبر الواتساب:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Order Input Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>الاسم الكامل</span>
                  <span className="text-rose-400">*</span>
                </label>
                <input
                  id="order-name-input"
                  type="text"
                  required
                  placeholder="اكتب اسمك الثلاثي أو الرباعي"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>رقم هاتف الواتساب</span>
                  <span className="text-rose-400">*</span>
                </label>
                <input
                  id="order-phone-input"
                  type="tel"
                  required
                  placeholder="مثال: 0785182272 أو مع الرمز الدولي +962"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Target Job & Specialization */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                  <span>التخصص والخبرة أو المسمى المستهدف</span>
                  <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="order-job-input"
                  rows={2}
                  required
                  placeholder="اكتب تخصصك، مجالك وخبرتك الحالية (مثال: محاسب مصرفي، مهندس برمجيات، مبيعات وتسويق...)"
                  value={formData.targetJobTitle}
                  onChange={(e) => setFormData({ ...formData, targetJobTitle: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>

              {/* Grid 2-cols: Language & Package */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* CV Language */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-sky-400" />
                    <span>لغة السيرة الذاتية</span>
                  </label>
                  <select
                    id="order-lang-select"
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value as CvLanguage })}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="both">عربي + إنجليزي (موصى بها)</option>
                    <option value="arabic">اللغة العربية فقط</option>
                    <option value="english">English Only</option>
                  </select>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>الباقة المطلوبة</span>
                  </label>
                  <select
                    id="order-package-select"
                    value={formData.packageId}
                    onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-blue-500"
                  >
                    {PRICING_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} ({pkg.priceJod} د.أ)
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  مستوى سنوات الخبرة
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'fresh_graduate', label: 'خريج جديد' },
                    { id: 'mid_level', label: '1 - 4 سنوات' },
                    { id: 'senior_level', label: '5 - 9 سنوات' },
                    { id: 'executive', label: '10+ سنوات' }
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, experienceLevel: lvl.id as ExperienceLevel })}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all ${
                        formData.experienceLevel === lvl.id
                          ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current CV status */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  حالة ملفك الحالي
                </label>
                <select
                  value={formData.currentCvStatus}
                  onChange={(e) => setFormData({ ...formData, currentCvStatus: e.target.value as any })}
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="need_major_update">أرغب بتحديث وتنسيق شامل لسيرتي الحالية</option>
                  <option value="has_old_cv">لدي سيرة جاهزة وأرغب بتحويلها وتدقيقها لـ ATS</option>
                  <option value="from_scratch">سأبدأ من الصفر (لا أملك سيرة سابقة)</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  ملاحظات أو روابط إضافية (اختياري)
                </label>
                <input
                  type="text"
                  placeholder="أي جهة محددة تستهدف التقديم إليها أو رابط لينكدإن..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  id="order-whatsapp-submit-btn"
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>إرسال الطلب عبر الواتساب مباشرة ({selectedPackage.priceJod} د.أ)</span>
                </button>
              </div>

            </form>
          </div>

          {/* Live Preview of WhatsApp Message (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span>معاينة رسالة الواتساب المجهزة</span>
                </div>
                <button
                  onClick={handleCopyMessage}
                  className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">تم النسخ</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الرسالة</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone screen preview bubble */}
              <div className="bg-emerald-950/40 border border-emerald-900/60 rounded-2xl p-4 text-xs font-mono text-emerald-100 whitespace-pre-line leading-relaxed shadow-inner">
                {generateWhatsAppMessage()}
              </div>

              {/* Package Summary pill */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">الباقة النشطة:</span>
                  <span className="text-sm font-black text-white">{selectedPackage.name}</span>
                </div>
                <div className="text-left">
                  <span className="text-xl font-black text-emerald-400">{selectedPackage.priceJod}</span>
                  <span className="text-xs text-slate-400 mr-1">دينار أردني</span>
                </div>
              </div>

              {/* Safety & Direct Contact Note */}
              <div className="mt-4 text-[11px] text-slate-400 space-y-1.5">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>تواصل مباشر مع الأستاذ فراس عبد اللطيف على الرقم {WHATSAPP_DISPLAY}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>سرية تامة لجميع بياناتك وخبراتك المهنية</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>تسليم ملفات PDF و Word مفتوحة المصدر والتعديل</span>
                </p>
              </div>
            </div>

            {/* Fast WhatsApp Box */}
            <div className="mt-4 p-4 rounded-2xl bg-emerald-600/10 border border-emerald-500/30 text-center">
              <span className="text-xs text-emerald-300 block mb-1">
                تفضل إرسال ملفك القديم فوراً دون تعبئة النموذج؟
              </span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً أستاذ فراس، سأرسل لك سيرتي الذاتية الحالية للاطلاع عليها وتحديد خطوات التنسيق.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>انقر هنا لفتح محادثة واتساب فارغة</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
