"use client";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#", active: false },
    { name: "Services", href: "#", active: false },
    { name: "Skills", href: "#", active: false },
    { name: "Education", href: "#", active: false },
    { name: "Experience", href: "#", active: false },
    { name: "Work", href: "#", active: false },
    { name: "Blog", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
  ];

  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 h-full w-[300px] flex flex-col items-center py-12 px-8 bg-background border-r border-outline-variant z-40 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } overflow-y-auto`}
    >
      {/* Profile Info */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-surface-container-high">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            alt="Jackson Ford UI/UX Designer Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8IUXXqjhOZwBbArrOB5tuTKjVV-uPAQu_QnwIMPe2Cf43Pm6Myr7OvT7cfgAnEghN1Ean_SqvGBCt6MC2RZ_tBOaxqa7lquAJPoIYnpyJnwwowlA2XXk0GUEjKR7as3UQOSPJcVcgxz8GwyLsbR2vEySuil1oCQ81XepEqrAdjGpKdd3qBmnHWUBWirZZ-z_z6dEbPHMRa6jF2kaoQU22kaIqi80JnaArgsxGF_aRxJMqyUMWnwbn2-7paWuOhKicVSOouW-PN5Rg"
          />
        </div>
        <h1 className="font-headline-lg text-[32px] leading-[1.3] font-bold text-on-surface mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
          Jackson Ford
        </h1>
        <p className="font-label-caps text-[12px] tracking-widest text-on-surface-variant uppercase">
          UI/UX DESIGNER IN SAN FRANCISCO
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-grow w-full flex flex-col items-center space-y-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={`font-nav-link text-[14px] leading-[1.2] transition-colors duration-200 ${
              link.active
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <button className="mt-8 flex items-center gap-2 px-6 py-2 rounded-full bg-surface-container text-on-surface hover:bg-secondary-container transition-all cursor-pointer">
        <span className="material-symbols-outlined text-[18px]">dark_mode</span>
        <span className="font-label-caps text-[12px] tracking-widest uppercase">Dark</span>
      </button>

      {/* Sidebar Footer */}
      <footer className="mt-12 flex flex-col items-center gap-4 text-center">
        <div className="flex gap-4">
          <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a className="text-on-surface-variant hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
        <p className="font-label-caps text-[12px] text-on-surface-variant leading-relaxed opacity-70">
          © Copyright ©2026 All rights reserved | This template is made with ❤️
        </p>
      </footer>
    </aside>
  );
}
