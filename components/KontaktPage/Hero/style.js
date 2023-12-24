import styled from "styled-components";

export const WrapAllContactHero = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;

  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
  padding-bottom: 70px;
  @media only screen and (max-width: 850px) {
    padding-top: 0px;
    padding-bottom: 30px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: space-evenly;
  max-width: 1440px;
  margin: 0 auto;
  padding: 54px 0 0 25px;
  @media only screen and (max-width: 850px) {
    padding: 0;

    flex-direction: column-reverse;
    /* padding: 70px 100px; */
  }
`;
export const WrapText = styled.div`
  position: relative;
  z-index: 11;
  width: 456px;
  @media only screen and (max-width: 850px) {
    padding: 30px 20px;
    width: 90vw;
  }
`;
export const WrapPhoto = styled.div`
  position: relative;
  z-index: 11;
  width: 721px;
  height: 480px;
  @media only screen and (max-width: 850px) {
    width: 100vw;
    height: 65vw;
    min-height: 270px;

    /* padding: 70px 100px; */
  }
`;
export const Title = styled.h2`
  position: relative;
  z-index: 11;
  color: #f5faff;
  /* H2 */
  font-family: "Roboto Condensed";
  margin: 10px auto 30px auto;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  @media only screen and (max-width: 850px) {
    font-size: 30px;
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
export const GoogleButton = styled.button`
  position: relative;
  background-color: transparent;
  z-index: 11;
  border-radius: 6px;
  border: 1px solid #f5faff;
  width: 137px;
  height: 25px;
  color: #f5faff;
  text-align: center;
  /* M-T */
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 16.8px */
  margin-top: 20px;
  @media only screen and (max-width: 1300px) {
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
  border-radius: 1px;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    left: 0px;
  }
`;
