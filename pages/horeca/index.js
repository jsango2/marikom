import React from "react";
import Layout from "../../components/layout";
import HorecaHero from "../../components/HorecaPage/Hero";
import { useRouter } from "next/router.js";

import FAQ from "../../components/HorecaPage/FAQ";
import Mapa from "../../components/HorecaPage/Mapa";
import Head from "next/head";

function index() {
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout>
      <Head>
        <title>Marikomerc - Horeca suradnja</title>
        <link
          rel="canonical"
          href="https://www.marikomerc.hr/horeca"
          key="canonical"
        />

        <meta
          property="og:title"
          content="Marikomerc - Horeca suradnja"
          key="title"
        />
        <meta name="twitter:title" content="Marikomerc - Horeca suradnja" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "Marikomerc nudi specijalizirane morske plodove za HoReCa sektor - visokokvalitetne proizvode za hotele, restorane i kafiće"
              : "Marikomerc offers specialized seafood products for the HoReCa sector - high-quality products for hotels, restaurants, and cafes."
          }
        />
        <meta
          name="twitter:image"
          content={locale === "hr" ? "/horecaOGhr.png" : "/horecaOGeng.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Marikomerc nudi specijalizirane morske plodove za HoReCa sektor - visokokvalitetne proizvode za hotele, restorane i kafiće"
              : "Marikomerc offers specialized seafood products for the HoReCa sector - high-quality products for hotels, restaurants, and cafes."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Marikomerc nudi specijalizirane morske plodove za HoReCa sektor - visokokvalitetne proizvode za hotele, restorane i kafiće"
              : "Marikomerc offers specialized seafood products for the HoReCa sector - high-quality products for hotels, restaurants, and cafes."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://www.marikomerc.hr/horeca"`
              : `"https://www.marikomerc.hr/en/horeca"`
          }
        />
        <meta
          property="og:image"
          content={locale === "hr" ? "/horecaOGhr.png" : "/horecaOGeng.png"}
        />
      </Head>
      <HorecaHero />
      <FAQ />
      <Mapa />
    </Layout>
  );
}

export default index;
