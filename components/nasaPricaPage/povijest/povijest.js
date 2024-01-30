import {
  WrapAll,
  Container,
  Title,
  WrapEvents,
  DashedLine,
  Icon,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import Dogadjaj from "./dogadjaj.js";
import { IoIosArrowForward } from "react-icons/io";
import { useInView } from "react-intersection-observer";
const events = [
  {
    godina: "1990",
    text: "Otvorena ribarnica Marikomerc na zadarskoj tržnici sa komorom kapaciteta 8 paleta (-18°C)",
    textEng:
      "Opened Marikomerc fish market at Zadar market with a chamber capacity of 8 pallets (-18°C)",
  },
  {
    godina: "2008",
    text: "Izgrađen logističku distributivni centar u Poličniku kapaciteta 400 paleta na -18°C režimu",
    textEng:
      "Built a logistics distribution center in Poličnik with a capacity of 400 pallets at -18°C",
  },
  {
    godina: "2012",
    text: "Otvorena poslovnica i distributivni centar Dubrovnik",
    textEng: "Opened a branch and distribution center in Dubrovnik",
  },
  {
    godina: "2013",
    text: "Otvorena poslovnica Rijeka",
    textEng: "Opened a branch in Rijeka",
  },
  {
    godina: "2014",
    text: "Početak proizvodnje – ostavljena linija za obradu glavonožaca",
    textEng:
      "Start of production – established a line for processing cephalopods",
  },
  {
    godina: "2015",
    text: "Razvoj linije mariniranih i delikatesnih proizvoda",
    textEng: "Development of the line of marinated and delicatessen products",
  },
  {
    godina: "2016",
    text: "Izvoz na tržišta: Španjolske, Slovenije, Italije, Njemačke, Crne Gore i Novog Zelanda",
    textEng:
      "Export to markets: Spain, Slovenia, Italy, Germany, Montenegro, and New Zealand",
  },
  {
    godina: "2017",
    text: "Potpisan ugovor o distribuciji proizvodnog programa s novozelandskim partnerom",
    textEng:
      "Signed a distribution agreement for the production program with a New Zealand partner",
  },
  {
    godina: "2019",
    text: "Početak izgradnje novog proizvodno-logističkog centra kapaciteta 2.300 paletnih mjesta na režimu -18°C - Certifikacija ISO 9001",
    textEng:
      "Start of construction of a new production-logistics center with a capacity of 2,300 pallet spaces at -18°C - ISO 9001 Certification",
  },
  {
    godina: "2020",
    text: "Lansiranje Brenda Perla za retail segment. Otvorenje prve Deli Maris fish&chips lokacije",
    textEng:
      "Launch of the Perla brand for the retail segment. Opening of the first Deli Maris fish & chips location",
  },
  {
    godina: "2021",
    text: "Puštanje u rad novih proizvodnih i skladišnih kapaciteta. Razvoj MLS-a, logističkih rješenja u hladnom lancu - Certifikacija ASC/MSC CoC",
    textEng:
      "Commissioning of new production and storage capacities. Development of MLS, logistic solutions in the cold chain - ASC/MSC CoC Certification",
  },
  {
    godina: "2022",
    text: "Jamstveni žig “Živjeti zdravo” - PERLA proizvodi - Certifikacija IFS Food",
    textEng: `Quality seal "Živjeti zdravo" (Live Healthy) - PERLA products - IFS Food Certification`,
  },
];
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

function Povijest() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAll>
      <Container>
        <Title>
          {t.Onama.nasaPovijest}
          <Icon className={` ${inView ? "inViewArrow" : "outViewArrow"}`}>
            <IoIosArrowForward size={24} />
          </Icon>
        </Title>
        <WrapEvents
          ref={ref}
          className={` ${inView ? "inViewHistory" : "outViewHistory"}`}
        >
          {events.map((event, index) => (
            <Dogadjaj
              key={index}
              godina={event.godina}
              text={locale === "hr" ? event.text : event.textEng}
            />
          ))}
        </WrapEvents>
      </Container>
    </WrapAll>
  );
}

export default Povijest;
