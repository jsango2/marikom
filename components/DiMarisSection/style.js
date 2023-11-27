import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 985px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background: radial-gradient(
      79.54% 79.54% at 1.33% 0%,
      #253151 0%,
      #101628 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
    height: auto;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 550px) {
    padding-bottom: 80px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  width: 1255px;
  height: 564px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1250px) {
    flex-direction: column-reverse;
    height: auto;
    width: 100%;
    align-items: flex-start;
  }
`;
export const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 611px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 1250px) {
    height: auto;
    margin-top: 100px;
    margin-left: 75px;
  }
  @media only screen and (max-width: 700px) {
    width: 90%;
    margin: 100px auto 0 auto;
  }
`;
export const WrapLokacije = styled.ul`
  position: relative;
  z-index: 10;
  width: 600px;
  height: 75px;
  display: flex;
  padding-left: 20px;
  margin-top: 40px;
  margin-bottom: 50px;
  @media only screen and (max-width: 850px) {
    width: 100%;
    min-width: 550px;
  }
  @media only screen and (max-width: 550px) {
    min-width: 100%;
    flex-direction: column;
    height: auto;
  }
`;
export const Block = styled.div`
  position: relative;
  z-index: 10;
  width: 300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 185%;
    /* identical to box height, or 26px */

    /* SUNRISE/Coral */

    color: #4299c8;
    margin-right: 20px;
    /* word-wrap: wrap none; */
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapImage = styled.div`
  position: relative;
  z-index: 10;
  width: 610px;
  height: 564px;
  background-color: gray;
  @media only screen and (max-width: 1250px) {
    top: 40px;
    width: 100%;
    height: 294px;
  }
`;
export const WrapDiMarisLogo = styled.div`
  position: absolute;
  z-index: 11;
  top: -90px;
  left: -70px;

  @media only screen and (max-width: 1400px) {
    left: 1%;
  }
  @media only screen and (max-width: 1250px) {
    left: 5%;
    top: 153px;
  }
  @media only screen and (max-width: 550px) {
    left: 50%;
    top: 153px;
    transform: translate(-50%, 0);
  }
`;
export const Overlay = styled.div`
  @media only screen and (max-width: 1250px) {
    position: absolute;
    z-index: 10;
    width: 65%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      269.87deg,
      rgba(37, 49, 81, 0) 17.05%,
      #101628 79.16%
    );
  }
`;
export const Title = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* or 48px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  margin-bottom: 35px;
  @media only screen and (max-width: 550px) {
    font-weight: 700;
    font-size: 26px;
    line-height: 120%;
  }
`;
export const Text = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 142.5%;
  /* or 26px */

  /* SUNRISE/Sunray */

  color: #f5faff;
  width: 494px;
  @media only screen and (max-width: 550px) {
    font-size: 14px;
    line-height: 153%;
    width: 90%;
  }
`;
export const RedLine = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 40px;
  background: #e1251b;
  top: 0;
  @media only screen and (max-width: 600px) {
  }
`;
export const RedLine2 = styled(RedLine)`
  position: absolute;
  bottom: 0;
  @media only screen and (max-width: 600px) {
  }
`;
