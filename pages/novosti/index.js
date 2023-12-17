import React from "react";
import Layout from "../../components/layout";
import {
  Container,
  FeaturedNews,
  News,
  Left,
  Right,
} from "../../components/NovostiSection/page/style.js";
import { news } from "../../news";
import NewsCard from "../../components/NovostiSection/page/newsCardPage";
import { getAllNovosti, getAllNovostiNaslovi } from "../../lib/api2.js";
import Image from "next/image.js";
import { useRouter } from "next/router.js";
import slugify from "slugify";
import { catalogData } from "../../catalogData.js";

function index(props) {
  const catDat = catalogData.map(
    (item) => item["IME PROIZVODA - do 60 znakova"]
  );

  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const novosti = props.novosti.edges;

  console.log("Test", props);
  // pronađi istaknutu novost
  const sortNovostyByDate = novosti.sort((a, b) => {
    return Math.abs(
      new Date(a.node.novosti.datum) - new Date(b.node.novosti.datum)
    );
  });

  const featuredNovost = sortNovostyByDate.filter(
    (n) => n.node.novosti.istaknutaNovost === true
  );
  // sve novosti osim istaknute
  const otherNovosti = novosti.filter(
    (n) => n.node.novosti.naslov != featuredNovost[0].node.novosti.naslov
  );

  // na stranici /novosti   prikaži featured novost (zadnja novost označena u cms-u kao Featured ili istaknuta)
  // nakon toga prikaži ostale novosti ali bez ove koja je featured(napraviti treba)
  return (
    <Layout>
      <Container>
        {featuredNovost && (
          <FeaturedNews>
            <Left>
              <Image
                src={
                  featuredNovost[0].node.novosti.istaknutaFotografija.sourceUrl
                }
                layout="fill"
                objectFit="cover"
              />
            </Left>
            <Right>
              <NewsCard
                datum={featuredNovost[0].node.novosti.datum}
                naslov={
                  locale === "hr"
                    ? featuredNovost[0].node.novosti.naslov
                    : featuredNovost[0].node.novosti.naslovEng
                }
                text={
                  locale === "hr"
                    ? featuredNovost[0].node.novosti.textNovosti
                    : featuredNovost[0].node.novosti.textNovostiEng
                }
                link={
                  locale === "hr"
                    ? slugify(
                        featuredNovost[0].node.novosti.naslov
                          .toLowerCase()
                          .split(" ")
                          .join("-") +
                          "-" +
                          featuredNovost[0].node.novosti.datum
                            .split("/")
                            .join("-"),
                        { locale: "hrv" }
                      )
                    : slugify(
                        featuredNovost[0].node.novosti.naslovEng
                          .toLowerCase()
                          .split(" ")
                          .join("-") +
                          "-" +
                          featuredNovost[0].node.novosti.datum
                            .split("/")
                            .join("-")
                      )
                }
                isFeatured
              />
            </Right>
          </FeaturedNews>
        )}

        <News>
          {otherNovosti.map((card) => (
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
                      { locale: "hrv" }
                    )
                  : slugify(
                      card.node.novosti.naslovEng
                        .toLowerCase()
                        .split(" ")
                        .join("-") +
                        "-" +
                        card.node.novosti.datum.split("/").join("-")
                    )
              }
              isFeatured={false}
              photo={card.node.novosti.istaknutaFotografija.sourceUrl}
            />
          ))}
        </News>
      </Container>
    </Layout>
  );
}

export default index;

// export async function getStaticProps({ preview = false }) {
//   const novosti = await getAllNovosti(preview);
//   return {
//     props: { novosti, preview },
//   };
// }

export async function getStaticProps({ locales }) {
  const novosti = await getAllNovosti();

  const paths = [];
  novosti.edges.map((post, i) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          slug:
            post.node.novosti.naslov.toLowerCase().split(" ").join("-") +
            "-" +
            post.node.novosti.datum.split("/").join("-"),
        },
        locale,
      });
    });
  });

  novosti.edges.map((post, i) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          slug:
            post.node.novosti.naslovEng.toLowerCase().split(" ").join("-") +
            "-" +
            post.node.novosti.datum.split("/").join("-"),
        },
        locale,
      });
    });
  });

  // pathsAllHr.push({
  //   params: {
  //     slug: novostiNaslovHr.toLowerCase().split(" ").join("-"),
  //   },
  // });
  // pathsAllEng.push({
  //   params: {
  //     slug: novostiNaslovEng.toLowerCase().split(" ").join("-"),
  //   },
  // });

  // locales.forEach((locale, i) => {
  //   novosti.edges.forEach((post, i) => {
  //     paths.push({
  //       params: {
  //         slugHr: post.node.novosti.naslov.toLowerCase().split(" ").join("-"),
  //         slugEn: post.node.novosti.naslovEng
  //           .toLowerCase()
  //           .split(" ")
  //           .join("-"),
  //       },
  //       locale,
  //     });

  //     // paths.push({
  //     //   hrnovosti: post.node.novosti.naslov.toLowerCase().split(" ").join("-"),
  //     //   ennovosti: post.node.novosti.naslovEng.toLowerCase().split(" ").join("-"),
  //     // });
  //   });
  // });

  return {
    props: {
      paths: paths,

      fallback: false,
      novosti,
    },
  };
}
