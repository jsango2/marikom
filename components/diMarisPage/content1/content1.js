import {
  WrapContent,
  Content,
  Photos,
  Photos2,
  WrapPhoto,
  UpTitle,
  Text,
  Title,
  PonudaLink,
  BlueLine,
  WrapAll,
  Zaposlenici,
  WrapZaposlenik,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/oNama/image1.png";
import { Textp, TitleH2, TitleH5 } from "../../../styles/globalStyle.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import parse from "html-react-parser";
function Content1() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <WrapContent>
        <Content>
          <BlueLine />

          <TitleH2>{t.DiMaris.content1Naslov}</TitleH2>
          <Textp>{parse(t.DiMaris.content1Text)}</Textp>
        </Content>
        <Photos>
          <WrapPhoto>
            <Image
              src="/diMarisContent1Img.png"
              alt="diMaris shop"
              layout="fill"
              objectFit="cover"
            />
          </WrapPhoto>
        </Photos>
      </WrapContent>
      <Zaposlenici>
        <WrapZaposlenik>
          <Image
            src="/diMaris/Kristina.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </WrapZaposlenik>{" "}
        <WrapZaposlenik>
          <Image
            src="/diMaris/Mateo.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </WrapZaposlenik>{" "}
        <WrapZaposlenik>
          <Image
            src="/diMaris/Predo.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
          />
        </WrapZaposlenik>{" "}
        <WrapZaposlenik>
          <Image
            src="/diMaris/Zvone.png"
            alt="Kristina"
            layout="fill"
            objectFit="cover"
          />
        </WrapZaposlenik>
      </Zaposlenici>
      <WrapContent>
        <Photos2>
          <WrapPhoto>
            <Image
              src="/diMarisContent1Img.png"
              alt="diMaris shop"
              layout="fill"
              objectFit="cover"
            />
          </WrapPhoto>
        </Photos2>
        <Content>
          <BlueLine />

          <TitleH2>{t.DiMaris.content2Naslov}</TitleH2>
          <Textp>{parse(t.DiMaris.content2Text)}</Textp>
        </Content>
      </WrapContent>
    </WrapAll>
  );
}

export default Content1;
