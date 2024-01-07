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

import { useInView } from "react-intersection-observer";
import parse from "html-react-parser";

const Kartica = ({ upTitle, title, text, photo }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  const router = useRouter();
  const { locale } = router;

  // const size = useWindowSize();
  return (
    <WrapKartica ref={ref}>
      <Content className={` ${inView ? "inView" : "outView"}`}>
        <BlueLine />
        <UpTitle>{upTitle}</UpTitle>
        <Title>{title}</Title>
        <Text>{parse(text)}</Text>
      </Content>
      <Photo1 bg={photo}></Photo1>
    </WrapKartica>
  );
};

export default Kartica;
