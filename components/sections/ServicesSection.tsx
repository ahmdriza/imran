"use client";

export default function ServicesSection() {
  const competencies = [
    {
      icon: "menu_book",
      title: "Medical Research & Audits",
      description: "Rigorous scientific methodology in PubMed literature reviews, clinical audits, SPSS statistical analysis, and published paper writing.",
    },
    {
      icon: "groups",
      title: "Event Management",
      description: "Proven track record organizing medical symposiums, health awareness camps, blood donation drives, and student association workshops.",
    },
    {
      icon: "forum",
      title: "Clinical Communication",
      description: "Empathetic bedside patient counseling, structured SBAR clinical handovers between hospital shifts, and case presentations.",
    },
    {
      icon: "schedule",
      title: "Time Management",
      description: "Balancing demanding 4th-year hospital clinical rotation shifts alongside structured high-yield USMLE board study schedules.",
    },
    {
      icon: "payments",
      title: "Finance Management",
      description: "Experienced in medical event budgeting, student treasury allocation, resource procurement optimization, and audit cost reductions.",
    },
  ];

  return (
    <section id="services" className="py-[100px] px-8 lg:px-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-label-caps text-[12px] text-on-surface-variant uppercase mb-4 opacity-60 tracking-widest font-semibold">
          Core Competencies
        </p>
        <h3
          className="text-[32px] leading-[1.3] font-bold mb-16 uppercase tracking-wider text-on-surface"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          What I Do?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((item) => (
            <div
              key={item.title}
              className="p-8 border border-outline-variant hover:border-primary transition-all group duration-500 bg-background rounded-sm"
            >
              <div className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  {item.icon}
                </span>
              </div>
              <h4 className="text-lg font-bold mb-3 uppercase text-on-surface">
                {item.title}
              </h4>
              <p className="text-[15px] leading-[1.5] text-on-surface-variant">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
