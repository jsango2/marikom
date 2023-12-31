import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  background: white;
  padding-top: 55px;
  padding-bottom: 55px;
  @media only screen and (max-width: 1100px) {
    padding-bottom: 0px;
  }
  @media only screen and (max-width: 850px) {
    padding-top: 30px;
    height: auto;
  }
`;

export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1440px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 90px auto 0 auto;
  background-color: white;
  padding: 0 150px;
  @media only screen and (max-width: 1250px) {
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    margin: 0px auto 0 auto;
    padding: 0 30px 0 0px;
    align-content: flex-start;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 580px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 1250px) {
    width: 43%;
    padding-left: 30px;
  }
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-top: 40px;
  }
  @media only screen and (max-width: 550px) {
    padding-left: 20px;
    margin-top: 0px;
  }
`;

export const Photos = styled.div`
  position: relative;
  z-index: 10;
  width: 674px;
  height: 700px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1250px) {
    width: 50%;
  }
  @media only screen and (max-width: 1100px) {
    width: 100vw;
  }
  @media only screen and (max-width: 450px) {
    height: 60vw;
  }
`;
export const WrapPhoto = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin-left: 20px;
  border-radius: 3px;
  overflow: hidden;
  @media only screen and (max-width: 1100px) {
    margin-left: 0px;

    /* width: calc(100% / 3.3); */
  }
  @media only screen and (max-width: 850px) {
    margin-left: 0px;

    /* height: 70vw;
    min-height: 400px; */
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
  margin-bottom: 15px;
  color: #161722;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h2`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  width: 95%;
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
  width: 95%;
  margin-bottom: 40px;
  @media only screen and (max-width: 850px) {
    font-size: 16px;
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
  left: -30px;
  border-radius: 2px;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    left: 5px;
    width: 3px;
  }
`;
