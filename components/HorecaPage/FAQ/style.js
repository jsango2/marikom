import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 1000px;
  /* margin-bottom: 300px; */
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
    height: auto;
    padding-top: 40px;
    margin-bottom: 0px;
  }
`;
export const HorecaContent = styled.div`
  position: relative;
  z-index: 11;
  max-width: 1440px;
  margin: 0 auto;
  padding: 90px 150px;
  display: flex;
  @media only screen and (max-width: 1300px) {
    padding: 70px 100px;
  }
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    padding: 70px 0px 0 0;
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
  @media only screen and (max-width: 850px) {
    padding: 0px 0 60px 0;
    margin: 0 auto;
  }
  @media only screen and (max-width: 430px) {
    width: 95vw;
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
  padding-left: 20px;
  @media only screen and (max-width: 1300px) {
    width: 400px;
  }
  @media only screen and (max-width: 1300px) {
    font-size: 36px;
  }
`;
export const HorecaWrapImage = styled.div`
  position: absolute;

  right: 0;
  top: -100px;
  z-index: 11;
  height: 1200px;
  width: 640px;
  background-image: url("/kuhar.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;
  transition: all 1s ease-out;
  &.inViewPhoto {
    right: 0;
    opacity: 1;
  }
  &.outViewPhoto {
    opacity: 0;
    right: -400px;
  }
  @media only screen and (max-width: 1300px) {
    width: 35%;
  }
  @media only screen and (max-width: 850px) {
    width: 100vw;
    height: 65vw;
    min-height: 260px;
    top: unset;
    right: unset;
    position: relative;
    background-position: 0 60%;
  }
`;
