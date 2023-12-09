import { ContentWrap, HeroTitle, HeroWrap, Overlay } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import Image from "next/image.js";
import bg from "../../../assets/images/proizvodiBg.png";

const Hero = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <>
      <HeroWrap>
        <Overlay />
        <Image src={bg} layout="fill" objectFit="cover" />
        <HeroTitle>{t.Products.title}</HeroTitle>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
