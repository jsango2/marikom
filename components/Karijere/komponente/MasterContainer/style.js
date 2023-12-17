import styled from "styled-components";

export const MasterContainerWrapper = styled.div`
  margin: 5.37rem auto 0 auto;
  max-width: 100vw;
  /* display: grid; */
  grid-template-columns: repeat(1, 1fr);
  place-items: start;
  // osnovni razmak svega na ekranu
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    gap: 8rem;
  }
  gap: 5rem;
`;
