import AppHeader from "../../components/Karijere/komponente/AppHeader";
import MasterContainer from "../../components/Karijere/komponente/MasterContainer";
import CompanyLogos from "../../components/Karijere/komponente/CompanyLogos";
import MainSection from "../../components/Karijere/komponente/MainSection";
import AdSection from "../../components/Karijere/komponente/AdSection";
import ContactSection from "../../components/Karijere/komponente/ContactSection";
import Layout from "../../components/layout";
import { getAllOglasi } from "../../lib/api2";
import slugify from "slugify";
import Link from "next/link";

function Karijere(props) {
  const oglasi = props.oglasi;

  // console.log(props);
  return (
    <Layout>
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
          post.node.id,
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
          post.node.id,
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
