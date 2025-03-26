import {
  WrapAll,
  RedLine,
  RedLine2,
  Title,
  Proizvodi,
  Proizvod,
  Overlay,
  WrapProizvod,
  WrapProizvodImage,
  ProizvodName,
  Button,
} from "./style.js";

// import PotpisKaramarko from "../../assets/images/potpiskaramarko.svg";
import Image from "next/image";
import useWindowSize from "../helper/usewindowsize";
import { catalogData } from "../../catalogData.js";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";

import Link from "next/link.js";
import RedLineComp from "./redLine.js";
import KaramarkoComp from "./karamarko.js";
import { useContext } from "react";
import { AppContext } from "../../pages/_app.js";
function PerlaDrugiDio({ allProizvodi }) {
  const [category, setCategory] = useContext(AppContext);
  const style = {
    height: 200,
  };
  console.log({ allProizvodi });
  const size = useWindowSize();
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const [perlaData, setPerlaData] = useState([]);
  useEffect(() => {
    setPerlaData(
      allProizvodi.edges.filter(
        (data) => data.node.proizvodiInformacije.featuredPerlaProduct === true
      )
    );
  }, []);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const handleClick = () => {
    setCategory("PERLA");
  };
  console.log({ perlaData });
  return (
    <WrapAll ref={ref}>
      <RedLineComp />

      <Title>{t.Perla2.title}</Title>
      {/* <Text>{t.Perla2.subTitle}</Text> */}
      <Proizvodi>
        {perlaData.slice(0, 4).map((data) => (
          <WrapProizvod key={data.node.proizvodiInformacije.kataloskiBroj}>
            <Proizvod>
              <Overlay />
              <WrapProizvodImage>
                <Image
                  src={`/productImages/${data.node.proizvodiInformacije.kataloskiBroj}.png`}
                  layout="fill"
                  alt="p1"
                  objectFit="contain"
                />
              </WrapProizvodImage>
            </Proizvod>
            <ProizvodName>
              {locale === "hr"
                ? data.node.proizvodiInformacije.imeProizvodaDo60Znakova
                : data.node.proizvodiInformacije.imeProizvodaDo60ZnakovaEng}
            </ProizvodName>
          </WrapProizvod>
        ))}
      </Proizvodi>
      <Link href="/proizvodi">
        <Button onClick={() => handleClick()}>{t.Perla2.button}</Button>
      </Link>
      <KaramarkoComp />
      <RedLine2 />
    </WrapAll>
  );
}

export default PerlaDrugiDio;
