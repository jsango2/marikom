import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
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
