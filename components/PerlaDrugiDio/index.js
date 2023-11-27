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

const proizvod = [
  "Škampi",
  "Tuna",
  "Temeljac",
  "Bakalar",
  "Sipa",
  "Lignja",
  "Plodovi mora",
];
const jelo = [
  "Brzi ručak",
  "Zdrava večera",
  "Za sportaše",
  "Rižoto",
  "Tjestenina",
  "Grill tava",
  "Pećnica",
];
const meals = [
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
  {
    photo: meal4,
    text: "Odrezak tune na žaru s mahunama i krumpirom i nečim još",
  },
];

function PerlaDrugiDio() {
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
        <WrapProizvod>
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
        </WrapProizvod>
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
