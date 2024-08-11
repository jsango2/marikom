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
  Phone,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import parse from "html-react-parser";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import { BlueDivider } from "../main/style.js";
import { mlsKontaktData } from "../../../mlsKontaktData.js";
import Button from "../../buttonBlue/Button.js";
import { useInView } from "react-intersection-observer";
function Kontakt({ photo, text, radnaVremena }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const { locale } = useRouter();
  const router = useRouter();
  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  console.log(radnaVremena.zadar);
  return (
    <WrapKontakt id="kontakt">
      <WrapContent>
        {router.pathname === "/MLS" && (
          <>
            <BlueDivider />
            <Naslov>{t.MLS.kontaktirajteNas}</Naslov>
            <PodNaslov>{t.MLS.raspored}</PodNaslov>
            <Button
              bgcolor="#4299C8"
              color="#FFFFFF"
              width="226px"
              text={t.MLS.zatrazitePonudu}
              linkTo="/o-nama"
            />
          </>
        )}
        <Grid>
          {mlsKontaktData.map((x) => (
            <Block key={x.LOKACIJA}>
              <Grad>{locale === "hr" ? x.LOKACIJA : x.ENG}</Grad>
              <Adresa>
                <div style={{ margin: 0 }}>{x.ULICA}</div>

                {locale === "hr" ? x["GRAD, DRŽAVA"] : x["GRAD, DRŽAVA (ENG)"]}
                <br />
                <Phone href={`tel:${x["BROJ TELEFONA"]}`}>
                  {x["BROJ TELEFONA"]}
                </Phone>
                <br />
                <WrapEmail href={`mailto:${x.EMAIL}?subject=MLS upit`}>
                  <Image src="/letter.svg" width={15} height={15} />

                  <div style={{ marginLeft: "10px", color: "#1c2640" }}>
                    {x.EMAIL}
                  </div>
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
          {/* <Block>
            <Grad>
              {locale === "hr"
                ? mlsKontaktData[0].LOKACIJA
                : mlsKontaktData[0].ENG}
            </Grad>
            <Adresa>
              <div style={{ margin: 0 }}>{mlsKontaktData[0].ULICA}</div>

              {locale === "hr"
                ? mlsKontaktData[0]["GRAD, DRŽAVA"]
                : mlsKontaktData[0]["GRAD, DRŽAVA (ENG)"]}
              <br />
              <Phone href={`tel:${mlsKontaktData[0]["BROJ TELEFONA"]}`}>
                {mlsKontaktData[0]["BROJ TELEFONA"]}
              </Phone>
              <br />
              <WrapEmail
                href={`mailto:${mlsKontaktData[0].EMAIL}?subject=MLS upit`}
              >
                <Image src="/letter.svg" width={15} height={15} />

                <div style={{ marginLeft: "10px", color: "#1c2640" }}>
                  {mlsKontaktData[0].EMAIL}
                </div>
              </WrapEmail>
            </Adresa>
            <RadnoVrijeme>
              {t.MLS.radnoVrijeme}
              <br /> {t.MLS.ponFri}: {radnaVremena.zadarrv.ponedjeljakpetak}
              <br /> {t.MLS.sat}: {radnaVremena.zadarrv.subota} <br />
            </RadnoVrijeme>
            <GoogleButton
              href={
                mlsKontaktData[0]["Upute Google Maps (link na google poziciju)"]
              }
            >
              {t.MLS.upute}
            </GoogleButton>
          </Block> */}
          {/* <Block>
            <Grad>
              {locale === "hr"
                ? mlsKontaktData[1].LOKACIJA
                : mlsKontaktData[1].ENG}
            </Grad>
            <Adresa>
              <div style={{ margin: 1 }}>{mlsKontaktData[1].ULICA}</div>

              {locale === "hr"
                ? mlsKontaktData[1]["GRAD, DRŽAVA"]
                : mlsKontaktData[1]["GRAD, DRŽAVA (ENG)"]}
              <br />
              <Phone href={`tel:${mlsKontaktData[1]["BROJ TELEFONA"]}`}>
                {mlsKontaktData[1]["BROJ TELEFONA"]}
              </Phone>
              <br />
              <WrapEmail
                href={`mailto:${mlsKontaktData[1].EMAIL}?subject=MLS upit`}
              >
                <Image src="/letter.svg" width={15} height={15} />

                <div style={{ marginLeft: "10px", color: "#1c2640" }}>
                  {mlsKontaktData[1].EMAIL}
                </div>
              </WrapEmail>
            </Adresa>
            <RadnoVrijeme>
              {t.MLS.radnoVrijeme}
              <br /> {t.MLS.ponFri}: {radnaVremena.rijekarv.ponedjeljakpetak}
              <br /> {t.MLS.sat}: {radnaVremena.rijekarv.subota} <br />
            </RadnoVrijeme>
            <GoogleButton
              href={
                mlsKontaktData[1]["Upute Google Maps (link na google poziciju)"]
              }
            >
              {t.MLS.upute}
            </GoogleButton>
          </Block>
          <Block>
            <Grad>
              {locale === "hr"
                ? mlsKontaktData[2].LOKACIJA
                : mlsKontaktData[2].ENG}
            </Grad>
            <Adresa>
              <div style={{ margin: 2 }}>{mlsKontaktData[2].ULICA}</div>

              {locale === "hr"
                ? mlsKontaktData[2]["GRAD, DRŽAVA"]
                : mlsKontaktData[2]["GRAD, DRŽAVA (ENG)"]}
              <br />
              <Phone href={`tel:${mlsKontaktData[2]["BROJ TELEFONA"]}`}>
                {mlsKontaktData[2]["BROJ TELEFONA"]}
              </Phone>
              <br />
              <WrapEmail
                href={`mailto:${mlsKontaktData[2].EMAIL}?subject=MLS upit`}
              >
                <Image src="/letter.svg" width={15} height={15} />

                <div style={{ marginLeft: "10px", color: "#1c2640" }}>
                  {mlsKontaktData[2].EMAIL}
                </div>
              </WrapEmail>
            </Adresa>
            <RadnoVrijeme>
              {t.MLS.radnoVrijeme}
              <br /> {t.MLS.ponFri}: {radnaVremena.dubrovnikrv.ponedjeljakpetak}
              <br /> {t.MLS.sat}: {radnaVremena.dubrovnikrv.subota} <br />
            </RadnoVrijeme>
            <GoogleButton
              href={
                mlsKontaktData[2]["Upute Google Maps (link na google poziciju)"]
              }
            >
              {t.MLS.upute}
            </GoogleButton>
          </Block>
          <Block>
            <Grad>
              {locale === "hr"
                ? mlsKontaktData[3].LOKACIJA
                : mlsKontaktData[3].ENG}
            </Grad>
            <Adresa>
              <div style={{ margin: 3 }}>{mlsKontaktData[3].ULICA}</div>

              {locale === "hr"
                ? mlsKontaktData[3]["GRAD, DRŽAVA"]
                : mlsKontaktData[3]["GRAD, DRŽAVA (ENG)"]}
              <br />
              <Phone href={`tel:${mlsKontaktData[3]["BROJ TELEFONA"]}`}>
                {mlsKontaktData[3]["BROJ TELEFONA"]}
              </Phone>
              <br />
              <WrapEmail
                href={`mailto:${mlsKontaktData[3].EMAIL}?subject=MLS upit`}
              >
                <Image src="/letter.svg" width={15} height={15} />

                <div style={{ marginLeft: "10px", color: "#1c2640" }}>
                  {mlsKontaktData[3].EMAIL}
                </div>
              </WrapEmail>
            </Adresa>
            <RadnoVrijeme>
              {t.MLS.radnoVrijeme}
              <br /> {t.MLS.ponFri}: {radnaVremena.metkovicrv.ponedjeljakpetak}
              <br /> {t.MLS.sat}: {radnaVremena.metkovicrv.subota} <br />
            </RadnoVrijeme>
            <GoogleButton
              href={
                mlsKontaktData[3]["Upute Google Maps (link na google poziciju)"]
              }
            >
              {t.MLS.upute}
            </GoogleButton>
          </Block> */}
        </Grid>
      </WrapContent>
    </WrapKontakt>
  );
}

export default Kontakt;
