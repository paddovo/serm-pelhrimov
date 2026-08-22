import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.domain}`,
  description: siteConfig.description,
  keywords: [
    "historický šerm Pelhřimov",
    "škola historického šermu Pelhřimov",
    "šerm Pelhřimov",
    "HEMA Pelhřimov",
    "šerm Vysočina",
    "historický šerm Vysočina",
    "dlouhý meč Pelhřimov",
    "tesák Pelhřimov",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pelhřimov",
      "addressRegion": "Kraj Vysočina",
      "addressCountry": "CZ"
    },
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "sameAs": [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.youtube
    ]
  };

  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
