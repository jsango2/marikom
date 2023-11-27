import React from "react";
import FooterSection from "../../components/FooterSection";
import Layout from "../../components/layout";
import Hero from "../../components/preradaiSkladistePage/hero/hero";
import Kartice from "../../components/preradaiSkladistePage/kartice/kartice";

function index() {
  return (
    <Layout>
      <Hero />
      <Kartice />
      <FooterSection />
    </Layout>
  );
}

export default index;
