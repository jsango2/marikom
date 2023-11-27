import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1088px;
  width: 90%;
  height: auto;
  /* background: grey; */
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-wrap: wrap;
  /* overflow: hidden; */
  @media only screen and (max-width: 650px) {
    margin-bottom: 60px;
  }
`;
