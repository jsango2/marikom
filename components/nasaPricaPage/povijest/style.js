import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  background: #1c2640;
  padding: 51px 0 69px 105px;
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 542px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.03);
  padding: 80px 0 0 80px;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;
export const DashedLine = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 3px;
  top: 59px;
  :after {
    content: "-----------------------";
    color: rgba(255, 255, 255, 0.15);
    letter-spacing: 4px; /* Use letter-spacing to increase space between dots*/
  }

  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;
export const WrapEvents = styled.div`
  position: relative;
  z-index: 10;

  display: flex;

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
export const Title = styled.h1`
  position: sticky;
  width: 400px;
  left: 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  color: #ffffff;
  margin-bottom: 0;
  @media only screen and (max-width: 1200px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapDogadjaj = styled.div`
  position: relative;
  z-index: 10;
  width: 263px;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;
export const Line = styled.div`
  position: relative;
  z-index: 10;
  background: #4299c8;
  width: 46px;
  height: 4px;
  margin-bottom: 35px;
  margin-top: 70px;
  @media only screen and (max-width: 850px) {
  }
`;

export const Year = styled.h2`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height, or 138% */

  color: #ffffff;
  margin: 0;
  @media only screen and (max-width: 850px) {
  }
`;

export const Text = styled.p`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* Colour 100 */

  color: #b8b8b8;
  margin-top: 23px;
  width: 80%;
  @media only screen and (max-width: 850px) {
  }
`;
