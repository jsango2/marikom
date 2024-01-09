import {
  ContentWrap,
  HeroTitle,
  HeroWrap,
  GradientContainer,
  Title,
  SubTitle,
  WrapText,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Content from "./content/index.js";
import Button from "../buttonBlue/Button.js";
import Companies from "./companies/index.js";
import Image from "next/image.js";
import { useInView } from "react-intersection-observer";
import parse from "html-react-parser";
import { useRouter } from "next-translate-routes";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
const Hero = ({ toggleYT }) => {
  const size = useWindowSize();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <>
      <HeroWrap>
        <Image src="/HERO.webp" layout="fill" objectFit="cover" />

        {/* <ContentWrap>
          <Content toggleYT={toggleYT} />
        </ContentWrap> */}
        <GradientContainer>
          <WrapText>
            <Title
              ref={ref}
              className={` ${inView ? "inViewHero" : "outViewHero"}`}
            >
              {parse(t.Hero.title)}
            </Title>
            <SubTitle className={` ${inView ? "inViewHero" : "outViewHero"}`}>
              {t.Hero.description}
            </SubTitle>
          </WrapText>
        </GradientContainer>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
