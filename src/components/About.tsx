"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, GraduationCap, Languages } from "lucide-react";
import { useI18n } from "@/i18n/context";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useI18n();

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-accent mb-2">
            {t("about.label")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            {t("about.title")}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-5 text-muted leading-relaxed"
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="p-5 rounded-xl bg-card border border-card-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <h4 className="font-semibold text-sm">{t("about.education")}</h4>
              </div>
              <p className="text-sm text-muted">{t("about.education_main")}</p>
              <p className="text-xs text-muted/60 mt-1">
                {t("about.education_sub")}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card border border-card-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Languages size={18} className="text-accent" />
                </div>
                <h4 className="font-semibold text-sm">{t("about.languages")}</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted">
                <span>{t("about.lang_arabic")}</span>
                <span>{t("about.lang_french")}</span>
                <span>{t("about.lang_japanese")}</span>
                <span>{t("about.lang_english")}</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-card border border-card-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Globe size={18} className="text-accent" />
                </div>
                <h4 className="font-semibold text-sm">
                  {t("about.scholarships")}
                </h4>
              </div>
              <p className="text-sm text-muted">
                {t("about.scholarship_mext")}
              </p>
              <p className="text-sm text-muted">
                {t("about.scholarship_rotary")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
