import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Developer web - mobile - Christian",
  description: "Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Obtenez l'expertise dont vous avez besoin pour réaliser votre projet de développement web et mobile. Profitez également de services de gestion de projets numériques efficaces." />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-608164694"/>
      <Script src="https://chrissraz.com/js/google.js"/>

      {/* <Suspense fallback={<Loading />}> */}
      <body>{children}</body>
      {/* </Suspense> */}
    </html>
  );
}
