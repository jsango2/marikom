import { news } from "../../news";
import NewsCard from "./newsCard/index";
import {
  WrapAll,
  Container,
  WrapTitleSubTitle,
  Title,
  SubTitle,
  WrapCards,
} from "./style.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useRouter } from "next/router.js";
import slugify from "slugify";

function NovostiSection({ background, novosti }) {
  const router = useRouter();
  const { locale } = router;
  // console.log(novosti);
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll background={background}>
      <Container>
        <WrapTitleSubTitle href="/novosti">
          <Title>{t.NewsSectionHomePage.News}</Title>
          <SubTitle>/ {t.NewsSectionHomePage.Archive}</SubTitle>
        </WrapTitleSubTitle>
        <WrapCards>
          {novosti.slice(0, 3).map((n) => (
            <NewsCard
              key={n.node.id}
              datum={n.node.novosti.datum}
              naslov={
                locale === "hr"
                  ? n.node.novosti.naslov
                  : n.node.novosti.naslovEng
              }
              text={n.node.novosti.textNovosti}
              link={
                locale === "hr"
                  ? `${slugify(
                      n.node.novosti.naslov.toLowerCase().split(" ").join("-")
                    )}` +
                    "-" +
                    n.node.novosti.datum.split("/").join("-")
                  : `${slugify(
                      n.node.novosti.naslovEng
                        .toLowerCase()
                        .split(" ")
                        .join("-")
                    )}` +
                    "-" +
                    n.node.novosti.datum.split("/").join("-")
              }
            />
          ))}
        </WrapCards>
      </Container>
    </WrapAll>
  );
}

export default NovostiSection;
