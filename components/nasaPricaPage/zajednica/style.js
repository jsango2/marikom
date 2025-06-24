import styled from 'styled-components';

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background: white;
  padding-top: 35px;
  padding-bottom: 105px;
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
    padding-bottom: 65px;
  }
  @media only screen and (max-width: 430px) {
    padding-top: 0px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  width: 1440px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 90px auto 0 auto;
  background-color: white;
  padding: 0 150px;
  @media only screen and (max-width: 1600px) {
    width: 100%;
    padding: 0 30px;
  }
  @media only screen and (max-width: 850px) {
    margin: 40px auto 0 auto;
    padding: 0 0 30px 0;
    height: auto;
  }
  @media only screen and (max-width: 430px) {
  }
`;
export const TextBox = styled.div`
  position: relative;
  z-index: 10;
  width: 750px;
  height: auto;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    width: 75%;

    padding-top: 40px;
    height: auto;
  }
  @media only screen and (max-width: 850px) {
    width: 90%;
  }
  @media only screen and (max-width: 430px) {
    padding-top: 20px;
  }
`;
export const SmallText = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 20px;
  width: 80%;
  @media only screen and (max-width: 850px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(12, 21, 49, 0.55) 0.76%, rgba(21, 28, 50, 0) 100%);
  height: 50%;
  width: 100%;
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapImages = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 92%;
  margin-top: 100px;
  @media only screen and (max-width: 850px) {
    margin-top: 60px;

    flex-direction: column;
    align-items: center;
  }
`;
export const Img1 = styled.div`
  position: relative;
  z-index: 10;
  height: 380px;
  width: 315px;
  border-radius: 3px;
  background-image: url('/nasaPricaImg1.webp');
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
    margin-bottom: 20px;
  }
`;
export const Img2 = styled.div`
  position: relative;
  z-index: 10;
  height: 380px;
  width: 315px;
  border-radius: 3px;

  background-image: url('/nasaPricaImg2.webp');
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
    margin-bottom: 20px;
  }
`;
export const Img3 = styled.div`
  position: relative;

  z-index: 10;
  height: 380px;
  width: 315px;
  border-radius: 3px;

  background-image: url('/nasaPricaImg3.webp');
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
    margin-bottom: 20px;
  }
`;
export const Img4 = styled.div`
  position: relative;

  z-index: 10;
  height: 380px;
  width: 315px;
  border-radius: 3px;

  background-image: url('/nasaPricaImg4.webp');
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
    margin-bottom: 20px;
  }
`;

export const ImgMapa = styled.div`
  position: relative;

  z-index: 10;
  height: 380px;
  width: 315px;
  border-radius: 3px;

  /* background-image: url('/nasaPricaImg4.webp'); */
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 850px) {
    margin-bottom: 20px;
  }
`;

export const Icon = styled.div`
  position: relative;
  z-index: 10;
  height: 150px;
  width: 150px;
  @media only screen and (max-width: 850px) {
  }
`;
export const Title = styled.h2`
  position: relative;

  font-family: 'Roboto Condensed', sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin: 10px 0 30px 0;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 650px) {
    font-size: 36px;
  }
`;
export const UpTitle = styled.h2`
  position: relative;

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 120%;
  /* or 25px */

  text-align: center;

  color: #000000;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`;
export const Text = styled.h2`
  position: relative;

  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* or 26px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 6500px) {
    font-size: 16px;
  }
`;
