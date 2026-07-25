"use client";

import { useState } from "react";
import MobileHeader from "@/components/layout/MobileHeader";
import Sidebar from "@/components/layout/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ExtracurricularSection from "@/components/sections/ExtracurricularSection";
import InteractiveCV from "@/components/sections/InteractiveCV";
import ContactSection from "@/components/sections/ContactSection";
import CVModal from "@/components/ui/CVModal";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Mobile TopAppBar */}
      <MobileHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* SideNavBar (Fixed 100vh Drawer without Scrollbar) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Stage */}
      <main className="main-canvas min-h-screen relative">
        <HeroSection onOpenCVModal={() => setIsCVModalOpen(true)} />
        <ServicesSection />
        <AboutSection />
        <ResearchSection />
        <ExtracurricularSection />
        <InteractiveCV onOpenModal={() => setIsCVModalOpen(true)} />
        <ContactSection />
      </main>

      {/* Interactive CV Printable Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
}
