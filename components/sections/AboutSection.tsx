"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Award, HeartHandshake, CheckCircle2, ChevronRight, Bookmark } from "lucide-react";

export default function AboutSection() {
  const timelineSteps = [
    {
      year: "Year 1 & 2 • Pre-Clinical Sciences",
      title: "Foundations of Medicine",
      description: "Mastered Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, and Microbiology with academic distinction.",
      status: "Completed",
      highlights: ["Top percentile in Pathology", "Student Mentorship Leader"],
      color: "border-teal-500 bg-teal-50 text-teal-700",
    },
    {
      year: "Year 3 • Clinical Clerkships",
      title: "Hospital Core Rotations",
      description: "Hands-on hospital rotations in Internal Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, and Psychiatry.",
      status: "Completed",
      highlights: ["Patient History & Physical Exams", "Surgical Assistance", "High Clinical Evaluation"],
      color: "border-sky-500 bg-sky-50 text-sky-700",
    },
    {
      year: "Year 4 • Senior Medical Student",
      title: "Sub-Internships & Specialization",
      description: "Advanced clinical electives, emergency medicine, intensive patient care management, and acting intern responsibilities.",
      status: "Current",
      highlights: ["ICU & ER Rotations", "Medical Case Presentations", "Team Management"],
      color: "border-indigo-500 bg-indigo-50 text-indigo-700",
    },
    {
      year: "USMLE Preparation Pathway",
      title: "United States Medical Licensing Exam",
      description: "Rigorous high-yield study plan targeting USMLE Step 1 and Step 2 CK for residency match in competitive specialties.",
      status: "In Progress",
      highlights: ["UWorld & First Aid Mastery", "NBME Practice Assessments", "Clinical Knowledge Focus"],
      color: "border-amber-500 bg-amber-50 text-amber-700",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
            <GraduationCap className="w-4 h-4" />
            <span>Academic & Clinical Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Medical Student to <span className="medical-gradient-text">Licensed Physician</span>
          </h2>
          <p className="text-base text-slate-600">
            A comprehensive overview of medical school training, clinical clerkship milestones, and USMLE licensure aspirations.
          </p>
        </div>

        {/* Two Column Layout: Journey Overview + Interactive Timeline */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-teal-600" />
                <span>Medical Education Summary</span>
              </h3>
              
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                As a senior 4th-year medical student, my clinical training has instilled a deep respect 
                for diagnostic rigor, bedside empathy, and interprofessional teamwork.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <HeartHandshake className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Patient-Centred Care</h4>
                    <p className="text-xs text-slate-500">Communicating diagnosis and care plans effectively to patients and families.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Award className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">USMLE Aspirant Commitment</h4>
                    <p className="text-xs text-slate-500">Dedicated to international medical standards and USMLE step examinations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Bookmark className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Evidence-Based Research</h4>
                    <p className="text-xs text-slate-500">Applying clinical literature and systematic methodology in hospital care.</p>
                  </div>
                </div>
              </div>

              {/* Callout box */}
              <div className="mt-6 p-4 rounded-2xl bg-teal-500 text-white shadow-md">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-100">Future Residency Target</span>
                <p className="text-sm font-semibold mt-1">Internal Medicine / Specialty Clinical Care & Global Health</p>
              </div>
            </div>
          </div>

          {/* Right Side: Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-600" />
              <span>Medical School Milestone Timeline</span>
            </h3>

            <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pl-6">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[35px] top-1 w-5 h-5 rounded-full bg-white border-4 border-teal-600 shadow-md group-hover:scale-125 transition-transform" />

                  <div className="glass-card p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${step.color}`}>
                        {step.year}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {step.status}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mt-2">{step.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{step.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.highlights.map((item) => (
                        <span key={item} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700">
                          <ChevronRight className="w-3 h-3 text-teal-600" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
