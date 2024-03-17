import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/MLSpage/hero/hero";
import Main from "../../components/MLSpage/main";
import { useRouter } from "next/router.js";
import Head from "next/head";

function index() {
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout>
      <Head>
        <title>Marikomerc - MLS logistika</title>
        <link
          rel="canonical"
          href="https://www.marikomerc.hr/MLS"
          key="canonical"
        />

        <meta
          property="og:title"
          content="Marikomerc - MLS logistika"
          key="title"
        />
        <meta name="twitter:title" content="Marikomerc - MLS logistika" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "Specijalizirani za temperaturno kontrolirani transport osjetljivih proizvoda. Napredne logističke usluge s modernom flotom za distribuciju. Garantirana kvaliteta i sigurnost."
              : "Specializing in temperature-controlled transportation of sensitive products. Advanced logistics services with a modern distribution fleet. Guaranteed quality and safety."
          }
        />
        <meta
          name="twitter:image"
          content={locale === "hr" ? "/mlsOGhr.png" : "/mlsOGeng.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Specijalizirani za temperaturno kontrolirani transport osjetljivih proizvoda. Napredne logističke usluge s modernom flotom za distribuciju. Garantirana kvaliteta i sigurnost."
              : "Specializing in temperature-controlled transportation of sensitive products. Advanced logistics services with a modern distribution fleet. Guaranteed quality and safety."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Specijalizirani za temperaturno kontrolirani transport osjetljivih proizvoda. Napredne logističke usluge s modernom flotom za distribuciju. Garantirana kvaliteta i sigurnost."
              : "Specializing in temperature-controlled transportation of sensitive products. Advanced logistics services with a modern distribution fleet. Guaranteed quality and safety."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://www.marikomerc.hr/MLS"`
              : `"https://www.marikomerc.hr/en/MLS"`
          }
        />
        <meta
          property="og:image"
          content={locale === "hr" ? "/mlsOGhr.png" : "/mlsOGeng.png"}
        />
      </Head>
      <Hero />
      <Main />
    </Layout>
  );
}

export default index;

// export async function getStaticProps({ locales }) {
//   const kontakti = await getAllKontakti();

//   return {
//     props: {
//       fallback: false,
//       kontakti,
//     },
//   };
// }
