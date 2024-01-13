import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1100px;
  width: 100%;
  height: auto;

  /* overflow: hidden; */
  margin: 90px auto;
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 650px) {
    margin-top: 0;
  }
`;
export const FeaturedNews = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 90px;
  /* overflow: hidden; */
  @media only screen and (max-width: 1250px) {
    justify-content: space-around;
  }
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 0px;
    background-color: #e8e8e8;
  }
`;
export const Pagination = styled.div`
  position: relative;
  z-index: 10;
  margin: 30px auto 0 auto;
  width: 700px;
  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`;
export const News = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1440px;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  /* overflow: hidden; */
  @media only screen and (max-width: 1350px) {
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
  border-radius: 3px;
  overflow: hidden;
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const Right = styled.div`
  position: relative;
  z-index: 10;
  width: 45%;
  height: 323px;
  padding-top: 50px;
  /* overflow: hidden; */
  @media only screen and (max-width: 650px) {
    padding-top: 20px;

    width: 100%;
    height: auto;

    min-height: 300px;
  }
`;
