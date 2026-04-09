"use client";

import { useI18n, Locale } from "@/i18n/context";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
  { code: "fr", label: "FR" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-card-border bg-card/50 p-1">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
            locale === l.code
              ? "bg-accent text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
