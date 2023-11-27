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
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapPhotos = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
  }
`;
export const WrapPhoto = styled.div`
  position: relative;
  z-index: 10;
  height: 35vw;
  min-height: 185px;
  display: flex;
  flex-direction: column;
  padding: 29px 56px 0 27px;

  width: 55%;
  min-width: 228px;
  margin: 10px;
  @media only screen and (max-width: 1000px) {
  }
`;
export const WrapCerts = styled.div`
  position: relative;
  float: left;
  z-index: 10;
  width: 205px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin: 73px auto 25px auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapCert = styled.div`
  position: relative;
  z-index: 10;
  width: 132px;
  height: 52px;

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
  height: 354px;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 22.83%,
    rgba(255, 255, 255, 0) 91.93%
  );

  @media only screen and (max-width: 600px) {
  }
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 120%;
  /* or 48px */

  text-align: center;

  /* SUNRISE/Sunray */
  width: 799px;
  color: #f5faff;
  margin-bottom: 60px;
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
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;
  text-transform: capitalize;

  /* SUNRISE / White */

  color: #ffffff;
  margin: 16px 0;
  @media only screen and (max-width: 600px) {
  }
`;
export const PhotoSubTitle = styled.h3`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  /* or 17px */

  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  width: 80%;
  @media only screen and (max-width: 600px) {
  }
`;

export const ViseInfo = styled.h4`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 185%;
  /* or 22px */

  /* SUNRISE/Coral */

  color: #4299c8;
  width: 150px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
