import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";
import Head from "next/head";
import Script from "next/script";
import { NextSeo } from 'next-seo';


// export const metadata = {
//   title: "Developer web - mobile - Christian",
  
//   description: "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <NextSeo
      title="IT Poject Manager | Fullstack developer | R. Jean Christian"
      description="Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces."
      // canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://chrissraz.com/',
        title: 'IT Poject Manager | Fullstack developer | R. Jean Christian',
        description: "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
        images: [
          {
            url: '/images/og-image-02.png',
            width: 800,
            height: 600,
            alt: 'R. Jean Christian',
            type: 'image/png',
          },
          {
            url: '/images/og-image-03.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/png',
          },
          { url: '/images/og-image.png' },
        ],
        siteName: 'Razanamihoatra Jean Christian',
      }}
    /> 
        {/* <meta name="description" content="Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces." /> */}
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-608164694"/>
      <Script src="https://chrissraz.com/js/google.js"/>

      
      {/* <Suspense fallback={<Loading />}> */}
      <body>{children}</body>
      {/* </Suspense> */}
    </html>
  );
}
