// import React from "react";
// import { graphql } from "gatsby";
import Layout from "./../components/layout";
// import Seo from "../components/seo";
import Head from "next/head";
import { useRouter } from "next/router.js";
import { createContext, useContext, useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import ProizvodiSection from "../components/ProizvodiSection";
import NovostiSection from "../components/NovostiSection";
import NumbersSection from "../components/NumbersSection";
import MapaSection from "../components/MapaSection";
import CertifikatSection from "../components/CertifikatSection";
import PerlaPrviDio from "../components/PerlaPrviDIo";
import PerlaDrugiDio from "../components/PerlaDrugiDio";
import KontaktSection from "../components/KontaktSection";
import useWindowSize from "../components/helper/usewindowsize";
import CertifikatMobileSection from "../components/CertifikatMobileSection";
import { getFirstThreeNovosti } from "../lib/api2";
import AppContext from "../components/AppContext.js";
import FsLightbox from "fslightbox-react";
import en from "../locales/en.json";
import hr from "../locales/hr.json";
import { perlaData } from "../perlaData.js";

import NewsletterFormspark from "../components/rudiKomponente/Newsletter.js";
import CookieNotice from "../components/rudiKomponente/CookieNotice.js";
// import { catalogData } from "../catalogPerla.js";
// import ObavijestTraka from '../components/rudiKomponente/ObavijestTraka.js';

export default function IndexPage({ allPosts, allProizvodi }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const [toggler, setToggler] = useState(false);
  const handleYT = () => {
    setToggler(!toggler);
  };
  const context = useContext(AppContext);
  const size = useWindowSize();
  // useEffect(() => {
  //   context.setNovostiNasloviContext(novostiNaslovi);
  // }, []);

  return (
    <Layout>
      <Head>
        <title> Marikomerc.hr</title>
        <link rel="canonical" href="https://marikomerc.hr" key="canonical" />

        <meta property="og:title" content="Marikomerc" key="title" />
        <meta name="twitter:title" content="Marikomerc" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "Otkrijte visokokvalitetne morske plodove, smrznute i svježe, uz naglasak na održivost i sigurnost hrane. Poslužujemo sektor HoReCa i maloprodaju uz učinkovitu logistiku."
              : "Discover high-quality seafood, frozen & fresh, with a focus on sustainability & food safety. Serving HoReCa & retail sectors backed by efficient logistics."
          }
        />
        <meta
          name="twitter:image"
          content={locale === "hr" ? "/naslovnaOGhr.png" : "/naslovnaOGeng.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Otkrijte visokokvalitetne morske plodove, smrznute i svježe, uz naglasak na održivost i sigurnost hrane. Poslužujemo sektor HoReCa i maloprodaju uz učinkovitu logistiku."
              : "Discover high-quality seafood, frozen & fresh, with a focus on sustainability & food safety. Serving HoReCa & retail sectors backed by efficient logistics."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Otkrijte visokokvalitetne morske plodove, smrznute i svježe, uz naglasak na održivost i sigurnost hrane. Poslužujemo sektor HoReCa i maloprodaju uz učinkovitu logistiku."
              : "Discover high-quality seafood, frozen & fresh, with a focus on sustainability & food safety. Serving HoReCa & retail sectors backed by efficient logistics."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://marikomerc.hr"`
              : `"https://marikomerc.hr/en"`
          }
        />
        <meta
          property="og:image"
          content={locale === "hr" ? "/naslovnaOGhr.png" : "/naslovnaOGeng.png"}
        />
      </Head>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=3nQNiWdeH2Q"]}
      />
      <Hero toggleYT={handleYT} />
      {/* <ObavijestTraka /> */}
      <ProizvodiSection />
      <NovostiSection novosti={allPosts.edges} />
      <NumbersSection />
      <MapaSection />
      <CertifikatSection />
      <PerlaPrviDio />
      <PerlaDrugiDio allProizvodi={allProizvodi} /> <NewsletterFormspark />
      <KontaktSection />
      <CookieNotice />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getFirstThreeNovosti();
  const allProizvodi = await perlaData;
  // const allProizvodi = await catalogData;

  return {
    props: { allPosts, allProizvodi },
  };
}
