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
import MarikomercLogo from "../../assets/svg/marikomerc_logo_footer.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Linkedin from "../../assets/svg/Linkedin.svg";
import Location from "../../assets/svg/Location.svg";
import Email from "../../assets/svg/Email.svg";
import useWindowSize from "../helper/usewindowsize";
import { useInView } from "react-intersection-observer";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useRouter } from "next/router.js";
function FooterSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
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
          <SingleLink>{t.Linkovi.onama}</SingleLink>
          <SingleLink>{t.Linkovi.proizvodi}</SingleLink>
          <SingleLink>{t.Linkovi.novosti}</SingleLink>
          <SingleLink>{t.Linkovi.kvaliteta}</SingleLink>
          <SingleLink>{t.Linkovi.karijere}</SingleLink>
          <SingleLink>{t.Linkovi.horecaSuradnja} </SingleLink>
          <SingleLink>{t.Linkovi.kontakt}</SingleLink>
        </MainLinks>
        <SubLinks>
          {size.width > 770 ? (
            <>
              <Column>
                <SubName>{t.Linkovi.lokacije}</SubName>
                <SingleLink2>Zadar</SingleLink2>
                <SingleLink2>Dubrovnik</SingleLink2>
                <SingleLink2>Rijeka</SingleLink2>
                <SingleLink2>Metković</SingleLink2>
              </Column>
              <Column>
                <SubName>{t.Linkovi.proizvodi}</SubName>
                <SingleLink2>{t.Linkovi.glavonosci}</SingleLink2>
                <SingleLink2>{t.Linkovi.perlaProizvodi}</SingleLink2>
                <SingleLink2>{t.Linkovi.rakovi}</SingleLink2>
                <SingleLink2>{t.Linkovi.fileti}</SingleLink2>
                <SingleLink2>{t.Linkovi.skoljkasi}</SingleLink2>
                <SingleLink2>{t.Linkovi.ribe}</SingleLink2>
                <SingleLink2>{t.Linkovi.ostali}</SingleLink2>
              </Column>
            </>
          ) : (
            <Column>
              <SubName>MENI</SubName>
              <SingleLink2>{t.Linkovi.onama}</SingleLink2>
              <SingleLink2>{t.Linkovi.proizvodi}</SingleLink2>
              <SingleLink2>{t.Linkovi.novosti}</SingleLink2>
              <SingleLink2>{t.Linkovi.kvaliteta}</SingleLink2>
              <SingleLink2>{t.Linkovi.karijere}</SingleLink2>
              <SingleLink2>{t.Linkovi.horecaSuradnja} </SingleLink2>
              <SingleLink2>{t.Linkovi.kontakt}</SingleLink2>
            </Column>
          )}

          <Column>
            <SubName>{t.Linkovi.claniceGrupe}</SubName>
            <SingleLink2>Marikomerc</SingleLink2>
            <SingleLink2>DiMaris Ribarnice</SingleLink2>
            <SingleLink2>MLS Logistika</SingleLink2>
          </Column>
          {size.width > 770 && (
            <Column>
              <SubName>{t.Linkovi.kontaktirajteNas}</SubName>
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
              <Instagram />
              <Facebook />
              <Linkedin />
              <Location />
              <Email />
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
