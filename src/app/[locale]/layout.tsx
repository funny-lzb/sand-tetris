import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import Script from "next/script";
import LanguageSwitcher from "../_components/LanguageSwitcher";
import Footer from "../_components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { routing } from "~/i18n/routing";
import { LocaleLink } from "../_components/LocaleLink";
import { headers } from "next/headers";
import { locales } from "~/i18n/locale";
import { getMessages } from "next-intl/server";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const domain = process.env.WEBSITE_URL;
  let pathname = headersList.get("x-middleware-request-x-pathname") ?? "";
  pathname = pathname === "/" ? "" : pathname;

  const localeMap = {
    en: "en-US",
    zh: "zh-CN",
    de: "de-DE",
    sv: "sv-SE",
    fr: "fr-FR",
    es: "es-ES",
    id: "id-ID",
    ja: "ja-JP",
    nb: "nb-NO",
    pt: "pt-BR",
    th: "th-TH",
  } as const;

  type HrefLangCode = (typeof localeMap)[keyof typeof localeMap];

  const languageAlternates = locales.reduce(
    (acc, lang) => {
      if (lang in localeMap) {
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
        acc[localeMap[lang]] = `${domain}/${lang}${pathWithoutLocale}`;
      }
      return acc;
    },
    {} as Record<HrefLangCode, string>,
  );

  return {
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    verification: {
      google: "bg37j-N-WgMUJxr9gJBuLzFcK_Wjv_5Kj_7ah0yIAWk",
    },
    openGraph: {
      images: [
        {
          url: "/favicon.ico",
          width: 1200,
          height: 630,
          alt: "Sand Games - Free Online Games Collection",
        },
      ],
      type: "website",
      url: `${domain}${pathname}`,
    },
    alternates: {
      canonical: `${domain}${pathname}`,
      languages: {
        ...languageAlternates,
        "x-default": `${domain}/en${pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "")}`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { locale } = await params;

  return (
    <html lang={locale} className="overflow-x-hidden">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1206910636681979"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KXXGFCV7G7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer ?? [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KXXGFCV7G7');
          `}
        </Script>
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <TRPCReactProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="flex min-h-screen flex-col">
              <header className="border-b border-gray-200 bg-gray-50">
                <nav className="mx-auto max-w-4xl px-4 py-3">
                  <div className="flex items-center justify-between">
                    <LocaleLink
                      href="/"
                      locale={locale}
                      className="text-xl font-bold text-blue-600 hover:text-blue-800"
                    >
                      Sand Tetris
                    </LocaleLink>
                    <LanguageSwitcher />
                  </div>
                </nav>
              </header>
              <main className="flex-grow">{children}</main>
              <Footer locale={locale} />
            </div>
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
