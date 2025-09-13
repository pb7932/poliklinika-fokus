import type { Metadata } from "next";
import { Roboto_Slab, Open_Sans } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.poliklinikafokus.hr"),
  title: {
    default: "Poliklinika Fokus - Optika, Oftalmologija i Estetska Medicina",
    template: "%s | Poliklinika Fokus",
  },
  description:
    "Poliklinika Fokus pruža vrhunsku oftalmološku skrb, optičke usluge i estetske tretmane. Više od 20 godina iskustva u brizi za zdravlje vaših očiju i kože.",
  openGraph: {
    title: "Poliklinika Fokus - Optika, Oftalmologija i Estetska Medicina",
    description:
      "Više od 20 godina iskustva u optici, oftalmologiji i estetskoj medicini. Naručite se online u Polikliniku Fokus.",
    url: "https://www.poliklinikafokus.hr/",
    siteName: "Poliklinika Fokus",
    images: [
      {
        url: "https://www.poliklinikafokus.hr/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Poliklinika Fokus - optičle, oftalmološke i estetske usluge",
      },
    ],
    locale: "hr_HR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poliklinika Fokus - Optika, Oftalmologija i Estetska Medicina",
    description:
      "Stručna skrb za vaše oči i kožu – optika, oftalmologija i estetski tretmani.",
    images: ["https://www.poliklinikafokus.hr/images/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://poliklinikafokus.hr/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: "Poliklinika Fokus",
        url: "https://poliklinikafokus.hr/",
        logo: "https://poliklinikafokus.hr/poliklinika-fokus-logo-2.png",
        image: "https://poliklinikafokus.hr/images/og-image.jpg",
        description:
          "Vrhunska specijalistička očna ordinacija s uslugama optike, oftalmologije i estetske medicine u Varaždinu.",
        address: {
            "@type": "PostalAddress",
            "streetAddress": "Vinka Međerala 9",
            "addressLocality": "Varaždin",
            "postalCode": "42000",
            "addressCountry": "HR"
          },
        contactPoint: {
            "@type": "ContactPoint",
            "telephone": "+38542200443",
            "email": "n.brijacak@gmail.com",
            "contactType": "customer service",
            "availableLanguage": ["hr", "en"]
          },
        openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Thursday"],
              "opens": "12:00",
              "closes": "20:00",
              "description": "Radno vrijeme Ordinacije (pon, čet: 12:00–20:00)"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Tuesday", "Wednesday"],
              "opens": "08:00",
              "closes": "16:00",
              "description": "Radno vrijeme Ordinacije (uto, sri: 8:00–16:00)"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Friday",
              "opens": "11:00",
              "closes": "17:00",
              "description": "Radno vrijeme Ordinacije (pet: 11:00–17:00)"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "description": "Radno vrijeme Ordinacije subotom po dogovoru"
            }
          ],
        sameAs: [
            "https://www.facebook.com/Poliklinika.Fokus/",
            "https://www.instagram.com/poliklinika_fokus/"
          ]
    };
  return (
    <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Libertinus+Math&display=swap" rel="stylesheet"></link>
        </head>
      <body
        className={`${robotoSlab.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
