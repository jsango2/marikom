import styled from "styled-components";

export const WrapAll = styled.div`
  position: absolute;
  top: -3px;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 68px;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const WrapImage = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
