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
    padding: 0px;
  }
  @media only screen and (max-width: 650px) {
    padding: 0px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  max-width: 1340px;
  margin: 0 auto 0 auto;
  padding: 54px 0 0 55px;

  justify-content: space-around;
  @media only screen and (max-width: 850px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  width: 600px;
  height: 510px;
  overflow: hidden;
  border-radius: 3px;
  @media only screen and (max-width: 850px) {
    width: 100vw;
    height: 60vw;
    flex-direction: column;
  }
`;
export const Data = styled.div`
  position: relative;
  z-index: 11;
  display: flex;

  width: 634px;
  min-height: 200px;
  @media only screen and (max-width: 1100px) {
    padding: 30px 30px 40px 25px;
  }
`;
