import {
  WrapAll,
  WrapTitle,
  BlueLine,
  Container,
  WrapTitleSubTitle,
  Title,
  SubTitle,
  WrapCards,
} from "./style.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import slugify from "slugify";
import { News } from "../page/style.js";
import NewsCard from "../page/newsCardPage/index.js";

function OtherNews({ novosti }) {
  const [ostaleNovosti, setOstaleNovosti] = useState([]);
  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  useEffect(() => {
    const getSlug = window.location.pathname.split("/").pop();
    const getOtherNews = novosti.edges.filter((n) =>
      locale === "en"
        ? slugify(
            n.node.novosti.naslovEng.toLowerCase().split(" ").join("-") +
              "-" +
              n.node.novosti.datum.split("/").join("-"),
            {
              locale: "eng",
              strict: true,
            }
          ) != getSlug
        : slugify(
            n.node.novosti.naslov.toLowerCase().split(" ").join("-") +
              "-" +
              n.node.novosti.datum.split("/").join("-"),
            {
              locale: "hrv",
              strict: true,
            }
          ) != getSlug
    );
    setOstaleNovosti(getOtherNews);
  }, []);

  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      <Container>
        <WrapTitle>
          <BlueLine />
          <Title>{t.OtherNews.OtherNews}</Title>
        </WrapTitle>
        <News>
          {ostaleNovosti.slice(0, 3).map((card) => (
            <NewsCard
              key={card.node.id}
              datum={card.node.novosti.datum}
              naslov={
                locale === "hr"
                  ? card.node.novosti.naslov
                  : card.node.novosti.naslovEng
              }
              text={
                locale === "hr"
                  ? card.node.novosti.textNovosti
                  : card.node.novosti.textNovostiEng
              }
              link={
                locale === "hr"
                  ? slugify(
                      card.node.novosti.naslov
                        .toLowerCase()
                        .split(" ")
                        .join("-") +
                        "-" +
                        card.node.novosti.datum.split("/").join("-"),
                      {
                        locale: "hrv",
                        strict: true,
                      }
                    )
                  : slugify(
                      card.node.novosti.naslovEng
                        .toLowerCase()
                        .split(" ")
                        .join("-") +
                        "-" +
                        card.node.novosti.datum.split("/").join("-"),
                      {
                        locale: "eng",
                        strict: true,
                      }
                    )
              }
              isFeatured={false}
              photo={card.node.novosti.istaknutaFotografija.sourceUrl}
            />
          ))}
        </News>
      </Container>
    </WrapAll>
  );
}

export default OtherNews;
