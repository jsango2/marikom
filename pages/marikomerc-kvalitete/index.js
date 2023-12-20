import React from "react";
import FooterSection from "../../components/FooterSection";
import Layout from "../../components/layout";
import Hero from "../../components/marikomercKvalitetePage/hero/hero";
import Kartice from "../../components/marikomercKvalitetePage/kartice/kartice";
import Certifikati from "../../components/marikomercKvalitetePage/certifikati";

function index() {
  return (
    <Layout>
      <Hero />
      <Certifikati />
      <Kartice />
    </Layout>
  );
}

export default index;
