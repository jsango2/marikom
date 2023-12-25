import styled from "styled-components";

export const ContactSectionWrapper = styled.div`
  place-self: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  place-items: center;
  padding: 0 0 15rem 0;
  place-self: center;
  margin: 130px auto;
  @media only screen and (max-width: 430px) {
    margin: 130px auto 70px auto;
    padding: 0;
  }
`;

export const ContactSectionHeadingOne = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  max-width: 34rem;
  place-self: center;
  position: relative;
  gap: 2rem;
  padding: 0 1rem;

  &::before {
    position: absolute;
    display: block;
    width: 5.3125rem;
    height: 0.1875rem;
    content: "";
    top: -1.25rem;
    background: #4299c8;
  }
  p {
    font-size: clamp(1rem, 1.125rem, 2vw);
    font-style: normal;
    font-weight: 400;
    line-height: 142.5%;
    color: #1c2640;
    font-family: Gilroy;
  }

  a {
    font-weight: bold;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: #1c2640;
    transition: all 250ms ease;

    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 0.1rem;
      left: 0;
      bottom: 0;
      background: #4299c8;
      transition: all 250ms ease;
      transform-origin: center;
    }
    &:hover {
      color: #4299c8;
      &::after {
        width: 100%;
      }
    }
  }
`;

export const ContactSectionHeadingTwo = styled.h2`
  font-size: clamp(1rem, 1.875rem, 2vw);
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  color: #b5d3e3;
  padding: 0 1rem;
  max-width: 60ch;
  text-decoration: none;
  font-family: Gilroy;
`;

export const ContactSectionImageStack = styled.div`
  display: flex;
  justify-content: center;
  place-self: center;
  gap: 1.4rem;
  flex-flow: row wrap;
  padding: 0 1rem;
`;

export const ContactSectionImage = styled.div`
  background: url(${(props) => props.imagesource});
  width: clamp(12rem, 24rem, 25rem);
  height: 28rem;
  background-size: cover;

  aspect-ratio: 9 / 16;
  background-repeat: no-repeat;
  transition: all 1s ease;
  background-position: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    position: absolute;
    width: 100%;
    height: 35%;
    background: rgba(225, 225, 225, 0.5);
    content: "";
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    transition: all 1s ease;
    text-align: center;
  }

  &:hover {
    background-size: cover;
    transform: scale(1.02);
  }

  /* &:hover::after {
    transform: translateY(0);
    backdrop-filter: blur(2px);
    content: "Content";
  } */
  @media only screen and (max-width: 630px) {
    height: 24rem;
  }
`;
