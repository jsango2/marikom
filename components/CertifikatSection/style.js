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
  padding: 70px 0 130px 0;
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapPhotos = styled.div`
  position: relative;
  z-index: 10;
  width: 1350px;
  height: auto;
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
  @media only screen and (max-width: 1350px) {
    width: 97%;
  }
  @media only screen and (max-width: 1000px) {
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
export const WrapCerts = styled.div`
  position: relative;
  float: left;
  z-index: 10;
  /* width: 100%; */
  max-width: 75%;
  height: 45px;
  display: flex;
  justify-content: flex-start;

  margin: auto auto 34px auto;
  @media only screen and (max-width: 1000px) {
    max-width: 95%;
  }
`;
export const WrapCert = styled.div`
  position: relative;
  z-index: 10;
  width: 132px;
  height: 52px;
  margin: 0 10px;
  @media only screen and (max-width: 1000px) {
    width: 100px;
    height: 40px;
  }
`;
export const WrapCert2 = styled(WrapCert)`
  position: relative;
  z-index: 10;
  width: 107px;
  height: 52px;
  margin-top: auto;
  margin-bottom: 34px;
  @media only screen and (max-width: 1000px) {
    width: 84px;
    height: 41px;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 65%;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 22.83%,
    rgba(255, 255, 255, 0.38) 100%
  );

  backdrop-filter: blur(4.5px);

  @media only screen and (max-width: 1100px) {
    height: 75%;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  text-align: center;

  /* SUNRISE/Sunray */
  width: 799px;
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
