import Link from "next/link";
import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  background: radial-gradient(
      95.28% 97.41% at 1.33% 0%,
      #233159 0%,
      #151b2c 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  /* overflow: hidden; */
  @media only screen and (max-width: 768px) {
    /* padding-bottom: 100px; */
  }
`;
export const Proizvodi = styled.div`
  position: relative;
  z-index: 10;
  width: 1305px;
  height: auto;
  margin: 83px auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: white;
  @media only screen and (max-width: 1300px) {
    width: 95%;
  }
  @media only screen and (max-width: 850px) {
    width: 425px;

    height: auto;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 450px) {
    margin: 63px auto 0 auto;

    width: 95%;
    min-width: 320px;
    justify-content: space-evenly;
  }
`;
export const WrapProizvod = styled.div`
  position: relative;
  z-index: 11;
  width: 273px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    width: 200px;
  }
  @media only screen and (max-width: 850px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 450px) {
    margin-bottom: 25px;

    width: 45%;
  }
`;
export const WrapProizvodImage = styled.div`
  position: relative;
  z-index: 11;
  width: 157px;
  height: 244px;
  padding: 20px;
  background-image: url("/karijereLogo/marikomerc.svg");
  background-size: 80px 80px;
  background-repeat: no-repeat;
  background-position: center;
  @media only screen and (max-width: 1300px) {
    width: 116px;
    height: 182px;
  }
`;
export const BlueLine = styled.div`
  position: relative;
  z-index: 11;
  width: 85px;
  height: 3px;
  background-color: #4299c8;
  margin: 181px auto 30px auto;
  @media only screen and (max-width: 850px) {
    margin: 81px auto 30px auto;
  }
`;
export const Button = styled.div`
  position: relative;
  z-index: 11;
  width: 319px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5faff;
  border-radius: 6px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  text-align: center;

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin: 55px auto 0 auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  a {
    text-decoration: none;
    color: #f5faff;
  }
  &:hover {
    background: #203c5e;
  }
  &:active {
    background: #ffffff;
  }

  @media only screen and (max-width: 430px) {
    margin: 35px auto 0 auto;
    width: 90vw;
  }
`;
export const Proizvod = styled.div`
  position: relative;
  z-index: 11;
  width: 273px;
  height: auto;
  /* background: linear-gradient(180deg, #a4d4ff 0%, rgba(255, 255, 255, 0) 100%); */
  /* opacity: 0.09; */
  /* SUNRISE/Sunray */

  border-radius: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1300px) {
    width: 100%;
    height: 222px;
  }
`;
export const ProizvodName = styled.p`
  position: relative;
  z-index: 11;
  margin-top: 16px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  width: 90%;
  /* identical to box height, or 22px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  @media only screen and (max-width: 1300px) {
    font-size: 14px;
  }
`;
export const ProizvodWeight = styled.p`
  position: relative;
  z-index: 11;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  /* identical to box height, or 17px */

  text-transform: uppercase;

  /* SUNRISE/Light Coral */

  color: #b5d3e3;
  @media only screen and (max-width: 600px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #a4d4ff 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.09;
  /* SUNRISE/Sunray */
  border: 1px solid #f5faff;

  border-radius: 39px;

  @media only screen and (max-width: 600px) {
  }
`;
export const RedLine = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 78px;
  background: #e1251b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 119px;
  @media only screen and (max-width: 850px) {
    height: 50px;
  }
  @media only screen and (max-width: 430px) {
    margin-bottom: 80px;
  }
`;
export const WrapLogoPerla = styled.div`
  position: relative;
  z-index: 10;
  top: -25px;
  width: 324px;
  height: 152px;
  @media only screen and (max-width: 850px) {
    width: 208px;
    height: 152px;
  }
`;
export const LogoHks = styled.div`
  position: relative;
  z-index: 10;
  margin-top: 85px;
  width: 190px;
  height: 185px;
  @media only screen and (max-width: 850px) {
    width: 170px;
    height: 170px;
    margin: 85px auto 0 auto;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    width: 90px;
    height: 90px;
    /* margin: 45px auto 0 auto; */
    top: 290px;
    left: 20px;
    /* position: absolute;
    top: 360px;
    width: 90px;
    height: 90px; */
  }
  @media only screen and (max-width: 350px) {
    top: 290px;

    width: 60px;
    height: 60px;
    /* position: absolute;
    top: 380px;
    width: 90px;
    height: 90px; */
  }
`;
export const WrapLogo = styled.div`
  position: relative;
  z-index: 10;
  /* top: -15px;
  width: 254px;
  height: 152px; */
  @media only screen and (max-width: 850px) {
    /* width: 170px;
    height: 122px; */
  }
`;
export const Meals = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  width: 1500px;
  margin: 50px auto 100px auto;
  @media only screen and (max-width: 1500px) {
    width: 1150px;
  }
  @media only screen and (max-width: 1160px) {
    width: 95%;
  }
  @media only screen and (max-width: 850px) {
    flex-wrap: wrap;
    width: 440px;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const WrapLogos = styled.div`
  position: relative;
  z-index: 10;
  top: 40px;
  display: flex;
  justify-content: space-between;
  width: 1275px;
  height: 100px;
  margin: 50px auto 100px auto;
  @media only screen and (max-width: 1300px) {
    width: 750px;
    height: 58px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Meal = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 355px;
  height: 431px;
  margin: 0 auto;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
  border-radius: 21px;
  overflow: hidden;
  @media only screen and (max-width: 1160px) {
    width: 300px;
    height: 354px;
  }
  @media only screen and (max-width: 850px) {
    width: 190px;
    height: 251px;
    margin: 10px auto;
  }
  @media only screen and (max-width: 395px) {
    width: 95%;
  }
`;
export const Up = styled.div`
  position: relative;
  z-index: 10;
  width: 355px;
  height: 338px;
  background-color: gold;
  @media only screen and (max-width: 600px) {
  }
`;
export const Down = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  width: 100%;
  height: 98px;
  background: #f5faff;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  /* or 24px */

  display: flex;
  align-items: center;

  /* MK Plava */

  color: #1c2640;
  padding: 5px 26px 5px 26px;
  @media only screen and (max-width: 1160px) {
    height: 110px;
    font-size: 18px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    padding: 5px 8px 5px 12px;
  }
`;

export const WrapLinks = styled.div`
  position: relative;
  z-index: 10;
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Karamarko = styled.div`
  position: relative;
  z-index: 10;
  width: 1440px;
  height: auto;
  display: flex;
  /* overflow: hidden; */

  justify-content: center;
  margin: 230px auto 0px auto;
  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 800px) {
  }
`;
export const Left = styled.div`
  position: relative;
  z-index: 10;
  width: 600px;
  height: auto;
  display: flex;
  justify-content: center;
  padding-left: 70px;
  align-items: flex-end;
  @media only screen and (max-width: 1000px) {
    align-items: flex-end;
    width: 100%;
    padding-left: 0;
  }
  @media only screen and (max-width: 430px) {
    align-items: flex-end;
    width: 100vw;
    padding-left: 0;
  }
`;
export const ImageWrap = styled.div`
  position: relative;
  z-index: 10;
  height: 543px;
  width: 400px;
  background-image: url("/karamarko.png");
  background-size: cover;
  @media only screen and (max-width: 1000px) {
    height: 395px;
    width: 300px;
  }
  @media only screen and (max-width: 650px) {
    width: 70vw;
  }
  @media only screen and (max-width: 430px) {
    height: 371px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }
  @media only screen and (max-width: 370px) {
    height: 310px;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }
`;
export const Potpis = styled.div`
  position: absolute;
  z-index: 11;
  width: 330px;
  height: 300px;

  left: -135px;
  top: ${(props) => props.percentage * 50 + 100}px;
  @media only screen and (max-width: 1000px) {
    width: 220px;
    height: 230px;
    left: 41px;
    top: 341px;
  }

  @media only screen and (max-width: 430px) {
    width: 180px;
    height: 190px;
    top: 0px;

    left: 0px;
  }
`;
export const PozadinaPerla = styled.div`
  position: absolute;
  z-index: 10;
  width: 860px;
  height: 750px;
  bottom: ${(props) => props.percentage * 70}px;

  left: -195px;
  @media only screen and (max-width: 1000px) {
    left: -95px;

    position: relative;
    width: 560px;
    height: 550px;
  }
  @media only screen and (max-width: 800px) {
    left: 10px;
    width: 50%;
  }
  @media only screen and (max-width: 430px) {
    position: absolute;
    bottom: ${(props) => props.percentage * 70 - 40}px;

    left: 0px;
    width: 80%;
  }
`;
export const RedLine2 = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #e1251b;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Right = styled.div`
  position: relative;
  z-index: 10;
  width: 655px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 430px) {
    width: 100%;
    height: auto;
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;
export const WrapTime = styled.div`
  position: absolute;
  z-index: 12;
  bottom: 15px;
  left: 20px;
  display: flex;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  /* SUNRISE/Sunray */

  color: #f5faff;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  @media only screen and (max-width: 800px) {
  }
`;
export const LinkTo = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  background: #233055;
  border-radius: 5px;
  padding: 8px 16px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  text-align: center;

  /* SUNRISE / White */

  color: #ffffff;
  cursor: pointer;
  margin: 5px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
export const LinkTo2 = styled(LinkTo)`
  background: #497290;

  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  text-align: center;

  /* SUNRISE/Sunray */

  color: #f5faff;
  width: 840px;
  margin: 0 auto 0 auto;
  @media only screen and (max-width: 1000px) {
    font-size: 36px;
    width: 75%;
  }
  @media only screen and (max-width: 850px) {
    font-size: 24px;
    text-transform: unset;
  }
`;
export const Title2 = styled.h1`
  position: relative;
  z-index: 10;
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  text-align: left;

  /* SUNRISE/Sunray */

  color: #f5faff;
  width: 680px;
  margin: 0 auto 0 auto;

  transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  left: ${(props) => (props.inView ? "0" : "130%")};
  opacity: ${(props) => (props.inView ? "1" : "0")};
  @media only screen and (max-width: 1000px) {
    font-size: 36px;
    width: 75%;
  }
  @media only screen and (max-width: 850px) {
    font-size: 24px;
    text-transform: unset;
    text-align: center;
  }
  @media only screen and (max-width: 430px) {
    width: 99%;
  }
`;

export const Text = styled.h1`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* or 26px */

  text-align: center;

  /* SUNRISE/Sunray */

  color: #f5faff;
  width: 664px;
  margin: 30px auto 0 auto;
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
    width: 80%;
  }
  @media only screen and (max-width: 850px) {
    font-size: 14px;
  }
`;
