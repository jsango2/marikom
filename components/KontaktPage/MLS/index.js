import { WrapAllDiMaris, WrapContent, Photo, Data } from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import parse from "html-react-parser";

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
import Link from "next/link.js";

function MLS() {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllDiMaris>
      <WrapContent>
        <Data>
          <WrapText>
            <BlueLine />
            <TopTitle>{t.Kontakt.logistika}</TopTitle>
            <Title>MLS</Title>
            <Text>{parse(t.Kontakt.MLSdata)}</Text>
            <Link href="https://www.google.com/maps/@44.1751437,15.3570071,19.73z?entry=ttu">
              <GoogleButton>{t.Kontakt.uputeGoogleMaps}</GoogleButton>
            </Link>
          </WrapText>
        </Data>
        <Photo>
          <Image src="/MLSKontaktPage.png" layout="fill" objectFit="cover" />
        </Photo>
      </WrapContent>
    </WrapAllDiMaris>
  );
}

export default MLS;
