import React from "react";
import FooterSection from "../../components/FooterSection";
import Layout from "../../components/layout";
import Hero from "../../components/preradaiSkladistePage/hero/hero";
import Kartice from "../../components/preradaiSkladistePage/kartice";
import Video from "../../components/preradaiSkladistePage/Video";

function index() {
  return (
    <Layout>
      <Hero />
      <Kartice />
      <Video />
    </Layout>
  );
}

export default index;
