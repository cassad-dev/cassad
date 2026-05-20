import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

const path = "/servicios";
const title = "Servicios";
const description =
  "Descubre los servicios de Cassad en administracion de propiedades, representacion de propietarios y gestion estrategica inmobiliaria.";

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

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
