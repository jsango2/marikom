import {
  WrapAll,
  RedLine,
  RedLine2,
  WrapContent,
  Content,
  WrapImage,
  Title,
  Text,
  WrapLokacije,
  Block,
  WrapDiMarisLogo,
  Overlay,
} from "./style.js";
import p1 from "../../assets/images/perla/dimaris.png";
import Sticker from "../../svg/stickerdimaris.svg";
import DiMarisLogo from "../../svg/dimarislogo.svg";

import Image from "next/image";
import Button from "../buttonBlue/Button.js";

function DiMarisSection() {
  return (
    <WrapAll>
      <RedLine />
      <WrapContent>
        <WrapDiMarisLogo>
          <DiMarisLogo />
        </WrapDiMarisLogo>
        <Content>
          <Title>
            Dokaz da ribarnice mogu izgledati drugačije nego očekujete
          </Title>
          <Text>
            Di Maris ribarnice su mjesto gdje ćete ugodno popričati s našim
            prodavačima i gdje možete kupiti sve potebno za pripremu najboljeg
            ručka s okusom mora. <br />
            <br />U ponudi imamo bogatu ponudu ribe i plodova mora, ali i
            svježeg povrća, ribljih delikatesa, rižota, ulja i vina.
            <br />
            <br />
            Nudimo vam iskustvo kupovine najboljeg što more nudi na nov način.
          </Text>
          <WrapLokacije>
            {" "}
            <Block>
              <li>Di Maris Zadar - Gradska Ribarnica 1</li>
              <li>Di Maris Zadar - TC Relja</li>
              <li>Di Maris Zadar - Gradska Ribarnica 2</li>
            </Block>
            <Block>
              <li>Di Maris Zadar - Vatrogasni</li>
              <li>Di Maris Zadar - Maraska park</li>
              <li>Di Maris Biograd - riva</li>
            </Block>
          </WrapLokacije>
          <Button
            bgColor="#4299C8"
            color="#FFFFFF"
            width="298px"
            text="Pogledaj proizvode na AKCIJI"
            linkTo="/o-nama"
          />
        </Content>

        <WrapImage>
          <Overlay />
          <Image src={p1} alt="p1" layout="fill" objectFit="cover" />
          {/* <Sticker
            style={{ position: "absolute", bottom: "-100px", right: "30px" }}
          /> */}
        </WrapImage>
      </WrapContent>
      <RedLine2 />
    </WrapAll>
  );
}

export default DiMarisSection;
