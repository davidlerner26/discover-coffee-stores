import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ["latin"],
  weight: ['500', '600', '700'],
  variable: '--font-ibmPlexSans'
});

export const metadata: Metadata = {
  title: "Coffee Connoisser",
  description: "Discover your local coffee shops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
