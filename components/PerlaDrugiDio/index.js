import {
  WrapAll,
  RedLine,
  RedLine2,
  WrapLogo,
  PozadinaPerla,
  WrapLogoPerla,
  Title,
  Title2,
  Text,
  Proizvodi,
  Proizvod,
  Overlay,
  WrapProizvod,
  WrapProizvodImage,
  ProizvodName,
  ProizvodWeight,
  Button,
  Karamarko,
  Left,
  Right,
  Potpis,
  LogoHks,
  ImageWrap,
} from "./style.js";
import p1 from "../../assets/images/perla/perla1.png";

import meal4 from "../../assets/images/perla/meal4.png";
import KaramarkCut from "../../assets/images/karamarko.png";
// import PotpisKaramarko from "../../assets/images/potpiskaramarko.svg";
import PotpisKaramarko from "../../assets/images/potpiskaramarko.png";
import { IoMdTime } from "react-icons/io";

import Logo from "../../svg/PerlaBiserMora.svg";
import LogoHKS2 from "../../assets/images/HKS.png";
import PerlaBg from "../../assets/images/PerlaBg.svg";
import Image from "next/image";
import useWindowSize from "../helper/usewindowsize";
import { useScrollPercentage } from "react-scroll-percentage";
import { catalogData } from "../../catalogData.js";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { useLottie } from "lottie-react";
import animacija from "./perlaAnimacija.js";

function PerlaDrugiDio() {
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
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const [perlaData, setPerlaData] = useState([]);
  useEffect(() => {
    setPerlaData(
      catalogData.filter(
        (data) => data["Kategorija kojoj proizvod pripada:"] === "PERLA"
      )
    );
  }, []);

  console.log(perlaData.slice(0, 4));
  const [ref3, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAll ref={ref}>
      <RedLine>
        <WrapLogoPerla>
          {/* <Image
            src="/PerlaBiserMora.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
            // objectFit="cover"
          /> */}
          {inView && <PerlaLogoAnimacija />}
        </WrapLogoPerla>
      </RedLine>
      <Title>{t.Perla2.title}</Title>
      <Text>{t.Perla2.subTitle}</Text>
      <Proizvodi>
        {perlaData.slice(0, 4).map((data) => (
          <WrapProizvod key={data["Kataloški broj:"]}>
            <Proizvod>
              <Overlay />
              <WrapProizvodImage>
                <Image
                  src={`https://cms.marikomerc.hr/wp-content/uploads/2023/12/${data["Kataloški broj:"]}.png`}
                  // width={157}
                  // height={244}
                  layout="fill"
                  alt="p1"
                  objectFit="contain"
                />
              </WrapProizvodImage>
            </Proizvod>
            <ProizvodName>
              {locale === "hr"
                ? data["IME PROIZVODA - do 60 znakova"]
                : data["PRODUCT NAME - up to 60 characters"]}
            </ProizvodName>
            {/* <ProizvodWeight>500G</ProizvodWeight> */}
          </WrapProizvod>
        ))}
      </Proizvodi>
      <Button>{t.Perla2.button}</Button>
      <Karamarko ref={ref3}>
        <PozadinaPerla percentage={percentage}>
          <Image src="/PerlaBg.svg" layout="fill" />
        </PozadinaPerla>
        <Left>
          {" "}
          <ImageWrap>
            <Image
              src={KaramarkCut}
              // width={157}
              // height={244}
              alt="p1"
              objectFit="cover"
            />
          </ImageWrap>
          <Potpis percentage={percentage}>
            <Image
              src={PotpisKaramarko}
              // width={157}
              // height={244}
              alt="p2"
              objectFit="cover"
            />
          </Potpis>
        </Left>
        <Right>
          <Title2>{t.Perla2.karamarkoText}</Title2>
          <LogoHks>
            {" "}
            <Image
              src={LogoHKS2}
              // width={157}
              // height={244}
              alt="p1"
              layout="fill"
              objectFit="cover"
            />
          </LogoHks>
        </Right>
      </Karamarko>
      <RedLine2 />
    </WrapAll>
  );
}

export default PerlaDrugiDio;
