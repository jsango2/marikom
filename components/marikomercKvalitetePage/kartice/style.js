import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  min-height: 617px;
  height: auto;
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
  padding-top: 145px;
  @media only screen and (max-width: 1400px) {
    padding: 100px 0 70px 70px;
  }
  @media only screen and (max-width: 850px) {
    padding: 0 0 70px 0;

    /* height: 556px; */
  }
`;
