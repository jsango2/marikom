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
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1440px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background: white;
  /* padding-top: 85px;
  padding-bottom: 105px; */
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
export const SmallText = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 20px;
  width: 80%;
  @media only screen and (max-width: 850px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(12, 21, 49, 0.55) 0.76%,
    rgba(21, 28, 50, 0) 100%
  );
  height: 50%;
  width: 100%;
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapImages = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 100%;
  margin-top: 100px;
  @media only screen and (max-width: 850px) {
  }
`;
export const Img1 = styled.div`
  position: relative;
  z-index: 10;
  height: 479px;
  width: 315px;
  border-radius: 3px;
  background-image: url("/nasaPricaImg1.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
  }
`;
export const Img2 = styled.div`
  position: relative;
  z-index: 10;
  height: 479px;
  width: 315px;
  border-radius: 3px;

  background-image: url("/nasaPricaImg2.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
  }
`;
export const Img3 = styled.div`
  position: relative;

  z-index: 10;
  height: 479px;
  width: 315px;
  border-radius: 3px;

  background-image: url("/nasaPricaImg3.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
  }
`;
export const Img4 = styled.div`
  position: relative;

  z-index: 10;
  height: 479px;
  width: 315px;
  border-radius: 3px;

  background-image: url("/nasaPricaImg4.png");
  background-repeat: no-repeat;
  background-size: cover;
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

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;
  text-transform: uppercase;
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
