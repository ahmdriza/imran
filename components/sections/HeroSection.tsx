"use client";

interface HeroSectionProps {
  onOpenCVModal?: () => void;
}

export default function HeroSection({ onOpenCVModal }: HeroSectionProps) {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-start px-8 lg:px-24 overflow-hidden py-16">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-90 transition-transform duration-[10000ms] hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* Soft Clinical Light Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl animate-fade-in-up space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-sm">
            4th-Year Medical Student
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-container text-primary border border-outline-variant">
            USMLE Aspirant
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            Clinical Clerkships Completed
          </span>
        </div>

        <h2
          className="text-[40px] lg:text-[64px] font-bold text-on-surface leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Future Physician & <br />
          <span className="text-primary">Clinical Researcher</span>
        </h2>

        <p className="text-[17px] leading-[1.6] text-on-surface-variant max-w-lg">
          Bridging clinical diagnosis with medical research, hospital event management, empathetic bedside communication, time optimization, and healthcare finance acumen.
        </p>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="px-3 py-1 rounded-lg bg-white border border-outline-variant text-slate-700 shadow-2xs">
            🔬 Med Research
          </span>
          <span className="px-3 py-1 rounded-lg bg-white border border-outline-variant text-slate-700 shadow-2xs">
            📋 Event Management
          </span>
          <span className="px-3 py-1 rounded-lg bg-white border border-outline-variant text-slate-700 shadow-2xs">
            💬 Communication
          </span>
          <span className="px-3 py-1 rounded-lg bg-white border border-outline-variant text-slate-700 shadow-2xs">
            ⏰ Time Management
          </span>
          <span className="px-3 py-1 rounded-lg bg-white border border-outline-variant text-slate-700 shadow-2xs">
            💵 Finance Management
          </span>
        </div>

        {/* Sports Bar */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium pt-1">
          <span className="font-bold text-on-surface">Athletics:</span>
          <span className="px-2.5 py-0.5 rounded bg-surface-container border border-outline-variant">🏐 Volleyball</span>
          <span className="px-2.5 py-0.5 rounded bg-surface-container border border-outline-variant">🏀 Basketball</span>
          <span className="px-2.5 py-0.5 rounded bg-surface-container border border-outline-variant">🎾 Tennis</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#cv"
            className="flex items-center gap-3 px-7 py-3.5 border border-primary bg-primary text-white font-label-caps text-[12px] uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-md cursor-pointer rounded-sm"
          >
            View Interactive CV
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              description
            </span>
          </a>
          <a
            href="#research"
            className="flex items-center gap-2 px-7 py-3.5 border border-on-surface bg-white text-on-surface font-label-caps text-[12px] uppercase tracking-widest hover:bg-surface-container transition-all duration-300 cursor-pointer rounded-sm"
          >
            Medical Research
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
