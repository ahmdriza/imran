"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, FileText, ExternalLink, Filter, CheckCircle2, ChevronRight, Share2 } from "lucide-react";

export default function ResearchSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const researchProjects = [
    {
      id: 1,
      title: "Optimization of Clinical Handover Protocol in Internal Medicine Wards",
      category: "Clinical Audit",
      journal: "Hospital Quality & Patient Safety Audit",
      year: "2025 - 2026",
      authors: "Medical Student (Lead Investigator), Consultant Physician, Nursing Supervisor",
      abstract: "Evaluated the implementation of a standardized SBAR handover tool across acute medical wards. Showed a 34% reduction in miscommunicated diagnostic lab orders and improved transition of care quality.",
      tags: ["Clinical Audit", "Patient Safety", "SBAR"],
      status: "Published",
      accent: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      id: 2,
      title: "Systematic Review of SGLT2 Inhibitor Outcomes in Non-Diabetic Heart Failure Patients",
      category: "Systematic Review",
      journal: "Journal of Cardiovascular Medicine & Therapeutics",
      year: "2024 - 2025",
      authors: "Medical Student, Dept of Cardiology Research Group",
      abstract: "Aggregated trial data across 8 RCTs to evaluate cardiovascular mortality and hospitalization reduction with empagliflozin and dapagliflozin in patients with reduced ejection fraction.",
      tags: ["Cardiology", "Systematic Review", "Pharmacology"],
      status: "In Peer Review",
      accent: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      id: 3,
      title: "Prevalence of Physician Burnout and Time-Management Coping Strategies in Senior Clerkships",
      category: "Medical Education",
      journal: "International Journal of Medical Student Research",
      year: "2024",
      authors: "Medical Student, Student Welfare Research Board",
      abstract: "A cross-sectional study analyzing time allocation, shift workload, and mental health resilience tools among final year medical students during USMLE preparation.",
      tags: ["Medical Education", "Mental Health", "Survey"],
      status: "Presented at Conference",
      accent: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
  ];

  const categories = ["All", "Clinical Audit", "Systematic Review", "Medical Education"];

  const filtered = activeFilter === "All"
    ? researchProjects
    : researchProjects.filter(p => p.category === activeFilter);

  return (
    <section id="research" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
              <BookOpen className="w-4 h-4" />
              <span>Academic & Scientific Endeavors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Medical <span className="medical-gradient-text">Research</span> & Audits
            </h2>
            <p className="text-sm text-slate-600">
              Rigorous evidence-based research, systematic reviews, and quality improvement hospital audits.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Research Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${paper.accent}`}>
                    {paper.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{paper.year}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-teal-600 transition-colors">
                  {paper.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium">
                  <span className="font-semibold text-slate-700">Journal:</span> {paper.journal}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                  {paper.abstract}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {paper.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {paper.status}
                </span>
                <span className="text-xs text-teal-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Metrics Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-around gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-lg font-bold">SPSS & R Data Analysis</span>
              <span className="text-xs text-slate-400">Statistical biostatistics fluency</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-lg font-bold">IRB & Ethical Clearance</span>
              <span className="text-xs text-slate-400">Helsinki Declaration compliance</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-lg font-bold">PubMed & MeSH Literature</span>
              <span className="text-xs text-slate-400">Advanced clinical search curation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
