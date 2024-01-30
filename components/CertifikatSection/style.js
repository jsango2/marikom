import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #253151 0%,
      #101628 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* overflow: hidden; */
  padding: 70px 0 100px 0;
  @media only screen and (max-width: 600px) {
    padding: 70px 0 40px 0;
  }
`;
export const TopImage = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  z-index: 10;
  width: 100%;
  height: 380px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  margin-top: 83px;
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
  @media only screen and (max-width: 650px) {
    height: 240px;
  }
`;
export const TextTopImage = styled.div`
  position: relative;
  z-index: 20;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  color: #f5faff;
  text-align: center;
  width: 620px;
  /* H5 Gilroy 30 */
  font-family: "Gilroy";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media only screen and (max-width: 1300px) {
  }
  @media only screen and (max-width: 1000px) {
  }
  @media only screen and (max-width: 630px) {
    width: 90%;
    font-size: 20px;
  }
`;
export const ImageAbsolute = styled.div`
  position: absolute;
  background: url("/perlaPrviDioTopImage.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
  width: 100%;
  height: 140%;

  /* overflow: hidden; */
  top: ${(props) => props.percentage * 100 - 100}px;

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;
export const OverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.24;
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;

export const WrapCards = styled.div`
  position: relative;
  z-index: 10;
  width: 65%;
  max-width: 1000px;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  /* overflow: hidden; */
  @media only screen and (max-width: 1350px) {
    width: 97%;
  }
  @media only screen and (max-width: 800px) {
    width: 85vw;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;
export const WrapPhoto = styled.div`
  position: relative;
  z-index: 10;
  width: 358px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 45px 36px 0 37px;
  border-radius: 6px;
  overflow: hidden;
  &.inView {
    top: 0px;
    opacity: 1;
    transition: all 2s ease-out;
  }
  &.inView:nth-child(1) {
    transition-delay: 500ms;
  }
  &.inView:nth-child(2) {
    transition-delay: 1000ms;
  }
  &.inView:nth-child(3) {
    transition-delay: 1500ms;
  }
  &.outView {
    top: 25px;
    opacity: 0;
  }
  @media only screen and (max-width: 1350px) {
    margin: 0 5px;
  }
  @media only screen and (max-width: 1100px) {
    padding: 29px 56px 0 10px;
    height: 500px;

    width: 275px;
  }
  @media only screen and (max-width: 1000px) {
    padding-top: 55px;
    padding-right: 40px;
    margin-bottom: 30px;
    width: 300px;
    height: 430px;
  }
  @media only screen and (max-width: 430px) {
    padding-top: 55px;
    padding-right: 10px;
    padding-left: 15px;
    margin-bottom: 30px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  text-align: center;

  /* SUNRISE/Sunray */
  width: 640px;
  color: #f5faff;
  margin-bottom: 60px;
  text-transform: uppercase;
  @media only screen and (max-width: 850px) {
    width: 90%;
    max-width: 600px;

    font-size: 26px;
  }
`;

export const PhotoTitle = styled.h3`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.875px;

  /* SUNRISE / Charcoal */

  color: #37313c;
  margin-bottom: 17px;
  @media only screen and (max-width: 600px) {
  }
`;
export const PhotoSubTitle = styled.h3`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* SUNRISE / Charcoal */

  color: #37313c;
  @media only screen and (max-width: 600px) {
  }
`;

export const ViseInfo = styled.h4`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 185%;
  /* identical to box height, or 26px */

  /* SUNRISE/Coral */
  width: 150px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
