import Link from "next/link";
import styled, { keyframes } from "styled-components";

// {const adsAnimation = keyframes
// to {
//   transform: translateY(0);
//   opacity: 1;
// }`;}

export const AdSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-self: center;
  width: 100%;
  margin-top: 40px;
`;

export const AdSectionHeader = styled.h2`
  color: #1c2640;
  text-align: center;
  position: relative;
  max-width: 100vw;
  font-size: clamp(1rem, 2.5rem, 3vw);
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  &::before {
    position: absolute;
    display: block;
    width: 5.3125rem;
    height: 0.1875rem;
    content: "";
    background: #4299c8;
    left: 50%;
    transform: translateX(-50%) translateY(-1rem);
  }
`;

export const AdSectionTabs = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 0.63rem;
  max-width: 90vw;
  place-self: center;
`;

export const AdSectionTab = styled.p`
  color: ${(props) => (props.active ? "#4299c8" : "#1c2640")};
  font-size: clamp(0.5rem, 1.125rem, 3vw);
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%;
  cursor: pointer;
  transition: all 350ms ease;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    background: #4299c8;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 0.15rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: center;
    transition: all 350ms ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const AdSectionAdContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;
  margin-top: 3.85rem;
  place-items: start;
`;

export const AdSectionInnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-basis: auto;

  width: 100%;
  gap: 1.5rem;
  @media only screen and (min-width: 1440px) {
    flex-basis: 36rem;
    gap: 1rem;
  }
  @media only screen and (max-width: 430px) {
    gap: 0.5rem;
  }

  place-items: center start;
`;

export const AdSectionSpanBodyWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 1rem 0;
  width: 100%;

  @media only screen and (min-width: 875px) {
    width: 50%;
  }
  @media only screen and (max-width: 430px) {
    width: 85%;
  }
  @media only screen and (max-width: 400px) {
    gap: 2rem;
  }
`;

export const AdSectionSingleAd = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-between;
  padding: 0 3rem;
  /* transform: translateY(-50%); */
  opacity: 1;
  /* animation: ${adsAnimation} 1s ease forwards; */
  /* animation-delay: ${(props) => props.delay + "s"}; */
  @media only screen and (max-width: 1440px) {
    justify-content: center;

    padding: 0 2rem;
  }

  place-items: center;
  width: 100%;
  height: 223px;
  background: linear-gradient(
    180deg,
    rgba(199, 199, 199, 0.1) 0%,
    rgba(242, 242, 242, 0) 100%
  );

  span {
    color: #b5d3e3;
    flex-shrink: 0;
    font-size: clamp(5rem, 10rem, 3vw);
    font-style: normal;
    font-weight: 900;
    line-height: 120%;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 430px) {
    padding: 0rem;
    width: 95vw;
    span {
      font-size: 54px;
    }
  }
`;

export const SingleAdTitle = styled.div`
  display: flex;

  flex-direction: column;
  p {
    font-size: clamp(0.75rem, 1.125rem, 1.5vw);
    text-transform: uppercase;
    color: #4299c8;
  }

  h2 {
    max-width: 500px;
    color: #1c2640;
    font-family: "Gilroy";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 36px */
  }
  @media only screen and (max-width: 430px) {
    h2 {
      font-size: 24px;
    }
  }
`;
export const SingleAdBodyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.25rem 0;

  p {
    width: 100%;
    color: #1c2640;
    /* B 18 */
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 142.5%; /* 25.65px */
  }
  @media only screen and (max-width: 430px) {
    p {
      font-size: 16px;
    }
  }
`;

export const AdSectionActionButton = styled.div`
  width: clamp(5rem, 12rem, 12rem);
  border-radius: 0.25rem;
  background: #4299c8;
  border: 0;
  outline: 0;
  color: #fff;
  cursor: pointer;
  font-size: clamp(1rem, 1.125rem, 2vw);
  font-style: normal;
  font-weight: 700;
  line-height: 142.5%;
  height: 2.65rem;
  padding: 0.25rem 0.5rem;
  transition: all 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    transform: scale(0.95);
    background: #b5d3e3;
  }

  @media only screen and (max-width: 880px) {
    place-self: start;
  }
  @media only screen and (max-width: 430px) {
    height: 30px;
    width: 160px;
    font-size: 15px;
  }
`;

export const AdSectionBanner = styled.div`
  background: url(${(props) => props.logosource});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 10rem;

  width: clamp(12rem, 24rem, 40rem);
  flex-shrink: 0;
  display: block;
  height: 100%;
  @media only screen and (max-width: 899px) {
    display: none;
  }

  @media only screen and (min-width: 1440px) {
    width: clamp(12rem, 32rem, 40rem);
  }
`;
