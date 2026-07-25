"use client";

interface MobileHeaderProps {
  onToggleSidebar: () => void;
}

export default function MobileHeader({ onToggleSidebar }: MobileHeaderProps) {
  return (
    <header className="lg:hidden flex justify-between items-center w-full px-5 py-4 bg-surface border-b border-outline-variant z-50 sticky top-0">
      <div className="font-bold text-headline-lg text-on-surface">
        Jackson Ford
      </div>
      <button onClick={onToggleSidebar} className="p-2" id="mobile-menu-toggle" aria-label="Toggle menu">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
