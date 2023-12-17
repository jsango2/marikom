import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`

  to {
    opacity: 1;
    transform: translateX(0);
    transform: translateY(0);
  }
`;

const generateImageStyles = (imageSource, animationDelay) => styled.div`
  background: url(${imageSource});
  animation: ${fadeIn} 1s ease forwards ${animationDelay + "s"};
  transform: translateX(-25%);
  transform: translateX(-5%);
  display: block;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 9 / 16;
  width: 100%;
  opacity: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  height: clamp(25vh, 40vh, 60.625rem);
  display: flex;
  place-items: center;
  place-self: center;
  flex-wrap: nowrap;
  /* overflow-x: scroll; */
  scroll-snap-type: x mandatory;
  &-webkit-scrollbar {
    display: none;
  }

  overflow: hidden;
`;

export const Header = () => {
  const sourceArray = [
    "../header-img/01.jpg",
    "../header-img/02.jpg",
    "../header-img/03.jpg",
    "../header-img/04.jpg",
    "../header-img/05.jpg",
  ];

  return (
    <HeaderWrapper>
      {sourceArray.map((singleImageSource, index) => {
        const StyledImage = generateImageStyles(
          singleImageSource,
          index * 0.25 + 0.25
        );
        return <StyledImage key={index} />;
      })}
    </HeaderWrapper>
  );
};
