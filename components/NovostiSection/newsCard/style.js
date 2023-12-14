import Link from "next/link";
import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 273px;
  height: 197px;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 15px;
  /* overflow: hidden; */
  @media only screen and (max-width: 920px) {
    width: 230px;
  }
  @media only screen and (max-width: 820px) {
    width: 95%;
    margin: 15px 15px;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1206px;
  height: 197px;
  background: grey;

  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;

export const BlueLine = styled.div`
  position: absolute;
  z-index: 10;
  width: 6px;
  height: 61px;
  background: #4299c8;
  top: 18px;
  left: -20px;
  border-radius: 1px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.875px;

  /* SUNRISE / Charcoal */

  color: #37313c;
  @media only screen and (max-width: 600px) {
  }
`;

export const Text = styled.h3`
  width: 90%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 136.5%;
  /* or 22px */

  letter-spacing: 0.875px;

  /* SUNRISE / Text Grey */
  margin-top: 5px;
  color: #605866;
  @media only screen and (max-width: 600px) {
  }
`;
export const Datum = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.875px;

  /* SUNRISE / Dark Grey */

  color: #aea8b3;
  @media only screen and (max-width: 600px) {
  }
`;
export const ViseInfo = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 185%;
  /* identical to box height, or 26px */

  /* SUNRISE/Coral */
  width: 160px;
  color: #4299c8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;
  a {
    color: #4299c8;
    width: 85%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const LinkInfo = styled(Link)`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 185%;
  /* identical to box height, or 26px */

  /* SUNRISE/Coral */
  width: 150px;
  color: #4299c8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;
  /* a {
    color: #4299c8;
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */
  @media only screen and (max-width: 600px) {
  }
`;
