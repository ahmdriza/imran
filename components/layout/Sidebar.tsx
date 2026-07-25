"use client";

import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navLinks = [
    { name: "Home", href: "#hero", active: true },
    { name: "About", href: "#about", active: false },
    { name: "Skills", href: "#skills", active: false },
    { name: "Research", href: "#research", active: false },
    { name: "Sports & Athletics", href: "#sports", active: false },
    { name: "Education", href: "#education", active: false },
    { name: "Experience", href: "#experience", active: false },
    { name: "Curriculum Vitae", href: "#cv", active: false },
    { name: "Contact", href: "#contact", active: false },
  ];

  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 h-screen w-[300px] flex flex-col justify-between py-6 px-6 bg-background border-r border-outline-variant z-40 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } overflow-hidden`}
    >
      {/* Top Section: Profile Info */}
      <div className="flex flex-col items-center text-center">
        {/* Profile Image - Compact & Fit */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 border-4 border-surface-container-high relative shadow-md">
          <Image
            src="/profile.jpeg"
            alt="4th Year Medical Student Profile Picture"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
        <h1
          className="text-2xl font-bold text-on-surface mb-0.5 tracking-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          4th Year Med Student
        </h1>
        <p className="text-[10px] tracking-widest text-on-surface-variant uppercase font-semibold">
          USMLE ASPIRANT & CLINICAL RESEARCHER
        </p>
      </div>

      {/* Middle Section: Compact Navigation List */}
      <nav className="w-full flex flex-col items-center space-y-2.5 my-2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={`text-[13px] leading-tight transition-colors duration-200 ${
              link.active
                ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Bottom Section: Compact Dark Toggle & Footer */}
      <div className="flex flex-col items-center gap-2">
        <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface-container text-on-surface hover:bg-secondary-container transition-all cursor-pointer text-xs">
          <span className="material-symbols-outlined text-[16px]">dark_mode</span>
          <span className="font-semibold text-[11px] tracking-wider uppercase">Dark</span>
        </button>

        <div className="flex gap-3 text-on-surface-variant pt-1">
          <a className="hover:text-primary transition-all" href="#contact" title="Email / Contact">
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
          <a className="hover:text-primary transition-all" href="#research" title="Research Publications">
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
          </a>
          <a className="hover:text-primary transition-all" href="#sports" title="Sports & Athletics">
            <span className="material-symbols-outlined text-[18px]">sports_volleyball</span>
          </a>
        </div>

        <p className="text-[10px] text-on-surface-variant leading-tight opacity-70 text-center">
          © {new Date().getFullYear()} Medical Portfolio • All rights reserved
        </p>
      </div>
    </aside>
  );
}
