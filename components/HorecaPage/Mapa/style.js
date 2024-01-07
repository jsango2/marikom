import styled from "styled-components";

export const MapaWrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  /* margin-bottom: 100px; */
  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  padding: 280px 0 150px 0;
  background-image: url("/pozadinaKontaktMapa.png");
  background-size: cover;
  @media only screen and (max-width: 850px) {
    padding-top: 0px;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
export const MapaContent = styled.div`
  position: relative;
  z-index: 11;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  padding: 90px 0px;
  @media only screen and (max-width: 1300px) {
    padding: 70px 0px;
    flex-direction: column-reverse;
    align-items: center;
  }
  @media only screen and (max-width: 850px) {
    padding: 0px 0px;
    flex-direction: column;
  }
`;
export const MapaWrapKarta = styled.div`
  position: relative;
  z-index: 11;
  width: 980px;
  height: 830px;
  background-image: url("/mapa.png");
  top: -150px;
  border-radius: 3px;
  background-size: cover;
  @media only screen and (max-width: 1300px) {
    top: 0px;
  }
  @media only screen and (max-width: 850px) {
    width: 100vw;
    height: 65vw;
    min-height: 360px;
  }
`;
export const MapaWrapTextBlock = styled.div`
  position: relative;
  z-index: 11;
  width: 460px;

  background: #11192c;
  top: 100px;
  border-radius: 3px;
  padding: 85px 86px 100px 76px;
  @media only screen and (max-width: 1300px) {
    top: 0px;
  }
  @media only screen and (max-width: 850px) {
    width: 100vw;
  }
  @media only screen and (max-width: 430px) {
    padding: 65px 30px 100px 30px;
  }
`;
export const TopTitle = styled.h3`
  position: relative;
  z-index: 11;
  font-family: "Roboto Condensed";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: #f5faff;
  @media only screen and (max-width: 1300px) {
  }
`;
export const Title = styled.h2`
  position: relative;
  z-index: 11;
  color: #f5faff;
  /* H2 */
  font-family: "Roboto Condensed";
  margin: 15px auto 50px auto;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 11;
  color: #f5faff;
  /* P */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media only screen and (max-width: 1300px) {
  }
`;
export const Button = styled.button`
  position: relative;
  z-index: 11;
  width: 259px;
  height: 72.471px;
  border-radius: 6px;
  background: #4299c8;
  color: #f5faff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%; /* 25.65px */
  margin-top: 60px;
  cursor: pointer;
  @media only screen and (max-width: 1300px) {
  }
`;
export const Galeb1 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: -15%;
  left: 20%;
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const Galeb2 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: 50px;
  left: 50%;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
export const Galeb3 = styled.div`
  position: absolute;
  z-index: 12;
  bottom: -5%;
  right: 15%;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
