import React from "react";
import Layout from "../../components/layout";
import {
  Container,
  FeaturedNews,
  News,
  Left,
  Right,
} from "../../components/NewsSectionPage/style.js";
import { news } from "../../news";
import NewsCard from "../../components/NewsSectionPage/newsCard";

function index() {
  return (
    <Layout>
      <Container>
        <FeaturedNews>
          <Left>
            <div>PLACEHOLDER</div>
          </Left>
          <Right>
            {news.slice(0, 1).map((card) => (
              <NewsCard
                key={card.naslov}
                datum={card.datum}
                naslov={card.naslov}
                text={card.text}
                link={card.link}
                isFeatured
              />
            ))}
          </Right>
        </FeaturedNews>
        <News>
          {news.slice(1, 5).map((card) => (
            <NewsCard
              key={card.naslov}
              datum={card.datum}
              naslov={card.naslov}
              text={card.text}
              link={card.link}
              isFeatured={false}
            />
          ))}
        </News>
      </Container>
    </Layout>
  );
}

export default index;
