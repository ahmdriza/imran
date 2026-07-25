"use client";

import { motion } from "framer-motion";
import { Activity, Trophy, Shield, Heart, Zap, Award, Target, Flame } from "lucide-react";

export default function ExtracurricularSection() {
  const sports = [
    {
      name: "Volleyball",
      emoji: "🏐",
      role: "Team Setter / Outside Hitter",
      bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
      accent: "text-amber-600 bg-amber-50 border-amber-200",
      description: "Fast-paced court teamwork requiring split-second communication, spatial awareness, and setting up teammates for precise execution.",
      skillsGained: [
        "Rapid On-Court Communication",
        "Strategic Setter Playmaking",
        "High-Pressure Defensive Focus",
        "Team Cohesion & Trust"
      ],
      achievement: "Inter-College Medical Volleyball Championship - Team Finalist",
      quote: "Volleyball taught me that victory relies on seamless setting and mutual trust — exactly like surgical team coordination."
    },
    {
      name: "Basketball",
      emoji: "🏀",
      role: "Point Guard / Playmaker",
      bgGradient: "from-sky-500/10 via-blue-500/5 to-transparent",
      accent: "text-sky-600 bg-sky-50 border-sky-200",
      description: "High-intensity athletic discipline honing physical stamina, rapid tactical decision-making, and full-court defensive leadership.",
      skillsGained: [
        "Dynamic Decision Making Under Time Pressure",
        "Physical Endurance & Stamina",
        "Court Vision & Tactical Execution",
        "Leadership Under Shot-Clock Pressure"
      ],
      achievement: "Medical School Varsity Basketball Tournament Captain",
      quote: "Basketball builds stamina and fast spatial analysis — essential skills when managing fast-paced emergency room triage."
    },
    {
      name: "Tennis",
      emoji: "🎾",
      role: "Singles & Doubles Player",
      bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description: "Individual precision, unyielding focus, shot Placement accuracy, and psychological resilience during prolonged baseline rallies.",
      skillsGained: [
        "Laser Focus & Mental Discipline",
        "Precision & Fine Motor Control",
        "Independent Problem Solving",
        "Stress Resilience Under Pressure"
      ],
      achievement: "Regional University Tennis Singles Semi-Finalist",
      quote: "Tennis requires intense focus, calm composure, and adjusting strategy shot by shot — mirroring complex diagnostic problem solving."
    }
  ];

  return (
    <section id="sports" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
            <Activity className="w-4 h-4" />
            <span>Athletic Excellence & Wellness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Extracurricular <span className="medical-gradient-text">Athletics & Sports</span>
          </h2>
          <p className="text-base text-slate-600">
            Maintaining physical peak condition, team leadership, and strategic focus through competitive sports.
          </p>
        </div>

        {/* Sports Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sports.map((sport, idx) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all group bg-white"
            >
              <div className="space-y-5">
                
                {/* Sport Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                    {sport.emoji}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${sport.accent}`}>
                    {sport.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                    <span>{sport.name}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {sport.description}
                  </p>
                </div>

                {/* Skills Transfer List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Core Attributes Developed
                  </span>
                  <div className="space-y-1.5">
                    {sport.skillsGained.map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs italic text-slate-600">
                  &quot;{sport.quote}&quot;
                </div>
              </div>

              {/* Achievement Badge Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-amber-500 shrink-0 animate-bounce" />
                <span className="text-xs font-bold text-slate-800">
                  {sport.achievement}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wellness & Resilience Banner */}
        <div className="mt-14 glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md bg-gradient-to-r from-teal-50 via-sky-50 to-indigo-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-teal-600/30">
              <Heart className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Work-Life Balance & Physician Wellness</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Competitive athletics build physical endurance, prevent clinical burnout, and cultivate mental toughness for high-yield medical practice.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-4 py-2 rounded-xl bg-white text-slate-800 text-xs font-bold border border-slate-200 shadow-xs">
              🏅 Active Athlete & Leader
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
