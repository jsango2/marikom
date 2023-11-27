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
    padding: 100px 0 70px 70px;
  }
  @media only screen and (max-width: 850px) {
    padding: 0 0 70px 0;

    /* height: 556px; */
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
  font-family: "Roboto";
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
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const HeroTitle = styled.h1`
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapSliderContent = styled.div`
  display: flex !important;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;

  @media only screen and (max-width: 850px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapText = styled.div`
  width: 520px;

  @media only screen and (max-width: 1100px) {
    padding-right: 25px;
  }
  @media only screen and (max-width: 850px) {
    width: 90%;
    padding-left: 27px;
    padding-top: 60px;
  }
`;
export const WrapImage = styled.div`
  position: relative;
  width: 625px;
  height: 416px;
  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 50vw;
    min-height: 300px;
    max-height: 780px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Broj = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 200px;
  height: 30px;
  color: #4299c8;
  opacity: 0.5;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #1c2640;
  opacity: 0.3;

  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Linija = styled.div`
  position: relative;
  width: 50px;
  height: 1px;
  background-color: #4299c8;
  margin-right: 54px;
  opacity: 0.5;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  @media only screen and (max-width: 1200px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const SubTitle = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  letter-spacing: 0.175px;

  /* SUNRISE/Sunray */

  color: #f5faff;

  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 45px;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
