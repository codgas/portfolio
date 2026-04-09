"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

const techByCompany: Record<string, string[]> = {
  snkrdunk: ["Python", "Machine Learning", "LangGraph", "LLM Agents", "Recommendation Systems", "AWS", "Terraform"],
  line: [
    "Python",
    "PySpark",
    "PyTorch",
    "Go",
    "LLM",
    "Docker",
    "Kubernetes",
    "Argo",
  ],
  nec: ["Python", "TensorFlow", "Computer Vision", "Docker"],
  rutilea: ["Python", "C++", "PyTorch", "Computer Vision"],
};

const companies = [
  { key: "snkrdunk", name: "SODA inc. (SNKRDUNK)", highlightCount: 3 },
  { key: "line", name: "LY Corporation (LINE)", highlightCount: 7 },
  { key: "nec", name: "NEC Corporation", highlightCount: 2 },
  { key: "rutilea", name: "Rutilea, Inc.", highlightCount: 2 },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useI18n();

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">
            {t("experience.label")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            {t("experience.title")}
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-[240px_1fr] gap-8"
        >
          {/* Tabs */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-card-border">
            {companies.map((c, i) => (
              <button
                key={c.key}
                onClick={() => setActiveIdx(i)}
                className={`text-left text-sm px-4 py-3 whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2-2 -mb-[2px] md:mb-0 md:-ml-[2px] ${
                  activeIdx === i
                    ? "text-accent border-accent bg-accent/5"
                    : "text-muted border-transparent hover:text-foreground hover:bg-card/50"
                }`}
              >
                {c.name.split("(")[0].trim()}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[400px]">
            {companies.map((c, i) => {
              const key = c.key as keyof typeof techByCompany;
              const highlights = Array.from(
                { length: c.highlightCount },
                (_, j) =>
                  t(
                    `experience.${key}.h${j + 1}` as Parameters<typeof t>[0]
                  )
              );

              return (
                <div
                  key={c.key}
                  className={activeIdx === i ? "block" : "hidden"}
                >
                  <h4 className="text-xl font-semibold mb-1">
                    {t(
                      `experience.${key}.role` as Parameters<typeof t>[0]
                    )}{" "}
                    <span className="text-accent">@ {c.name}</span>
                  </h4>
                  <p className="text-sm text-muted mb-1 font-mono">
                    {t(
                      `experience.${key}.period` as Parameters<typeof t>[0]
                    )}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted/60 mb-6">
                    <Building2 size={14} />
                    {t(
                      `experience.${key}.location` as Parameters<typeof t>[0]
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <ChevronRight
                          size={16}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {techByCompany[key].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent/80 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
