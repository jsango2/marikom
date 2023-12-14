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
import ReceptiLottie from "./ReceptiLottie.js";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";

function PerlaPrviDio() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
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
  const style2 = {
    height: 520,
    // width: 1000,
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
  const ReceptiAnimacija = () => {
    const options = {
      animationData: ReceptiLottie,
      loop: false,
      autoplay: true,
      initialSegment: [0, 376],
    };
    const { View } = useLottie(options, style2);

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
          <LightBlueBg>
            <ReceptiAnimacija />
          </LightBlueBg>
        </WrapPhotos2>
        <RightSide>
          <PerlaLogoWrap>
            <LogoWrap>{inView && <PerlaLogoAnimacija />}</LogoWrap>
          </PerlaLogoWrap>
          <TextWrap>
            <UpTitle>{t.Perla.topTitle}</UpTitle>
            <Title>{t.Perla.title}</Title>
            <SubTitle>{t.Perla.contactUs}</SubTitle>
            <ListWrap ref={ref}>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                {t.Perla.line1}
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                {t.Perla.line2}
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                {t.Perla.line3}
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                {t.Perla.line4}
              </ListItem>
              <ListItem className={` ${inView ? "inView" : "outView"}`}>
                <GreenMark style={{ marginRight: "10px" }} />
                {t.Perla.line5}
              </ListItem>
            </ListWrap>
            <WrapButton className={` ${inView ? "inView" : "outView"}`}>
              <Button
                bgcolor="#4299C8"
                color="#FFFFFF"
                width="226px"
                text={t.Perla.button}
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
