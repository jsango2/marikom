import { WrapAll, Cards } from "./style.js";
import Mapa from "./mapa.js";
import TextContent from "./textContent.js";
import Photos from "./photos.js";
import { Card } from "./card/card.js";
import Riba from "../../assets/images/riba.svg";
import Kamion from "../../assets/images/kamion.svg";
import Tabla from "../../assets/images/tabla.svg";
import Zarulja from "../../assets/images/zarulja.svg";
import { useInView } from "react-intersection-observer";

function MapaSection() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <WrapAll>
      <Cards ref={ref}>
        <Card
          inview={` ${inView ? "CardSlideUp" : "Card"}`}
          Grafika={Kamion}
          title="VIŠ OD 10.000 ZADOVOLJNIH PROFESIONALACA"
          text="Zadovoljstvo naših klijenata dokaz je visoke razine naših proizvoda i usluga."
          gradient="1"
        />
        <Card
          inview={` ${inView ? "CardSlideUp" : "Card"}`}
          Grafika={Zarulja}
          title="BRZA LOGISTIČKA RJEŠENJA DILJEM OPSKRBNOG LANCA"
          text="Naša logistička infrastruktura omogućuje nam da u kratkom roku i s visokom preciznošću riješimo i najzahtjevnije logističke izazove."
          gradient="2"
        />
        <Card
          inview={` ${inView ? "CardSlideUp" : "Card"}`}
          Grafika={Tabla}
          title="POSVEĆENOST KVALITETI I INOVACIJAMA"
          text="Stvaramo tržišne trendove, a naši stručnjaci u strogo kontroliraju svaku fazu procesa – od ulova do potrošača."
          gradient="1"
        />
        <Card
          inview={` ${inView ? "CardSlideUp" : "Card"}`}
          Grafika={Riba}
          title="VOLIMO ZDRAVU PREHRANU"
          text="Ljubav prema životu i hrani usmjerava nas i motivira da svojim kupcima omogućimo zdrav i nutritivno bogat oblik prehrane."
          gradient="2"
        />
      </Cards>
      <Mapa />
      <TextContent />
      <Photos />
    </WrapAll>
  );
}

export default MapaSection;
