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
import { useInView } from "react-intersection-observer";
function NewsCard({ datum, naslov, naslovEng, text, link }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <Link
      href={locale === "hr" ? `/novosti/${slugify(link)}` : `/novosti/${link}`}
    >
      <WrapAll ref={ref} className={` ${inView ? "inView" : "outView"}`}>
        <BlueLine />
        <Datum>{datum}</Datum>
        <Title>{naslov}</Title>
        <Text
          dangerouslySetInnerHTML={{
            __html: [text.slice(0, 100) + "..."],
          }}
        ></Text>
        <ViseInfo>
          <LinkInfo>{t.MoreInfo.MoreInfo}</LinkInfo>
          <ArrowRight className="newsArrow" />
        </ViseInfo>
      </WrapAll>
    </Link>
  );
}

export default NewsCard;
