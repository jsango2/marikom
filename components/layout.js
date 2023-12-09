import Meta from "../components/meta";
import FooterSection from "./FooterSection";
import Header from "./header";

export default function Layout({ preview, children, novostiNaslovi }) {
  return (
    <>
      <Header novostiNaslovi={novostiNaslovi} />
      <Meta />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}
