import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Sand Tetris - Play Free Online Sand Physics Tetris Game",
  description:
    "Experience Sand Tetris, a unique physics-based puzzle game that reimagines classic Tetris with realistic sand mechanics. Watch blocks transform into flowing particles, creating an addictive blend of strategy and nostalgia. Play free in your browser, no download needed!",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./favicon.ico",
  },
  verification: {
    google: "bg37j-N-WgMUJxr9gJBuLzFcK_Wjv_5Kj_7ah0yIAWk",
  },
  openGraph: {
    title: "Sand Tetris - Play Free Online Sand Physics Tetris Game",
    description:
      "Experience Sand Tetris, a unique physics-based puzzle game that reimagines classic Tetris with realistic sand mechanics. Watch blocks transform into flowing particles, creating an addictive blend of strategy and nostalgia. Play free in your browser, no download needed!",
    images: [
      {
        url: "./favicon.ico",
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
        <TRPCReactProvider>
          {children}</TRPCReactProvider>
      </body>
    </html>
  );
}
