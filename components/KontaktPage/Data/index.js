import {
  WrapAllContactData,
  WrapContent,
  Photo,
  Data,
  Ceo,
  WrapText,
  Ime,
  Pozicija,
  Funkcija,
  Email,
  Block,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize";
import Image from "next/image.js";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";

function ContactData() {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllContactData>
      <WrapContent>
        <Ceo>
          <Photo></Photo>
          <WrapText>
            <Ime>Ivan Dell'Orco </Ime>
            <Pozicija>Predsjednik nadzornog Odbora</Pozicija>
          </WrapText>
        </Ceo>
        <Data>
          <Block>
            <Ime>Grgo Anzulović, </Ime>
            <Funkcija>Direktor prodaje i marketinga</Funkcija>
            <Email>grgo.anzulovic@marikomerc.hr</Email>
          </Block>
          <Block>
            <Ime>Grgo Anzulović, </Ime>
            <Funkcija>Direktor prodaje i marketinga</Funkcija>
            <Email>grgo.anzulovic@marikomerc.hr</Email>
          </Block>{" "}
          <Block>
            <Ime>Grgo Anzulović, </Ime>
            <Funkcija>Direktor prodaje i marketinga</Funkcija>
            <Email>grgo.anzulovic@marikomerc.hr</Email>
          </Block>{" "}
          <Block>
            <Ime>Grgo Anzulović, </Ime>
            <Funkcija>Direktor prodaje i marketinga</Funkcija>
            <Email>grgo.anzulovic@marikomerc.hr</Email>
          </Block>{" "}
          <Block>
            <Ime>Grgo Anzulović, </Ime>
            <Funkcija>Direktor prodaje i marketinga</Funkcija>
            <Email>grgo.anzulovic@marikomerc.hr</Email>
          </Block>{" "}
          <Block>
            <Ime>Grgo Anzulović, </Ime>
            <Funkcija>Direktor prodaje i marketinga</Funkcija>
            <Email>grgo.anzulovic@marikomerc.hr</Email>
          </Block>{" "}
          <Block>
            <Ime>Grgo Anzulović, </Ime>
            <Funkcija>Direktor prodaje i marketinga</Funkcija>
            <Email>grgo.anzulovic@marikomerc.hr</Email>
          </Block>
        </Data>
      </WrapContent>
    </WrapAllContactData>
  );
}

export default ContactData;
