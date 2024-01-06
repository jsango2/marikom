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
  GoogleButton,
} from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import parse from "html-react-parser";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import { BlueDivider } from "../main/style.js";

function Kontakt({ photo, text }) {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapKontakt>
      <WrapContent>
        <BlueDivider />
        <Naslov>KONTAKTIRAJTE NAS</Naslov>
        <PodNaslov>
          RADNO VRIJEME: Ponedjeljak-petak: 08.00 - 16.00h | Subota: 08.00 -
          16.00h | Nedjelja: Zatvoreno
        </PodNaslov>
        <Grid>
          <Block>
            <Grad>ZADAR</Grad>
            <Adresa>
              Sjedište <br />
              Grabi 54, Poličnik <br />
              23000 Zadar, Hrvatska
              <br /> Tel: +385(0)23/342-696{" "}
            </Adresa>
            <RadnoVrijeme>
              RADNO VRIJEME:
              <br /> Ponedjeljak-petak: 08.00 - 16.00 h<br /> Subota: 08.00 -
              16.00 h <br />
              Nedjelja: 08.00 - 12.00 h
            </RadnoVrijeme>
            <GoogleButton>Upute Google Maps</GoogleButton>
          </Block>{" "}
          <Block>
            <Grad>ZADAR</Grad>
            <Adresa>
              Sjedište <br />
              Grabi 54, Poličnik <br />
              23000 Zadar, Hrvatska
              <br /> Tel: +385(0)23/342-696{" "}
            </Adresa>
            <RadnoVrijeme>
              RADNO VRIJEME:
              <br /> Ponedjeljak-petak: 08.00 - 16.00 h<br /> Subota: 08.00 -
              16.00 h <br />
              Nedjelja: 08.00 - 12.00 h
            </RadnoVrijeme>
            <GoogleButton>Upute Google Maps</GoogleButton>
          </Block>{" "}
          <Block>
            <Grad>ZADAR</Grad>
            <Adresa>
              Sjedište <br />
              Grabi 54, Poličnik <br />
              23000 Zadar, Hrvatska
              <br /> Tel: +385(0)23/342-696{" "}
            </Adresa>
            <RadnoVrijeme>
              RADNO VRIJEME:
              <br /> Ponedjeljak-petak: 08.00 - 16.00 h<br /> Subota: 08.00 -
              16.00 h <br />
              Nedjelja: 08.00 - 12.00 h
            </RadnoVrijeme>
            <GoogleButton>Upute Google Maps</GoogleButton>
          </Block>{" "}
          <Block>
            <Grad>ZADAR</Grad>
            <Adresa>
              Sjedište <br />
              Grabi 54, Poličnik <br />
              23000 Zadar, Hrvatska
              <br /> Tel: +385(0)23/342-696{" "}
            </Adresa>
            <RadnoVrijeme>
              RADNO VRIJEME:
              <br /> Ponedjeljak-petak: 08.00 - 16.00 h<br /> Subota: 08.00 -
              16.00 h <br />
              Nedjelja: 08.00 - 12.00 h
            </RadnoVrijeme>
            <GoogleButton>Upute Google Maps</GoogleButton>
          </Block>{" "}
          <Block>
            <Grad>ZADAR</Grad>
            <Adresa>
              Sjedište <br />
              Grabi 54, Poličnik <br />
              23000 Zadar, Hrvatska
              <br /> Tel: +385(0)23/342-696{" "}
            </Adresa>
            <RadnoVrijeme>
              RADNO VRIJEME:
              <br /> Ponedjeljak-petak: 08.00 - 16.00 h<br /> Subota: 08.00 -
              16.00 h <br />
              Nedjelja: 08.00 - 12.00 h
            </RadnoVrijeme>
            <GoogleButton>Upute Google Maps</GoogleButton>
          </Block>{" "}
          <Block>
            <Grad>ZADAR</Grad>
            <Adresa>
              Sjedište <br />
              Grabi 54, Poličnik <br />
              23000 Zadar, Hrvatska
              <br /> Tel: +385(0)23/342-696{" "}
            </Adresa>
            <RadnoVrijeme>
              RADNO VRIJEME:
              <br /> Ponedjeljak-petak: 08.00 - 16.00 h<br /> Subota: 08.00 -
              16.00 h <br />
              Nedjelja: 08.00 - 12.00 h
            </RadnoVrijeme>
            <GoogleButton>Upute Google Maps</GoogleButton>
          </Block>
        </Grid>
      </WrapContent>
    </WrapKontakt>
  );
}

export default Kontakt;
