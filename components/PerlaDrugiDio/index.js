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
import Link from "next/link.js";
import RedLineComp from "./redLine.js";

function PerlaDrugiDio() {
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
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const [ref3, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAll ref={ref}>
      {inView && <RedLineComp />}

      <Title>{t.Perla2.title}</Title>
      {/* <Text>{t.Perla2.subTitle}</Text> */}
      <Proizvodi>
        {perlaData.slice(0, 4).map((data) => (
          <WrapProizvod key={data["Kataloški broj:"]}>
            <Proizvod>
              <Overlay />
              <WrapProizvodImage>
                <Image
                  src={`/productImages/${data["Kataloški broj:"]}.webp`}
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
          </WrapProizvod>
        ))}
      </Proizvodi>
      <Link href="/proizvodi">
        <Button>{t.Perla2.button}</Button>
      </Link>
      <Karamarko ref={ref3}>
        <Left>
          <PozadinaPerla percentage={percentage}>
            <Image src="/perlaLogo.svg" layout="fill" />
          </PozadinaPerla>{" "}
          <ImageWrap></ImageWrap>
          <Potpis percentage={percentage}>
            <Image src={PotpisKaramarko} alt="p2" objectFit="cover" />
          </Potpis>
        </Left>
        <Right>
          <Title2>{t.Perla2.karamarkoText}</Title2>
          <LogoHks>
            {" "}
            <Image src="/HKS.svg" alt="p1" layout="fill" objectFit="cover" />
          </LogoHks>
        </Right>
      </Karamarko>
      <RedLine2 />
    </WrapAll>
  );
}

export default PerlaDrugiDio;
