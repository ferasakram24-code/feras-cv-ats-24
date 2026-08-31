import React from 'react';
import { FileText, Eye, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { ATS_SAMPLES } from '../data/atsSamples';

interface SamplesSectionProps {
  onOpenSampleModal: () => void;
  onSelectSampleForOrder: (sampleTitle: string) => void;
}

export const SamplesSection: React.FC<SamplesSectionProps> = ({ onOpenSampleModal, onSelectSampleForOrder }) => {
  return (
    <section id="samples" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>نماذج حية معتمدة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            نماذج السير الذاتية المتوافقة مع <span className="text-blue-600">ATS</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            شاهد كيف نصيغ السير الذاتية لتجمع بين القراءة الآلية الفائقة للروبوتات والقراءة البصرية الممتعة لمسؤولي التوظيف:
          </p>
        </div>

        {/* Sample Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ATS_SAMPLES.map((sample) => (
            <div
              key={sample.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {sample.field}
                  </span>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>توافق {sample.atsScore}%</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {sample.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {sample.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {sample.keyHighlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={onOpenSampleModal}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-slate-600" />
                  <span>معاينة وتكبير النموذج</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenSampleModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all cursor-pointer"
          >
            <span>فتح نافذة استعراض النماذج الكاملة وقراءتها</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
