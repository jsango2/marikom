import AppHeader from "../../components/Karijere/komponente/AppHeader";
import MasterContainer from "../../components/Karijere/komponente/MasterContainer";
import CompanyLogos from "../../components/Karijere/komponente/CompanyLogos";
import MainSection from "../../components/Karijere/komponente/MainSection";
import AdSection from "../../components/Karijere/komponente/AdSection";
import ContactSection from "../../components/Karijere/komponente/ContactSection";
import Layout from "../../components/layout";

function Karijere() {
  return (
    <Layout>
      <MasterContainer>
        <AppHeader />
        <CompanyLogos />
        <MainSection />
        <AdSection />
        <ContactSection />
      </MasterContainer>
    </Layout>
  );
}

export default Karijere;
