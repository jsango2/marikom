import React from "react";
import Layout from "../../components/layout";
import ContactHero from "../../components/KontaktPage/Hero";
import ContactData from "../../components/KontaktPage/Data";
import DiMaris from "../../components/KontaktPage/DiMaris";
import MLS from "../../components/KontaktPage/MLS";
import { getAllKontakti, getAllRadnaVremena } from "../../lib/api2";
import Kontakt from "../../components/MLSpage/kontakt";
import { useRouter } from "next/router.js";
import Head from "next/head";

function index(props) {
  const router = useRouter();
  const { locale } = router;
  const kontakti = props.kontakti.edges[0].node.kontakti;
  const radnaVremena =
    props.radnaVremena.edges[0].node.radnaVremenaTrgovina.radnoVrijemeTrgovina;

  // console.log(props);
  return (
    <Layout>
      <Head>
        <title>Marikomerc - Kontakti</title>
        <link
          rel="canonical"
          href="https://www.marikomerc.hr/kontakt"
          key="canonical"
        />

        <meta property="og:title" content="Marikomerc - Kontakti" key="title" />
        <meta name="twitter:title" content="Marikomerc - Kontakti" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "Obratite nam se za sve upite o našim proizvodima i uslugama u vezi s ribarnicom i lancem distribucije. Naš stručni tim stoji vam na raspolaganju kako bi vam pružio sve potrebne informacije i podršku."
              : "Contact us for any inquiries regarding our products and services related to the fish market and distribution chain. Our expert team is at your disposal to provide you with all the necessary information and support."
          }
        />
        <meta
          name="twitter:image"
          content={locale === "hr" ? "/kontaktOGhr.png" : "/kontaktOGeng.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Obratite nam se za sve upite o našim proizvodima i uslugama u vezi s ribarnicom i lancem distribucije. Naš stručni tim stoji vam na raspolaganju kako bi vam pružio sve potrebne informacije i podršku."
              : "Contact us for any inquiries regarding our products and services related to the fish market and distribution chain. Our expert team is at your disposal to provide you with all the necessary information and support."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Obratite nam se za sve upite o našim proizvodima i uslugama u vezi s ribarnicom i lancem distribucije. Naš stručni tim stoji vam na raspolaganju kako bi vam pružio sve potrebne informacije i podršku."
              : "Contact us for any inquiries regarding our products and services related to the fish market and distribution chain. Our expert team is at your disposal to provide you with all the necessary information and support."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://www.marikomerc.hr/kontakt"`
              : `"https://www.marikomerc.hr/en/kontakt"`
          }
        />
        <meta
          property="og:image"
          content={locale === "hr" ? "/kontaktOGhr.png" : "/kontaktOGeng.png"}
        />
      </Head>
      <ContactHero />
      <ContactData kontakti={kontakti} />
      <DiMaris />
      <MLS />
      <Kontakt radnaVremena={radnaVremena} />
    </Layout>
  );
}

export default index;

export async function getStaticProps({ locales }) {
  const kontakti = await getAllKontakti();
  const radnaVremena = await getAllRadnaVremena();
  return {
    props: {
      fallback: false,
      kontakti,
      radnaVremena,
    },
  };
}
