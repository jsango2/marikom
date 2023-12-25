import styled from "styled-components";
import Link from "next/link";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  font-size: ${(props) => (props.isFeatured ? "30px" : "16px")};
  width: ${(props) => (props.isFeatured ? "300px" : "340px")};

  height: ${(props) => (props.isFeatured ? "197px" : "auto")};
  color: black;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 40px 0;
  /* overflow: hidden; */
  @media only screen and (max-width: 820px) {
    width: 230px;
  }
  @media only screen and (max-width: 820px) {
    width: 95%;
    margin: 20px 15px;
  }
  @media only screen and (max-width: 650px) {
    margin: 30px 15px 20px 15px;
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
export const DataContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 90%;
  height: auto;
  margin-top: 10px;
  padding-left: 30px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 250px;
  background: white;
  border-radius: 3px;
  overflow: hidden;
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
  top: ${(props) => (props.isFeatured ? "18px" : "34px")};
  left: 0px;
  border-radius: 1px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
  }
`;
export const Title = styled.h1`
  font-size: ${(props) => (props.isFeatured ? "30px" : "16px")};
  font-family: "Roboto Condensed", sans-serif;
  color: var(--boja-color-marikomerc-plava);

  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 36px */

  /* SUNRISE / Charcoal */

  color: #37313c;
  margin-top: 5px;
  @media only screen and (max-width: 600px) {
  }
`;

export const Text = styled.h3`
  color: var(--color-sunrise-text-grey);
  font-family: Gilroy;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 136.5%; /* 21.84px */
  letter-spacing: 0.875px;
  width: 100%;
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
  width: 120px;
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
