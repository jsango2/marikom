import {
  WrapAllContactHero,
  WrapContent,
  WrapText,
  WrapPhoto,
  GoogleButton,
  Title,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize";
import Image from "next/image.js";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";

import { useState } from "react";
import { BlueLine } from "../../ProLogMapSection/style.js";
import { TopTitle, Text } from "../../HorecaPage/Mapa/style.js";
function ContactHero() {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapAllContactHero>
      <WrapContent>
        <WrapText>
          <BlueLine />
          <TopTitle>distribucija i prerada</TopTitle>
          <Title>Marikomerc grupa d.o.o.</Title>
          <Text>
            Grabi 54
            <br /> 23241 Poličnik, Hrvatska
            <br /> Matični broj: 3468925
            <br /> OIB: 02359254184
            <br />
            <br /> E-mail: info@marikomerc.hr
            <br /> Tel: +385(0)23/627-696
            <br />
            <br /> ERSTE BANKA, Jadranski trg 3A, 51000 Rijeka, Hrvatska
            <br /> IBAN: HR8024020061100078207
            <br /> TimoCom ID: 227763
            <br />
            <br /> Marikomerc d.o.o. je upisan u registar Trgovačkog suda u
            Zadru, broj spisa: 02454831
          </Text>
          <GoogleButton>Upute Google Maps</GoogleButton>
        </WrapText>
        <WrapPhoto>
          <Image src="/kontaktHeroImg.png" layout="fill" />
        </WrapPhoto>
      </WrapContent>
    </WrapAllContactHero>
  );
}

export default ContactHero;
