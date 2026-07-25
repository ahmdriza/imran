"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope, Award, FileText, ChevronRight, Brain, Users, Clock, DollarSign, BookOpen, Activity, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenCVModal: () => void;
}

export default function HeroSection({ onOpenCVModal }: HeroSectionProps) {
  const highlightSkills = [
    { label: "Med Research", icon: BookOpen, color: "text-teal-600 bg-teal-50 border-teal-200" },
    { label: "Event Management", icon: Users, color: "text-sky-600 bg-sky-50 border-sky-200" },
    { label: "Communication", icon: Brain, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
    { label: "Time Management", icon: Clock, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { label: "Finance Management", icon: DollarSign, color: "text-amber-600 bg-amber-50 border-amber-200" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden medical-bg-gradient subtle-grid-bg">
      {/* Background glowing ambient circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Profile Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-600 text-white shadow-md shadow-teal-600/20">
                <Stethoscope className="w-4 h-4 animate-pulse" />
                4th-Year Medical Student
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                <Award className="w-3.5 h-3.5 text-sky-600" />
                USMLE Aspirant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Clinical Clerkships Completed
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Future Physician, <br />
              <span className="medical-gradient-text">Clinical Researcher</span> & Leader
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Welcome to my digital curriculum vitae and personal portfolio. As a 4th-year medical student 
              and USMLE aspirant, I bridge clinical expertise with medical research, event organization, 
              interpersonal communication, time optimization, and financial acumen.
            </p>

            {/* Quick Skill Tags */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {highlightSkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.label}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border ${skill.color} shadow-xs hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{skill.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Extracurricular Sports Preview */}
            <div className="flex items-center gap-3 pt-2 text-xs font-medium text-slate-600">
              <span className="font-bold text-slate-700">Athletics:</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                🏐 Volleyball
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                🏀 Basketball
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">
                🎾 Tennis
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenCVModal}
                className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-sky-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View & Print Interactive CV</span>
              </button>
              
              <a
                href="#research"
                className="flex items-center gap-2 bg-white text-slate-800 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-300/80 shadow-xs hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <span>Medical Research</span>
                <ChevronRight className="w-4 h-4 text-teal-600" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture Card & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Animated Ring background */}
            <div className="absolute inset-0 m-auto w-80 h-80 rounded-full border-2 border-teal-400/40 animate-pulse-ring pointer-events-none" />
            
            <div className="relative glass-card p-4 sm:p-5 rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl">
              
              {/* Profile Image Container */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/profile.png"
                  alt="4th Year Medical Student Profile Picture"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-teal-300 font-bold">
                    Curriculum Vitae Profile
                  </span>
                  <h2 className="text-xl font-bold">Medical Scholar & Aspirant</h2>
                  <p className="text-xs text-slate-200">Preparing for Residency & USMLE Boards</p>
                </div>
              </div>

              {/* Floating Badge 1: USMLE */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-teal-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">USMLE Aspirant</span>
                  <span className="block text-[11px] text-teal-600 font-semibold">Step 1 & Step 2 Prep</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Research */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">Clinical Research</span>
                  <span className="block text-[11px] text-sky-600 font-semibold">Audits & Papers</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-5 rounded-2xl border border-slate-200/80 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-teal-600">4th Year</span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1 block">Medical Student Status</span>
          </div>
          <div className="glass-card p-5 rounded-2xl border border-slate-200/80 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-sky-600">5 Core</span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1 block">Interdisciplinary Skills</span>
          </div>
          <div className="glass-card p-5 rounded-2xl border border-slate-200/80 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-indigo-600">3 Sports</span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1 block">Athletic Disciplines</span>
          </div>
          <div className="glass-card p-5 rounded-2xl border border-slate-200/80 text-center">
            <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-600">USMLE</span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-1 block">Licensure Goal</span>
          </div>
        </div>

      </div>
    </section>
  );
}
