import {
  WrapAll,
  UpTitle,
  Title,
  Text,
  Li,
  WrapText,
  Container,
  Number,
  Photo,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";

const Kartica = ({ num, upTitle, title, text, li, photo }) => {
  //   const size = useWindowSize();
  return (
    <WrapAll>
      <Container>
        <Number>0{num}</Number>
        <WrapText>
          <UpTitle>{upTitle}</UpTitle>
          <Title>{title}</Title>
          <Text>{text}</Text>
          {li !== "" && <Li dangerouslySetInnerHTML={{ __html: li }} />}
        </WrapText>
        <Photo>Photo</Photo>
      </Container>
    </WrapAll>
  );
};

export default Kartica;
