import {
  WrapAll,
  UpTitle,
  Title,
  Text,
  BlueLine,
  Photo1,
  Photo2,
  WrapKategorije,
  WrapKartica,
  WrapKartica2,
  WrapTwoCards,
  Content,
  VideoFrame,
  Kategorizacija,
  Teret,
  BlueDivider,
  Naslov,
  WrapIkone,
  IkonaiText,
  Ikona,
  WrapContent,
  TextIspod,
  BottomSlider,
  Truck,
  OverlayTeret,
  BgMLS,
  ImageAbsolute,
} from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
// import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import Button from "../../buttonBlue/Button.js";
import MlsMapa from "../Mapa/index.js";
import Brojke from "../brojke/brojke.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Kategorija from "../kategorija/index.js";
import Kontakt from "../kontakt/index.js";
import useWindowSize from "../../helper/usewindowsize.js";
import parse from "html-react-parser";
import { useScrollPercentage } from "react-scroll-percentage";
import ParallaxTruck from "./parallaxTruck.js";

const Main = () => {
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  const size = useWindowSize();

  const settings = {
    // dots: false,
    // infinite: true,
    // slidesToShow: 2,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    className: "testimonialSlider",
    speed: 3500,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          className: "testimonialSlider",
          speed: 6500,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          cssEase: "linear",
          className: "testimonialSlider",
          speed: 3500,
        },
      },
    ],
  };
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  // const size = useWindowSize();
  return (
    <WrapAll>
      <WrapContent>
        <WrapKartica>
          <Content>
            <BlueLine />
            <UpTitle>{t.MLS.modernaLogistika}</UpTitle>
            <Title>{t.MLS.naslov1}</Title>
            <Text>{parse(t.MLS.textTop)}</Text>
            <Button
              bgcolor="#4299C8"
              color="#FFFFFF"
              width="226px"
              text={t.MLS.zatrazitePonudu}
              linkTo="/o-nama"
            ></Button>
          </Content>
          <Photo1 bg="/MLSpageHero.webp">
            <BottomSlider>
              <Slider {...settings}>
                <Truck>
                  SCANIA S650A4X2NB - {locale === "hr" ? "Tegljač" : "Truck"}
                </Truck>
                <Truck>
                  SCANIA S660 A4X2NB - {locale === "hr" ? "Tegljač" : "Truck"}
                </Truck>
                <Truck>
                  SCANIA S770A4X2NB - {locale === "hr" ? "Tegljač" : "Truck"}
                </Truck>
                <Truck>
                  VOLVO FH 62R -{" "}
                  {locale === "hr" ? "Tegljač" : "Refrigerated truck"}
                </Truck>
              </Slider>
            </BottomSlider>
          </Photo1>
        </WrapKartica>
      </WrapContent>
      <Teret>
        <OverlayTeret />
        <WrapContent>
          <BlueDivider />
          <Naslov>{t.MLS.teretKojiPrecozime}</Naslov>
          <WrapIkone>
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame.svg" layout="fill" />
              </Ikona>
              <TextIspod>{t.MLS.ikona1}</TextIspod>
            </IkonaiText>
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-1.svg" layout="fill" />
              </Ikona>
              <TextIspod> {t.MLS.ikona2}</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-3.svg" layout="fill" />
              </Ikona>
              <TextIspod>{t.MLS.ikona3}</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-7.svg" layout="fill" />
              </Ikona>
              <TextIspod> {t.MLS.ikona4}</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-2.svg" layout="fill" />
              </Ikona>
              <TextIspod> {t.MLS.ikona5}</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-6.svg" layout="fill" />
              </Ikona>
              <TextIspod> {t.MLS.ikona6}</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-4.svg" layout="fill" />
              </Ikona>
              <TextIspod> {t.MLS.ikona7}</TextIspod>
            </IkonaiText>
          </WrapIkone>
        </WrapContent>
      </Teret>
      <WrapContent>
        <BlueDivider />
        <Kategorizacija>
          <Naslov> {t.MLS.naslov2}</Naslov>
        </Kategorizacija>
        <WrapKategorije>
          <Kategorija photo="/MLStruck1.png" text={t.MLS.card1} />
          <Kategorija photo="/MLStruck2.png" text={t.MLS.card2} />
          <Kategorija photo="/MLStruck3.png" text={t.MLS.card3} />
        </WrapKategorije>
        <MlsMapa />
        <WrapTwoCards ref={ref}>
          <BgMLS percentage={percentage} />
          <WrapKartica2>
            <Content>
              <BlueLine />
              <UpTitle>{t.MLS.modernaFlota} </UpTitle>
              <Title>{t.MLS.zastoMLS} </Title>
              <Text>{t.MLS.text1}</Text>
            </Content>
          </WrapKartica2>
          <WrapKartica2>
            <Content>
              <BlueLine />
              <UpTitle>{t.MLS.telematskiSustav} </UpTitle>
              <Title>{t.MLS.sigurnost} </Title>
              <Text>{t.MLS.text2}</Text>
            </Content>
          </WrapKartica2>
        </WrapTwoCards>
      </WrapContent>
      <Brojke />
      <ParallaxTruck />
      <Kontakt />
    </WrapAll>
  );
};

export default Main;
