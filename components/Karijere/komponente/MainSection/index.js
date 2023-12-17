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

const MainSection = () => {
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
          <p>Karijere</p>
        </Breadcrumbs>
        <SectionHeadlineText>
          <h2>Više od 150 profesionalaca u službi izvrsnosti</h2>
        </SectionHeadlineText>
      </SectionBreadcrumbsWrapper>

      <InnerWrapper ref={mainSectionRef}>
        <SectionBodyText>
          <p>
            Marikomerc kao gospodarska tvrtka na polju proizvodnje, smrznute
            ribe i ribljih proizvoda kontinuirano radi na poboljšanju poslovanja
            i kvalitete naših proizvoda. Zapošljavamo preko 150 djelatnika, te
            je danas zahvaljujući baš njima postala inovativna i brzorastuća
            tvrtka.
          </p>
          <p>
            U procesu organizacijskih, tehnoloških i inovativnih rješenja
            svakodnevno stavljamo snažni fokus na rast i razvijanje potencijala
            i vještina zaposlenika u poslovanju organizacije.
          </p>
          <p>
            Stoga, u svrhu daljnjeg razvoja zapošljavamo ambiciozne, timski
            orijentirane osobe s relevantnim stručnim kompetencijama i iskustvom
            koje ćemo nastojati obogatiti daljnjim razvitkom prateći trendove u
            poslovanju.
          </p>
          <p>
            Prijavite se na neki od naših aktualnih natječaja koji odgovaraju
            vašem profilu i postanite dio Marikomerc tima.
          </p>
        </SectionBodyText>
        <SectionImages isIntersecting={isEntryIntersecting} />

        <SectionSvgOne />
        <SectionSvgTwo />
      </InnerWrapper>
    </MainSectionWrapper>
  );
};

export default MainSection;
