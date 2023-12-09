import styled from "styled-components";

export const WrapAll = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1440px;
  height: auto;
  color: black;
  display: flex;

  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  /* overflow: hidden; */
  /* padding-bottom: 50px; */
  padding: 50px 0px;
  margin: 0 auto;
  @media only screen and (max-width: 900px) {
    padding: 0px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;

    width: 100vw;
  }
`;
export const NoInput = styled.div`
  margin-top: 30px;
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-plava);
  font-family: Gilroy;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */

  @media only screen and (max-width: 600px) {
  }
`;
export const DropdownMobile = styled.div`
  margin-top: 0px;
  position: relative;
  z-index: 10;
  width: 100vw;
  text-align: center;
  background-color: green;
  padding: 5px 0;
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
`;
export const ButtonsWrapDesktop = styled.div`
  position: relative;
  z-index: 10;
  width: 270px;
  min-width: 200px;
  height: auto;
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  margin-right: 10px;

  /* overflow: hidden; */
  /* padding-bottom: 50px; */

  padding-bottom: 30px;
  button {
    margin: 1px;
    background: var(--color-svj-plava);
    border: 0px;
    color: white;
    height: auto;
    text-align: left;
    cursor: pointer;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    padding: 10px 10px;
  }
  button:hover {
    background: #2f3e66;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const ButtonsWrapMobile = styled.div`
  position: fixed;
  z-index: 12;
  /* width: 100vw; */
  min-width: 200px;
  height: auto;
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  /* margin-right: 10px; */
  top: 70px;
  /* overflow: hidden; */
  /* padding-bottom: 50px; */
  background-color: white;
  padding-bottom: 30px;
  button {
    width: 100vw;
    margin: 1px;
    background: var(--color-svj-plava);
    border: 0px;
    color: white;
    height: auto;
    text-align: left;
    cursor: pointer;
    font-family: Gilroy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    padding: 10px 30px;
  }
  button:hover {
    background: #2f3e66;
  }
  @media only screen and (max-width: 600px) {
  }
`;
export const Kontakt = styled.div`
  position: relative;
  z-index: 10;
  width: 190px;
  height: auto;

  display: flex;

  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  margin-left: 30px;
  flex-direction: column;
  /* overflow: hidden; */
  /* padding-bottom: 50px; */
  color: var(--color-boja-marikomerc-plava, #1c2640);

  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 153%; /* 21.42px */
  a {
    text-decoration: none;
    color: var(--color-boja-marikomerc-plava, #1c2640);
  }
  @media only screen and (max-width: 600px) {
  }
`;

export const ProizvodWrap = styled.div`
  position: relative;
  z-index: 10;
  width: 160px;
  height: 160px;
  color: black;
  display: flex;

  justify-content: center;
  align-items: center;

  /* overflow: hidden; */
  /* padding-bottom: 50px; */

  padding: 5px 20px;
  background-color: white;
  margin: 3px;
  @media only screen and (max-width: 600px) {
  }
`;
export const TrakaSearch = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 73px;

  /* overflow: hidden; */
  /* padding-bottom: 50px; */

  background: radial-gradient(
    107.92% 107.92% at 1.33% 0%,
    #253151 0%,
    #101628 100%
  );
  padding-left: 30px;
  padding-right: 70px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    height: 100px;
    /* min-height: 100px; */
    /* padding-right: 2%; */
    flex-direction: column;

    justify-content: center;
    padding: 0;
  }
`;
export const Search = styled.div`
  position: relative;
  z-index: 10;
  margin-left: auto;
  display: flex;
  align-items: center;
  width: 200px;
  justify-content: center;
  input {
    width: 176px;
    height: 30px;
    padding-left: 35px;
    font-style: italic;
  }
  input:focus {
    outline: none;
  }
  @media only screen and (max-width: 600px) {
    margin: 0;

    input {
      width: 55%;
      height: 23px;
    }
  }
`;
export const WrapLupa = styled.div`
  position: relative;
  z-index: 10;
  left: 29px;
  top: 3px;
  opacity: 0.7;
  @media only screen and (max-width: 600px) {
    position: absolute;
    left: 33px;
    top: 7px;
  }
`;
export const Divider = styled.div`
  position: relative;
  z-index: 10;
  height: 40px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    /* display: none; */
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
export const WrapProizvodiPagination = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1150px;
  width: 80%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    width: 100vw;
    padding-bottom: 50px;
  }
`;
export const NazivKategorije = styled.div`
  position: relative;
  z-index: 10;
  color: var(--color-boja-marikomerc-bijela);

  /* H2 */
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 48px */
  text-transform: uppercase;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Placeholder = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  color: black;
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  color: darkgray /* overflow: hidden; */ /* padding-bottom: 50px; */;
  opacity: 0.6;
  @media only screen and (max-width: 600px) {
  }
`;

export const WrapProizvodi = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
  }
`;
