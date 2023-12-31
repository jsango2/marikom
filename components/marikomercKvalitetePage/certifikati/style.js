import styled from "styled-components";

export const WrapAllCertifikati = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  /* background: #1c2640; */

  padding: 51px 0;
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
    padding: 0 0 50px 0;
  }
`;
export const WrapCerts = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;

  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const CardText = styled.p`
  position: relative;
  margin-top: 30px;
  color: #f5faff;
  text-align: center;
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  @media only screen and (max-width: 430px) {
    margin-top: 30px;
  }
`;
export const WrapImages = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
    height: 180px;
  }
`;
export const WrapCertImage = styled.div`
  position: relative;
  width: 100%;
  height: 45%;
  max-width: 200px;
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(28, 38, 64, 0.8);
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;
export const WrapSingleCert = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  background-image: url("/kvaliteteCard.webp");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 37px 29px;
  height: 508px;
  width: 300px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 3px;
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
    margin: 10px 0px;
  }
  @media only screen and (max-width: 430px) {
    /* padding-top: 40px;
    height: auto; */
    margin: 10px 0px;
    width: 80vw;
    height: auto;
  }
`;
export const ContentWrap = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1500px;
  height: auto;
  display: flex;
  margin: 0 auto;
  border-radius: 3px;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  /* background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #2b3a63 0%,
    #101628 100%
  ); */
  padding: 80px 0;

  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
    padding: 40px 0;
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

  color: #000000;
  margin: 10px 0 30px 0;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 650px) {
    font-size: 30px;
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
  @media only screen and (max-width: 650px) {
    font-size: 16px;
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
  @media only screen and (max-width: 6500px) {
    font-size: 16px;
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

  @media only screen and (max-width: 1200px) {
    width: 75%;

    padding-top: 40px;
    height: auto;
  }
  @media only screen and (max-width: 850px) {
    width: 90%;
  }
  @media only screen and (max-width: 430px) {
  }
`;
