import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cassad",
  description: "Servicios inmobiliarios y legales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Cassad" />
        <meta property="og:description" content="Servicios inmobiliarios y legales" />
        <meta property="og:image" content="/logos/logo_fondo_blanco.jpg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
