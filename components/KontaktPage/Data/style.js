import styled from "styled-components";

export const WrapAllContactData = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 846px;

  /* display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center; */

  @media only screen and (max-width: 850px) {
    padding-top: 40px;
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: space-evenly;
  max-width: 1440px;
  margin: 0 auto;
  padding: 84px 0 0 25px;
  @media only screen and (max-width: 1300px) {
    padding: 70px 100px;
  }
`;
