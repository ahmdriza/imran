"use client";

import Image from "next/image";
import { useState } from "react";
import { Printer, Download, FileText, CheckCircle2, Award, BookOpen, Stethoscope, Mail, Phone, MapPin, Globe, Sparkles, Share2 } from "lucide-react";
import confetti from "canvas-confetti";

interface InteractiveCVProps {
  onOpenModal?: () => void;
}

export default function InteractiveCV({ onOpenModal }: InteractiveCVProps) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    triggerConfetti();
    window.print();
  };

  return (
    <section id="cv" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae Document</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Medical <span className="medical-gradient-text">Curriculum Vitae</span>
            </h2>
            <p className="text-sm text-slate-600">
              A comprehensive document formatted for hospital residency applications, USMLE step evaluation, and academic electives.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 no-print">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={() => {
                triggerConfetti();
                onOpenModal?.();
              }}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Full Screen CV View</span>
            </button>
          </div>
        </div>

        {/* Formatted Printable Medical CV Card */}
        <div className="mt-10 max-w-4xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-800 space-y-8 relative">
          
          {/* Header block with photo */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-3 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-teal-100 text-teal-800 border border-teal-200">
                  4th Year Medical Student
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-200">
                  USMLE Aspirant
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Senior Medical Student & Scholar
              </h1>
              <p className="text-sm font-semibold text-teal-700">
                Bachelor of Medicine & Bachelor of Surgery (MBBS Candidate - 4th Year)
              </p>

              {/* Contact grid */}
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-teal-600" />
                  medical.student@hospital.edu
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-teal-600" />
                  USMLE ID: Registered Candidate
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  University Teaching Hospital
                </span>
              </div>
            </div>

            {/* Profile Picture thumbnail */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-teal-600/30 shadow-md shrink-0 relative">
              <Image
                src="/profile.jpeg"
                alt="Medical CV Profile Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-teal-700 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              <span>Professional & Clinical Profile</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Highly motivated 4th-year medical student with comprehensive clinical clerkship experience in acute medicine, surgery, 
              pediatrics, and emergency care. Actively pursuing USMLE certification. Proven leadership skills in medical event organization, 
              healthcare finance management, bedside communication, time optimization, and evidence-based medical research.
            </p>
          </div>

          {/* Section 2: Core Competencies & Skills */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-teal-700 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Core Skills & Competencies</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Medical Research & Audits</span>
                <span className="text-slate-600">PubMed search, SPSS data analysis, clinical audits, manuscript writing.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Event Management</span>
                <span className="text-slate-600">Organized 5+ medical symposiums, health camps, and blood donation drives.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Clinical Communication</span>
                <span className="text-slate-600">Empathetic patient counseling, SBAR shift handovers, grand round presentations.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">Time & Finance Management</span>
                <span className="text-slate-600">Hospital shift balancing, USMLE prep schedules, event budgeting, audit savings.</span>
              </div>
            </div>
          </div>

          {/* Section 3: Clinical Rotations */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-teal-700 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Clinical Hospital Rotations</span>
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900">Internal Medicine & Intensive Care (ICU)</span>
                  <span className="block text-slate-500">History taking, physical diagnostics, patient management plans.</span>
                </div>
                <span className="font-semibold text-teal-700">Completed (Honors)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900">General Surgery & Trauma Triage</span>
                  <span className="block text-slate-500">Surgical assistance, wound management, sterile techniques.</span>
                </div>
                <span className="font-semibold text-teal-700">Completed</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900">Pediatrics & Neonatal Care</span>
                  <span className="block text-slate-500">Developmental assessment, pediatric emergency protocols.</span>
                </div>
                <span className="font-semibold text-teal-700">Completed</span>
              </div>
            </div>
          </div>

          {/* Section 4: Extracurricular Achievements */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-teal-700 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Extracurricular Leadership & Athletics</span>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                🏐 Volleyball: Inter-College Tournament Finalist & Setter
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 font-semibold">
                🏀 Basketball: Medical Varsity Captain & Playmaker
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                🎾 Tennis: University Singles Semi-Finalist
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
