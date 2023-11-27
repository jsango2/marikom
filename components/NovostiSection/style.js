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
  padding: 130px;
  z-index: ${(props) => (props.zIndex === "Peru" ? `2` : `0`)};
  @media only screen and (max-width: 820px) {
    padding: 70px 10px;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1206px;
  height: auto;
  display: flex;
  justify-content: space-between;

  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
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
  }
`;
export const WrapTitleSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1250px) {
    align-items: center;
    flex-direction: unset;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 850px) {
    margin-left: 15px;
  }
`;
