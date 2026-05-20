import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

const path = "/estrategias";
const title = "Estrategias Inmobiliarias";
const description =
  "Conoce las estrategias inmobiliarias de Cassad para tomar mejores decisiones en diagnostico, gestion y crecimiento patrimonial.";

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

export default function EstrategiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
