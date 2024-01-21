import styled from "styled-components";

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: absolute;
  top: 60px;
  z-index: 10;
  right: 50%;
  transform: translate(50%, 0);
  width: 90%;
  height: 400px;
  border-radius: 0 0 39px 39px;
  background: #191b26;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    padding-left: 38px;
  }
`;
export const WrapLeftBlock = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const WrapRightBlock = styled.div`
  margin-top: 8px;
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapBlock = styled.div`
  position: relative;
  z-index: 10;

  display: flex;

  width: 100%;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
