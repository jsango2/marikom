import React from "react";

import Layout from "../../components/layout";

import { catalogData } from "../../catalogData";
import ProizvodiPage from "../../components/ProizvodiPage";

import Hero from "../../components/ProizvodiPage/Hero/hero.js";
import { useRouter } from "next/router.js";
import Head from "next/head";
// import { getAllProizvodi } from "../../lib/api2.js";
function index({ allProizvodi }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout>
      <Head>
        <title>Marikomerc - Proizvodi</title>
        <link
          rel="canonical"
          href="https://marikomerc.hr/proizvodi"
          key="canonical"
        />

        <meta
          property="og:title"
          content="Marikomerc - Proizvodi"
          key="title"
        />
        <meta name="twitter:title" content="Marikomerc - Proizvodi" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "Nudimo širok izbor morskih proizvoda - smrznute, svježe, dimljene, sušene, marinirane i usoljene varijante, uključujući i McCain program, smrznuto povrće, tjesteninu, meso te veganske zamjene, zadovoljavajući raznolike prehrambene i kulinarske potrebe."
              : "We offer a wide range of seafood products including frozen, fresh, smoked, dried, marinated, and salted varieties, along with the McCain program, frozen vegetables, pasta, meat, and vegan substitutes, catering to diverse dietary and culinary needs."
          }
        />
        <meta
          name="twitter:image"
          content={
            locale === "hr" ? "/proizvodiOGhr.png" : "/proizvodiOGeng.png"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Nudimo širok izbor morskih proizvoda - smrznute, svježe, dimljene, sušene, marinirane i usoljene varijante, uključujući i McCain program, smrznuto povrće, tjesteninu, meso te veganske zamjene, zadovoljavajući raznolike prehrambene i kulinarske potrebe."
              : "We offer a wide range of seafood products including frozen, fresh, smoked, dried, marinated, and salted varieties, along with the McCain program, frozen vegetables, pasta, meat, and vegan substitutes, catering to diverse dietary and culinary needs."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Nudimo širok izbor morskih proizvoda - smrznute, svježe, dimljene, sušene, marinirane i usoljene varijante, uključujući i McCain program, smrznuto povrće, tjesteninu, meso te veganske zamjene, zadovoljavajući raznolike prehrambene i kulinarske potrebe."
              : "We offer a wide range of seafood products including frozen, fresh, smoked, dried, marinated, and salted varieties, along with the McCain program, frozen vegetables, pasta, meat, and vegan substitutes, catering to diverse dietary and culinary needs."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://marikomerc.hr/proizvodi"`
              : `"https://marikomerc.hr/en/proizvodi"`
          }
        />
        <meta
          property="og:image"
          content={
            locale === "hr" ? "/proizvodiOGhr.png" : "/proizvodiOGeng.png"
          }
        />
      </Head>
      <Hero />
      {/* <ProizvodiPage allProizvodi={allProizvodi} /> */}
    </Layout>
  );
}

export default index;
// export async function getStaticProps({ preview = false }) {
//   const allPhotosProizvodi = await getAllPhotosProizvodi();

//   return {
//     props: { allPhotosProizvodi },
//   };
// }

// export async function getStaticProps({ preview = false }) {
//   const allProizvodi = await getAllProizvodi();

//   return {
//     props: { allProizvodi },
//   };
// }
