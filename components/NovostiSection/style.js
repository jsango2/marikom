import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  background: ${(props) => (props.background ? `#FAF8F8` : `white`)};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  padding: 130px 0;
  z-index: ${(props) => (props.zIndex === "Peru" ? `2` : `0`)};
  @media only screen and (max-width: 820px) {
    padding: 70px 25px 30px 25px;
  }
  @media only screen and (max-width: 430px) {
    padding: 70px 25px 30px 15px;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1206px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const WrapCards = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* overflow: hidden; */
  @media only screen and (max-width: 820px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  /* identical to box height, or 48px */

  color: #1e1e1e;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  /* identical to box height, or 29px */

  /* Gray 5 */

  color: #e0e0e0;
  margin-left: 8px;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
export const WrapTitleSubTitle = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  @media only screen and (max-width: 1250px) {
    align-items: center;
    flex-direction: unset;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 850px) {
    margin-left: 15px;
  }
`;

export const FeaturedImage = styled.div`
  position: relative;
  z-index: 10;
  width: 70%;
  height: 370px;
  /* align-items: center; */
  /* overflow: hidden; */
  margin: 42px auto;
  @media only screen and (max-width: 630px) {
    width: 100%;
    margin-top: 0;
  }
`;
export const TextSection = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 200px;
  height: auto;
  /* align-items: center; */
  /* overflow: hidden; */
  background: linear-gradient(
    180deg,
    rgba(199, 199, 199, 0.1) 0%,
    rgba(242, 242, 242, 0) 100%
  );
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 35px 0 75px 0;
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapContent = styled.div`
  position: relative;
  z-index: 10;
  width: 70%;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 34px;
  @media only screen and (max-width: 850px) {
    flex-direction: column;

    width: 100%;
    padding: 0 20px;
  }
`;

export const TitleBlock = styled.div`
  position: relative;
  z-index: 10;
  width: 35%;
  height: auto;
  min-height: 100px;
  left: 20px;
  /* align-items: center; */
  /* overflow: hidden; */

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 60%;
  height: auto;
  min-height: 100px;

  color: var(--color-sunrise-text-grey, #605866);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.5%; /* 25.65px */
  overflow: hidden;
  & figure {
    margin: 0 !important;
  }
  & img {
    margin: 0 auto;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  & p {
    margin: 1.5rem 0;
  }
  & figure iframe {
    width: 90vw;
    height: 56vw;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
  @media only screen and (max-width: 430px) {
    width: 90vw;
  }
`;
export const Datum = styled.div`
  position: relative;
  font-family: Gilroy;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 16.8px */
  text-transform: uppercase;
  color: var(--color-siva);
  @media only screen and (max-width: 820px) {
  }
`;
export const Naslov = styled.div`
  position: relative;
  color: var(--color-boja-marikomerc-plava);
  /* H3 */
  font-family: "Roboto Condensed", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 36px */
  text-transform: uppercase;
  @media only screen and (max-width: 820px) {
  }
`;
