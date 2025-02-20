"use client";

import { useTranslations } from "next-intl";
import { LocaleLink } from "./LocaleLink";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  console.log("locale", locale);

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            &copy; 2025 sand-tetris.online. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <LocaleLink
              href="/privacy-policy"
              locale={locale}
              className="text-gray-600 hover:text-gray-900"
            >
              {t("privacy")}
            </LocaleLink>
            <LocaleLink
              href="/terms"
              locale={locale}
              className="text-gray-600 hover:text-gray-900"
            >
              {t("terms")}
            </LocaleLink>
            <LocaleLink
              href="/about-us"
              locale={locale}
              className="text-gray-600 hover:text-gray-900"
            >
              {t("about")}
            </LocaleLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
