import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  height: 500px;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */
  overflow: hidden;
  padding-top: 85px;
  @media only screen and (max-width: 1400px) {
  }
  @media only screen and (max-width: 850px) {
    height: 70vw;
    /* height: 556px; */
  }
`;
