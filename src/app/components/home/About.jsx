"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiAngular, SiPostgresql } from "react-icons/si";

export default function About() {
  return (
    <section className="bg-transparent py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <p className="text-slate-300 max-w-3xl mx-auto">
          I'm a{" "}
          <span className="text-pink-400 font-semibold">
            Node.js Backend Developer
          </span>{" "}
          with 3+ years of experience designing and building scalable RESTful APIs, payment
          integrations, and database-driven applications. Proven track record delivering production-grade systems across pet care management,
          restaurant POS, CRM, and fintech domains.
        </p>

        {/* Tech Icons */}
        <div className="flex justify-center items-center flex-wrap gap-6 text-4xl mt-4">
          <span className="icon-metal text-[#339933]">
            <FaNodeJs />
          </span>
          <span className="icon-metal text-[#61DAFB]">
            <FaReact />
          </span>
          <span className="icon-metal text-[#DD0031]">
            <SiAngular />
          </span>
          <span className="icon-metal text-[#336791]">
            <SiPostgresql />
          </span>
          <span className="icon-metal text-[#47A248]">
            <SiMongodb />
          </span>
        </div>

        <div className="relative mt-20 border-l-2 border-white pl-8 space-y-16">
          {/* Work Experience Header */}
          <h4 className="text-3xl font-bold text-center mb-12 work-experience-title">
            🔧 Work Experience
          </h4>

          {/* Full Stack Developer - Petlinx */}
          <div className="relative">
            <div className="absolute -left-[1.15rem] top-1 w-4 h-4 bg-white rounded-full border-2 border-white"></div>
            <h5 className="text-xl font-bold mb-2">💻 Full Stack Developer — JaiInfoway Pvt Ltd, Ranchi</h5>
            <p className="text-sm text-gray-500 mb-2">Jan 2024 – Present</p>
            <p className="text-sm text-pink-400 mb-4">Petlinx – Pet Care Management Platform</p>
            <p className="text-gray-300">
              Architected and delivered RESTful APIs for invoicing, payment processing, and transaction workflows. Integrated Global Payments gateway for both online and card-present device transactions.
            </p>

            <p className="flex mt-5 items-start text-xl">Key Highlights:</p>

            <ul className="space-y-2 mt-4 pl-6">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Architected RESTful APIs serving 1,000+ active records in PostgreSQL
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Integrated Global Payments gateway reducing payment errors by standardizing checkout logic
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Engineered dynamic pricing engine cutting manual billing effort by ~40%
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Built modular React UI components improving data entry speed and UX consistency
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Optimized complex PostgreSQL queries improving average response time
                </span>
              </li>
            </ul>

            <p className="text-m text-cyan-400 font-mono mt-5">
              Stack: [Node.js, Next.js, PostgreSQL, Global Payments API]
            </p>
          </div>

          {/* Full Stack Developer - Sales CRM */}
          <div className="relative">
            <div className="absolute -left-[1.15rem] top-1 w-4 h-4 bg-white rounded-full border-2 border-white"></div>
            <h5 className="text-xl font-bold mb-2">💼 Full Stack Developer — JaiInfoway Pvt Ltd, Ranchi</h5>
            <p className="text-sm text-gray-500 mb-2">Jan 2024</p>
            <p className="text-sm text-pink-400 mb-4">Sales CRM Tool</p>
            <p className="text-gray-300">
              Developed user authentication, role-based access control, and LinkedIn profile management modules with automated prospect import pipeline.
            </p>
              <p className="flex mt-5 items-start text-xl">Key Highlights:</p>
            <ul className="space-y-2 mt-4 pl-6">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Built automated prospect import pipeline with CSV parsing and LinkedIn chat ingestion
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Created Reports Wizard with advanced filtering and analytics dashboards
                </span>
              </li>
            </ul>

            <p className="text-sm text-cyan-400 font-mono mt-5">
              Stack: [Node.js, React, PostgreSQL]
            </p>
          </div>

          {/* Full Stack Developer - IntelliBook */}
          <div className="relative">
            <div className="absolute -left-[1.15rem] top-1 w-4 h-4 bg-white rounded-full border-2 border-white"></div>
            <h5 className="text-xl font-bold mb-2">🍽️ Full Stack Developer — JaiInfoway Pvt Ltd, Ranchi</h5>
            <p className="text-sm text-gray-500 mb-2">Nov 2022 – Jan 2024</p>
            <p className="text-sm text-pink-400 mb-4">IntelliBook – Restaurant POS System</p>
            <p className="text-gray-300">
              Developed backend APIs and Angular frontend for a multi-module POS platform handling order management and kitchen workflows with QR-code-based digital menu.
            </p>
              <p className="flex mt-5 items-start text-xl">Key Highlights:</p>
            <ul className="space-y-2 mt-4 pl-6">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Implemented QR-code-based digital menu with real-time order placement
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Integrated RazorPay for online payment processing
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Optimized Angular UI rendering improving customer-facing load performance
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Built concurrent order tracking across multiple tables
                </span>
              </li>
            </ul>

            <p className="text-sm text-cyan-400 font-mono mt-5">
              Stack: [Node.js, Angular, MySQL, RazorPay]
            </p>
          </div>

          {/* Junior Backend Developer */}
          <div className="relative">
            <div className="absolute -left-[1.15rem] top-1 w-4 h-4 bg-white rounded-full border-2 border-white"></div>
            <h5 className="text-xl font-bold mb-2">🚀 Junior Backend Developer — UTS Digitization Pvt Ltd, Remote</h5>
            <p className="text-sm text-gray-500 mb-2">Apr 2022 – Oct 2022</p>
            <p className="text-sm text-pink-400 mb-4">Global Crypto News Platform</p>
            <p className="text-gray-300">
              Built end-to-end crypto news aggregation platform with Angular frontend and Node.js backend. Implemented data ingestion pipelines and content validation.
            </p>
              <p className="flex mt-5 items-start text-xl">Key Highlights:</p>
            <ul className="space-y-2 mt-4 pl-6">
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Implemented JSON data ingestion pipeline with categorization logic for high-volume news feeds
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Added server-side PDF validation ensuring content quality standards
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-3 text-cyan-400">•</span>
                <span className="text-gray-300 leading-relaxed">
                  Designed daily randomized category ordering to improve user engagement
                </span>
              </li>
            </ul>

            <p className="text-sm text-cyan-400 font-mono mt-5">
              Stack: [Node.js, Angular, MongoDB]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
