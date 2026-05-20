import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

const path = "/administracion";
const title = "Administracion de Propiedades";
const description =
  "Optimiza la administracion de tus propiedades con Cassad, con acompanamiento legal e inmobiliario para proteger tu patrimonio.";

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

export default function AdministracionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
