import React from 'react';
import { FileCheck2, MessageCircle, Linkedin, Mail, Phone, ShieldCheck, Heart, Smartphone } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, WHATSAPP_INTL_DISPLAY, CONSULTANT_NAME, CONSULTANT_EXPERIENCE } from '../data/packages';

interface FooterProps {
  onOpenInstallModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInstallModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white">Feras CV ATS</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              خدمة تصميم ومراجعة السيرة الذاتية الاحترافية المتوافقة مع معايير أنظمة التوظيف العالمية (ATS)، بإشراف المستشار {CONSULTANT_NAME} ({CONSULTANT_EXPERIENCE}).
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/search/results/all/?keywords=Feras%20Abdellatif"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">
                  لماذا تختار خدمتي؟
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('ats-comparison')} className="hover:text-white transition-colors">
                  مقارنة معايير نظام ATS
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('samples')} className="hover:text-white transition-colors">
                  نماذج السير الذاتية الحية
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('ats-checker')} className="hover:text-white transition-colors">
                  فاحص جاهزية السيرة الذاتية
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">
                  الباقات والأسعار (تبدأ من 10 د.أ)
                </button>
              </li>
              {onOpenInstallModal && (
                <li>
                  <button 
                    onClick={onOpenInstallModal} 
                    className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>تطبيق أندرويد & Google Play</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: ATS Guarantee & Features */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">ضمان الجودة</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>توافق مع برمجيات Taleo, Workday, Lever</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تسليم ملفات PDF و Word مفتوحة</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تعديلات غير محدودة حتى الرضا التام</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>سرية وأمان تام لكافة البيانات</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">معلومات التواصل المباشر</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">{WHATSAPP_INTL_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>واتساب محلي: {WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>LinkedIn: Feras Abdellatif</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2">
                عمان - المملكة الأردنية الهاشمية (خدمات متاحة محلياً ودولياً)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Feras CV ATS — جميع الحقوق محفوظة</p>
          <p className="flex items-center gap-1">
            <span>تصميم وتطوير احترافي لخدمة الكفاءات والباحثين عن التميز المهني</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
