import React, { useState } from "react";
import {
  Title,
  SubTitle,
  WrapText,
  WrapAll,
  WrapImage,
  Icon,
  Broj,
  Linija,
} from "../style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import useWindowSize from "../../helper/usewindowsize.js";
// import { useTranslations } from "next-intl";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { AiOutlineYoutube } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import FsLightbox from "fslightbox-react";
function Content({ toggleYT }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const size = useWindowSize();
  // const t = useTranslations("Index");
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  console.log(toggleYT);
  return (
    <div>
      <WrapAll>
        <WrapText>
          {/* <Title
            ref={ref}
            className={` ${inView ? "inViewHero" : "outViewHero"}`}
          >
            {parse(t.Hero.title)}
          </Title>
          <SubTitle className={` ${inView ? "inViewHero" : "outViewHero"}`}>
            {t.Hero.description}
          </SubTitle> */}
        </WrapText>
      </WrapAll>
    </div>
  );
}

export default Content;
