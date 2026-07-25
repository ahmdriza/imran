"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, MessageSquare, Clock, DollarSign, BookOpen, Check, ArrowRight, Shield } from "lucide-react";

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);

  const skillsList = [
    {
      id: 0,
      title: "Event Management",
      category: "Leadership & Organization",
      icon: Calendar,
      score: 95,
      accent: "from-sky-500 to-blue-600",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
      description: "Proven track record organizing medical symposiums, health awareness camps, blood donation drives, and student conferences.",
      keyStrengths: [
        "Organized 5+ Major Medical Symposiums & Workshops",
        "Coordinated venue logistics, guest speaker schedules, and delegate registrations",
        "Managed student volunteer committees and inter-departmental teams",
        "Successfully executed emergency health awareness campaigns with 500+ attendees"
      ],
      medicalApplication: "Critical for coordinating multi-disciplinary hospital rounds, organizing grand rounds, and leading clinical team workflows."
    },
    {
      id: 1,
      title: "Communication",
      category: "Interpersonal & Clinical",
      icon: MessageSquare,
      score: 98,
      accent: "from-indigo-500 to-purple-600",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      description: "Exceptional bedside manner, empathetic patient counseling, structured clinical case presentations (SBAR framework), and academic writing.",
      keyStrengths: [
        "High patient satisfaction ratings during hospital clinical rotations",
        "Mastery in breaking difficult medical news with compassion and clarity",
        "Effective SBAR clinical handovers between hospital shift changes",
        "Fluent oral presentations at medical journal clubs and case conferences"
      ],
      medicalApplication: "Ensures error-free clinical handovers, strong patient trust, and seamless teamwork between doctors, nurses, and specialists."
    },
    {
      id: 2,
      title: "Time Management",
      category: "Efficiency & Productivity",
      icon: Clock,
      score: 94,
      accent: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description: "Demonstrated ability to balance demanding 4th-year clinical hospital shifts, rigorous USMLE board preparation, and research deadlines.",
      keyStrengths: [
        "Structured USMLE study blocks alongside 60+ hour clinical rotation weeks",
        "Prioritization of acute medical tasks based on triage urgency",
        "Consistent punctuality for ward rounds, surgeries, and grand rounds",
        "Efficient electronic health records (EHR) documentation during shifts"
      ],
      medicalApplication: "vital in fast-paced Emergency Rooms and Intensive Care Units where split-second prioritization saves lives."
    },
    {
      id: 3,
      title: "Finance Management",
      category: "Resource Allocation",
      icon: DollarSign,
      score: 90,
      accent: "from-amber-500 to-orange-600",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      description: "Experienced in medical event budgeting, student society treasury management, resource optimization, and clinical audit cost reductions.",
      keyStrengths: [
        "Managed budget allocation for medical student association initiatives",
        "Optimized resource procurement for health screening camps to reduce costs by 20%",
        "Audited department equipment inventory to streamline supply utilization",
        "Financial planning for research grant proposals and conference travel"
      ],
      medicalApplication: "Prepares for hospital administration roles, cost-conscious medical ordering, and efficient healthcare system management."
    },
    {
      id: 4,
      title: "Medical Research",
      category: "Academic & Clinical",
      icon: BookOpen,
      score: 96,
      accent: "from-teal-500 to-cyan-600",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      description: "Rigorous scientific methodology in PubMed literature reviews, clinical audits, data collection, statistical analysis (SPSS/R), and paper writing.",
      keyStrengths: [
        "Published clinical case studies and ongoing systematic reviews",
        "Proficient in SPSS, data management, and biometric statistics",
        "Ethical research standards (IRB protocols, Helsinki declaration compliance)",
        "Presented poster research at regional medical conferences"
      ],
      medicalApplication: "Drives evidence-based medicine, improving clinical guidelines and patient outcomes through scientific inquiry."
    }
  ];

  const current = skillsList[selectedSkill];

  return (
    <section id="skills" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800">
            <Sparkles className="w-4 h-4" />
            <span>Interdisciplinary Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Professional <span className="medical-gradient-text">Skillset</span>
          </h2>
          <p className="text-base text-slate-600">
            A balanced synthesis of clinical acumen, organization, communication, productivity, and academic research.
          </p>
        </div>

        {/* Skill Selector Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillsList.map((skill, idx) => {
            const Icon = skill.icon;
            const isSelected = selectedSkill === idx;

            return (
              <button
                key={skill.title}
                onClick={() => setSelectedSkill(idx)}
                className={`glass-card p-5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "border-teal-500 ring-2 ring-teal-500/20 shadow-md bg-white"
                    : "border-slate-200/80 hover:border-slate-300 hover:bg-white/80"
                }`}
              >
                {/* Accent line top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.accent}`} />
                
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-400">{skill.score}%</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mt-4">{skill.title}</h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{skill.category}</p>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.accent}`}
                    style={{ width: `${skill.score}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Detail View Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-lg bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${current.badgeColor}`}>
                  {current.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">Mastery Rating: {current.score}/100</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-3">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Key Achievements & Strengths
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.keyStrengths.map((strength) => (
                    <div key={strength} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Medical Application Highlight Box */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>Clinical & Medical Impact</span>
                </div>
                
                <h4 className="text-lg font-bold text-white">
                  Why this matters in healthcare:
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &quot;{current.medicalApplication}&quot;
                </p>

                <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                  <span>Target Competency</span>
                  <span className="text-teal-300 font-semibold">Verified Clinical Skill</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
