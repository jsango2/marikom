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
  Column2,
  ColumnIkone,
  SubName,
  Social,
  Copy,
  CopyLink,
  WrapCerts,
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
import Image from "next/image.js";
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
        <WrapLogo
          ref={ref}
          className={` ${inView ? "inView" : "outView"}`}
        ></WrapLogo>

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

          <Column2>
            <SubName>{t.Linkovi.claniceGrupe}</SubName>
            <SingleLink2>Marikomerc</SingleLink2>
            <SingleLink2>DiMaris Ribarnice</SingleLink2>
            <SingleLink2>MLS Logistika</SingleLink2>
          </Column2>
          {size.width > 770 && (
            <ColumnIkone>
              <SubName>{t.Linkovi.kontaktirajteNas}</SubName>
              <Social>
                <Instagram />
                <Facebook />
                <Linkedin />
                <Location />
                <Email />
              </Social>
              <WrapCerts>
                <Image src="/certifikat/MSC.svg" height={27} width={70} />
                <Image src="/certifikat/ASC.svg" height={27} width={50} />
                <Image src="/certifikat/IFSfood.svg" height={27} width={40} />
                <Image
                  src="/certifikat/zivjetizdravo.svg"
                  height={27}
                  width={35}
                />
                <Image src="/certifikat/ISO9001.svg" height={27} width={30} />
              </WrapCerts>
            </ColumnIkone>
          )}
        </SubLinks>
        {size.width < 770 && (
          <ColumnIkone
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
            <WrapCerts>
              <Image src="/certifikat/MSC.svg" height={27} width={70} />
              <Image src="/certifikat/ASC.svg" height={27} width={50} />
              <Image src="/certifikat/IFSfood.svg" height={27} width={40} />
              <Image
                src="/certifikat/zivjetizdravo.svg"
                height={27}
                width={35}
              />
              <Image src="/certifikat/ISO9001.svg" height={27} width={30} />
            </WrapCerts>
          </ColumnIkone>
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
