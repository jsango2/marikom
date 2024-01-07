import {
  WrapKontakt,
  WrapContent,
  Naslov,
  Grid,
  PodNaslov,
  Block,
  Adresa,
  Grad,
  RadnoVrijeme,
  WrapEmail,
  GoogleButton,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import parse from "html-react-parser";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import { BlueDivider } from "../main/style.js";
import { mlsKontaktData } from "../../../mlsKontaktData.js";

function Kontakt({ photo, text }) {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapKontakt>
      <WrapContent>
        <BlueDivider />
        <Naslov>{t.MLS.kontaktirajteNas}</Naslov>
        <PodNaslov>{t.MLS.raspored}</PodNaslov>
        <Grid>
          {mlsKontaktData.map((x) => (
            <Block>
              <Grad>{locale === "hr" ? x.LOKACIJA : x.ENG}</Grad>
              <Adresa>
                {x.ULICA}
                <br />
                {locale === "hr" ? x["GRAD, DRŽAVA"] : x["GRAD, DRŽAVA (ENG)"]}
                <br /> {x["BROJ TELEFONA"]}
                <br />
                <WrapEmail>
                  <Image src="/letter.svg" width={15} height={15} />
                  <div style={{ marginLeft: "10px" }}>{x.EMAIL}</div>
                </WrapEmail>
              </Adresa>
              <RadnoVrijeme>
                {t.MLS.radnoVrijeme}
                <br /> {t.MLS.ponFri}: {x["Ponedjeljak-petak"]}
                <br /> {t.MLS.sat}: {x.Subota} <br />
              </RadnoVrijeme>
              <GoogleButton
                href={x["Upute Google Maps (link na google poziciju)"]}
              >
                {t.MLS.upute}
              </GoogleButton>
            </Block>
          ))}
        </Grid>
      </WrapContent>
    </WrapKontakt>
  );
}

export default Kontakt;
