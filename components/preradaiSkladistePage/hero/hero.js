import { ContentWrap, HeroTitle, HeroWrap, Overlay } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Companies from "../../hero/companies/index.js";
import Image from "next/image";
import hero from "../../../assets/images/nasaPrica/hero.png";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
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
        <ContentWrap>{t.Prerada.heroNaslov}</ContentWrap>
      </HeroWrap>
    </>
  );
};

export default Hero;
