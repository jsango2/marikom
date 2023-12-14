import {
  WrapAll,
  Container,
  Title,
  Text,
  Datum,
  ViseInfo,
  BlueLine,
  LinkInfo,
} from "./style.js";
import ArrowRight from "../../../svg/arrowRight.svg";
import Link from "next/link";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import slugify from "slugify";

function NewsCard({ datum, naslov, naslovEng, text, link }) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <BlueLine />
      <Datum>{datum}</Datum>
      <Title>{naslov}</Title>
      <Text
        dangerouslySetInnerHTML={{
          __html: [text.slice(0, 100) + "..."],
        }}
      ></Text>
      <ViseInfo>
        <LinkInfo
          href={
            locale === "hr" ? `/novosti/${slugify(link)}` : `/novosti/${link}`
          }
        >
          {t.MoreInfo.MoreInfo}
        </LinkInfo>
        <ArrowRight />
      </ViseInfo>
      {/* <ViseInfo>
        <LinkInfo href={`novosti/${link}`}>{t.MoreInfo.MoreInfo}</LinkInfo>
        <ArrowRight />
      </ViseInfo> */}
    </WrapAll>
  );
}

export default NewsCard;
