import React from 'react';
import { 
  Award, 
  Briefcase, 
  Linkedin, 
  CheckCircle2, 
  Building, 
  GraduationCap, 
  ShieldCheck, 
  MessageCircle,
  TrendingUp,
  Users
} from 'lucide-react';
import { CONSULTANT_NAME, CONSULTANT_EXPERIENCE, LINKEDIN_PROFILE_URL, WHATSAPP_NUMBER } from '../data/packages';

export const AboutFeras: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left/Main Column: Bio & Experience highlights (8 cols) */}
            <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>نبذة عن المستشار</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {CONSULTANT_NAME}
                </h2>
                
                <p className="text-sm sm:text-base font-bold text-blue-600 mt-1 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{CONSULTANT_EXPERIENCE}</span>
                </p>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  على مدار أكثر من 14 عاماً في الإدارة المالية، التحليل المصرفي، وإدارة المحافظ والائتمان، شاركت في مراجعة وتقييم المئات من طلبات التوظيف والملفات المهنية. أدرك تماماً ما يبحث عنه مدير التوظيف (Hiring Manager) في أول 6 ثوانٍ من النظر إلى السيرة الذاتية، وكيف تعمل بوابات الفرز الآلي في كبرى البنوك والمؤسسات الإقليمية.
                </p>

                {/* Core Strengths */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">معرفة عميقة بسوق العمل</h4>
                      <p className="text-xs text-slate-500 mt-0.5">فهم دقيق لمتطلبات الشركات في الأردن ودول الخليج العربي.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">لغة الإنجاز والأرقام</h4>
                      <p className="text-xs text-slate-500 mt-0.5">صياغة مسارك المهني بأسلوب مقنع ومبني على النتائج الكمية.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">شبكة علاقات مهنية على LinkedIn</h4>
                      <p className="text-xs text-slate-500 mt-0.5">المساهمة في دعم ونشر الكفاءات للوصول لفرص أوسع.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">إشراف شخصي مباشر</h4>
                      <p className="text-xs text-slate-500 mt-0.5">كل سيرة ذاتية تُراجع وتُصاغ بعناية يدوية مخصصة وليست قوالب جاهزة عشوائية.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>تواصل معي عبر الواتساب</span>
                </a>

                <a
                  href="https://www.linkedin.com/search/results/all/?keywords=Feras%20Abdellatif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn: Feras Abdellatif</span>
                </a>
              </div>
            </div>

            {/* Right Column: Key Stats Card (4 cols) */}
            <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-4">
                  إحصائيات وخبرات
                </span>

                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <div className="text-3xl font-black text-amber-400">14+</div>
                    <div className="text-xs font-bold text-slate-200 mt-1">عاماً من الخبرة المصرفية والمالية</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">في كبرى المؤسسات والبنوك التجارية</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <div className="text-3xl font-black text-emerald-400">100%</div>
                    <div className="text-xs font-bold text-slate-200 mt-1">مطابقة لمعايير أنظمة ATS</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Greenhouse, Taleo, Workday, Lever</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <div className="text-3xl font-black text-sky-400">24-48h</div>
                    <div className="text-xs font-bold text-slate-200 mt-1">سرعة تسليم المسودة الأولى</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">مع تعديلات مستمرة حتى الاعتماد</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-400 block font-medium">
                  نضمن لك سيرة ذاتية تمنحك الأفضلية في سوق العمل
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
