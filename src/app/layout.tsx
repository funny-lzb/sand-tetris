import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { games } from "~/config/games";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sand Games - Play Free Online Games | Sprunki, Sand Tetris, Mahjong Match & More",
  description:
    "Discover and play the best free online games at Sand Games! From the physics-based Sand Tetris to classic Mahjong Match, creative Sprunki, and more. Enjoy our curated collection of puzzle, action, and casual games. No downloads required - play instantly in your browser!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "bg37j-N-WgMUJxr9gJBuLzFcK_Wjv_5Kj_7ah0yIAWk",
  },
  openGraph: {
    title: "Sand Games - Best Free Online Games Collection | Play Now",
    description:
      "Play the best free online games at Sand Games! Experience unique titles like Sand Tetris with realistic physics, classic Mahjong Match, creative Sprunki, and more. No downloads needed - start playing now!",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Sand Games - Free Online Games Collection",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1206910636681979"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <TRPCReactProvider>
          <div className="flex min-h-screen flex-col">
            <header className="bg-white shadow-sm">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
                    Sand Games
                  </Link>
                  {/* Desktop Navigation */}
                  <div className="hidden md:flex space-x-1">
                    {games.map((game) => (
                      <Link
                        key={game.id}
                        href={game.path}
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      >
                        {game.name}
                      </Link>
                    ))}
                  </div>
                  {/* Mobile menu button */}
                  <div className="md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Mobile menu panel */}
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {games.map((game) => (
                      <Link
                        key={game.id}
                        href={game.path}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      >
                        <div>
                          <div>{game.name}</div>
                          <div className="text-sm text-gray-500">{game.description}</div>
                          <div className="flex gap-2 text-xs text-gray-400 mt-1">
                            <span>{game.metadata?.difficulty}</span>
                            <span>•</span>
                            <span>{game.metadata?.estimatedTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-gray-50 border-t">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center text-gray-600 text-sm">
                  &copy; {new Date().getFullYear()} Sand Games. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
