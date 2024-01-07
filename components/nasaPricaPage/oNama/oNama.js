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
import parse from "html-react-parser";
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
          <Textp>{parse(t.Onama.text)}</Textp>
        </Content>
        <Photos>
          <WrapPhoto>
            {/* <Image
              src={img1}
              alt="image warehouse"
              layout="fill"
              objectFit="cover"
            /> */}
            <video
              autoPlay
              muted
              loop="loop"
              className="videoHero"
              playsInline
              poster="/kontaktHeroImg.webp"
            >
              <source src="/videoOnama.mov" type="video/mp4" />
            </video>
          </WrapPhoto>
        </Photos>
      </WrapContent>
    </WrapAll>
  );
}

export default Onama;
