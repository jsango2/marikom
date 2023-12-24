import { WrapAll, CardContainer } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";
import { data } from "./data.js";
import Kartica from "./kartica/index.js";
import { useRouter } from "next/router.js";

const Kartice = () => {
  const { locale } = useRouter();

  // const size = useWindowSize();
  return (
    // <CardContainer>
    <WrapAll>
      {data.map((a, index) => (
        <Kartica
          key={a.uptitle}
          num={index + 1}
          upTitle={locale === "hr" ? a.uptitle : a.uptitleEng}
          title={locale === "hr" ? a.title : a.titleEng}
          text={locale === "hr" ? a.text.main : a.textEng.main}
          li={locale === "hr" ? a.text.sub : a.textEng.sub}
          photo={a.photo}
        />
      ))}
    </WrapAll>
    // </CardContainer>
  );
};

export default Kartice;
