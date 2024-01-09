import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 1543px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* top: -10px; */
  @media only screen and (max-width: 1150px) {
    height: auto;
    padding-bottom: 60px;
  }
  @media only screen and (max-width: 850px) {
    height: auto;
    padding: 60px 0 70px 0;
  }
`;
export const Up = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 631px;

  @media only screen and (max-width: 850px) {
    height: 70vw;
  }
`;
export const Down = styled.div`
  position: relative;
  z-index: 12;
  width: 100%;
  height: 912px;
  padding: 0px 245px 60px 245px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media only screen and (max-width: 850px) {
    padding: 50px 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 50px 10px 70px 10px;
  }
`;
export const BgMore = styled.div`
  position: absolute;
  z-index: 12;
  width: 100%;
  height: 120%;
  background-image: url("/BrojkeMore.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 50%;
  top: ${(props) => props.percentage * 100 - 80}px;

  @media only screen and (max-width: 850px) {
    padding: 50px 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 50px 10px 70px 10px;
  }
`;

export const WrapContent = styled.div`
  position: relative;
  z-index: 15;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* overflow: hidden; */
  @media only screen and (max-width: 1150px) {
    height: auto;
  }
  @media only screen and (max-width: 850px) {
  }
`;

export const Left = styled.div`
  position: relative;
  z-index: 11;
  width: 565px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* overflow: hidden; */
  @media only screen and (max-width: 1150px) {
    width: 90%;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  top: 0px;

  width: 100%;
  height: 15px;

  z-index: 11;
  background-color: #4299c8;
  @media only screen and (max-width: 850px) {
    top: -50px;
    left: 50%;
    z-index: 11;

    transform: translate(-50%, 0);
    width: 116px;
    height: 5px;
  }
`;
export const Right = styled.div`
  position: relative;
  z-index: 11;
  width: 565px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  @media only screen and (max-width: 1150px) {
    width: 90%;
  }
  /* @media only screen and (max-width: 1000px) {
    width: 500px;
  } */

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;
export const SingleFact = styled.div`
  position: relative;
  z-index: 12;
  width: 100%;
  height: 104px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    height: 94px;
  }
`;
// export const Wrap = styled.div`
//   position: relative;
//   z-index: 11;
//   display: flex;
//   align-items: center;
//   height: 77px;
//   /* overflow: hidden; */
//   @media only screen and (max-width: 600px) {
//   }
// `;

export const Title = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 850px) {
    text-align: center;
    /* font-size: 14px; */
  }
`;
export const MainTitle = styled.h3`
  position: relative;
  z-index: 11;
  color: var(--color-boja-marikomerc-bijela);
  text-align: center;
  width: 712px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: var(--m--h1);
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 43.2px */
  margin-top: 20px;
  @media only screen and (max-width: 850px) {
    width: 90%;
    text-align: center;
    font-size: var(--h3);

    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 31.2px */
  }
  @media only screen and (max-width: 430px) {
    font-size: var(--m--h2);
  }
`;
export const TopText = styled.p`
  position: relative;
  z-index: 11;

  color: var(--color-boja-marikomerc-bijela);
  text-align: center;

  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.5%; /* 25.65px */
  margin-bottom: 20px;
  @media only screen and (max-width: 1000px) {
    /* font-size: 32px; */
  }
  @media only screen and (max-width: 850px) {
    /* font-weight: 700; */
    font-size: 16px;
    line-height: 120%;

    text-align: center;
  }
`;

export const Numbers = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  z-index: 11;
  width: 100%;
  max-width: 1440px;
  /* identical to box height, or 77px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  margin-top: 40px;
  @media only screen and (max-width: 1150px) {
    width: 500px;
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 40px;

    width: 95%;
    align-items: center;
    /* width: 45px;

    font-size: 34px; */
  }
`;
export const Number = styled.div`
  position: relative;
  color: var(--color-boja-marikomerc-bijela);
  font-family: Gilroy;
  font-size: 55px;

  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 66px */
  margin-right: 50px;
  @media only screen and (max-width: 1150px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 600px) {
    margin-right: 30px;

    text-align: end;
    width: 170px;
  }
  @media only screen and (max-width: 435px) {
    font-size: 36px;
  }
`;
export const WrapNumberText = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  @media only screen and (max-width: 1000px) {
  }
  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`;

export const TextFact = styled.p`
  position: relative;
  width: 300px;
  z-index: 11;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* identical to box height, or 26px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  /* overflow: hidden; */
  @media only screen and (max-width: 850px) {
    font-size: 14px;
    width: 75%;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const Fact = styled.p`
  position: relative;
  width: 257px;
  z-index: 11;
  color: var(--color-boja-marikomerc-bijela);
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.5%; /* 25.65px */
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 600px) {
  }
`;

export const Line = styled.div`
  position: relative;
  z-index: 11;
  height: 6px;
  /* width: 425px; */
  background: var(--color-svj-plava);
  border-radius: 2px;
  /* overflow: hidden; */
  transition: all 1.6s ease-out;
  &.inViewLine {
    width: 425px;
  }
  &.outViewLine {
    width: 0;
  }
  @media only screen and (max-width: 600px) {
    height: 4px;

    width: 90%;
    &.inViewLine {
      width: 90vw;
    }
  }
`;
export const ThinLine = styled.div`
  position: relative;
  z-index: 11;
  width: 595px;
  height: 1px;
  background: #f5faff;
  @media only screen and (max-width: 1150px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c2640;
  opacity: 0.7;
  @media only screen and (max-width: 600px) {
  }
`;

export const Elipse = styled.div`
  position: absolute;
  width: 120%;
  height: 800px;
  /* bottom: -400px; */
  z-index: 22;
  clip-path: ellipse(43% 10% at 50% 50%);
  background-color: white;
  bottom: 5%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, 60%);
  @media screen and (max-width: 750px) {
    /* width: 151%;
    top: -95px; */
  }
  @media screen and (max-width: 440px) {
    clip-path: ellipse(50% 6% at 50% 50%);
  }
`;
