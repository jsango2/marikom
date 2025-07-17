import React, { useState, useEffect, useContext } from "react";
import { catalogData } from "../../catalogData";
import { news } from "../../news";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { getAllNovosti, getNovostById } from "../../lib/api2";
import Image from "next/image";
import {
  FeaturedImage,
  TextSection,
  TitleBlock,
  Content,
  Datum,
  Naslov,
  WrapContent,
  GallerySection,
  GalleryImage,
} from "../../components/NovostiSection/style";
import AppContext from "../../components/AppContext.js";
import { BlueLine } from "../../components/NovostiSection/newsCard/style.js";
import parse from "html-react-parser";
import slugify from "slugify";
import OtherNews from "../../components/NovostiSection/OtherNewsSection/index.js";
import Head from "next/head.js";

export default function News({ pageData, novosti, params }) {
  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const router = useRouter();

  const novost = pageData.novosti;

  const textNovosti =
    locale === "hr" ? novost.textNovosti : novost.textNovostiEng;
  const htmlString = `<div>${textNovosti}</div>`;

  return (
    <Layout novostiNaslovi={novosti.edges}>
      <Head>
        <title> {locale === "hr" ? novost.naslov : novost.naslovEng}</title>
        <link
          rel="canonical"
          href={
            locale === "hr"
              ? `https://marikomerc.hr/novosti/${
                  slugify(novost.naslov.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
              : `https://marikomerc.hr/novosti/${
                  slugify(novost.naslovEng.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
          }
          key="canonical"
        />

        <meta
          property="og:title"
          content={
            locale === "hr"
              ? `Marikomerc - ${novost.naslov}`
              : `Marikomerc - ${novost.naslovEng}`
          }
          key="title"
        />
        <meta
          name="twitter:title"
          content={
            locale === "hr"
              ? `Marikomerc - ${novost.naslov}`
              : `Marikomerc - ${novost.naslovEng}`
          }
        />
        <meta
          name="twitter:description"
          content={
            locale === "hr" ? `${novost.seoOpis}` : `${novost.seoDescription}`
          }
        />
        <meta
          name="twitter:image"
          content={`${novost.istaknutaFotografija.sourceUrl}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content={
            locale === "hr" ? `${novost.seoOpis}` : `${novost.seoDescription}`
          }
          key="desc"
        />
        <meta
          property="og:description"
          content={
            locale === "hr" ? `${novost.seoOpis}` : `${novost.seoDescription}`
          }
        />
        <meta
          property="og:url"
          content={
            locale === "hr"
              ? `https://marikomerc.hr/novosti/${
                  slugify(novost.naslov.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
              : `https://marikomerc.hr/novosti/${
                  slugify(novost.naslovEng.toLowerCase().split(" ").join("-"), {
                    locale: "hrv",
                  }) +
                  "-" +
                  novost.datum.split("/").join("-")
                }`
          }
        />
        <meta
          property="og:image"
          content={`${novost.istaknutaFotografija.sourceUrl}`}
        />
      </Head>
      <FeaturedImage>
        <Image
          src={novost.istaknutaFotografija.sourceUrl}
          layout="fill"
          objectFit="cover"
        ></Image>
      </FeaturedImage>
      <TextSection>
        <WrapContent>
          <TitleBlock>
            <Datum>{novost.datum}</Datum>
            <Naslov>
              {" "}
              {locale === "hr" ? novost.naslov : novost.naslovEng}
            </Naslov>
            <BlueLine />
          </TitleBlock>
          <Content>{parse(htmlString)}</Content>
        </WrapContent>
      </TextSection>
      {novost.gallery !== null && (
        <GallerySection>
          {novost.gallery.map((image) => (
            <GalleryImage>
              <Image src={image.sourceUrl} layout="fill" objectFit="cover" />
            </GalleryImage>
          ))}
        </GallerySection>
      )}
      <OtherNews novosti={novosti} />
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const novosti = await getAllNovosti();

  const paths = [];

  novosti.edges.forEach((post) => {
    // Changed .map to .forEach as we're pushing into an external array
    // Croatian path
    paths.push({
      params: {
        slug:
          slugify(post.node.novosti.naslov.toLowerCase().split(" ").join("-"), {
            locale: "hrv",
            strict: true,
          }) + `-id-${post.node.id}`,
      },
      locale: "hr",
    });

    // English path
    paths.push({
      params: {
        slug:
          slugify(
            post.node.novosti.naslovEng.toLowerCase().split(" ").join("-"),
            {
              locale: "eng",
              strict: true,
            }
          ) + `-id-${post.node.id}`,
      },
      locale: "en",
    });
  });

  return { paths, fallback: false }; // Keep fallback: false or change to true/blocking as needed
}

export async function getStaticProps({ params }) {
  const fullSlug = params.slug;

  const idMatch = fullSlug.match(/-id-(\w+)$/);
  let postId = null;

  if (idMatch && idMatch[1]) {
    postId = idMatch[1];
  }

  const pageData = await getNovostById(postId);

  const novosti = await getAllNovosti();

  const currentPath = params.slug;
  // const pageData = novosti.edges.find(
  //   (data) =>
  //     slugify(
  //       data.node.novosti.naslov.toLowerCase().split(" ").join("-") +
  //         `-id-${data.node.id}`,
  //       {
  //         locale: "hrv",
  //         strict: true,
  //       }
  //     ) === currentPath ||
  //     slugify(
  //       data.node.novosti.naslovEng.toLowerCase().split(" ").join("-") +
  //         `-id-${data.node.id}`,
  //       {
  //         locale: "eng",
  //         strict: true,
  //       }
  //     ) === currentPath
  // ) || {
  //   notfound: true,
  // };
  return {
    props: { pageData, novosti, params },
    // revalidate: 90, // Regenerate the page at most every 30 seconds (optional)
  };
}
