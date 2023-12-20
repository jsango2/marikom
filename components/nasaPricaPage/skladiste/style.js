import styled from "styled-components";

export const WrapSkladiste = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 437px;

  background: white;

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
export const BlueLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 15px;

  background: #4299c8;

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
