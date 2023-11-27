import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(234, 234, 234, 0.68) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1400px;
  height: 100%;
  margin-top: 100px;
  /* display: flex;
  justify-content: space-between; */
  /* overflow: hidden; */
  padding-bottom: 65px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
  @media only screen and (max-width: 850px) {
    padding-bottom: 0;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 140%;

  top: ${(props) => props.percentage * 70 - 50}px;

  /* display: flex;
  justify-content: space-between; */
  /* overflow: hidden; */

  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;

export const BlueLine = styled.div`
  position: relative;
  z-index: 10;
  height: 2px;
  width: 1206px;
  background: var(--color-boja-marikomerc-plava);
  margin: 25px auto 25px auto;
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  margin: 0 auto 90px auto;
  @media only screen and (max-width: 1200px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 26px;
    margin: 0 auto 70px auto;
  }
`;
export const BoldTitle = styled.h3`
  color: var(--color-boja-marikomerc-plava);
  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 850px) {
  }
`;
export const Name = styled.h2`
  color: var(--color-boja-marikomerc-plava);
  text-align: center;

  /* P */
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 420px) {
  }
`;
export const WrapColumns = styled.div`
  position: relative;
  z-index: 10;
  width: 1190px;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px auto 0 auto;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;
export const WrapUp = styled.div`
  position: relative;
  z-index: 10;
  width: 1100px;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto 0 auto;
  @media only screen and (max-width: 1200px) {
  }
`;
export const WrapDown = styled.div`
  position: relative;
  z-index: 10;
  width: 800px;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px auto 0 auto;
  @media only screen and (max-width: 1200px) {
  }
`;
export const Box = styled.div`
  position: relative;
  z-index: 10;
  width: 230px;
  height: auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1200px) {
  }
`;
export const Column = styled.div`
  position: relative;
  z-index: 10;
  width: 200px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    width: 149px;
  }
`;
export const Divider = styled.div`
  position: relative;
  z-index: 10;
  width: 147px;
  height: 2px;
  background-color: #b5d3e3;
  margin: 5px auto;
  @media only screen and (max-width: 600px) {
  }
`;

export const Kontakt = styled.a`
  cursor: pointer;
  text-decoration: none;
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  text-align: center;

  /* MK Plava */

  color: #1c2640;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapAccordionContacts = styled.div`
  position: relative;
  z-index: 10;
  padding-left: 10px;
  display: flex;
  @media only screen and (max-width: 600px) {
  }
`;
export const AccordionContact = styled.div`
  position: relative;
  z-index: 10;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* MK Plava */

  color: #1c2640;
  margin: 5px 0;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
export const AccordionContactBlock = styled.div`
  position: relative;
  z-index: 10;
  margin-right: 30px;
  @media only screen and (max-width: 600px) {
  }
`;
