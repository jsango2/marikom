import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  background: white;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 40px;
  flex-direction: column;
  /* overflow: hidden; */
  @media only screen and (max-width: 935px) {
    padding-top: 0;
  }
`;

export const WrapImages = styled.div`
  position: relative;
  z-index: 10;
  height: 177px;
  max-width: 1037px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 120px;
  @media only screen and (max-width: 935px) {
    overflow: hidden;
    height: auto;
  }
`;
export const WrapSkladiste = styled.div`
  position: relative;
  z-index: 10;
  height: auto;
  width: 100%;
  margin-top: auto;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  z-index: 10;
  height: 16px;
  top: -8px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 75%;
  margin-top: auto;
  background-color: #4299c8;
  /* overflow: hidden; */
  @media only screen and (max-width: 650px) {
  }
`;
export const Product = styled.div`
  position: relative;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Name = styled.h3`
  position: relative;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  /* MK Plava */

  color: #1c2640;
  /* overflow: hidden; */
  margin-left: 20px;

  @media only screen and (max-width: 600px) {
  }
`;
export const Latin = styled.p`
  position: relative;
  font-family: "Gilroy";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 153%;
  /* or 21px */

  /* SUNRISE/Light Coral */

  color: #b5d3e3;
  margin-left: 20px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;
  z-index: 10;
  height: 206px;
  width: 239px;
  border: 1px solid #8080800f;

  /* margin: 0 32px; */
  /* padding-top: 16px; */
  /* overflow: hidden; */
  @media only screen and (max-width: 935px) {
    width: 100%;
    height: auto;
  }
`;

export const WrapIn = styled.div`
  position: absolute;
  z-index: 10;
  height: 166px;
  width: 199px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* overflow: hidden; */
  @media only screen and (max-width: 935px) {
    position: relative;
    width: 100vw;
    max-height: 260px;
    height: 33vw;
    left: unset;
    top: unset;
    transform: unset;
    /* transform: translate(-50%, 0%); */
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 15;
  height: 166px;
  width: 100%;

  top: 130px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 88.08%
  );
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapButton = styled.div`
  position: absolute;
  z-index: 15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
