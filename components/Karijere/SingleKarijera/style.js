import styled from "styled-components";

export const FeaturedImage = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-width: 1440px;
  height: 370px;
  /* align-items: center; */
  /* overflow: hidden; */
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    min-width: unset;
    height: 320px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  width: 1080px;
  min-width: 1080px;
  margin: 0 auto;

  padding-top: 34px;
  @media only screen and (max-width: 1080px) {
    width: 95%;
    min-width: unset;
  }
`;
export const Data = styled.div`
  position: relative;
  z-index: 10;
  margin-right: 30px;
  height: 40px;
  width: auto;
  color: #1c2640;
  padding: 5px 22px;
  background-color: #c0e0eb69;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    height: 30px;

    /* width: 100%; */
    padding: 0 20px;
    margin-right: auto;
    margin-bottom: 5px;
    padding: 5px 22px;
  }
`;
export const Text = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);
  /* P */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 30px;
  @media only screen and (max-width: 630px) {
  }
`;
export const MaliNaslov = styled.h4`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);

  /* H4 */
  font-family: Roboto;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 25.2px */
  text-transform: uppercase;
  @media only screen and (max-width: 630px) {
  }
`;
export const Formular = styled.div`
  position: relative;
  z-index: 10;
  height: 520px;
  width: 70%;
  margin: 0 auto;

  background: linear-gradient(
    180deg,
    rgba(199, 199, 199, 0.1) 0%,
    rgba(242, 242, 242, 0) 100%
  );
  @media only screen and (max-width: 630px) {
  }
`;

export const WrapText = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  @media only screen and (max-width: 1080px) {
    width: 90%;
  }
  @media only screen and (max-width: 650px) {
    width: 95%;

    flex-direction: column;
  }
`;
export const OpisPosla = styled.div`
  position: relative;
  z-index: 10;
  width: 48%;
  @media only screen and (max-width: 650px) {
    width: 90%;
  }
`;
export const UvjetiPonuda = styled.div`
  position: relative;
  z-index: 10;
  width: 48%;
  @media only screen and (max-width: 650px) {
    width: 90%;
  }
`;
export const Uvjeti = styled.div`
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 630px) {
  }
`;
export const StoNudimo = styled.div`
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 630px) {
  }
`;
export const NaslovOglasa = styled.h1`
  position: relative;
  z-index: 10;
  width: 100%;
  color: var(--color-boja-marikomerc-plava);
  /* H1 */
  font-family: Roboto;
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 66px */
  text-transform: uppercase;
  margin-bottom: 15px;
  @media only screen and (max-width: 630px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 30px;
  }
`;
export const WrapDataOglasa = styled.div`
  position: relative;
  z-index: 10;

  /* align-items: center; */
  /* overflow: hidden; */
  margin: 0 auto;
  display: flex;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    margin: 0;
  }
  @media only screen and (max-width: 630px) {
    margin-top: 0;
  }
`;
