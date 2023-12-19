import React from "react";
import Layout from "../../components/layout";
import HorecaHero from "../../components/HorecaPage/Hero";
import FAQ from "../../components/HorecaPage/FAQ";
import Mapa from "../../components/HorecaPage/Mapa";

function index() {
  return (
    <Layout>
      <HorecaHero />
      <FAQ />
      <Mapa />
    </Layout>
  );
}

export default index;
