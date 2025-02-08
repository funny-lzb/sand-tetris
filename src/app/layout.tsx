import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Sand Tetris - Play Free Online Sand Physics Tetris Game",
  description:
    "Play Sand Tetris online for free! Experience this unique blend of classic Tetris with realistic sand physics. No download needed - play directly in your browser.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "bg37j-N-WgMUJxr9gJBuLzFcK_Wjv_5Kj_7ah0yIAWk",
  },
  openGraph: {
    title: "Sand Tetris - Play Free Online Sand Physics Tetris Game",
    description:
      "Play Sand Tetris online for free! Experience this unique blend of classic Tetris with realistic sand physics. No download needed - play directly in your browser.",
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
