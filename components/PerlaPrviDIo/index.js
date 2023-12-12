import {
  LightBlueBg,
  WrapAll,
  WrapContent,
  Overlay,
  WrapPhotos2,
  RightSide,
  PerlaLogoWrap,
  LogoWrap,
  TextWrap,
  UpTitle,
  SubTitle,
  Title,
  ListWrap,
  ListItem,
  WrapButton,
} from "./style.js";

import Logo from "../../svg/perlalogo.svg";
import Image from "next/image";
import Lottie, { useLottie } from "lottie-react";

import GreenMark from "../../svg/greenMark.svg";
import Button from "../buttonBlue/Button.js";
import useWindowSize from "../helper/usewindowsize";
import rizotoBg from "../../assets/images/rizotoBg.png";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import animacija from "./perlaAnimacija.js";
import madeBySutra from "./madeBySutra.js";

function PerlaPrviDio() {
  // const interactivity = {
  //   mode: "scroll",
  //   actions: [
  //     {
  //       visibility: [0.2, 1.0],
  //       type: "play",
  //       frames: [0, 24],
  //     },
  //     {
  //       visibility: [0.2, 1.0],
  //       type: "stop",
  //       frames: [25],
  //     },
  //   ],
  // };
  const style = {
    height: 120,
  };
  const PerlaLogoAnimacija = () => {
    const options = {
      animationData: animacija,
      loop: false,
      autoplay: true,
      initialSegment: [0, 68],
    };

    const { View } = useLottie(options, style);

    return View;
  };

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const ref2 = useRef();
  const size = useWindowSize();

  return (
    <WrapAll ref={ref2}>
      <Overlay>
        <Image
          src={rizotoBg}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </Overlay>
      <WrapContent>
        <WrapPhotos2>
          {" "}
          <LightBlueBg />
        </WrapPhotos2>
        <RightSide>
          <PerlaLogoWrap>
            <LogoWrap>{inView && <PerlaLogoAnimacija />}</LogoWrap>
          </PerlaLogoWrap>
          <TextWrap>
            <UpTitle>Prednosti poslovanja s nama za profesionalce</UpTitle>
            <Title>
              Trebate li naše proizvode za vaš restoran, bar ili maloprodaju?
            </Title>
            <SubTitle>Kontaktirajte nas i iskoristite naše prednosti:</SubTitle>
            <ListWrap ref={ref}>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                vrhunska kvaliteta proizvoda
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                precizna obrada vaših zahtjeva
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                brza logistika uz koju lako planirate svoje zalihe
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                prilagodba proizvoda i pakrianja po vašim željama
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                PERLA CHEF AKADEMIJA radionice za kuhare
              </ListItem>
            </ListWrap>
            <WrapButton className={` ${inView ? "inView" : "outView"}`}>
              <Button
                bgcolor="#4299C8"
                color="#FFFFFF"
                width="226px"
                text="Zatražite sastanak"
                linkTo="/o-nama"
              />
            </WrapButton>
          </TextWrap>
        </RightSide>{" "}
      </WrapContent>
    </WrapAll>
  );
}

export default PerlaPrviDio;
