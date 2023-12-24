import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const WrapAll = styled.div`
  position: relative;
  z-index: 0;
  min-height: 617px;
  height: auto;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;

  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 133px;
  overflow: hidden;
  z-index: 0; */
  overflow: hidden;
  padding-top: 75px;
  padding-bottom: 75px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  @media only screen and (max-width: 850px) {
    padding: 0 0 70px 0;

    /* height: 556px; */
  }
`;
// export const CardContainer = styled.div`
//   position: relative;
//   z-index: 0;

//   height: auto;
//   width: 1440px;
//   margin: 0 auto;
//   @media only screen and (max-width: 850px) {
//     padding: 0 0 70px 0;

//     /* height: 556px; */
//   }
// `;
