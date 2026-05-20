import { siteConfig } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logos/logo_azul.png`,
      sameAs: [siteConfig.linkedInUrl],
      email: siteConfig.contactEmail,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#professional-service`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.defaultDescription,
      areaServed: {
        "@type": "Country",
        name: "Mexico",
      },
      serviceType: [
        "Administracion de propiedades",
        "Representacion de propietarios",
        "Soluciones legales e inmobiliarias",
      ],
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
