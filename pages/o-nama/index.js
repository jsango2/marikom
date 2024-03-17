import React from "react";
import FooterSection from "../../components/FooterSection";
import KontaktSection from "../../components/KontaktSection";
import Layout from "../../components/layout";
// import Brojke from "../../components/nasaPricaPage/brojke/brojke";
import Hero from "../../components/nasaPricaPage/hero/hero";
import Onama from "../../components/nasaPricaPage/oNama/oNama";
import Povijest from "../../components/nasaPricaPage/povijest/povijest";
import Skladiste from "../../components/nasaPricaPage/skladiste/skladiste";
import Vrijednosti from "../../components/nasaPricaPage/vrijednost/vrijednosti";
import Zajednica from "../../components/nasaPricaPage/zajednica/zajednica";
import NovostiSection from "../../components/NovostiSection";
import Brojke from "../../components/MLSpage/brojke/brojke";
import { useRouter } from "next/router.js";
import Head from "next/head";
function index() {
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout>
      <Head>
        <title>Marikomerc - O nama</title>
        <link
          rel="canonical"
          href="https://www.marikomerc.hr/o-nama"
          key="canonical"
        />

        <meta property="og:title" content="Marikomerc Kvaliteta" key="title" />
        <meta name="twitter:title" content="Marikomerc Kvaliteta" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "Otkrijte našu posvećenost izvrsnosti u industriji morskih plodova na Marikomerc stranici 'O nama', ističući predanost kvaliteti i održivosti."
              : "Discover our commitment to excellence in the seafood industry on the Marikomerc 'About Us' page, highlighting our dedication to quality and sustainability."
          }
        />
        <meta
          name="twitter:image"
          content={locale === "hr" ? "/onamaOGhr.png" : "/onamaOGeng.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Otkrijte našu posvećenost izvrsnosti u industriji morskih plodova na Marikomerc stranici 'O nama', ističući predanost kvaliteti i održivosti."
              : "Discover our commitment to excellence in the seafood industry on the Marikomerc 'About Us' page, highlighting our dedication to quality and sustainability."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Otkrijte našu posvećenost izvrsnosti u industriji morskih plodova na Marikomerc stranici 'O nama', ističući predanost kvaliteti i održivosti."
              : "Discover our commitment to excellence in the seafood industry on the Marikomerc 'About Us' page, highlighting our dedication to quality and sustainability."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://www.marikomerc.hr/o-nama"`
              : `"https://www.marikomerc.hr/en/o-nama"`
          }
        />
        <meta
          property="og:image"
          content={locale === "hr" ? "/onamaOGhr.png" : "/onamaOGeng.png"}
        />
      </Head>
      <Hero />
      <Onama />
      <Povijest />
      <Vrijednosti />
      <Skladiste />
      <Brojke />
      <Zajednica />
      {/* <NovostiSection background={true} /> */}
      <KontaktSection />
      {/* <FooterSection /> */}
    </Layout>
  );
}

export default index;
