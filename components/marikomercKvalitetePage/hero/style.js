import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const HeroWrap = styled.div`
  position: relative;
  z-index: 0;
  min-height: 617px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #253151 0%,
      #101628 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */
  overflow: hidden;
  @media only screen and (max-width: 1400px) {
    /* padding: 100px 0 70px 70px; */
  }
  @media only screen and (max-width: 850px) {
    /* height: 556px; */
    width: 100vw;
    height: 65vw;
    min-height: 270px;
  }
`;
export const ContentWrap = styled.div`
  position: relative;
  z-index: 11;
  height: auto;
  width: 843px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* or 66px */
  padding-top: 100px;
  text-align: center;
  text-transform: uppercase;

  /* SUNRISE/Sunray */

  color: #f5faff;

  /* Small Drop */

  text-shadow: 0px 4px 8px rgba(28, 37, 44, 0.08);
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 850px) {
    padding-top: 0;

    font-size: 36px;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const HeroTitle = styled.h1`
  @media only screen and (max-width: 420px) {
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #1c2640;
  opacity: 0.6;
  top: 0;
  left: 0;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
