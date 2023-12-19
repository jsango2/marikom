import styled from "styled-components";

export const WrapAllContactHero = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 642px;

  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
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
  @media only screen and (max-width: 1300px) {
    padding: 70px 100px;
  }
`;
export const WrapText = styled.div`
  position: relative;
  z-index: 11;
  width: 456px;
  @media only screen and (max-width: 1300px) {
    padding: 70px 100px;
  }
`;
export const WrapPhoto = styled.div`
  position: relative;
  z-index: 11;
  width: 721px;
  height: 480px;
  @media only screen and (max-width: 1300px) {
    padding: 70px 100px;
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
    padding: 70px 100px;
  }
`;
