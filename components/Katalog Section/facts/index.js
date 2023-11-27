import { WrapAll } from "./style.js";
import Image from "next/image";
import truck from "../../../assets/images/facts/truck.svg";
import bulb from "../../../assets/images/facts/bulb.svg";
import task from "../../../assets/images/facts/task.svg";
import food from "../../../assets/images/facts/food.svg";
import Fact from "./fact.js";

function Facts() {
  return (
    <WrapAll>
      <Fact
        Image={truck}
        title={"DISTRIBUIRAMO VIŠE OD 300 PROIZVODA"}
        text={"U kategorijama svježih, smrznutih i rashlađenih proizvoda."}
      />
      <Fact
        Image={bulb}
        title={"INOVIRAMO"}
        text={
          "Razumijemo nove potrebe profesionalnog ugostiteljstva i konstantno inoviramo fleksibilna i originalna rješenja i proizvode koja odgovaraju potrebama naših potrošača."
        }
      />{" "}
      <Fact
        Image={task}
        title={"JAMČIMO KVALITETU, BRZINU I PERSONALIZIRANU USLUGU"}
        text={
          "Poznajemo povijest naših proizvoda. Imamo objekte, tehnologiju i iskusno osoblje te vam nudimo najbolje iskustvo suradnje."
        }
      />{" "}
      <Fact
        Image={food}
        title={"VOLIMO MEDITERANSKU PREHRANU "}
        text={
          "Mislimo da preradom ribe i plodova mora možemo učiniti jednostavnim za pripremu i uživanju u njenim okusima. S nama, svi mogu pripremati ribu!"
        }
      />
    </WrapAll>
  );
}

export default Facts;
