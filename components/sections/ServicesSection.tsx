"use client";

export default function ServicesSection() {
  const services = [
    {
      icon: "lightbulb",
      title: "Innovative Ideas",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      icon: "language",
      title: "Web Design",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      icon: "phone_iphone",
      title: "Software",
      description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];

  return (
    <section className="py-[100px] px-8 lg:px-24 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-label-caps text-[12px] text-on-surface-variant uppercase mb-4 opacity-60 tracking-widest font-semibold">
          My Specialty
        </p>
        <h3 className="text-[32px] leading-[1.3] font-bold mb-16 uppercase tracking-wider text-on-surface" style={{ fontFamily: 'Playfair Display, serif' }}>
          What I Do?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-10 border border-outline-variant hover:border-primary transition-all group duration-500"
            >
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                  {service.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase text-on-surface">
                {service.title}
              </h4>
              <p className="text-[16px] leading-[1.5] text-on-surface-variant">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
