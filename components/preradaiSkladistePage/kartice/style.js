import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  min-height: 617px;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */
  overflow: hidden;
  padding-top: 85px;
  padding-bottom: 50px;
  @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  }
  @media only screen and (max-width: 850px) {
    padding: 0 0 70px 0;

    /* height: 556px; */
  }
`;
export const WrapKartica = styled.div`
  position: relative;
  z-index: 10;
  width: 1266px;
  height: 560px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 60px auto 0 auto;
  &:nth-child(2) {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 1250px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    margin: 20px auto 0 auto;

    &:nth-child(2) {
      flex-direction: column;
    }
    flex-direction: column;
    height: auto;
  }
`;
export const WrapKartica3 = styled(WrapKartica)`
  margin: 200px auto 0 auto;

  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    margin: 40px auto 0 auto;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 552px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;
  @media only screen and (max-width: 1250px) {
    width: 43%;
    padding-left: 30px;
  }
  @media only screen and (max-width: 850px) {
    width: 97%;
    margin-top: 20px;
  }
  @media only screen and (max-width: 550px) {
    padding-left: 20px;
    margin-top: 10px;
  }
`;

export const Photo1 = styled.div`
  position: relative;
  z-index: 10;
  width: 600px;
  height: 451px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  background: ${(props) => `url(${props.bg}) no-repeat center`};
  background-size: cover;
  overflow: hidden;
  border-radius: 5px;
  @media only screen and (max-width: 1250px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 65vw;
    min-height: 250px;
  }
`;
export const Photo2 = styled.div`
  position: relative;
  z-index: 10;
  width: 600px;
  height: 580px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  background: ${(props) => `url(${props.bg}) no-repeat center`};
  background-size: cover;
  overflow: hidden;
  border-radius: 5px;
  @media only screen and (max-width: 1250px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 65vw;
    min-height: 250px;
  }
`;
export const Photo3 = styled.div`
  position: relative;
  z-index: 10;
  width: 600px;
  height: 528px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => `url(${props.bg}) no-repeat center`};
  background-size: cover;
  @media only screen and (max-width: 1250px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;
export const WrapCert = styled.div`
  position: relative;
  z-index: 10;
  width: 100px;
  height: 100px;
  margin: 10px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 850px) {
    margin: 20px;

    width: 60px;
    height: 60px;
  }
`;

export const Overlay = styled.div`
  position: relative;
  z-index: 10;
  width: 383px;
  height: 370px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  align-content: center;
  @media only screen and (max-width: 1250px) {
    width: 50%;
  }
  @media only screen and (max-width: 850px) {
    width: 75vw;
  }
`;
export const UpTitle = styled.div`
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
  margin-bottom: 10px;
  color: #161722;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* or 66px */

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
export const Text = styled.div`
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
  margin-bottom: 40px;
  @media only screen and (max-width: 1250px) {
    font-size: 14px;
    width: 90%;
  }
`;

export const PonudaLink = styled.h4`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 185%;
  /* identical to box height, or 26px */

  /* SUNRISE/Coral */
  width: 207px;
  color: #4299c8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  z-index: 10;
  width: 6px;
  height: 101px;
  background: #4299c8;
  top: 18px;
  left: -20px;
  border-radius: 2px;
  /* overflow: hidden; */
  transition: all 1.5s ease-out;
  transition-delay: 0.8s;
  &.lineInView {
    height: 101px;
  }
  &.lineOutView {
    height: 0px;
  }
  @media only screen and (max-width: 850px) {
    left: 4px;
    width: 3px;
    left: 7px;
  }
`;
