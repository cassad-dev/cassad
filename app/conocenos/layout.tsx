import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

const path = "/conocenos";
const title = "Conocenos";
const description =
  "Conoce a Cassad, nuestra experiencia y el enfoque estrategico que aplicamos para resolver necesidades inmobiliarias y legales.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}${path}`,
    title: `${title} | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function ConocenosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
