// import React from "react";
// import { graphql } from "gatsby";
import Layout from "./../components/layout";
// import Seo from "../components/seo";
import Head from "next/head";
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
import { getAllNovosti } from "../lib/api2";
import AppContext from "../components/AppContext.js";
import FsLightbox from "fslightbox-react";

export default function IndexPage({ allPosts }) {
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
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=3nQNiWdeH2Q"]}
      />
      <Hero toggleYT={handleYT} />
      <ProizvodiSection />
      <NovostiSection novosti={allPosts.edges} />
      <NumbersSection />
      <MapaSection />
      <CertifikatSection />
      <PerlaPrviDio />
      <PerlaDrugiDio />
      <KontaktSection />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllNovosti();

  return {
    props: { allPosts },
  };
}
