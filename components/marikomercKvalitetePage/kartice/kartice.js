import { WrapAll, CardContainer } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";
import { data } from "./data.js";
import Kartica from "./kartica/index.js";

const Kartice = () => {
  // const size = useWindowSize();
  return (
    // <CardContainer>
    <WrapAll>
      {data.map((a, index) => (
        <Kartica
          key={a.uptitle}
          num={index + 1}
          upTitle={a.uptitle}
          title={a.title}
          text={a.text.main}
          li={a.text.sub}
          photo={a.photo}
        />
      ))}
    </WrapAll>
    // </CardContainer>
  );
};

export default Kartice;
