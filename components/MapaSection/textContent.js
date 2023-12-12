import React from "react";
import { WrapTextContetnt, Title, TitleUp, Text } from "./style.js";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
const textContent = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <WrapTextContetnt>
      <TitleUp>{t.Map.topTitle}</TitleUp>
      <Title>{t.Map.title}</Title>

      <Text dangerouslySetInnerHTML={{ __html: t.Map.text }}></Text>
    </WrapTextContetnt>
  );
};

export default textContent;
