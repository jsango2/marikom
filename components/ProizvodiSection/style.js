import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  /* overflow: hidden; */
  /* padding-bottom: 50px; */
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapImage2 = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* overflow: hidden; */
  padding-bottom: 20px;
  padding-top: 110px;
  @media only screen and (max-width: 650px) {
    padding-bottom: 0;
    padding-top: 0;
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapCerts = styled.div`
  position: relative;
  z-index: 10;
  width: 657px;
  height: 68px;
  margin-top: 70px;
  margin-bottom: 40px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 20%;

  @media only screen and (max-width: 600px) {
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 11;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* identical to box height, or 66px */

  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 15px;

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 650px) {
    margin: 70px auto 15px auto;
  }
`;

export const Text = styled.h1`
  position: relative;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* or 26px */
  width: 693px;
  text-align: center;

  /* SUNRISE/Sunray */
  margin-bottom: 40px;
  color: #f5faff;
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
    width: 85%;
    max-width: 600px;
  }
  @media only screen and (max-width: 650px) {
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 0px;
  }
`;
