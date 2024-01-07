import {
  WrapAll,
  UpTitle,
  Title,
  Text,
  BlueLine,
  Photo1,
  Photo2,
  Photo3,
  WrapKartica,
  WrapKartica3,
  Content,
  Overlay,
  WrapCert,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

const Video = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const size = useWindowSize();
  return (
    <WrapAll>
      <video
        autoPlay
        muted
        loop="loop"
        className="videoHero"
        playsInline
        poster="/kontaktHeroImg.webp"
      >
        <source src="/videoOnama.mov" type="video/mp4" />
      </video>
    </WrapAll>
  );
};

export default Video;
