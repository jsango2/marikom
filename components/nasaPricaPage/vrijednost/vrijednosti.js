import {
  WrapAll,
  TextBox,
  UpTitle,
  Title,
  Text,
  WrapIcons,
  Icon,
  WrapImages,
  Img1,
  Img2,
  Img3,
  Img4,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/1.png";
import img2 from "../../../assets/images/nasaPrica/2.png";
import img3 from "../../../assets/images/nasaPrica/3.png";
import img4 from "../../../assets/images/nasaPrica/4.png";

function Vrijednosti() {
  return (
    <WrapAll>
      <TextBox>
        <UpTitle>PRIRODNO, ODRŽIVO I INOVATIVNO</UpTitle>
        <Title>VRIJEDNOSTI KOJE NAS DEFINIRAJU</Title>
        <Text>
          Kvalitetni morski proizvodi su naša filozofija, naš brend i naša
          obveza prema vama. Vodeći se time, ostvarili smo jake veze sa našim
          partnerima te se na tržištu pozicionirali kao stabilno poduzeće sa
          kvalitetnim proizvodima u koje možete imati potpuno povjerenje.
        </Text>
      </TextBox>
      <WrapIcons>
        <Icon>
          <Image
            src="/IkoneNasaPrica/1.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Icon>
        <Icon>
          <Image
            src="/IkoneNasaPrica/2.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Icon>{" "}
        <Icon>
          <Image
            src="/IkoneNasaPrica/3.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Icon>{" "}
        <Icon>
          <Image
            src="/IkoneNasaPrica/4.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Icon>{" "}
        <Icon>
          <Image
            src="/IkoneNasaPrica/5.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Icon>{" "}
        <Icon>
          <Image
            src="/IkoneNasaPrica/6.svg"
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Icon>
      </WrapIcons>
      <WrapImages>
        <Img1>
          {" "}
          <Image
            src={img1}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img1>
        <Img2>
          {" "}
          <Image
            src={img2}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img2>
        <Img3>
          {" "}
          <Image
            src={img3}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img3>
        <Img4>
          {" "}
          <Image
            src={img4}
            // width={157}
            // height={244}
            layout="fill"
            alt="p1"
          />
        </Img4>
      </WrapImages>
    </WrapAll>
  );
}

export default Vrijednosti;
