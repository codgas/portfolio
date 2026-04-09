"use client";

import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted/60">
          &copy; {new Date().getFullYear()} Ghassen Boujlida
        </p>
        <p className="text-xs text-muted/40">{t("footer.built_with")}</p>
      </div>
    </footer>
  );
}
