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

// import PotpisKaramarko from "../../assets/images/potpiskaramarko.svg";
import PotpisKaramarko from "../../assets/images/potpiskaramarko.png";
import Image from "next/image";
import useWindowSize from "../helper/usewindowsize.js";
import { useScrollPercentage } from "react-scroll-percentage";
import { catalogData } from "../../catalogData.js";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { useLottie } from "lottie-react";
import animacija from "./perlaAnimacija.js";
import Link from "next/link.js";
import RedLineComp from "./redLine.js";

function KaramarkoComp() {
  const style = {
    height: 200,
  };

  const size = useWindowSize();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const [perlaData, setPerlaData] = useState([]);
  useEffect(() => {
    setPerlaData(catalogData.filter((data) => data.FeaturedPerla == "DA"));
  }, []);

  const [ref1, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <Karamarko ref={ref1}>
      <Left>
        <PozadinaPerla percentage={percentage}>
          <Image src="/perlaLogo.svg" layout="fill" />
        </PozadinaPerla>{" "}
        <ImageWrap></ImageWrap>
        <Potpis percentage={percentage}>
          <Image src={PotpisKaramarko} alt="p2" objectFit="cover" />
        </Potpis>
      </Left>
      <Right ref={ref}>
        <Title2 inView={inView}>{t.Perla2.karamarkoText}</Title2>
        <LogoHks>
          {" "}
          <Image src="/HKS.svg" alt="p1" layout="fill" objectFit="cover" />
        </LogoHks>
      </Right>
    </Karamarko>
  );
}

export default KaramarkoComp;
