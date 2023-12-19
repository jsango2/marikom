import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 1000px;
  margin-bottom: 300px;
  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #2b3a63 0%,
    #101628 100%
  );

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
  }
`;
export const HorecaContent = styled.div`
  position: relative;
  z-index: 11;
  max-width: 1440px;
  margin: 0 auto;
  padding: 90px 150px;
  @media only screen and (max-width: 1300px) {
    padding: 70px 100px;
  }
`;
export const HorecaAccordion = styled.div`
  position: relative;
  z-index: 11;
  width: 540px;
  padding-top: 110px;

  @media only screen and (max-width: 1300px) {
    width: 400px;
  }
`;
export const AccordionTitle = styled.h3`
  position: relative;
  z-index: 11;
  color: #f5faff;
  /* H2 */
  font-family: "Roboto Condensed";
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  margin-bottom: 60px;
  text-transform: uppercase;
  @media only screen and (max-width: 1300px) {
    width: 400px;
  }
`;
export const HorecaWrapImage = styled.div`
  position: absolute;

  right: 0;
  top: -100px;
  z-index: 11;
  height: 1200px;
  width: 640px;
  background-image: url("/horeca1.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;

  @media only screen and (max-width: 1300px) {
    width: 35%;
  }
`;
