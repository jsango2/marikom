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
import { useEffect, useState } from "react";
import { clearStorage } from "mapbox-gl";

function PerlaDrugiDio() {
  const [perlaData, setPerlaData] = useState([]);
  useEffect(() => {
    setPerlaData(
      catalogData.filter((data) => data["Perla HORECA (DA/NE)"] === "DA")
    );
  }, []);

  console.log(perlaData.slice(0, 4));
  const size = useWindowSize();
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAll>
      <RedLine>
        <WrapLogoPerla>
          <Image
            src="/PerlaBiserMora.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
            // objectFit="cover"
          />
        </WrapLogoPerla>
      </RedLine>
      <Title>
        S ponosom predstavljamo naš visokokvalitetni brend Perla biser mora
      </Title>
      <Text>
        Vrhunski plodovi mora su našu strast i obaveza prema potrošačima. To je
        ono što znamo raditi i radimo godinama. Izuzetno smo ponosni na
        proizvode koje razvijamo za profesionalni segment, stoga nam je užitak
        to podijeliti sa svima. Zato smo kreirali Perla liniju proizvoda, s
        kojom je priprema maštovitih jela jednostavna i zabavna.
      </Text>
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
            <ProizvodName>{data["IME PROIZVODA - do 60 znakova"]}</ProizvodName>
            <ProizvodWeight>500G</ProizvodWeight>
          </WrapProizvod>
        ))}

        {/* <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                // layout="fill"
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod>
        <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod>{" "}
        <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod>{" "}
        <WrapProizvod>
          <Proizvod>
            <Overlay />
            <WrapProizvodImage>
              <Image
                src={p1}
                // width={157}
                // height={244}
                alt="p1"
                objectFit="cover"
              />
            </WrapProizvodImage>
          </Proizvod>
          <ProizvodName>Hobotnica (Argentina)</ProizvodName>
          <ProizvodWeight>500G</ProizvodWeight>
        </WrapProizvod> */}
      </Proizvodi>
      <Button>SVI PROIZVODI</Button>
      <Karamarko ref={ref}>
        <PozadinaPerla percentage={percentage}>
          <PerlaBg />
        </PozadinaPerla>
        <Left>
          {" "}
          <Image
            src={KaramarkCut}
            // width={157}
            // height={244}
            alt="p1"
            objectFit="cover"
          />
          <Potpis percentage={percentage}>
            <Image
              src={PotpisKaramarko}
              // width={157}
              // height={244}
              alt="p1"
              objectFit="cover"
            />
          </Potpis>
        </Left>
        <Right>
          <Title2>
            Ponosni smo na sve naše recepture, razvijene u suradnji s našim
            chefom Tomislavom Karamarkom.
          </Title2>
          <LogoHks>
            {" "}
            <Image
              src={LogoHKS2}
              // width={157}
              // height={244}
              alt="p1"
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
