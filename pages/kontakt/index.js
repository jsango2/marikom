import React from "react";
import Layout from "../../components/layout";
import ContactHero from "../../components/KontaktPage/Hero";
import ContactData from "../../components/KontaktPage/Data";

function index() {
  return (
    <Layout>
      <ContactHero />
      <ContactData />
    </Layout>
  );
}

export default index;
