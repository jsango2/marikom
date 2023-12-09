import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 10;
  width: 1100px;
  height: auto;

  /* overflow: hidden; */
  margin: 90px auto;
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;
export const FeaturedNews = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;
export const News = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  position: relative;
  z-index: 10;
  width: 45%;
  height: 323px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
  }
`;
export const Right = styled.div`
  position: relative;
  z-index: 10;
  width: 45%;
  height: 323px;
  padding-top: 50px;
  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
  }
`;
