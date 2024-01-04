import React from "react";
import Layout from "../../components/layout";
import ContactHero from "../../components/KontaktPage/Hero";
import ContactData from "../../components/KontaktPage/Data";
import DiMaris from "../../components/KontaktPage/DiMaris";
import MLS from "../../components/KontaktPage/MLS";

function index() {
  return (
    <Layout>
      <ContactHero />
      <ContactData />
      <DiMaris />
      <MLS />
    </Layout>
  );
}

export default index;
