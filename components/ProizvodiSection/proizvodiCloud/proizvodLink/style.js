import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;

  /* background: grey; */

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  /* overflow: hidden; */
  height: 32px;
  min-width: 80px;
  /* SUNRISE/Sunray */

  background: #f5faff;
  border-radius: 5px;
  margin: 8px 8px;
  padding: 0 20px;
  @media only screen and (max-width: 650px) {
    height: 27px;
  }
`;

export const Text = styled.div`
  position: relative;
  z-index: 10;

  /* background: grey; */

  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  text-align: center;

  /* SUNRISE/Coral */

  color: #4299c8;
  a {
    text-decoration: none;
    color: #4299c8;
  }
  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;
