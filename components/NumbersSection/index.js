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
  BgMore,
} from "./style.js";

import viljuskar from "../../assets/images/viljuskar.webp";
import { useRouter } from "next/router.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
import { useScrollPercentage } from "react-scroll-percentage";

function NumbersSection() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const [ref2, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAll>
      <Up>
        <BlueLine />
        <video autoPlay muted loop="loop" className="videoHero" playsInline>
          <source src="/brojkeVideo.mp4" type="video/mp4" />
        </video>
      </Up>
      <Down ref={ref2}>
        <BgMore percentage={percentage} />
        <WrapContent>
          <Title>
            <TopText>{t.Numbers.title}</TopText>
            <Line
              ref={ref}
              className={` ${inView ? "inViewLine" : "outViewLine"}`}
            />
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
              </SingleFact>
            </Right>
          </Numbers>
        </WrapContent>
        {/* <Overlay /> */}
        <Elipse />
      </Down>
    </WrapAll>
  );
}

export default NumbersSection;
