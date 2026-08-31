import React, { useState, useEffect } from 'react';
import { FileCheck2, MessageCircle, Sparkles, Menu, X, Award, ShieldCheck, Smartphone } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/packages';

interface HeaderProps {
  onOpenOrder: () => void;
  onOpenSamples: () => void;
  onOpenInstallModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrder, onOpenSamples, onOpenInstallModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
          : 'bg-slate-900 text-white py-4 border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className={`text-xl font-black tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                    Feras CV ATS
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    ATS 100%
                  </span>
                </div>
                <span className={`text-xs font-medium flex items-center gap-1 ${isScrolled ? 'text-slate-500' : 'text-slate-400'}`}>
                  <span>بإشراف فراس عبد اللطيف</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-blue-500"></span>
                  <span className="text-[11px] text-amber-500 font-semibold">14 سنة خبرة</span>
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => scrollTo('features')}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              لماذا خدمتي؟
            </button>
            <button
              onClick={() => scrollTo('ats-comparison')}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              مقارنة نظام ATS
            </button>
            <button
              onClick={() => scrollTo('samples')}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              نماذج السير الذاتية
            </button>
            <button
              onClick={() => scrollTo('ats-checker')}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 flex items-center gap-1.5 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>فاحص الجاهزية</span>
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              الباقات والأسعار
            </button>
            <button
              onClick={() => scrollTo('about')}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              عن المستشار
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              الأسئلة الشائعة
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenInstallModal && (
              <button
                onClick={onOpenInstallModal}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isScrolled 
                    ? 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100' 
                    : 'border-indigo-400/40 bg-indigo-900/40 text-indigo-200 hover:bg-indigo-800/60'
                }`}
                title="تثبيت التطبيق على هواتف أندرويد & Google Play"
              >
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                <span>تطبيق أندرويد</span>
              </button>
            )}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً أستاذ فراس، أرغب في الاستفسار عن خدمة تصميم السيرة الذاتية ATS.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-600/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>واتساب {WHATSAPP_DISPLAY}</span>
            </a>

            <button
              onClick={onOpenOrder}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-600/25 active:scale-95"
            >
              <span>اطلب CV الآن (10 د.أ)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-slate-800'}`}
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl text-slate-800 dark:text-slate-100 flex flex-col gap-3">
            <button
              onClick={() => scrollTo('features')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm"
            >
              لماذا تختار خدمتي؟
            </button>
            <button
              onClick={() => scrollTo('ats-comparison')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm"
            >
              مقارنة نظام ATS
            </button>
            <button
              onClick={() => scrollTo('samples')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm"
            >
              نماذج السير الذاتية
            </button>
            <button
              onClick={() => scrollTo('ats-checker')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm flex items-center justify-between"
            >
              <span>فاحص الجاهزية الذكي</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">مجاني</span>
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm"
            >
              الباقات والأسعار
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm"
            >
              عن المستشار فراس
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm"
            >
              الأسئلة الشائعة
            </button>

            {onOpenInstallModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInstallModal();
                }}
                className="text-right py-2 px-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold text-sm flex items-center justify-between border border-indigo-200 dark:border-indigo-800"
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-indigo-600" />
                  <span>تثبيت التطبيق على الأندرويد & متجر Play</span>
                </div>
                <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded font-bold">APK / PWA</span>
              </button>
            )}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm text-center shadow-md shadow-blue-600/20"
              >
                اطلب السيرة الذاتية فوراً (10 د.أ)
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>محادثة واتساب مباشرة</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
