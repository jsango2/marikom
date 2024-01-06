import { Overlay, WrapAll, Container, OverlayTop, Number } from "./style.js";

import Image from "next/image";
import bg from "../../../assets/images/nasaPrica/brojkeBG.png";
import {
  Line,
  Right,
  SingleFact,
  TextFact,
  Wrap,
} from "../../RastSection/style.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

function Brojke() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <OverlayTop />
      <Overlay />
      <Image src={bg} alt="p1" layout="fill" objectFit="cover" />
      <Container>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>06-22h</Number>
              <TextFact>{t.Onama.brojke1}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>9.200 t</Number>
              <TextFact>{t.Onama.brojke2}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>7</Number>
              <TextFact>{t.Onama.brojke3}</TextFact>
            </Wrap>
          </SingleFact>
        </Right>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>45000</Number>
              <TextFact>{t.Onama.brojke5}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>500</Number>
              <TextFact>{t.Onama.brojke6}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>200</Number>
              <TextFact>{t.Onama.brojke7}</TextFact>
            </Wrap>
          </SingleFact>
        </Right>
      </Container>
    </WrapAll>
  );
}

export default Brojke;
