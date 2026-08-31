import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send, Check } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, CONSULTANT_NAME } from '../data/packages';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    'مرحباً أستاذ فراس، أرغب بطلب سيرة ذاتية ATS (10 د.أ)',
    'أرغب بطلب الباقة الثنائية (عربي + إنجليزي - 15 د.أ)',
    'لدي سيرة حالية وأرغب بفحصها وتعديلها',
    'أريد الاستفسار عن خدمة LinkedIn و Cover Letter'
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Interactive Popup Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                FA
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{CONSULTANT_NAME}</h4>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>متصل ومستعد للرد (واتساب)</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-700/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-xs">
              مرحباً بك! 👋 اختر رسالة سريعة للبدء أو اكتب استفسارك وسأجيبك فوراً على الواتساب:
            </div>

            {/* Quick message options */}
            <div className="space-y-1.5">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(msg)}
                  className="w-full text-right text-xs p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-800 transition-colors flex items-center justify-between gap-2 group cursor-pointer"
                >
                  <span className="group-hover:text-emerald-700">{msg}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom input */}
            <div className="pt-2 flex gap-2">
              <input
                type="text"
                placeholder="اكتب رسالتك الخاصة..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && customMsg && handleSend(customMsg)}
                className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => customMsg && handleSend(customMsg)}
                className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

          <div className="p-2.5 bg-slate-100 text-center text-[10px] text-slate-500 border-t border-slate-200">
            رقم الواتساب الرسمي: {WHATSAPP_DISPLAY}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-2xl shadow-emerald-600/50 transition-all active:scale-95 cursor-pointer"
        aria-label="تواصل عبر الواتساب"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">💬 تواصل واتساب ({WHATSAPP_DISPLAY})</span>
        <span className="sm:hidden">واتساب</span>
      </button>

    </div>
  );
};
