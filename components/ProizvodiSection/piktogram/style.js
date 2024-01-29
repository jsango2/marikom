import styled from "styled-components";

export const WrapAll = styled.div`
  position: absolute;
  top: -3px;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 68px;

  opacity: 0;
  transition: all 2s ease-out;
  transition-delay: 0.5;
  opacity: ${(props) => props.inView && `1`};
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    height: 50px;
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
