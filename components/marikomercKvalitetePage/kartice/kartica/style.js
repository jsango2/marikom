import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  min-height: 317px;
  height: auto;
  width: 700px;
  overflow: hidden;
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  background: #f5faff;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */

  margin: 10px;
  border-radius: 5px;
  @media only screen and (max-width: 850px) {
    padding: 30px 0 20px 0;
    min-height: 257px;
    /* height: 556px; */
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 11;
  height: auto;
  max-width: 1450px;
  width: 90%;
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */

  @media only screen and (max-width: 850px) {
    /* height: 556px; */
  }
`;
export const WrapText = styled.div`
  position: relative;
  z-index: 11;
  height: auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  padding-bottom: 50px;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */

  @media only screen and (max-width: 850px) {
    padding: 0 0 20px 0;

    /* height: 556px; */
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 0;
  height: auto;
  min-height: 300px;
  width: 577px;
  background-color: grey;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 850px) {
    /* height: 556px; */
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(123, 127, 134, 0.1) 0%,
    rgba(242, 242, 242, 0) 100%
  );
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 850px) {
    /* height: 556px; */
  }
`;
export const UpTitle = styled.h3`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;

  /* Black */
  color: #161722;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h2`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  /* MK Plava */

  color: #1c2640;
  margin-bottom: 25px;
  @media only screen and (max-width: 1250px) {
    width: 90%;
    font-size: 40px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    line-height: 120%;
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  color: #000000;
  width: 100%;
  margin-bottom: 0px;
  @media only screen and (max-width: 1250px) {
    font-size: 14px;
    width: 90%;
  }
`;
export const Li = styled.p`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  color: #000000;
  width: 494px;
  @media only screen and (max-width: 1250px) {
    font-size: 14px;
    width: 90%;
  }
`;
export const Number = styled.h1`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 900;
  font-size: 160px;
  line-height: 120%;
  /* identical to box height, or 192px */

  text-align: right;
  text-transform: uppercase;

  /* SUNRISE/Light Coral */

  color: #b5d3e3;
  margin: 0;
  top: 37px;
  left: -80px;
  width: 131px;
  @media only screen and (max-width: 1250px) {
    /* font-size: 14px;
    width: 90%; */
  }
`;
