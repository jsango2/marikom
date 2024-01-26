import {
  LightBlueBg,
  TopImage,
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
  WrapBottom,
  ItemText,
  OverlayTop,
  TextTopImage,
} from "./style.js";

import Logo from "../../svg/perlalogo.svg";
import Image from "next/image";
import Lottie, { useLottie } from "lottie-react";

import GreenMark from "../../svg/greenMark.svg";
import Button from "../buttonBlue/Button.js";
import useWindowSize from "../helper/usewindowsize";
import rizotoBg from "../../assets/images/rizotoBg.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import animacija from "./perlaAnimacija.js";
import ReceptiLottie from "./ReceptiLottie.js";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
function PerlaPrviDio() {
  // const [style2, setStyle2] = useState({});
  const size = useWindowSize();

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

  const style =
    size < 1000
      ? {
          height: 120,
        }
      : {
          height: 120,
        };
  // useEffect(() => {
  //   if (size < 1000) {
  //     setStyle2({ width: 100 });
  //   } else {
  //     setStyle2({ width: 700, height: 750 });
  //   }
  // }, []);

  const style2 = {
    // height: 520,
    // width: 1000,
  };
  const PerlaLogoAnimacija = () => {
    const options = {
      animationData: animacija,
      loop: false,
      autoplay: true,
      initialSegment: [1, 68],
    };

    const { View } = useLottie(options, style);

    return View;
  };
  const ReceptiAnimacija = () => {
    const options = {
      animationData: ReceptiLottie,
      loop: true,
      autoplay: true,
      initialSegment: [0, 376],
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        className: "lottie-svg-class",
        id: "lottie-svg-id",
      },
    };
    const { View } = useLottie(options, style2);

    return View;
  };
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const ref2 = useRef();

  return (
    <WrapAll ref={ref}>
      <TopImage>
        <a href="https://www.youtube.com">
          <Image src="/playIcon.svg" width={40} height={40} />
        </a>
        <TextTopImage>
          Izdvojite 2 minute i saznajte zašto smo najbolji u onom što radimo.
        </TextTopImage>
        <OverlayTop />
      </TopImage>
      <WrapBottom>
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
            {/* <LightBlueBg> */}
            <ReceptiAnimacija />
            {/* </LightBlueBg> */}
          </WrapPhotos2>
          <RightSide>
            <PerlaLogoWrap>
              <LogoWrap>{inView && <PerlaLogoAnimacija />}</LogoWrap>
            </PerlaLogoWrap>
            <TextWrap>
              <UpTitle>{t.Perla.topTitle}</UpTitle>
              <Title>{t.Perla.title}</Title>
              <SubTitle>{t.Perla.contactUs}</SubTitle>
              <ListWrap r>
                <ListItem>
                  <GreenMark style={{ marginRight: "10px" }} />
                  <ItemText>{t.Perla.line1}</ItemText>
                </ListItem>
                <ListItem>
                  <GreenMark style={{ marginRight: "10px" }} />
                  <ItemText>{t.Perla.line2}</ItemText>
                </ListItem>
                <ListItem>
                  <GreenMark style={{ marginRight: "10px" }} />
                  <ItemText>{t.Perla.line3}</ItemText>
                </ListItem>
                <ListItem>
                  <GreenMark style={{ marginRight: "10px" }} />
                  <ItemText>{t.Perla.line4}</ItemText>
                </ListItem>
                <ListItem>
                  <GreenMark style={{ marginRight: "10px" }} />
                  <ItemText>{t.Perla.line5}</ItemText>
                </ListItem>
              </ListWrap>
              <WrapButton>
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
      </WrapBottom>
    </WrapAll>
  );
}

export default PerlaPrviDio;
