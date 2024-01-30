import {
  WrapAll,
  UpTitle,
  Title,
  Text,
  Li,
  WrapText,
  Container,
  Number,
  Overlay,
  Photo,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
const Kartica = ({ num, upTitle, title, text, li, photo }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  //   const size = useWindowSize();
  return (
    <WrapAll ref={ref} className={` ${inView ? "inView" : "outView"}`}>
      <Overlay />
      <Container>
        <Number>{num}</Number>
        <WrapText>
          <UpTitle>{upTitle}</UpTitle>
          <Title>{title}</Title>
          <Text>{text}</Text>
          {li !== "" && <Li dangerouslySetInnerHTML={{ __html: li }} />}
        </WrapText>
        {/* <Photo>Photo</Photo> */}
      </Container>
    </WrapAll>
  );
};

export default Kartica;
