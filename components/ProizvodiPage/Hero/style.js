import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 0;
  min-height: 347px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    79.54% 79.54% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1400px) {
    /* padding: 100px 0 70px 70px; */
  }
  @media only screen and (max-width: 850px) {
    /* padding: 0 0 70px 0; */

    /* height: 556px; */
  }
`;

export const HeroTitle = styled.h1`
  position: relative;
  z-index: 20;
  color: var(--color-boja-marikomerc-bijela);
  text-align: center;
  /* H1 */
  font-family: "Roboto Condensed", sans-serif;
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 66px */
  text-transform: uppercase;

  @media only screen and (max-width: 1400px) {
    /* padding: 100px 0 70px 70px; */
  }
  @media only screen and (max-width: 850px) {
    /* padding: 0 0 70px 0; */

    /* height: 556px; */
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 19;
  height: 100%;
  width: 100%;
  opacity: 0.3;
  background: var(--color-boja-marikomerc-plava);
  @media only screen and (max-width: 1400px) {
    /* padding: 100px 0 70px 70px; */
  }
  @media only screen and (max-width: 850px) {
    /* padding: 0 0 70px 0; */

    /* height: 556px; */
  }
`;
