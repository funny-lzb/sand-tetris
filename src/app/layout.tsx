import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Sand Tetris - Where Classic Tetris Meets Sand Physics",
  description:
    "Experience the innovative fusion of classic Tetris gameplay with realistic sand physics simulation. A unique puzzle game that challenges your strategy and creativity.",
  keywords: [
    "Sand Tetris",
    "Physics Puzzle Game",
    "Tetris Game",
    "Sand Physics",
    "Browser Game",
  ],
  verification: {
    google: "1f-luF6aIQTixAwaiwFrNX-kJvPG-gI43ubIISoYGKc",
  },
  openGraph: {
    title: "Sand Tetris - A New Take on Classic Tetris",
    description:
      "Experience Tetris reimagined with realistic sand physics. Play now!",
    images: [
      {
        url: "/favicon.png",
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
      <body className="min-h-screen bg-amber-50 text-amber-900 antialiased dark:bg-amber-950 dark:text-amber-100">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
