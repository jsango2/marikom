import Image from "next/image";
import {
  WrapAll,
  WrapContent,
  Left,
  Right,
  Title,
  MainTitle,
  TopText,
  SingleFact,
  Numbers,
  Number,
  WrapNumberText,
  Fact,
  ThinLine,
  TextFact,
  Line,
  Wrap,
  Overlay,
  BlueLine,
  Elipse,
  Up,
  Down,
} from "./style.js";
import bg from "../../assets/images/bgNumbers.png";
import viljuskar from "../../assets/images/viljuskar.png";

function NumbersSection() {
  return (
    <WrapAll>
      <Up>
        <BlueLine />
        <Image src={viljuskar} alt="overlay" layout="fill" objectFit="cover" />
      </Up>
      <Down>
        <WrapContent>
          <Title>
            <TopText>MARIKOMERC GRUPA U BROJKAMA</TopText>
            <Line />
            <MainTitle>
              Rast u količinama, prihodima, kapacitetima i količini isporuka
              obilježava našu Marikomerc grupu.
            </MainTitle>
          </Title>
          <Numbers>
            <Left>
              <SingleFact>
                <WrapNumberText>
                  <Number>+10.000</Number>
                  <Fact>Broj kupaca u prošloj godini</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>
              <SingleFact>
                <WrapNumberText>
                  <Number>60</Number>
                  <Fact>Kapacitet prijema kamiona u jednom danu</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>{" "}
              <SingleFact>
                <WrapNumberText>
                  <Number>+5.000 t</Number>
                  <Fact>Prosječna godišnja količina prodaje</Fact>
                </WrapNumberText>
                {/* <ThinLine /> */}
              </SingleFact>
            </Left>
            <Right>
              <SingleFact>
                <WrapNumberText>
                  <Number>+500</Number>
                  <Fact>Ukupni kapacitet u n° paleta +4°C</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>
              <SingleFact>
                <WrapNumberText>
                  <Number>+4.500</Number>
                  <Fact>Ukupni kapacitet u n° paleta -25°C</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>{" "}
              <SingleFact>
                <WrapNumberText>
                  <Number>+1.500 t</Number>
                  <Fact>
                    Prosječni godišnji volumen prerađenih vlastitih proizvoda
                  </Fact>
                </WrapNumberText>
                {/* <ThinLine /> */}
              </SingleFact>
            </Right>
          </Numbers>
        </WrapContent>
        <Image src={bg} alt="overlay" layout="fill" objectFit="cover" />
        <Overlay />
        <Elipse />
      </Down>
    </WrapAll>
  );
}

export default NumbersSection;
