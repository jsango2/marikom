import React from 'react';

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
} from './style';
import staticAds from './staticAd.json';
const TabArray = [
  { title: 'SVE', id: 0 },
  { title: 'MARIKOMERC', id: 1 },
  { title: 'DI MARIS', id: 2 },
  { title: 'MLS LOGISTICS', id: 3 },
];

const AdSection = () => {
  const [currentActiveTab, setCurrentActiveTab] = React.useState(0);

  const parseDataForRender = () => {
    if (currentActiveTab === 0) {
      return staticAds.map((item, index) => {
        return (
          <AdSectionSingleAd key={item.naslov} delay={index * 0.75 + 0.75}>
            <AdSectionSpanBodyWrapper>
              <span>{`0${index + 1}`}</span>
              <AdSectionInnerContainer>
                <SingleAdTitle>
                  <p>{item.imeFirme}</p>
                  <h2>{item.naslov}</h2>
                </SingleAdTitle>
                <SingleAdBodyText>
                  <p>Trajanje natječaja do: {item.datum}</p>
                  <p>Mjesto rada: {item.mjestoRada}</p>
                </SingleAdBodyText>
                <AdSectionActionButton>Pogledaj oglas</AdSectionActionButton>
              </AdSectionInnerContainer>
            </AdSectionSpanBodyWrapper>
            <AdSectionBanner logosource={item.logoSource} />
          </AdSectionSingleAd>
        );
      });
    } else {
      return staticAds
        .filter((item) => item.id === currentActiveTab.toString())
        .map((single, index) => (
          <AdSectionSingleAd key={single.naslov} delay={index * 0.25 + 0.25}>
            <AdSectionSpanBodyWrapper>
              <span>{`0${index + 1}`}</span>
              <AdSectionInnerContainer>
                <SingleAdTitle>
                  <p>{single.imeFirme}</p>
                  <h2>{single.naslov}</h2>
                </SingleAdTitle>
                <SingleAdBodyText>
                  <p>Trajanje natječaja do: {single.datum}</p>
                  <p>Mjesto rada: {single.mjestoRada}</p>
                </SingleAdBodyText>
                <AdSectionActionButton>Pogledaj oglas</AdSectionActionButton>
              </AdSectionInnerContainer>
            </AdSectionSpanBodyWrapper>
            <AdSectionBanner logosource={single.logoSource} />
          </AdSectionSingleAd>
        ));
    }
  };

  return (
    <AdSectionWrapper>
      <AdSectionHeader>TRENUTNO AKTIVNI NATJEČAJI</AdSectionHeader>
      <AdSectionTabs>
        {TabArray.map((tab, index) => (
          <AdSectionTab active={currentActiveTab === index} onClick={() => setCurrentActiveTab(index)} key={index}>
            {tab.title}
          </AdSectionTab>
        ))}
      </AdSectionTabs>
      <AdSectionAdContainer>{parseDataForRender()}</AdSectionAdContainer>
    </AdSectionWrapper>
  );
};

export default AdSection;
