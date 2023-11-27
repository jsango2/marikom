import Logos from "../ProLogMapSection/logos.js";
import {
  WrapAll,
  Container,
  Name,
  MainLinks,
  SingleLink,
  WrapLogo,
  SingleLink2,
  SubLinks,
  Column,
  SubName,
  Social,
  Copy,
  CopyLink,
} from "./style.js";
import MarikomercLogo from "../../svg/marikomerc_logo_footer.svg";
import Instagram from "../../svg/Instagram.svg";
import Facebook from "../../svg/Facebook.svg";
import Linkedin from "../../svg/Linkedin.svg";
import Location from "../../svg/Location.svg";
import Email from "../../svg/Email.svg";
import useWindowSize from "../helper/usewindowsize";
import { useInView } from "react-intersection-observer";
function FooterSection() {
  const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <WrapAll>
      <Container>
        <WrapLogo ref={ref} className={` ${inView ? "inView" : "outView"}`}>
          <MarikomercLogo />
        </WrapLogo>

        <MainLinks>
          <SingleLink>O nama</SingleLink>
          <SingleLink>Proizvodi</SingleLink>
          <SingleLink>Novosti</SingleLink>
          <SingleLink>Kvaliteta</SingleLink>
          <SingleLink>Karijere</SingleLink>
          <SingleLink>HoReCa suradnja</SingleLink>
          <SingleLink>Kontakt</SingleLink>
        </MainLinks>
        <SubLinks>
          {size.width > 770 ? (
            <>
              <Column>
                <SubName>LOKACIJE</SubName>
                <SingleLink2>Zadar</SingleLink2>
                <SingleLink2>Dubrovnik</SingleLink2>
                <SingleLink2>Rijeka</SingleLink2>
                <SingleLink2>Metković</SingleLink2>
              </Column>
              <Column>
                <SubName>PROIZVODI</SubName>
                <SingleLink2>Glavonošci</SingleLink2>
                <SingleLink2>Perla proizvodi</SingleLink2>
                <SingleLink2>Rakovi</SingleLink2>
                <SingleLink2>Fileti i odresci</SingleLink2>
                <SingleLink2>Školjkaši</SingleLink2>
                <SingleLink2>Ribe</SingleLink2>
                <SingleLink2>Ostali proizvodi</SingleLink2>
              </Column>
            </>
          ) : (
            <Column>
              <SubName>MENI</SubName>
              <SingleLink2>O nama</SingleLink2>
              <SingleLink2>Proizvodi</SingleLink2>
              <SingleLink2>Novosti</SingleLink2>
              <SingleLink2>Kvalteta</SingleLink2>
              <SingleLink2>Karijere</SingleLink2>
              <SingleLink2>HoReCa suradnja</SingleLink2>
              <SingleLink2>Kontakt</SingleLink2>
            </Column>
          )}

          <Column>
            <SubName>ČLANICE GRUPE</SubName>
            <SingleLink2>Marikomerc</SingleLink2>
            <SingleLink2>DiMaris Ribarnice</SingleLink2>
            <SingleLink2>MLS Logistika</SingleLink2>
          </Column>
          {size.width > 770 && (
            <Column>
              <SubName>KONTAKTIRAJTE NAS</SubName>
              <Social>
                <Instagram />
                <Facebook />
                <Linkedin />
                <Location />
                <Email />
              </Social>
            </Column>
          )}
        </SubLinks>
        {size.width < 770 && (
          <Column
            style={{
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Social>
              {/* <Instagram />
              <Facebook />
              <Linkedin />
              <Location />
              <Email /> */}
            </Social>
          </Column>
        )}
        <Copy>
          <CopyLink>© 2023 MARIKOMERC</CopyLink>
          <CopyLink>
            Web design <strong>SUTRA</strong>{" "}
          </CopyLink>
        </Copy>
      </Container>
    </WrapAll>
  );
}

export default FooterSection;
