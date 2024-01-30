import { ContentWrap, HeroWrap, Overlay } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";

import Image from "next/image";
import { TitleH1 } from "../../../styles/globalStyle.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <>
      <HeroWrap>
        <Overlay />
        <Image
          src="/nasaPricaHero.webp"
          alt="cover image warehouse"
          layout="fill"
          objectFit="cover"
        />
        <ContentWrap>
          <TitleH1 ref={ref} className={` ${inView ? "inView" : "outView"}`}>
            {t.Onama.heroNaslov}
          </TitleH1>
        </ContentWrap>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
