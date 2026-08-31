import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  FileSearch, 
  ArrowRight, 
  Zap,
  MessageCircle,
  RefreshCw
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/packages';

interface AtsCheckerProps {
  onPreFillOrder: (jobTitle: string, notes: string) => void;
}

export const AtsChecker: React.FC<AtsCheckerProps> = ({ onPreFillOrder }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [skillsText, setSkillsText] = useState('');
  const [bulletPoint, setBulletPoint] = useState('');
  const [hasColumnsOrTables, setHasColumnsOrTables] = useState<'yes' | 'no' | 'not_sure'>('not_sure');
  const [hasIconsOrBars, setHasIconsOrBars] = useState<'yes' | 'no' | 'not_sure'>('not_sure');
  const [hasNumbers, setHasNumbers] = useState<'yes' | 'no' | 'not_sure'>('not_sure');

  const [analyzed, setAnalyzed] = useState(false);
  const [score, setScore] = useState(65);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [detectedKeywords, setDetectedKeywords] = useState<string[]>([]);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    
    let calculatedScore = 50;
    const tips: string[] = [];
    const keywords: string[] = [];

    // Title analysis
    if (jobTitle.trim().length > 3) {
      calculatedScore += 12;
      keywords.push(jobTitle.trim());
    } else {
      tips.push('المسمى الوظيفي غير محدد بدقة؛ يجب توحيد المسمى مع إعلانات التوظيف الرسمية.');
    }

    // Skills analysis
    const splittedSkills = skillsText.split(/[,،\n\t]+/).map(s => s.trim()).filter(s => s.length > 2);
    if (splittedSkills.length >= 5) {
      calculatedScore += 18;
      keywords.push(...splittedSkills.slice(0, 6));
    } else {
      tips.push('عدد المهارات والكلمات المفتاحية قليل؛ تحتاج لإضافة المهارات الفنية التخصصية المطلوبة.');
    }

    // Bullet point / Achievements analysis
    const hasDigits = /\d+/.test(bulletPoint);
    if (bulletPoint.length > 15 && hasDigits) {
      calculatedScore += 15;
    } else {
      tips.push('الخبرات تفتقر للغة الأرقام والمؤشرات الإنجازية (مثل نسب مئوية أو مبالغ أو توفير ساعات عمل).');
    }

    // Format questions
    if (hasColumnsOrTables === 'yes') {
      calculatedScore -= 20;
      tips.push('تحذير: احتواء السيرة على جداول أو أعمدة متعددة يتسبب في فشل قراءة 60% من نصوص الـ ATS.');
    } else if (hasColumnsOrTables === 'no') {
      calculatedScore += 10;
    }

    if (hasIconsOrBars === 'yes') {
      calculatedScore -= 15;
      tips.push('تحذير: أشرطة تقييم المهارات (Progress Bars) لا تقرأها أنظمة الـ ATS وتعتبرها مساحات فارغة.');
    } else if (hasIconsOrBars === 'no') {
      calculatedScore += 5;
    }

    if (hasNumbers === 'yes') {
      calculatedScore += 10;
    }

    // Clamp score
    const finalScore = Math.min(Math.max(calculatedScore, 25), 96);
    setScore(finalScore);
    setFeedback(tips);
    setDetectedKeywords(keywords);
    setAnalyzed(true);
  };

  const handleReset = () => {
    setAnalyzed(false);
    setJobTitle('');
    setSkillsText('');
    setBulletPoint('');
  };

  const handleSendToFeras = () => {
    const summary = `نتائج فحص ATS لسيرتي الذاتية:%0A- المسمى: ${jobTitle || 'غير محدد'}%0A- التقييم الأولي: ${score}%25%0A- الملاحظات: يرغب بتحسين الصياغة والتنسيق مع الأستاذ فراس`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${summary}`, '_blank');
  };

  return (
    <section id="ats-checker" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>أداة تفاعلية سريعة ومجانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            فاحص جاهزية السيرة الذاتية لنظام <span className="text-blue-400">ATS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            أدخل مسمى تخصصك وبعض المهارات لتفحص توافق سيرتك الذاتية الحالية مع خوارزميات الفرز الآلي:
          </p>
        </div>

        {!analyzed ? (
          <form 
            onSubmit={handleAnalyze}
            className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-2">
                  المسمى الوظيفي المستهدف
                </label>
                <input
                  id="checker-job-title"
                  type="text"
                  required
                  placeholder="مثال: Senior Financial Analyst أو مبرمج واجهات"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-200 mb-2">
                  أهم المهارات والبرمجيات (افصل بينها بفاصلة)
                </label>
                <input
                  id="checker-skills"
                  type="text"
                  required
                  placeholder="مثال: Excel, IFRS, Risk Management, SAP, Power BI"
                  value={skillsText}
                  onChange={(e) => setSkillsText(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-200 mb-2">
                عينة من جملة خبراتك الحالية (كيف تصف مسؤولياتك؟)
              </label>
              <textarea
                id="checker-bullet"
                rows={2}
                placeholder="مثال: قمت بإدارة المحفظة المالية ومتابعة التقارير اليومية مع فريق العمل بنسبة نمو 20%"
                value={bulletPoint}
                onChange={(e) => setBulletPoint(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
            </div>

            {/* Quick Format Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-slate-700/60">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  هل تحتوي سيرتك على جداول أو عمودين؟
                </label>
                <select
                  value={hasColumnsOrTables}
                  onChange={(e) => setHasColumnsOrTables(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="no">لا، ملف بنظام عمود واحد قياسي</option>
                  <option value="yes">نعم، تصميم بعمودين أو جداول</option>
                  <option value="not_sure">غير متأكد</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  هل تستخدم أشرطة تقييم لنسب المهارات؟
                </label>
                <select
                  value={hasIconsOrBars}
                  onChange={(e) => setHasIconsOrBars(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="no">لا، مهارات نصية واضحة</option>
                  <option value="yes">نعم، أشرطة ونقاط ورسوم</option>
                  <option value="not_sure">غير متأكد</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  هل تذكر أرقام وإنجازات واضحة؟
                </label>
                <select
                  value={hasNumbers}
                  onChange={(e) => setHasNumbers(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="yes">نعم، أذكر نسب وأرقام ملموسة</option>
                  <option value="no">لا، وصف مهام عام فقط</option>
                  <option value="not_sure">غير متأكد</option>
                </select>
              </div>
            </div>

            <button
              id="checker-submit-btn"
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileSearch className="w-5 h-5" />
              <span>فحص السيرة الذاتية الآن</span>
            </button>
          </form>
        ) : (
          /* Results Card */
          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-700">
              <div className="text-center sm:text-right">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  نتيجة التقييم الأولي لنظام ATS
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  المسمى: {jobTitle || 'غير محدد'}
                </h3>
              </div>

              {/* Score Display */}
              <div className="flex items-center gap-4 bg-slate-900/90 px-6 py-4 rounded-2xl border border-slate-700">
                <div className="text-center">
                  <div className={`text-4xl font-black ${
                    score >= 80 ? 'text-emerald-400' : score >= 60 ? 'text-amber-400' : 'text-rose-400'
                  }`}>
                    {score}%
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold">
                    {score >= 80 ? 'توافق جيد مبدئياً' : score >= 60 ? 'يحتاج تحسين جوهري' : 'خطر استبعاد آلي'}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>أبرز النقاط التي يقوم المستشار فراس بتحسينها لك:</span>
              </h4>
              
              <ul className="space-y-2.5 mb-6">
                {feedback.length > 0 ? (
                  feedback.map((tip, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                      <span>{tip}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-xs sm:text-sm text-emerald-300 flex items-center gap-2 bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>مؤشراتك جيدة، ومع اللمسة المصرفية الاحترافية والكلمات المفتاحية المتقدمة ستصل إلى 98%+.</span>
                  </li>
                )}
              </ul>

              {/* Detected Keywords preview */}
              {detectedKeywords.length > 0 && (
                <div className="mb-6">
                  <span className="text-xs text-slate-400 block mb-2 font-semibold">
                    الكلمات المفتاحية المرصودة:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {detectedKeywords.map((kw, i) => (
                      <span key={i} className="text-xs bg-blue-950 text-blue-300 border border-blue-800 px-3 py-1 rounded-lg">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSendToFeras}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>إرسال هذه الملاحظات للأستاذ فراس عبر واتساب</span>
                </button>

                <button
                  onClick={handleReset}
                  className="py-3.5 px-6 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>فحص بيانات أخرى</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
