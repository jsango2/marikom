import {
  ContentWrap,
  WrapAllCertifikati,
  HeroWrap,
  Overlay,
  UpTitle,
  Title,
  Text,
  TextBox,
  WrapCerts,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize.js";
import { Link as Veza } from "react-scroll";
import Companies from "../../hero/companies/index.js";
import Image from "next/image";
import hero from "../../../assets/images/nasaPrica/hero.png";
import PhotosRow from "../../ProizvodiSection/piktogram/index.js";
import Cert from "./cert.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

import { useRouter } from "next/router.js";

const Certifikati = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <>
      <WrapAllCertifikati>
        <PhotosRow />
        <ContentWrap>
          <TextBox>
            <UpTitle>{t.Kvalitete.certifikati}</UpTitle>
            <Title>{t.Kvalitete.naslov1}</Title>
            <Text>{t.Kvalitete.text1}</Text>
          </TextBox>
          <WrapCerts>
            <Cert text={t.Kvalitete.card1} MSC ASC />
            <Cert ISO text={t.Kvalitete.card2} />
            <Cert IFS text={t.Kvalitete.card3} />
            <Cert ZZ text={t.Kvalitete.card4} />
          </WrapCerts>
        </ContentWrap>
      </WrapAllCertifikati>
      {/* <Companies /> */}
    </>
  );
};

export default Certifikati;
