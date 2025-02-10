import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Play Mahjong Match Online - Free Match-3 Puzzle Game | Sand Tetris",
  description:
    "Play Mahjong Match, a captivating match-3 puzzle game that combines traditional Chinese mahjong with modern gameplay. Match tiles strategically, clear levels, and challenge yourself with increasingly difficult layouts. Free to play, no download needed!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "bg37j-N-WgMUJxr9gJBuLzFcK_Wjv_5Kj_7ah0yIAWk",
  },
  openGraph: {
    title: "Play Mahjong Match Online - Free Match-3 Puzzle Game | Sand Tetris",
    description:
      "Play Mahjong Match, a captivating match-3 puzzle game that combines traditional Chinese mahjong with modern gameplay. Match tiles strategically, clear levels, and challenge yourself with increasingly difficult layouts. Free to play, no download needed!",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Sand Tetris Game Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <TRPCReactProvider>
          <div className="flex min-h-screen flex-col">
            <main className="flex-grow">
              {children}
            </main>
            
            <footer className="mt-auto border-t border-gray-100 bg-gray-50">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="text-center md:text-left">
                  <p className="text-sm text-emerald-600">
                    &copy; {new Date().getFullYear()}{" "}
                    <Link 
                      href="/" 
                      className="hover:text-emerald-700 transition-colors"
                    >
                      sand-tetris.online
                    </Link>
                    . All rights reserved.
                  </p>
                </div>
                <div className="mt-4 flex justify-center space-x-6 md:mt-0">
                  <p className="text-sm text-emerald-500">
                    Where Classic Games Meet Modern Fun!
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
