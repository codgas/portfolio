"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, TrendingUp, Brain } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/i18n/context";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const otherProjects = [
    {
      title: t("projects.rec_title"),
      description: t("projects.rec_desc"),
      tags: ["Python", "PySpark", "PyTorch", "A/B Testing"],
      icon: TrendingUp,
    },
    {
      title: t("projects.vec_title"),
      description: t("projects.vec_desc"),
      tags: ["PySpark", "PyTorch", "Docker", "Kubernetes"],
      icon: Brain,
    },
  ];

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">
            {t("projects.label")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            {t("projects.title")}
          </h3>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="group relative rounded-2xl border border-card-border bg-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                <Image
                  src="/images/japaneasytravel.png"
                  alt="Japan Easy Travel website"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p className="text-sm font-mono text-accent mb-2">
                  {t("projects.featured")}
                </p>
                <h4 className="text-2xl font-bold mb-4">
                  {t("projects.jet_title")}
                </h4>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {t("projects.jet_desc")}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "SEO",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent/80 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://japaneasytravel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
                >
                  {t("projects.visit")} <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group p-6 rounded-xl border border-card-border bg-card hover:border-accent/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <project.icon size={20} className="text-accent" />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-card-border/50 text-muted font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
