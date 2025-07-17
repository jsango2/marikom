import React, { useState, useEffect, useContext } from "react";

import Layout from "../../components/layout";
import { useRouter } from "next/router";
import {
  getAllOglasi,
  getAllOglasiNaslovi,
  getOglasById,
} from "../../lib/api2";
import Image from "next/image";
import {
  FeaturedImage,
  NaslovOglasa,
  WrapDataOglasa,
  WrapContent,
  Data,
  WrapText,
  OpisPosla,
  UvjetiPonuda,
  Uvjeti,
  StoNudimo,
  MaliNaslov,
  Text,
  WrapAll,
} from "../../components/KarijerePage/SingleKarijera/style.js";

import parse from "html-react-parser";
import slugify from "slugify";

import Head from "next/head.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import Formular from "../../components/KarijerePage/SingleKarijera/Formular/index.js";
import AdSection from "../../components/KarijerePage/komponente/AdSection/index.js";

export default function News({ pageData, oglasiNaslovi, oglasi, pageData2 }) {
  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const t = locale === "en" ? en : hr;

  const karijera = pageData2.oglasi;
  // console.log({ pageData2 });
  return (
    <Layout oglasiNaslovi={oglasi.edges}>
      <WrapAll>
        <FeaturedImage>
          <Image
            src={karijera.fotografija.sourceUrl}
            layout="fill"
            objectFit="cover"
          ></Image>
        </FeaturedImage>
        <WrapContent>
          <NaslovOglasa>
            {locale === "hr" ? karijera.naslovOglasa : karijera.naslovOglasaEng}
          </NaslovOglasa>
          <WrapDataOglasa>
            <Data>
              {t.Karijere.rokPrijave}: {karijera.natjecajTrajeDo}
            </Data>
            {/* <Data>
              {t.Karijere.datumObjave}: {karijera.natjecajTrajeDo}
            </Data> */}
            <Data>{karijera.tvrtka}</Data>
          </WrapDataOglasa>
          <WrapText>
            <OpisPosla>
              <MaliNaslov>{t.Karijere.opisPosla}</MaliNaslov>
              <Text>
                {parse(
                  locale === "hr" ? karijera.opisPosla : karijera.opisPoslaEng
                )}
              </Text>
            </OpisPosla>
            <UvjetiPonuda>
              <MaliNaslov>{t.Karijere.uvjeti}</MaliNaslov>
              <Text>
                {parse(locale === "hr" ? karijera.uvjeti : karijera.uvjetiEng)}
              </Text>
              <MaliNaslov>{t.Karijere.stoNudimo}</MaliNaslov>
              <Text>
                {parse(
                  locale === "hr" ? karijera.stoNudimo : karijera.stoNudimoEng
                )}
              </Text>
            </UvjetiPonuda>
          </WrapText>
        </WrapContent>
        <Formular />
        <AdSection oglasi={oglasi} />
      </WrapAll>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const oglasi = await getAllOglasiNaslovi();

  const paths = [];

  oglasi.edges.map((post, i) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          slug:
            slugify(
              post.node.title,

              { locale: "hrv", strict: true, lower: true }
            ) + `-id-${post.node.id}`,
        },
        locale: "hr",
      });
    });
  });

  oglasi.edges.map((post, i) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          slug:
            slugify(
              post.node.title,

              {
                locale: "eng",
                strict: true,
                lower: true,
              }
            ) + `-id-${post.node.id}`,
        },
        locale: "en",
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const oglasi = await getAllOglasi();

  const fullSlug = params.slug;
  // console.log("fullSlug received in getStaticProps:", fullSlug);
  const idMatch = fullSlug.match(/-id-([\w=]+)$/);
  let postId = null;
  // console.log("IDMATCH:", idMatch);
  if (idMatch && idMatch[1]) {
    postId = idMatch[1];
  }
  // console.log("Extracted postId:", postId);
  const pageData2 = await getOglasById(postId);
  // const locales = ["hr", "en"];
  // const currentPath = params.slug;
  const paths = [];

  // const pageData = oglasi.edges.find(
  //   (data) =>
  //     slugify(
  //       data.node.title,

  //       {
  //         locale: "hrv",
  //         strict: true,
  //         lower: true,
  //       }
  //     ) === currentPath ||
  //     slugify(
  //       data.node.title,

  //       {
  //         locale: "eng",
  //         strict: true,
  //         lower: true,
  //       }
  //     ) === currentPath
  // ) || {
  //   notfound: true,
  // };
  return {
    props: { paths, oglasi, params, pageData2 },
    revalidate: 90,
  };
}
