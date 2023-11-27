import { Overlay, WrapAll, Container, OverlayTop } from "./style.js";

import Image from "next/image";
import bg from "../../../assets/images/nasaPrica/brojkeBG.png";
import {
  Line,
  Number,
  Right,
  SingleFact,
  TextFact,
  Wrap,
} from "../../RastSection/style.js";

function Brojke() {
  return (
    <WrapAll>
      <OverlayTop />
      <Overlay />
      <Image src={bg} alt="p1" layout="fill" objectFit="cover" />
      <Container>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>874</Number>
              <TextFact>Ukupni kapacitet u n° paleta - 25°C</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>467</Number>
              <TextFact>Ukupni kapacitet u n° paleta + 4°C</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>122</Number>
              <TextFact>Kapacitet prijema kamiona u jednom danu</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>335</Number>
              <TextFact>
                Volumen prerađenih proizvoda godišnje u tonama
              </TextFact>
            </Wrap>
          </SingleFact>
        </Right>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>+16%</Number>
              <TextFact>Prosječan rast prihoda u zadnje 3 godine</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>952</Number>
              <TextFact>Broj kupaca u prošloj godini</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>874</Number>
              <TextFact>Skladišni prostor u n° paleta</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>1.608 t</Number>
              <TextFact>Ukupne količine u 2021. godini </TextFact>
            </Wrap>
          </SingleFact>
        </Right>
      </Container>
    </WrapAll>
  );
}

export default Brojke;
