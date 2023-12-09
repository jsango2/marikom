import React from "react";

import Layout from "../../components/layout";

import { catalogData } from "../../catalogData";
import ProizvodiPage from "../../components/ProizvodiPage";
import { getAllPhotosProizvodi } from "../../lib/api2.js";
import Hero from "../../components/ProizvodiPage/Hero/hero.js";

function index(props) {
  return (
    <Layout>
      <Hero />
      <ProizvodiPage allPhotosProizvodi={props.allPhotosProizvodi} />
    </Layout>
  );
}

export default index;
export async function getStaticProps({ preview = false }) {
  const allPhotosProizvodi = await getAllPhotosProizvodi();

  return {
    props: { allPhotosProizvodi },
  };
}
