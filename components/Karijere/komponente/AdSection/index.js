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
} from "./style";
import { useRouter } from "next/router";
import slugify from "slugify";
import Link from "next/link";

const AdSection = (oglasi) => {
  const [currentActiveTab, setCurrentActiveTab] = React.useState("SVE");
  const [prikazaniOglasi, setPrikazaniOglasi] = React.useState([]);
  const sviOglasi = oglasi.oglasi.edges;
  const sveTvrtke = sviOglasi.map((tv) => tv.node.oglasi.tvrtka);
  const sveTvrtke2 = sveTvrtke.unshift("SVE");
  const tvrtke = [...new Set(sveTvrtke)];
  const { locale } = useRouter();

  useEffect(() => {
    if (currentActiveTab === "SVE") {
      const data = sviOglasi;
      setPrikazaniOglasi(data);
    } else {
      const data = sviOglasi.filter(
        (og) => og.node.oglasi.tvrtka === currentActiveTab
      );
      setPrikazaniOglasi(data);
    }
  }, [currentActiveTab]);

  console.log(prikazaniOglasi);

  return (
    <AdSectionWrapper>
      <AdSectionHeader>TRENUTNO AKTIVNI NATJEČAJI</AdSectionHeader>
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
      <AdSectionAdContainer>
        {prikazaniOglasi.map((item, index) => (
          <AdSectionSingleAd key={item.node.id} delay={index * 0.75 + 0.75}>
            <AdSectionSpanBodyWrapper>
              <span>{`0${index + 1}`}</span>
              <AdSectionInnerContainer>
                <SingleAdTitle>
                  <p>{item.node.oglasi.tvrtka}</p>
                  <h2>{item.node.oglasi.naslovOglasa}</h2>
                </SingleAdTitle>
                <SingleAdBodyText>
                  <p>
                    Trajanje natječaja do: {item.node.oglasi.natjecajTrajeDo}
                  </p>
                  <p>Mjesto rada: {item.node.oglasi.mjestoRada}</p>
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
                              item.node.id,
                            { locale: "hrv" }
                          )}`
                        : `/karijere/${
                            item.node.oglasi.naslovOglasaEng
                              .toLowerCase()
                              .split(" ")
                              .join("-") +
                            "-" +
                            item.node.id
                          }`
                    }
                  >
                    Pogledaj oglas
                  </Link>
                </AdSectionActionButton>
              </AdSectionInnerContainer>
            </AdSectionSpanBodyWrapper>
            <AdSectionBanner
              logosource={item.node.oglasi.fotografija.sourceUrl}
            />
            <AdSectionBanner />
          </AdSectionSingleAd>
        ))}
      </AdSectionAdContainer>
    </AdSectionWrapper>
  );
};

export default AdSection;
