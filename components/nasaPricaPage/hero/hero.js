import { ContentWrap, HeroTitle, HeroWrap, Overlay } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Companies from "../../hero/companies/index.js";
import Image from "next/image";
import hero from "../../../assets/images/nasaPrica/hero.png";

const Hero = () => {
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
          Poslujemo više od 30 godina i veselimo se sljedećih 30 godina.
        </ContentWrap>
      </HeroWrap>
      <Companies />
    </>
  );
};

export default Hero;
