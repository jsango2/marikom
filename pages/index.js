// import React from "react";
// import { graphql } from "gatsby";
import Layout from "./../components/layout";
// import Seo from "../components/seo";
import Head from "next/head";

import Hero from "../components/hero/hero";
import ProizvodiSection from "../components/ProizvodiSection";
import NovostiSection from "../components/NovostiSection";
import KatalogSection from "../components/Katalog Section";
import NumbersSection from "../components/NumbersSection";
import MapaSection from "../components/MapaSection";
import CertifikatSection from "../components/CertifikatSection";
import RastSection from "../components/RastSection";
import PerlaPrviDio from "../components/PerlaPrviDIo";
import PerlaDrugiDio from "../components/PerlaDrugiDio";
import DiMarisSection from "../components/DiMarisSection";
import DeliMarisSection from "../components/DeliMarisSection";
import ProLogMapSection from "../components/ProLogMapSection";
import KontaktSection from "../components/KontaktSection";
import FooterSection from "../components/FooterSection";
import useWindowSize from "../components/helper/usewindowsize";
import CertifikatMobileSection from "../components/CertifikatMobileSection";

export default function IndexPage() {
  const size = useWindowSize();

  return (
    <Layout>
      <Hero />
      {/* <NovostiSection /> */}

      <ProizvodiSection />
      <NovostiSection />
      {/* <KatalogSection /> */}
      <NumbersSection />
      <MapaSection />
      {size.width > 850 ? <CertifikatSection /> : <CertifikatMobileSection />}

      {/* <RastSection /> */}
      <PerlaPrviDio />
      <PerlaDrugiDio />
      {/* <DiMarisSection /> */}
      {/* <DeliMarisSection /> */}
      {/* <ProLogMapSection /> */}
      <KontaktSection />
      <FooterSection />
    </Layout>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsForHome(preview);
//   return {
//     props: { allPosts, preview },
//   };
// }
