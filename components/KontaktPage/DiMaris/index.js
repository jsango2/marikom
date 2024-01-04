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
            <TopTitle>Lanac ribarnica</TopTitle>
            <Title>Di Maris d.o.o.</Title>
            <Text>
              Adresa: Obala kneza Trpimira 2,
              <br />
              23000 Zadar - Hrvatska
              <br />
              Matični broj: 3468925
              <br />
              OIB: 02359254184
              <br />
              <br />
              E-mail: info@dimaris.hr
              <br />
              E-mail: info@delimaris.hr
              <br />
              Tel: +385(0)23/342-613
              <br />
              Fax: +385(0)23/354-238
              <br />
              <br />
              BANKA OTP, Adresa, 23000 Zadar IBAN: HR8024020061100078207
              <br />
              <br />
              Di Maris d.o.o. je upisan u registar
              <br />
              Trgovačkog suda u Zadru, broj spisa: 02454831
            </Text>
            <GoogleButton>Upute Google Maps</GoogleButton>
          </WrapText>
        </Data>
      </WrapContent>
    </WrapAllDiMaris>
  );
}

export default DiMaris;
