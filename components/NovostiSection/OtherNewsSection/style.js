import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  min-height: 400px;
  background: linear-gradient(
    180deg,
    rgba(199, 199, 199, 0.1) 0%,
    rgba(242, 242, 242, 0) 100%
  );
  padding-top: 35px;
  @media only screen and (max-width: 820px) {
  }
`;
export const WrapTitle = styled.div`
  width: 350px;
  margin: 0 auto 65px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 820px) {
  }
`;
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

export const Title = styled.div`
  color: var(--color-boja-marikomerc-plava);
  text-align: center;
  /* H2 */
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;

  line-height: 120%; /* 48px */
  margin-top: 15px;
  @media only screen and (max-width: 820px) {
  }
`;
export const BlueLine = styled.div`
  background: var(--color-svj-plava);
  width: 85px;
  height: 3px;
  @media only screen and (max-width: 600px) {
  }
`;

export const Naslov = styled.div`
  position: relative;
  color: var(--color-boja-marikomerc-plava);
  /* H3 */
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 36px */
  text-transform: uppercase;
  @media only screen and (max-width: 820px) {
  }
`;
