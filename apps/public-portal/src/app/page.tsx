import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Zap,
  Star,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
              <Zap className="text-white fill-white" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Nutri<span className="text-emerald-600">Platform</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-[15px] font-semibold text-slate-500">
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Solutions
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              How it works
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">
              Resources
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="hidden sm:block text-[15px] font-bold text-slate-700 hover:text-emerald-600 transition-colors"
            >
              Sign In
            </Link>
            <button className="bg-slate-900 text-white px-7 py-3 rounded-full text-[15px] font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-8">
                <Star size={14} className="fill-emerald-500" />
                <span>The #1 AI Nutrition Assistant</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
                Fuel your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  ambition.
                </span>
              </h1>

              <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                Hyper-personalized meal plans driven by data, tailored to your
                biology, and designed to fit your lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-200 flex items-center justify-center gap-2">
                  Build Your Plan
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                  View Demo
                </button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 filter grayscale">
                <span className="font-black text-xl italic">HEALTHLINE</span>
                <span className="font-black text-xl italic">FORBES</span>
                <span className="font-black text-xl italic">WIRED</span>
              </div>
            </div>

            {/* --- VISUAL ELEMENT --- */}
            <div className="relative">
              <div className="relative z-10 bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] p-8 md:p-12 transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                      Daily Goal
                    </p>
                    <h3 className="text-3xl font-black text-slate-900">
                      Protein Intake
                    </h3>
                  </div>
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <BarChart3 size={32} />
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      label: 'Animal Protein',
                      val: '75%',
                      color: 'bg-emerald-500',
                    },
                    { label: 'Plant Based', val: '40%', color: 'bg-teal-400' },
                    { label: 'Amino Acids', val: '90%', color: 'bg-slate-800' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span>{item.label}</span>
                        <span>{item.val}</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: item.val }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-5 bg-slate-900 rounded-2xl flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-medium">
                    Your micronutrients are perfectly balanced today!
                  </p>
                </div>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100/40 to-teal-100/40 rounded-full blur-[120px] -z-10" />
            </div>
          </div>
        </section>

        {/* --- TRUST BAR --- */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="flex gap-5">
              <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600">
                <ShieldCheck />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Clinically Validated
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Evidence-based algorithms verified by top nutritionists.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600">
                <Zap />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Instant Analysis
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Snap a photo of your meal and get instant nutrient breakdown.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600">
                <BarChart3 />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Smart Tracking
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Sync with Apple Health and WearOS devices seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
