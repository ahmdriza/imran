"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ExtracurricularSection from "@/components/sections/ExtracurricularSection";
import InteractiveCV from "@/components/sections/InteractiveCV";
import ContactSection from "@/components/sections/ContactSection";
import CVModal from "@/components/ui/CVModal";

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-teal-500 selection:text-white">
      {/* Header Navigation */}
      <Header onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <HeroSection onOpenCVModal={() => setIsCVModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ResearchSection />
        <ExtracurricularSection />
        <InteractiveCV onOpenModal={() => setIsCVModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Full Screen Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}
