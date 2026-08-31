import React from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  Search, 
  Share2, 
  GraduationCap, 
  FileSpreadsheet, 
  Clock, 
  Sparkles,
  Award,
  ArrowRight
} from 'lucide-react';
import { CONSULTANT_NAME } from '../data/packages';

interface WhyChooseUsProps {
  onOrderClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOrderClick }) => {
  const advantages = [
    {
      icon: Cpu,
      title: 'توافق قياسي مع أنظمة الفرز الآلي (ATS)',
      description: 'نلتزم بالهيكلية المعيارية المعتمدة عالمياً (تنسيق خطي واحد، خطوط قياسية قابلة للقراءة، وترميز متسلسل للأقسام) لتضمن اجتياز الروبوتات بنسبة تفوق 95%.',
      color: 'blue'
    },
    {
      icon: Search,
      title: 'تحسين الكلمات المفتاحية التخصصية (Keywords)',
      description: 'استخراج الكلمات والمهارات التقنية والقيادية الأكثر طلباً في السوق للأدوار المستهدفة لضمان ظهور سيرتك الذاتية في أعلى نتائج بحث مسؤولي الموارد البشرية.',
      color: 'emerald'
    },
    {
      icon: FileSpreadsheet,
      title: 'صياغة احترافية باللغتين (عربي / إنجليزي)',
      description: 'كتابة لغوية سليمة مع ترجمة دقيقة للمسميات والمصطلحات المصرفية والتقنية والإدارية، سواء اخترت العربية أو الإنجليزية أو النسخة المزدوجة.',
      color: 'indigo'
    },
    {
      icon: Share2,
      title: 'دعم ونشر السيرة الذاتية عبر شبكة LinkedIn',
      description: 'مساعدتك في ربط ملفك المهني مع شبكة لينكدإن الخاصة بالاستشاري فراس عبد اللطيف لزيادة فرص وصولك لمدراء التوظيف والشركات الباحثة عن كفاءات.',
      color: 'sky'
    },
    {
      icon: GraduationCap,
      title: 'مخصص لجميع المستويات والمسارات المهنية',
      description: 'سواء كنت خريجاً جديداً تبحث عن أول خطوة، موظفاً تسعى لترقية، أو مديراً وخبيراً تنفيذياً يبحث عن فرص إقليمية في الأردن والخليج.',
      color: 'amber'
    },
    {
      icon: Clock,
      title: 'تسليم سريع مع ملف Word مفتوح المصدر',
      description: 'استلام المسودة الأولى خلال 24 - 48 ساعة، مع تسليم نسخة Word مفتوحة ومجهزة لتقوم بتحديث خبراتك المستقبلية بنفسك مجاناً ودون أي قيود.',
      color: 'purple'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>معايير توظيف مصرفية واستشارية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            لماذا تختار خدمة <span className="text-blue-600">Feras CV ATS</span>؟
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            الفرق بين سيرة ذاتية يتم تجاهلها في ثوانٍ وبين سيرة تفتح لك أبواب المقابلات هو فهم كيفية تفكير مسؤولي التوظيف وخوارزميات الفحص الرقمية.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600">
                  <span>معتمد ومضمون 100%</span>
                  <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-bold">
              هل سيرتك الذاتية الحالية جاهزة للمنافسة في السوق؟
            </h3>
            <p className="text-sm text-blue-200 max-w-xl">
              لا تخسر الفرص الوظيفية بسبب أخطاء بسيطة في التنسيق. ابدأ الآن بسعر رمزي يبدأ من 10 دنانير فقط.
            </p>
          </div>
          <button
            onClick={onOrderClick}
            className="whitespace-nowrap px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-95 flex items-center gap-2"
          >
            <span>طلب الخدمة فوراً</span>
            <Sparkles className="w-4 h-4 fill-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
