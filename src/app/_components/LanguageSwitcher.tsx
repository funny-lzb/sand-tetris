"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "~/i18n/routing";
import { useState } from "react";
import { locales, type Locale } from "~/i18n/locale";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        <span>{locale.toUpperCase()}</span>
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {locales.map((code) => (
              <button
                key={code}
                onClick={() => {
                  handleLocaleChange(code);
                }}
                className={`flex w-full items-center gap-2 px-4 py-2 text-sm ${
                  locale === code
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                role="menuitem"
              >
                <span>{code.toUpperCase()}</span>
                <span className="text-gray-500">
                  {new Intl.DisplayNames([code], {
                    type: "language",
                  }).of(code)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
