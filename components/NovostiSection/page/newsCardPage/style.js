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
  margin: 0 0 50px 0;
  /* overflow: hidden; */
  cursor: pointer;
  &:hover .newsArrow {
    left: 15px;
  }
  & div.newsCardPhoto {
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in-out;
    transform: scale(1);
  }

  &:hover .newsCardPhoto {
    transform: scale(1.04);
  }
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
    padding-left: 10px;
  }
`;
export const Photo = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 250px;
  background: white;
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
  border-radius: 2px;
  /* overflow: hidden; */
  @media only screen and (max-width: 600px) {
    width: 3px;
    top: 40px;
    left: -4px;
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
  text-transform: uppercase;
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
  p {
    margin-bottom: 0;
  }
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
  margin-bottom: 0;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
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
  margin-top: 10px;
  cursor: pointer;
  a {
    color: #4299c8;
    width: 85%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .newsArrow {
    position: relative;
    width: 50px;
    left: 0;
    transition: all 0.5s ease-in-out;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const LinkInfo = styled.div`
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
  margin-top: 0px;
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
