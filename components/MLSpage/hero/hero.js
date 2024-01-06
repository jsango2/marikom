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
