import React, { useState } from 'react';
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, FileText, Sparkles, Check, X } from 'lucide-react';

export const AtsComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'rules'>('comparison');

  const badCvPoints = [
    { text: 'أعمدة متعددة وجداول معقدة تربك روبوتات الفرز الآلي وتجعل الترتيب مشوشاً', impact: 'فشل قراءة 60% من المحتوى' },
    { text: 'استخدام أشرطة تقييم المهارات (مثل 80% في Excel) التي لا يفهمها نظام ATS', impact: 'تجاهل المهارة كلياً' },
    { text: 'كتابة النصوص داخل صور أو صناديق نصوص (Text Boxes) غير قابلة للاستخراج', impact: 'ملف يظهر فارغاً للروبوت' },
    { text: 'صياغة عامة ومبهمة للمهام بدون أرقام أو إنجازات كمية ملموسة', impact: 'تقييم منخفض جداً' },
    { text: 'غياب الكلمات المفتاحية التخصصية المطلوبة في إعلان الوظيفة', impact: 'استبعاد فوري في المرحلة الأولى' }
  ];

  const goodCvPoints = [
    { text: 'هيكلية أحادية العمود نظيفة ومنسقة بدقة وفق المعايير القياسية العالمية', impact: 'قراءة كاملة 100%' },
    { text: 'كتابة المهارات ككلمات مفتاحية واضحة ومباشرة (Technical & Core Competencies)', impact: 'تطابق مع شروط الوظيفة' },
    { text: 'نصوص واضحة ومقروءة متوافقة مع محركات الفهرسة والـ OCR', impact: 'فهرسة دقيقة لكل كلمة' },
    { text: 'صياغة تركز على لغة الإنجاز (Action Verbs + Metrics + Results)', impact: 'جذب انتباه مسؤول التوظيف' },
    { text: 'تضمين الكلمات المفتاحية الأكثر طلباً في السوق الأردني والخليجي', impact: 'ترشيح في صدارة القائمة' }
  ];

  return (
    <section id="ats-comparison" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مقارنة عملية سريعة</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            لماذا تفشل السير الذاتية التقليدية وتنجح سيرة <span className="text-blue-600">ATS</span>؟
          </h2>
          <p className="mt-3 text-base text-slate-600">
            أكثر من 75% من السير الذاتية لا تصل أصلاً إلى عين مسؤول التوظيف بسبب عوائق برمجية بسيطة. إليك الفارق الجوهري:
          </p>
        </div>

        {/* Comparison Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Bad / Traditional CV Card */}
          <div className="bg-rose-50/50 rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-rose-500"></div>
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">السيرة الذاتية التقليدية العادية</h3>
                  <span className="text-xs text-rose-600 font-semibold">نسبة الرفض الآلي: تتجاوز 75%</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-700 text-xs font-black">
                غير متوافقة ❌
              </span>
            </div>

            <ul className="space-y-4">
              {badCvPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{pt.text}</p>
                    <span className="inline-block mt-0.5 text-xs text-rose-600 font-semibold">
                      النتيجة: {pt.impact}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-rose-200/60 bg-rose-100/50 rounded-xl p-3 text-center text-xs text-rose-800 font-bold">
              تضيع فرصة التأهل للمقابلة حتى وإن كنت تملك خبرات ممتازة!
            </div>
          </div>

          {/* Good / ATS Optimized Card */}
          <div className="bg-emerald-50/50 rounded-3xl p-6 sm:p-8 border border-emerald-300 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-emerald-500"></div>

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">سيرة Feras CV ATS الاحترافية</h3>
                  <span className="text-xs text-emerald-700 font-semibold">نسبة القبول وتخطي الفلترة: 95%+</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-black shadow-sm">
                معتمدة ATS 100% ✅
              </span>
            </div>

            <ul className="space-y-4">
              {goodCvPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{pt.text}</p>
                    <span className="inline-block mt-0.5 text-xs text-emerald-700 font-bold">
                      الميزة: {pt.impact}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-emerald-200 bg-emerald-100/60 rounded-xl p-3 text-center text-xs text-emerald-900 font-bold">
              تضمن وصول سيرتك لأعين صانعي القرار ومسؤولي التوظيف مباشرة!
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
