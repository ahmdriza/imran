"use client";

interface MobileHeaderProps {
  onToggleSidebar: () => void;
}

export default function MobileHeader({ onToggleSidebar }: MobileHeaderProps) {
  return (
    <header className="lg:hidden flex justify-between items-center w-full px-5 py-4 bg-surface border-b border-outline-variant z-50 sticky top-0">
      <div className="font-bold text-lg text-on-surface flex items-center gap-2">
        <span>Medical Student Portfolio</span>
        <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">MS4</span>
      </div>
      <button onClick={onToggleSidebar} className="p-2" id="mobile-menu-toggle" aria-label="Toggle menu">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
