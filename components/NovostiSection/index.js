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

function NovostiSection({ background }) {
  return (
    <WrapAll background={background}>
      <Container>
        <WrapTitleSubTitle>
          <Title>Novosti</Title>
          <SubTitle>/ Arhiva novosti</SubTitle>
        </WrapTitleSubTitle>
        <WrapCards>
          {news.slice(0, 3).map((card) => (
            <NewsCard
              key={card.naslov}
              datum={card.datum}
              naslov={card.naslov}
              text={card.text}
              link={card.link}
            />
          ))}
        </WrapCards>
      </Container>
    </WrapAll>
  );
}

export default NovostiSection;
