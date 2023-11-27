import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 2200px;
  background: white;
  color: black;
  padding-top: 40px;
  top: -1px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    height: auto;
    padding-bottom: 150px;
  }
`;

export const WrapMap = styled.div`
  position: relative;
  z-index: 10;
  width: 944px;
  height: 551px;
  margin: 0 auto;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    width: 400px;
    height: 232px;
  }
`;
export const Cards = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 1271px;
  min-width: 1271px;
  margin: 0 auto 80px auto;
  @media only screen and (max-width: 1000px) {
  }
`;
export const WrapTextContetnt = styled.div`
  position: relative;
  z-index: 10;
  width: 710px;
  height: 368px;
  margin: 30px auto 0 auto;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1000px) {
    width: 90%;
    height: auto;
  }
`;
export const WrapPhotos = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1317px;
  width: 95%;
  height: 533px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: 100%;
    margin-top: 100px;
  }
`;
export const Photo1 = styled.div`
  position: relative;
  z-index: 10;
  width: 234px;
  height: 100%;
  background-color: gray;

  &.inView {
    top: 40px;
    transition: all 3s ease-out;
  }
  &.outView {
    top: 0px;
  }
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 5);
  }
`;
export const Photo2 = styled.div`
  position: relative;
  z-index: 10;
  width: 293px;
  height: 384px;
  background-color: gray;
  &.inView {
    bottom: 10px;
    transition: all 3s ease-out;
  }
  &.outView {
    bottom: -10px;
  }
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 4);
  }
`;
export const Photo3 = styled.div`
  position: relative;
  z-index: 10;
  width: 390px;
  height: 512px;
  background-color: gray;
  &.inView {
    top: 20px;
    transition: all 3s ease-out;
  }
  &.outView {
    top: -10px;
  }
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 3.2);
  }
`;
export const Photo4 = styled.div`
  position: relative;
  z-index: 10;
  width: 315px;
  height: 384px;
  background-color: gray;
  &.inView {
    bottom: -30px;
    transition: all 3s ease-out;
  }
  &.outView {
    bottom: -85px;
  }
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1400px) {
    width: calc(92% / 3.8);
  }
`;
export const TitleUp = styled.h4`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  text-align: center;

  text-transform: uppercase;

  /* Black */

  color: #161722;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  position: relative;
  z-index: 10;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 120%;
  /* identical to box height, or 66px */
  margin: 0 auto 33px auto;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  /* Black */

  color: #161722;
  @media only screen and (max-width: 1000px) {
    font-size: 34px;
    text-transform: none;
  }
`;
export const Text = styled.p`
  position: relative;
  z-index: 10;

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* or 26px */
  width: 88%;
  margin: 0 auto;
  text-align: center;

  /* MK Plava */

  color: #1c2640;
  @media only screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;
export const Nizozemska = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 195px;
  left: 440px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 82px;
    left: 183px;
  }
`;
export const Vietnam = styled.div`
  position: absolute;
  z-index: 2;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 262px;
  left: 675px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 110px;
    left: 285px;
  }
`;
export const Norveska = styled.div`
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 134px;
  left: 458px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    z-index: 3;

    width: 10px;
    height: 10px;
    top: 56px;
    left: 193px;
  }
`;
export const NZ = styled.div`
  position: absolute;
  z-index: 2;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 425px;
  left: 836px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 179px;
    left: 354px;
  }
`;
export const JAR = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 406px;
  left: 481px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 171px;
    left: 203px;
  }
`;
export const HR = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 216px;
  left: 466px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 91px;
    left: 197px;
  }
`;
export const USA = styled.div`
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 228px;
  left: 300px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;
    top: 96px;
    left: 127px;
  }
`;
export const SCO = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 165px;
  left: 426px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 69px;
    left: 180px;
  }
`;
export const JAP = styled.div`
  position: absolute;
  z-index: 2;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 238px;
  left: 724px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 100px;
    left: 306px;
  }
`;
export const TUR = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 238px;
  left: 495px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 100px;
    left: 209px;
  }
`;
export const NAM = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 375px;
  left: 460px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 158px;
    left: 194px;
  }
`;
export const EKV = styled.div`
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 368px;
  left: 258px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 155px;
    left: 109px;
  }
`;
export const GR = styled.div`
  position: absolute;
  z-index: ${(props) => (props.zindex === "Gr" ? `2` : `0`)};
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 229px;
  left: 484px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 97px;
    left: 204px;
  }
`;
export const Peru = styled.div`
  /* box-shadow: ${(props) =>
    props.mark ? `0px 0px 0px 8px #4299C8;` : ``}; */
  position: absolute;
  z-index: ${(props) => (props.zindex === "Peru" ? `2` : `0`)};

  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 350px;
  left: 255px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 145px;
    left: 109px;
  }
`;
export const Falkland = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 439px;
  left: 326px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;
    z-index: 0;
    top: 185px;
    left: 137px;
  }
`;
export const Argentina = styled.div`
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 446px;
  left: 286px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 188px;
    left: 121px;
  }
`;
export const Poljska = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 191px;
  left: 467px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 80px;
    left: 197px;
  }
`;
export const Esp = styled.div`
  position: absolute;
  z-index: 1;
  width: 14px;
  height: 14px;
  background-color: black;
  border-radius: 50%;
  top: 214px;
  left: 419px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 10px;
    height: 10px;

    top: 90px;
    left: 177px;
  }
`;
export const Location = styled.div`
  position: absolute;
  z-index: 19;
  top: -10px;
  right: 30px;
  color: white;
  min-width: 140px;
  padding: 0 40px;
  height: 38px;
  background: #4299c8;
  border-radius: 6px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
  /* transition: all 0.3s linear; */
  pointer-events: none;
  @media only screen and (max-width: 1000px) {
    min-width: 100px;
    padding: 0 20px;
    height: 32px;
    font-size: 12px;
    top: 20px;
    right: -40px;
  }
`;

export const LocationNZ = styled(Location)`
  @media only screen and (max-width: 1000px) {
    top: 20px;
    right: 0px;
  }
`;
export const LocationEKV = styled(Location)`
  @media only screen and (max-width: 1000px) {
    top: 20px;
    right: -30px;
    z-index: 4;
  }
`;

export const LocationPER = styled(Location)`
  @media only screen and (max-width: 1000px) {
    top: 20px;
    right: -60px;
  }
`;
