import styled from "styled-components";

export const WrapAllCertifikati = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  /* background: #1c2640; */

  padding: 51px 0 69px 0;
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;

export const ContentWrap = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1440px;
  height: 542px;
  display: flex;
  margin: 0 auto;
  border-radius: 3px;
  flex-direction: column;
  overflow: scroll;
  justify-content: flex-start;
  align-items: flex-start;
  /* background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #2b3a63 0%,
    #101628 100%
  ); */
  padding: 80px 0 0 80px;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }
  @media only screen and (max-width: 850px) {
    /* padding-top: 40px;
    height: auto; */
  }
`;
