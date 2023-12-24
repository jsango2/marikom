import { ContentWrap, HeroWrap, Overlay } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Companies from "../../hero/companies/index.js";
import Image from "next/image";
import hero from "../../../assets/images/nasaPrica/hero.png";
import { TitleH1 } from "../../../styles/globalStyle.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

import { useRouter } from "next/router.js";
const Hero = () => {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <>
      <HeroWrap>
        <Overlay />
        <Image
          src={hero}
          alt="cover image warehouse"
          layout="fill"
          objectFit="cover"
        />
        <ContentWrap>
          <TitleH1>{t.Kvalitete.heroNaslov}</TitleH1>
        </ContentWrap>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
