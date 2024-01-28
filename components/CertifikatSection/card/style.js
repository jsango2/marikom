import styled from "styled-components";

export const WrapCard = styled.div`
  position: relative;
  z-index: 10;
  width: 270px;
  height: 474px;
  /* background: grey; */
  display: flex;
  border-radius: 5px;
  border: 1px solid #f5faff36;
  align-items: center;
  flex-direction: column;
  &.inViewCert {
    top: 0px;
    opacity: 1;
    transition: all 1s ease-out;
  }
  &.inViewCert:nth-child(1) {
    transition-delay: 400ms;
  }
  &.inViewCert:nth-child(2) {
    transition-delay: 800ms;
  }
  &.inViewCert:nth-child(3) {
    transition-delay: 1200ms;
  }
  &.outViewCert {
    top: 45px;
    opacity: 1;
  }
  /* overflow: hidden; */
  /* padding: 70px 0 130px 0; */
  margin: 0 10px;
  @media only screen and (max-width: 800px) {
    margin: 20px 0px;
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    &.inViewCert:nth-child(1) {
      transition-delay: 0ms;
    }
    &.inViewCert:nth-child(2) {
      transition-delay: 0ms;
    }
    &.inViewCert:nth-child(3) {
      transition-delay: 0ms;
    }
  }
`;
export const WrapImage = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  height: 182px;

  display: flex;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 78%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* overflow: hidden; */
  /* padding: 70px 0 130px 0; */
  @media only screen and (max-width: 800px) {
    height: 232px;
  }
`;
export const Title = styled.h3`
  font-family: "Roboto Condensed", sans-serif;
  /* M-H3 */

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
  text-transform: uppercase;
  margin-bottom: 10px;
  @media only screen and (max-width: 850px) {
  }
`;
export const Text = styled.p`
  color: #f5faff;
  /* M-P */
  font-family: Gilroy;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 153%; /* 21.42px */
  @media only screen and (max-width: 430px) {
  }
`;
export const WrapText = styled.div`
  color: #f5faff;
  /* M-P */
  padding: 15px 22px 10px 20px;
  @media only screen and (max-width: 850px) {
  }
`;
export const WrapCerts = styled.div`
  color: #f5faff;
  /* M-P */
  height: 47px;
  width: 234px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 850px) {
  }
`;
