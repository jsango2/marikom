import {
  WrapContent,
  Content,
  Photos,
  WrapPhoto,
  UpTitle,
  Text,
  Title,
  PonudaLink,
  BlueLine,
  WrapAll,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/oNama/image1.png";
import { Textp, TitleH2, TitleH5 } from "../../../styles/globalStyle.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

function Onama() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <WrapContent>
        <Content>
          <BlueLine />
          <TitleH5>{t.Onama.oNama}</TitleH5>
          <TitleH2>{t.Onama.title}</TitleH2>
          <Textp>{t.Onama.text}</Textp>
        </Content>
        <Photos>
          <WrapPhoto>
            <Image
              src={img1}
              alt="image warehouse"
              layout="fill"
              objectFit="cover"
            />
          </WrapPhoto>
        </Photos>
      </WrapContent>
    </WrapAll>
  );
}

export default Onama;
