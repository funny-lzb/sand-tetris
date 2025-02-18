"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { locales, type Locale } from "~/i18n/locale";

const languageMap: Record<Locale, { label: string; flag: string }> = {
  en: {
    label: "English",
    flag: "🇺🇸",
  },
  zh: {
    label: "中文 (简体)",
    flag: "🇨🇳",
  },
  de: {
    label: "Deutsch",
    flag: "🇩🇪",
  },
  sv: {
    label: "Svenska",
    flag: "🇸🇪",
  },
  fr: {
    label: "Français",
    flag: "🇫🇷",
  },
  es: {
    label: "Español",
    flag: "🇪🇸",
  },
};

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 确保当前语言在支持的语言列表中，如果不在则默认使用英语
  const locale = locales.includes(currentLocale as Locale)
    ? (currentLocale as Locale)
    : "en";

  const handleLocaleChange = (newLocale: Locale) => {
    // 获取当前路径
    const currentPath = pathname;
    // 从当前路径中提取出除了语言之外的部分
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        <span>{languageMap[locale].flag}</span>
        <span>{languageMap[locale].label}</span>
        <svg
          className={`h-4 w-4 transform text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
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
                onClick={() => handleLocaleChange(code)}
                className={`flex w-full items-center gap-2 px-4 py-2 text-sm ${
                  locale === code
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                role="menuitem"
              >
                <span>{languageMap[code].flag}</span>
                <span>{languageMap[code].label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
