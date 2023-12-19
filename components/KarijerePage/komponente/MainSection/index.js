import React from "react";
import {
  Breadcrumbs,
  InnerWrapper,
  MainSectionWrapper,
  SectionBodyText,
  SectionBreadcrumbsWrapper,
  SectionHeadlineSpan,
  SectionHeadlineText,
  SectionImages,
  SectionSvgOne,
  SectionSvgTwo,
} from "./style";
import { useObserver } from "../../../helper/utils/hooks/useObserver";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const MainSection = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  const mainSectionRef = React.useRef();
  const isEntryIntersecting = useObserver(mainSectionRef, {
    rootMargin: "200px",
    treshold: 0.5,
  });
  return (
    <MainSectionWrapper>
      <SectionBreadcrumbsWrapper>
        <SectionHeadlineSpan />
        <Breadcrumbs>
          <p>{t.Karijere.karijere}</p>
        </Breadcrumbs>
        <SectionHeadlineText>
          <h2>{t.Karijere.naslov}</h2>
        </SectionHeadlineText>
      </SectionBreadcrumbsWrapper>

      <InnerWrapper ref={mainSectionRef}>
        <SectionBodyText>{parse(t.Karijere.text)}</SectionBodyText>
        <SectionImages isIntersecting={isEntryIntersecting} />

        <SectionSvgOne />
        <SectionSvgTwo />
      </InnerWrapper>
    </MainSectionWrapper>
  );
};

export default MainSection;
