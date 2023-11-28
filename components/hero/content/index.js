import React from "react";

import {
  Title,
  SubTitle,
  WrapText,
  WrapSliderContent,
  WrapImage,
  Broj,
  Linija,
} from "../style.js";
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

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
          <Image
            src="https://marence53.files.wordpress.com/2019/04/kosarka-lopta01.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </WrapImage>
      </WrapSliderContent>
    </div>
  );
}

export default Content;
