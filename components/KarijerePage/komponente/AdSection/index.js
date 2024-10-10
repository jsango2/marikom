import React, { useEffect } from "react";

import {
  AdSectionActionButton,
  AdSectionAdContainer,
  AdSectionBanner,
  AdSectionHeader,
  AdSectionInnerContainer,
  AdSectionSingleAd,
  AdSectionSpanBodyWrapper,
  AdSectionTab,
  AdSectionTabs,
  AdSectionWrapper,
  SingleAdBodyText,
  SingleAdTitle,
  NemaOglasa,
} from "./style.js";
import { useRouter } from "next/router";
import slugify from "slugify";
import Link from "next/link";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import parse from "html-react-parser";

const AdSection = (oglasi) => {
  const { locale } = useRouter();
  const [currentActiveTab, setCurrentActiveTab] = React.useState(
    locale === "hr" ? "SVE" : "ALL"
  );
  const [prikazaniOglasi, setPrikazaniOglasi] = React.useState([]);
  const sviOglasi = oglasi.oglasi.edges;
  const sveTvrtke = sviOglasi.map((tv) => tv.node.oglasi.tvrtka);
  if (locale === "hr") {
    sveTvrtke.unshift("SVE");
  } else {
    sveTvrtke.unshift("ALL");
  }
  const tvrtke = [...new Set(sveTvrtke)];

  const t = locale === "en" ? en : hr;
  useEffect(() => {
    if (currentActiveTab === "SVE" || currentActiveTab === "ALL") {
      const data = sviOglasi;
      setPrikazaniOglasi(data);
    } else {
      const data = sviOglasi.filter(
        (og) => og.node.oglasi.tvrtka === currentActiveTab
      );
      setPrikazaniOglasi(data);
    }
  }, [currentActiveTab]);

  return (
    <AdSectionWrapper>
      <AdSectionHeader>{t.Karijere.aktivniNatjecaji}</AdSectionHeader>
      <AdSectionTabs>
        {tvrtke.map((tab, index) => (
          <AdSectionTab
            active={currentActiveTab === tab}
            onClick={() => setCurrentActiveTab(tab)}
            key={index}
          >
            {tab}
          </AdSectionTab>
        ))}
      </AdSectionTabs>
      {prikazaniOglasi.length === 0 ? (
        <NemaOglasa>{t.Karijere.nemaAktivnihNatjecaja}</NemaOglasa>
      ) : (
        prikazaniOglasi.map((item, index) => (
          <AdSectionAdContainer key={item.node.id}>
            <AdSectionSingleAd delay={index * 0.75 + 0.75}>
              <AdSectionSpanBodyWrapper>
                <span>{`0${index + 1}`}</span>
                <AdSectionInnerContainer>
                  <SingleAdTitle>
                    <p>{item.node.oglasi.tvrtka}</p>
                    <h2>
                      {locale === "hr"
                        ? item.node.oglasi.naslovOglasa
                        : item.node.oglasi.naslovOglasaEng}
                    </h2>
                  </SingleAdTitle>
                  <SingleAdBodyText>
                    <p>
                      {t.Karijere.trajanjeNatjecaja}{" "}
                      {item.node.oglasi.natjecajTrajeDo}
                    </p>
                    <p>
                      {t.Karijere.mjestoRada} {item.node.oglasi.mjestoRada}
                    </p>
                  </SingleAdBodyText>
                  <AdSectionActionButton>
                    <Link
                      href={
                        locale === "hr"
                          ? `/karijere/${slugify(
                              item.node.oglasi.naslovOglasa
                                .toLowerCase()
                                .split(" ")
                                .join("-") +
                                "-" +
                                item.node.id.toLowerCase(),
                              { locale: "hrv", strict: true, lower: true }
                            )}`
                          : `/karijere/${slugify(
                              item.node.oglasi.naslovOglasaEng
                                .toLowerCase()
                                .split(" ")
                                .join("-") +
                                "-" +
                                item.node.id.toLowerCase(),
                              { locale: "eng", strict: true, lower: true }
                            )}`
                      }
                    >
                      {t.Karijere.pogledajOglasButton}
                    </Link>
                  </AdSectionActionButton>
                </AdSectionInnerContainer>
              </AdSectionSpanBodyWrapper>
              <AdSectionBanner
                logosource={
                  item.node.oglasi.tvrtka === "Marikomerc"
                    ? "/karijereLogo//marikomerc.png"
                    : item.node.oglasi.tvrtka === "MLS"
                    ? "/karijereLogo//MLS.png"
                    : "/karijereLogo//diMaris.png"
                }
              />
              <AdSectionBanner />
            </AdSectionSingleAd>
          </AdSectionAdContainer>
        ))
      )}
    </AdSectionWrapper>
  );
};

export default AdSection;
