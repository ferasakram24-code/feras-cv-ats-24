import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Download, 
  Share2, 
  Sparkles, 
  Printer, 
  Globe, 
  Building2, 
  GraduationCap, 
  Award, 
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin
} from 'lucide-react';
import { ATS_SAMPLES } from '../data/atsSamples';
import { AtsSample } from '../types';
import { WHATSAPP_NUMBER } from '../data/packages';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackageForOrder?: (packageId: string) => void;
}

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({ isOpen, onClose, onSelectPackageForOrder }) => {
  const [activeSampleId, setActiveSampleId] = useState<string>(ATS_SAMPLES[0].id);

  if (!isOpen) return null;

  const currentSample = ATS_SAMPLES.find(s => s.id === activeSampleId) || ATS_SAMPLES[0];
  const isEn = currentSample.language === 'en';

  const handlePrint = () => {
    window.print();
  };

  const handleOrderThisStyle = () => {
    const text = `مرحباً أستاذ فراس، أعجبني نموذج سيرة ATS: (${currentSample.title})، وأرغب بتصميم سيرة ذاتية لي بنفس الجودة والمستوى الاحترافي.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div className="bg-slate-900 border border-slate-700 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>معاينة نماذج السير الذاتية ATS القياسية</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  درجة توافق {currentSample.atsScore}%
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                هياكل قياسية معتمدة لخوارزميات الفرز الآلي
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة / PDF</span>
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
          {ATS_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setActiveSampleId(sample.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeSampleId === sample.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{sample.title}</span>
              <span className="text-[10px] opacity-75 uppercase px-1.5 py-0.5 rounded bg-black/20">
                {sample.language === 'ar' ? 'عربي' : 'English'}
              </span>
            </button>
          ))}
        </div>

        {/* Modal Body: CV Visual Sheet Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950">
          
          <div 
            id="ats-print-container"
            dir={isEn ? 'ltr' : 'rtl'}
            className={`max-w-3xl mx-auto bg-white text-slate-900 rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-200 ${
              isEn ? 'font-sans text-left' : 'font-sans text-right'
            }`}
          >
            {/* CV Header: Name & Contact Info */}
            <div className="border-b-2 border-slate-900 pb-5 mb-6 text-center">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                {currentSample.structure.personalInfo.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-blue-800 mt-1">
                {currentSample.structure.personalInfo.title}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-600 mt-3 font-medium">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  {currentSample.structure.personalInfo.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  {currentSample.structure.personalInfo.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {currentSample.structure.personalInfo.location}
                </span>
                {currentSample.structure.personalInfo.linkedin && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-blue-700">
                      <Linkedin className="w-3.5 h-3.5" />
                      {currentSample.structure.personalInfo.linkedin}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'Professional Summary' : 'الملخص المهني'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentSample.structure.profileSummary}
              </p>
            </div>

            {/* Core Competencies / Skills */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'Core Competencies & Technical Skills' : 'المهارات والقدرات الجوهرية (Keywords)'}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                {currentSample.structure.skills.map((skill, i) => (
                  <li key={i} className="leading-snug">{skill}</li>
                ))}
              </ul>
            </div>

            {/* Professional Experience */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-3">
                {isEn ? 'Professional Experience' : 'الخبرات المهنية والعملية'}
              </h2>
              
              <div className="space-y-4">
                {currentSample.structure.experience.map((exp, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs sm:text-sm text-slate-900">
                      <span>{exp.role}</span>
                      <span className="text-slate-500 text-xs">{exp.period}</span>
                    </div>
                    <div className="text-xs font-semibold text-blue-900">
                      {exp.company}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 pt-1">
                      {exp.achievements.map((ach, j) => (
                        <li key={j} className="leading-relaxed">{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
                {isEn ? 'Education' : 'المؤهل العلمي'}
              </h2>
              <div className="space-y-2">
                {currentSample.structure.education.map((edu, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900">{edu.degree}</span>
                      <span className="block text-slate-600 text-xs">{edu.institution}</span>
                    </div>
                    <span className="text-slate-500 text-xs font-medium">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications if any */}
            {currentSample.structure.certifications && (
              <div>
                <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2">
                  {isEn ? 'Certifications & Training' : 'الشهادات المهنية والدورات'}
                </h2>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700">
                  {currentSample.structure.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer: Action Buttons */}
        <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-right">
            💡 يتم تخصيص كل سيرة ذاتية بالكامل بناءً على مجالك وخبراتك الخاصة بواسطة الأستاذ فراس.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleOrderThisStyle}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>طلب سيرة ذاتية مثل هذا النموذج (10 د.أ)</span>
              <Sparkles className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
            >
              إغلاق
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
