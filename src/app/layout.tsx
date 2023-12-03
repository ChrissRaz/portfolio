import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";
import Head from "next/head";
import Script from "next/script";
// import { NextSeo } from 'next-seo';


// export const metadata = {
//   title: "Developer web - mobile - Christian",
  
//   description: "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
// };

export const metadata = {
  title: "IT Poject Manager | Fullstack developer | R. Jean Christian",
  description:
    "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
  icons: {
    icon: "/favicon.ico",
  },
  // robots: {
  //   follow: "follow",
  //   index: "index"
  // },
  openGraph: {
    locale: "fr_FR",
    type: "website",
    title: "IT Poject Manager | Fullstack developer | R. Jean Christian",
    description: "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
    url: "https://chrissraz.com",
    siteName: "RAZANAMIHOATRA Jean Christian",
    images: [
      {
        url: 'https://chrissraz.com/images/og-image-02.png',
        width: 800,
        height: 600,
        alt: 'R. Jean Christian',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  function addJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "IT Poject Manager | Fullstack developer | R. Jean Christian",
      "description": "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
      "url": "www.dizeo-agency.com",
      "logo": "https://chrissraz.com/images/logo.png"
      "telephone": "+261 32 50 034 43",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antananarivo",
        "addressRegion": "TRN",
        "postalCode": "00101",
        "addressCountry": "MG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -18.94250288279061,
        "longitude": 47.55590381323954
      },
    }
  `,
    };
  };

  return (
    <html lang="en">
      <Head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="page-jsonld"
        />
      {/* <NextSeo
      title="IT Poject Manager | Fullstack developer | R. Jean Christian"
      description="Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces."
      // canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://chrissraz.com/',
        title: 'IT Poject Manager | Fullstack developer | R. Jean Christian',
        description: "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
        images: [ 
          {
            url: 'https://chrissraz.com/images/og-image-02.png',
            width: 800,
            height: 600,
            alt: 'R. Jean Christian',
            type: 'image/png',
          },
          {
            url: 'https://chrissraz.com/images/og-image-03.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/png',
          },
          { url: 'https://chrissraz.com/images/og-image.png' },
        ],
        siteName: 'Razanamihoatra Jean Christian',
      }}
    />  */}
        {/* <meta name="description" content="Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces." /> */}
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-608164694"/>
      <Script src="https://chrissraz.com/js/google.js"/>


        <div>
      
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RSCWLSPGRD"></Script>
      <Script id="ga">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RSCWLSPGRD');`}
      </Script>
        </div>
      {/* <Suspense fallback={<Loading />}> */}
      <body>{children}</body>
      {/* </Suspense> */}
    </html>
  );
}
