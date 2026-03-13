"use client";

import Contact from "./components/home/Contact";
import Skills from "./components/home/Skills";
import About from "./components/home/About";
import HomeHero from "./components/home/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "../../data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HomeHero />

      {/* About Section */}
      <About></About>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section className="bg-transparent py-20 px-6">
        <div className="w-full">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 featured-projects-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            💼 Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
}
