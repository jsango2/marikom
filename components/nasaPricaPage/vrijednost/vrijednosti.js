import {
  WrapAll,
  TextBox,
  UpTitle,
  Title,
  Text,
  WrapIcon,
  WrapIcons,
  Icon,
  IconText,
  WrapImages,
  Img1,
  Img2,
  Img3,
  Img4,
  WrapContent,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";
import img1 from "../../../assets/images/nasaPrica/1.png";
import img2 from "../../../assets/images/nasaPrica/2.png";
import img3 from "../../../assets/images/nasaPrica/3.png";
import img4 from "../../../assets/images/nasaPrica/4.png";
import { TitleH2, TitleH4 } from "../../../styles/globalStyle.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

function Vrijednosti() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <WrapContent>
        <TextBox>
          <TitleH4>{t.Onama.prirodno}</TitleH4>
          <Title>{t.Onama.vrijednosti}</Title>
          <Text>{t.Onama.text2}</Text>
        </TextBox>
        <WrapIcons>
          <WrapIcon>
            <Icon>
              <Image
                src="/IkoneNasaPrica/1.svg"
                // width={157}
                // height={244}
                layout="fill"
                alt="p1"
              />
            </Icon>
            <IconText>{t.Onama.icon1}</IconText>
          </WrapIcon>
          <WrapIcon>
            <Icon>
              <Image
                src="/IkoneNasaPrica/2.svg"
                // width={157}
                // height={244}
                layout="fill"
                alt="p1"
              />
            </Icon>{" "}
            <IconText>{t.Onama.icon2}</IconText>
          </WrapIcon>
          <WrapIcon>
            <Icon>
              <Image
                src="/IkoneNasaPrica/3.svg"
                // width={157}
                // height={244}
                layout="fill"
                alt="p1"
              />
            </Icon>{" "}
            <IconText>{t.Onama.icon3}</IconText>
          </WrapIcon>
          <WrapIcon>
            <Icon>
              <Image
                src="/IkoneNasaPrica/4.svg"
                // width={157}
                // height={244}
                layout="fill"
                alt="p1"
              />
            </Icon>{" "}
            <IconText>{t.Onama.icon4}</IconText>
          </WrapIcon>
          <WrapIcon>
            <Icon>
              <Image
                src="/IkoneNasaPrica/5.svg"
                // width={157}
                // height={244}
                layout="fill"
                alt="p1"
              />
            </Icon>{" "}
            <IconText>{t.Onama.icon5}</IconText>
          </WrapIcon>
          <WrapIcon>
            <Icon>
              <Image
                src="/IkoneNasaPrica/6.svg"
                // width={157}
                // height={244}
                layout="fill"
                alt="p1"
              />
            </Icon>
            <IconText>{t.Onama.icon6}</IconText>
          </WrapIcon>
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
              objectFit="cover"
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
              objectFit="cover"
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
              objectFit="cover"
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
              objectFit="cover"
            />
          </Img4>
        </WrapImages>
      </WrapContent>
    </WrapAll>
  );
}

export default Vrijednosti;
