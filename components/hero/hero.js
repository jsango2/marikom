import { ContentWrap, HeroTitle, HeroWrap } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Content from "./content/index.js";
import Button from "../buttonBlue/Button.js";
import Companies from "./companies/index.js";

const Hero = ({ toggleYT }) => {
  const size = useWindowSize();
  return (
    <>
      <HeroWrap>
        <ContentWrap>
          <Content toggleYT={toggleYT} />
        </ContentWrap>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
