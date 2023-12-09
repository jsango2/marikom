import {
  WrapAll,
  Photo,
  Naziv,
  LatinskiNaziv,
  JedinicaMjere,
  Pakiranje,
  NacinSmrzavanja,
  Placeholder,
  WrapData,
  Opis,
  WrapCerts,
  Novo,
  NovoPakiranje,
  DonjiBlok,
  GornjiBlok,
} from "./style.js";

import { useRouter } from "next/router";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { catalogData } from "../../../catalogData.js";
import { useEffect, useState } from "react";
import Image from "next/image.js";
import axios from "axios";
import ph from "../../../assets/images/PLACEHOLDER.png";
import IFScert from "../../../assets/images/IFSfood.png";
import perla from "../../../assets/images/Perla.png";
import zivjetiZdravo from "../../../assets/images/zivjetiZdravo.png";
import mscLogo from "../../../assets/images/mscLogo.png";

function Kartica({
  kataloskiBroj,
  hasPhoto,
  photo,
  imeProizvoda,
  latinskiNaziv,
  jedinicaMjere,
  pakiranje,
  nacinSmrzavanja,
  opis,
  ostaleMjere,
  ostaleMjereVrijednost,
  oznakaNovo,
  oznakaNovoPakiranje,
  certifikatZivjetiZdravo,
  certifikatIFS,
  certifikatMSC,
  perlaHoreca,
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <Photo>
        {hasPhoto ? (
          <Image src={photo} layout="fill" objectFit="contain" />
        ) : (
          <Image src={ph} layout="fill" objectFit="cover" />
        )}
      </Photo>
      <WrapData>
        <GornjiBlok>
          <Naziv>{imeProizvoda}</Naziv>
          {latinskiNaziv != "-" && (
            <LatinskiNaziv>lat. {latinskiNaziv}</LatinskiNaziv>
          )}
          <Opis>{opis}</Opis>
        </GornjiBlok>
        <DonjiBlok>
          <JedinicaMjere>
            {t.Products.KataloskiBr}: <b>{kataloskiBroj}</b>{" "}
          </JedinicaMjere>
          <Pakiranje>
            {t.Products.Pakiranje}: <b>{pakiranje}</b>
          </Pakiranje>
          {ostaleMjere !== "-" ? (
            <Pakiranje>
              {ostaleMjere}: <b>{ostaleMjereVrijednost}</b>
            </Pakiranje>
          ) : null}

          {nacinSmrzavanja != "-" && (
            <NacinSmrzavanja>
              {t.Products.NacinSmrzavanja}: <b>{nacinSmrzavanja}</b>
            </NacinSmrzavanja>
          )}
        </DonjiBlok>
      </WrapData>
      <WrapCerts>
        {certifikatIFS === "DA" ? (
          <Image src={IFScert} width={50} height={35} objectFit="cover" />
        ) : null}
        <div style={{ marginLeft: "10px" }}>
          {certifikatMSC === "DA" ? (
            <Image src={mscLogo} width={55} height={15} objectFit="cover" />
          ) : null}
        </div>
        {oznakaNovo === "DA" ? (
          <Novo>{locale === "hr" ? "NOVO" : "NEW"}</Novo>
        ) : null}
        {oznakaNovoPakiranje === "DA" ? (
          <NovoPakiranje>
            {locale === "hr" ? "NOVO PAKIRANJE" : "NEW PACKAGING"}
          </NovoPakiranje>
        ) : null}
        <div style={{ marginLeft: "10px" }}>
          {perlaHoreca === "DA" ? (
            <Image src={perla} width={50} height={25} objectFit="cover" />
          ) : null}
        </div>
        <div style={{ marginLeft: "10px" }}>
          {certifikatZivjetiZdravo === "DA" ? (
            <Image
              src={zivjetiZdravo}
              width={50}
              height={25}
              objectFit="cover"
            />
          ) : null}
        </div>
      </WrapCerts>
    </WrapAll>
  );
}

export default Kartica;
