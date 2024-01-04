import styled from "styled-components";

export const WrapAllDiMaris = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 200px;
  height: auto;
  padding: 40px 40px 80px 40px;
  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */
  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
  @media only screen and (max-width: 850px) {
    padding-top: 40px;
  }
  @media only screen and (max-width: 650px) {
    padding: 0px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  max-width: 1440px;
  margin: 0 auto;
  padding: 54px 0 0 25px;

  justify-content: space-between;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  width: 700px;
  height: 510px;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
export const Data = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  width: 634px;
  min-height: 200px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
