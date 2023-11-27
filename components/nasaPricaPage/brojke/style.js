import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  min-height: 699px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background: white;
  padding-top: 85px;
  padding-bottom: 85px;
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(21, 28, 50, 0.6);

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
export const OverlayTop = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 432px;
  top: 0;
  background: linear-gradient(180deg, #111729 0.76%, rgba(21, 28, 50, 0) 100%);

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  width: 1300px;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
    height: auto;
  }
`;
