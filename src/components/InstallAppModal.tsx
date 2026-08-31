import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Download, 
  CheckCircle2, 
  ExternalLink, 
  X, 
  Share2, 
  Sparkles, 
  Play, 
  Layers, 
  Globe, 
  Check, 
  Copy, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({ isOpen, onClose }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<'instant' | 'playstore'>('instant');

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      alert('لتثبيت التطبيق على جهاز الأندرويد:\n1. اضغط على قائمة المتصفح (النقاط الثلاث ⁝ في أعلى الشاشة)\n2. اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية"');
    }
  };

  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        dir="rtl"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 left-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <Sparkles className="w-3 h-3" />
                تطبيق أندرويد & متجر Google Play
              </span>
              <h3 className="text-xl font-black mt-1">تثبيت التطبيق على هواتف أندرويد</h3>
            </div>
          </div>
          <p className="text-xs text-blue-100/90 leading-relaxed max-w-lg">
            يمكنك تثبيت تطبيق Feras CV ATS فوراً على هاتفك الذكي أو نشره في متجر Google Play كحزمة APK / AAB معتمدة.
          </p>

          {/* Navigation Tabs */}
          <div className="flex gap-2 mt-5 bg-black/20 p-1 rounded-2xl backdrop-blur-xs">
            <button
              onClick={() => setActiveTab('instant')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'instant'
                  ? 'bg-white text-blue-900 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>1. التثبيت الفوري على الهاتف (PWA)</span>
            </button>
            <button
              onClick={() => setActiveTab('playstore')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'playstore'
                  ? 'bg-white text-blue-900 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>2. النشر على متجر Google Play</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          
          {activeTab === 'instant' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              {/* Direct install CTA */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-right">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/30">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">تثبيت التطبيق بنقرة واحدة (Android)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">يعمل بكامل المزايا بدون الحاجة للتحميل من المتجر، خفيف وسريع وبدون إعلانات.</p>
                  </div>
                </div>

                <button
                  onClick={handleInstallClick}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  <span>{isInstalled ? 'التطبيق مثبت بالفعل' : 'تثبيت الآن على جهازي'}</span>
                </button>
              </div>

              {/* Instructions steps */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                <h5 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  خطوات التثبيت اليدوي على متصفح Chrome أو أي هاتف أندرويد:
                </h5>
                
                <ol className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">1</span>
                    <span>افتح الرابط في متصفح <strong>Google Chrome</strong> على هاتفك الأندرويد.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">2</span>
                    <span>اضغط على زر القائمة <strong>(الثلاث نقاط ⁝)</strong> في الزاوية العلوية للمتصفح.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">3</span>
                    <span>اختر <strong>"تثبيت التطبيق" (Install app)</strong> أو <strong>"إضافة إلى الشاشة الرئيسية" (Add to Home screen)</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">4</span>
                    <span>سيظهر التطبيق فوراً كأيقونة مستقلة على شاشة جوالك ويعمل كتطبيق أندرويد كامل وشاشة كاملة.</span>
                  </li>
                </ol>
              </div>

              {/* Copy App Link */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={window.location.href}
                  className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 font-mono"
                />
                <button
                  onClick={handleCopyUrl}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedUrl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ الرابط للهاتف</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'playstore' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 leading-relaxed">
                <div className="font-extrabold text-sm mb-1 flex items-center gap-1.5 text-blue-800">
                  <Play className="w-4 h-4 fill-blue-800" />
                  طريقة تحويل التطبيق ورفعه على Google Play Store (حزمة APK / AAB):
                </div>
                تطبيق Feras CV ATS مجهز بالكامل بملف الـ <strong>Web Manifest</strong> والأيقونات المتوافقة مع تقنية <strong>TWA (Trusted Web Activity)</strong> المعتمدة من Google Play.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-2">1</div>
                    <h6 className="font-bold text-xs text-slate-900">إنشاء حزمة الأندرويد (.aab)</h6>
                    <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                      ادخل لموقع <strong>PWABuilder.com</strong>، ضع رابط موقعك، واضغط <strong>Package for Android</strong> لتحميل ملف الـ AAB الجاهز.
                    </p>
                  </div>
                  <a
                    href="https://www.pwabuilder.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-[11px] font-bold hover:bg-blue-700 transition-colors"
                  >
                    <span>فتح PWABuilder</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-sm mb-2">2</div>
                    <h6 className="font-bold text-xs text-slate-900">حساب Google Play Console</h6>
                    <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                      سجل الدخول إلى حساب المطور الخاص بك في <strong>Google Play Console</strong> وقم بإنشاء تطبيق جديد بعنوان "Feras CV ATS".
                    </p>
                  </div>
                  <a
                    href="https://play.google.com/console"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-[11px] font-bold hover:bg-indigo-700 transition-colors"
                  >
                    <span>Google Play Console</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-sm mb-2">3</div>
                    <h6 className="font-bold text-xs text-slate-900">رفع الملف والنشر</h6>
                    <p className="text-[11px] text-slate-600 mt-1 leading-normal">
                      ارفع ملف <code>app-release.aab</code> واملأ تفاصيل الوصف والأيقونات، ثم اضغط إرسال للمراجعة ليتم نشره للجميع.
                    </p>
                  </div>
                  <div className="mt-3 py-1.5 px-2 bg-emerald-100 text-emerald-800 rounded-lg text-[10px] font-bold text-center">
                    جاهز 100% ومطابق للشروط
                  </div>
                </div>
              </div>

              {/* Ready Technical Details */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <h6 className="font-bold text-xs text-slate-900 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  المواصفات التقنية المهيأة مسبقاً في الموقع:
                </h6>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-[11px]">
                    <span className="text-slate-500 block">Manifest</span>
                    <span className="font-bold text-emerald-600">جاهز ومفعل</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-[11px]">
                    <span className="text-slate-500 block">Theme Color</span>
                    <span className="font-bold text-blue-600">#1e40af</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-[11px]">
                    <span className="text-slate-500 block">App Icons</span>
                    <span className="font-bold text-emerald-600">SVG & 512px</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200 text-[11px]">
                    <span className="text-slate-500 block">التوافق</span>
                    <span className="font-bold text-indigo-600">Android 6.0+</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            لأي مساعدة في تجهيز حزمة Google Play، تواصل مع الدعم الفني.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
