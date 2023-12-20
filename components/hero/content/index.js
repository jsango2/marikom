import React from "react";

import {
  Title,
  SubTitle,
  WrapText,
  WrapSliderContent,
  WrapImage,
  Icon,
  Broj,
  Linija,
} from "../style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";

function Content() {
  const size = useWindowSize();
  // const t = useTranslations("Index");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <div>
      <WrapSliderContent>
        <WrapText>
          <Title>{t.Hero.title}</Title>
          <SubTitle>{t.Hero.description}</SubTitle>
          {/* <Button
                  bgColor="#4299C8"
                  color="#FFFFFF"
                  width="178px"
                  text="Kontaktirajte nas"
                  linkTo="/o-nama"
                /> */}
        </WrapText>
        <WrapImage>
          {/* <Image
            src="https://marence53.files.wordpress.com/2019/04/kosarka-lopta01.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          /> */}
          <video autoPlay muted loop="loop" className="videoHero" playsInline>
            <source src="/HeroVideo.mp4" type="video/mp4" />
          </video>
          <Icon href="https://www.youtube.com/watch?v=JjshNMQqKnU">
            <AiOutlineYoutube size={45} />
          </Icon>
        </WrapImage>
      </WrapSliderContent>
    </div>
  );
}

export default Content;
