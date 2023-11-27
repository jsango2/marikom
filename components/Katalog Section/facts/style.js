import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1213px;
  min-width: 1000px;
  width: 95%;
  height: auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* overflow: hidden; */
  margin-top: 136px;
  margin-bottom: 100px;
  @media only screen and (max-width: 963px) {
    min-width: unset;
    width: 100%;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 935px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 650px) {
    width: 97%;

    justify-content: space-between;
  }
`;

export const WrapFact = styled.div`
  position: relative;
  z-index: 10;
  width: 246px;
  height: auto;
  background: white;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* overflow: hidden; */
  margin: 0 35px;
  background: linear-gradient(
    180deg,
    rgba(22, 29, 50, 0.02) 0%,
    rgba(26, 35, 59, 0) 100%
  );
  /* SUNRISE/Grey */

  border: 1px solid #f5faff;
  @media only screen and (max-width: 1000px) {
    margin: 0 35px 50px 35px;
  }
  @media only screen and (max-width: 650px) {
    margin: 0 0px 50px 20px;
    width: calc(95% / 2.2);
  }
`;
export const WrapIcon = styled.div`
  position: relative;
  z-index: 10;
  width: 75px;
  height: 65px;
  background: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 35px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const Title = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  /* SUNRISE / Dark Charcoal */

  color: #2f2a32;
  margin-bottom: 15px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Text = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE / Text Grey */

  color: #605866;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const BlueLine = styled.div`
  position: absolute;
  z-index: 10;
  width: 2px;
  height: 61px;
  background: #4299c8;
  top: 98px;
  left: -20px;
  border-radius: 1px;
  /* overflow: hidden; */
  @media only screen and (max-width: 650px) {
    left: -10px;
  }
`;
