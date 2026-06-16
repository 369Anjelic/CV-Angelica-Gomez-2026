import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Angelica Gomez",
  description: "Vollständiges Portfolio mit allen Projekten von Angelica Gomez - Full Stack Developer",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  keywords: "Portfolio, Developer, Full Stack, Next.js, React, JavaScript, Python",
  authors: [{ name: "Angelica Gomez" }],
  openGraph: {
    title: "Portfolio - Angelica Gomez",
    description: "Vollständiges Portfolio mit allen Projekten",
    url: "https://cv-angelica-gomez.vercel.app",
    siteName: "Portfolio Angelica Gomez",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
