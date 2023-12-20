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

import viljuskar from "../../assets/images/viljuskar.webp";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";

function NumbersSection() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <WrapAll>
      <Up>
        <BlueLine />
        <Image src={viljuskar} alt="overlay" layout="fill" objectFit="cover" />
      </Up>
      <Down>
        <WrapContent>
          <Title>
            <TopText>{t.Numbers.title}</TopText>
            <Line />
            <MainTitle>{t.Numbers.subTitle}</MainTitle>
          </Title>
          <Numbers>
            <Left>
              <SingleFact>
                <WrapNumberText>
                  <Number>+10.000</Number>
                  <Fact>{t.Numbers.customerNumber}</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>
              <SingleFact>
                <WrapNumberText>
                  <Number>60</Number>
                  <Fact>{t.Numbers.capacityNumber}</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>{" "}
              <SingleFact>
                <WrapNumberText>
                  <Number>+5.000 t</Number>
                  <Fact>{t.Numbers.averageYear}</Fact>
                </WrapNumberText>
                {/* <ThinLine /> */}
              </SingleFact>
            </Left>
            <Right>
              <SingleFact>
                <WrapNumberText>
                  <Number>+500</Number>
                  <Fact>{t.Numbers.capacity4}</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>
              <SingleFact>
                <WrapNumberText>
                  <Number>+4.500</Number>
                  <Fact>{t.Numbers.capacity25}</Fact>
                </WrapNumberText>
                <ThinLine />
              </SingleFact>{" "}
              <SingleFact>
                <WrapNumberText>
                  <Number>+1.500 t</Number>
                  <Fact>{t.Numbers.volume}</Fact>
                </WrapNumberText>
                {/* <ThinLine /> */}
              </SingleFact>
            </Right>
          </Numbers>
        </WrapContent>
        <Image
          src="/pozadinaBrojke.webp"
          alt="overlay"
          layout="fill"
          objectFit="cover"
        />
        <Overlay />
        <Elipse />
      </Down>
    </WrapAll>
  );
}

export default NumbersSection;
