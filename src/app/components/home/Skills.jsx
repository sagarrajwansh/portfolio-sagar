"use client";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiGraphql,
  SiElectron,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAmazon,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiJest,
  SiDocker,
  SiGithubactions,
  SiCypress,
  SiGithub,
  SiNpm,
} from "react-icons/si";
import { motion } from "framer-motion";
import { BrainCogIcon, CreditCard, Webhook, FileText, FileSpreadsheet, Workflow, Bug, Gauge, Code2 } from "lucide-react";

const skillsByCategory = [
  {
    title: "Backend",
    items: [
      { icon: <SiNodedotjs color="#339933" />, label: "Node.js" },
      { icon: <SiJavascript color="#f7df1e" />, label: "Express.js" },
      { icon: <SiJavascript color="#f7df1e" />, label: "JavaScript" },
      { icon: <SiTypescript color="#3178c6" />, label: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: <SiReact color="#61dafb" />, label: "React.js" },
      { icon: <SiAngular color="#dd0031" />, label: "Angular" },
      { icon: <SiHtml5 color="#e34f26" />, label: "HTML5" },
      { icon: <SiCss3 color="#1572b6" />, label: "CSS3" },
      { icon: <SiTailwindcss color="#38bdf8" />, label: "Bootstrap" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: <SiPostgresql color="#336791" />, label: "PostgreSQL" },
      { icon: <SiMongodb color="#47a248" />, label: "MongoDB" },
      { icon: <SiMysql color="#00758f" />, label: "MySQL" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { icon: <CreditCard size={28} color="#10b981" />, label: "Global Payments API" },
      { icon: <CreditCard size={28} color="#3b82f6" />, label: "Payment Gateways" },
      { icon: <Webhook size={28} color="#8b5cf6" />, label: "Webhooks" },
      { icon: <FileText size={28} color="#ef4444" />, label: "PDF Generation" },
      { icon: <FileSpreadsheet size={28} color="#22c55e" />, label: "CSV Processing" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <SiGit color="#f05032" />, label: "Git" },
      { icon: <SiGithub color="#ffffff" />, label: "GitHub" },
      { icon: <SiJest color="#c21325" />, label: "Postman" },
      { icon: <SiNpm color="#cb3837" />, label: "npm" },
      { icon: <Code2 size={28} color="#007acc" />, label: "VS Code" },
      { icon: <SiGooglecloud color="#4285f4" />, label: "GCP" },
      { icon: <SiGithubactions color="#2088ff" />, label: "CI/CD" },
    ],
  },
  {
    title: "Practices",
    items: [
      { icon: <Workflow size={28} color="#10b981" />, label: "Agile/Scrum" },
      { icon: <SiNodedotjs color="#339933" />, label: "REST API Design" },
      { icon: <Bug size={28} color="#ef4444" />, label: "Debugging" },
      { icon: <Gauge size={28} color="#f59e0b" />, label: "Performance Tuning" },
      { icon: <SiJavascript color="#f7df1e" />, label: "MVC Pattern" },
    ],
  },
];

function Skills() {
  return (
    <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 text-white overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-400/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0" />

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 z-10 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <BrainCogIcon size={32} color="#f472b6" />
        <span>My Technical Stack</span>
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 relative z-10">
        {skillsByCategory.map((category, i) => (
          <motion.div
            key={category.title}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_30px_#ec4899]/20 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-pink-400 mb-4 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4 align-center justify-center">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center text-sm text-slate-300 hover:text-white transition duration-200"
                  title={item.label}
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform glow-icon">
                    {item.icon}
                  </div>
                  <span className="mt-1 text-xs text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
