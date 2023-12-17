import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`

  to {
    opacity: 1;

  }
`;

export const CompanyLogosWrapper = styled.div`
  display: flex;
  max-width: 80vw;
  place-self: center;
  place-items: center;
  justify-content: center;
  /* flex-flow: row wrap; */
  margin: 0 auto;
  @media only screen and (min-width: 900px) {
    gap: 5rem;
  }
  @media only screen and (min-width: 430px) {
    gap: 2rem;
  }
  gap: 2.5rem;
  padding: 1rem 1.5rem;
`;

export const MarikomercLogo = styled.div`
  background: url("../svg-sutra/06.svg");
  width: min(25vw, 12.5rem);
  height: min(25vh, 7.3125rem);
  aspect-ratio: 1 / 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards 0.25s;
`;

export const DimarisLogo = styled.div`
  background: url("../svg-sutra/07.svg");
  width: min(25vw, 12.5rem);
  height: min(25vh, 7.3125rem);
  aspect-ratio: 1 / 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards 0.5s;
`;

export const MlsLogo = styled.div`
  background: url("../svg-sutra/08.svg");
  width: min(25vw, 12.5rem);
  height: min(25vh, 7.3125rem);
  aspect-ratio: 1 / 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards 0.75s;
`;
