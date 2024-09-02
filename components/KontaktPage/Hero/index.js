import {
  WrapAllContactHero,
  WrapContent,
  WrapText,
  WrapPhoto,
  GoogleButton,
  Title,
  BlueLine,
  Text,
  Data,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize";
import Image from "next/image.js";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import parse from "html-react-parser";

import { useState } from "react";
import { TopTitle } from "../../HorecaPage/Mapa/style.js";
import Link from "next/link.js";

function ContactHero() {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllContactHero>
      <WrapContent>
        <Data>
          <WrapText>
            <BlueLine />
            <TopTitle>{t.Kontakt.distribucijaIprerada}</TopTitle>
            <Title>Marikomerc d.o.o.</Title>
            <Text>{parse(t.Kontakt.heroData)}</Text>

            <Link href="https://www.google.com/maps/@44.1751437,15.3570071,19.73z?entry=ttu">
              <GoogleButton>{t.Kontakt.uputeGoogleMaps}</GoogleButton>
            </Link>
          </WrapText>
        </Data>
        <WrapPhoto>
          <Image src="/kontaktHeroImg.webp" layout="fill" objectFit="cover" />
        </WrapPhoto>
      </WrapContent>
    </WrapAllContactHero>
  );
}

export default ContactHero;
