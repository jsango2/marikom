import { MLStraka, HeroWrap, WrapMLSlogo } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image.js";

const Hero = () => {
  const size = useWindowSize();
  return (
    <>
      <HeroWrap>
        <video autoPlay muted loop="loop" className="videoHero" playsInline>
          <source src="/MarikomercMLSvideoSmanjen.mov" type="video/mp4" />
        </video>
        <MLStraka>
          {/* <WrapMLSlogo> */}
          <Image src="/MLSlogo.svg" layout="fill" />
          {/* </WrapMLSlogo> */}
        </MLStraka>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
