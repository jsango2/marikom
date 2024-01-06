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

const Main = () => {
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
            <UpTitle>MODERNA LOGISTIKA</UpTitle>
            <Title>
              Uz našu logističku podršku osiguravamo vam optimalnu dostupnost,
              točnost i efikasnost u svim fazama lanca opskrbe
            </Title>
            <Text>
              Uz to što je distributer kvalitetne hrane, tvrtka Marikomerc pruža
              usluge prijevoza tereta u temperaturnom režimu, odnosno u
              kontroliranom temperaturnom lancu, kako bi se osigurala kvaliteta,
              svježina i sigurnost proizvoda. Ovaj režim je ključan za
              osjetljive proizvode koji zahtijevaju određenu temperaturu kako bi
              ostali nepokvareni i funkcionalni tijekom cijelog lanca opskrbe,
              od proizvodnje do isporuke.
              <br />
              <br /> Teret se prevozi na domaćim i međunarodnim rutama, koje su
              dobro isplanirane, praćene i upravljane svim aspektima kako bi se
              osigurala sigurna, učinkovita i pravodobna isporuka robe. Uz
              transport smrznutih i svježih proizvoda iste skladištimo u
              kontroliranim uvjetima kako bi se očuvala sigurnost, kvaliteta i
              integritet proizvoda u kontroliranom temperaturnom lancu na
              temperaturnim režimima od -25°c - +35°c.
            </Text>
            <Button
              bgcolor="#4299C8"
              color="#FFFFFF"
              width="226px"
              text="Zatražite ponudu"
              linkTo="/o-nama"
            ></Button>
          </Content>
          <Photo1 bg="/MLSpageHero.webp">
            <BottomSlider>
              <Slider {...settings}>
                <Truck>SCANIA S650A4X2NB - Tegljač</Truck>
                <Truck>SCANIA S650A4X2NB - Tegljač</Truck>
                <Truck>SCANIA S650A4X2NB - Tegljač</Truck>
                <Truck>SCANIA S650A4X2NB - Tegljač</Truck>
              </Slider>
            </BottomSlider>
          </Photo1>
        </WrapKartica>
        <Teret>
          <BlueDivider />
          <Naslov>TERET KOJI PREVOZIMO</Naslov>
          <WrapIkone>
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame.svg" layout="fill" />
              </Ikona>
              <TextIspod>
                Riblji proizvodI (smrznuta i svježa riba i proizvodi ribarstva)
                -25°c - +4°c
              </TextIspod>
            </IkonaiText>
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-1.svg" layout="fill" />
              </Ikona>
              <TextIspod>Mesni proizvodI -25°c - +4°c</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-3.svg" layout="fill" />
              </Ikona>
              <TextIspod>
                Mliječni proizvodi (sir, maslac, mlijeko, vrhnje, jogurt)
              </TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-7.svg" layout="fill" />
              </Ikona>
              <TextIspod>Voće i povrće</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-2.svg" layout="fill" />
              </Ikona>
              <TextIspod>Cvijeće</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-6.svg" layout="fill" />
              </Ikona>
              <TextIspod>Farmaceutska industrija</TextIspod>
            </IkonaiText>{" "}
            <IkonaiText>
              <Ikona>
                <Image src="/MLSpageIkone/Frame-4.svg" layout="fill" />
              </Ikona>
              <TextIspod>Ostali proizvodi</TextIspod>
            </IkonaiText>
          </WrapIkone>
        </Teret>
        <BlueDivider />
        <Kategorizacija>
          <Naslov>Kategorizacija flote prema MLS standardima</Naslov>
        </Kategorizacija>
        <WrapKategorije>
          <Kategorija
            photo="/MLStruck1.webp"
            text="<strong>INTERNATIONAL</strong> – flota za međunarodni transport sastoji se od tegljača s poluprikolicama i troosovinaca s prikolicama kapaciteta 33-34 paletna mjesta. Sva vozila su dvorežimska te pripremljena da udovolje najkompleksnijim logističkim zahtjevima."
          />
          <Kategorija
            photo="/MLStruck2.webp"
            text="<strong>INTERCITY</strong> – vozila u kategoriji 10-20 paleta namijenjena pretežito transportu između gradova unutar RH i namijenjena paletnoj isporuci klijentima."
          />
          <Kategorija
            photo="/MLStruck3.webp"
            text="<strong>LOCAL</strong> – vozila za kapilarnu distribuciju, door to door service. Vozila B i C kategorije u rasponu od 3-10 paletnih mjesta gabaritima adekvatna da se brzo i učinkovito mogu provući i najužim gradskim ulicama."
          />
        </WrapKategorije>
        <MlsMapa />
        <WrapTwoCards>
          <WrapKartica2>
            <Content>
              <BlueLine />
              <UpTitle>MODERNA FLOTA VOZILA</UpTitle>
              <Title>Zašto MLS?</Title>
              <Text>
                Odlikuju nas moderni skladišni prostori, flota vozila prosječne
                starosti 3 godine, kvalificirano osoblje i visoki operativni
                standardi kako u naprednoj logistici za veliku distribuciju tako
                i u distribuciji suhih, svježih i smrznutih proizvoda za
                maloprodajni kanal.
              </Text>
            </Content>
          </WrapKartica2>
          <WrapKartica2>
            <Content>
              <BlueLine />
              <UpTitle>TELEMATSKI NADZORNI SUSTAV</UpTitle>
              <Title>Sigurnost i jamstvo</Title>
              <Text>
                Uvijek jamčimo najvišu kvalitetu robe koja nam je povjerena. To
                je moguće zahvaljujući integriranom kompjuteriziranom i
                telematskom nadzornom sustavu u našim vozilima što nam omogućava
                nadzor 24 sata na dan, 365 dana u godini, promptno prijavljujući
                sve anomalije u HACCP zaštitnim protokolima hrane na
                kontroliranim temperaturama.
              </Text>
            </Content>
          </WrapKartica2>
        </WrapTwoCards>
      </WrapContent>
      <Brojke />
      <VideoFrame></VideoFrame>
      <Kontakt />
    </WrapAll>
  );
};

export default Main;
