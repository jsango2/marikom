import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  /* padding-bottom: 50px; */
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapImage2 = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* overflow: hidden; */
  padding-bottom: 20px;
  padding-top: 110px;
  @media only screen and (max-width: 650px) {
    padding-bottom: 0;
    padding-top: 0;
  }
`;
export const WrapBg = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  /* top: 0; */
  /* overflow: hidden; */
  top: ${(props) => props.percentage * 100 - 80}px;
  transform: scale(calc(${(props) => props.percentage / 10 + 1}));
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapCerts = styled.div`
  position: relative;
  z-index: 10;
  width: 657px;
  height: 68px;
  margin-top: 70px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  /* img {
    margin: 0 20px !important;
  } */
  /* overflow: hidden; */
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 30px;
    margin-bottom: 30px;
    justify-content: space-between;
  }
`;
export const WrapImage = styled.div`
  position: relative;
  z-index: 13;
  margin: 0 10px;
  @media only screen and (max-width: 600px) {
    margin: 0 5px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 20%;

  @media only screen and (max-width: 600px) {
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 11;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: var(--h1);
  line-height: 120%;
  /* identical to box height, or 66px */
  text-align: center;
  text-transform: uppercase;
  margin-top: 100px;
  margin-bottom: 15px;

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  &.inView {
    top: 0px;
    opacity: 1;
    transition: all 2s ease-out;
    /* transition-delay: 0.5s; */
  }
  &.outView {
    top: 25px;
    opacity: 0;
  }
  @media only screen and (max-width: 850px) {
    font-size: var(--h2);
  }
  @media only screen and (max-width: 650px) {
    margin: 70px auto 15px auto;
  }
`;

export const Text = styled.p`
  position: relative;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: var(--b-18);

  line-height: 142.5%;
  /* or 26px */
  width: 693px;
  text-align: center;

  /* SUNRISE/Sunray */
  margin-bottom: 40px;
  color: #f5faff;
  @media only screen and (max-width: 1000px) {
    font-size: var(--m--b);

    width: 85%;
    max-width: 600px;
  }
  @media only screen and (max-width: 650px) {
    margin-top: 20px;
    font-size: 16px;
    margin-bottom: 0px;
  }
`;
