"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Stethoscope, MessageSquare, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState("Medical Research");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & <span className="medical-gradient-text">Collaboration</span>
          </h2>
          <p className="text-base text-slate-600">
            Interested in medical research, hospital event organizing, USMLE discussion, or residency opportunities? Send a direct message.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md bg-white space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-teal-600" />
                <span>Contact Details</span>
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                Available for clinical electives, sub-internships, medical research partnerships, and student leadership inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Email Address</span>
                    <span>med.student@teachinghospital.edu</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Primary Rotation Base</span>
                    <span>University Teaching Hospital & Clinical Center</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">USMLE Target</span>
                    <span>Step 1 & Step 2 CK Residency Match</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg bg-white">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. I will respond to your message promptly between clinical rotation duties.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Inquiry Type Chips */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Inquiry Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Medical Research", "USMLE / Academic", "Event Management", "General"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            inquiryType === type
                              ? "bg-teal-600 text-white border-teal-600 shadow-xs"
                              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. John Doe / Colleague"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 text-xs outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="colleague@hospital.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 text-xs outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder={`Regarding ${inquiryType} collaboration`}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 text-xs outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-teal-500 text-xs outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-sky-600 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Direct Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
