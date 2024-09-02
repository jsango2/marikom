import { WrapAllDiMaris, WrapContent, Photo, Data } from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import {
  BlueLine,
  GoogleButton,
  Text,
  Title,
  WrapText,
} from "../Hero/style.js";
import { TopTitle } from "../../HorecaPage/Mapa/style.js";
import parse from "html-react-parser";
import Link from "next/link.js";

function DiMaris() {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllDiMaris>
      <WrapContent>
        <Photo>
          <Image
            src="/diMarisKontaktPage.png"
            layout="fill"
            objectFit="cover"
          />
        </Photo>
        <Data>
          <WrapText>
            <BlueLine />
            <TopTitle>{t.Kontakt.lanacRibarnica}</TopTitle>
            <Title>DI Maris d.o.o.</Title>
            <Text>{parse(t.Kontakt.diMarisData)}</Text>
            <Link href="https://www.google.com/maps/@44.1197623,15.2271416,21z?entry=ttu">
              <GoogleButton>{t.Kontakt.uputeGoogleMaps}</GoogleButton>
            </Link>
          </WrapText>
        </Data>
      </WrapContent>
    </WrapAllDiMaris>
  );
}

export default DiMaris;
