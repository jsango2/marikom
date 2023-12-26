import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const generateImageStyles = (
  imageSource,
  transformAmount,
  animationDelay,
  isIntersecting
) => styled.div`
  background: url(${imageSource});

  opacity: 0;
  ${isIntersecting &&
  css`
    animation: ${fadeIn} 1s ease forwards ${animationDelay + "s"};
  `}

  transition: all 1s ease;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 9 / 16;
  width: clamp(12rem, 30vw, 15rem);

  @media only screen and (min-width: 1440px) {
    transform: translateY(${transformAmount});
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MainSectionWrapper = styled.div`
  max-width: 90%;
  margin: 90px auto;

  display: flex;
  flex-direction: column;
  place-items: start;
  place-self: center;
  @media only screen and (max-width: 430px) {
    margin-top: 0px;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  @media only screen and (min-width: 1440px) {
    gap: 1rem;
  }

  @media only screen and (min-width: 768px) {
    gap: 2rem;
  }
  gap: 3rem;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const Breadcrumbs = styled.div`
  text-transform: uppercase;

  color: #1c2640;
  /* Roboto 16 nadnaslov */
  font-family: "Roboto Condensed";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const SectionHeadlineSpan = styled.span`
  width: 0.375rem;
  height: 6.3125rem;
  background: #4299c8;
  display: block;
  position: absolute;
  top: 16%;
  left: -5%;
`;

export const SectionHeadlineText = styled.div`
  h2 {
    font-size: clamp(2rem, 3.4375rem, 3vw);

    line-height: 120%;
    max-width: 35rem;
    text-transform: uppercase;
    white-space: pre-line;

    color: #1c2640;
    /* H1 */
    font-family: "Roboto";

    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 66px */
    text-transform: uppercase;
    margin: 0;
  }
`;

export const SectionBreadcrumbsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: start;
  gap: 0.25rem;
  position: relative;
`;

export const SectionBodyText = styled.div`
  display: grid;
  gap: 1rem;
  place-items: start;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 1440px) {
    flex-basis: 28rem;
  }

  flex-shrink: 0;
  width: 100%;
  margin: 1rem 0 0 0;
  p {
    color: #1c2640;
    max-width: 120ch;
    font-size: clamp(0.5rem, 1rem, 1rem);
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    font-family: Gilroy;
  }
`;

export const SectionSvgOne = styled.div`
  background: url("../svg-sutra/12.svg");
  @media only screen and (min-width: 1440px) {
    width: 10.98681rem;
    height: 5.70513rem;
    bottom: -10%;
    left: 5%;
  }
  opacity: 0.35;
  width: 5rem;
  height: 2.5rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  @media only screen and (min-width: 768px) {
    bottom: -9%;
  }
  bottom: -10%;
  z-index: -1;
  left: 35%;
`;

export const SectionSvgTwo = styled.div`
  background: url("../svg-sutra/13.svg");
  @media only screen and (min-width: 1440px) {
    width: 23.58138rem;
    height: 7.624rem;
    bottom: -20%;
    left: 15%;
  }
  width: 11rem;
  height: 3.5rem;
  opacity: 0.35;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;

  bottom: -12%;
  z-index: -1;
  left: 40%;
`;

const SectionImagesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  width: auto;

  @media only screen and (max-width: 1440px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const SectionImages = (props) => {
  const sourceArray = [
    {
      src: "../main-section-img/09.jpg",
      transformAmount: "-25%",
    },
    {
      src: "../main-section-img/10.jpg",
      transformAmount: "-10%",
    },
    {
      src: "../main-section-img/11.jpg",
      transformAmount: "-35%",
    },
  ];

  return (
    <SectionImagesContainer>
      {sourceArray.map((singleImageSource, index) => {
        const StyledImage = generateImageStyles(
          singleImageSource.src,
          singleImageSource.transformAmount,
          index * 0.25 + 0.25,
          // eslint-disable-next-line react/prop-types
          props.isIntersecting
        );
        return <StyledImage key={index} />;
      })}
    </SectionImagesContainer>
  );
};
