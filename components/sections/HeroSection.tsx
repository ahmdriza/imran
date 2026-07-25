"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-start px-8 lg:px-24 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center grayscale opacity-90 transition-transform duration-[10000ms] hover:scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChJeRVh3GwNmsL5efP0D1ihOK1l3iZ1rczkmueX_1YrQKJ3JF0U6pIfG-V7qeg7l7MxLcJDHyU0N2B6DpwfSOJdTZbiHSlROgPUvkOTJ7DD6Mc2JeyN5vSOHeDtwuHmbKJfOhCbMEgSamgRGdVQ-ePVuuj0OOpdCdxWZ8wIkekJ3Ob53qQtFWoCqKJayGo-Ezk6pDKW9jAJ6vQ4_839Fj9yfJmhLzyydJykTO0GBlcwUWxFO3Fryv9CWmiNnqMPTM_4KRycrpiHMsc')",
          }}
        />
        {/* Light Scrim for text readability */}
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl animate-fade-in-up">
        <h2 className="text-[40px] lg:text-[72px] font-bold mb-4 text-on-surface leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          I am <br /> a Designer
        </h2>
        <p className="text-[18px] leading-[1.6] text-on-surface-variant mb-8 max-w-md">
          100% html5 bootstrap templates <br /> Made by{" "}
          <a className="text-primary font-bold hover:underline" href="#">
            colorlib.com
          </a>
        </p>
        <button className="flex items-center gap-3 px-8 py-4 border border-on-surface bg-white text-on-surface font-label-caps text-[12px] uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer">
          View Portfolio
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            work
          </span>
        </button>
      </div>

      {/* Hero Controls */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-10">
        <button className="w-12 h-12 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer" aria-label="Previous slide">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="w-12 h-12 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm cursor-pointer" aria-label="Next slide">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
