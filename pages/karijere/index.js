import AppHeader from "../../components/KarijerePage/komponente/AppHeader";
import MasterContainer from "../../components/KarijerePage/komponente/MasterContainer";
import CompanyLogos from "../../components/KarijerePage/komponente/CompanyLogos";
import MainSection from "../../components/KarijerePage/komponente/MainSection";
import AdSection from "../../components/KarijerePage/komponente/AdSection";
import ContactSection from "../../components/KarijerePage/komponente/ContactSection";
import Layout from "../../components/layout";
import { getAllOglasi } from "../../lib/api2";
import slugify from "slugify";
import Link from "next/link";
import { useRouter } from "next/router.js";
import Head from "next/head";
function Karijere(props) {
  const router = useRouter();
  const { locale } = router;
  const oglasi = props.oglasi;
  console.log(oglasi);
  return (
    <Layout>
      <Head>
        <title>Marikomerc - Karijere</title>
        <link
          rel="canonical"
          href="https://www.marikomerc.hr/karijere"
          key="canonical"
        />

        <meta property="og:title" content="Marikomerc - Karijere" key="title" />
        <meta name="twitter:title" content="Marikomerc - Karijere" />
        <meta
          name="twitter:description"
          content={
            locale === "hr"
              ? "Marikomerc nudi karijerne prilike za ambiciozne i timski orijentirane pojedince. Fokusirani smo na razvoj vještina i profesionalni rast te pozivamo kandidate s relevantnim kompetencijama da se pridruže našem timu."
              : "Marikomerc offers career opportunities for ambitious and team-oriented individuals. We are focused on skill development and professional growth, inviting candidates with relevant competencies to join our team."
          }
        />
        <meta
          name="twitter:image"
          content={locale === "hr" ? "/karijereOGhr.png" : "/karijereOGeng.png"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr"
              ? "Marikomerc nudi karijerne prilike za ambiciozne i timski orijentirane pojedince. Fokusirani smo na razvoj vještina i profesionalni rast te pozivamo kandidate s relevantnim kompetencijama da se pridruže našem timu."
              : "Marikomerc offers career opportunities for ambitious and team-oriented individuals. We are focused on skill development and professional growth, inviting candidates with relevant competencies to join our team."
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr"
              ? "Marikomerc nudi karijerne prilike za ambiciozne i timski orijentirane pojedince. Fokusirani smo na razvoj vještina i profesionalni rast te pozivamo kandidate s relevantnim kompetencijama da se pridruže našem timu."
              : "Marikomerc offers career opportunities for ambitious and team-oriented individuals. We are focused on skill development and professional growth, inviting candidates with relevant competencies to join our team."
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `"https://www.marikomerc.hr/karijere"`
              : `"https://www.marikomerc.hr/en/karijere"`
          }
        />
        <meta
          property="og:image"
          content={locale === "hr" ? "/karijereOGhr.png" : "/karijereOGeng.png"}
        />
      </Head>
      <MasterContainer>
        <AppHeader />
        <CompanyLogos />
        <MainSection />
        <AdSection oglasi={oglasi} />
        <ContactSection />
      </MasterContainer>
    </Layout>
  );
}

export default Karijere;

export async function getStaticProps({ locales }) {
  const oglasi = await getAllOglasi();

  const paths = [];
  oglasi.edges.map((post, i) => {
    return paths.push({
      params: {
        slug:
          post.node.oglasi.naslovOglasa.toLowerCase().split(" ").join("-") +
          "-" +
          post.node.id.toLowerCase(),
      },
      locale: "hr",
    });
  });
  oglasi.edges.map((post, i) => {
    return paths.push({
      params: {
        slug:
          post.node.oglasi.naslovOglasaEng.toLowerCase().split(" ").join("-") +
          "-" +
          post.node.id.toLowerCase(),
      },
      locale: "en",
    });
  });

  // oglasi.edges.map((post, i) => {
  //   return locales.map((locale) => {
  //     return paths.push({
  //       params: {
  //         slug:
  //           post.node.novosti.naslovEng.toLowerCase().split(" ").join("-") +
  //           "-" +
  //           post.node.novosti.datum.split("/").join("-"),
  //       },
  //       locale,
  //     });
  //   });
  // });

  return {
    props: {
      paths: paths,

      fallback: false,
      oglasi,
    },
  };
}
