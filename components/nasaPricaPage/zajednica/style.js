import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background: white;
  padding-top: 85px;
  padding-bottom: 105px;
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
export const TextBox = styled.div`
  position: relative;
  z-index: 10;
  width: 750px;
  height: auto;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
export const WrapIcons = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 80%;
  margin-top: 70px;
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapImages = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  height: 657px;
  width: 80%;
  margin-top: 100px;
  @media only screen and (max-width: 850px) {
  }
`;
export const Img1 = styled.div`
  position: relative;
  z-index: 10;
  height: 537px;
  width: 231px;

  @media only screen and (max-width: 850px) {
  }
`;
export const Img2 = styled.div`
  position: relative;
  top: 90px;
  z-index: 10;
  height: 384px;
  width: 293px;

  @media only screen and (max-width: 850px) {
  }
`;
export const Img3 = styled.div`
  position: relative;
  top: 140px;

  z-index: 10;
  height: 517px;
  width: 390px;

  @media only screen and (max-width: 850px) {
  }
`;
export const Img4 = styled.div`
  position: relative;
  top: 90px;

  z-index: 10;
  height: 384px;
  width: 315px;

  @media only screen and (max-width: 850px) {
  }
`;
export const Icon = styled.div`
  position: relative;
  z-index: 10;
  height: 150px;
  width: 150px;
  @media only screen and (max-width: 850px) {
  }
`;
export const Title = styled.h2`
  position: relative;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;

  color: #000000;
  margin: 10px 0 30px 0;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const UpTitle = styled.h2`
  position: relative;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  color: #000000;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const Text = styled.h2`
  position: relative;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* or 26px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
