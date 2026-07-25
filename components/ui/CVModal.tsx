"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, FileText, CheckCircle2, Award, BookOpen, Stethoscope, Mail, Phone, MapPin, Globe, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        
        {/* Modal Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Controls Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 no-print shrink-0">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              <span className="font-bold text-slate-900 text-sm">Interactive Medical CV Preview</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-100 text-teal-800">
                Print Ready
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 bg-teal-600 text-white font-semibold text-xs px-3.5 py-2 rounded-xl shadow-xs hover:bg-teal-700 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print CV</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800">
            
            {/* Header with picture */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-slate-200">
              <div className="space-y-2 text-center sm:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-teal-100 text-teal-800 border border-teal-200">
                  4th Year Medical Student • USMLE Aspirant
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Medical Student & Scholar
                </h2>
                <p className="text-xs font-semibold text-teal-700">
                  Bachelor of Medicine & Bachelor of Surgery (MBBS Candidate - Final Year)
                </p>
                <p className="text-xs text-slate-500">
                  Special Interests: Medical Research, Hospital Event Leadership, Emergency Care & Financial Mgmt
                </p>
              </div>

              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-teal-600/30 shadow-md shrink-0 relative">
                <Image
                  src="/profile.jpeg"
                  alt="Medical Student CV Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Profile summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                1. Executive Profile
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated senior medical student with clinical rotation experience across major inpatient and outpatient departments. 
                Actively preparing for USMLE certification. Combines scientific precision in medical research with proven talent 
                in event organization, interpersonal communication, time management, and healthcare finance.
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                2. Key Competencies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2 rounded bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  • Medical Research (SPSS/PubMed)
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  • Event Management (5+ Symposiums)
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  • Clinical Communication (SBAR)
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  • Time & Priority Optimization
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  • Finance & Budget Management
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200 font-semibold text-slate-800">
                  • USMLE Step 1 & 2 Pathway
                </div>
              </div>
            </div>

            {/* Rotations */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                3. Hospital Rotations Completed
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between p-2 rounded bg-slate-50 border border-slate-200">
                  <span>Internal Medicine & Intensive Care Unit</span>
                  <span className="font-bold text-teal-700">Completed (Honors)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-50 border border-slate-200">
                  <span>General Surgery & Trauma Ward</span>
                  <span className="font-bold text-teal-700">Completed</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-50 border border-slate-200">
                  <span>Pediatrics & Neonatal Care</span>
                  <span className="font-bold text-teal-700">Completed</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-50 border border-slate-200">
                  <span>Obstetrics & Gynecology</span>
                  <span className="font-bold text-teal-700">Completed</span>
                </div>
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                4. Extracurricular Athletics
              </h3>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <p>• <strong>Volleyball:</strong> Setter & Inter-College Tournament Finalist</p>
                <p>• <strong>Basketball:</strong> Medical Varsity Basketball Captain</p>
                <p>• <strong>Tennis:</strong> University Singles Tournament Competitor</p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 no-print shrink-0">
            <span>Verified Medical Student Resume Document</span>
            <button
              onClick={handlePrint}
              className="font-bold text-teal-700 hover:underline flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              Print or Save as PDF
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
