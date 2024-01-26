import {
  WrapAll,
  TextBox,
  UpTitle,
  Title,
  Text,
  SmallText,
  Overlay,
  WrapImages,
  Img1,
  Img2,
  Img3,
  Img4,
  WrapContent,
} from "./style.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { TitleH4 } from "../vrijednost/style.js";

function Zajednica() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <WrapContent>
        <TextBox>
          <TitleH4>{t.Onama.radUzajednici}</TitleH4>
          <Title>{t.Onama.naslovPodrzavamo}</Title>
          <Text>{t.Onama.textPodrzavamo}</Text>
        </TextBox>

        <WrapImages>
          <Img1>
            <Overlay />
            <SmallText>{t.Onama.card1}</SmallText>{" "}
          </Img1>
          <Img2>
            <Overlay />
            <SmallText>{t.Onama.card2}</SmallText>
          </Img2>
          <Img3>
            <Overlay />
            <SmallText>{t.Onama.card3}</SmallText>
          </Img3>
          <Img4>
            <Overlay />
            <SmallText>{t.Onama.card4}</SmallText>
          </Img4>
        </WrapImages>
      </WrapContent>
    </WrapAll>
  );
}

export default Zajednica;
