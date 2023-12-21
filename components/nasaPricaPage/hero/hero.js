import { ContentWrap, HeroTitle, HeroWrap, Overlay } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";

import Image from "next/image";

const Hero = () => {
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
          Poslujemo više od 30 godina i idemo ususret godinama koje dolaze
        </ContentWrap>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
