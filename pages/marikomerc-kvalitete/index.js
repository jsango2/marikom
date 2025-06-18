import React from "react";
import FooterSection from "../../components/FooterSection";
import Layout from "../../components/layout";
import Hero from "../../components/marikomercKvalitetePage/hero/hero";
import Kartice from "../../components/marikomercKvalitetePage/kartice/kartice";
import Certifikati from "../../components/marikomercKvalitetePage/certifikati";
import { useRouter } from "next/router.js";
import Head from "next/head";
function index() {
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout>
      <Head>
        <title>Marikomerc Kvaliteta</title>
        <link
          rel="canonical"
          href="https://marikomerc.hr/marikomerc-kvalitete"
          key="canonical"
        />

        <meta property="og:title" content="Marikomerc Kvaliteta" key="title" />
        <meta name="twitter:title" content="Marikomerc Kvaliteta" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "52% vlastitih energetskih potreba pokrivamo sunčanom elektranom, biopročišćivačem saniramo otpadne vode, vozni park prelazimo na alternativna rješenja za smanjenje CO2 emisije. Ambalaža je od recikliranih materijala, a veći dio otpada recikliramo."
              : "52% of our energy needs are covered by solar power, wastewater is treated by a biopurifier, and our fleet is transitioning to alternative solutions to reduce CO2 emissions. Packaging is made from recycled materials, and most of our waste is recycled."
          }
        />
        <meta
          name="twitter:image"
          content={
            locale === "hr" ? "/kvalitetaOGhr.png" : "/kvalitetaOGeng.png"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "52% vlastitih energetskih potreba pokrivamo sunčanom elektranom, biopročišćivačem saniramo otpadne vode, vozni park prelazimo na alternativna rješenja za smanjenje CO2 emisije. Ambalaža je od recikliranih materijala, a veći dio otpada recikliramo."
              : "52% of our energy needs are covered by solar power, wastewater is treated by a biopurifier, and our fleet is transitioning to alternative solutions to reduce CO2 emissions. Packaging is made from recycled materials, and most of our waste is recycled."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "52% vlastitih energetskih potreba pokrivamo sunčanom elektranom, biopročišćivačem saniramo otpadne vode, vozni park prelazimo na alternativna rješenja za smanjenje CO2 emisije. Ambalaža je od recikliranih materijala, a veći dio otpada recikliramo."
              : "52% of our energy needs are covered by solar power, wastewater is treated by a biopurifier, and our fleet is transitioning to alternative solutions to reduce CO2 emissions. Packaging is made from recycled materials, and most of our waste is recycled."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://marikomerc.hr/marikomerc-kvalitete"`
              : `"https://marikomerc.hr/en/marikomerc-kvalitete"`
          }
        />
        <meta
          property="og:image"
          content={
            locale === "hr" ? "/kvalitetaOGhr.png" : "/kvalitetaOGeng.png"
          }
        />
      </Head>
      <Hero />
      <Certifikati />
      <Kartice />
    </Layout>
  );
}

export default index;
