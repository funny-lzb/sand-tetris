import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { games } from "~/config/games";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sand Games - Free Online Games Collection",
  description: "Play free online games including Sand Tetris, Chicken Run, Mahjong Match, and more. Enjoy our collection of casual and puzzle games!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
