import React, { useState, useEffect, useContext } from "react";

import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { getAllOglasi, getAllOglasiNaslovi } from "../../lib/api2";
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
} from "../../components/Karijere/SingleKarijera/style.js";
import AppContext from "../../components/AppContext.js";
import { BlueLine } from "../../components/NovostiSection/newsCard/style.js";
import parse from "html-react-parser";
import slugify from "slugify";

import Head from "next/head.js";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import Formular from "../../components/Karijere/SingleKarijera/Formular/index.js";
import AdSection from "../../components/karijere/komponente/AdSection/index.js";

export default function News({ pageData, params, oglasiNaslovi, oglasi }) {
  const { locale, locales, defaultLocale, asPath, basePath } = useRouter();
  const t = locale === "en" ? en : hr;

  const karijera = pageData.node.oglasi;
  console.log("Oglasi u 1 oglasu", oglasi);
  return (
    <Layout oglasiNaslovi={oglasiNaslovi.edges}>
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
            <Data>
              {t.Karijere.datumObjave}: {karijera.natjecajTrajeDo}
            </Data>
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
  const oglasi = await getAllOglasi();

  const paths = [];

  oglasi.edges.map((post, i) => {
    return locales.map((locale) => {
      return paths.push({
        params: {
          slug: slugify(
            post.node.oglasi.naslovOglasa.toLowerCase().split(" ").join("-") +
              "-" +
              post.node.id,
            { locale: "hrv" }
          ),
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
            post.node.oglasi.naslovOglasaEng
              .toLowerCase()
              .split(" ")
              .join("-") +
            "-" +
            post.node.id,
        },
        locale: "en",
      });
    });
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const oglasi = await getAllOglasi();
  // const novostiNaslovi = await getAllNovostiNaslovi();
  const oglasiNaslovi = await getAllOglasiNaslovi();

  const currentPath = params.slug;
  const pageData = oglasi.edges.find(
    (data) =>
      slugify(
        data.node.oglasi.naslovOglasa.toLowerCase().split(" ").join("-") +
          "-" +
          data.node.id,
        {
          locale: "hrv",
        }
      ) === currentPath ||
      data.node.oglasi.naslovOglasaEng.toLowerCase().split(" ").join("-") +
        "-" +
        data.node.id ===
        currentPath
  ) || {
    notfound: true,
  };
  return {
    props: { oglasi, params, pageData, oglasiNaslovi },
  };
}
