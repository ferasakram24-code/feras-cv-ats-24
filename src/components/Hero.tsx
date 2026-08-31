import React from 'react';
import { 
  FileCheck2, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Share2, 
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowDown
} from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, CONSULTANT_NAME, CONSULTANT_EXPERIENCE } from '../data/packages';

interface HeroProps {
  onOrderClick: () => void;
  onViewSamplesClick: () => void;
  onCheckerClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onViewSamplesClick, onCheckerClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs sm:text-sm font-medium text-slate-200 shadow-inner backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-bold">متوافق مع بوابات التوظيف ATS</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">باللغتين العربية والإنجليزية</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] sm:leading-[1.2] text-white">
            تصميم سيرة ذاتية احترافية <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
              متوافقة 100% مع نظام ATS
            </span>
          </h1>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-slate-300 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-medium text-slate-200">
              مع المستشار <span className="font-extrabold text-amber-400">{CONSULTANT_NAME}</span>
            </p>
            <p className="text-sm sm:text-base text-slate-400 flex items-center justify-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/80 text-slate-200">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>{CONSULTANT_EXPERIENCE}</span>
              </span>
            </p>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              اجعل سيرتك الذاتية تتصدر ترشيحات مسؤولي التوظيف وخوارزميات الفرز الآلي في كبرى الشركات والبنوك بالأردن ودول الخليج.
            </p>
          </div>

          {/* Pricing Highlight Pill in Hero */}
          <div className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-emerald-950/60 to-blue-950/60 border border-emerald-500/40 rounded-2xl px-5 py-2.5 backdrop-blur-md">
            <span className="text-xs sm:text-sm text-slate-300 font-medium">سعر الخدمة الأساسية:</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">10 دينار أردني</span>
            <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">شامل المراجعة والملف المفتوح</span>
          </div>

          {/* Call to Actions Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
            
            <a
              id="hero-whatsapp-btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً أستاذ فراس، أرغب في طلب تصميم سيرة ذاتية احترافية متوافقة مع نظام ATS.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>اطلب CV الآن عبر واتساب</span>
            </a>

            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base shadow-lg shadow-blue-600/30 transition-all active:scale-98"
            >
              <Zap className="w-5 h-5" />
              <span>تعبئة طلب السيرة الذاتية</span>
            </button>
          </div>

          {/* Secondary Quick Action Links */}
          <div className="mt-5 flex items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
            <button
              onClick={onViewSamplesClick}
              className="hover:text-white underline underline-offset-4 transition-colors flex items-center gap-1"
            >
              <span>استعراض نماذج حية</span>
            </button>
            <span>•</span>
            <button
              onClick={onCheckerClick}
              className="hover:text-amber-300 underline underline-offset-4 transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>فحص جاهزية سيرتك الحالية مجاناً</span>
            </button>
          </div>

        </div>

        {/* Feature Badges Grid */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2.5">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100">توافق تام مع ATS</h3>
            <p className="text-xs text-slate-400 mt-1">تخطي الفرز الآلي بنسبة تفوق 95%</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2.5">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100">صياغة لغة الإنجاز</h3>
            <p className="text-xs text-slate-400 mt-1">تحويل المهام الروتينية لأرقام ونتائج</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-2.5">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100">دعم ونشر LinkedIn</h3>
            <p className="text-xs text-slate-400 mt-1">فرصة وصول مميزة لشبكة التوظيف</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100">تسليم PDF + Word</h3>
            <p className="text-xs text-slate-400 mt-1">ملف مفتوح قابل للتعديل المستقبلي</p>
          </div>

        </div>

      </div>
    </section>
  );
};
