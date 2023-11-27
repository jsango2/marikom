import { WrapAll, Container, Title, WrapEvents, DashedLine } from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/oNama/image1.png";
import Dogadjaj from "./dogadjaj.js";

const events = [
  {
    godina: "1990",
    text: "Otvorena ribarnica Marikomerc na zadarskoj tržnici sa komorom kapaciteta 8 paleta (-18°C)",
  },
  {
    godina: "2008",
    text: "Izgrađen logističku distributivni centar u Poličniku kapaciteta 400 paleta na -18°C režimu",
  },
  {
    godina: "2012",
    text: "Otvorena poslovnica i distributivni centar Dubrovnik",
  },
  {
    godina: "2013",
    text: "Otvorena poslovnica Rijeka",
  },
  {
    godina: "2014",
    text: "Početak proizvodnje – ostavljena linija za obradu glavonožaca",
  },
  {
    godina: "2015",
    text: "Razvoj linije mariniranih i delikatesnih proizvoda",
  },
  {
    godina: "2016",
    text: "Izvoz na tržišta: Španjolske, Slovenije, Italije, Njemačke, Crne Gore i Novog Zelanda",
  },
  {
    godina: "2017",
    text: "Potpisan ugovor o distribuciji proizvodnog programa s novozelandskim partnerom",
  },
  {
    godina: "2019",
    text: "Početak izgradnje novog proizvodno-logističkog centra kapaciteta 2.300 paletnih mjesta na režimu -18°C - Certifikacija ISO 9001",
  },
  {
    godina: "2020",
    text: "Lansiranje Brenda Perla za retail segment. Otvorenje prve Deli Maris fish&chips lokacije",
  },
  {
    godina: "2021",
    text: "Puštanje u rad novih proizvodnih i skladišnih kapaciteta. Razvoj MLS-a, logističkih rješenja u hladnom lancu - Certifikacija ASC/MSC CoC",
  },
  {
    godina: "2022",
    text: "Jamstveni žig “Živjeti zdravo” - PERLA proizvodi - Certifikacija IFS Food",
  },
];

function Povijest() {
  return (
    <WrapAll>
      <Container>
        <Title>Naša povijest</Title>
        <WrapEvents>
          {events.map((event, index) => (
            <Dogadjaj key={index} godina={event.godina} text={event.text} />
          ))}
        </WrapEvents>
      </Container>
    </WrapAll>
  );
}

export default Povijest;
