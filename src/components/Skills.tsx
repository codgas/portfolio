"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  const skillGroups = [
    {
      title: t("skills.languages"),
      skills: ["Python", "Go", "SQL", "C++", "TypeScript"],
    },
    {
      title: t("skills.ml"),
      skills: ["PyTorch", "PySpark", "TensorFlow", "LLMs", "LangGraph", "Computer Vision", "NLP"],
    },
    {
      title: t("skills.infra"),
      skills: [
        "Docker",
        "Kubernetes",
        "Argo Workflows",
        "ArgoCD",
        "GitHub Actions",
        "Grafana",
        "AWS",
        "Terraform",
      ],
    },
    {
      title: t("skills.web"),
      skills: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">
            {t("skills.label")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            {t("skills.title")}
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="p-6 rounded-xl border border-card-border bg-card"
            >
              <h4 className="text-sm font-semibold text-accent mb-4 font-mono">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
