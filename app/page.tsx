"use client";

import { useState } from "react";
import MobileHeader from "@/components/layout/MobileHeader";
import Sidebar from "@/components/layout/Sidebar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Mobile TopAppBar */}
      <MobileHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* SideNavBar (Desktop & Mobile Drawer) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Content Stage */}
      <main className="main-canvas min-h-screen relative">
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
}
