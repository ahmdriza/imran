"use client";

import { Stethoscope, Heart, ArrowUp, Mail, Link as LinkIcon, Globe, BookOpen, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Profile */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-900 font-bold shadow-lg shadow-teal-500/20">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">4th Year Medical Student</h3>
                <p className="text-xs text-teal-400 font-semibold">USMLE Aspirant & Clinical Researcher</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Dedicated 4th-year medical student passionate about clinical excellence, medical research, 
              hospital event leadership, and healthcare financial management. Preparing for USMLE licensure 
              to make a lasting impact in medicine.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 max-w-md text-xs text-slate-300 italic flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <span>&quot;Primum non nocere — First, do no harm.&quot; Dedicated to compassionate patient-centered healthcare.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">Medical Journey</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400 transition-colors">Core Skills</a>
              </li>
              <li>
                <a href="#research" className="hover:text-teal-400 transition-colors">Medical Research</a>
              </li>
              <li>
                <a href="#sports" className="hover:text-teal-400 transition-colors">Extracurricular Sports</a>
              </li>
              <li>
                <a href="#cv" className="hover:text-teal-400 transition-colors">Curriculum Vitae</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect & Links</h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <a href="mailto:medstudent@example.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>med.researcher@medical.edu</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <LinkIcon className="w-4 h-4 text-teal-400" />
                <span>LinkedIn / MedProfile</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>ResearchGate Publications</span>
              </a>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800/60">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  Actively Seeking Sub-I / Electives
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Medical Student Portfolio & CV. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" />
            <span>for USMLE Aspirant.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-teal-600 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
